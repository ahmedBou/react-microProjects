import React from 'react';

const Persons = ({ searchPerson }) => {


  return (
    <>
      {
        searchPerson.map((person) => {
          const { id, name, number } = person;
          return (
            <div key={id}>
              <p>{name} {number}</p>
            </div>
          );
        })
      }
    </>
  )
}
export default Persons;