import '../styles/global.css';

import { Barlow } from 'next/font/google'
 
const barlow = Barlow({
  weight: ['400', '700'],
   style: ['normal','italic'],
  subsets: ['latin'],
})

export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${barlow.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  )
}
