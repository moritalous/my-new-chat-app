/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'warm': {
          50: '#fff8f0',
          100: '#ffebd7',
          200: '#ffd7b0',
          300: '#ffc089',
          400: '#ffa55c',
          500: '#ff8a2e',
          600: '#ff6d0a',
          700: '#cc5000',
          800: '#a64000',
          900: '#803000',
          950: '#4a1c00',
        },
      },
    },
  },
  plugins: [],
};