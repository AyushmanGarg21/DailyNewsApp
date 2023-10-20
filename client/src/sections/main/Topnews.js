import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Carousel } from 'react-bootstrap';

const Topnews = (props) => {
  const [articles, setArticles] = useState([]);
  const endpoints = props.endpoint.split('/');
  const lastPart = endpoints[endpoints.length - 1];
  const capitalizedLastPart = lastPart.charAt(0).toUpperCase() + lastPart.slice(1);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/news/trending")
      .then((response) => {
        setArticles(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      {articles.length > 0 && (
        <div>
          <div className="carousel-container">
            <Carousel>
              {articles.map((article, index) => (
                <Carousel.Item key={index}>
                  <img
                    src={article.urlToImage}
                    alt={article.title}
                    className="d-block w-100"
                  />
                  <Carousel.Caption>
                    <h3>{article.title}</h3>
                    <p>{article.description}</p>
                    <a
                      href={article.url}
                      className="icon-link gap-1 icon-link-hover stretched-link"
                    >
                      Continue reading...
                    </a>
                  </Carousel.Caption>
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
          <h3 className="pb-4 mb-4 fst-italic border-bottom">Trending in {capitalizedLastPart}</h3>
        </div>
      )}
    </div>
  );
};

export default Topnews;
