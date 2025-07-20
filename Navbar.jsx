import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="bg-gray-800 text-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold">MyWebsite</h1>
        <input type="text" placeholder='Search here...' className='w-5px px-4 py-1 border border-gray-200 rounded-md focus:outline-none ' />
        <nav className="space-x-6">
          <Link to="/" className="hover:text-green-400">Home</Link>
          <Link to="/Careers" className="hover:text-green-400">Careers</Link>
          <Link to="/About" className="hover:text-green-400">About</Link>
          <Link to="/Services" className="hover:text-green-400">Services</Link>
          <Link to="/signin" className="hover:text-green-400">Sign In</Link>
          <Link to="/signout" className="hover:text-green-400">Sign Out</Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
