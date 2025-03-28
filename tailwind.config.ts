import type { Config } from 'tailwindcss'
import { dynamicIconsPlugin, getIconCollections, iconsPlugin } from '@egoist/tailwindcss-icons'

export default {
  darkMode: ['class'],
  content: ['./src/**/*.{jsx,tsx}'],
  theme: {
    extend: {
      height: {
        'screen-50': 'calc(100% - 50px)',
      },
    },
  },
  plugins: [
    iconsPlugin({
      // Select the icon collections you want to use
      // You can also ignore this option to automatically discover all icon collections you have installed
      collections: getIconCollections(['line-md', 'carbon']),
      scale: 1.25,
    }),
    dynamicIconsPlugin(),
  ],
} satisfies Config
