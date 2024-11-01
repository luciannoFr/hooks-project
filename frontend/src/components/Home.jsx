// components/Home.js
import React from 'react';
import { useSession } from '../context/SessionContext.jsx';

const Home = () => {
  const { user, logout } = useSession();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-6 shadow-lg p-4 bg-gray-800 rounded-lg">
        Bienvenido, {user.name}!
      </h1>
      <button
        onClick={logout}
        className="mt-4 bg-red-600 text-white p-3 rounded-lg shadow-md hover:bg-red-700 transition duration-200 ease-in-out transform hover:scale-105"
      >
        Cerrar sesión
      </button>
    </div>
  );
};

export default Home;
