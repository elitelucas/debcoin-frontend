const mongoose = require('mongoose');
const User=require('./user');
const tier2Schema = new mongoose.Schema({
    _userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User',unique:true },
    username: { type: String, required: true,unique:true },
    ext:{type:String,required:true},
    createdAt: { type: Date, required: true, default: Date.now },
    status:{type:Boolean,default:false}
});
tier2Schema.methods = {
    userDetails: async function () {
      const user=await User.findById(this._userId);
      return user;
    }
  };
module.exports = mongoose.model('tier2', tier2Schema);