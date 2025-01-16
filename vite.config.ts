import { defineConfig } from 'vite'
import viteReact from '@vitejs/plugin-react'
import { getSrcPath } from './config/utils'

// https://vitejs.dev/config/
export default defineConfig(() => {
  const srcPath = getSrcPath()
  return {
    plugins: [viteReact()],
    resolve: {
      alias: {
        '@': srcPath,
      },
    },
  }
})
