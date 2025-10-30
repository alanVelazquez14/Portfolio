/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // 🎨 Definición de colores para Tailwind
      colors: {
        // Fondo oscuro y texto claro
        background: "hsl(0 0% 3.9%)", // Casi negro (#0a0a0a)
        foreground: "hsl(0 0% 98%)", // Casi blanco

        // El color rojo oscuro usado en los botones y el nombre "Alan"
        primary: "hsl(343 86% 30%)", // Aproximadamente #860e28

        // Colores secundarios y de borde
        secondary: "hsl(0 0% 14.9%)", // Gris oscuro (para badges y navbar)
        accent: "hsl(240 5.9% 10%)", // Gris muy oscuro (para los blobs de fondo)
        border: "hsl(0 0% 14.9%)",

        // Texto secundario (gris claro para párrafos y enlaces inactivos)
        "muted-foreground": "hsl(0 0% 63.9%)",

        // Para el tooltip de los iconos sociales
        popover: "hsl(0 0% 14.9%)",
        "popover-foreground": "hsl(0 0% 98%)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
