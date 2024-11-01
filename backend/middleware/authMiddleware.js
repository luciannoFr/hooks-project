// middleware/authMiddleware.js
import jwt from 'jsonwebtoken'; // Asegúrate de tener esta dependencia instalada
import { pool } from '../db.js'; // Importa tu conexión a la base de datos

const authMiddleware = async (req, res, next) => {
  // Obtén el token del encabezado de la solicitud
  const token = req.headers['authorization']?.split(' ')[1]; // Se espera el formato "Bearer TOKEN"

  if (!token) {
    return res.status(401).json({ message: 'Acceso denegado: No se proporcionó token' });
  }

  try {
    // Verifica el token
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // Usa tu secreto JWT

    // Aquí puedes hacer una consulta a la base de datos para comprobar si el usuario existe
    const [rows] = await pool.query('SELECT * FROM users WHERE id = ?', [decoded.id]);

    if (rows.length === 0) {
      return res.status(401).json({ message: 'Acceso denegado: Usuario no encontrado' });
    }

    // Si el usuario existe, puedes agregar la información del usuario a la solicitud
    req.user = rows[0]; // Añade el usuario a la solicitud para que esté disponible en las siguientes rutas

    next(); // Continúa con el siguiente middleware o ruta
  } catch (error) {
    return res.status(400).json({ message: 'Token inválido' });
  }
};

export default authMiddleware;
