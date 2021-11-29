module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      gray: {
        1: '#e5e5e5',
        2: '#c1c1c2',
        3: '#666769',
        4: '#4d4d4d',
        5: '#303134',
        6: '#202124',
      },
      red: '#dB5e5e',
      green: '#5edb79',
      white: '#fff',
      black: '#000',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
