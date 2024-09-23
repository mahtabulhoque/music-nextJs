// import defaultTheme from "tailwindcss/defaultTheme";
// import colors from "tailwindcss/colors"; 

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        spotlight: "spotlight 2s ease .75s 1 forwards",
      },
      keyframes: {
        spotlight: {
          "0%": {
            opacity: 0,
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: 1,
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
      },
    },
  },
  plugins: [addVariablesForColors],
};

// Plugin to add Tailwind colors as CSS variables
function addVariablesForColors({ addBase, theme }) {
  let newVars = Object.entries(theme("colors")).reduce((acc, [key, val]) => {
    if (typeof val === "string") {
      acc[`--${key}`] = val;
    } else {
      Object.entries(val).forEach(([shade, colorValue]) => {
        acc[`--${key}-${shade}`] = colorValue;
      });
    }
    return acc;
  }, {});

  addBase({
    ":root": newVars,
  });
}
