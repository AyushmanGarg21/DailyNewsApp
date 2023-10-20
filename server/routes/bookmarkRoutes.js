
const express = require('express');
const bookmarkController = require('../controllers/bookmarkController');
const {authenticateUser} = require('../middleware/auth');

const router = express.Router();

router.get('/',authenticateUser, bookmarkController.getBookmarks);
router.post('/',authenticateUser, bookmarkController.createBookmark);
router.delete('/:id',authenticateUser, bookmarkController.deleteBookmark);

module.exports = router;