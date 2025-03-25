/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // Custom colors using CSS custom properties (defined in globals.css)
      colors: {
        background: "rgba(var(--background))",
        border: "rgba(var(--border))",
        card: "rgba(var(--card))",
        "copy-primary": "rgba(var(--copy-primary))",
        "copy-secondary": "rgba(var(--copy-secondary))",
        cta: "rgba(var(--cta))",
        "cta-active": "rgba(var(--cta-active))",
        "cta-text": "rgba(var(--cta-text))",
        secondary: "rgba(var(--secondary))",
        "on-secondary": "rgba(var(--on-secondary))",
      },
      // Custom fonts defined in your Google Fonts import
      fontFamily: {
        comfortaa: ['"Comfortaa"', "sans-serif"],
        "kaushan-script": ['"Kaushan Script"', "cursive"],
        oswald: ["Oswald", "sans-serif"],
      },
    },
  },
  plugins: [],
};
