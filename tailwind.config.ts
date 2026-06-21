import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: { DEFAULT: "#0a1411", soft: "#10231d" },
        paper: { DEFAULT: "#fbf8f1", soft: "#f1ead9" },
        graphite: "#1f2a25",
        foam: "#f4efe3",
        tide: { DEFAULT: "#3fa39a", dim: "#2b6f69" },
        ember: { DEFAULT: "#e8a056", dim: "#b97b3d" },
        mist: { DEFAULT: "#8b9a93", dark: "#5d6b65" },
        lineDark: "rgba(31,42,37,0.12)",
        lineLight: "rgba(244,239,227,0.1)",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-plex-mono)", "ui-monospace", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
