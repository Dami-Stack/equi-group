/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#fcb201",
          110: "#EB8317",
        },
        secondary: {
          DEFAULT: "#1a1d1c",
        },
        accent: {
          DEFAULT: "#016064",
        },
        tertiary: {
          DEFAULT: "#00bee0",
        },
      },
    },
  },
  plugins: [],
};

