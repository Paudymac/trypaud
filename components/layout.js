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
    <div>
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
     <div className={styles.videoReelHolder}>
       {/* <Image
                 priority
                 src="/images/video-bg.jpg"
                 className={styles.logo}
                 height={0}
                 width={0}
                 sizes="100vw"
                 style={{ width: '100%', height: 'auto' }}
                 alt="Logo"
               /> */}
     <div className={styles.videoReelContainer}>
     
     <video className={styles.videoReel} width="1920" height="auto" autoPlay muted  loop preload="none">
     <source  src="/video/header-video.mp4" type="video/mp4" />
           <track
             src="/path/to/captions.vtt"
             kind="subtitles"
             srcLang="en"
             label="English"
           />
           Your browser does not support the video tag.
         </video>
         <Link className={styles.primaryBtn} href="mailto:paudy@trypaud.com">let's collaborate &rarr;</Link>
             </div>
             </div>
      )}
   
      <main className={styles.mainContent}>{children}</main>

      
     
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">← Back to home</Link>
        </div>
      )}
      <Analytics />
     
    </div>
    <div className={styles.footerContainer}>
    <footer className={styles.footer}>
      <ul className={styles.footerNav}><li className={styles.footerMenu}><Link href="https://www.linkedin.com/in/padraic-mcateer-trypaud/">Linkedin</Link></li>
          <li className={styles.footerMenu}><Link href="mailto:paudy@trypaud.com">Email</Link></li>
          <li className={styles.footerMenu}><Link href="/images/PadraicMcAteer_CV_2025.pdf">CV</Link></li>
      </ul>
      </footer>
    </div>
    
    </div>
  );
}

