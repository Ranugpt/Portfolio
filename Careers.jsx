import React from 'react';

const Careers = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-blue-50">
      <div className="relative bg-white p-10 rounded-lg shadow-xl w-3/4 max-w-md text-center">
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
          🚀 We’re Hiring!
        </span>

        <h2 className="text-2xl font-bold mt-6 mb-4">Build Your Career With Us</h2>
        <p className="text-gray-600">
          Explore exciting job opportunities and become a part of our amazing team.
        </p>
      </div>
    </div>
  );
};

export default Careers;
