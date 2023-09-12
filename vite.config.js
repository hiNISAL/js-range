import path from 'node:path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
      outDir: 'dist',
      lib: {
          entry: [path.resolve(__dirname, './src/index.ts')],
          name: 'jrange',
          // formats: ['u'],
          fileName: (format) => `jrange.${format}.js`,
      },
  },
})