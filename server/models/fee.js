const mongoose = require('mongoose');
//to use email verification
const feeSchema = new mongoose.Schema({
    fee: { type: Number, required: true },
    createdAt: { type: Date, required: true, default: Date.now }
});
module.exports = mongoose.model('fee', feeSchema);