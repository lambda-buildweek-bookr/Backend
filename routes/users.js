const express = require("express");
const db = require("../data/dbConfig.js");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const auth = require("../auth/authenticate");

const secret =
  process.env.JWT_SECRET ||
  "Do you want to know a secret? Do you promise not to tell?";

function restricted(req, res, next) {
  const token = req.headers.authorization;

  if (token) {
    jwt.verify(token, secret, (err, decodedToken) => {
      if (err) {
        res.status(403).json({
          message: "Are you a hacker? Get out of here!!"
        });
      } else {
        req.decoded = decodedToken;
        next();
      }
    });
  } else {
    res.status(401).json({ message: "No token provided" });
  }
}

router.get("/", restricted, (req, res) => {
  db("users")
    .then(users => {
      res.status(200).json(users);
    })
    .catch(err =>
      res.status(500).json({
        Message: "Server Error. Can't get users"
      })
    );
});

router.post("/login", (req, res) => {
  const { name, password } = req.body;

  db("users")
    .where({ name: name })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = auth.generateToken(user);
        res.status(200).json({ token, message: `Welcome ${name}` });
      } else {
        res.status(401).json({ message: "You shall not pass!" });
      }
    })
    .catch(err =>
      res.status(500).send({ message: "Server error. Can't log in" })
    );
});

router.post("/register", (req, res) => {
  const { name, password } = req.body;
  if (!name || !password)
    res
      .status(422)
      .json({ message: "You must include the requested information" });

  const hash = bcrypt.hashSync(password, 14);

  db("users")
    .insert({ name, password: hash })
    .then(ids => {
      const id = ids[0];

      db("users")
        .where({ id })
        .first()
        .then(user => {
          const token = auth.generateToken(user);
          res
            .status(201)
            .json({ id: user.id, token, message: "User successfully added" });
        })

        .catch(err => res.status(500).send(err));
    })
    .catch(err => res.status(500).send({message: "Server error. Most likely you are trying to enter a User name that already exists"}));
});

module.exports = router;
