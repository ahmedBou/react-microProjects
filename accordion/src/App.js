import data from './data'
import './App.css';
import SingleQuestion from './SingleQuestion';
import React, {useState} from 'react';

function App() {
  const [questions, setQuestion] = useState(data);
   return (

    <>
      <main>
        <div className='container'>
          <h3>Questions And Answers About Login</h3>

          <section className='info'>
            {
              questions.map((question)=>{
                return <SingleQuestion key ={question.id} {...question} />
              })
            }
          </section>


        </div>

      </main>

    </>
  );
}

export default App;
