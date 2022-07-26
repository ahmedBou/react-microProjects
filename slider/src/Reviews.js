import React, { useState } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import people from './data';


const Reviews = () => {

  const[value, setValue] = useState(0);
  const {image, name, title, quote} = people[value];

  console.log(`data ${name}`);

  console.log("people.length",people.length);
  console.log("value", value);

  const prev = ()=>{
    if(value < people.length ){
      console.log("hello");
      let value = people.length-1
      setValue(value -1);
    }
    else{
      setValue(0);
    }
  }
  const next = ()=>{
    if(value <= people.length){
      setValue(value+1);
    }else{
      setValue(1)
    }
  }



  return(
    <>
      <div className='section-center'>
        <article>
          <img src={image} alt={name} className='person-img'/>
          <h4>{name}</h4>
          <p className='title'>{title}</p>
          <p className='text'>{quote}</p>
          <FaQuoteRight />
        </article>
        <button className='prev' onClick={prev}> <FiChevronLeft /></button>
        <button className='next' onClick={next}> <FiChevronRight /></button>
      </div>
    </>
  )
}

export default Reviews;