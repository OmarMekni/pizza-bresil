/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      white: "#ffffff",
      primary: {
        // 200: "#efeffc",
        200: "#DCFADF",
        300: "#5AE468",
        // 300: "#cfd0f6",
        400: "#5FE284",
        // 400: "#7f81e8",
        // DEFAULT: "#5F62E2",
        DEFAULT: "#14D928",
        600: "#5658CB",
      },
      secondary: {
        200: "#eaf8f4",
        300: "#bfe9de",
        400: "#56c4a7",
        DEFAULT: "#2AB691",
        600: "#26a482",
      },
      gray: {
        300: "#fafafa",
        // 400: "#f2f2f2",
        400: "#E7E7E7",
        500: "#e5e5e5",
        600: "#b2b2b2",
        700: "#808080",
        800: "#333333",
        DEFAULT: "#1D1D1D",
      },
      alert: {
        danger: "#FF4E4E",
        success: "#90DA1A",
        warning: "#FEB72F",

      },
      blue: {
        100: "#ebf2f9",
        200: "#c4daed",
        300: "#9ec2e2",
        // 400: "#f2f2f2",
        500: "#8ab5dc",
        600: "#77a9d7",
        700: "#639dd1",
        800: "#5091cb",
        DEFAULT: "#3d85c6",
      },

      heavenly: {
        100: "#72d5ea",
        200: "#5ecfe7",
        300: "#4ac9e4",
        400: "#36C3E1",
        DEFAULT: "#3d85c6",
        light: "#9ae1f0",
      },
    },
    //TUTTI GLI STILI DI TEXT CHE UTILIZZERO NELLA MIA APPLICAZIONE
    fontSize: {
      '8xl': ['120px', {
        lineHeight: '120px',
        letterSpacing: '-6px',
        fontWeight: '500',
      }],

      '7xl': ['72px', {
        lineHeight: '80px',
        letterSpacing: '-4.5px',
        fontWeight: '600',
      }],
      '6xl': ['55px', {
        lineHeight: '60px',
        letterSpacing: '-2.5px',
        fontWeight: '500',
      }],
      '5xl': ['48px', {
        lineHeight: '54px',
        letterSpacing: '-1.60000023841858px',
        fontWeight: '500',
      }],
      '4xl': ['36px', {
        lineHeight: '44px',
        letterSpacing: '-1.2000000476837158px',
        fontWeight: '500',
      }],
      '3xl': ['28px', {
        lineHeight: '34px',
        letterSpacing: '-0.800000011920929px',
        fontWeight: '500',
      }],
      '2xl': ['24px', {
        lineHeight: '30px',
        letterSpacing: '-1px',
        fontWeight: '400',
      }],
      xl: ['24px', {
        lineHeight: '30px',
        letterSpacing: '-1px',
        fontWeight: '400',
      }],
      lg: ['21px', {
        lineHeight: '30px',
        letterSpacing: '-0.800000011920929px',
        fontWeight: '400',
      }],
      base: ['17px', {
        lineHeight: '25px',
        letterSpacing: '-0.699999988079071px',
        fontWeight: '400',
      }],
      sm: ['15px', {
        lineHeight: '23px',
        letterSpacing: '-0.6000000238418579px',
        fontWeight: '400',
      }],
      caption1: ['20px', {
        lineHeight: '24px',
        letterSpacing: '-0.6px',
        fontWeight: '400',
      }],
      caption2: ['18px', {
        lineHeight: '20px',
        letterSpacing: '-0.3px',
        fontWeight: '400',
      }],
      caption3: ['16px', {
        lineHeight: '18px',
        letterSpacing: '-0.5px',
        fontWeight: '400',
      }],
      caption4: ['13px', {
        lineHeight: '15px',
        letterSpacing: '-0.2px',
        fontWeight: '400',
      }],
    },
    borderRadius: {
      DEFAULT: '10px',
      full: "9999px",
    },
    extend: {},
  },
  plugins: [],
}

