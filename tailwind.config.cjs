module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        white: "#FFFCF0",
        black: "#100F0F",
        pink: "#EF9CCB",
      },
      animation: {
        marquee: "marquee 25s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translate(0%)" },
          to: { transform: "translate(-100%)" },
        },
      },
    },
  },
  plugins: [],
}
