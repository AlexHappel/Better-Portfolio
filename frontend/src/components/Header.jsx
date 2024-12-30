import React from 'react';
import { Link } from 'react-router-dom';
import DarkModeToggle from './DarkModeToggle';

function Header() {
  return (
    <header className="bg-gray-100 text-gray-900 p-4 flex justify-between items-center dark:bg-gray-800 dark:text-gray-100">
      <nav className="flex space-x-4">
        <Link to="/" className="bubble-button">Bio</Link>
        <Link to="/skills" className="bubble-button">Skills</Link>
        <Link to="/contact" className="bubble-button">Contact</Link>
        <Link to="/projects" className="bubble-button">Projects</Link>
      </nav>
      <DarkModeToggle />
    </header>
  );
}

export default Header;