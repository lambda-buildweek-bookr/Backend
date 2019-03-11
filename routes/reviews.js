// reviews routes will go here

const express = require('express');
const db = require('../data/dbConfig.js');

// will need auth functions

const router = express.Router();


  
router.get('/', (req, res) => {
  db('reviews')
  .then(reviews => {
    res.status(200).json(reviews);
  })
  .catch(err => res.status(500).json({
    errorMessage: "Server error. Unable to retrieve Reviews"
  }))
});




module.exports = router;