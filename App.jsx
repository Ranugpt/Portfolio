import './App.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Navbar from './Comopents/Navbar'; 
import Careers from './Pages/Careers';
import About from './Pages/About';
import Services from './Pages/Services';
import Home from './Pages/Home';
import SignIn from './Pages/SignIn';
import SignOut from './Pages/SignOut';
import { response } from 'express';

const App = () => {

//  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
 
//   const handleChange = (e) => {
//     setFormData({...formData, [e.target.name]: e.target.value});
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post('http://localhost:5000/api', formData);
//       alert(res.data.message);
//     } catch (err) {
//       console.error(err);
//       alert("Registration failed");
//     }
//   }

  return (
    <BrowserRouter>
      <div>
        {/* <Navbar /> */}
        <Routes>
          {/* <Route path="/" element={<Home />} />
          <Route path="/Careers" element={<Careers />} />
          <Route path="/About" element={<About />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Signin" element={<SignIn />} />
          <Route path="/Signout" element={<SignOut />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;