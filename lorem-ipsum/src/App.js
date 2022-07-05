import logo from './logo.svg';
import './App.css';
import Generate from './Generate';
import data from './data';

function App() {
  return (
    <div className="section section-center">
      <h2>TIRED OF BORING LOREM IPSUM?</h2>
      <Generate text = {data} />
    </div>
  );
}

export default App;
