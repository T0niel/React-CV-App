/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        mobile: '455px',
        tablet: '640px',
        laptop: '1024px',
        desktop: '1280px',
      },
      keyframes: {
        pop: {
          '0%': {
            opacity: '0',
            transform: 'scale(.50)',
          },
          '50%': {
            transform: 'scale(1.05)',
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1)',
          },
        },
      },
      animation: {
        pop: 'pop 500ms ease-in',
      },
      backgroundImage: {
        'hero-pattern': "url('../public/waveLight.svg')",
      },
      backgroundRepeat: {
        'no-repeat': 'no-repeat', // You can add other values as needed
      },
    },
  },
  plugins: [],
};

