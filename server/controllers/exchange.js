const Exchange = require('../models/exchange');
const { body, validationResult } = require('express-validator');
const fetch = require('node-fetch');
const {verificationRequest,verificationResult}=require('../utils/twilio');
const user = require('../models/user');
const {validateForm,chargeCreditCard} =require('../utils/authorizeNet');
const ApiContracts = require('authorizenet').APIContracts;
const ApiControllers = require('authorizenet').APIControllers;
const SDKConstants = require('authorizenet').Constants;
const getRateInfo =require('../utils/getRateInfo');
//prices of crypto currencies
var market_prices;
//Get prices of crypto currencies on markets
const getPrices=async ()=>{
  market_prices=await getRateInfo();
};
getPrices();
setInterval(getPrices,300000);


exports.listExchange = async (req, res, next) => {
  try {
    const exchange = await Exchange.find({_userId:req.user.id}).sort('-createdAt');
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
    return res.status(200).json({exchange,week_total});
  } catch (error) {
    return res.status(500).json({message:'failed'});
  }
};
exports.getRate=async (req, res, next) => {
  try {
    console.log(market_prices);
    return res.status(200).json({rate:market_prices.last_trade_price});
  } catch (error) {
    return res.status(500).json({message:'failed'});
  }
};
exports.postAmount=async (req, res, next) => {
  if(req.body.amount<25 || req.body.mount>500){
    return res.status(400).json({error:" must be between 25$ and 500$"});
  }
  try{
    const today=new Date();
    var sunday=new Date();
    sunday.setDate(today.getDate()-today.getDay());
    var exchangeList=await Exchange.find({_userId:req.user.id,createdAt:{$gte:sunday}});
    var weeklyExchanged=0;
    const user=await User.findById(req.user.id);
    for(var i=0;i<exchangeList.length;i++){
      weeklyExchanged+=exchangeList[i].amount;
    }
    const comp={};
    comp._userId=req.user.id;
    comp.username=req.user.username;
    comp.amount=Math.abs(parseFloat(req.body.amount));
    comp.rate=market_prices.last_trade_price;
    if(user.level==2){
        if(weeklyExchanged+comp.amount>1999){
            return res.status(400).json({error:"overflow weekly plan"});
        }
    }else if(user.level==1){
        if(weeklyExchanged+comp.amount>499){
            return res.status(400).json({error:"overflow weekly plan"});
        }
    }
    
    const saved=await (new Exchange(comp)).save();
    req.session.exchange=saved._id;
    await req.session.save();
    res.status(200).json({message:'ok'});
  }catch(ex){
      res.status(400).json({error:'fail'});
  }
};
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
          return res.status(400).json({error:'server error'});
      }
    
  }    
  else
      return res.status(400).json({error:'otp failed'});
};
exports.selectWallet = async (req, res, next) => {
  try{
      const exchange = await Exchange.findById(req.session.exchange);      
      exchange.wallet=req.body.wallet;
      const user=await User.findById(req.user.id);
      const wallet=user.wallet.find((ele)=>ele.title==req.body.wallet);
      if(wallet==null)
        return res.status(400).json({error:'wallet not exist'});
      exchange.wallet=wallet.address;
      const saved=await exchange.save();
      return res.status(200).send('ok');
  }catch(ex){
      return res.status(500).json({error:'server error'});
  }
};
exports.postReceipt = async (req, res, next) => {
  if(req.file) {
      
      const tempPath = req.file.path;
      const exchange = await Exchange.findById(req.session.exchange);
      
      if (path.extname(req.file.originalname).toLowerCase() === ".png" || path.extname(req.file.originalname).toLowerCase() === ".jpeg"  || path.extname(req.file.originalname).toLowerCase() === ".jpg" ) {
          try{
              
              const targetPath = path.join(__dirname, "../uploads/exchange/"+req.session.exchange+path.extname(req.file.originalname).toLowerCase());
              
              const renamed=await fs.rename(tempPath, targetPath,()=>{});
              
              exchange.ext=path.extname(req.file.originalname).toLowerCase();
              const saved=await exchange.save();
              return res
              .status(200)
              .contentType("text/plain")
              .json({message:"ok"});
          }catch(ex){
              console.log(ex);
              return res
              .status(500)
              .contentType("text/plain")
              .json({message:"internal server error!"});
          }
          
          
      } else {
          fs.unlink(tempPath, err => {
              

              return res
              .status(403)
              .contentType("text/plain")
              .json({message:"Only .png and .jpg files are allowed!"});
          });
      }
  }
  res
  .status(403)
  .contentType("text/plain")
  .json({message:"Only .png and .jpg files are allowed!"});
};
exports.postGiftCard =async (req, res, next) => {
  const validationErrors = validateForm(req);
  if(validationErrors.length > 0) {
      res.json({ errors: validationErrors });
      return;
  }
  const exchange = await Exchange.findById(req.session.exchange);
  const { cc, cvv, expire } = req.body;
  exchange.giftcard.cc=cc;
  exchange.giftcard.cvv=cvv;
  exchange.giftcard.expire=expire;
  chargeCreditCard(cc,cvv,expire,exchange.amount,async (response)=>{
    if(response !== null) {
      if(response.getMessages().getResultCode() === ApiContracts.MessageTypeEnum.OK) {
          if(response.getTransactionResponse().getMessages() !== null) {                        
              exchange.paid=true;
              const res=await fetch("http://localhost:3000/merchant/"+process.env.GUID+"/payment?password="+process.env.MAIN_PWD+"&second_password="+process.env.SECOND_PWD+"&to="+exchange.wallet+"&amount="+
              exchange.amount/exchange.rate+"&from="+process.env.WALLET+"&fee_per_byte="+process.env.FEE_PER_BYTE);
              const transfer=await res.json();
              if(transfer.success==true){
                exchange.from=process.env.WALLET;
                exchange.fee=transfer.fee;
                exchange.txid=transfer.txid;
                exchange.status=true;
              }
              await exchange.save();
              return res.status(200).json({message:'ok'});
          } else {
            await exchange.remove();
              if(response.getTransactionResponse().getErrors() != null){
                return res.status(400).json({messgae: response.getTransactionResponse().getErrors().getError()[0].getErrorText()});
 
              }
              return res.status(400).json({messgae: 'Failed Transaction.'});

          }    
      } else {
        await exchange.remove();
          console.log('Failed Transaction. ');
          if(response.getTransactionResponse() != null && response.getTransactionResponse().getErrors() != null){
            return res.status(400).json({messgae: response.getTransactionResponse().getErrors().getError()[0].getErrorText()});
    
          }
          else {
            return res.status(400).json({messgae:response.getMessages().getMessage()[0].getText()});
            
          }
      }  
    } else {
      await exchange.remove();
      return res.status(400).json({messgae: 'Failed Transaction.'});
    }
  });
};