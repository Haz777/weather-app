module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'blue-lighter': '#93C5FD',
        'blue-dark': '#60A5FA',
        'light-gray': '#6E707A',
        'progress-bar': '#FFEC65',
      },
      backgroundImage: {
        'cloud-image': "url('/src/cloud-bg.png')",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
