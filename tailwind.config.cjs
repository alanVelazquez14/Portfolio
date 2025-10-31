/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "hsl(0 0% 3.9%)", // Casi negro (#0a0a0a)
        foreground: "hsl(0 0% 98%)", // Casi blanco
        primary: "hsl(343 86% 30%)", // Aproximadamente #860e28
        secondary: "hsl(0 0% 14.9%)", // Gris oscuro (para badges y navbar)
        accent: "hsl(240 5.9% 10%)", // Gris muy oscuro (para los blobs de fondo)
        border: "hsl(0 0% 14.9%)", "muted-foreground": "hsl(0 0% 63.9%)",
        popover: "hsl(0 0% 14.9%)",
        "popover-foreground": "hsl(0 0% 98%)",
        secondary2: "hsl(270 1% 19%)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
