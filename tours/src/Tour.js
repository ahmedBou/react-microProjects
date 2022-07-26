import React, { useEffect, useState } from 'react';


const Tour = ({id, image, info, price, name, removeTour}) => {


  const[isError, setIsError] = useState(false);
  const[show, setShow] = useState(false);



  if(isError){
    return <div><h1>Error...</h1></div>
  }




  return(

      <div className='single-tour'>

        <img src={image} alt={name} />
        <footer>
          <div className='tour-info'>
            <h4>{name}</h4>
            <h4 className= 'tour-price'>{price}</h4>
          </div>
          <p >
            {show ? info: `${info.substring(0,200)}...`}
            { <button  onClick={()=>{setShow(!show)}}>{show ? 'show less': 'read more'}</button>}
          </p>
          <button className='delete-btn' onClick={()=>{removeTour(id)}}>Not interested</button>
        </footer>
      </div>
  )
}

export default Tour;