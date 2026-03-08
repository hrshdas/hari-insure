import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Outfit", "Inter", "system-ui", "sans-serif"],
      },
      colors: {
        brand: {
          green: "#16a37f",
          "green-mid": "#1db892",
          "green-light": "#e8f8f4",
          "green-muted": "#d1f0e8",
          "green-dark": "#0e7a5e",
          orange: "#f97316",
          "orange-light": "#fff4ed",
          "orange-dark": "#ea6c0a",
          beige: "#f5f0e8",
          "beige-2": "#ede8df",
          ink: "#0d3d35",
          "ink-2": "#1a4f45",
          muted: "#64748b",
          border: "#e2e8f0",
          "border-2": "#f1f5f9",
        },
      },
      fontSize: {
        "display-2xl": ["4.5rem", { lineHeight: "1.08", letterSpacing: "-0.03em", fontWeight: "700" }],
        "display-xl": ["3.75rem", { lineHeight: "1.1", letterSpacing: "-0.03em", fontWeight: "700" }],
        "display-lg": ["3rem", { lineHeight: "1.12", letterSpacing: "-0.025em", fontWeight: "700" }],
        "display-md": ["2.25rem", { lineHeight: "1.18", letterSpacing: "-0.02em", fontWeight: "700" }],
        "display-sm": ["1.5rem", { lineHeight: "1.3", letterSpacing: "-0.015em", fontWeight: "600" }],
      },
      boxShadow: {
        "xs": "0 1px 2px rgba(0,0,0,0.04)",
        "sm-soft": "0 2px 8px rgba(0,0,0,0.05), 0 1px 2px rgba(0,0,0,0.04)",
        "card": "0 0 0 1px rgba(0,0,0,0.04), 0 4px 16px rgba(0,0,0,0.06)",
        "card-hover": "0 0 0 1px rgba(0,0,0,0.06), 0 8px 32px rgba(0,0,0,0.10)",
        "card-lifted": "0 0 0 1px rgba(0,0,0,0.05), 0 16px 48px rgba(0,0,0,0.12)",
        "green-glow": "0 4px 24px rgba(22, 163, 127, 0.22)",
        "orange-glow": "0 4px 24px rgba(249, 115, 22, 0.28)",
        "inset-border": "inset 0 0 0 1px rgba(255,255,255,0.12)",
      },
      backgroundImage: {
        "mesh-green":
          "radial-gradient(at 40% 20%, rgba(22,163,127,0.08) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(249,115,22,0.04) 0px, transparent 50%), radial-gradient(at 0% 50%, rgba(22,163,127,0.05) 0px, transparent 50%)",
        "mesh-dark":
          "radial-gradient(at 40% 20%, rgba(22,163,127,0.12) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(22,163,127,0.06) 0px, transparent 50%)",
        "card-shine":
          "linear-gradient(135deg, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0) 50%)",
        "green-gradient": "linear-gradient(135deg, #16a37f 0%, #0e7a5e 100%)",
        "cta-gradient":
          "linear-gradient(135deg, #0d9373 0%, #0f7a60 40%, #0e6b53 100%)",
      },
      animation: {
        "fade-up": "fadeUp 0.55s cubic-bezier(0.22,1,0.36,1) forwards",
        "fade-in": "fadeIn 0.4s ease-out forwards",
        float: "float 4s ease-in-out infinite",
        "slide-in": "slideIn 0.5s cubic-bezier(0.22,1,0.36,1) forwards",
        shimmer: "shimmer 2.5s linear infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        slideIn: {
          "0%": { opacity: "0", transform: "translateX(16px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      transitionTimingFunction: {
        spring: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};
export default config;
