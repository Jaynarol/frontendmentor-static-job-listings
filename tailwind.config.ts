import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'hsl(180, 29%, 50%)',
        secondary: 'hsl(180, 8%, 52%)',
        'secondary-light': 'hsl(180, 31%, 95%)',
        'secondary-dark': 'hsl(180, 14%, 20%)',
        accent: 'hsl(180, 52%, 96%)',
      },
    },
  },
  plugins: [],
}
export default config
