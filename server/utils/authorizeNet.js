'use strict';

const validator = require('validator');
const ApiContracts = require('authorizenet').APIContracts;
const ApiControllers = require('authorizenet').APIControllers;
const SDKConstants = require('authorizenet').Constants;
module.exports = {
    validateForm(req) {
        const { cc, cvv, expire, amount } = req.body;

        const errors = [];

        if(!validator.isCreditCard(cc)) {
            errors.push({
                param: 'cc',
                msg: 'Invalid credit card number.'
            });
        }

        if(!/^\d{3}$/.test(cvv)) {
            errors.push({
                param: 'cvv',
                msg: 'Invalid CVV code.'
            });
        }

        if(!/^\d{4}$/.test(expire)) {
            errors.push({
                param: 'expire',
                msg: 'Invalid expiration date.'
            }); 
        }

        if(!validator.isDecimal(amount)) {
            errors.push({
                param: 'amount',
                msg: 'Invalid amount.'
            }); 
        }

        return errors;
    },
    chargeCreditCard(cc,cvv,expire,amount,callback){
        
       

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

        ctrl.execute(async () => {
            const apiResponse = ctrl.getResponse();
            const response = new ApiContracts.CreateTransactionResponse(apiResponse);

            if(response !== null) {
                if(response.getMessages().getResultCode() === ApiContracts.MessageTypeEnum.OK) {
                    if(response.getTransactionResponse().getMessages() !== null) {                        
                        console.log('Successfully created transaction with Transaction ID: ' + response.getTransactionResponse().getTransId());
                        console.log('Response Code: ' + response.getTransactionResponse().getResponseCode());
                        console.log('Message Code: ' + response.getTransactionResponse().getMessages().getMessage()[0].getCode());
                        console.log('Description: ' + response.getTransactionResponse().getMessages().getMessage()[0].getDescription());
                    } else {
                        console.log('Failed Transaction.');
                        if(response.getTransactionResponse().getErrors() != null){
                            console.log('Error Code: ' + response.getTransactionResponse().getErrors().getError()[0].getErrorCode());
                            console.log('Error message: ' + response.getTransactionResponse().getErrors().getError()[0].getErrorText());
                        }
                    }    
                } else {
                    console.log('Failed Transaction. ');
                    if(response.getTransactionResponse() != null && response.getTransactionResponse().getErrors() != null){
                    
                        console.log('Error Code: ' + response.getTransactionResponse().getErrors().getError()[0].getErrorCode());
                        console.log('Error message: ' + response.getTransactionResponse().getErrors().getError()[0].getErrorText());
                    }
                    else {
                        console.log('Error Code: ' + response.getMessages().getMessage()[0].getCode());
                        console.log('Error message: ' + response.getMessages().getMessage()[0].getText());
                    }
                }    

            } else {
                console.log('Null Response.');
            }
            callback(response);
        });
    }
};