// controllers/authController.js
import jwt from 'jsonwebtoken';
import { findUserByEmail } from '../models/User.model.js';

// Controlador para iniciar sesión
export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Buscamos el usuario en la base de datos usando el modelo
    const user = await findUserByEmail(email);

    if (!user || user.password !== password) {
      return res.status(401).json({ error: 'Credenciales inválidas' });
    }

    // Creamos el token para que el usuario lo use durante la sesión
    const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ user: { id: user.id, email: user.email, name: user.name }, token });
  } catch (err) {
    console.error("Error en el login:", err);
    res.status(500).json({ error: 'Error en el servidor' });
  }
};

// Controlador para cerrar sesión
export const logoutUser = (req, res) => {
  res.json({ message: 'Sesión cerrada' });
};
