import { useState } from 'react';
import Link from 'next/link';
import utilStyles from '../styles/utils.module.css';
import styles from './menu.module.css';

const Menu = () => {
  // State to track if the menu is open or closed
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu state
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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

	        <li><a className={styles.mobMenuLink} href="/" onClick={toggleMenu}>home</a></li>
	        <li><a className={styles.mobMenuLink} href="/ui" onClick={toggleMenu}>UI / Web</a></li>
	        <li><a className={styles.mobMenuLink} href="/logos" onClick={toggleMenu}>Logos</a></li>
	        <li><a className={styles.mobMenuLink} href="/branding" onClick={toggleMenu}>Branding</a></li>
	        <li><a className={styles.mobMenuLink} href="/print" onClick={toggleMenu}>Print</a></li>
	        <li><a className={styles.mobMenuLink} href="/icons" onClick={toggleMenu}>Icons</a></li>
	        <li><a className={styles.mobMenuLink} href="/animation" onClick={toggleMenu}>Animation</a></li>
	        <li><a className={styles.mobMenuLink} href="/illustration" onClick={toggleMenu}>Illustration</a></li>

      </ul>
    </div>
  );
};

export default Menu;
