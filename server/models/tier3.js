const mongoose = require('mongoose');

const tier3Schema = new mongoose.Schema({
    _userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'user',unique:true },
    username: { type: String, required: true,unique:true },
    ext:{type:String,required:true},
    createdAt: { type: Date, required: true, default: Date.now },
    status:{type:Boolean,default:false}

});
tier3Schema.methods = {
    userDetails: async function () {
      const User=require('./user');
      const user=await User.findById(this._userId);
      return user;
    }
  };
module.exports = mongoose.model('tier3', tier3Schema);