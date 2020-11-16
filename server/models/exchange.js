const mongoose = require('mongoose');
const User=require('./user');
const exchangeSchema = new mongoose.Schema({
    _userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: User},
    username: { type: String, required: true },
    amount:{type:Number},
    verify:{type:Boolean,default:false},
    paid:{type:Boolean,default:false},
    wallet_name:{type:String},
    wallet_address:{type:String},
    giftcard:{type:Object},
    createdAt: { type: Date, required: true, default: Date.now },
    status:{type:Number,default:0},
    reason:{type:String},
    rate:{type:Number},
    from:{type:String},
    fee:{type:Number},
    txid:{type:String},
    approvedBy:{type:String},
    tx_hash:{type:String},
    notice:{type:String},
    approved:{type:Boolean,default:false}
});
exchangeSchema.methods = {
    userDetails: async function () {
      const user=await User.findById(this._userId);
      return user;
    }
  };
module.exports = mongoose.model('exchange', exchangeSchema);