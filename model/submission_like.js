const mongoose= require('mongoose');

const submission = mongoose.Schema({
  author:{type: mongoose.Types.ObjectId, ref: 'Users'},
  submission:{type: mongoose.Types.ObjectId, ref: 'Submissions'}
});

module.exports = mongoose.model('SubmissionLike', submission, 'SubmissionLikes');
