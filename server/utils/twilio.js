const { TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, VERIFICATION_SID } = process.env;
const { ensureLoggedIn } = require('connect-ensure-login');
const twilio = require('twilio')(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);
const logger = require('../logger')();
const verificationRequest=async (phoneNumber)=>{
  phoneNumber="+"+phoneNumber;
    console.log(phoneNumber);
    console.log(VERIFICATION_SID);
    try {
        request = await twilio.verify.services(VERIFICATION_SID)
          .verifications
          .create({ to: phoneNumber, channel:'sms' });
        return true;
      } catch (e) {
        console.log(e);
        return false
      }
  
      // logger.debug(request);
};
const verificationResult=async (phoneNumber,code)=>{
  phoneNumber="+"+phoneNumber;
    try {
        result = await twilio.verify.services(VERIFICATION_SID)
          .verificationChecks
          .create({ code, to: phoneNumber });
      } catch (e) {
        console.log(e);
        return false;
      }
      console.log(result);
      // logger.debug(result);
    
      if (result.status === 'approved') {
        return true;
      }else{
        return false;
      }
};
module.exports = {
    verificationRequest,
    verificationResult
  };