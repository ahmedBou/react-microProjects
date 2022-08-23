import React from 'react';

const Total = ({ parts }) => {
  // const {exercises} = parts
  console.log(parts);
  const total = parts.reduce((prev, curr)=>{
    console.log(prev, curr.exercises);
    return prev + curr.exercises;
  },0)

  return (
    <>
      <h5>total of {total} exercises </h5>
    </>
  );
};

export default Total;