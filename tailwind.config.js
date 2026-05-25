/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',

  purge: {
    enabled: true,
    content: [
      './src/**/*.{html,ts,scss}'
    ],
  },

  darkMode: 'class',

  theme: {
    extend: {
      colors: {
        "surface-container": "#e6eeff",
        "on-secondary-container": "#606365",
        "primary-fixed": "#ffd8e7",
        "surface-container-lowest": "#ffffff",
        "secondary": "#5c5f60",
        "tertiary": "#855300",
        "surface-dim": "#d0daef",
        "error-container": "#ffdad6",
        "on-primary-fixed": "#3d0026",
        "surface-bright": "#f9f9ff",
        "surface-container-high": "#dee9fd",
        "primary-fixed-dim": "#ffafd3",
        "background": "#f9f9ff",
        "tertiary-fixed-dim": "#ffb95f",
        "inverse-on-surface": "#ebf1ff",
        "secondary-container": "#dee0e2",
        "surface-tint": "#a43073",
        "tertiary-fixed": "#ffddb8",
        "outline": "#87717a",
        "on-error": "#ffffff",
        "error": "#ba1a1a",
        "surface-container-highest": "#d9e3f7",
        "on-primary-container": "#6d0047",
        "on-surface": "#121c2a",
        "on-surface-variant": "#544249",
        "on-primary": "#ffffff",
        "on-error-container": "#93000a",
        "on-background": "#121c2a",
        "surface": "#f9f9ff",
        "on-tertiary": "#ffffff",
        "primary": "#a43073",
        "surface-variant": "#d9e3f7",
        "inverse-surface": "#273140",
        "secondary-fixed": "#e1e2e4",
        "primary-container": "#f472b6",
        "on-primary-fixed-variant": "#85145a",
        "on-secondary-fixed": "#191c1e",
        "inverse-primary": "#ffafd3",
        "surface-container-low": "#eff3ff",
        "tertiary-container": "#de8e00",
        "outline-variant": "#dac0c9",
        "on-secondary-fixed-variant": "#444749"
      },

      fontFamily: {
        "headline": ["Plus Jakarta Sans", "sans-serif"],
        "body": ["Inter", "sans-serif"],
        "label": ["Inter", "sans-serif"]
      },

      borderRadius: {
        DEFAULT: "1rem",
        "lg": "2rem",
        "xl": "3rem",
        "full": "9999px"
      },

      animation: {
        'fade-up': 'fadeUp 0.6s ease forwards',
        'fade-in': 'fadeIn 0.8s ease forwards',
      },

      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        }
      }
    },
  },

  plugins: [],
};