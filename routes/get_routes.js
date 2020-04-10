const express= require('express');
const routes= express.Router();

// Controllers
const fetchController= require('./controller/fetch');


routes.get('/user',(req, res)=>{
  fetchController.users()
  .then(result=> {
    res.json({
      status:'success',
      msg:'Users',
      result: result
    })
  })

  .catch(err=>{
    res.json({
      status:'error',
      msg:'Error in Adding Liked Blog to User Profile'
    })
  })
})

routes.get('/competition',(req, res)=>{
  console.log('hittt')
  fetchController.competition()
  .then(result=>{
    res.json({
      status:'success',
      result:result
    })
  })
  .catch(err=>{
    res.json({
      status:'error',
      error:err
    })
  })
})

// This is to Get ALl the Submission
routes.get('/submission', (req, res) => {
  fetchController.submission()
  .then(result=>{
    res.status(200).json({
      status:'success',
      result:result
    })
  })
  .catch(err=>{
    res.status(400).json({
      status:'error',
      error:err
    })
  })
})

// This is to fecth the submissions for the particular competition

routes.get('/competition/:id/submissions',(req, res)=>{
  fetchController.competitionSubmission(req.params.id)
  .then(result=>{
    res.status(200).json({
      status:'success',
      result:result
    })
  })
  .catch(err=>{
    res.status(400).json({
      status:'error',
      error:err
    })
  })
})

// This is to fetch all the likes for the submission
routes.get('/submission-like', (req, res) => {
  fetchController.submissionLike()
  .then(result=>{
    res.status(200).json({
      status:'success',
      result:result
    })
  })
  .catch(err=>{
    res.status(400).json({
      status:'error',
      error:err
    })
  })
})



module.exports= routes;
