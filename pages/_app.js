import '../styles/v2-global.css';

import { sora, exo2 } from '@/lib/fonts';

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* next/font CSS is only reliably emitted where the font is used in
          the pages bundle — declare the variable at :root here so
          --font-family resolves to Sora on every pages-router route
          (the app router gets it from the class on <html> in layout.js). */}
      <style jsx global>{`
        :root {
          --font-sora: ${sora.style.fontFamily};
          --font-wordmark: ${exo2.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}
