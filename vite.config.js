import { defineConfig } from 'vite';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import { ViteMinifyPlugin } from 'vite-plugin-minify';
import injectHTML from 'vite-plugin-html-inject';

export default defineConfig({
  root: './src',
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    // rollup это сборщик используется под копотом vite
    rollupOptions: {
      input: {
        main: './src/index.html',
        about: './src/about.html',
        pricing: './src/pricing.html',
      },
    },
  },

  plugins: [
    injectHTML(),
    ViteMinifyPlugin(),
    ViteImageOptimizer({
      png: {
        quality: 80,
      },
      jpg: {
        quality: 80,
      },
    }),
  ],
});
