/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        // Warna pastel ungu untuk latar belakang
        lavender: '#EDE9FE',
        violetlight: '#DDD6FE',
        indigoSoft: '#C7D2FE',
      },
      backgroundImage: {
        'gradient-purple': 'linear-gradient(to bottom right, #EDE9FE, #DDD6FE, #C7D2FE)',
      },
      animation: {
        fadeInUp: "fadeInUp 0.6s ease-out both",
      },
      keyframes: {
        fadeInUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
  ],
};
