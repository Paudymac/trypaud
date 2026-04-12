import '../styles/v2-global.css';

import { Barlow } from 'next/font/google';

const barlow = Barlow({
  weight: ['400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-barlow',
});

export default function App({ Component, pageProps }) {
  return (
    <div className={barlow.variable}>
      <Component {...pageProps} />
    </div>
  );
}
