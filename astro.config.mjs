import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://carlinnordstrom.com',
  output: 'static',
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap(),
  ],
  // Polling file watch — only affects `astro dev`, never `astro build`.
  // Native fs watch events are unreliable inside WebContainers (StackBlitz,
  // CodeSandbox) and were crashing the dev server with
  // "ENOENT ... path: undefined" shortly after startup.
  vite: {
    server: {
      watch: {
        usePolling: true,
        interval: 300,
      },
    },
  },
});
