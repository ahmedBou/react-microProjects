import React from 'react';

const Total = ({parts} ) => {
  let total = 0;
  parts.forEach((item)=> {
    total = total + item.exercises
  })

  return(
    <>

      <p>Number of exercises {total}</p>
    </>
  )
}

export default Total;