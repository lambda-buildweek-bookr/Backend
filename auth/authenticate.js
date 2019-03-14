require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports = {
  generateToken,
  validateToken,
  restricted
};

const secret =
  process.env.JWT_SECRET ||
  "Do you want to know a secret? Do you promise not to tell?";

function generateToken(user) {
  const payload = {
    id: user.id,
    name: user.name
  };

  const options = {
    expiresIn: "1d"
  };

  return jwt.sign(payload, secret, options);
}

function validateToken(req, res, next) {
  const token = req.headers.authorization;

  if (token) {
    jwt.verify(token, secret, (err, decodedToken) => {
      if (err) {
        res.status(401).json({ Message: "Token Is Invalid" });
      } else {
        req.user_id = decodedToken.id;
        next();
      }
    });
  } else {
    res.status(401).json({ Message: "No Token Provided" });
  }
}

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


// testing

handleDeleteBook = something => {
  console.log("Got here");
  const token = localStorage.getItem('jwt');
  const requestOptions = {
    headers: {
      authorization: token,
    },
  };
  const bookId= this.props.match.params.id
  Axios
  .delete(`https://bookr-app-backend.herokuapp.com/api/book-collection/delete_book/${bookId}`, requestOptions)
  .then(response => {
      console.log(response)
      this.props.history.push('/BookList');
  })
  .catch(err => console.log(err));
  };



  deleteBook = (ev, id) => {
    ev.preventDefault();
    const token = localStorage.getItem('jwt');
    const requestOptions = {
      headers: {
        authorization: token,
      },
    };
    axios
      .delete(`https://bookr-buildweek-backend.herokuapp.com/api/books/${id}`, requestOptions)
      .then(res => {
        this.setState({ books: res.data }); // This may be able to be replaced
        this.props.history.push('/BookList'); // by this where /BookList is wherever you want to send the user, perhaps the main page of books
      })
      .catch(err => console.log(err));
  };
  .then(res => {    
    localStorage.setItem("jwt", res.data.token);
    localStorage.setItem("userName", res.data.username);   
    this.props.history.push("/");
  })