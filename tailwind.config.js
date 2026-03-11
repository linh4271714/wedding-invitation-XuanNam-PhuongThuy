/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "var(--font-sans)",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Text colors
        "text-primary": "hsl(var(--text-primary))",
        // Border colors
        "border-primary": "hsl(var(--border-primary))",
      },
      borderColor: {
        divider: "#ffffff26",
      },
      borderRadius: {
        lg: "var(--radius)",
      },
      maxWidth: {
        "8xl": "90rem",
      },
      keyframes: {
        "text-gradient": {
          "0%": {
            backgroundPosition: "0% 50%",
          },
          "100%": {
            backgroundPosition: "100% 50%",
          },
        },
        levitate: {
          "0%": {
            transform: "translateY(0)",
          },
          "30%": {
            transform: "translateY(-10px)",
          },
          "50%": {
            transform: "translateY(4px)",
          },
          "70%": {
            transform: "translateY(-15px)",
          },
          "100%": {
            transform: "translateY(0)",
          },
        },
        "fade-in": {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        "fade-out": {
          "0%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
        "float-in-left": {
          "0%": { marginLeft: '50%' },
          "100%": { marginLeft: 0 },
        },
        "float-in-right": {
          "0%": { marginRight: '50%' },
          "100%": { marginRight: 0 },
        },
        "float-in-top": {
          "0%": { marginTop: '50%' },
          "100%": { marginTop: 0 },
        }
      },
      animation: {
        "text-gradient": "text-gradient 4s linear infinite forwards",
        "fade-in": "fade-in 2s ease-out forwards",
        "fade-out": "fade-out 1s ease-out forwards",
        "float-in-left": "float-in-left 2s ease-out forwards",
        "float-in-right": "float-in-right 2s ease-out forwards",
        "float-in-top": "float-in-top 2s ease-out forwards",
      },
    },
  },
  plugins: [],
};
