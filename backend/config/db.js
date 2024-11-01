import mysql from 'mysql2/promise';
import 'dotenv/config';

// Configuramos el pool para la conexión a MariaDB
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  waitForConnections: true,
});

export default pool;
