/* Site-wide constants shared by the App Router metadata (app/layout.js),
   the pages-router <Seo> component, robots.txt and the sitemap. The bare
   domain 301s to www on Vercel, so www is the canonical host. */
export const SITE_URL = 'https://www.trypaud.com';
export const SITE_NAME = 'tryPaud';
export const SITE_TITLE = 'tryPaud — Design portfolio of Padraic McAteer';
export const SITE_DESCRIPTION =
  'Portfolio of Padraic McAteer, a senior designer and front-end developer with eighteen years of experience across UI, branding, illustration and motion.';
export const DEFAULT_OG_IMAGE = {
  url: '/images/logos/trypaud-black-logo-example.webp',
  width: 1920,
  height: 1080,
  alt: 'tryPaud logo',
};

/* Absolute URL for a site path. Link scrapers ignore relative og:image
   and og:url values, so everything social-facing goes through this. */
export const absoluteUrl = (path = '/') => new URL(path, SITE_URL).toString();
