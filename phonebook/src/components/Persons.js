import React from 'react';

const Persons = ({ searchPerson, deletePhone }) => {


  return (
    <>
      {
        searchPerson.map((person) => {
          const { id, name, number } = person;
          return (
            <div key={id}>
              <span>{name} {number}  </span>
              <span><button onClick={()=>deletePhone(id)}>delete</button></span>
            </div>
          );
        })
      }
    </>
  )
}
export default Persons;