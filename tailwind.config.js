/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      fontSize: {
        "4xl": ["40px", "48px"],
        "3xl": ["32px", "40px"],
        "2xl": ["24px", "32px"],
        xl: ["20px", "28px"],
        lg: ["16px", "24px"],
        base: ["14px", "22px"],
        sm: ["12px", "20px"],
        xs: ["10px", "18px"],
      },
      colors: {
        green: {
          dark: "#2C3333",
          primary: "#395B64",
          secondary: "#A5C9CA",
          light: "#E7F6F2",
        },
        white: "#FCFEFD",
        gray: "#232323",
        black: "#181C1C",
        action: {
          red: "#F9564F",
          yellow: "#F3C677",
          green: "#4B7F52",
          blue: "3F88C5",
        },
      },
    },
  },
  plugins: [],
};
