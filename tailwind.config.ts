/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        green: {
          50: '#30AF5B',
          90: '#292C27',
        },
        gray: {
          10: '#EEEEEE',
          20: '#A2A2A2',
          30: '#7B7B7B',
          50: '#585858',
          90: '#141414',
        },
        gold: '#D0AE8A',
        green1: '#1F4045',
        cream: '#EDE5D3',
        turquoise: '7F9492' // Add custom color here
      },
      screens: {
        '3xl': '1680px',
        '4xl': '2200px',
      },
    },
  },
  plugins: [],
};
