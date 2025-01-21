import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
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
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
          <a href="/" className={styles.logoHome}>
            <Image
              priority
              src="/images/profile.webp"
              className={utilStyles.borderCircle}
              height={240}
              width={240}
              alt={name}
            />
          </a>
          </>
        ) : (
          <>
            <Link href="/">
              <Image
                priority
                src="/images/profile.jpg"
                className={utilStyles.borderCircle}
                height={108}
                width={108}
                alt={name}
              />
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/" className={utilStyles.colorInherit}>
                {name}
              </Link>
            </h2>
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
      <ul><li className={styles.footerMenu}><Link href="https://www.linkedin.com/in/padraic-mcateer-2895a8203">Linkedin</Link></li>
          <li className={styles.footerMenu}><Link href="mailto:paudy@trypaud.com">Email</Link></li>
          <li className={styles.footerMenu}><Link href="/images/PadraicMcAteer_CV_2025.pdf">CV</Link></li>
      </ul>

      </footer>
    </div>
  );
}
