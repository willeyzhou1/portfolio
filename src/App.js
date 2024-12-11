import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import NavPage from './NavPage/Navpage.js'
import About from './About/About.js'
import Projects from './Projects/Projects.js'
import Contact from './Contact/Contact.js'
import './App.css';

function App() {
  return (
    /*
    <div className="App">
      <Router>
        <NavPage />
        <Routes>
        <Route path="/" element={<About/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/contact" element={<Contact/>}/>
        </Routes>

      </Router>
    </div>
    */
   <div className="App">
    <NavPage />
    <About />
    <Projects />
    <Contact />
   </div>
  );
}

export default App;
