import { useState } from 'react';
import Link from 'next/link';
import utilStyles from '../styles/utils.module.css';
import styles from './menu.module.css';
import { useRouter } from 'next/router'; 

const Menu = () => {
  // State to track if the menu is open or closed
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu state
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const router = useRouter(); 

  const isActiveLink = (href) => {
    return router.pathname === href;
  };

  return (
    <div className={styles.mobileMenu}>
      {/* Button to toggle the menu */}
      <button className={styles.mobileBtn} onClick={toggleMenu}>
      <div className={styles.menuIcon} >
      <span className={`${styles.mobileBar} ${isMenuOpen ? styles.mobileBar1Open : styles.mobileBar1}`}></span>
      <span className={`${styles.mobileBar} ${isMenuOpen ? styles.mobileBar2Open : styles.mobileBar2}`}></span>
      </div>
      {isMenuOpen ? 'close' : 'menu'}
      </button>

      {/* Menu with conditional class name */}
      <ul className={isMenuOpen ? 'menu-open' : 'menu-closed'}>

	        <li><a className={`${styles.mobMenuLink} ${isActiveLink('/') ? styles.activeLink : ''}`}  href="/" onClick={toggleMenu}>home</a></li>
	        <li><a className={`${styles.mobMenuLink} ${isActiveLink('/ui') ? styles.activeLink : ''}`} href="/ui" onClick={toggleMenu}>UI / Web</a></li>
	        <li><a className={`${styles.mobMenuLink} ${isActiveLink('/logos') ? styles.activeLink : ''}`} href="/logos" onClick={toggleMenu}>Logos</a></li>
	        <li><a className={`${styles.mobMenuLink} ${isActiveLink('/branding') ? styles.activeLink : ''}`} href="/branding" onClick={toggleMenu}>Branding</a></li>
	        <li><a className={`${styles.mobMenuLink} ${isActiveLink('/print') ? styles.activeLink : ''}`} href="/print" onClick={toggleMenu}>Print</a></li>
	        <li><a className={`${styles.mobMenuLink} ${isActiveLink('/icons') ? styles.activeLink : ''}`}  href="/icons" onClick={toggleMenu}>Icons</a></li>
	        <li><a className={`${styles.mobMenuLink} ${isActiveLink('/animation') ? styles.activeLink : ''}`} href="/animation" onClick={toggleMenu}>Animation</a></li>
	        <li><a className={`${styles.mobMenuLink} ${isActiveLink('/illustration') ? styles.activeLink : ''}`} href="/illustration" onClick={toggleMenu}>Illustration</a></li>

      </ul>
    </div>

  );
};

export default Menu;
