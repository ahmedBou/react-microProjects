import React from 'react';

const Button = ({good,neutral,bad, all, average, positive}) => {

  return(
    <>
      <button type='button' onClick={good}>Good</button>
      <button type='button' onClick={neutral}>neutral</button>
      <button type='button' onClick={bad}>bad</button>
      <button type='button' onClick={all}>all</button>
      <button type='button' onClick={average}>average</button>
      <button type='button' onClick={positive}>positive</button>
    </>
  )
}

export default Button;