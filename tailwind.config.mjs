/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        sushi: {
          50: "#f7f8ed",
          100: "#ecefd8",
          200: "#d9e1b5",
          300: "#bfce88",
          400: "#a6b962",
          500: "#91a749",
          600: "#6a7c34",
          700: "#52602b",
          800: "#424d27",
          900: "#3a4324",
          950: "#1d2310",
        },
      },
      typography(theme) {
        return {
          DEFAULT: {
            css: {
              "code::before": {
                content: "none", // don’t generate the pseudo-element
              },
              "code::after": {
                content: "none",
              },
              code: {
                backgroundColor: theme("colors.stone.100"),
                fontWeight: "normal",
                fontSize: "85%",
                borderRadius: theme("borderRadius.DEFAULT"),
                paddingLeft: theme("spacing.1"),
                paddingRight: theme("spacing.1"),
                paddingTop: theme("spacing.1"),
                paddingBottom: theme("spacing.1"),
              },
              "--tw-prose-bullets": theme("colors.gray.500"),
            },
          },
        };
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
