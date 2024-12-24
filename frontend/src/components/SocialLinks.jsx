import React from 'react';

function SocialLinks() {
  return (
    <div className="social-links flex space-x-4">
      <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline transition-transform transform hover:scale-105 dark:text-blue-300 dark:hover:text-blue-500">
        GitHub
      </a>
      <a href="https://linkedin.com/in/alexanderhappel" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline transition-transform transform hover:scale-105 dark:text-blue-300 dark:hover:text-blue-500">
        LinkedIn
      </a>
    </div>
  );
}

export default SocialLinks;