import { useEffect, useState } from 'react';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import axios from 'axios';

function App() {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [phone, setPhone] = useState('');
  const [search, setSearch] = useState('');


  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => setPersons(response.data));
  }, []);


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
      axios.post('http://localhost:3001/persons', personObject)
          .then(response => setPersons([...persons, response.data]))
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
                  phone={phone} handlePhoneChange={handlePhoneChange} />

      <h2>Numbers</h2>
      <Persons searchPerson={searchPerson} />

    </div>
  );
}

export default App;
