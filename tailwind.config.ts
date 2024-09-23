import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode:'class',
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: "var(--background, #f0f4f8)", // Fallback to light grayish blue
          dark: "var(--background-dark, #1e1e1e)", // Dark mode support
        },
        foreground: "var(--foreground, #ffffff)",
      },
      backgroundImage: {
        'smart-gradient': "linear-gradient(135deg, #f5f7fa, #c3cfe2)",
        'radial-gradient': "radial-gradient(var(--tw-gradient-stops, #e0f7fa, #80deea))",
      },
    },
  },
  plugins: [],
};

export default config;
