import React, { useState } from 'react';
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
    description: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
    imgSrc: grilled_tmt,
  },
  {
    title: "Snacks for Travel",
    description: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
    imgSrc: snack_travel,
  },
  {
    title: "Post-workout Recipes",
    description: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
    imgSrc: "path-to-image",
  },
  {
    title: "How To Grill Corn",
    description: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
    imgSrc: how_to_grill,
  },
  {
    title: "Crunchwrap Supreme",
    description: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
    imgSrc: crunchwrap,
  },
  {
    title: "Broccoli Cheese Soup",
    description: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
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
    <div className="w-screen pt-10 p-5 flex justify-center">
      <div className='w-[80%] flex flex-col items-center'>
        <div className='w-[100%]'>
        <h2 className='text-3xl font-semibold text-start pb-4'>Latest Articles</h2>
        </div>
        <div className='w-[90%] flex flex-col items-center p-4 rounded-lg'>
        <div className="w-[100%] flex justify-between gap-3 ">
          {currentArticles.map((article, index) => (
            <div className="p-3 flex flex-col border-[2px] gap-3 rounded-lg shadow-lg" key={index}>
              <img src={article.imgSrc} alt={article.title} className='w-[18rem] h-[15rem] object-cover rounded-lg' />
              <div className='flex flex-col gap-1'>
              <h3 className='text-center text-xl font-bold text-blue-900'>{article.title}</h3>
              <p className='text-center'>{article.description}</p>
              <p className='p-3 border text-center rounded-lg cursor-pointer hover:bg-slate-300'>Read More</p>
              </div>
            </div>
          ))}
        </div>
        <div className="slider-controls">
          <button onClick={prevPage}>&lt;</button>
          <button onClick={nextPage}>&gt;</button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleSlider;
