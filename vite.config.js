import { defineConfig } from 'vite';

export default defineConfig({
  base: '/kino-bio-projekt/',
  build: {
    outDir: 'static/dist',
    rollupOptions: {
      input: {
        main: './src/main.js',
      },
      output: {
        entryFileNames: 'compiledJS.js',
        assetFileNames: 'compiledCSS.[ext]',
      },
    },
  },
});
