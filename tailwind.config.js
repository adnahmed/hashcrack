//@ts-check
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  extend: {
    // colors: {
    //   transparent: 'transparent',
    //   current: 'currentColor',
    //   black: colors.black,
    //   white: colors.white,
    //   gray: colors.slate,
    //   green: colors.emerald,
    //   purple: colors.violet,
    //   yellow: colors.amber,
    //   pink: colors.fuchsia,
    //   red: colors.red,
    //   'midnight': '#121063',
    //   'metal': '#565584',
    //   'tahiti': '#3ab7bf',
    //   'silver': '#ecebff',
    //   'bubble-gum': '#ff77e9',
    //   'bermuda': '#78dcca',
    // },
  },
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      // => @media (min-width: 938px) { ... }
      'mdx': '939px',

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [
    require('tailwind-utopia')({
      useClamp: true,
      baseStep: 'base',
    }),
    require("flowbite/plugin"),
  ],
};