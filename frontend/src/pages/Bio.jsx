import React from 'react';

function Bio() {
  return (
    <div className="container mx-auto p-4 bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 flex-grow flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-4">About Me</h1>
      <div className="flex flex-col items-center">
        <img src="/path/to/your/photo.jpg" alt="Alexander Happel" className="w-32 h-32 rounded-full mb-4" />
        <div className="text-center max-w-2xl">
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            With a strong track record of designing, implementing, and maintaining advanced systems, I am excited to embark on a career in full stack web development. I decided to pivot into a more sustainable field—one that would tap into my long-standing interest in software and hardware.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Completing a UCF coding bootcamp focused on the MERN stack gave me a solid foundation, and I continue to expand my skill set by exploring additional technologies. My hands-on experience with computerized controls and project management has strengthened my analytical thinking and technical abilities—traits that are invaluable in software development.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Having developed a meticulous approach to troubleshooting and system maintenance, I’m eager to bring these qualities into a new role, creating user-friendly applications. My enthusiasm for technology drives me to build solutions that are both functional and innovative, and I look forward to continually growing my knowledge to stay at the forefront of the industry.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Bio;