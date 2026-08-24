import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        bhagwa: {
          50: "#fff5e8",
          100: "#ffe7c4",
          200: "#ffd18f",
          300: "#ffb65a",
          400: "#ff9a2f",
          500: "#f37d0c",
          600: "#d86206",
          700: "#b24808",
          800: "#8f390d",
          900: "#742f0f"
        },
        ink: "#2f241c",
        sand: "#f7efdf"
      },
      boxShadow: {
        glow: "0 25px 80px rgba(243, 125, 12, 0.18)"
      },
      backgroundImage: {
        "mesh-sunset":
          "radial-gradient(circle at top left, rgba(255, 210, 143, 0.7), transparent 35%), radial-gradient(circle at top right, rgba(243, 125, 12, 0.22), transparent 28%), linear-gradient(135deg, #fff6ea 0%, #fff0d7 45%, #f7e5c6 100%)"
      }
    }
  },
  plugins: []
};

export default config;
