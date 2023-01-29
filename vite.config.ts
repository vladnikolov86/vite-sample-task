import { defineConfig } from 'vite'
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
  plugins: [react(), svgr(), checker({
    typescript: true,
  }),],
});
