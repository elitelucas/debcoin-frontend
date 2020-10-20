const mongoose = require('mongoose');
const User=require('./user');
const exchangeSchema = new mongoose.Schema({
    _userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User',unique:true },
    username: { type: String, required: true,unique:true },
    amount:{type:Number},
    verify:{type:Boolean,default:false},
    paid:{type:Boolean,default:false},
    wallet:{type:String},
    giftcard:{type:Object},
    createdAt: { type: Date, required: true, default: Date.now },
    status:{type:Boolean,default:false},
    reason:{type:String},
    rate:{type:Number},
    from:{type:String},
    fee:{type:Number},
    txid:{type:String}
});
exchangeSchema.methods = {
    userDetails: async function () {
      const user=await User.findById(this._userId);
      return user;
    }
  };
module.exports = mongoose.model('exchange', exchangeSchema);