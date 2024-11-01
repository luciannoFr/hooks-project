// App.js
import React from 'react';
import { SessionProvider, useSession } from './context/SessionContext.jsx'; // Importar el contexto de sesión
import Login from './components/Login'; // Importar el componente de Login
import Home from './components/Home'; // Importar el componente de Home
import './styles/index.css'

function App() {
  return (
    <SessionProvider> {/* Proveer el contexto de sesión a toda la aplicación */}
      <Main /> {/* Componente principal que maneja el Login y Home */}
    </SessionProvider>
  );
}

// Componente principal para manejar las pantallas de Login y Home
function Main() {
  const { isAuthenticated } = useSession(); // Obtener el estado de autenticación del contexto

  // Renderiza Home si el usuario está autenticado, de lo contrario, renderiza Login
  return isAuthenticated ? <Home /> : <Login />;
}

export default App; // Exportar el componente App para usarlo en index.js
