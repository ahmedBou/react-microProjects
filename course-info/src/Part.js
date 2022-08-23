import React from 'react';
import Total from './Total';

const Part = ({name,part}) => {
  // console.log(name, part);
  return(
    <>
      <h3>{name} </h3>
      {
        part.map((item)=>{

          const {id, name, exercises} = item;

          return(
            <>
              <div key={id}>
                <p>{name} {exercises}</p>
              </div>
            </>
          )
        })
      }
      <Total parts={part} />

    </>
  )
}

export default Part;