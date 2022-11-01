import Note from './components/Note';
import {useEffect, useState} from 'react';

import axios from 'axios';


const App = () => {

    const [notes, setNotes] = useState([]);
    const [newNotes, setNewNotes] = useState('hello world');
    const [showAll, setShowAll] = useState(true);


    useEffect(() => {
        axios
            .get('http://localhost:3001/notes')
            .then(response => setNotes(response.data))
    }, []);
    // console.log(notes)
    console.log('render', notes.length, 'notes')
    const handleNoteChange = (event) => {
        setNewNotes(event.target.value);
    };

    const addNote = (event) => {
        event.preventDefault();

        const noteObject = {
            content: newNotes,
            date: new Date().getTime().toString(),
            important: Math.random() < 0.5,
            // id: notes.length + 1
        };

        // setNotes(notes.concat(noteObject));
        // setNewNotes('');
        axios
            .post('http://localhost:3001/notes', noteObject)
            .then(response => {
                // console.log(response)
                setNotes(notes.concat(response.data))
                setNewNotes('')
            })
    };

    const noteToShow = showAll ? notes : notes.filter((note) => note.important === true)

    // Changing the Importance of Notes
    function toggleImportanceOf(id) {
        // Individual notes stored in the json-server backend can be modified in two different ways by making HTTP requests to the note's unique URL. We can either replace the entire note with an HTTP PUT request, or only change some of the note's properties with an HTTP PATCH request.
        const url = `http://localhost:3001/notes/${id}`;
        const note = notes.find(n => n.id === id);
        const changedNote = {...note, important: !note.important};
        //The callback function sets the component's notes state to a new array that contains all the items from the previous notes array, except for the old note which is replaced by the updated version of it returned by the server
        axios.put(url, changedNote).then(response => {
            setNotes(
                notes.map(n => n.id !== id ? n : response.data)
            )
        })
    }

    return (
        <div>
            <h1>Notes</h1>
            <ul>
                {noteToShow.map(note =>
                    <Note
                        key={note.id}
                        note={note}
                        // Changing the Importance of Notes
                        toggleImportance={() => toggleImportanceOf(note.id)}
                    />
                )}
            </ul>
            <div>
                <button
                    type={'button'}
                    onClick={() => {
                        setShowAll(!showAll)
                    }}>
                    show {showAll ? 'important' : 'all'}
                </button>
            </div>

            <form onSubmit={addNote}>
                <input value={newNotes} onChange={handleNoteChange}/>
                <button type='submit'>save</button>
            </form>
        </div>
    );
};

export default App;