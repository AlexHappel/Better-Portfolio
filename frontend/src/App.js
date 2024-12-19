import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Bio from './pages/Bio.jsx';
import Skills from './pages/Skills.jsx/index.js';
import Contact from './pages/Contact';
import Header from './components/Header.jsx';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Bio />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;