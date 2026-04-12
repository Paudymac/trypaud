import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Analytics } from '@vercel/analytics/react';
import { useScrollToCollaborate } from '@/lib/scrollToCollaborate';
import React, { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';
import ThemeScript from './ThemeScript';
import { TrefoilMark } from './TrefoilLogo';

export const siteTitle = 'TryPaud Portfolio';

export default function Layout({ children, home }) {
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isChildCaseStudiesPage = router.pathname.startsWith('/case-studies/');

  // Scroll detection for header styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [router.pathname]);

  const isActiveLink = (href) => router.pathname === href;

  const { handleCollaborateClick } = useScrollToCollaborate();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { href: '/ui-web', label: 'UI / Web' },
    { href: '/logos', label: 'Logos' },
    { href: '/branding', label: 'Branding' },
    { href: '/animation', label: 'Animation' },
    { href: '/illustration', label: 'Illustration' },
    { href: '/icons', label: 'Icons' },
    { href: '/gallery', label: 'Gallery' },
  ];

  const caseStudyLinks = [
    { href: '/case-studies/design-of-clans', label: 'Clans' },
    { href: '/case-studies/mw5-mercenaries', label: 'Mercenaries' },
    { href: '/case-studies/ui-mwo-product-pages', label: 'MWO' },
    { href: '/case-studies/mechcon-design-system', label: 'Mech_Con' },
  ];

  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="TryPaud — Design portfolio of Padraic McAteer. 17+ years of UI, branding, and visual design."
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
      <header className="site-header" data-scrolled={isScrolled} role="banner">
        {/* Desktop nav */}
        <nav className="nav-container" aria-label="Main navigation">
          <Link href="/" className="nav-logo" aria-label="TryPaud home">
            <TrefoilMark size={32} />
            <span
              style={{
                fontSize: 'var(--text-sm)',
                fontWeight: 'var(--font-bold)',
                textTransform: 'uppercase',
                letterSpacing: 'var(--tracking-wider)',
              }}
            >
              TryPaud
            </span>
          </Link>

          <div className="nav-links">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link ${isActiveLink(link.href) ? 'nav-link-active' : ''}`}
                aria-current={isActiveLink(link.href) ? 'page' : undefined}
              >
                {link.label}
              </Link>
            ))}

            {/* Case Studies dropdown */}
            <div className="nav-dropdown">
              <Link
                href="/case-studies"
                className={`nav-link nav-dropdown-trigger ${isActiveLink('/case-studies') || router.pathname.startsWith('/case-studies') ? 'nav-link-active' : ''}`}
                aria-current={
                  router.pathname.startsWith('/case-studies')
                    ? 'page'
                    : undefined
                }
              >
                Case Studies
                <svg
                  viewBox="0 0 12 12"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M3 5l3 3 3-3" />
                </svg>
              </Link>
              <div className="nav-dropdown-menu" role="menu">
                {caseStudyLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="nav-dropdown-link"
                    role="menuitem"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="nav-actions">
            <ThemeToggle />
            <button
              onClick={handleCollaborateClick}
              className="btn btn-accent btn-sm"
              type="button"
            >
              Collaborate
            </button>
          </div>
        </nav>

        {/* Mobile nav */}
        <div className="mobile-nav">
          <Link href="/" className="nav-logo" aria-label="TryPaud home">
            <TrefoilMark size={28} />
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

        {/* Mobile menu panel */}
        <div
          id="mobile-menu"
          className={`mobile-menu ${isMenuOpen ? 'mobile-menu-open' : ''}`}
          role="navigation"
          aria-label="Mobile navigation"
        >
          <ul className="mobile-menu-list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="mobile-menu-link"
                  aria-current={isActiveLink(link.href) ? 'page' : undefined}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/case-studies"
                className="mobile-menu-link"
                aria-current={
                  isActiveLink('/case-studies') ? 'page' : undefined
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Case Studies
              </Link>
            </li>
            <li>
              <button
                onClick={() => {
                  handleCollaborateClick();
                  setIsMenuOpen(false);
                }}
                className="btn btn-accent btn-sm"
                style={{ marginTop: 'var(--space-4)', width: '100%' }}
                type="button"
              >
                Collaborate
              </button>
            </li>
          </ul>
        </div>
      </header>

      {/* ---- Main content ---- */}
      <main id="main-content" role="main">
        {children}
      </main>

      {/* ---- Back to home (non-home pages) ---- */}
      {!home && !isChildCaseStudiesPage && (
        <div className="container" style={{ paddingBlock: 'var(--space-8)' }}>
          <div className="case-study-back">
            <Link href="/" className="btn btn-primary">
              <span aria-hidden="true">&larr;</span> Back to home
            </Link>
          </div>
        </div>
      )}

      {/* ---- Footer ---- */}
      <footer className="site-footer-wrapper" role="contentinfo">
        <div className="site-footer">
          <nav className="footer-nav" aria-label="Footer navigation">
            <Link
              href="https://www.linkedin.com/in/padraic-mcateer-trypaud/"
              className="footer-link"
            >
              LinkedIn
            </Link>
            <Link href="mailto:paudy@trypaud.com" className="footer-link">
              Email
            </Link>
            <Link href="/PadraicMcAteer_CV_2025.pdf" className="footer-link">
              CV
            </Link>
          </nav>

          <div className="footer-brand">
            <Link href="/" className="footer-logo" aria-label="TryPaud home">
              <TrefoilMark size={64} />
            </Link>
            <button
              onClick={handleCollaborateClick}
              className="btn btn-accent"
              type="button"
            >
              Let&apos;s Collaborate &nearr;
            </button>
          </div>
        </div>
        <p className="footer-copyright">
          &copy; {new Date().getFullYear()} TryPaud. All rights reserved.
        </p>
      </footer>

      <Analytics />
    </div>
  );
}
