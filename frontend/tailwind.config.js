/** @type {import('tailwindcss').Config} */
export const content = [
  "./index.html", // Aquí especificamos que Tailwind debe mirar en el index.html
  "./src/**/*.{js,jsx,ts,tsx}", // Esto incluye todos los archivos en src que son JS o JSX
];
export const theme = {
  extend: {},
};
export const plugins = [];
