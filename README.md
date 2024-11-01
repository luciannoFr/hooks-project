Aquí tienes un README más centrado en el uso del sistema y las tecnologías involucradas:

# Proyecto de Gestión de Sesiones en React

## Descripción
Este proyecto es una aplicación web que permite gestionar sesiones de usuario en un entorno React sin la necesidad de usar React Router. La aplicación ofrece una experiencia de usuario fluida, donde los usuarios pueden iniciar sesión para acceder a contenido exclusivo y ver una pantalla de bienvenida personalizada.

## Tecnologías Usadas
- **Frontend**: React, TailwindCSS
- **Backend**: Node.js, Express
- **Base de Datos**: MariaDB
- **Otros**: XAMPP para manejar el servidor de base de datos

## Instalación
Para poner en marcha el proyecto, seguí estos pasos:

1. **Cloná el repositorio** en tu máquina:
   ```bash
   git clone <url-del-repositorio>
   cd <nombre-del-repositorio>
   ```

2. **Instalá las dependencias del backend**:
   ```bash
   cd backend
   npm install
   ```

3. **Instalá las dependencias del frontend**:
   ```bash
   cd ../frontend
   npm install
   ```

4. **Configurá la Base de Datos**:
   - Asegurate de tener XAMPP instalado y en funcionamiento.
   - Configurá una base de datos en MariaDB y ejecutá las migraciones necesarias para crear las tablas que utiliza la aplicación.

## Uso
- **Iniciar la aplicación**:
  - Levantá el servidor del backend:
    ```bash
    cd backend
    npm start
    ```
  - Luego, levantá el servidor del frontend:
    ```bash
    cd ../frontend
    npm start
    ```

- **Interacción con la aplicación**:
  - Al acceder a la aplicación, verás el componente de **Login** si no hay sesión activa.
  - Ingresá tus credenciales y hacé clic en "Iniciar sesión" para autenticarte.
  - Una vez autenticado, serás redirigido a la pantalla de **Home**, donde recibirás un saludo personalizado.

- **Cerrar sesión**:
  - Desde la pantalla de **Home**, podés cerrar sesión, lo que eliminará tu información de sesión y te llevará de vuelta al componente de **Login**.