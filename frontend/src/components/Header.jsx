import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav>
        <Link to="/">Bio</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}

export default Header;