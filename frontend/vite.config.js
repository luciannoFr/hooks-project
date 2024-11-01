import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  root: './', // Establece la raíz del proyecto
  publicDir: './public', // Directorio público para archivos estáticos
  server: {
    port: 5173, // Puerto en el que se ejecutará el servidor
    host: true, // Esto permite acceso desde IP externa
    open: true, // Abre el navegador automáticamente al iniciar el servidor
  },
  build: {
    outDir: 'dist', // Directorio de salida para la construcción
    assetsDir: 'assets', // Directorio de activos dentro de outDir
    emptyOutDir: true, // Vacía el directorio de salida antes de construir
  },
  resolve: {
    // No hay alias, así que se utilizarán rutas relativas
  },
});
