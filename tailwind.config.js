/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "heading-primary": "#b7b9ba",
        "heading-secondary": "#85888A",
        "heading-foreground": "#6A1D1F",
        "paragraph-primary": "#5F6060",
        "background-primary": "#E9454D"
      }
    }
  },
  plugins: []
};
