const User = require('../models/user');
const Tier2 = require('../models/tier2');
const Tier3 = require('../models/tier3');
const fs = require('fs');
const path=require("path");
////User
exports.listUsers = async (req, res, next) => {
    try {
      const { sortType = '-created' } = req.body;
      const users = await User.find().sort(sortType);
      res.json(users);
    } catch (error) {
      next(error);
    }
  };
  
  exports.search = async (req, res, next) => {
    try {
      const users = await User.find({ username: { $regex: req.params.search, $options: 'i' } });
      res.json(users);
    } catch (error) {
      next(error);
    }
  };
  
  exports.find = async (req, res, next) => {
    try {
      const user = await User.findOne({ username: req.params.username });
      const tier2=await Tier2.findOne({_userId:user._id});
      const tier3=await Tier3.findOne({_userId:user._id});
    
      res.json({user,tier2,tier3});
    } catch (error) {
      next(error);
    }
  };

////tier2
exports.listTier2 = async (req, res, next) => {
    const tier2 = await Tier2.find({}); 
      
      return res.status(200).json({
        tier2
      });
};
exports.detailTier2 = async (req, res, next) => {
  var tier2 = await Tier2.findById(req.params.id);
  tier2.user=await tier2.userDetails();
    
    return res.status(200).json({
      tier2
    });
};
exports.imageTier2 = async (req, res, next) => {

    var tier2 = await Tier2.findById(req.params.id);
    res.sendFile(path.join(__dirname, "../uploads/tier2/"+tier2.username+tier2.ext));
};
exports.patchTier2 = async (req, res, next) => {
  
  try{
    var tier2 = await Tier2.findById(req.params.id);
    if(req.body.allow=="true"){
      tier2.status=true;
      await tier2.save();
      var user=await User.findById(tier2._userId);
      user.level=2;
      await user.save();
      return res.status(200).json({
        message:'ok'
      });
    }else{
      fs.unlinkSync(path.join(__dirname, "../uploads/tier2/"+tier2.username+tier2.ext));
      var user=await User.findById(tier2._userId);
      user.level=1;
      await user.save();
      await tier2.remove();
      return res.status(200).json({
        message:'ok'
      });
    }
  }catch(ex){
    console.log(ex);
    return res.status(500).json({
      error:'server error'
    });
  }
  
  
};

////tier3
exports.listTier3 = async (req, res, next) => {
    const tier3 = await Tier3.find({});
  
      
      return res.status(200).json({
        tier3
      });
};

exports.detailTier3 = async (req, res, next) => {
    var tier3 = await Tier3.findById(req.params.id);
    tier3.user=await tier3.userDetails();
      
      return res.status(200).json({
        tier3
      });
};
exports.imageTier3 = async (req, res, next) => {

  var tier3 = await Tier3.findById(req.params.id);
  res.sendFile(path.join(__dirname, "../uploads/tier3/"+tier3.username+tier3.ext));
};
exports.patchTier3 = async (req, res, next) => {
  
  try{
    var tier3 = await Tier3.findById(req.params.id);
    if(req.body.allow=="true"){
      tier3.status=true;
      await tier3.save();
      var user=await User.findById(tier3._userId);
      user.level=3;
      await user.save();
      return res.status(200).json({
        message:'ok'
      });
    }else{
      fs.unlinkSync(path.join(__dirname, "../uploads/tier3/"+tier3.username+tier3.ext));
      var user=await User.findById(tier3._userId);
      if(user.level>1){
        var tier2 = await Tier2.findOne({_userId:user._id});
        if(tier2!=null && tier2.status==true){
          user.level=2;
        }else
          user.level=1;
      }
        
      await user.save();
      await tier3.remove();
      return res.status(200).json({
        message:'ok'
      });
    }
  }catch(ex){
    return res.status(500).json({
      error:'server error'
    });
  }
  
  
};