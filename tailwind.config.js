  // /** @type {import('tailwindcss').Config} */
  // export default {
  //   content: [
  //     "./index.html",
  //     "./src/**/*.{js,jsx,ts,tsx}",
  //   ],
  //   theme: {
  //     extend: {},
  //   },
  //   plugins: [],
  // }

 

// 2
// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      keyframes: {
        // Existing keyframes
        fadeDown: {
          "0%": { opacity: 0, transform: "translateY(-20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        goldShine: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" },
        },
        slideIn: {
          "0%": { opacity: 0, transform: "translateY(-10px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
         goldPulse: {
      "0%, 100%": { transform: "scale(1)" },
      "50%": { transform: "scale(1.05)" },
    },

        // New keyframes
        fadeUp: {
          "0%": { opacity: 0, transform: "translateY(30px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        slideUp: {
          "0%": { opacity: 0, transform: "translateY(40px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },

      animation: {
        // Existing animations
        fadeDown: "fadeDown 0.9s ease-out forwards",
        goldShine: "goldShine 2.5s linear infinite",
        slideIn: "slideIn 0.8s ease-out forwards",
          goldPulse: "goldPulse 2s infinite ease-in-out",

        // New animations
        fadeUp: "fadeUp 0.9s ease-out forwards",
        slideUp: "slideUp 0.8s ease-out forwards",
      },
    },
  },
  plugins: [],
};
