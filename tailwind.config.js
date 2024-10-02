/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "iranMedium":"iranMedium",
        "iranBold" : "iranBold",
        "iranBlack": "iranBlack",
      },
      fontSize:{
        "md":"2rem"
      },
      colors: {
        "background":{
          100: "#FFFFFF",
          200:"#F3F4F6"
        },
        "font":{
          100:"#3D434F ",
          200:"#AAB0BB ",
          300:"#585D67",
        },
        "primary":{
          default:"#0EA4E8 ",
          100:"#0284C7 "
        },
        "secondary":{
          default:"#38D277",
          100:"#16A34A"
        }
      },
      borderRadius:{
        50:"50%"
      },
      container:{
        center:"true"
      },
      screens:{
        "xs":"380px",
        "sm": "576px",
        "md":"768px",
        "lg":"992px",
        "xl":"1220px",
        '2xl':"1420px",
      }
    },
  },
  plugins: [],
};
