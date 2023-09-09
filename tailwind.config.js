/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xxs: "392px",

      xs: "480px",

      sm: "640px",

      md: "768px",

      lg: "1024px",

      xl: "1920px",

      xxl: "2560px",
    },

    extend: {
      transitionProperty: {
        filter: "filter",
      },

      fontFamily: {
        raleway: ["Raleway, sans-serif"],
      },

      colors: {
        gray: {
          300: "#F5F5F8",
          500: "#9C9C9C",
          900: "#1F1F1F",
        },
        blue: {
          500: "#00ACF8",
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
