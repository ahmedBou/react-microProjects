import React from 'react';

const StatisticLine = ({good, neutral, bad, all, average, positive}) => {
  return(
    <>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {all}</p>
      <p>average {average}</p>
      <p>positive {positive}</p>
    </>
  )
}

export default StatisticLine;