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
        heading: ['Poppins', 'Inter', 'sans-serif'],
        body: ['Inter', 'Poppins', 'sans-serif'],
      },
      animation: {
        'bounce-slow': 'bounce 2s infinite',
        'fade-in-up': 'fadeInUp 0.5s ease-out',
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-in': 'slideIn 0.5s ease-out',
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideIn: {
          '0%': {
            opacity: '0',
            transform: 'translateX(-20px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)'
          }
        }
      },
      transitionProperty: {
        'height': 'height',
      },
      boxShadow: {
        'card': '0 10px 20px 0 rgba(9,189,255,0.13), 0 1.5px 16px 0 rgba(0,0,0,0.06)',
        'card-dark': '0 10px 24px 0 rgba(9,189,255,0.18), 0 6px 26px 0 rgba(0,0,0,0.10)',
        'card-hover': '0 8px 40px 0 rgba(9,189,255,0.32), 0 1.5px 8px 0 rgba(0,0,0,0.10)',
        'card-hover-dark': '0 8px 48px 0 rgba(9,189,255,0.38), 0 6px 18px 0 rgba(0,0,0,0.18)',
        'profile': '0 8px 48px 0 rgba(20, 184, 166, 0.22), 0 1.5px 8px 0 rgba(255,127,80,0.10)',
      },
      colors: {
        teal: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
        },
        coral: {
          50: '#fff1f2',
          100: '#ffe4e6',
          200: '#fecdd3',
          300: '#fda4af',
          400: '#fb7185',
          500: '#f43f5e',
          600: '#e11d48',
          700: '#be123c',
          800: '#9f1239',
          900: '#881337',
        }
      },
    },
  },
  plugins: [],
};