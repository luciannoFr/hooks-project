// routes/authRoutes.js
import express from 'express';
import { loginUser, logoutUser } from '../controllers/authController.js';

const router = express.Router();

// Ruta para iniciar sesión
router.post('/login', loginUser);

// Ruta para cerrar sesión
router.post('/logout', logoutUser);

export default router;
