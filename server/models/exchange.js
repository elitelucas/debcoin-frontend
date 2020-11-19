const mongoose = require('mongoose');
const User=require('./user');
const exchangeSchema = new mongoose.Schema({
    _userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: User},
    username: { type: String, required: true },
    //amount of USD
    amount:{type:Number},
    //to check if the supports allow
    verify:{type:Boolean,default:false},
    //to check if the exchange step finished correctly
    paid:{type:Boolean,default:false},
    wallet_name:{type:String},
    wallet_address:{type:String},
    giftcard:{type:Object},
    createdAt: { type: Date, required: true, default: Date.now },
    //to check if it is approved or declined
    status:{type:Number,default:0},
    //rate - btc/usd
    rate:{type:Number},
    from:{type:String},
    fee:{type:Number},
    txid:{type:String},
    approvedBy:{type:String},
    tx_hash:{type:String},
    notice:{type:String},
});
exchangeSchema.methods = {
    userDetails: async function () {
      const user=await User.findById(this._userId);
      return user;
    }
  };
module.exports = mongoose.model('exchange', exchangeSchema);