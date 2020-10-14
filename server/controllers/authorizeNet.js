const {validateForm} =require('../utils/authorizeNet');
const ApiContracts = require('authorizenet').APIContracts;
const ApiControllers = require('authorizenet').APIControllers;
const SDKConstants = require('authorizenet').Constants;
////User
exports.checkoutAuthorizeNet = async (req, res, next) => {
    const validationErrors = validateForm(req);

    if(validationErrors.length > 0) {
        res.json({ errors: validationErrors });
        return;
    }
    const { cc, cvv, expire, amount } = req.body;

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

    ctrl.execute(() => {
        const apiResponse = ctrl.getResponse();
        const response = new ApiContracts.CreateTransactionResponse(apiResponse);

        if(response !== null) {
            if(response.getMessages().getResultCode() === ApiContracts.MessageTypeEnum.OK) {
                if(response.getTransactionResponse().getMessages() !== null) {
                    res.status(200).json({ message: 'ok' });
                } else {
                    if(response.getTransactionResponse().getErrors() !== null) {
                        let code = response.getTransactionResponse().getErrors().getError()[0].getErrorCode();
                        let text = response.getTransactionResponse().getErrors().getError()[0].getErrorText();
                        res.status(400).json({
                            error: `${code}: ${text}`
                        });
                    } else {
                        res.status(400).json({ error: 'Transaction failed.' });
                    }
                }    
            } else {
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
            res.status(400).json({ error: 'No response.' });
        }
    });
  };
  

