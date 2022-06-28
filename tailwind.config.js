const plugin = require("tailwindcss/plugin");
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", "./public/*.html",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addUtilities }) {
    const myUtilities = {
      ".bg-aqua": { background: "aqua" },
      ".rotate-150deg": {
        transform: "rotateX(150deg)",
      },
    };
    addUtilities(myUtilities);
  }),
],
}
