import React from 'react';
import Part from './Part';

const Content = ({parts}) => {

  return (
    <>
      {
        parts.map((item, index)=>{
          const {name, exercises} = item;
          return(
            <div key={index}>
              <Part name={name} exercises={exercises}/>
            </div>
          )
        })
      }

    </>
  )
}

export default Content;