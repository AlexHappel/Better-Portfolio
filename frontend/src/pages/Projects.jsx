import React from 'react';

const projects = [
  {
    title: 'Agora',
    description: 'Description of project one.',
    link: 'https://github.com/AlexHappel/Agora'
  },
  {
    title: 'Zozzled',
    description: 'Description of project two.',
    link: 'https://github.com/AlexHappel/Cocktail-Directory'
  },
  {
    title: 'This Porfolio',
    description: 'Description of project three.',
    link: 'https://github.com/AlexHappel/Better-Portfolio'
  },
  {
    title: 'Dionysus',
    description: 'Description of project four.',
    link: 'https://github.com/AlexHappel/Dionysus'
  },
  {
    title: 'Whiskey',
    description: 'Description of project five.',
    link: 'https://github.com/AlexHappel/Whiskey'
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
