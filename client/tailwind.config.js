/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        proj: {
          50: '#FFFFFF',//content-color
          100: '#FAFAFA',//backgroound-color
          200: '#bfbfbf',
          300: '#a6a6a6',
          400: '#8c8c8c',
          500: '#737373',
          600: '#595959',
          700: '#404040',
          800: '#262626',
          900: '#0d0d0d',
        }
      },
      fontFamily  :{
        grandhotel: ['Grand Hotel'],
      },
    },
  },
  plugins: [],
}