module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  media: false,
  theme: {
    fontFamily: {
      default: ["Favorit Pro", "sans-serif"],
      sans: ["Whyte Inktrap", "sans-serif"],
      funkturm: ["Funkturm", "sans-serif"],
      serif: ["Alegreya", "serif"],
    },
    extend: {
      flexGrow: {
        1: 1,
        2: 1,
      },
      fontSize: {
        "d-additionalHeader": "2.813rem",
        "d-additionalTitle": "7.5rem",
        "d-heading": "7.5rem",
        "d-title": "3.75rem",
        "d-body": "1.25rem",
        "d-additionalText": "1.25rem",
        "d-small": "0.875rem",
        "d-subheading": "4.063rem",
        "d-caption": "1.063rem",
        "d-header": "4.688rem",
        "t-header": "3.188rem",
        "m-heading": "3.125rem",
        "m-body": "0.875rem",
        "m-title": "1.5rem",
        "m-additionalText": "0.875rem",
        "m-small": "0.875rem",
        "m-subheading": "1.875rem",
        "m-header": "2.188rem",
        "m-additionalTitle": "3.125rem",
        "m-additionalHeader": "1.563rem",
      },
      lineHeight: {
        full: "100%",
      },
      keyframes: {
        "fade-left": {
          "0%, 5%": {
            opacity: 0,
            transform: "translateX(20px)",
          },
          "40%, 60%": { opacity: 1 },
          "95%, 100%": {
            opacity: 0,
            transform: "translateX(-20px)",
          },
        },
        "fade-down": {
          "0%, 5%": {
            opacity: 0,
            transform: "translateY(-20px)",
          },
          "40%, 60%": { opacity: 1 },
          "95%, 100%": {
            opacity: 0,
            transform: "translateY(20px)",
          },
        },
        "fade-up": {
          "0%, 5%": {
            opacity: 0,
            transform: "translateY(20px)",
          },
          "40%, 60%": { opacity: 1 },
          "95%, 100%": {
            opacity: 0,
            transform: "translateY(-20px)",
          },
        },
        fade: {
          "0%, 10%": {
            opacity: 0,
          },
          "40%, 70%": { opacity: 1 },
          "90%, 100%": {
            opacity: 0,
          },
        },
      },
      animation: {
        "fade-left": "fade-left 1.5s linear infinite",
        "fade-left-slower": "fade-left 2.5s linear infinite",
        "fade-down": "fade-down 1.5s linear infinite",
        "fade-up": "fade-up 1.5s linear infinite",
        fade: "fade 2s linear infinite",
        "fade-delay": "fade 2s linear infinite .25s",
      },
      minHeight: {
        "16rem": "16rem",
        "100vhWithHeader": "calc(100vh - 60px)",
      },
      minWidth: {
        "1rem": "1rem",
      },
      screens: {
        "max-sm": { max: "599px" },
        "max-md": { max: "849px" },
        "max-lg": { max: "1199px" },
        "max-xl": { max: "1399px" },
        sm: "600px",
        md: "850px",
        lg: "1200px",
        xl: "1280px",
        reveal_end_md: "950px",
        betterhover: { raw: "(hover: hover)" },
      },
      zIndex: {
        min1: "-1",
        "-1": "-1",
        "-2": "-2",
        "-3": "-3",
        "-4": "-4",
        "-5": "-5",
        "-6": "-6",
        "-7": "-7",
        "-8": "-8",
        "-9": "-9",
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
        6: "6",
        7: "7",
        8: "8",
        9: "9",
      },
      spacing: {
        "10px": "10px",
        paddingContent: "5rem",
      },
      boxShadow: {
        darker:
          "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)",
        test: "0px 1px 10px 0px rgba(0,0,0,0.25)",
      },
      dropShadow: {
        top: "0px -4px 4px rgba(0, 0, 0, .2)",
        collaborators: "24px 24px 24px rgba(0, 0, 0, 0.6)",
      },
      boxShadow: {
        base: "0px 0px 10px 2px rgba(0, 0, 0, .4)",
      },
      gridTemplateRows: {
        nxt: "repeat(2, minmax(0, 100%))",
      },
      height: {
        "screen-1/2": "50vh",
        "s-30": "30vh",
        "s-40": "40vh",
        "s-50": "50vh",
        "s-100": "100vh",
        "s-150": "150vh",
        "s-200": "200vh",
        "10vh": "10vh",
        "15vh": "15vh",
        "20vh": "20vh",
        "25vh": "25vh",
        "30vh": "30vh",
        "50vh": "50vh",
        "75vh": "75vh",
        "80vh": "80vh",
        "32px": "32px",
        "24px": "24px",
        "16px": "16px",
        "15rem": "15rem",
        "20rem": "20rem",
        "25rem": "25rem",
        "30rem": "30rem",
        "36rem": "36rem",
        "46rem": "46rem",
        "56rem": "56rem",
        "60rem": "60rem",
        header: "61px",
        "90%": "90%",
      },
      width: {
        "16px": "16px",
        "24px": "24px",
        "32px": "32px",
        "30rem": "30rem",
        "36rem": "36rem",
        "46rem": "46rem",
        "52rem": "56rem",
        "56rem": "56rem",
        "60rem": "60rem",
        content: "52rem",
        "s-30": "30vw",
        "s-40": "40vw",
        "s-50": "50vw",
        "90%": "90%",
      },
      colors: {
        culture: "#D66A51",
        interview: "#DEFE71",
        food: "#C9C8BF",
        infographic: "#9FF7CD",
        events: "#E9C4DD",
        locavore: "#789578",
        nightrooster: "#91C1E4",
        localparts: "#C06467",
        nusantara: "#E18065",
        localab: "#BC9EDF",
        togo: "#C2D09A",
        gray: "#676767",
        lighterGray: "#F0F0F0",
        lightGray: "#DEDCDA",
        offBlack: "#181818",
      },
      inset: {
        "-0.5": "-0.5px",
      },
      borderRadius: {
        "50%": "50%",
      },
      maxWidth: {
        issueCard: "375px",
        "800px": "800px",
      },
    },
  },
  variants: {
    paddingSafe: ["responsive"],
  },
  plugins: [
    require("tailwindcss-padding-safe"),
    require("@tailwindcss/aspect-ratio"),
    require("tailwind-clip-path"),
    require("tailwindcss-writing-mode")({
      variants: ["responsive", "hover"],
    })
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
};
