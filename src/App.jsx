// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Home from './pages/Home.jsx';
import About from '/src/pages/About.jsx';
import Projects from './pages/Project.jsx';
import Contact from './pages/Contact.jsx';



function App() {
  return (
    <Router>
      <nav style={{ padding: '10px', background: '#360A14' }}>
        <Link to="/" style={{ marginRight: '10px' }}>Home</Link>
        <Link to="/about" style={{ marginRight: '10px' }}>About</Link>
        <Link to="/projects" style={{ marginRight: '10px' }}>Projects</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
