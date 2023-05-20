//@ts-check
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  extend: {
    utopia: theme => ({
      minScreen: theme('screens.sm'),
      maxScreen: theme('screens.xl'),
      maxScale: 1.5,
      minSize: 16,
      maxSize: 20,
      minScale: 1.2,
      textSizes: [
        'xs',
        'sm',
        'base',
        'lg',
        'xl',
        '2xl',
        '3xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
    }),
    fluidTypography: {},
  },
  plugins: [
    require('tailwind-utopia')({
      useClamp: true,
      baseStep: 'base',
    }),
    require("flowbite/plugin"),
    require("tailwind-fluid-typography"),
  ],
};