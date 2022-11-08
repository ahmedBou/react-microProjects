import { useEffect, useState } from 'react';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import phoneService from './services/phoneBook';
import Notification from "./components/Notification";
import axios from 'axios';

function App() {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [phone, setPhone] = useState('');
  const [search, setSearch] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null)


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
    const newPerson = {
      //id: persons.length + 1,
      name: newName,
      number: phone
    };

    phoneService.create(newPerson).then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
        setSuccessMessage(`Added ${returnedPerson.name}`)
        setTimeout(()=>{setSuccessMessage(null)}, 3000)

    })

    if(!newName || !phone){
      alert("Please fill in the fields");
      return
    }

    const existingPerson =  persons.find(person => person.name === newName);
      // console.log(existingPerson)


    if(existingPerson && existingPerson.number === phone){
        console.log("exist")
        alert(`${newName} is already added to phonebook`);
        setNewName("");
        setPhone("");
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
                    setPersons(persons.map((person)=>person.id !== id? person : returnedPerson ));
                    setSuccessMessage(` number of ${returnedPerson.name} been successfully updated`)
                    setTimeout(()=>{setSuccessMessage()},3000)
                }).catch((err)=>{
                    if(err.response.data){
                        setErrorMessage(err.response.data.error)
                        setTimeout(() => {
                            setErrorMessage(null)
                        }, 5000)

                    }else{
                        setErrorMessage(
                            `Information of ${changedPerson.name} has already been removed from server`
                        )
                        setPersons(persons.filter((p) => p.id !== id))
                        setNewName("");
                        setPhone("")
                        setTimeout(() => {
                            setErrorMessage(null)
                        }, 5000)
                    }
            })
        }else{
            return
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
    if( window.confirm(`Do you really want to delete ${person.name} ?`)){
        phoneService
            .deletePhone(id)
            .then(() =>{
                setSuccessMessage(`${person.name} has been successfully deleted`)
                setPersons(persons.filter(person=> person.id !== id))
            })
            .catch(err => {
                setErrorMessage(`${person.name} already deleted from the phoneBook`)

            })
        setTimeout(()=> {setSuccessMessage(null)},3000)
        setTimeout(()=> {setErrorMessage(null)},3000)
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
      <Notification errorMessage={errorMessage} successMessage={successMessage} />
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
