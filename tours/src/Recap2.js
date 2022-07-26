import React, { useEffect, useState } from 'react';

const Recap2 = ({id, image, info, price, name, removeItem}) => {

  const [show, setShow] = useState(false);



  return (
    <>
      <div className='single-tour'>
        <img src={image} alt={name} />
        <footer>
          <div className='tour-info'>
            <h4>{name}</h4>
            <h4 className='tour-price'>
              {price}
            </h4>
          </div>
          <p>
            {!show ? `${info.substring(0,100)} ...`: `${info}...`}
            <button onClick={()=>{setShow(!show)}}>
              {!show ? 'Read More': 'show Less' }
            </button>
          </p>
          <button className='delete-btn' onClick={removeItem(id)}  >not interested </button>
        </footer>
      </div>
    </>
  )
}

export default Recap2;