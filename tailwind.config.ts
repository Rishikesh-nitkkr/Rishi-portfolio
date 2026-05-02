import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#0B0B0F",
          900: "#10121A",
          800: "#151924",
          700: "#1F2633"
        },
        accent: {
          purple: "#7C3AED",
          blue: "#3B82F6",
          cyan: "#22D3EE"
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 42px rgba(124, 58, 237, 0.22)",
        "blue-glow": "0 0 36px rgba(59, 130, 246, 0.18)"
      },
      backgroundImage: {
        "hero-field":
          "linear-gradient(180deg, rgba(124, 58, 237, 0.14) 0%, rgba(11, 11, 15, 0) 34%), linear-gradient(120deg, rgba(59, 130, 246, 0.1), rgba(11, 11, 15, 0) 44%)",
        "accent-gradient": "linear-gradient(135deg, #7C3AED 0%, #3B82F6 100%)"
      }
    }
  },
  plugins: []
};

export default config;
