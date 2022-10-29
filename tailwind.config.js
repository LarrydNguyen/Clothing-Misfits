/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './views/*.ejs',
    './views/partials/*.ejs'
  ],
  theme: {
    screens:{
      sm: '640px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
    colors: {
        primary: "#5c7f67",
        secondary: "#ecf4e7",
        "secondary-content": "#24331a",
        accent: "#fae5e5",
        "accent-content": "#322020",
        neutral: "#5d5656",
        "neutral-content": "#e9e7e7",
        "base-100": "#e9e7e7",
        "base-content": "#100f0f", 
      },
    },
  },
  //daisyUI plugin
  plugins: [require("daisyui")],
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },
  daisyui:{
    themes: ["garden"]
  },
  
}
