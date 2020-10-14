const axios = require('axios')


const verifyCaptcha = async (secret,response, remoteIP) => {

    try {
      // fetch data from a url endpoint
      const result=await axios
      .post('https://www.google.com/recaptcha/api/siteverify', {
        secret,response, remoteIP
      });
      return result;
    } catch(error) {
      const result={
        "success": false,  
        "error-codes": error 
      }
      return result;
      // appropriately handle the error
    }
};



module.exports = {
  verifyCaptcha
};
