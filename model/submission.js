const mongoose= require('mongoose');

const submission = mongoose.Schema({
  image:{type:String},
  author:{type: mongoose.Types.ObjectId, ref: 'User'},
  competition:{type: mongoose.Types.ObjectId, ref: 'Competition'},
  like:{type: Number, default: 0}
});

module.exports = mongoose.model('Submission', submission, 'Submissions');
