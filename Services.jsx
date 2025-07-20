import React from 'react';

const Services = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-indigo-50">
      <div className="relative bg-white p-10 rounded-xl shadow-lg w-4/5 max-w-2xl text-center">
        
        <span className="absolute -top-4 right-4 bg-indigo-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
          🛠️ My Services
        </span>

        <h2 className="text-3xl font-bold mb-4 mt-4">What I Offer</h2>
        <p className="text-gray-700 text-md leading-relaxed mb-4">
          I provide front-end development services with a focus on responsive design, fast performance, and clean code.
        </p>

        <ul className="text-left text-gray-600 list-disc list-inside space-y-2">
          <li>✨ Modern React Website Development</li>
          <li>🎨 UI/UX Design Implementation with Tailwind</li>
          <li>⚡ Performance Optimization</li>
          <li>🔧 API Integration & RESTful Services</li>
        </ul>
      </div>
    </div>
  );
};

export default Services;
