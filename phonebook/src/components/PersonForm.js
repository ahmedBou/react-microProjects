import React from 'react';

const PersonForm = ({addName, newName, handleNameChange, phone, handlePhoneChange }) =>{



  return (
    <>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>number: <input value={phone} onChange={handlePhoneChange} />
        </div>
        <div>
          <button type='submit'>add</button>
        </div>
      </form>
    </>
  )
}

export default PersonForm;