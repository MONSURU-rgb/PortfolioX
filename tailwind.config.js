/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      jakarta: ["Plus Jakarta Sans", "sans-serif"],
    },

    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {},
      spacing: {
        12: "clamp(10px,0.7vw,12px)",
        18: "clamp(16px,1.13vw,18px)",
        24: "clamp(20px,1.5vw,24px)",
        29: "clamp(18px,1.8vw,29px)",
        32: "clamp(20px,2vw,32px)",
        44: "clamp(28px,2.8vw,44px)",
        56: "clamp(20px,3.4vw,56px)",
        120: "clamp(20px,7.5vw,120px)",
        40: "clamp(22px,2.4vw,40px)",
        342: "clamp(200px,21.3vw,342px)",
        434: "clamp(280px,27vw,434px)",
        60: "clamp(38px,3.75vw,60px)",
        69: "clamp(40px,4.3vw,69px)",
        20: "clamp(15px,1.3vw,20px)",
        22: "clamp(15px,1.4vw,22px)",
        89: "clamp(50px,5.6vw,89px)",
        128: "clamp(98px,8vw,128px)",
        30: "clamp(23px,1.9vw,30px)",
        34: "clamp(23px,1.9vw,34px)",
        260: "clamp(150px,16.25vw,260px)",
        51: "clamp(32px,3.2vw,51px)",
        16: "clamp(12px,1vw,16px)",
        10: "clamp(7px,0.7vw,10px)",
        35: "clamp(26px,2.2vw,35px)",
        28: "clamp(18px,1.6vw,28px)",
        88: "clamp(50px,5vw,88px)",
      },

      fontSize: {
        24: "clamp(20px,1.5vw,24px)",
        20: "clamp(15px,1.3vw,20px)",
        18: "clamp(16px,1.13vw,18px)",
        16: "clamp(12px,1vw,16px)",
        35: "clamp(28px,2.2vw,35px)",
        14: "clamp(10px,0.9vw,14px)",
        12: "clamp(9px,0.8vw,12px)",
      },

      backdropBlur: {
        "3xl": "80px",
      },
    },
  },
  plugins: [],
};
