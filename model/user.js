const mongoose= require('mongoose');
const validator=require('mongoose-unique-validator');

const user = mongoose.Schema({
  name:{type:String},
  email:{type:String, unique:true},
  date_added:{type: Date}
}).plugin(validator);

module.exports = mongoose.model('User', user, 'Users');
