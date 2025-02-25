import type { Config } from "tailwindcss";
import plugin from 'tailwindcss/plugin';

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      rotate: {
        '180': '180deg',
      },
      colors: {
        secondary: "#00BFFF",
        darkBg: "#131424",
      },
      backgroundImage: {
        "gradient-cover":
          "linear-gradient(90.21deg, rgba(170, 54, 124, 0.5) -5.91%, rgba(74, 47, 189, 0.5) 111.58%)",
      },
    },
  },
  plugins: [plugin(function ({ addUtilities }) {
    addUtilities({
      '.backface-hidden': {
        backfaceVisibility: 'hidden',
      },
      '.preserve-3d': {
        transformStyle: 'preserve-3d',
      },
    });
  }),],
};
export default config;
