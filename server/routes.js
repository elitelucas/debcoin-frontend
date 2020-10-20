
const {
  validateUser,
  validateLogin,
  validatePhone,
  validatePassword,
  validateProfile,
  validateContact,
  signup,
  authenticate,
  requestVerify,
  resultVerify,
  requestEmailVerify,
  resultEmailVerify,
  phoneChange,
  passwordChange,
  getMyInfo,
  putProfile,
  postContact
} = require('./controllers/users');
const {
  listTier2,
  patchTier2,
  detailTier2,
  imageTier2,
  listTier3,
  patchTier3,
  detailTier3,
  imageTier3,
  listUsers,
  search,
  find
} = require('./controllers/admin');
const {
  loadQuestions,
  questionValidate,
  createQuestion,
  show,
  listQuestions,
  listByTags,
  listByUser,
  removeQuestion
} = require('./controllers/questions');
const {
  loadAnswers,
  answerValidate,
  createAnswer,
  removeAnswer
} = require('./controllers/answers');
const {
  validateWallet,
  createWallet,
  listWallet, removeWallet } = require('./controllers/wallet');
const { checkoutAuthorizeNet } = require('./controllers/authorizeNet');
const { getTier2, postTier2, getTier3, postTier3 } = require('./controllers/tier');
const { listPopulerTags, searchTags, listTags } = require('./controllers/tags');
const { upvote, downvote, unvote } = require('./controllers/votes');
const { loadComments, validate, createComment, removeComment } = require('./controllers/comments');
const { listExchange, allowedExchange,
  postReceipt,
  getRate } = require('./controllers/exchange');
const requireAdmin = require('./middlewares/requireAdmin');
const requireAuth = require('./middlewares/requireAuth');
const questionAuth = require('./middlewares/questionAuth');
const commentAuth = require('./middlewares/commentAuth');
const answerAuth = require('./middlewares/answerAuth');
const multer = require("multer");
const router = require('express').Router();

var storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "/uploads/temp");
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

//authentication
router.post('/signup', signup);
router.get('/verify', requireAuth, requestVerify);
router.post('/verify', requireAuth, resultVerify);
router.get('/emailVerify', requireAuth, requestEmailVerify);
router.post('/emailVerify', requireAuth, resultEmailVerify);
router.post('/authenticate', validateLogin, authenticate);
router.put('/account', [requireAuth, validatePassword], passwordChange);

router.get('/myInfo', requireAuth, getMyInfo);
router.put('/profile', [requireAuth, validateProfile], putProfile);

router.post('/contact_anonym', validateContact, postContact);
router.post('/contact', requireAuth, postContact);
//admin
router.get('/admin/users', [requireAuth, requireAdmin], listUsers);
router.get('/admin/users/:search', [requireAuth, requireAdmin], search);
router.get('/admin/user/:username', [requireAuth, requireAdmin], find);

router.get('/admin/tier2', [requireAuth, requireAdmin], listTier2);
router.patch('/admin/tier2/:id', [requireAuth, requireAdmin], patchTier2);
router.get('/admin/tier2/image/:id', [requireAuth, requireAdmin], imageTier2);
router.get('/admin/tier2/:id', [requireAuth, requireAdmin], detailTier2);

router.get('/admin/tier3', [requireAuth, requireAdmin], listTier3);
router.patch('/admin/tier3/:id', [requireAuth, requireAdmin], patchTier3);
router.get('/admin/tier3/image/:id', [requireAuth, requireAdmin], imageTier3);
router.get('/admin/tier3/:id', [requireAuth, requireAdmin], detailTier3);
//authorize.net
router.post('/checkout', requireAuth, checkoutAuthorizeNet);
//kraken
// router.get('/rateBTC', requireAuth, rateBTC);
// router.post('/amount', requireAuth, amount);
// router.get('/smsVerify', requireAuth, smsVerify);
// router.post('/smsResult', requireAuth, smsResult);
// router.post('/selectWallet', requireAuth, selectWallet);
router.post('/receipt', [requireAuth, 
  uploadedFile.array("image")
 ], postReceipt);
// router.post('/giftcard', requireAuth, postGiftCard);

//////////////////////////////////////////////////////////////
//bitcoin exchange route
router.get('/getRate', getRate);
router.get('/allowed', requireAuth, allowedExchange);
router.get('/listExchange', requireAuth, listExchange);

//wallet manage
router.post('/wallet', [requireAuth, validateWallet], createWallet);
router.get('/wallet', requireAuth, listWallet);
router.delete('/wallet/:title', requireAuth, removeWallet);
//users

//tiers
router.get('/tier2', requireAuth, getTier2);
router.get('/tier3', requireAuth, getTier3);
router.post('/tier2', [requireAuth,   
  uploadedFile.array("tier2")
 ], postTier2);
router.post('/tier3', [requireAuth, uploadedFile.single('tier3')], postTier3);


//questions
router.param('question', loadQuestions);
router.post('/questions', [requireAuth, questionValidate], createQuestion);
router.get('/question/:question', show);
router.get('/question', listQuestions);
router.get('/questions/:tags', listByTags);
router.get('/question/user/:username', listByUser);
router.delete('/question/:question', [requireAuth, questionAuth], removeQuestion);

//tags
router.get('/tags/populertags', listPopulerTags);
router.get('/tags/:tag', searchTags);
router.get('/tags', listTags);

//answers
router.param('answer', loadAnswers);
router.post('/answer/:question', [requireAuth, answerValidate], createAnswer);
router.delete('/answer/:question/:answer', [requireAuth, answerAuth], removeAnswer);

//votes
router.get('/votes/upvote/:question/:answer?', requireAuth, upvote);
router.get('/votes/downvote/:question/:answer?', requireAuth, downvote);
router.get('/votes/unvote/:question/:answer?', requireAuth, unvote);

//comments
router.param('comment', loadComments);
router.post('/comment/:question/:answer?', [requireAuth, validate], createComment);
router.delete('/comment/:question/:comment', [requireAuth, commentAuth], removeComment);
router.delete('/comment/:question/:answer/:comment', [requireAuth, commentAuth], removeComment);


module.exports = router;
