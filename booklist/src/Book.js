import React from 'react';
//rsf
const Book = ({ item}) => {

  const clickHandler = (e)=>{
    // alert("hello");
    // console.log(e);
  }
  const retrieve = (author)=>{
    console.log(author);
  }

  return (

    <div className='cart'  onMouseOver={()=> console.log(item.title)}>
      <div className='image-container' >
        <img src={item.images}
             alt='Out of the clear' />
      </div>
      <h2  onClick={()=>{console.log(item.title)}}>{item.title}</h2>
      <h3>by {item.author}</h3>
      <button type='button' onClick={clickHandler}>submit</button>

      <button type="button" onClick={()=>retrieve(item.author)}> another button </button>

    </div>

  )}


export default Book;