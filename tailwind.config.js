/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Dark_Gray: "hsl(0, 0%, 63%)",
        Black: "hsl(0, 0%, 0%)",
        Shadows: "rgba(0,0,0,0.5)",
        // White: "hsl(0, 0%, 100%)",
        Very_Dark_Gray: "hsl(0, 0%, 27%)",
      },
    },
  },
  plugins: [],
};
