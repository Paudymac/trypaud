import { useState } from 'react';
import Link from 'next/link';
import styles from './menu.module.css';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { useScrollToCollaborate } from '@/lib/scrollToCollaborate';

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  // Function to toggle the menu state
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Check if a link is active
  const isActiveLink = (href) => {
    return router.pathname === href;
  };

  // Use the scrollToCollaborate utility
  const { handleCollaborateClick: scrollToCollaborate } =
    useScrollToCollaborate();

  // Handle the "Collaborate" button click
  const handleCollaborateClick = () => {
    scrollToCollaborate();
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
