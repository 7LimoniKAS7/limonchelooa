/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}"],
  theme: {
    extend: {
      colors: {
        cream: "#FDFCF8",
        lemon: {
          50: "#FEFCE8",
          100: "#FEF9C3",
          200: "#FEF08A",
          300: "#FDE047",
          400: "#E8D45C",
          500: "#D4C84A",
        },
        gold: {
          light: "#E8D5A3",
          DEFAULT: "#C9A962",
          dark: "#9A7B3C",
        },
        ink: "#1C1917",
        stone: {
          soft: "#78716C",
        },
      },
      fontFamily: {
        sans: ["Manrope", "system-ui", "sans-serif"],
        display: ["Manrope", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 4px 24px -4px rgba(28, 25, 23, 0.08), 0 8px 16px -8px rgba(28, 25, 23, 0.06)",
        card: "0 2px 8px rgba(28, 25, 23, 0.04), 0 12px 40px -12px rgba(201, 169, 98, 0.15)",
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
    },
  },
  plugins: [],
};
