/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      boxShadow: {
        "inner-card": "inset 0 0 15px 11px rgba(121, 173, 149, 0.26)",
      },
      fontFamily: {
        raleway: ["Raleway Variable", "sans-serif"],
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
            "radial-gradient(circle at 50% -20%, #ffffff22, #0000000f);",
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
