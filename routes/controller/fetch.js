//  MongoDB Models
const SubmissionLike = require('../../model/submission_like');
const Submission = require('../../model/submission')
const User = require('../../model/user');
const Competition = require('../../model/competition')

class FetchController {

  // Get ALl User
  users(values) {
    return new Promise((resolve, reject) => {

      User.find()
        .then(result => {
          resolve(result);
        })
        .catch(err => {
          reject(err);
        });

    })
  }
  // Get ALl a Competition
  competition() {
    return new Promise((resolve, reject) => {
      Competition.find()
        .populate('author')
        .then(result => {
          return resolve(result);
        })
        .catch(err => {
          return reject(err);
        });

    })
  }

  // Get ALl Submission for a Competition
  submission() {
    return new Promise((resolve, reject) => {
      Submission.find({})
        .then(result => {
          return resolve(result);
        })
        .catch(err => {
          return reject(err);
        })
    })
  }

  // Get All Submission for a Competition
  competitionSubmission(competition_id) {
    return new Promise((resolve, reject) => {
      Submission.find({ competition: competition_id })
        .populate('author')
        .then(result => {
          return resolve(result);
        })
        .catch(err => {
          return reject(err);
        })
    })
  }

  //Get ALl Likes for Submissions
  submissionLike() {
    return new Promise((resolve, reject) => {
      SubmissionLike.find({})
        .then(result => {
          return resolve(result);
        })
        .catch(err => {
          return reject(err);
        })
    })
  }


}

module.exports = new FetchController();
