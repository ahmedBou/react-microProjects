import React, { useState, useEffect } from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';

const url = 'https://course-api.com/react-tabs-project';

function App() {

  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  const [value, setValue] = useState(0);



  const handleApi = async () => {
    const response = await fetch(url);
    const data = await response.json();

    setJobs(data);
    setLoading(false);

  };

  useEffect(() => {
    handleApi();
  }, []);


  if (loading) {
    return <section>
      Loading
    </section>;
  }

  const getJobs = (index)=>{
    return setValue(index)
  }

  const {title, dates, duties, company } = jobs[value];
  return (
    <>
      <section className='section'>
        <div className='title'>
          <h2>Experience</h2>
          <div className='underline'> </div>
        </div>


        <div  className='jobs-center'>
          <div className='btn-container'>
            {
              jobs.map((item, index)=>{
                const {company} = item;
                return (
                  <div key={item.id}>
                    <button className={`job-btn ${index === value && 'active-btn'}`} onClick={()=>{getJobs(index)}} >{company}</button>
                  </div>
                )
              })
            }

          </div>
          <article className='job-info'>
            <h3>{title}</h3>
            <h4>{company}</h4>
            <p className='job-date'>{dates}</p>
            {
              duties.map((item, index)=>{
                return(
                  <div key={index} className='job-desc' >
                    <span><FaAngleDoubleRight className='job-icon'/></span>
                    {item}
                  </div>
                )
              })
            }
          </article>
        </div>

      </section>


    </>
);
}

export default App;
