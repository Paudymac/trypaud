import Head from 'next/head';
import { useRouter } from 'next/router';
import {
  SITE_NAME,
  SITE_TITLE,
  SITE_DESCRIPTION,
  DEFAULT_OG_IMAGE,
  absoluteUrl,
} from '@/lib/site';

/**
 * Seo — the document head for pages-router pages. The home page lives in
 * the App Router and gets the equivalent from app/layout.js's metadata
 * export; every other page renders this through <Layout seo={...}>.
 *
 * - title:       page title; rendered as "Title / tryPaud" to match the App
 *                Router template. Omit for the site title.
 * - description: meta + og + twitter description. Falls back to the site
 *                description, so no page ships without one.
 * - image:       og/twitter image path; defaults to the logo card.
 * - noindex:     keeps unlisted or placeholder pages out of search results
 *                while they're still reachable by URL.
 *
 * Every tag carries a `key` so a page can't double up a tag next/head
 * already emitted for it.
 */
export default function Seo({ title, description, image, noindex = false }) {
  const { asPath } = useRouter();
  const path = asPath.split(/[?#]/)[0].replace(/\/+$/, '') || '/';
  const canonical = absoluteUrl(path);
  const fullTitle = title ? `${title} / ${SITE_NAME}` : SITE_TITLE;
  const desc = description || SITE_DESCRIPTION;
  const ogImage = absoluteUrl(image || DEFAULT_OG_IMAGE.url);

  return (
    <Head>
      <title key="title">{fullTitle}</title>
      <meta key="description" name="description" content={desc} />
      <link key="canonical" rel="canonical" href={canonical} />
      {noindex && <meta key="robots" name="robots" content="noindex" />}

      <meta key="og:type" property="og:type" content="website" />
      <meta key="og:site_name" property="og:site_name" content={SITE_NAME} />
      <meta key="og:url" property="og:url" content={canonical} />
      <meta key="og:title" property="og:title" content={fullTitle} />
      <meta key="og:description" property="og:description" content={desc} />
      <meta key="og:image" property="og:image" content={ogImage} />

      <meta
        key="twitter:card"
        name="twitter:card"
        content="summary_large_image"
      />
      <meta key="twitter:title" name="twitter:title" content={fullTitle} />
      <meta
        key="twitter:description"
        name="twitter:description"
        content={desc}
      />
      <meta key="twitter:image" name="twitter:image" content={ogImage} />
    </Head>
  );
}
