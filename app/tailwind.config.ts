import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#1D1E30",

        accent: {
          10: "#FEF6F3",
          50: "#FDECE7",
          100: "#FBDAD0",
          200: "#F9C7B8",
          300: "#F7B5A1",
          400: "#F5A289",
          500: "#F27D5A",
          600: "#F06B42",
          DEFAULT: "#F06B42", // "Accent color based on JUNIA ISEN's color",
          700: "#D84418",
          800: "#B33D1A",
          900: "#7D2A12",
        },
        primary: {
          10: "#F8F3FB",
          50: "#F2ECF8",
          100: "#E5D9F2",
          200: "#D8C6EC",
          300: "#CBB3E6",
          400: "#BE9FDF",
          500: "#A582CA",
          600: "#7E59A6",
          700: "#583B78",
          800: "#3F2A56",
          DEFAULT: "#3F2A56", // "Primary color based on JUNIA's color",
          900: "#251A33",
        },
        success: {
          10: "#F0F5F5",
          50: "#E8F0F0",
          100: "#D1E1E0",
          200: "#A3C2C2",
          300: "#78A6A5",
          400: "#498A89",
          500: "#006E6E",
          DEFAULT: "#006E6E", // "Success color based on JUNIA ISEN's color",
          600: "#005050",
          700: "#004141",
          800: "#002626",
          900: "#001919",
        },
      },

      backgroundImage: {
        hero: "radial-gradient(at center, transparent 48%, #3F2A56)",
        radialHole:
          "radial-gradient(circle at center, transparent, #3F2A56 40%, #3F2A56)",
        fadeOut: "linear-gradient(to bottom, transparent, #3F2A56)",
        fadeIn: "linear-gradient(to bottom, #3F2A56, transparent)",
        "gradient-accent": "linear-gradient(45deg, #F27D5A, #F9C7B8)",
        "gradient-primary": "linear-gradient(45deg, #3F2A56, #7E59A6)",
      },

      transitionTimingFunction: {
        elastic: "cubic-bezier(0.68, -0.6, 0.32, 1.6)",
        back: "cubic-bezier(0.34, 2.48, 0.64, 1)",
        "back-soft": "cubic-bezier(0.34, 1.4, 0.64, 1)",
      },
    },
  },
  plugins: [],
};
export default config;
