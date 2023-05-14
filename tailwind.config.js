module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#396C03",
      },
    },
  },
  plugins: [require("daisyui")],
};
