import Home from './componenets/Home';
import AboutMe from './componenets/AboutMe'
import {Routes, Route, Link} from 'react-router-dom';
import './App.css';


function App() {
    return (
        <div>
            <nav className="nav">
                <Link to="/" className="nav-item">Home</Link>
                <Link to="/about-me" className="nav-item">About me</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about-me" element={<AboutMe />} />
            </Routes>

        </div>

    );
}

export default App;
