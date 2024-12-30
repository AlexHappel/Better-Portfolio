import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Bio from './pages/Bio.jsx';
import Skills from './pages/Skills.jsx';
import Contact from './pages/Contact';
import Projects from './pages/Projects.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import ClickPulse from './components/ClickPulse.jsx';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="flex-grow container mx-auto p-4">
          <Routes>
            <Route path="/" element={<Bio />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </div>
        <Footer />
        <ClickPulse />
      </div>
    </Router>
  );
}

export default App;