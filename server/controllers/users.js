const User = require('../models/user');
const Contact = require('../models/contact');
const Token = require('../models/token');
const jwtDecode = require('jwt-decode');
const { body, validationResult } = require('express-validator');
const { ipDetect } = require('../utils/ipDetect');
const { createToken, hashPassword, verifyPassword } = require('../utils/authentication');
const { verificationRequest, verificationResult } = require('../utils/twilio');
const { verifyCaptcha } = require('../utils/reCaptcha');
var nodemailer = require('nodemailer');
const crypto = require('crypto');
const config = require('../config');
const Tier2 = require('../models/tier2');
const Tier3 = require('../models/tier3');
exports.signup = async (req, res) => {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    const errors = result.array({ onlyFirstError: true });
    return res.status(422).json({ errors });
  }
  try {

    // verify captchca
    var secretKey = process.env.CAPTCHA_KEY;
    var response = req.body['g-recaptcha-response'];
    const remoteip = req.ip;
    console.log(secretKey + " " + response + " " + remoteip);
    const captcha = await verifyCaptcha(secretKey, response, remoteip);
    if (!captcha.success)
      return res.status(422).json({ message: 'Please select Captcha' });

    const { username, email, phoneNumber } = req.body;
    const hashedPassword = await hashPassword(req.body.password);
    const locationDetails = await ipDetect(req.ip);
    const userData = {
      username: username.toLowerCase(),
      password: hashedPassword,
      email,
      phoneNumber,
      ip: req.ip,
      locationDetails,
      captcha
    };

    var existingUsername = await User.findOne({
      username: userData.username
    });

    if (existingUsername) {
      return res.status(400).json({
        message: 'Username already exists.'
      });
    }
    existingUsername = await User.findOne({
      email: userData.email
    });

    if (existingUsername) {
      return res.status(400).json({
        message: 'Email already exists.'
      });
    }
    existingUsername = await User.findOne({
      phoneNumber: userData.phoneNumber
    });

    if (existingUsername) {
      return res.status(400).json({
        message: 'Phone Number already exists.'
      });
    }
    const newUser = new User(userData);
    const savedUser = await newUser.save();

    if (savedUser) {
      const token = createToken(savedUser);
      const expiresAt = config.jwt.expiry;


      const { username, role, id, created, wallet, email, phoneNumber, emailVerified, phoneVerified, level } = savedUser;
      const userInfo = {
        username,
        role, id, created, wallet, email, phoneNumber, emailVerified, phoneVerified, level, tier2: null, tier3: null
      };
      return res.json({
        token,
        userInfo,
        expiresAt
      });
    } else {
      return res.status(400).json({
        message: 'There was a problem creating your account.'
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      message: 'There was a problem creating your account.'
    });
  }
};
exports.requestVerify = async (req, res) => {
  const bool = await verificationRequest(req.user.phoneNumber);
  if (bool)
    return res.status(200).send('ok');
  else
    return res.status(500).send('failed');
};


exports.resultVerify = async (req, res) => {
  const bool = await verificationResult(req.user.phoneNumber, req.body.code);
  if (bool) {
    const user = await User.findById(req.user.id);
    user.phoneVerified = true;
    const saved = await user.save();
    return res.status(200).send('ok');
  }
  else
    return res.status(500).send('failed');
};


exports.requestEmailVerify = async (req, res) => {
  var token = new Token({ _userId: req.user.id, token: crypto.randomBytes(16).toString('hex') });
  // Save the token
  token.save(function (err) {
    if (err) { return res.status(500).send({ message: err.message }); }

    // Send the email
    var transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      auth: {
        user: process.env.ETHEREAL_USERNAME,
        pass: process.env.ETHEREAL_PASSWORD
      }
    });
    var mailOptions = { from: process.env.ETHEREAL_USERNAME, to: req.user.email, subject: 'Account Verification Token', text: 'Hello,\n\n' + 'Please verify your account by clicking the link: \nhttp:\/\/' + req.headers.host + '\/confirmation\/' + token.token + '.\n' };
    transporter.sendMail(mailOptions, function (err) {
      if (err) { return res.status(500).send({ msg: err.message }); }
      res.status(200).send('A verification email has been sent to ' + user.email + '. if not, please check out spam.');
    });
  });
};

exports.resultEmailVerify = async (req, res) => {
  Token.findOne({ token: req.body.token }, function (err, token) {
    if (!token) return res.status(400).json({ type: 'not-verified', message: 'We were unable to find a valid token. Your token my have expired.' });

    // If we found a token, find a matching user
    User.findOne({ _id: token._userId }, function (err, user) {
      if (!user) return res.status(400).send({ msg: 'We were unable to find a user for this token.' });
      if (user.emailVerified) return res.status(400).json({ type: 'already-verified', message: 'This user has already been verified.' });

      // Verify and save the user
      user.emailVerified = true;
      user.save(function (err) {
        if (err) { return res.status(500).json({ message: err.message }); }
        res.status(200).json({ message: "The account has been verified. " });
      });
    });
  });
};


exports.phoneChange = async (req, res) => {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    const errors = result.array({ onlyFirstError: true });
    return res.status(422).json({ errors });
  }
  try {
    const user = await User.findById(req.user.id);
    user.phoneNumber = req.body.phoneNumber
    user.phoneVerified = false;
    const saved = await user.save();
    return res.status(200).send('ok');
  } catch (err) {
    return res.status(500).send('failed');
  }


};


exports.passwordChange = async (req, res) => {

  const result = validationResult(req);
  if (!result.isEmpty()) {
    const errors = result.array({ onlyFirstError: true });
    return res.status(422).json({ errors });
  }
  try {
    // verify captchca

    const user = await User.findById(req.user.id);

    if (!user) {
      return res.status(403).json({
        message: 'Wrong username or password.'
      });
    }

    const passwordValid = await verifyPassword(req.body.old_password, user.password);

    if (passwordValid) {
      user.password = await hashPassword(req.body.new_password);
      const saved = await user.save();
      return res.status(200).json({ message: 'ok' });
    } else {
      res.status(403).json({
        message: 'Wrong password.'
      });
    }
  } catch (error) {
    return res.status(400).json({
      message: 'Something went wrong.'
    });
  }
};

exports.authenticate = async (req, res) => {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    const errors = result.array({ onlyFirstError: true });
    return res.status(422).json({ errors });
  }
  try {
    // verify captchca
    //var secretKey = process.env.CAPTCHA_KEY;
    //var response =req.body['g-recaptcha-response'];
    //const remoteip=req.ip;
    //const captcha=await verifyCaptcha(secretKey,response,remoteip);
    //if(!captcha.success)
    //  return res.status(422).json({ message:'Please select Captcha' });


    const { username, password } = req.body;
    const user = await User.findOne({
      '$or': [{ username: username.toLowerCase() }, { email: username }]

    });

    if (!user) {
      return res.status(403).json({
        message: 'Wrong username .'
      });
    }
    //if(!user.phoneVerified){
    //  return res.status(403).json({
    //    message: 'Please have a phone verification.'
    //  });
    //}
    const passwordValid = await verifyPassword(password, user.password);

    if (passwordValid) {
      const token = createToken(user);
      const expiresAt = config.jwt.expiry;
      const { username, role, id, created, wallet, email, phoneNumber, emailVerified, phoneVerified, level } = user;

      const tier2 = await Tier2.findOne({
        _userId: id
      });
      const tier3 = await Tier3.findOne({
        _userId: id
      });


      const userInfo = {
        username,
        role, id, created, wallet, email, phoneNumber, emailVerified, phoneVerified, level, tier2, tier3
      };
      res.json({
        token,
        userInfo,
        expiresAt
      });
    } else {
      res.status(403).json({
        message: 'Wrong username or password.'
      });
    }
  } catch (error) {
    return res.status(400).json({
      message: 'Something went wrong.'
    });
  }
};

exports.putProfile = async (req, res) => {

  try {
    const user = await User.findById(req.user.id);
    if (user.email != req.body.email) {
      user.email = req.body.email;
      user.emailVerified = false;

    }
    if (user.phoneNumber != req.body.phoneNumber) {
      user.phoneNumber = req.body.phoneNumber;
      user.phoneVerified = false;
    }
    await user.save();
    return res.status(200).json({ email: user.email, phoneNumber: user.phoneNumber,phoneVerified:user.phoneVerified ,
      emailVerified:user.emailVerified
    });
  } catch (err) {
    return res.status(500).json({
      message: 'Something went wrong.'
    });
  }


};

exports.postContact = async (req, res) => {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    const errors = result.array({ onlyFirstError: true });
    return res.status(422).json({ errors });
  }
  try {
    const comp = {};
    if (req.user) {
      const user = await User.findById(req.user.id);
      comp.username = user.username;
      comp.email = user.email;
    } else {
      comp.username = req.body.username;
      comp.email = req.body.email;
    }
    comp.help = req.body.help;
    comp.title=req.body.title;
    const newContact = new Contact(comp);
    const savedContact = await newContact.save();
    return res.status(200).json({ message: 'ok' });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: 'Something went wrong.'
    });
  }


};

exports.validateUser = [
  // body('g-recaptcha-response')
  //   .exists()
  //   .withMessage('Please select captcha')

  //   .notEmpty()
  //   .withMessage('Please select captcha'),
  body('username')
    .exists()
    .trim()
    .withMessage('is required')

    .notEmpty()
    .withMessage('cannot be blank')

    .isLength({ max: 16 })
    .withMessage('must be at most 16 characters long')

    .matches(/^[a-zA-Z0-9_-]+$/)
    .withMessage('contains invalid characters'),

  body('password')
    .exists()
    .trim()
    .withMessage('is required')

    .notEmpty()
    .withMessage('cannot be blank')

    .isLength({ min: 6 })
    .withMessage('must be at least 6 characters long')

    .isLength({ max: 50 })
    .withMessage('must be at most 50 characters long'),
  body('email')
    .exists()
    .trim()
    .withMessage('is required')

    .notEmpty()
    .withMessage('cannot be blank')

    .isEmail()
    .withMessage('wrong email'),

  body('phoneNumber')
    .exists()
    .trim()
    .withMessage('is required')

    .notEmpty()
    .withMessage('cannot be blank')

    .matches(new RegExp('\\d{3}-\\d{3}-\\d{4}'))
    .withMessage('wrong number')


];
exports.validateLogin = [
  //body('g-recaptcha-response')
  //  .exists()
  //  .withMessage('Please select captcha')

  //  .notEmpty()
  //  .withMessage('Please select captcha'),
  body('username')
    .exists()
    .trim()
    .withMessage('is required')

    .notEmpty()
    .withMessage('cannot be blank')

    .isLength({ max: 255 })
    .withMessage('must be at most 255 characters long'),


  body('password')
    .exists()
    .trim()
    .withMessage('is required')

    .notEmpty()
    .withMessage('cannot be blank')

    .isLength({ min: 6 })
    .withMessage('must be at least 6 characters long')

    .isLength({ max: 50 })
    .withMessage('must be at most 50 characters long')



];
exports.validatePhone = [

  body('phoneNumber')
    .exists()
    .trim()
    .withMessage('is required')

    .notEmpty()
    .withMessage('cannot be blank')

    .matches(new RegExp('\\d{3}-\\d{3}-\\d{4}'))
    .withMessage('wrong number')


];
exports.validatePassword = [
  body('old_password')
    .exists()
    .trim()
    .withMessage('is required')

    .notEmpty()
    .withMessage('cannot be blank')

    .isLength({ min: 6 })
    .withMessage('must be at least 6 characters long')

    .isLength({ max: 50 })
    .withMessage('must be at most 50 characters long'),
  body('new_password')
    .exists()
    .trim()
    .withMessage('is required')

    .notEmpty()
    .withMessage('cannot be blank')

    .isLength({ min: 6 })
    .withMessage('must be at least 6 characters long')

    .isLength({ max: 50 })
    .withMessage('must be at most 50 characters long')

];
exports.validateProfile = [
  // body('g-recaptcha-response')
  //   .exists()
  //   .withMessage('Please select captcha')

  //   .notEmpty()
  //   .withMessage('Please select captcha'),

  body('email')
    .exists()
    .trim()
    .withMessage('is required')

    .notEmpty()
    .withMessage('cannot be blank')

    .isEmail()
    .withMessage('wrong email'),

  body('phoneNumber')
    .exists()
    .trim()
    .withMessage('is required')

    .notEmpty()
    .withMessage('cannot be blank')

    .matches(new RegExp('\\d{3}-\\d{3}-\\d{4}'))
    .withMessage('wrong number')


];
exports.validateContact = [
  // body('g-recaptcha-response')
  //   .exists()
  //   .withMessage('Please select captcha')

  //   .notEmpty()
  //   .withMessage('Please select captcha'),
  body('username')
    .exists()
    .trim()
    .withMessage('is required')

    .notEmpty()
    .withMessage('cannot be blank')

    .isLength({ max: 16 })
    .withMessage('must be at most 16 characters long')

    .matches(/^[a-zA-Z0-9_-]+$/)
    .withMessage('contains invalid characters'),
  body('email')
    .exists()
    .trim()
    .withMessage('is required')

    .notEmpty()
    .withMessage('cannot be blank')

    .isEmail()
    .withMessage('wrong email')




];