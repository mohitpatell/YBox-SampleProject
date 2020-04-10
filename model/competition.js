const mongoose= require('mongoose'); 
const user = require('./user')
const competition = mongoose.Schema({
  name:{type:String},
  desc:{type:String},
  author:{type: mongoose.Types.ObjectId, ref: 'User'},
  submission:{type: Number, default:0},
  date_added:{type: Date}
});

module.exports = mongoose.model('Competition', competition, 'Competitions');
