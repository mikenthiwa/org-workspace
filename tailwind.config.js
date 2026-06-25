/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./projects/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--mat-sys-primary)',
      },
    },
  },
  plugins: [],
};
