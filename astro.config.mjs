// @ts-check
import { defineConfig } from 'astro/config';

// Public URL of the site, used for canonical and hreflang links. SITE_URL overrides it.
const site = process.env.SITE_URL || 'https://werewolf-discord.casbersolution.com';

// https://astro.build/config
export default defineConfig({
  site,
  i18n: {
    locales: ['en', 'vi'],
    defaultLocale: 'en',
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
    },
  },
});
