import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        navy: {
          50: "hsl(220, 65%, 97%)",
          100: "hsl(220, 65%, 92%)",
          200: "hsl(220, 65%, 85%)",
          300: "hsl(220, 65%, 75%)",
          400: "hsl(220, 65%, 65%)",
          500: "hsl(220, 65%, 55%)",
          600: "hsl(220, 65%, 45%)",
          700: "hsl(220, 65%, 35%)",
          800: "hsl(220, 65%, 25%)",
          900: "hsl(220, 65%, 15%)",
        },
        gold: {
          50: "hsl(43, 65%, 95%)",
          100: "hsl(43, 65%, 90%)",
          200: "hsl(43, 65%, 80%)",
          300: "hsl(43, 65%, 70%)",
          400: "hsl(43, 65%, 60%)",
          500: "hsl(43, 65%, 50%)",
          600: "hsl(43, 65%, 40%)",
          700: "hsl(43, 65%, 30%)",
          800: "hsl(43, 65%, 20%)",
          900: "hsl(43, 65%, 10%)",
        },
        cream: "hsl(40, 33%, 98%)",
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
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
