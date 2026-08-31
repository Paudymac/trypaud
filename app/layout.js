import '../styles/v2-global.css';
import { Analytics } from '@vercel/analytics/react';
import BackToTop from '@/components/BackToTop';
import { sora, exo2 } from '@/lib/fonts';

export const metadata = {
  metadataBase: new URL('https://trypaud.com'),
  title: {
    default: 'TryPaud — Design portfolio of Padraic McAteer',
    template: '%s / TryPaud',
  },
  description:
    'Padraic McAteer designs, draws and builds — eighteen years across UI, identity, illustration and motion. Three loops, one line. Try Paud.',
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: '32x32' },
    ],
  },
  openGraph: {
    type: 'website',
    siteName: 'TryPaud',
    images: ['/images/logos/trypaud-black-logo-example.webp'],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/images/logos/trypaud-black-logo-example.webp'],
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
