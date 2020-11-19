const Exchange = require('../models/exchange');
const User = require('../models/user');
const Fee=require('../models/fee');
const {verificationRequest,verificationResult}=require('../utils/twilio');
const user = require('../models/user');
const {validateForm} =require('../utils/authorizeNet');
// const ApiContracts = require('authorizenet').APIContracts;
// const ApiControllers = require('authorizenet').APIControllers;
// const SDKConstants = require('authorizenet').Constants;
const getRateInfo =require('../utils/getRateInfo');
const fs=require('fs');
const path=require('path');
const del=require('del');
//prices of crypto currencies
var market_prices;
var start_time=(new Date()).getTime();
//Get prices of crypto currencies on markets
const getPrices=async ()=>{
  start_time=(new Date()).getTime();
  console.log('start_time='+start_time);
  try{
    market_prices=await getRateInfo();
  }catch(err){
    market_prices={last_trade_price:undefined};
  }
};
getPrices();
setInterval(getPrices,30000);

//exchange history
exports.listExchange = async (req, res, next) => {
  try {
    const exchange = await Exchange.find({_userId:req.user.id,status:{'$ne':-1},paid:true}).sort('-createdAt');
    const today=new Date();
    var sunday=new Date();
    //to calculate Sunday of current week
    sunday.setDate(today.getDate()-today.getDay());
    var week_total=0;
    //to sum up all the exchanges in a week
    for(var i=0;i<exchange.length;i++){
        if(new Date(exchange[i].createdAt).getTime()-sunday.getTime()>=0){
            week_total+=parseFloat(exchange[i].amount);
        }else
            break;
    }
    return res.status(200).json({exchange,week_total});
  } catch (error) {
    return res.status(500).json({message:'failed'});
  }
};
//to know how much left in this week
exports.allowedExchange = async (req, res, next) => {
  try {    
    //to get the corrupt exchanges and remove
    const trash = await Exchange.find({_userId:req.user.id,paid:false}).sort('-createdAt');
    for(let i=0;i<trash.length;i++){
      if (fs.existsSync(path.join(__dirname, "../../../admin/uploads/exchange/"+trash[i].id))) {
        await del(path.join(__dirname, "../../../admin/uploads/exchange/"+trash[i].id),{force:true});
      }
      await trash[i].remove();
    }
    //to sum up all the exchanges in a week
    const exchange = await Exchange.find({_userId:req.user.id,status:{'$ne':-1},paid:true}).sort('-createdAt');
    const today=new Date();
    var sunday=new Date();
    sunday.setDate(today.getDate()-today.getDay());
    var week_total=0;
    for(var i=0;i<exchange.length;i++){
        if(new Date(exchange[i].createdAt).getTime()-sunday.getTime()>=0){
            week_total+=parseFloat(exchange[i].amount);
        }else
            break;
    }

    const user=await User.findById(req.user.id);    
    if(user.level===2){
      return res.status(200).json({total:(1999-week_total>500)? 500 : (1999-week_total)});
    }else if(user.level===3){
      return res.status(200).json({total:500});
    }else{
      return res.status(200).json({total:499-week_total});
    }
    
  } catch (error) {
    return res.status(500).json({message:'failed'});
  }
};
//to know the rate
//including fee
exports.getRate=async (req, res, next) => {
  try {
    const tmp=await Fee.findOne({});
    let fee=0;
    if(tmp)
      fee=tmp.fee;
    let current_time=(new Date()).getTime();
    console.log("current_time="+current_time);
    current_time-=start_time;
    console.log("remain="+current_time);
    return res.status(200).json({rate:market_prices.last_trade_price*(100+fee)/100, time:current_time});
  } catch (error) {
    console.log(error);
    return res.status(500).json({message:'failed'});
  }
};
//exchanging step-1
exports.postAmount=async (req, res, next) => {
  try {
    //to sum up all the exchanges in a week
    const exchange = await Exchange.find({_userId:req.user.id,status:{'$ne':-1},paid:true}).sort('-createdAt');
    const today=new Date();
    var sunday=new Date();
    sunday.setDate(today.getDate()-today.getDay());
    var week_total=0;
    for(var i=0;i<exchange.length;i++){
        if(new Date(exchange[i].createdAt).getTime()-sunday.getTime()>=0){
            week_total+=parseFloat(exchange[i].amount);
        }else
            break;
    }
    //to check if it is allowed
    const user=await User.findById(req.user.id);
    var allowed;
    if(user.level===2){
      allowed=(1999-week_total>500)? 500 : (1999-week_total);
    }else if(user.level===3){
      allowed=500;
    }else{
      allowed=499-week_total;
    }
    if(req.body.amount<25 || req.body.mount>allowed){
      return res.status(400).json({message:" must be between 25$ and "+allowed+"$"});
    }  

    //to register the exchange
    const comp={};
    comp._userId=req.user.id;
    comp.username=req.user.username;
    comp.amount=Math.abs(parseFloat(req.body.amount));
    const tmp=await Fee.findOne({});
    //to get the fee
    let fee=0;
    if(tmp)
      fee=tmp.fee;
    comp.rate=market_prices.last_trade_price*(100+fee)/100;    
    const saved=await (new Exchange(comp)).save();
    req.session.exchange=saved._id;
    await req.session.save();
    res.status(200).send(saved._id);
  }catch(ex){
      res.status(400).json({message:'fail'});
  }
};
//Exchange step-2
exports.smsVerify = async (req, res) => {
  const bool=await verificationRequest(req.user.phoneNumber);
  if(bool)
    return res.status(200).send('ok');
  else
    return res.status(500).send('failed');
};

exports.smsResult = async (req, res) => {
  const bool=await verificationResult(req.user.phoneNumber,req.body.code);
  if(bool){
      try{
          const exchange = await Exchange.findById(req.session.exchange);
          exchange.verify=true;
          const saved=await exchange.save();
          return res.status(200).send('ok');
      }catch(ex){
          return res.status(400).json({message:'server error'});
      }
    
  }    
  else
      return res.status(400).json({message:'otp failed'});
};

//Exchange step-3
exports.selectWallet = async (req, res, next) => {
  try{
      
      const user=await User.findById(req.user.id);
      const wallet=user.wallet.find((ele)=>ele.address==req.body.wallet_address);

      if(wallet==null)
        return res.status(400).json({message:'wallet not exist'});
      const exchange = await Exchange.findById(req.session.exchange);      
      exchange.wallet_name=req.body.wallet_name;
      exchange.wallet_address=req.body.wallet_address;
      const saved=await exchange.save();
      return res.status(200).send('ok');
  }catch(ex){
      return res.status(500).json({message:'server error'});
  }
};

//Exchange step-4
exports.postReceipt = async (req, res, next) => {
  if(req.files) {
    try{
      const exchange = await Exchange.findById(req.session.exchange);  
      //to make dir if it is not existed
      if (!fs.existsSync(path.join(__dirname, "../../../admin/uploads/exchange/"))) {
        fs.mkdirSync(path.join(__dirname, "../../../admin/uploads/exchange/"));
      }
      
      fs.mkdirSync(path.join(__dirname, "../../../admin/uploads/exchange/"+req.session.exchange));
      //to move the images
      for(let i=0;i<req.files.length;i++){
        const tempPath = req.files[i].path;     
        const targetPath = path.join(__dirname, "../../../admin/uploads/exchange/"+req.session.exchange+"/"+i+path.extname(req.files[i].originalname).toLowerCase());
        const renamed=fs.renameSync(tempPath, targetPath);
      } 
      return res.status(200).json({message:'ok'});
    }catch(ex){
      console.log(ex);
        return res.status(400).json({message:'fail'});
    } 
  }
  res
  .status(403)
  .contentType("text/plain")
  .json({message:"Only .png and .jpg files are allowed!"});
};

//Exchange step-5
exports.postGiftCard =async (req, res, next) => {
  //to check the card nmber
  const validationErrors = validateForm(req);
  if(validationErrors.length > 0) {
      res.status(400).json({ message: validationErrors });
      return;
  }
  //to finalize the exchange
  const exchange = await Exchange.findById(req.session.exchange);
  const { cc, cvv, expire } = req.body;
  exchange.paid=true;
  exchange.giftcard={};
  exchange.giftcard.cc=cc;
  exchange.giftcard.cvv=cvv;
  exchange.giftcard.expire=expire;
  await exchange.save();
  return res.status(200).json({message:'ok'});
  // chargeCreditCard(cc,cvv,expire,exchange.amount,async (response)=>{
  //   if(response !== null) {
  //     if(response.getMessages().getResultCode() === ApiContracts.MessageTypeEnum.OK) {
  //         if(response.getTransactionResponse().getMessages() !== null) {                        
  //             exchange.paid=true;
  //             const res=await fetch("http://localhost:3000/merchant/"+process.env.GUID+"/payment?password="+process.env.MAIN_PWD+"&second_password="+process.env.SECOND_PWD+"&to="+exchange.wallet+"&amount="+
  //             exchange.amount/exchange.rate+"&from="+process.env.WALLET+"&fee_per_byte="+process.env.FEE_PER_BYTE);
  //             const transfer=await res.json();
  //             if(transfer.success==true){
  //               exchange.from=process.env.WALLET;
  //               exchange.fee=transfer.fee;
  //               exchange.txid=transfer.txid;
  //               exchange.paid=true;
  //             }
  //             await exchange.save();
  //             return res.status(200).json({message:'ok'});
  //         } else {
  //           await exchange.remove();
  //             if(response.getTransactionResponse().getErrors() != null){
  //               return res.status(400).json({messgae: response.getTransactionResponse().getErrors().getError()[0].getErrorText()});
 
  //             }
  //             return res.status(400).json({messgae: 'Failed Transaction.'});

  //         }    
  //     } else {
  //       await exchange.remove();
  //         console.log('Failed Transaction. ');
  //         if(response.getTransactionResponse() != null && response.getTransactionResponse().getErrors() != null){
  //           return res.status(400).json({messgae: response.getTransactionResponse().getErrors().getError()[0].getErrorText()});
    
  //         }
  //         else {
  //           return res.status(400).json({messgae:response.getMessages().getMessage()[0].getText()});
            
  //         }
  //     }  
  //   } else {
  //     await exchange.remove();
  //     return res.status(400).json({messgae: 'Failed Transaction.'});
  //   }
  // });
};