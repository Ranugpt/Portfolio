import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SignOut = () => {
  const navigate = useNavigate();

  useEffect(() => {
    
    console.log('User signed out');
    setTimeout(() => {
      navigate('/signin');
    }, 2000); 
  }, [navigate]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-md w-80 text-center">
        <h2 className="text-2xl font-bold mb-4 text-red-500">You have been signed out</h2>
        <p className="text-gray-600">Redirecting to Sign In page...</p>
      </div>
    </div>
  );
};

export default SignOut;
