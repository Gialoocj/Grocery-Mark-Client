/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "custom-light": "0 2px 4px rgba(0, 0, 0, 0.1)",
        "custom-dark": "0 2px 8px rgba(0, 0, 0, 0.5)",
      },
      transformOrigin: {
        0: "0%",
        center: "50%",
        full: "100%",
        top: "top",
        bottom: "bottom",
        left: "left",
        right: "right",
      },
    },
  },
  plugins: [],
};
