import React, {useState} from 'react';

function App() {
  // Write useState & onChange handler ONLY for those inputs that are controlled
  const [email, setEmail] = useState('')

  const submitForm = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const inputObject = Object.fromEntries(formData); // convert the FormData object to a JSON object

    console.log(inputObject);
  };

  return (
    <div className="App">
      <form onSubmit={submitForm}>
        <div>
          <input value={email} name="email"
                 placeholder="email"
                 onChange={(e)=>{setEmail(e.target.value)}}/>
        </div>

        <div>
          <input name="password" placeholder="password" />
        </div>

        <div>
          <input name="phone" placeholder="phone" />
        </div>

        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
