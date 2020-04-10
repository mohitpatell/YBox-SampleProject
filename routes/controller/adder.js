//  MongoDB Models
const SubmissionLike = require('../../model/submission_like');
const Submission = require('../../model/submission')
const User = require('../../model/user');
const Competition = require('../../model/competition')
class AdderOperationController {

  addNewUser(values) {
    console.log(values);
    return new Promise((resolve, reject) => {
          const user = new User({
            name: values.name,
            email: values.email,
            date_added: getTime(),
          });
          user.save()
            .then(result => {
              resolve(result);
            })
            .catch(err => reject(err));
        });
  }

  competition(values) {
    return new Promise((resolve, reject) => {
      const competition = new Competition({
        name: values.name,
        desc: values.desc,
        author: values.author,
        date_added: getTime()
      })
      competition.save()
        .then(result => {
          return resolve(result);
        })
        .catch(err => {
          return reject(err);
        })
    })
  }

  submission(values) {
    console.log(values);
    return new Promise((resolve, reject)=> {
      const submission = new Submission({
        image: values.image,
        author: values.author,
        competition: values.competition
      })

      submission.save()
      .then(result=> {
        return Competition.findByIdAndUpdate({_id:values.competition},{
          $inc:{"submission":1}
        })
      })
      .then(result=>{ return resolve(result)})
      .catch(err=> { return reject(err)});
    })
  }

  submissionLike(values) {
    console.log(values);
    return new Promise((resolve, reject)=> {
      const submission_like = new SubmissionLike({
        author: values.author,
        submission: values.submission
      })
      submission_like.save()
      .then(result=> {
        return Submission.findByIdAndUpdate({_id:values.submission},{
          $inc:{"like":1}
        })
      })
      .then(result=>{ return resolve(result)})
      .catch(err=> { return reject(err)});
    })
  }

}

module.exports = new AdderOperationController();

// This Function is for Getting IST
function getTime() {
  var today = new Date();
  var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

  var currentTime = new Date();

  var currentOffset = currentTime.getTimezoneOffset();

  var ISTOffset = 330;   // IST offset UTC +5:30

  var ISTTime = new Date(currentTime.getTime() + (ISTOffset + currentOffset) * 60000);

  // ISTTime now represents the time in IST coordinates
  return ISTTime;
}
