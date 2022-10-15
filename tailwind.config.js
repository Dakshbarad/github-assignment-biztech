/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: { 'darkblue': "#0d1117", 'lightblue': "#161b22" },
      backgroundColor: {
        'bg-darkblue': "#0d1117",
        'bg-lightblue': "#161b22",
      },
    },
  },
  plugins: [],
};
