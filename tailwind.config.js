/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        vsm: "450px",
        xmd: "900px",
      },
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
        PlusJakartaSans: ["Plus Jakarta Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
