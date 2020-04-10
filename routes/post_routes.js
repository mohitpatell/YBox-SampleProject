
const express = require('express');
const routes = express.Router();
// Controllers
const adderController = require('./controller/adder');
const fetchController = require('./controller/fetch');

// Route for adding Videos by Author
routes.post('/newuser', (req, res) => {
  console.log(req.body);
  adderController.addNewUser(req.body)
    .then((result) =>
      res.status(200).json({
        status: "success",
        msg: "User Added Successfully"
      })
    )
    .catch(err => res.status(200).json({
      status: "error",
      payload: err
    }));
})

// This is for user related queries (i.e when user tries to contact)
routes.post('/competition', (req, res) => {
  console.log(req.body);
  adderController.competition(req.body)
    .then(result =>
      res.status(200).json({
        status: 'success',
        msg: 'Competition Added Successfully',
        result: result
      })
    )
    .catch(err =>
      res.status(401).json({
        status: 'error',
        msg: 'Error in Contacting.',
        error: err
      })
    )
})


routes.post('/submission', (req, res) => {
  console.log(req.body);
  adderController.submission(req.body)
    .then(result =>
      res.status(200).json({
        status: 'success',
        msg: 'Submission Added Successfully',
        result: result
      })
    )
    .catch(err =>
      res.status(401).json({
        status: 'error',
        msg: 'Error in Contacting.',
        error: err
      })
    )
})

routes.post('/submission-like', (req, res) => {
  adderController.submissionLike(req.body)
    .then(result =>
      res.status(200).json({
        status: 'success',
        msg: 'Like To Submission Added Successfully',
        result: result
      })
    )
    .catch(err =>
      res.status(401).json({
        status: 'error',
        msg: 'Error in Contacting.',
        error: err
      })
    )
})

module.exports = routes;
