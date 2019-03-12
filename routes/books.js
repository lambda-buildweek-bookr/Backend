// book routes will go here

const express = require("express");
const db = require("../data/dbConfig.js");

// will need auth functions

const router = express.Router();

router.get("/", (req, res) => {
  db("books")
    .then(books => {
      const bookList = books.map(book => {
        return { id: book.id, title: book.title, cover_url: book.cover_url };
      });
      res.status(200).json(books);
    })
    .catch(err =>
      res.status(500).json({
        errorMessage: "Server error. Unable to retrieve books"
      })
    );
});

router.get("/:id", (req, res) => {
  const  book_id  = req.params.id;
  

  db("books")
    .where({ id: book_id })
    .first()
    .then(book => {
      
      res
        .status(200)
        .json( book );
    })
    .catch(err =>
      res.status(500).json({
        errorMessage: "Server error. Unable to retrieve book"
      })
    );
});

// this is to delete a book. Also have to delete all the reviews associated with that book

router.delete("/:id", (req, res) => {
  // update with validationToken
  const  book_id  = req.params.id;
  db("reviews")
    .where({ book_id: book_id })
    .del()
    .then(book => {
      db("books")
        .where({ id: book_id })
        .first()
        .del()
        .then(count => {
          res.status(204).end();
        });
    })
    .catch(err =>
      res.status(500).json({ errorMessage: "Server Error. Cannot delete book" })
    );
});

module.exports = router;
