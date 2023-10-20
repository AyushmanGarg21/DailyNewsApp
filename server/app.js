// app.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./models/database');

const app = express();
const PORT = process.env.PORT;


app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());


connectDB();

const authRoutes = require('./routes/authRoutes');
const bookmarkRoutes = require('./routes/bookmarkRoutes');
const newsRoutes = require('./routes/newsRoutes');
const userRoutes = require('./routes/userRoutes');

app.use('/auth', authRoutes);
app.use('/api/bookmarks', bookmarkRoutes);
app.use('/api/news', newsRoutes);
app.use('/user', userRoutes);

app.listen(PORT, () => {
  console.log(`Backend created at port ${PORT}`);
});
