import '../styles/v2-global.css';
import { Analytics } from '@vercel/analytics/react';
import BackToTop from '@/components/BackToTop';
import { sora, exo2 } from '@/lib/fonts';
import {
  SITE_URL,
  SITE_NAME,
  SITE_TITLE,
  SITE_DESCRIPTION,
  DEFAULT_OG_IMAGE,
} from '@/lib/site';

export const metadata = {
  /* www is the canonical host — the bare domain 301s to it on Vercel.
     The pages-router pages get the same tags from components/Seo.js. */
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: `%s / ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  alternates: { canonical: '/' },
  icons: {
    icon: [
      { url: '/favicon.svg?v=2', type: 'image/svg+xml' },
      { url: '/favicon.ico?v=2', sizes: '48x48 32x32 16x16' },
    ],
    apple: '/apple-touch-icon.png?v=2',
  },
  openGraph: {
    type: 'website',
    siteName: SITE_NAME,
    url: '/',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [DEFAULT_OG_IMAGE.url],
  },
  robots: { index: true, follow: true },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  colorScheme: 'dark light',
};

/* VOID is the default; migrate v2 stored values (dark→void, light→hull). */
const themeScript = `(function(){try{var t=localStorage.getItem('theme');if(t==='dark')t='void';if(t==='light')t='hull';if(t!=='void'&&t!=='hull')t='void';localStorage.setItem('theme',t);document.documentElement.setAttribute('data-theme',t);}catch(e){document.documentElement.setAttribute('data-theme','void');}})();`;

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${exo2.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        {children}
        <BackToTop />
        <Analytics />
      </body>
    </html>
  );
}
