/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark_blue: {
          300: "#012136",
          500: "#011827",
          400: "#011C2E",
          200: "#06375A",
        },
      },
    },
  },
  plugins: [],
};
