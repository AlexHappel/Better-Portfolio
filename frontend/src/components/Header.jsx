import React from 'react';
import { Link } from 'react-router-dom';
import DarkModeToggle from './DarkModeToggle';

function Header() {
  return (
    <header className="bg-gray-100 text-gray-900 p-4 flex justify-between items-center dark:bg-gray-800 dark:text-gray-100">
      <nav className="flex space-x-4">
        <Link to="/" className="hover:underline">Bio</Link>
        <Link to="/skills" className="hover:underline">Skills</Link>
        <Link to="/contact" className="hover:underline">Contact</Link>
        <Link to="/projects" className="hover:underline">Projects</Link>
      </nav>
      <DarkModeToggle />
    </header>
  );
}

export default Header;