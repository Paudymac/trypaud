import Head from 'next/head';
import Image from 'next/image';
import utilStyles from '../styles/utils.module.css';
import styles from './layout.module.css';
import Menu from './mobNav';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Analytics } from '@vercel/analytics/react';
import scrollTo from '../components/scrollTo';
import React, { useState, useEffect } from 'react';

const name = 'TryPaud';
export const siteTitle = 'TryPaud Portfolio';

export default function Layout({ children, home }) {
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);

  // Check if the current route is the homepage
  const isHomePage = router.pathname === '/';

  // Check if the current route is a child of the case studies page
  const isChildCaseStudiesPage = router.pathname.startsWith('/case-studies/');

  console.log('isScrolled:', isScrolled);

  // Scroll event handler
  useEffect(() => {
    // Only run this effect if it's the homepage or a child of the case studies page
    if (isHomePage && isChildCaseStudiesPage) return;

    const handleScroll = () => {
      const scrollThreshold = 50; // Adjust this value as needed
      if (window.scrollY > scrollThreshold) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      console.log('Scroll position:', window.scrollY);
    };

    

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isHomePage, isChildCaseStudiesPage]);

  // Check if a link is active
  const isActiveLink = (href) => {
    return router.pathname === href;
  };



  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Portfolio site" />
        <meta property="og:image" content={`/images/logos/trypaud-black-logo-example.webp`} />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="googlebot" content="notranslate" />
        <meta name="google" content="notranslate" />
      </Head>
      <header className={styles.header}>
        <Menu />
        <nav
          className={`${utilStyles.MenuParent} ${
            !isHomePage && !isChildCaseStudiesPage ? utilStyles.MenuParentChildren : ''
          } ${(isHomePage || isChildCaseStudiesPage) && isScrolled ? utilStyles.scrolledNav : ''}`}
        >
          <a className={utilStyles.Menuhome} href="/">
            <Image
              priority
              src="/logo-sm-icon.svg"
              className={utilStyles.Menuhome}
              height={40}
              width={40}
              alt={name}
            />
          </a>
          <a
            className={`${utilStyles.Menulink} ${isActiveLink('/case-studies') ? styles.activeLink : ''}`}
            href="/case-studies"
          >
            Case Studies
          </a>
          <a className={`${utilStyles.Menulink} ${isActiveLink('/ui') ? styles.activeLink : ''}`} href="/ui">
            UI / Web
          </a>
          <a className={`${utilStyles.Menulink} ${isActiveLink('/logos') ? styles.activeLink : ''}`} href="/logos">
            Logos
          </a>
          <a className={`${utilStyles.Menulink} ${isActiveLink('/branding') ? styles.activeLink : ''}`} href="/branding">
            Branding
          </a>
          <a className={`${utilStyles.Menulink} ${isActiveLink('/print') ? styles.activeLink : ''}`} href="/print">
            Print
          </a>
          <a className={`${utilStyles.Menulink} ${isActiveLink('/icons') ? styles.activeLink : ''}`} href="/icons">
            Icons
          </a>
          <a className={`${utilStyles.Menulink} ${isActiveLink('/animation') ? styles.activeLink : ''}`} href="/animation">
            Animation
          </a>
          <a className={`${utilStyles.Menulink} ${isActiveLink('/illustration') ? styles.activeLink : ''}`} href="/illustration">
            Illustration
          </a>
        </nav>
      </header>

      <div className={!isHomePage && !isChildCaseStudiesPage  ? styles.container : ''}>
        {isHomePage && (
        <div></div>
        )}

        <main className={!isChildCaseStudiesPage ? styles.mainContent : ''}>{children}</main>

        {!home && !isChildCaseStudiesPage && (
          <div className={styles.backToHome}>
            <Link href="/" className={styles.primaryBtn}>
              ← Back to home
            </Link>
          </div>
        )}
        <Analytics />
      </div>

      <div className={styles.footerContainer}>
        <footer className={styles.footer}>
          <ul className={styles.footerNav}>
            <li className={styles.footerMenu}>
              <Link href="https://www.linkedin.com/in/padraic-mcateer-trypaud/">Linkedin</Link>
            </li>
            <li className={styles.footerMenu}>
              <Link href="mailto:paudy@trypaud.com">Email</Link>
            </li>
            <li className={styles.footerMenu}>
              <Link href="/images/PadraicMcAteer_CV_2025.pdf">CV</Link>
            </li>
          </ul>
        </footer>
      </div>
    </div>
  );
}