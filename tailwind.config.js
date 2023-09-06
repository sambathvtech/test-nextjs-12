const lineClamp = require('@tailwindcss/line-clamp');
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {},
      colors: {},
      height: {
        inherit: 'inherit',
      },
      width: {
        inherit: 'inherit',
      },
    },
  },
  plugins: [
    lineClamp,
    plugin(function newCom({ addComponents }) {
      const components = {
        '.container-full': {},
        '.container-fluid': {},
      };

      addComponents(components);
    }),
  ],
};
