/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
    screens: {
      'sm': '648px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    fontSize: {
      '2xs': '.625rem', //10px
      'xs': '.812rem', //13px
      'sm': '1rem', //16px
      'md': '1.25rem', //20px
      'lg': '1.562rem', //25px
      'xl': '1.938rem', //31px
      '2xl': '2.438rem', //39px
      '3xl': '3.062rem', //49px
      '4xl': '3.812rem', //61px
      '5xl': '6rem', //96px
    },
  },
  plugins: [],
};
