const Kraken = require('kraken-api');
const Exchange=require('../models/exchange');
const {verificationRequest,verificationResult}=require('../utils/twilio');
const {validateForm} =require('../utils/authorizeNet');
const { watch } = require('../models/exchange');
const ApiContracts = require('authorizenet').APIContracts;
const ApiControllers = require('authorizenet').APIControllers;
const SDKConstants = require('authorizenet').Constants;
var key = process.env.KRAKEN_KEY || 'your-api-key';
var secret = process.env.KRAKEN_SECRET || 'your-api-secret';
const kraken       = new KrakenClient(key, secret);
var balance;
var ticker;
setInterval(()=>{
// Display user's balance
 balance=await kraken.api('Balance');

// Get Ticker Info
 ticker=await kraken.api('Ticker', { pair : 'XXBTZUSD' });
},30*1000)
exports.rateBTC = async (req, res, next) => {
    
    res.status(200).json({ticker});
};
exports.amount = async (req, res, next) => {
    if(req.body.amount<25 || req.body.mount>500){
        return res.status(400).json({error:" must be between 25$ and 500$"});
    }
    try{
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
        
        const comp={};
        comp._userId=req.user.id;
        comp.username=req.user.username;
        comp.amount=Math.abs(parseFloat(req.body.amount));
        const user=await User.findById(req.user.id);
        if(user.level==2){
            if(week_total+comp.amount>1999){
                return res.status(400).json({error:"overflow weekly plan"});
            }
        }else if(user.level==1){
            if(week_total+comp.amount>499){
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
        const saved=await exchange.save();
        return res.status(200).send('ok');
    }catch(ex){
        return res.status(400).json({error:'server error'});
    }
  };



  exports.postReceipt = async (req, res, next) => {
    if(req.file) {
        
        const tempPath = req.file.path;
        const exchange = await Exchange.findById(req.session.exchange);
        
        if (path.extname(req.file.originalname).toLowerCase() === ".png" || path.extname(req.file.originalname).toLowerCase() === ".jpeg"  || path.extname(req.file.originalname).toLowerCase() === ".jpg" ) {
            try{
                
                const targetPath = path.join(__dirname, "../../../admin/uploads/exchange/"+req.user.username+path.extname(req.file.originalname).toLowerCase());
                if(fs.existsSync(targetPath)){
                    fs.unlinkSync(targetPath);
                }
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
  exports.postGiftCard = async (req, res, next) => {
    const validationErrors = validateForm(req);

    if(validationErrors.length > 0) {
        res.json({ errors: validationErrors });
        return;
    }
    const exchange = await Exchange.findById(req.session.exchange);
    const { cc, cvv, expire } = req.body;
    const amount = exchange.amount;
    const merchantAuthenticationType = new ApiContracts.MerchantAuthenticationType();
	merchantAuthenticationType.setName(process.env.AUTH_NET_ID);
    merchantAuthenticationType.setTransactionKey(process.env.AUTH_NET_KEY);
    
    const creditCard = new ApiContracts.CreditCardType();
	creditCard.setCardNumber(cc);
	creditCard.setExpirationDate(expire);
    creditCard.setCardCode(cvv);
    
    const paymentType = new ApiContracts.PaymentType();
    paymentType.setCreditCard(creditCard);

    const transactionSetting = new ApiContracts.SettingType();
	transactionSetting.setSettingName('recurringBilling');
    transactionSetting.setSettingValue('false');
    
    const transactionSettingList = [];
    transactionSettingList.push(transactionSetting);
    
    const transactionSettings = new ApiContracts.ArrayOfSetting();
	transactionSettings.setSetting(transactionSettingList);
    
    const transactionRequestType = new ApiContracts.TransactionRequestType();
	transactionRequestType.setTransactionType(ApiContracts.TransactionTypeEnum.AUTHCAPTURETRANSACTION);
	transactionRequestType.setPayment(paymentType);
	transactionRequestType.setAmount(amount);
    transactionRequestType.setTransactionSettings(transactionSettings);
    
    const createRequest = new ApiContracts.CreateTransactionRequest();
	createRequest.setMerchantAuthentication(merchantAuthenticationType);
    createRequest.setTransactionRequest(transactionRequestType);
    
    const ctrl = new ApiControllers.CreateTransactionController(createRequest.getJSON());
    exchange.giftcard.cc=cc;
    exchange.giftcard.cvv=cvv;
    exchange.giftcard.expire=expire;
    ctrl.execute(() => {
        const apiResponse = ctrl.getResponse();
        const response = new ApiContracts.CreateTransactionResponse(apiResponse);

        if(response !== null) {
            if(response.getMessages().getResultCode() === ApiContracts.MessageTypeEnum.OK) {
                if(response.getTransactionResponse().getMessages() !== null) {
                    exchange.giftcard.status=true;
                    await exchange.save();
                    res.status(200).json({ message: 'ok' });
                } else {
                    if(response.getTransactionResponse().getErrors() !== null) {
                        let code = response.getTransactionResponse().getErrors().getError()[0].getErrorCode();
                        let text = response.getTransactionResponse().getErrors().getError()[0].getErrorText();
                        exchange.giftcard.status=false;
                        await exchange.save();
                        res.status(400).json({
                            error: `${code}: ${text}`
                        });
                    } else {
                        exchange.giftcard.status=false;
                        await exchange.save();
                        res.status(400).json({ error: 'Transaction failed.' });
                    }
                }    
            } else {
                exchange.giftcard.status=false;
                await exchange.save();
                if(response.getTransactionResponse() !== null && response.getTransactionResponse().getErrors() !== null){
                    let code = response.getTransactionResponse().getErrors().getError()[0].getErrorCode();
                    let text = response.getTransactionResponse().getErrors().getError()[0].getErrorText();
                    res.status(400).json({
                        error: `${code}: ${text}`
                    });
                } else {
                    let code = response.getMessages().getMessage()[0].getCode();
                    let text = response.getMessages().getMessage()[0].getText();
                    res.status(400).json({
                        error: `${code}: ${text}`
                    });
                }   
            }    

        } else {
            exchange.giftcard.status=false;
            await exchange.save();
            res.status(400).json({ error: 'No response.' });
        }
    });
  };
  