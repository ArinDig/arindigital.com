import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'adi-navy': '#0d2e4f',
        'adi-dark-blue': '#1a4a6b',
        'adi-blue': '#3b82c8',
        'adi-light-blue': '#5ba3d0',
        'adi-sky': '#87c4e0',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config

