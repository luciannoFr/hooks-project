// models/UserModel.js
import pool from '../config/db.js';

// Función para buscar un usuario en la base de datos por su email
export const findUserByEmail = async (email) => {
  try {
    // Consultamos la tabla `users` buscando el usuario por email
    const [rows] = await pool.query('SELECT * FROM users WHERE email = ?', [email]);
    return rows[0]; // Si existe, devolvemos el usuario; sino, devuelve `undefined`
  } catch (error) {
    console.error("Error al buscar el usuario:", error);
    throw error;
  }
};
