
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import React, {useState} from 'react';
const SingleQuestion = ({info, title}) => {
  const[show, setShow] = useState(false)
  console.log(info);
  return (
    <>

            <article className='question'>
              <header>
                <h4>{title}</h4>
                <button  onClick={()=>{setShow(!show)}}>{(show ? <AiOutlineMinus />: <AiOutlinePlus/> )}</button>
              </header>
              {show && <p>{info}</p>}
              {/*<p>{show ? info: ''}</p>*/}


            </article>





    </>
)};

export default SingleQuestion;