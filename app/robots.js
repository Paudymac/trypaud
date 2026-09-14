import { SITE_URL } from '@/lib/site';

/* Serves /robots.txt. Everything is crawlable; the unlisted work-in-progress
   pages opt out individually with a noindex meta tag rather than here, so a
   Disallow line never hides a page that's since been linked. */
export default function robots() {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
