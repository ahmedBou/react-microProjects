import logo from './logo.svg';
import './App.css';
import Tours from './Tours'
import { useEffect, useState } from 'react';
import Loading from './Loading';

const url = 'https://course-api.com/react-tours-project'

function App() {

  const[isLoading, setIsLoading] = useState(true);
  const[city, setCity]= useState([]);


  const removeTour = (id)=>{
    const newTours = city.filter((tour)=> tour.id !==id );
    console.log(newTours);
    setCity(newTours);
  }

  const fetchTours = async()=>{
    setIsLoading(true);
    try {
      const resp = await fetch(url);
      const data = await resp.json();
      console.log(data);
      setIsLoading(false);
      setCity(data)
    } catch (e) {
      setIsLoading(false);
      console.log(e);
    }


  }

  useEffect(()=>{
    fetchTours();
  }, [])

  if(isLoading){
    return (
      <>
        <main>
          <Loading />
        </main>
      </>
    )
  }

  if(city.length === 0){
    return (

        <div className='title'>
          <h2>no tours left</h2>
          <button className='btn' onClick={fetchTours}>Refresh</button>
        </div>

    )
  }
  return (
    <>
      <main>


        <Tours city = {city} removeTour = {removeTour} />



      </main>

    </>
  )}

export default App;
