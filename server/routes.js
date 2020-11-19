
const {
  validateLogin,
  validatePassword,
  validateProfile,
  validateContact,
  signup,
  authenticate,
  requestVerify,
  resultVerify,
  requestEmailVerify,
  resultEmailVerify,
  passwordChange,
  getMyInfo,
  putProfile,
  postContact
} = require('./controllers/users');

const {
  validateWallet,
  createWallet,
  listWallet, removeWallet } = require('./controllers/wallet');

const { getTier2, postTier2, getTier3, postTier3 } = require('./controllers/tier');

const { listExchange, allowedExchange,
  postReceipt,
  postGiftCard,
  postAmount,
  smsVerify,
  smsResult,
  selectWallet,
  getRate } = require('./controllers/exchange');

const requireAuth = require('./middlewares/requireAuth');

const multer = require("multer");
const router = require('express').Router();

//for multer
var storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "../admin/uploads/temp");
  },
  filename: (req, file, callback) => {
    const match = ["image/png", "image/jpeg", "image/jpg"];

    if (match.indexOf(file.mimetype) === -1) {
      var message = `${file.originalname} is invalid. Only accept png/jpeg.`;
      return callback(message, null);
    }

    var filename = `${Date.now()}-bezkoder-${file.originalname}`;
    callback(null, filename);
  }
});

var uploadedFile = multer({ storage: storage });
//////////////////////////////////////////////////////////////
//authentication
router.post('/signup', signup);
//phone verification
router.get('/verify', requireAuth, requestVerify);
router.post('/verify', requireAuth, resultVerify);
//Email verification
router.get('/emailVerify', requireAuth, requestEmailVerify);
router.post('/emailVerify', requireAuth, resultEmailVerify);
//signin
router.post('/authenticate', validateLogin, authenticate);
//to change user password
router.put('/account', [requireAuth, validatePassword], passwordChange);
//to change Email and PhoneNumber
router.put('/profile', [requireAuth, validateProfile], putProfile);
//to post a "contact us" form data (when signout state) 
router.post('/contact_anonym', validateContact, postContact);
//to post a "contact us" form data (when signin state) 
router.post('/contact', requireAuth, postContact);



//////////////////////////////////////////////////////////////
//authorize.net
// router.post('/checkout', requireAuth, checkoutAuthorizeNet);
//kraken
// router.get('/rateBTC', requireAuth, rateBTC);
// router.post('/amount', requireAuth, amount);
// router.post('/giftcard', requireAuth, postGiftCard);

//////////////////////////////////////////////////////////////
//bitcoin exchange route
//exchanging step 1 - post amount
router.post('/amount',requireAuth, postAmount);
//to get information of the rate from Blockchain.com
router.get('/getRate', getRate);
//to know how much amount of money remained for a month
router.get('/allowed', requireAuth, allowedExchange);
//Exchange history
router.get('/listExchange', requireAuth, listExchange);
//step-2 sms verification
router.get('/smsVerify', requireAuth, smsVerify);
router.post('/smsVerify', requireAuth, smsResult);
//step-3 select a wallet
router.post('/selectWallet', requireAuth, selectWallet);
//step-4 upload images
router.post('/receipt', [requireAuth,
  uploadedFile.array("image")
], postReceipt);
//step-5 post a giftcard information
router.post('/giftcard', requireAuth,
  postGiftCard);

//////////////////////////////////////////////////////////////
//wallet manage
//to add a new wallet
router.post('/wallet', [requireAuth, validateWallet], createWallet);
//to get wallets info
router.get('/wallet', requireAuth, listWallet);
//to remove a wallet
router.delete('/wallet/:title', requireAuth, removeWallet);

//////////////////////////////////////////////////////////////
//tiers
//to know tier-2 form whether submited or not
router.get('/tier2', requireAuth, getTier2);
//to know tier-3 form whether submited or not
router.get('/tier3', requireAuth, getTier3);
//to submit tier-2 form
router.post('/tier2', [requireAuth,
  uploadedFile.array("tier2")
], postTier2);
//to submit tier-3 form
router.post('/tier3', [requireAuth, uploadedFile.single('tier3')], postTier3);

module.exports = router;
