import React from 'react';

function Bio() {
  return (
    <div className="container mx-auto p-4 bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100">
      <h1 className="text-3xl font-bold mb-4">About Me</h1>
      <div className="flex flex-col md:flex-row items-center md:items-start">
        <img src="/path/to/your/photo.jpg" alt="Your Name" className="w-32 h-32 rounded-full mb-4 md:mb-0 md:mr-4" />
        <p className="text-gray-700 dark:text-gray-300">Your bio goes here.</p>
      </div>
    </div>
  );
}

export default Bio;