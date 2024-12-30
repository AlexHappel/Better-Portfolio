import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-100 p-4 text-center">
      <p>&copy; {new Date().getFullYear()} Alexander Happel. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
