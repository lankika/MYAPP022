import Home from "./Components/Home";
import About from "./Components/About";
import './App.css';
import { useRef, useState } from "react";
//import { Route, Routes, Link } from "react-router-dom";
//import Contact from "./Components/Contact";


function App() {
  const inputRef = useRef(null);
  const resultRef = useRef(null);
  const [result, setResult] = useState(0);

  function plus(e) { 
    e.preventDefault(); 
    setResult((result) => result + Number(inputRef.current.value)); 
  }; 

  function minus(e) {
    e.preventDefault(); 
    setResult((result) => result - Number(inputRef.current.value)); 
  }; 

  function times(e) {
    e.preventDefault(); 
    setResult((result) => result * Number(inputRef.current.value)); 
  };

  function divide(e) {
    e.preventDefault(); 
    setResult((result) => result / Number(inputRef.current.value)); 
  };

  function resetInput(e) {
    inputRef.current.value=0;
  };

  function resetResult(e) {
    e.preventDefault();
    setResult((preVal) => preVal * 0);
  };



return (
    <div className="App">
      {/* <nav className="nav">
        <Link to="/" className="nav-item">Home</Link>
        <Link to="/about" className="nav-item">About</Link>
        <Link to="/contact" className="nav-item">Contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
            
      </Routes> */}

      <div> 
        <h1>Simplest Working Calculator</h1> 
      </div> 
      <form> 
        <p ref={resultRef}> 
          {result} 
        </p> 
        <input
          pattern="[0-9]" 
          ref={inputRef} 
          type="number" 
          placeholder="Type a number" 
        /> 
        <button onClick={plus}>add</button> 
        <button onClick={minus}>minus</button> 
        <button onClick={times}>multiply</button> 
        <button onClick={divide}>divide</button> 
        <button onClick={resetInput}>reset Input</button> 
        <button onClick={resetResult}>reset Result</button> 
      </form>
      
      

  </div>
  );
}

export default App;
