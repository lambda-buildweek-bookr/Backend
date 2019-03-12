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

router.get('/:book_id', (req, res) => {
    const { book_id: id } = req.params;
  
    db('books')
    .where({id})
    .then(book=> {
      db.from('reviews')
      .innerJoin('users', 'reviews.user_id', 'users.id')
      .where('book_id',id)
      .then(reviews => {
        res.status(200).json({book: book[0], reviews});
      })
    })
    .catch(err => res.status(500).json({errorMessage: err}))
  });




module.exports = router;