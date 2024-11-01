// context/SessionContext.js
import React, { createContext, useState, useContext } from 'react';

const SessionContext = createContext();

export const SessionProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);


  
  // Función para loguear al usuario, usando fetch para la petición
  const login = async (email, password) => {
    try {
      const res = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) {
        throw new Error('Credenciales incorrectas');
      }

      const data = await res.json();
      setUser(data.user);
      setIsAuthenticated(true);
    } catch (error) {
      console.error("Error de autenticación:", error);
      alert(error.message);  // Mostramos el mensaje de error
    }
  };

  // Función para desloguear al usuario y limpiar el contexto
  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
  };

  return (
    <SessionContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </SessionContext.Provider>
  );
};

// Hook custom para usar el contexto de sesión
export const useSession = () => useContext(SessionContext);
