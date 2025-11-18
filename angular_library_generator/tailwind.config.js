/** Tailwind configuration for Ocean Professional theme tokens and PrimeNG interop */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./projects/health-ui-lib/src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        success: "var(--accent-green)",
        warning: "var(--accent-amber)",
        danger: "var(--accent-red)",
        surface: "var(--card-bg)",
        canvas: "var(--bg-canvas)",
        text: "var(--text-primary)",
        subtle: "var(--border-subtle)"
      },
      borderRadius: {
        card: "var(--radius-card)"
      },
      boxShadow: {
        ocean: "var(--shadow)"
      }
    }
  },
  plugins: []
}
