/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        FiraCode: ["Fira Code", "monospace"],
        IBMPlexSans: ["IBM Plex Sans", "sans - serif"],
      },
      colors: {
        dark_blue: {
          // 200: "#06375A",
          200: "#063F67",
          300: "#012136",
          400: "#011C2E",
          500: "#011827",
        },
      },
    },
  },
  plugins: [],
};
