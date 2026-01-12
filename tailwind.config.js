/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: '#1A56DB',
        'fg-brand': '#1A56DB',
        heading: '#111827',
        body: '#6B7280',
        neutral: {
          primary: '#FFFFFF',
          secondary: '#F9FAFB',
          tertiary: '#F3F4F6',
          'primary-medium': '#F3F4F6',
          'tertiary-medium': '#E5E7EB',
          'secondary-soft': '#F9FAFB',
        },
        default: {
          DEFAULT: '#E5E7EB',
          medium: '#D1D5DB',
        },
      },
      borderRadius: {
        base: '0.5rem',
      },
    },
  },
  plugins: [],
}
