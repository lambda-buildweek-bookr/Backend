// book routes will go here

const express = require('express');
const db = require('../data/dbConfig.js');

// will need auth functions

const router = express.Router();

router.get('/', (req, res) => {
  db('books')
  .then(books => {
    const bookList = books.map(book => {
      return { id: book.id, title: book.title, cover_url: book.cover_url };
    });
    res.status(200).json(books);
  })
  .catch(err => res.status(500).json({
    errorMessage: "Server error. Unable to retrieve books"
  }))
});




module.exports = router;