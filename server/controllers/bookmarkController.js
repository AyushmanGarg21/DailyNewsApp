const { v4: uuidv4 } = require('uuid');
const User = require('../models/user');


const getBookmarks = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.user });
        if (!user) {
          return res.status(401).json({ message: 'Authentication failed' });
        }
        res.status(200).json(user.bookmarks);
      } catch (error) {
        res.status(500).json({ message: 'Server error' });
      }
    };

const createBookmark = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.user }); 
        if (!user) {
          return res.status(401).json({ message: 'Authentication failed' });
        }
        const {title, description, url, urlToImage } = req.body;
        const _id = uuidv4();
        const bookmark = { _id, title, description, url, urlToImage };
        user.bookmarks.push(bookmark);
        await user.save();
        res.status(201).json({ message: 'Bookmark created successfully' });
      } catch (error) {
        res.status(500).json({ message: 'Server error' });
      }
    };

const deleteBookmark = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.user });
        if (!user) {
          return res.status(401).json({ message: 'Authentication failed' });
        }
        const { id } = req.params;
        user.bookmarks = user.bookmarks.filter((bookmark) => bookmark._id !== id);
        await user.save();
        res.status(200).json({ message: 'Bookmark deleted successfully' });
      } catch (error) {
        res.status(500).json({ message: 'Server error' });
      }
    };


module.exports = { getBookmarks, createBookmark, deleteBookmark };