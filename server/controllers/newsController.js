const fetch = require('node-fetch');
const secrets = require('../config/secret');


const getTrendingNews = async (req, res) => {
    try {
        const response = await fetch(`${secrets.NEWS_API_URL}top-headlines?country=in&apiKey=${secrets.NEWS_API_KEY}`);
        const data = await response.json();
        res.status(200).json(data.articles);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
    };

const getNewsByQuery = async (req, res) => {
    const { query } = req.params
    console.log(query)
    fetch(`${secrets.NEWS_API_URL}everything?q=${query}&sortBy=publishedAt&language=en&apiKey=${secrets.NEWS_API_KEY}`)
        .then(response => response.json())
        .then(data => res.status(200).send(data.articles))
        .catch(err => console.log(err))
};

const getNewsByCategory = async (req, res) => {
    const { category } = req.params
    fetch(`${secrets.NEWS_API_URL}top-headlines?country=in&pageSize=100&category=${category}&apiKey=${secrets.NEWS_API_KEY}`)
        .then(response => response.json())
        .then(data => res.status(200).send(data.articles))
        .catch(err => console.log(err))
};


module.exports = { getTrendingNews, getNewsByQuery, getNewsByCategory };