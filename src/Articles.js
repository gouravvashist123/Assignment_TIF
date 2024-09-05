import  React, {useState} from 'react';
import './Articles.css';
import grilled_tmt from './images/img4.2.jpeg';
import how_to_grill from './images/img5.jpeg';
import snack_travel from './images/img3_tif.jpeg';
import brocolli from './images/img7.jpeg';
import crunchwrap from './images/img6.jpeg';
// import grilled_tmt from './images/img4.2.jpeg';

const articles = [
    {
      title: "Grilled Tomatoes at Home",
      description: "Lorem ipsum dolor sit amet...",
      imgSrc: grilled_tmt,
    },
    {
      title: "Snacks for Travel",
      description: "Lorem ipsum dolor sit amet...",
      imgSrc: snack_travel,
    },
    {
      title: "Post-workout Recipes",
      description: "Lorem ipsum dolor sit amet...",
      imgSrc: "path-to-image",
    },
    {
      title: "How To Grill Corn",
      description: "Lorem ipsum dolor sit amet...",
      imgSrc: how_to_grill,
    },
    {
      title: "Crunchwrap Supreme",
      description: "Lorem ipsum dolor sit amet...",
      imgSrc: crunchwrap,
    },
    {
      title: "Broccoli Cheese Soup",
      description: "Lorem ipsum dolor sit amet...",
      imgSrc: brocolli,
    },
  ];
  

const ArticleSlider = () => {
    const [currentPage, setCurrentPage] = useState(0);
  
    const articlesPerPage = 3;
    const totalPages = Math.ceil(articles.length / articlesPerPage);
  
    const nextPage = () => {
      setCurrentPage((prev) => (prev + 1) % totalPages);
    };
  
    const prevPage = () => {
      setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
    };
  
    const currentArticles = articles.slice(
      currentPage * articlesPerPage,
      currentPage * articlesPerPage + articlesPerPage
    );
  

return (
    <div className="article-slider">
      <h2>Latest Articles</h2>
      <div className="articles-container">
        {currentArticles.map((article, index) => (
          <div className="article" key={index}>
            <img src={article.imgSrc} alt={article.title} />
            <h3>{article.title}</h3>
            <p>{article.description}</p>
            <button>Read More</button>
          </div>
        ))}
      </div>
      <div className="slider-controls">
        <button onClick={prevPage}>&lt;</button>
        <button onClick={nextPage}>&gt;</button>
      </div>
    </div>
  );
};

export default ArticleSlider;
