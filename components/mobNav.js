import { useState, useEffect } from 'react';
import Link from 'next/link';
import utilStyles from '../styles/utils.module.css';
import styles from './menu.module.css';
import { useRouter } from 'next/router';
import Image from 'next/image';
import scrollTo from '../components/scrollTo';

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCollaborateSectionInView, setIsCollaborateSectionInView] = useState(false);
  const router = useRouter();

  // Check if the current route is the homepage
  const isHomePage = router.pathname === '/';

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
  }, []);

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
    toggleMenu(); // Close the menu after clicking
  };

  // Determine if the "Collaborate" button should be active
  const isCollaborateButtonActive = isHomePage && isCollaborateSectionInView;

  return (
    <div className={styles.mobileMenu}>
      <a className={styles.mobMenuHome} href="/">
        <Image
          priority
          src="/logo-sm-icon.svg"
          height={40}
          width={40}
          alt="Logo"
        />
      </a>
      <button className={styles.mobileBtn} onClick={toggleMenu}>
        <div className={`${styles.menuIcon} ${isMenuOpen ? styles.menuIconOpen : styles.menuIcon}`}>
          <span className={`${styles.mobileBar} ${isMenuOpen ? styles.mobileBar1Open : styles.mobileBar1}`}></span>
          <span className={`${styles.mobileBar} ${isMenuOpen ? styles.mobileBar2Open : styles.mobileBar2}`}></span>
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
          <a
            className={`${styles.mobMenuLink} ${isActiveLink('/ui-web') ? styles.activeLink : ''}`}
            href="/ui-web"
            onClick={toggleMenu}
          >
            UI / Web
          </a>
        </li>
        <li>
          <a
            className={`${styles.mobMenuLink} ${isActiveLink('/logos') ? styles.activeLink : ''}`}
            href="/logos"
            onClick={toggleMenu}
          >
            Logos
          </a>
        </li>
        <li>
          <a
            className={`${styles.mobMenuLink} ${isActiveLink('/branding') ? styles.activeLink : ''}`}
            href="/branding"
            onClick={toggleMenu}
          >
            Branding
          </a>
        </li>
        <li>
          <a
            className={`${styles.mobMenuLink} ${isActiveLink('/icons') ? styles.activeLink : ''}`}
            href="/icons"
            onClick={toggleMenu}
          >
            Icons
          </a>
        </li>
        <li>
          <a
            className={`${styles.mobMenuLink} ${isActiveLink('/animation') ? styles.activeLink : ''}`}
            href="/animation"
            onClick={toggleMenu}
          >
            Animation
          </a>
        </li>
        <li>
          <a
            className={`${styles.mobMenuLink} ${isActiveLink('/illustration') ? styles.activeLink : ''}`}
            href="/illustration"
            onClick={toggleMenu}
          >
            Illustration
          </a>
        </li>
        <li>
          <a
            className={`${styles.mobMenuLink} ${isActiveLink('/case-studies') ? styles.activeLink : ''}`}
            href="/case-studies"
            onClick={toggleMenu}
          >
            Case Studies
          </a>
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