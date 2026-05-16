/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
      extend: {
          colors: {
              "surface-container-high": "#232846",
              "on-surface": "#dee0ff",
              "surface-container": "#191d3b",
              "on-surface-variant": "#ccc3d8",
              "primary": "#d2bbff",
              "primary-container": "#7c3aed",
              "on-primary-container": "#ede0ff",
              "background": "#0c112e",
              "surface-container-lowest": "#070b28",
              "secondary": "#89ceff",
              "surface": "#0c112e",
              "outline": "#958da1"
          },
          spacing: {
              "section-gap": "128px",
              "container-max": "1200px",
              "unit": "8px",
              "margin-mobile": "20px",
              "gutter": "32px"
          },
          fontFamily: {
              "headline-md": ["Space Grotesk", "sans-serif"],
              "label-caps": ["Space Grotesk", "sans-serif"],
              "body-md": ["Inter", "sans-serif"],
              "body-lg": ["Inter", "sans-serif"],
              "display-lg": ["Space Grotesk", "sans-serif"],
              "headline-lg": ["Space Grotesk", "sans-serif"]
          },
          fontSize: {
              "headline-md": ["32px", {"lineHeight": "1.3", "fontWeight": "500"}],
              "label-caps": ["12px", {"lineHeight": "1", "letterSpacing": "0.1em", "fontWeight": "700"}],
              "body-md": ["16px", {"lineHeight": "1.6", "fontWeight": "400"}],
              "body-lg": ["18px", {"lineHeight": "1.7", "fontWeight": "400"}],
              "display-lg": ["72px", {"lineHeight": "1.1", "letterSpacing": "-0.04em", "fontWeight": "700"}],
              "headline-lg": ["40px", {"lineHeight": "1.2", "letterSpacing": "-0.02em", "fontWeight": "600"}]
          }
      }
  },
  plugins: [],
}
