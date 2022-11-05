const Note = ({ note, toggleImportance }) => {
    // Changing the Importance of Notes
  const label = note.important ? 'make not important' : 'make important';
  return (
    <li className='note'>
      {note.content}
      <button onClick={toggleImportance}>{label}</button>
    </li>
  )
}

export default Note