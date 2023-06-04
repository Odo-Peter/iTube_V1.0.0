/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      borderColor: {
        'thin-color': 'rgba(255,255,255,0.2)',
      },
      fontSize: {
        vxs: '8.5px',
      },
    },
  },
  plugins: [],
};
