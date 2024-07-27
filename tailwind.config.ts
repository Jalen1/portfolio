import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      black : "black",
      white : "white",
      oxford_blue: {
        DEFAULT: "#031d44",
        100: "#01060e",
        200: "#010c1b",
        300: "#021129",
        400: "#021737",
        500: "#031d44",
        600: "#064199",
        700: "#0a65ed",
        800: "#5797f8",
        900: "#abcbfb",
      },
      prussian_blue: {
        DEFAULT: "#04395e",
        100: "#010b13",
        200: "#021625",
        300: "#022238",
        400: "#032d4a",
        500: "#04395e",
        600: "#0768ac",
        700: "#1196f5",
        800: "#60b9f8",
        900: "#b0dcfc",
      },
      cambridge_blue: {
        DEFAULT: "#6aa085",
        100: "#15201b",
        200: "#294135",
        300: "#3e6150",
        400: "#53816a",
        500: "#6aa085",
        600: "#88b39d",
        700: "#a5c6b6",
        800: "#c3d9ce",
        900: "#e1ece7",
      },
      tan: {
        DEFAULT: "#dab785",
        100: "#362611",
        200: "#6c4d21",
        300: "#a27332",
        400: "#c99750",
        500: "#dab785",
        600: "#e1c59e",
        700: "#e9d4b6",
        800: "#f0e2cf",
        900: "#f8f1e7",
      },
      burnt_sienna: {
        DEFAULT: "#d5896f",
        100: "#33180f",
        200: "#652f1d",
        300: "#98472c",
        400: "#c7603e",
        500: "#d5896f",
        600: "#dea18d",
        700: "#e6b9aa",
        800: "#eed0c6",
        900: "#f7e8e3",
      },
    },

    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
