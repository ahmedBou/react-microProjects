import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const[index, setIndex]= useState(0);
  const{name, job, image, text} = people[index];


  const prevButton = ()=>{

    index >0 ? setIndex(index-1) : setIndex(index+3)
  }

  const nextButton = ()=>{
    index < 3 ? setIndex(index+1): setIndex(0)
  }

  return (
    <>
      <article className='review'>
        <div className='img-container'>
          <img src={image} alt={name} className='person-img' />
          <span className='quote-icon'> <FaQuoteRight /></span>
        </div>
        <h4 className='author'>{name}</h4>
        <p className='job'>{job}</p>
        <p className='info'>{text}</p>
        <div className='button-container'>

          <button className='prev-btn'onClick={prevButton}>
            <FaChevronLeft />
          </button>

          <button className='next-btn' onClick={nextButton}>
            <FaChevronRight />
          </button>

          <div>
            <button className='random-btn'  onClick={()=>{setIndex(Math.floor(Math.random()*4))}}>
              surprise me
            </button>
          </div>


        </div>



      </article>

    </>
  );
};

export default Review;