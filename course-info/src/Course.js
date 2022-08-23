import React from 'react';
import Header from './Header';
import Content from './Content';

const Course = ({course}) => {
  return (
    <>
      <Header course={course} />

      <Content parts={course} />
    </>
  )
}

export default Course;