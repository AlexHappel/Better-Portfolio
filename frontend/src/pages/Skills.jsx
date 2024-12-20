import React from 'react';

function Skills() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">My Skills</h1>
      <ul className="list-disc pl-5 space-y-2">
        <li>JavaScript</li>
        <li>React</li>
        <li>Node.js</li>
        <li>TypeScript</li>
      </ul>
      <a href="/resume.pdf" download className="text-blue-500 hover:underline mt-4 inline-block">
        Download Resume
      </a>
    </div>
  );
}

export default Skills;