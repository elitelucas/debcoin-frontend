const User = require('../models/user');
const { body, validationResult } = require('express-validator');
var WAValidator = require('wallet-address-validator');
//to show all wallet
exports.listWallet = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id);
   
    return res.status(200).json({list:user.wallet});
  } catch (error) {
    return res.status(500).json({message:'failed'});
  }
};
//to add a new wallet
exports.createWallet = async (req, res, next) => {
  //to check validation
  const result = validationResult(req);
  if (!result.isEmpty()) {
    const errors = result.array({ onlyFirstError: true });
    return res.status(422).json({ errors });
  }
   var valid = WAValidator.validate(req.body.address, 'BTC');
   if(!valid)
     return res.status(400).json({
       message: 'Address Invalid.'
     });
  //to add
  try {
    const {title,address}=req.body;
    const user = await User.findById(req.user.id);
    if(user.wallet.findIndex((ele)=>(ele.title===title || ele.address===address))!==-1)
      return res.status(400).json({
        message: 'Wallet already exists.'
      });
    user.wallet.push({title,address});
    const saved=await user.save();
    return res.status(200).json({wallet:saved.wallet});
  } catch (error) {
    return res.status(500).json({message:'failed'});
  }
};

//to remove a wallet
exports.removeWallet = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id);
    const id=user.wallet.findIndex(ele=>ele.title===req.params.title);
    user.wallet.splice(id,1);
    const saved=await user.save();
    return res.status(200).json({wallet:saved.wallet});
  } catch (error) {
    return res.status(500).json({message:'failed'});
  }
};


exports.validateWallet = [
  body('title')
    .exists()
    .trim()
    .withMessage('is required')

    .notEmpty()
    .withMessage('cannot be blank')

    .isLength({ min: 4 })
    .withMessage('must be at least 4 characters long')

    .isLength({ max: 50 })
    .withMessage('must be at most 50 characters long'),
  body('address')
    .exists()
    .trim()
    .withMessage('is required')

    .notEmpty()
    .withMessage('cannot be blank')   
   
];