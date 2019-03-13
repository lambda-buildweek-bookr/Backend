// reviews routes will go here

const express = require("express");
const db = require("../data/dbConfig.js");
const { validateToken } = require("../auth/authenticate");

const router = express.Router();

router.get("/", (req, res) => {
  db("reviews")
    .then(reviews => {
      res.status(200).json(reviews);
    })
    .catch(err =>
      res.status(500).json({
        Message: "Server error. Unable to retrieve Reviews"
      })
    );
});

router.get("/:book_id", (req, res) => {
  const { book_id: id } = req.params;

  db("books")
    .where({ id })
    .then(book => {
      db.from("reviews")
        .innerJoin("users", "reviews.user_id", "users.id")
        .where("book_id", id)
        .then(reviews => {
          res.status(200).json({ book: book[0], reviews });
        });
    })
    .catch(err => res.status(500).json({ Message: "Cannot retrieve that book" }));
});

router.post("/add/:book_id", validateToken, (req, res) => {
  // console.log("req: ", req);
  const { book_id } = req.params;
  const { rating, review, user_id } = req.body;
 
  if (!review || !book_id) {
    res
      .status(400)
      .json({ Message: "Information is incomplete. Please try again." });
  }

  db("reviews")
    .insert({ user_id, book_id, review, rating })
    .then(id => {
      res.status(201).json({ id: id[0], review, rating });
    })
    .catch(err =>
      res
        .status(500)
        .json({
          Message:
            "Server Error. Most likely cause is that this user has already submitted a review for this book"
        })
    );
});

module.exports = router;
