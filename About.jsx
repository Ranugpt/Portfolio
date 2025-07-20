import React from 'react';

const About = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-yellow-50">
      <div className="relative bg-white p-10 rounded-xl shadow-lg w-4/5 max-w-2xl text-center">
        <span className="absolute -top-4 left-4 bg-purple-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
          👨‍💻 About Me
        </span>

        <h2 className="text-3xl font-bold mb-4 mt-4">Who Am I?</h2>
        <p className="text-gray-700 text-md leading-relaxed">
          Hi! I'm Ranu Gupta, a passionate front-end developer with experience in React, JavaScript, and modern UI design.
          I love building responsive, clean websites and learning new tech every day.
        </p>
      </div>
    </div>
  );
};

export default About;
