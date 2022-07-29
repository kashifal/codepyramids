/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-dark": "#000838",
        "custom-primary": "#FF9A00",
      },
    },
  },
  plugins: [],
};
