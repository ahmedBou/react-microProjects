import { useEffect, useState } from 'react';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import phoneService from './services/phoneBook';
import axios from 'axios';

function App() {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [phone, setPhone] = useState('');
  const [search, setSearch] = useState('');


  useEffect(() => {
    phoneService
        .getAll()
        .then(allPersons => setPersons(allPersons))
        .catch(err=>alert(err))

    // axios
    //   .get('http://localhost:3001/persons')
    //   .then(response => setPersons(response.data));
  }, []);



  const addName = (e) => {
    e.preventDefault();
    const personObject = {
      //id: persons.length + 1,
      name: newName,
      number: phone
    };

    if(!newName || !phone){
      alert("Please fill in the fields");
      return
    }

    const existingPerson =  persons.find(person => person.name.toLowerCase() === newName.toLowerCase());

    if(existingPerson && existingPerson.number === phone){
        console.log("exist")
        alert(`${newName} is already added to phonebook`)
        setNewName("")
        setPhone("")
        return
    }
      // Change number for existing person in database
    if(existingPerson && existingPerson.number !== phone){
        if(window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)){
            const changedPerson = {...existingPerson, number: phone}
            const id = existingPerson.id;
            phoneService
                .update(id, changedPerson)
                .then((returnedPerson)=>{
                    setPersons(persons.map((person)=>person.id !== id? person : returnedPerson ))
                })
            setNewName("");
            setPhone("")

        }
    }
    // existingPerson ?
    //   window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`) :
    //   phoneService
    //       .create(personObject)
    //       .then(returnedPhone => setPersons([...persons, returnedPhone.data]))
    //   // axios.post('http://localhost:3001/persons', personObject)
    //   //     .then(response => setPersons([...persons, response.data]))
    //   setNewName('');
  };

  const deletePhone = (id)=>{

    const person = persons.find(person => person.id === id);
    if( window.confirm(`delete ${person.name} ?`)){
        phoneService
            .deletePhone(id)
            .then(() => setPersons(persons.filter(person=> person.id !== id)))
        // axios.delete(`http://localhost:3001/persons/${id}`)
        //     .then(() =>{
        //         setPersons(persons.filter(person=> person.id !== id));
        //     })
    }else{
        return
    }

  }
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
      <Persons searchPerson={searchPerson} deletePhone = {deletePhone}/>

    </div>
  );
}

export default App;
