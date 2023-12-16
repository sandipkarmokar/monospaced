/** @type {import("ta"ilwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        DMMono: ["DM Mono", "monospace"],
        FiraCode: ["Fira Code", "monospace"],
        FiraMono: ["Fira Mono", "monospace"],
        IBMPlexMono: ["IBM Plex Mono", "monospace"],
        JetBrainsMono: ["JetBrains Mono", "monospace"],
        NotoSansMono: ["Noto Sans Mono", "monospace"],
        RedHatMono: ["Red Hat Mono", "monospace"],
        RobotoMono: ["Roboto Mono", "monospace"],
        SpaceMono: ["Space Mono", "monospace"],
        UbuntuMono: ["Ubuntu Mono", "monospace"],
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
