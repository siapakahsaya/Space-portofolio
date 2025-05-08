/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'coffee-dark': '#2C1810',
        'coffee-medium': '#8B5A2B',
        'coffee-light': '#A67C52',
        'cream': '#F5E6D3',
        'cream-light': '#FCF8F3',
        'success': '#10B981',
        'warning': '#F59E0B',
        'error': '#EF4444',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('https://images.pexels.com/photos/1813466/pexels-photo-1813466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
      },
    },
  },
  plugins: [],
};