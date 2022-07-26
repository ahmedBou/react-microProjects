import React, { useState } from 'react';
import person from './data';


const Recap = () => {

  console.log(person.length);
  const [people, setPeople] = useState(person);
  const [len, setLen] = useState(person.length);

  return (
    <>
      <main>
        <section className='container'>

          <h3>{len} birthday today</h3>
          {

            people.map((person) => {
              const { id, image, name, age } = person;

              return (
                < div key={id}>
                  <article className='person'>
                    <img src={image} alt={name} />
                    <div>
                      <h4>{name}</h4>
                      <p>{age} years</p>
                    </div>
                  </article>
                </div>
              );

            })

          }
          <button onClick={() => {
              return (
                [setPeople([]),
                  setLen(0)]
              );
            }}>clear all
          </button>

        </section>
      </main>

    </>
  );

};

export default Recap;