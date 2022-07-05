import React, { useState } from 'react';

const Generate = ({data})=>{


  const [count, setCount] = useState(0);
  const[text, setText] = useState([]);
  


  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log("hello");
    let amount = parseInt(count);
    setText(data.slice(0, amount));
  }



  return(
    <>
      <form className="lorem-form"  onSubmit={handleSubmit} >
        <label htmlFor='amount'>paragraphs:</label>
        <input type='number' name="amount" value={count}
               onChange={(event) => setCount(event.target.value)} />
        <button className="btn">generate</button>
      </form>
      <article className='lorem-text'>
        {
          text.map((item, index)=>{
            return(
              <p key={index}>{item}</p>
            )
          })

        }

      </article>

    </>
  )

}

export default Generate;