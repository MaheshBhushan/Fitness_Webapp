import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Keep CRA's output directory so existing deploy settings still work.
  build: { outDir: 'build' },
});
