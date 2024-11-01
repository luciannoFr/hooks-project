// src/index.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'; // Asegúrate de que App.js esté en src
import './styles/index.css'; // Asegúrate de que la ruta sea correcta

// Renderiza el componente App en el div con id 'root'
ReactDOM.createRoot(document.getElementById('root')).render(<App />);
