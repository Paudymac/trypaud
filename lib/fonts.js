import { Sora, Exo_2 } from 'next/font/google';

// One shared instance for both routers. The variable class MUST land on
// <html> (app: layout.js, pages: _document.js) — tokens resolve
// var(--font-sora) at :root, so a variable defined lower in the tree
// never reaches --font-family.
export const sora = Sora({
  weight: ['400', '600', '800'],
  subsets: ['latin'],
  variable: '--font-sora',
  display: 'swap',
});

// Wordmark only (TRY/PAUD lockup) — rounded-techno echo of the knot.
export const exo2 = Exo_2({
  weight: ['800'],
  subsets: ['latin'],
  variable: '--font-wordmark',
  display: 'swap',
});
