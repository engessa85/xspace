/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        myback1: "#F7F7F7",
        myback2: "#011E2B",
        myback3: "#637C7D",
        myback4:"#f2ffe3",
        mygreen1: "#00EC64",
        mygreen2: "#B1FF07",
        mygreen3: "#008001",
        mygreen4: "#004E3D",
        myyellow1: "#FFE213",
        myyellow2: "#FEC00E",
      },
    },
  },
  plugins: [],
};

