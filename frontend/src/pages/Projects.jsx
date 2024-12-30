import React from 'react';

const projects = [
  {
    title: 'Project One',
    description: 'Description of project one.',
    link: 'http://link-to-project-one.com'
  },
  {
    title: 'Project Two',
    description: 'Description of project two.',
    link: 'http://link-to-project-two.com'
  },
  {
    title: 'Project Three',
    description: 'Description of project three.',
    link: 'http://link-to-project-three.com'
  },
  {
    title: 'Project Four',
    description: 'Description of project four.',
    link: 'http://link-to-project-four.com'
  },
  {
    title: 'Project Five',
    description: 'Description of project five.',
    link: 'http://link-to-project-five.com'
  }
];

const Projects = () => {
  return (
    <div className="container mx-auto p-4 bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 flex-grow">
      <h1 className="text-3xl font-bold mb-4">Projects</h1>
      <ul className="space-y-4">
        {projects.map((project, index) => (
          <li key={index} className="border p-4 rounded shadow transition-transform transform hover:scale-105 dark:border-gray-700 flex flex-col">
            <h2 className="text-2xl font-semibold">{project.title}</h2>
            <p className="text-gray-700 dark:text-gray-300">{project.description}</p>
            <div className="inline-block">
              <a href={project.link} className="text-blue-600 hover:underline transition-colors hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-600">
                View Project
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
