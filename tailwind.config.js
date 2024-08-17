/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        tablet: '640px',
        laptop: '1024px',
        desktop: '1280px',
      },
      keyframes: {
        slideDown: {
          '0%': {
            opacity: '0',
            transform: 'translateY(-1000px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0px)'
          }
        }
      },
      animation: {
        slideDown: 'slideDown 900ms ease-in'
      }
    },
  },
  plugins: [],
};

