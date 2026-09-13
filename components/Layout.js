import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Analytics } from '@vercel/analytics/react';
import { useScrollToCollaborate } from '@/lib/scrollToCollaborate';
import React, { useState, useEffect, useRef, useCallback } from 'react';
import ThemeToggle from './ThemeToggle';
import ThemeScript from './ThemeScript';
import TrefoilKnot from './TrefoilKnot';
import NavMegaPanel from './NavMegaPanel';
import MobileMenu from './MobileMenu';
import AmbientBackground from './ui/AmbientBackground';
import BackToTop from './BackToTop';
import { isGalleryRoute } from './NavData';
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ChevronDownIcon,
  LinkedInIcon,
  MailIcon,
  FileTextIcon,
} from './NavIcons';

export const siteTitle = 'TryPaud Portfolio';

export default function Layout({ children, home }) {
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openMobileGroup, setOpenMobileGroup] = useState(null);
  const [openMenu, setOpenMenu] = useState(null);
  const closeTimer = useRef(null);

  const isChildCaseStudiesPage = router.pathname.startsWith('/case-studies/');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      setOpenMenu(null);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setOpenMobileGroup(null);
    setOpenMenu(null);
  }, [router.pathname]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setOpenMenu(null);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  // Tap-outside closes the mega panel. Hover opens it, and on a touch
  // screen wide enough for the desktop nav (iPads, iPad Pro portrait) the
  // first tap on a trigger is the emulated hover — the panel opens, and
  // with no mouseleave ever coming it would sit over the page until the
  // next scroll. pointerdown, not click, so it also beats a tap that lands
  // on something inert.
  useEffect(() => {
    if (openMenu === null) return undefined;
    const onPointerDown = (e) => {
      if (e.target.closest('.site-header, .nav-mega-panel')) return;
      setOpenMenu(null);
    };
    document.addEventListener('pointerdown', onPointerDown, { passive: true });
    return () => document.removeEventListener('pointerdown', onPointerDown);
  }, [openMenu]);

  useEffect(
    () => () => {
      if (closeTimer.current) clearTimeout(closeTimer.current);
    },
    []
  );

  const openMenuNow = useCallback((key) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenMenu(key);
  }, []);

  const scheduleClose = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenMenu(null), 180);
  }, []);

  const handlePanelItemClick = () => setOpenMenu(null);

  const isActiveLink = (href) => router.pathname === href;
  const inGallery = isGalleryRoute(router.pathname);
  const inCaseStudies = router.pathname.startsWith('/case-studies');

  const { handleCollaborateClick } = useScrollToCollaborate();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleMobileGroup = useCallback(
    (key) => setOpenMobileGroup((curr) => (curr === key ? null : key)),
    []
  );

  const closeMobileMenu = useCallback(() => setIsMenuOpen(false), []);

  const handleTriggerFocus = (key) => (e) => {
    if (e.target.matches(':focus-visible')) openMenuNow(key);
  };

  return (
    <div className="site-shell">
      <Head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="alternate icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Portfolio of Padraic McAteer, a senior designer and front-end developer with eighteen years of experience across UI, branding, illustration and motion."
        />
        <meta
          property="og:image"
          content="/images/logos/trypaud-black-logo-example.webp"
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="googlebot" content="notranslate" />
        <meta name="google" content="notranslate" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <ThemeScript />
      </Head>

      {/* Skip to content link for accessibility */}
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>

      {/* ---- Header ---- */}
      <header
        className="site-header"
        data-scrolled={isScrolled}
        data-menu-open={openMenu !== null}
        role="banner"
      >
        {/* Desktop nav */}
        <nav className="nav-container" aria-label="Main navigation">
          <Link
            href="/"
            className="nav-logo mark-hover"
            aria-label="TryPaud home"
          >
            <TrefoilKnot size={45} />
            <span className="nav-wordmark">
              <span className="nav-wordmark-try">try</span>
              <span className="nav-wordmark-paud">Paud</span>
            </span>
          </Link>

          <div className="nav-links">
            <div
              className="nav-dropdown"
              onMouseEnter={() => openMenuNow('gallery')}
              onMouseLeave={scheduleClose}
            >
              <Link
                href="/gallery"
                className={`nav-link nav-dropdown-trigger ${inGallery ? 'nav-link-active' : ''}`}
                aria-current={inGallery ? 'page' : undefined}
                aria-haspopup="true"
                aria-expanded={openMenu === 'gallery'}
                onFocus={handleTriggerFocus('gallery')}
              >
                Work
                <ChevronDownIcon
                  className="nav-dropdown-chev"
                  width={12}
                  height={12}
                />
              </Link>
            </div>

            <div
              className="nav-dropdown"
              onMouseEnter={() => openMenuNow('caseStudies')}
              onMouseLeave={scheduleClose}
            >
              <Link
                href="/case-studies"
                className={`nav-link nav-dropdown-trigger ${inCaseStudies ? 'nav-link-active' : ''}`}
                aria-current={inCaseStudies ? 'page' : undefined}
                aria-haspopup="true"
                aria-expanded={openMenu === 'caseStudies'}
                onFocus={handleTriggerFocus('caseStudies')}
              >
                Studies
                <ChevronDownIcon
                  className="nav-dropdown-chev"
                  width={12}
                  height={12}
                />
              </Link>
            </div>

            <Link
              href="/about"
              className={`nav-link ${isActiveLink('/about') ? 'nav-link-active' : ''}`}
              aria-current={isActiveLink('/about') ? 'page' : undefined}
              onMouseEnter={scheduleClose}
            >
              About
            </Link>
          </div>

          <div className="nav-actions">
            <ThemeToggle />
            <button
              onClick={handleCollaborateClick}
              className="btn btn-accent btn-sm"
              type="button"
            >
              Hire
              <ArrowRightIcon className="icon-fwd" width={12} height={12} />
            </button>
          </div>
        </nav>

        {/* Mobile nav */}
        <div className="mobile-nav">
          <Link
            href="/"
            className="nav-logo mark-hover"
            aria-label="TryPaud home"
          >
            {/* The full lockup, as on desktop — mark plus wordmark. It
                clears the two 44px pills with room to spare at 360px. */}
            <TrefoilKnot size={40} />
            <span className="nav-wordmark">
              <span className="nav-wordmark-try">try</span>
              <span className="nav-wordmark-paud">Paud</span>
            </span>
          </Link>

          <div className="nav-actions">
            <ThemeToggle />
            <button
              className="mobile-menu-btn"
              onClick={toggleMenu}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              type="button"
            >
              <div
                className={`hamburger ${isMenuOpen ? 'hamburger-open' : ''}`}
              >
                <span className="hamburger-bar" />
                <span className="hamburger-bar" />
              </div>
              {isMenuOpen ? 'Close' : 'Menu'}
            </button>
          </div>
        </div>
      </header>

      <MobileMenu
        isOpen={isMenuOpen}
        onClose={closeMobileMenu}
        openGroup={openMobileGroup}
        onToggleGroup={toggleMobileGroup}
        onCollaborate={handleCollaborateClick}
        isActive={isActiveLink}
      />

      <NavMegaPanel
        openMenu={openMenu}
        onMouseEnter={() => openMenuNow(openMenu ?? 'gallery')}
        onMouseLeave={scheduleClose}
        onItemClick={handlePanelItemClick}
      />

      {/* ---- Main content over the ambient space backdrop ---- */}
      <AmbientBackground />
      <main id="main-content" role="main">
        {children}
      </main>

      {/* ---- Back to home (non-home pages) ---- */}
      {!home && !isChildCaseStudiesPage && (
        <div className="case-study-back">
          <Link href="/" className="btn btn-secondary btn-ring">
            <ArrowLeftIcon className="icon-back" width={14} height={14} />
            Back to home
          </Link>
        </div>
      )}

      {/* ---- Footer strip ---- */}
      <footer className="site-footer-wrapper" role="contentinfo">
        <div className="footer-strip">
          <Link
            href="/"
            className="footer-mark mark-hover"
            aria-label="TryPaud home"
          >
            <TrefoilKnot
              size={44}
              knotInk="var(--color-text-primary)"
              triangleInk="var(--color-text-primary)"
            />
          </Link>
          <nav className="footer-links" aria-label="Footer navigation">
            <a
              href="https://www.linkedin.com/in/padraic-mcateer-trypaud/"
              className="footer-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon width={14} height={14} />
              LinkedIn
            </a>
            <a href="mailto:paudy@trypaud.com" className="footer-link">
              <MailIcon width={14} height={14} />
              Email
            </a>
            <a
              href="/PadraicMcAteer_CV_2026.pdf"
              className="footer-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FileTextIcon width={14} height={14} />
              CV
            </a>
          </nav>
          <p className="footer-copyright">
            © {new Date().getFullYear()} TRYPAUD
          </p>
        </div>
      </footer>

      <BackToTop />
      <Analytics />
    </div>
  );
}
