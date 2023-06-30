import { useEffect, useState } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';

const News = ({ country, pagesize, category }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=182ff6c14f2f4209839b0db444f7a5e1&page=1&pagesize=${pagesize}`;
      setLoading(true);
      let data = await fetch(url);
      let parseData = await data.json();
      setArticles(parseData.articles);
      setTotalResults(parseData.totalResults);
      setLoading(false);
    };

    fetchData();
  }, [country, category, pagesize]);

  const handlePrevClick = async () => {
    console.log("previous");
    let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=182ff6c14f2f4209839b0db444f7a5e1&page=${page - 1}&pagesize=${pagesize}`;
    setLoading(true);
    let data = await fetch(url);
    let parseData = await data.json();
    setPage(page - 1);
    setArticles(parseData.articles);
    setLoading(false);
  };

  const handleNextClick = async () => {
    if (!(page + 1 > Math.ceil(totalResults / pagesize))) {
      let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=182ff6c14f2f4209839b0db444f7a5e1&page=${page + 1}&pagesize=${pagesize}`;
      setLoading(true);
      let data = await fetch(url);
      let parseData = await data.json();
      setPage(page + 1);
      setArticles(parseData.articles);
      setLoading(false);
    }
  };

  return (
    <div className="container my-3">
      <h1 className="text-center my-4">NewsMonkey-Top Headlines</h1>
      <div className="text-center">
        {loading && <Spinner />}
      </div>
      <div className='row'>
        {!loading && articles.map((element) => (
          <div className='col-md-3 mx-4' key={element.url}>
            <NewsItem
              title={element.title ? element.title.slice(0, 80) : ""}
              description={element.description ? element.description.slice(0, 50) : ""}
              Imageurl={element.urlToImage}
              newsurl={element.url}
            />
          </div>
        ))}
      </div>
      <div className="container d-flex justify-content-between my-3">
        <button disabled={page <= 1} type="button" className="btn btn-dark" onClick={handlePrevClick}>&larr; previous</button>
        <button disabled={page + 1 > Math.ceil(totalResults / pagesize)} type="button" className="btn btn-dark" onClick={handleNextClick}>next &rarr;</button>
      </div>
    </div>
  );
};

News.propTypes = {
  country: PropTypes.string,
  pagesize: PropTypes.number,
  category: PropTypes.string,
};

News.defaultProps = {
  country: 'in',
  pagesize: 6,
  category: 'general',
};

export default News;