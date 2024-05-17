import React from 'react';

const About = () => {
  return (
    <div id='about'>
        <h1 className="md:text-4xl text-2xl font-bold md:mt-20 mt-6">About Me</h1>
        <div className="bg-gray-100 text-center py-12 md:mt-12 mt-6">
      <h2 className="text-3xl font-bold mb-4">My Skills</h2>
      <ul className="flex justify-center flex-wrap">
        <li className="m-2 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Next.js</li>
        <li className="m-2 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">React.js</li>
        <li className="m-2 bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600">Node.js</li>
        <li className="m-2 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600">MongoDB</li>
        <li className="m-2 bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-600">JavaScript</li>
        <li className="m-2 bg-pink-500 text-white py-2 px-4 rounded hover:bg-pink-600">TypeScript</li>
      </ul>
    </div>
    </div>
    
  );
};

export default About;