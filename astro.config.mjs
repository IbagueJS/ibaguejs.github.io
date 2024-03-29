import { defineConfig } from 'astro/config';

// https://astro.build/config
import react from "@astrojs/react";
import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  site: 'https://ibaguejs.com',
  base: '/ibaguejs.github.io',
  integrations: [
    react(),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
  ]
});
