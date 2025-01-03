import React from "react";
import NavPage from './NavPage/Navpage.tsx'
import About from './About/About.tsx'
import Projects from './Projects/Projects.tsx'
import Contact from './Contact/Contact.tsx'
import Biography from './Biography/Biography.tsx'
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
    <Biography />
    <Projects />
    <Contact />
   </div>
  );
}

export default App;
