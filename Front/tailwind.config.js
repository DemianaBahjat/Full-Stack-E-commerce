/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryDashboard: "white",
        buttonDashboard: "#a00af6",
      },
      screens: {
        smm: { min: "100px", max: "1024px" },
      },
    },
  },
  plugins: [],
};

