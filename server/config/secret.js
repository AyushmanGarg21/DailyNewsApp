const crypto = require('crypto');
require('dotenv').config();

const SECRET_KEY = process.env.SECRET_KEY;
const MONGODB_URI = process.env.MONGODB_URI;
const NEWS_API_URL = process.env.NEWS_API_URL;
const NEWS_API_KEY = process.env.NEWS_API_KEY;


module.exports = {
    SECRET_KEY,
    MONGODB_URI,
    NEWS_API_URL,
    NEWS_API_KEY
}; 

