import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// WebContainers (StackBlitz, CodeSandbox) run Node in-browser with a shimmed
// filesystem; native fs watch events there are unreliable and can crash
// Vite's dev server with "ENOENT ... path: undefined". Polling is the
// documented workaround, scoped to WebContainers only so normal/production
// environments keep native (faster) watching.
const isWebContainer = process.versions?.webcontainer !== undefined;

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
  vite: isWebContainer
    ? {
        server: {
          watch: {
            usePolling: true,
            interval: 300,
          },
        },
      }
    : {},
});
