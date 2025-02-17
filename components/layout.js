import Head from 'next/head';
import Image from 'next/image';
import utilStyles from '../styles/utils.module.css';
import styles from './layout.module.css';
import Menu from './mobNav';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Analytics } from '@vercel/analytics/next';

const name = 'TryPaud';
export const siteTitle = 'TryPaud Portfolio';


export default function Layout({ children, home }) {
  const router = useRouter(); 

  const isActiveLink = (href) => {
    return router.pathname === href;
  };

  const isHomePage = router.pathname === '/';


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
          <a className={`${utilStyles.Menulink} ${isActiveLink('/ui') ? styles.activeLink : ''}`} href="/ui">UI / Web</a>
          <a className={`${utilStyles.Menulink} ${isActiveLink('/logos') ? styles.activeLink : ''}`} href="/logos">Logos</a>
          <a className={`${utilStyles.Menulink} ${isActiveLink('/branding') ? styles.activeLink : ''}`} href="/branding">Branding</a>
          <a className={`${utilStyles.Menulink} ${isActiveLink('/print') ? styles.activeLink : ''}`} href="/print">Print</a>
          <a className={`${utilStyles.Menulink} ${isActiveLink('/icons') ? styles.activeLink : ''}`} href="/icons">Icons</a>
          <a className={`${utilStyles.Menulink} ${isActiveLink('/animation') ? styles.activeLink : ''}`} href="/animation">Animation</a>
          <a className={`${utilStyles.Menulink} ${isActiveLink('/illustration') ? styles.activeLink : ''}`} href="/illustration">Illustration</a>
       </nav>

       
      </header>


      {isHomePage && (

          <Image
            priority
            src="/images/trypaud-logo-lg.svg"
            className={styles.logo}
            height={180}
            width={180}
            alt="Logo"
          />

      )}
      <main>{children}</main>
      <Analytics />
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

