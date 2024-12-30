import React, { useState } from 'react';

const skills = [
  {
    name: 'JavaScript',
    description: 'A versatile programming language mainly used for web development.',
    level: 'Advanced',
    experience: '1 years',
    projects: 'Developed multiple web applications including e-commerce sites and social media platforms.',
    certifications: 'UCF Fullstack Bootcamp Certification'
  },
  {
    name: 'React',
    description: 'A JavaScript library for building user interfaces.',
    level: 'Advanced',
    experience: '1 years',
    projects: 'Built dynamic and responsive web applications with complex state management.',
    certifications: 'UCF Fullstack Bootcamp Certification'
  },
  {
    name: 'Node.js',
    description: 'A JavaScript runtime built on Chrome\'s V8 JavaScript engine.',
    level: 'Intermediate',
    experience: '1 years',
    projects: 'Created RESTful APIs and real-time applications using Node.js and Express.',
    certifications: 'UCF Fullstack Bootcamp Certification'
  },
  {
    name: 'TypeScript',
    description: 'A typed superset of JavaScript that compiles to plain JavaScript.',
    level: 'Intermediate',
    experience: '1 years',
    projects: 'Enhanced code quality and maintainability in large-scale projects.',
    certifications: 'UCF Fullstack Bootcamp Certification'
  }
];

function Skills() {
  const [tooltip, setTooltip] = useState({ visible: false, content: '', x: 0, y: 0 });

  const handleMouseEnter = (e, skill) => {
    const rect = e.target.getBoundingClientRect();
    const tooltipWidth = 50; 
    const viewportWidth = window.innerWidth;

    let tooltipX = rect.right + 10;
    if (tooltipX + tooltipWidth > viewportWidth) {
      tooltipX = rect.left - tooltipWidth - -130;
    }

    setTooltip({
      visible: true,
      content: (
        <div>
          <p><strong>Description:</strong> {skill.description}</p>
          <p><strong>Level:</strong> {skill.level}</p>
          <p><strong>Experience:</strong> {skill.experience}</p>
          <p><strong>Projects:</strong> {skill.projects}</p>
          <p><strong>Certifications:</strong> {skill.certifications}</p>
        </div>
      ),
      x: tooltipX,
      y: rect.top
    });
  };

  const handleMouseLeave = () => {
    setTooltip({ visible: false, content: '', x: 0, y: 0 });
  };

  return (
    <div className="container mx-auto p-4 bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 flex-grow flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-4">My Skills</h1>
      <ul className="list-disc pl-5 space-y-2">
        {skills.map((skill, index) => (
          <li
            key={index}
            className="transition-transform transform hover:scale-105 relative inline-block w-auto"
            onMouseEnter={(e) => handleMouseEnter(e, skill)}
            onMouseLeave={handleMouseLeave}
          >
            {skill.name}
          </li>
        ))}
      </ul>
      {tooltip.visible && (
        <div
          className="absolute bg-gray-200 text-gray-900 dark:bg-gray-700 dark:text-gray-100 p-2 rounded shadow-lg"
          style={{ top: tooltip.y, left: tooltip.x }}
        >
          {tooltip.content}
        </div>
      )}
      <a href="/resume.pdf" download className="text-blue-600 hover:underline mt-4 inline-block transition-colors hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-600">
        Download Resume
      </a>
    </div>
  );
}

export default Skills;