import React from 'react'
import Tour from './Tour';

const Tours = ({city, removeTour})=>{
  return(
    <section>
      <div className='title'>
        <h2>ours Tours</h2>
        {/*<div className='underline'></div>*/}
      </div>
      <div>
        {
          city.map((tour)=>{
            return <Tour key = {tour.id} {...tour} removeTour = {removeTour}> </Tour>
          })
        }
      </div>
    </section>
  )
}
export default Tours;