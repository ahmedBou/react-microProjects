import React from 'react';




const List =({people})=>{

  return (
    <>
      {
        people.map((item)=>{
          const{id, image, name, age} = item
          return(
            <div key={id} className='person'>
              <img src={image} alt={{name}}/>
              <h3>{name}</h3>
              <p>{age} years</p>
            </div>
          )
        })

      }
    </>

  )
}

export default List;