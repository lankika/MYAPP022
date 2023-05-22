import Home from "./Components/Home";
import About from "./Components/About";
import './App.css';
import { Route, Routes, Link } from "react-router-dom";


function App() {

return (
    <div className="App">
      <nav className="nav">
        <Link to="/" className="nav-item">Home</Link>
        <Link to="/about" className="nav-item">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
            
      </Routes>
      

  </div>
  );
}

export default App;
