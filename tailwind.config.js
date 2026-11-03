/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: { 50: '#f3f6ee', 100: '#e3e9d6', 200: '#c8d4ae', 300: '#a3c585', 400: '#7daa5c', 500: '#5a8f3a', 600: '#42712a', 700: '#2d5016', 800: '#1f3a0f', 900: '#142808', DEFAULT: 'var(--color-primary, #2d5016)' },
        secondary: { 50: '#f5f8f1', 100: '#e8efe0', 200: '#d1dfc1', 300: '#a3c585', 400: '#7faa5f', 500: '#5c8f3e', 600: '#42712a', 700: '#335a20', 800: '#264518', 900: '#1a2f10', DEFAULT: 'var(--color-secondary, #a3c585)' },
        accent: { 50: '#fdf8ed', 100: '#f9ecca', 200: '#f3d893', 300: '#ecc45c', 400: '#e6b03a', 500: '#d4a017', 600: '#b08014', 700: '#8a6210', 800: '#6e4d0c', 900: '#523808', DEFAULT: 'var(--color-accent, #d4a017)' },
      },
      fontFamily: { heading: ['Poppins', 'sans-serif'], body: ['Inter', 'sans-serif'] },
      animation: { 'fade-in': 'fadeIn 0.6s ease-out forwards', 'fade-in-up': 'fadeInUp 0.7s ease-out forwards', 'fade-in-down': 'fadeInDown 0.7s ease-out forwards', 'slide-in-left': 'slideInLeft 0.7s ease-out forwards', 'slide-in-right': 'slideInRight 0.7s ease-out forwards', 'scale-in': 'scaleIn 0.5s ease-out forwards', float: 'float 6s ease-in-out infinite', 'float-slow': 'float 9s ease-in-out infinite', 'spin-slow': 'spin 20s linear infinite', 'pulse-soft': 'pulseSoft 3s ease-in-out infinite', shimmer: 'shimmer 2s linear infinite', wave: 'wave 8s ease-in-out infinite', grow: 'grow 1.5s ease-out forwards', 'bounce-in': 'bounceIn 0.6s ease-out forwards' },
      keyframes: { fadeIn: { '0%': { opacity: '0' }, '100%': { opacity: '1' } }, fadeInUp: { '0%': { opacity: '0', transform: 'translateY(30px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } }, fadeInDown: { '0%': { opacity: '0', transform: 'translateY(-30px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } }, slideInLeft: { '0%': { opacity: '0', transform: 'translateX(-50px)' }, '100%': { opacity: '1', transform: 'translateX(0)' } }, slideInRight: { '0%': { opacity: '0', transform: 'translateX(50px)' }, '100%': { opacity: '1', transform: 'translateX(0)' } }, scaleIn: { '0%': { opacity: '0', transform: 'scale(0.9)' }, '100%': { opacity: '1', transform: 'scale(1)' } }, float: { '0%, 100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-20px)' } }, pulseSoft: { '0%, 100%': { opacity: '1' }, '50%': { opacity: '0.7' } }, shimmer: { '0%': { backgroundPosition: '-1000px 0' }, '100%': { backgroundPosition: '1000px 0' } }, wave: { '0%, 100%': { transform: 'translateX(0) rotate(0deg)' }, '50%': { transform: 'translateX(-15px) rotate(-2deg)' } }, grow: { '0%': { transform: 'scaleY(0)', transformOrigin: 'bottom' }, '100%': { transform: 'scaleY(1)', transformOrigin: 'bottom' } }, bounceIn: { '0%': { opacity: '0', transform: 'scale(0.3)' }, '50%': { transform: 'scale(1.05)' }, '70%': { transform: 'scale(0.9)' }, '100%': { opacity: '1', transform: 'scale(1)' } } },
      backgroundImage: { 'hero-pattern': "linear-gradient(135deg, rgba(45, 80, 22, 0.85) 0%, rgba(45, 80, 22, 0.6) 100%)" },
    },
  },
  plugins: [],
};
