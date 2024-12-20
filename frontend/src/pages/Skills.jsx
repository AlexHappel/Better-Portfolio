import React from 'react';

function Skills() {
  return (
    <div className="container mx-auto p-4 bg-white text-black dark:bg-black dark:text-gray-200">
      <h1 className="text-3xl font-bold mb-4">My Skills</h1>
      <ul className="list-disc pl-5 space-y-2">
        <li className="transition-transform transform hover:scale-105">JavaScript</li>
        <li className="transition-transform transform hover:scale-105">React</li>
        <li className="transition-transform transform hover:scale-105">Node.js</li>
        <li className="transition-transform transform hover:scale-105">TypeScript</li>
      </ul>
      <a href="/resume.pdf" download className="text-blue-500 hover:underline mt-4 inline-block transition-colors hover:text-blue-700 dark:text-blue-300 dark:hover:text-blue-500">
        Download Resume
      </a>
    </div>
  );
}

export default Skills;