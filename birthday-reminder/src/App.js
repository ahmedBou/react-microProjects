import React from 'react'
import List from './List';
import data from './data';



function App() {

  const [people, setPeople] = React.useState(data)


  return (
    <main>
      <div className="container" >

        <h3>{people.length} birthday today </h3>
        <List people={people}/>
        <button type='button' onClick={()=> setPeople([])}>clear all</button>

      </div>
    </main>
  );

}



export default App;
