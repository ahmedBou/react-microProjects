import { useState } from 'react';

const anecdotes = [
  'If it hurts, do it more often.',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
  'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
];


function App() {

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));


  const randomAnecdote = () => {
    const random = Math.floor(Math.random() * anecdotes.length);
    // console.log(random);
    setSelected(random);
    return random;
  };

  const mostVotes = () => {
    return Math.max(...votes);
  }

  console.log(mostVotes());
  const bestAnecdote = ()=>{
    return anecdotes[votes.indexOf(mostVotes())];
  }


  console.log(bestAnecdote());
  const handleVote = () => {
    const copy = [...votes];
    copy[selected] += 1;
    setVotes(copy);

  };

  return (
    <>
      <h2>Anecdote of the day</h2>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <button type='button' onClick={randomAnecdote}> next anecdote</button>
      <button type='button' onClick={handleVote}> vote</button>
      <h2>Anecdote with most votes</h2>
      <p>{bestAnecdote()}</p>
      {mostVotes()}


    </>
  );
}

export default App;
