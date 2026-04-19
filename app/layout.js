import '../styles/v2-global.css';
import { Barlow } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import BackToTop from '@/components/BackToTop';

const barlow = Barlow({
  weight: ['400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-barlow',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL('https://trypaud.com'),
  title: {
    default: 'TryPaud — Design portfolio of Padraic McAteer',
    template: '%s · TryPaud',
  },
  description:
    'Senior designer and front-end developer with 17+ years across UI, branding, illustration and visual storytelling.',
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

const themeScript = `(function(){try{var t=localStorage.getItem('theme');if(!t){t=window.matchMedia('(prefers-color-scheme: light)').matches?'light':'dark';}document.documentElement.setAttribute('data-theme',t);}catch(e){document.documentElement.setAttribute('data-theme','dark');}})();`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={barlow.variable} suppressHydrationWarning>
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
