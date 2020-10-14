const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contactModel = new Schema({
  username: { type: String, required: true },
  email:{type:String, required:true},
  help:{type:String, required:true},
  status:{type:Boolean,default:false},
  created: { type: Date, default: Date.now }
});

contactModel.set('toJSON', { getters: true });
contactModel.options.toJSON.transform = (doc, ret) => {
  const obj = { ...ret };
  delete obj._id;
  delete obj.__v;
  delete obj.password;
  return obj;
};

module.exports = mongoose.model('contact', contactModel);
