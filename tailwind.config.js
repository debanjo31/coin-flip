/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "480px",
        ss: "600px",
        sm: "768px",
        md: "1060px",
        lg: "1200px",
        xl: "1700px",
      },
      fontFamily: {
        // add the css variable and include fallback fonts from tailwind default theme
        san: ["inter", "san-serif"],
      },
    },
  },
  plugins: [],
};
