import express from 'express';
import cors from 'cors';
import authRoutes from './routes/authRoutes.js';
import './config/db.js'; // Conexión a la base de datos

const app = express();
app.use(express.json());

const corsOptions = {
    origin: 'http://localhost:5173', // Permitir solicitudes desde tu frontend
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos permitidos
    credentials: true, // Permitir cookies y credenciales
  };
  
  app.use(cors(corsOptions));

app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));
