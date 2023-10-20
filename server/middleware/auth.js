const jwt = require('jsonwebtoken');
const secrets = require('../config/secret');


const authenticateUser = (req, res, next) => {
    try {
      const token = req.headers.authorization.split(' ')[1];
      const decoded = jwt.verify(token, secrets.SECRET_KEY);
      const userEmail = decoded.email; 
      req.user = userEmail; 
      next();
    } catch (error) {
      res.status(401).json({ message: 'Authentication failed' });
    }
  };

module.exports = {
    authenticateUser
};
  