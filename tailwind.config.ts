// import defaultTheme from "tailwindcss/defaultTheme";
// import colors from "tailwindcss/colors"; 

import type { PluginAPI } from 'tailwindcss/types/config';

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
        "meteor-effect": "meteor 5s linear infinite",
        spotlight: "spotlight 2s ease .75s 1 forwards",
        scroll: "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite"
      },
      keyframes: {
        meteor: {
          "0%": { transform: "rotate(215deg) translateX(0)", opacity: "1" },
          "70%": { opacity: "1" },
          "100%": {
            transform: "rotate(215deg) translateX(-500px)",
            opacity: "0",
          },
        },

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
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },

      },
    },
  },
  plugins: [addVariablesForColors],
};

// Plugin to add Tailwind colors as CSS variables
function addVariablesForColors({ addBase, theme }: PluginAPI) {
  const newVars = Object.entries(theme("colors")).reduce((acc, [key, val]) => {
    if (typeof val === "string") {
      acc[`--${key}`] = val;
    } else {
      Object.entries(val).forEach(([shade, colorValue]) => {
        acc[`--${key}-${shade}`] = colorValue;
      });
    }
    return acc;
  }, {} as Record<string, string>);  // Ensure type is inferred correctly

  addBase({
    ":root": newVars,
  });
}

export default addVariablesForColors;