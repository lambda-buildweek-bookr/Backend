require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports = {
  generateToken
  validateToken
};

const secret = process.env.JWT_SECRET  || 'Do you want to know a secret? Do you promise not to tell?';


function generateToken(user) {

  const payload = {
    id: user.id,
    username: user.name,
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