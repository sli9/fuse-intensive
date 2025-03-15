import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@shared': '/src/shared',
      '@app': '/src/app',
      '@pages': '/src/pages',
    },
  },
  plugins: [react()],
});
