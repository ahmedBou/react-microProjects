import React, { useEffect, useState } from 'react';
import Recap2 from './Recap2';


const url = 'https://course-api.com/react-tours-project';
const Recap = () => {
  const [tours, setTours] = useState([]);
  const removeItem = (id)=>{
    const newTour = tours.filter(tour => tour.id !== id);
    setTours(newTour)
  }

  // console.log(tours);

  const handleApi = async () => {
    const resp = await fetch(url);
    const data = await resp.json();
    console.log(data);
    setTours(data);
  };
  // console.log(handleApi());
  useEffect(() => {
    handleApi();
  }, []);



  return (
    <>
      <main>
        <section>
          <div className='title'>
            <h2>Our Tours</h2>
            <div className='underline'> </div>
          </div>

          {
            tours.map((tour) => {
              return <Recap2  key={tour.id}  {...tour} removeItem = {removeItem}/>
            })
          }
        </section>
      </main>
    </>
  );
};

export default Recap;