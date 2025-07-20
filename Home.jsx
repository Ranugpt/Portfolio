import React from 'react';

const Home = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">

      {/* <img
        src="https://images.unsplash.com/photo-1682687220640-9d3b11ca30e5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D"
        alt="Online Sample"
        className="mx-auto my-4 rounded-lg w-3px"
      /> */}
      <div className="relative bg-white p-10 rounded-lg shadow-lg">
        <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-bl-lg">
          NEW
        </span>
        <h1 className="text-3xl font-bold mb-4">Welcome to My Home Page!</h1>
        <p className="text-gray-600">I'm Ranu Gupta 🚀</p>

      </div>
    </div>
  );
};

export default Home;
