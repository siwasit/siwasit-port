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
        montserrat: ['var(--font-montserrat)', 'sans-serif'],
      },
      colors: {
        // Custom Gray Palette
        customGray: {
          DEFAULT: "#737373", // Default gray
          light: "rgba(166, 166, 166, 0.5)", // Light gray
          transparent: "rgba(107, 114, 128, 0)", // Transparent gray
        },
        // Custom Red Palette
        customRed: {
          DEFAULT: "#522020", // Default red
          second: "#903737", // Secondary red
          third: "#A74141", // Tertiary red
          bg: "rgba(167, 65, 65, 0.25)"
        },
        // Custom Black
        customBlack: "#1E1E1E",
        // Background and Foreground Variables
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
