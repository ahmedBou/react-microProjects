import React from 'react';
import {books} from './books'
import Book from './Book'

function App() {

  return (
    <div className='container'>
      <BookList />
    </div>
  );
}


const BookList= () =>(

    books.map((item)=>(

        <Book
          key={item.objectID}
          item ={item}
        />
      )
    )
)

export default App;
