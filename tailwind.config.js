/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f1f5',
          100: '#cce3eb',
          200: '#99c8d8',
          300: '#66adc4',
          400: '#3392b1',
          500: '#0B3954', // main
          600: '#092e43',
          700: '#072232',
          800: '#041722',
          900: '#020b11',
        },
        secondary: {
          50: '#e6f5f6',
          100: '#ccebee',
          200: '#99d7dc',
          300: '#66c3cb',
          400: '#33afb9',
          500: '#087E8B', // main
          600: '#06656f',
          700: '#054c53',
          800: '#033238',
          900: '#02191c',
        },
        accent: {
          50: '#fff0f0',
          100: '#ffe0e1',
          200: '#ffc2c3',
          300: '#ffa3a5',
          400: '#ff8588',
          500: '#FF5A5F', // main
          600: '#cc484c',
          700: '#993639',
          800: '#662426',
          900: '#331213',
        },
      },
      fontFamily: {
        sans: ['Open Sans', 'system-ui', 'sans-serif'],
        heading: ['Montserrat', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};