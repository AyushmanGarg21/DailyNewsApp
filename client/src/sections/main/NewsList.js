// src/components/NewsList.js
import React, { useEffect, useState } from 'react';
import NewsContainer from '../../components/NewsContainer';
import axios from 'axios';

const NewsList = ({endpoint}) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/news/${endpoint}`)
      .then((response) => {
        setArticles(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [endpoint]);

  return (
    <div>
    {articles.length > 0 ? (
    <div className="album py-5 bg-body-tertiary">
    <div className="container">
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        {articles.map((article, index) => (
          <NewsContainer
            key={index}
            title={article.title}
            description={article.description}
            url={article.url}
            urlToImage={article.urlToImage}
            publishedAt = {article.publishedAt}
          />
        ))}
    </div>
    </div>
    </div>
    ) : (
        <div className='server-main'>
        <img src="images\ServerError.jpg" alt="....." className="server-img-main" />
        </div>
      )}
    </div>
  );
};

export default NewsList;
