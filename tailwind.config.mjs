import { transform } from "typescript";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      height: {
        container: "calc(100vh - 9rem)",
      },
      colors: {
        "card-bg": "#221D26",
        "card-accent": "#908E92",
        bg: "#18131C",
        border: "#C8C7C9",
        "gradient-vex-green": "#18E98E",
        "gradient-vex-purple": "#550F9F",
        "section-bg": "#18131C",
      },
      boxShadow: {
        "inner-card": "inset 0 0 15px 11px rgba(121, 173, 149, 0.16)",
      },
      fontFamily: {
        raleway: ["Raleway Variable", "sans-serif"],
        work: ["Work Sans Variable", "sans-serif"],
      },
      keyframes: {
        tada: {
          "0%": {
            transform: "scale3d(1, 1, 1)",
          },
          "10%, 20%": {
            transform: "scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)",
          },
          "30%, 50%, 70%, 90%": {
            transform: "scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)",
          },
          "40%, 60%, 80%": {
            transform: "scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)",
          },
          "100%": {
            transform: "scale3d(1, 1, 1)",
          },
        },
        "fade-in": {
          "0%": {
            opacity: 0,
          },
          "100%": {
            opacity: 1,
          },
        },
        "fade-out": {
          "0%": {
            opacity: 1,
          },
          "100%": {
            opacity: 0,
          },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
        "slide-down": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0%)" },
        },
      },
      animation: {
        tada: "tada 1s ease-in-out 0.25s infinite",
        fadein: "fade-in 1s ease-in-out 0.25s 1",
        fadeout: "fade-out 1s ease-out 0.25s 1",
        marquee: "marquee 25s linear infinite",
        marquee2: "marquee2 25s linear infinite",
        "slide-down": "slide-down 1s ease-in-out 1",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".perspective": {
          perspective: "1000px",
        },
      });
      addUtilities({
        ".glow": {
          BackgroundImage:
            "radial-gradient(circle at 50% -20%, #ffffff00, #00000000);",
        },
      });
      addUtilities({
        ".bg-glow": {
          BackgroundImage:
            "radial-gradient(circle at 50% 50%, #ffffff22, #0000000f);",
        },
      });
    },
  ],
};
