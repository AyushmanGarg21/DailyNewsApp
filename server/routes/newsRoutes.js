// routes/newsRoutes.js
const express = require('express');
const newsController = require('../controllers/newsController');

const router = express.Router();


// Define your news-related routes here
router.get('/trending', newsController.getTrendingNews);
router.get('/search/:query', newsController.getNewsByQuery);
router.get('/category/:category', newsController.getNewsByCategory);

module.exports = router;
