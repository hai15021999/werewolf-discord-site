// @ts-check
import { defineConfig } from 'astro/config';

// Public URL of the site, used for canonical and hreflang links (omitted when unknown).
// SITE_URL wins; on Vercel, VERCEL_PROJECT_PRODUCTION_URL is the production domain
// (the custom domain once it is added).
const vercelDomain = process.env.VERCEL_PROJECT_PRODUCTION_URL;
const site = process.env.SITE_URL || (vercelDomain ? `https://${vercelDomain}` : undefined);

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
