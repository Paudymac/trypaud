import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Menu from './mobNav';
import Link from 'next/link';

const name = 'TryPaud';
export const siteTitle = 'TryPaud Portfolio';

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Portfolio site"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
         <meta name="googlebot" content="notranslate" />
    <meta name="google" content="notranslate" />
      </Head>
      <header className={styles.header}>

        <Menu />

        <nav className={utilStyles.MenuParent}>
          <a className={utilStyles.Menuhome} href="/"><Image
              priority
              src="/logo-sm-icon.svg"
              className={utilStyles.Menuhome}
              height={40}
              width={40}
              alt={name}
            /></a>
          <a className={utilStyles.Menulink} href="/ui">UI / Web</a>
          <a className={utilStyles.Menulink} href="/logos">Logos</a>
          <a className={utilStyles.Menulink} href="/branding">Branding</a>
          <a className={utilStyles.Menulink} href="/print">Print</a>
          <a className={utilStyles.Menulink} href="/icons">Icons</a>
          <a className={utilStyles.Menulink} href="/animation">Animation</a>
          <a className={utilStyles.Menulink} href="/illustration">Illustration</a>
       </nav>

        {home ? (
          <>
          <a href="/" className={styles.logoHome}>
            <Image
              priority
              src="/images/trypaud-logo-lg.svg"
              height={180}
              width={180}
              alt={name}
            />
          </a>
          </>
        ) : (
          <>
            
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">← Back to home</Link>
        </div>
      )}
      <footer className={styles.footer}>
      <ul><li className={styles.footerMenu}><Link href="https://www.linkedin.com/in/padraic-mcateer-trypaud/">Linkedin</Link></li>
          <li className={styles.footerMenu}><Link href="mailto:paudy@trypaud.com">Email</Link></li>
          <li className={styles.footerMenu}><Link href="/images/PadraicMcAteer_CV_2025.pdf">CV</Link></li>
      </ul>

      </footer>
    </div>
  );
}
