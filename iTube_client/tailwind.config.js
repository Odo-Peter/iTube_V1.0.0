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
      height: {
        formHeight: '28rem',
        lineHeight: '1px',
        sideBar: '90vh',
        playerHeight: '82vh',
      },
      width: {
        formWidth: '26rem',
        inputWidth: '22rem',
        cardWidth: '15.4rem',
        playerWidth: '80%',
      },
      padding: {
        pbot: '0.5px',
      },
    },
  },
  plugins: [],
};
