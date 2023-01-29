import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react'
import path from 'path';
import svgr from 'vite-plugin-svgr'
import checker from 'vite-plugin-checker';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '~': path.resolve(__dirname, 'src'),
      'react-virtualized/List': 'react-virtualized/dist/es/List',
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './setupTests.ts',
  },
  plugins: [react(), svgr(), checker({
    typescript: true,
  }),],
  build: {
    outDir: './server/dist'
  },

});
