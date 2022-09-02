import { useState } from 'react';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';

function App() {
  const [persons, setPersons] = useState([
    { name: 'ahmed boutayeb', number: '040-123456', id: 1 },
    { name: 'foo bar', number: '39-44-5323523', id: 2 },
    { name: 'alan turin', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]);
  const [newName, setNewName] = useState('');
  const [phone, setPhone] = useState('');
  const [search, setSearch] = useState('');


  const addName = (e) => {
    e.preventDefault();
    const personObject = {
      id: persons.length + 1,
      name: newName,
      number: phone
    };
    persons.find(
      person => person.name === newName) ?
      alert(`${newName} is already added to phonebook`) :
      setPersons([...persons, personObject]);
    setNewName('');
  };

  const filterPerson = persons.filter((person) => person.name.toLowerCase() === search);

  const searchPerson = search.length > 0 ? filterPerson : persons;

  const handleNameChange = e => setNewName(e.target.value);

  const handlePhoneChange = e => setPhone(e.target.value);

  const handleSearch = e => setSearch(e.target.value);

  return (

    <div>

      <h2>Phonebook</h2>
      <Filter search={search} handleSearch={handleSearch} />

      <h2>Add a New</h2>
      <PersonForm addName={addName} newName={newName}
                  handleNameChange={handleNameChange}
                  phone={phone} handlePhoneChange={handlePhoneChange}  />

      <h2>Numbers</h2>
     <Persons searchPerson={searchPerson} />

    </div>
  );
}

export default App;
