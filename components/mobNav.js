import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './menu.module.css';
import { useRouter } from 'next/router';
import Image from 'next/image';
import useScrollTo from '../components/scrollTo';

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCollaborateSectionInView, setIsCollaborateSectionInView] = useState(false);
  const router = useRouter();

  // Function to toggle the menu state
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Scroll event handler
  useEffect(() => {
    const handleScroll = () => {
      // Check if the collaborate section is in view
      const collaborateSection = document.getElementById('collaborate');
      if (collaborateSection) {
        const rect = collaborateSection.getBoundingClientRect();
        const isInView = rect.top <= window.innerHeight && rect.bottom >= 0;

        setIsCollaborateSectionInView(isInView);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Check if a link is active
  const isActiveLink = (href) => {
    return router.pathname === href;
  };

  // Use the scrollTo component
  const { scrollToTarget } = useScrollTo({ targetId: 'collaborate' });

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
    toggleMenu(); // Close the menu after clicking
  };

  return (
    <div className={styles.mobileMenu}>
      <Link href="/" className={styles.mobMenuHome}>
        <Image
          priority
          src="/logo-sm-icon.svg"
          height={50}
          width={50}
          alt="Logo"
        />
      </Link>
      <button className={styles.mobileBtn} onClick={toggleMenu}>
        <div
          className={`${styles.menuIcon} ${isMenuOpen ? styles.menuIconOpen : styles.menuIcon}`}
        >
          <span
            className={`${styles.mobileBar} ${isMenuOpen ? styles.mobileBar1Open : styles.mobileBar1}`}
          ></span>
          <span
            className={`${styles.mobileBar} ${isMenuOpen ? styles.mobileBar2Open : styles.mobileBar2}`}
          ></span>
        </div>
        {isMenuOpen ? 'close' : 'menu'}
      </button>

      <ul className={isMenuOpen ? 'menu-open' : 'menu-closed'}>
        {/* <li>
          <a
            className={`${styles.mobMenuLink} ${isActiveLink('/') ? styles.activeLink : ''}`}
            href="/"
            onClick={toggleMenu}
          >
            home
          </a>
        </li> */}

        <li>
          <Link
            className={`${styles.mobMenuLink} ${isActiveLink('/ui-web') ? styles.activeLink : ''}`}
            href="/ui-web"
            onClick={toggleMenu}
          >
            UI / Web
          </Link>
        </li>
        <li>
          <Link
            className={`${styles.mobMenuLink} ${isActiveLink('/logos') ? styles.activeLink : ''}`}
            href="/logos"
            onClick={toggleMenu}
          >
            Logos
          </Link>
        </li>
        <li>
          <Link
            className={`${styles.mobMenuLink} ${isActiveLink('/branding') ? styles.activeLink : ''}`}
            href="/branding"
            onClick={toggleMenu}
          >
            Branding
          </Link>
        </li>
        <li>
          <Link
            className={`${styles.mobMenuLink} ${isActiveLink('/animation') ? styles.activeLink : ''}`}
            href="/animation"
            onClick={toggleMenu}
          >
            Animation
          </Link>
        </li>
        <li>
          <Link
            className={`${styles.mobMenuLink} ${isActiveLink('/illustration') ? styles.activeLink : ''}`}
            href="/illustration"
            onClick={toggleMenu}
          >
            Illustration
          </Link>
        </li>
        <li>
          <Link
            className={`${styles.mobMenuLink} ${isActiveLink('/icons') ? styles.activeLink : ''}`}
            href="/icons"
            onClick={toggleMenu}
          >
            Icons
          </Link>
        </li>
        <li>
          <Link
            className={`${styles.mobMenuLink} ${isActiveLink('/case-studies') ? styles.activeLink : ''}`}
            href="/case-studies"
            onClick={toggleMenu}
          >
            Case Studies
          </Link>
        </li>
        <li>
          <button
            onClick={handleCollaborateClick}
            className={`${styles.mobMenuLink} ${styles.collabMobMenuLink}`}
          >
            Collaborate
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
