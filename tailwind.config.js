

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      xs: "12px",
      sm: [
        "14px",
        {
          lineHeight: "21px",
          letterSpacing: "-0.01em",
          fontWeight: "400",
        },
      ],
      "2xl": [
        "1.5rem",
        {
          lineHeight: "2rem",
          letterSpacing: "-0.01em",
          fontWeight: "500",
        },
      ],
      "3xl": [
        "25px",
        {
          lineHeight: "37.5px",
          letterSpacing: "-0.02em",
          fontWeight: "700",
        },
      ],
      "4xl": [
        "32px",
        {
          lineHeight: "40px",
          fontWeight: "700",
        },
      ],
    },
    listStyleType: {
      none: "none",
      disc: "disc",
      decimal: "decimal",
      square: "square",
      roman: "upper-roman",
    },
    extend: {
      backgroundImage: {
        'hero': "url('../hero1.png')",
      },
      colors: {
        white: "#FFFFFF",
        gray: "#828282",
        lightgray: "#F6F6F6",
        deepgray: "#191919",
        notactive: "#5F6C72",
        lightblack: "#1C1C1C",
        btn: "#0F6100",
        btnlight: "#BDFFB1",
        footer: "#C2CBC1",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        poppinsbold: ["Poppins", "sans-serif", "700"],
        catamaran: ["Catamaran", "sans-serif"],
        lobstertwo: ["Lobster Two", "sans-serif"],
        rubik: ["Rubik Bubbles", "system-ui"], 
        mon: ["Montserrat", "sans-serif"],
      },
      spacing: {
        0: "0",
        0.2: "1px",
        0.5: "4px",
        1: "8px",
        1.2: "10px",
        2: "16px",
        3: "24px",
        4: "32px",
        5: "40px",
        6: "48px",
        7: "56px",
        8: "64px",
        9: "72px",
        10: "80px",
        11: "88px",
        12: "96px",
        14: "112px",
        16: "120px",
      },
      zIndex: {
        1: "1",
        2: "2",
        3: "3",
        4: "4",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
    },
  },
  plugins: [],
};
