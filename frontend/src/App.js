import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Bio from './pages/Bio.jsx';
import Skills from './pages/Skills.jsx';
import Contact from './pages/Contact';
import Projects from './pages/Projects.jsx';
import Header from './components/Header.jsx';

function App() {
  return (
    <Router>
      <Header />
      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<Bio />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;