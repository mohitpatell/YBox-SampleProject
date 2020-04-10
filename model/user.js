const mongoose= require('mongoose');
const validator=require('mongoose-unique-validator');

const contact = mongoose.Schema({
  name:{type:String},
  email:{type:String, unique:true},
  date_added:{type: Date}
}).plugin(validator);

module.exports = mongoose.model('User', contact, 'Users');
