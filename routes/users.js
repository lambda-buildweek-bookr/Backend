const express = require('express');
const db = require('../data/dbConfig.js');

// will need to get login check done, authentication (a token) and bcrypt for password. 
// just setting up for now to test db accessability


const router = express.Router();


router.get('/', (req, res) => {
    console.log(res);
  db('users')
  .then(users => {
    // users = users.map(user => {
    //   return {id: user.id, username: user.name}
  
    res.status(200).json(users);
  })
  .catch(err => res.status(500).json({
    Message: "Server Error. Can't get users"
  }))
});

module.exports = router;