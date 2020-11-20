const mongoose = require('mongoose');

const tier2Schema = new mongoose.Schema({
    _userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'user',unique:true },
    username: { type: String, required: true,unique:true },
    createdAt: { type: Date, required: true, default: Date.now },
    status:{type:Boolean,default:false},
    fname:{type:String,required:true},
    lname:{type:String,required:true},
    address:{type:String,required:true},
    street:{type:String,required:true},
    city:{type:String,required:true},
    zip:{type:String,required:true},
    state:{type:String,required:true},
    fname:{type:String,required:true},
});
tier2Schema.methods = {  
    userDetails: async function () {
      const User=require('./user');
      const user=await User.findById(this._userId);
      return user;
    }
  };
module.exports = mongoose.model('tier2', tier2Schema);