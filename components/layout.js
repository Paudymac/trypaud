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
  const [isCollaborateSectionInView, setIsCollaborateSectionInView] = useState(false);

  // Check if the current route is the homepage
  const isHomePage = router.pathname === '/';

  // Check if the current route is a child of the case studies page
  const isChildCaseStudiesPage = router.pathname.startsWith('/case-studies/');

  // Scroll event handler
  useEffect(() => {
    if (isHomePage && isChildCaseStudiesPage) return;

    const handleScroll = () => {
      const scrollThreshold = 50; // Adjust this value as needed
      if (window.scrollY > scrollThreshold) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Check if the collaborate section is in view
      const collaborateSection = document.getElementById('collaborate');
      if (collaborateSection) {
        const rect = collaborateSection.getBoundingClientRect();
        const isInView = rect.top <= window.innerHeight && rect.bottom >= 0;

        console.log('Collaborate section in view:', isInView); // Debugging log
        console.log('Rect top:', rect.top, 'Rect bottom:', rect.bottom); // Debugging log
        console.log('Window inner height:', window.innerHeight); // Debugging log

        setIsCollaborateSectionInView(isInView);
      }
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

  // Use the scrollTo component
  const { scrollToTarget } = scrollTo({ targetId: 'collaborate' });

  // Handle the "Collaborate" button click
  const handleCollaborateClick = () => {
    if (router.pathname !== '/') {
      // Navigate to the homepage first
      router.push('/').then(() => {
        // After navigation, scroll to the collaborate section
        scrollToTarget();
      });
    } else {
      // If already on the homepage, just scroll to the collaborate section
      scrollToTarget();
    }
  };

  // Determine if the "Collaborate" button should be active
  const isCollaborateButtonActive = isHomePage && isCollaborateSectionInView;

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
            !isHomePage ? utilStyles.MenuParentChildren : ''
          } ${(isHomePage) && isScrolled ? utilStyles.scrolledNav : ''}`}
        >
          <a className={utilStyles.Menuhome} href="/">
            <Image
              priority
              src="/logo-sm-icon.svg"
              height={50}
              width={50}
              alt={name}
            />
          </a>
         
          <a className={`${utilStyles.Menulink} ${isActiveLink('/ui-web') ? styles.activeLink : ''}`} href="/ui-web">
            UI / Web
          </a>
          <a className={`${utilStyles.Menulink} ${isActiveLink('/logos') ? styles.activeLink : ''}`} href="/logos">
            Logos
          </a>
          <a className={`${utilStyles.Menulink} ${isActiveLink('/branding') ? styles.activeLink : ''}`} href="/branding">
            Branding
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
          <a
            className={`${utilStyles.Menulink} ${isActiveLink('/case-studies') ? styles.activeLink : ''}`}
            href="/case-studies"
          >
            Case Studies
          </a>
          <button
            onClick={handleCollaborateClick}
            className={`${utilStyles.Menulink} ${utilStyles.collabMenulink} ${
              isCollaborateButtonActive ? utilStyles.activeCollab : ''
            }`}
          >
            Collaborate
          </button>
        </nav>
      </header>

      <div className={!isHomePage && !isChildCaseStudiesPage ? styles.container : ''}>
        {isHomePage && <div></div>}

        <main className={!isChildCaseStudiesPage ? styles.mainContent : ''}>{children}</main>

        {!home && !isChildCaseStudiesPage && (
         <p className={styles.backToBtnContainer}>
            <Link href="/" className={styles.primaryBtn}>
              ← Back to home
            </Link>
          </p>
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
              <Link href="/PadraicMcAteer_CV_2025.pdf">CV</Link>
            </li>
          </ul>
          <div className={styles.collabBtnFooterContainer}>
          <p className={styles.logoBtnFooterContainer}> <a href="/">
            <Image
              priority
              src="/trypaud-logo-white-100px.svg"
              height={150}
              width={150}
              alt={name}
            />
          </a></p>
          <button
            onClick={handleCollaborateClick}
            className={`${styles.primaryBtn}`}
          >
            let's Collaborate &rarr;
          </button>
         
         
          </div>
        </footer>
      </div>
    </div>
  );
}