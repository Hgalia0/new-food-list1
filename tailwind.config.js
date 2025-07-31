/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        slowspin: "spin 20s linear infinite", // spin once every 20 seconds
      },
    },
  },
  plugins: [],
};

