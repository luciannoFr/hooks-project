// components/Login.js
import React, { useState } from 'react';
import { useSession } from '../context/SessionContext.jsx';

const Login = () => {
  const { login } = useSession();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <div className="flex items-center justify-center h-screen w-screen bg-gray-900">
      <form 
        onSubmit={handleSubmit} 
        className="bg-gray-800 p-10 rounded-lg shadow-lg w-full max-w-sm flex flex-col space-y-6"
      >
        <h2 className="text-3xl font-bold text-center text-white">Iniciar Sesión</h2>
        
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-90 p-3 bg-gray-700 text-white border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out hover:bg-gray-600"
        />
        
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-90 p-3 bg-gray-700 text-white border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out hover:bg-gray-600"
        />
        
        <button 
          type="submit" 
          className="w-full bg-blue-600 text-white p-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-200 ease-in-out"
        >
          Iniciar sesión
        </button>
      </form>
    </div>
  );
};

export default Login;
