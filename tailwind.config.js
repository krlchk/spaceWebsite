/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      lg: { max: "1199.99px" },
      md: { max: "991.99px" },
      sm: { max: "767.99px" },
      xs: { max: "479.99px" },
    },
    extend: {
      container: {
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
        },
      },
      animation: {
        mobileMenu: ".3s mobileMenu ease-in-out",
      },
    },
  },
  plugins: [],
};
