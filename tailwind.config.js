/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Inter',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
      },
      animation: {
        'bounce-slow': 'bounce 2s infinite',
      },
      transitionProperty: {
        'height': 'height',
      },
      colors: {
        gray: {
          900: '#121318', // Background 1
          800: '#1a1b24'//'#171f26', // Background 2
        },
        blue: {
          400: '#8afbff', // Contact me and Adam Rustad
          500: '#3b82f6', // Cicles 
          600: '#2563eb', //View my work
          900: '#1e3a8a', // Tags?
        },
      },
    },
  },
  plugins: [],
};