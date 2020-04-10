//  MongoDB Models

const User= require('../../model/submission_like')

class UpdateController{

  addLikedBLogToUser(values){
    return new Promise((resolve, reject)=>{

      User.findByIdAndUpdate({_id:values.userid},{$addToSet:{likedblog:values.blogid}})
      .then(result =>{
        resolve(result);
      })
      .catch(err =>{
        reject(err);
      });

    })
  }

}

module.exports= new UpdateController();
