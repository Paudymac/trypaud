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
      <button className={styles.mobileBtn} onClick={toggleMenu}><span className={styles.menuIcon} ></span>{isMenuOpen ? 'close' : 'menu'}</button>

      {/* Menu with conditional class name */}
      <ul className={isMenuOpen ? 'menu-open' : 'menu-closed'}>

	        <li><a className={styles.mobMenuLink} href="/">home</a></li>
	        <li><a className={styles.mobMenuLink} href="/ui">UI / Web</a></li>
	        <li><a className={styles.mobMenuLink} href="/logos">Logos</a></li>
	        <li><a className={styles.mobMenuLink} href="/branding">Branding</a></li>
	        <li><a className={styles.mobMenuLink} href="/print">Print</a></li>
	        <li><a className={styles.mobMenuLink} href="/icons">Icons</a></li>
	        <li><a className={styles.mobMenuLink} href="/animation">Animation</a></li>
	        <li><a className={styles.mobMenuLink} href="/illustration">Illustration</a></li>

      </ul>
    </div>
  );
};

export default Menu;
