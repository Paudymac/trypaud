'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useCallback, useRef } from 'react';
import ThemeToggle from '@/components/ThemeToggle';
import { TrefoilMark } from '@/components/TrefoilLogo';
import NavMegaPanel from '@/components/NavMegaPanel';
import {
  galleryLinks,
  caseStudyLinks,
  isGalleryRoute,
} from '@/components/NavData';
import { ChevronDownIcon } from '@/components/NavIcons';

export default function SiteHeader() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openMobileGroup, setOpenMobileGroup] = useState(null);
  const [openMenu, setOpenMenu] = useState(null);
  const closeTimer = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 50);
      setOpenMenu(null);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setOpenMobileGroup(null);
    setOpenMenu(null);
  }, [pathname]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setOpenMenu(null);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

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

  const isActive = (href) => pathname === href;
  const inGallery = isGalleryRoute(pathname);
  const inCaseStudies = pathname?.startsWith('/case-studies');

  const handleCollaborateClick = useCallback(() => {
    const el = document.getElementById('collaborate');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  const toggleMobileGroup = (key) =>
    setOpenMobileGroup((curr) => (curr === key ? null : key));

  // Only open the mega panel when focus arrives via keyboard (not mouse).
  const handleTriggerFocus = (key) => (e) => {
    if (e.target.matches(':focus-visible')) openMenuNow(key);
  };

  return (
    <>
      <header
        className="site-header"
        data-scrolled={isScrolled}
        data-menu-open={openMenu !== null}
        role="banner"
      >
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
                Gallery
                <ChevronDownIcon width={12} height={12} />
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
                Case Studies
                <ChevronDownIcon width={12} height={12} />
              </Link>
            </div>

            <Link
              href="/about"
              className={`nav-link ${isActive('/about') ? 'nav-link-active' : ''}`}
              aria-current={isActive('/about') ? 'page' : undefined}
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
              Collaborate
            </button>
          </div>
        </nav>

        <div className="mobile-nav">
          <Link href="/" className="nav-logo" aria-label="TryPaud home">
            <TrefoilMark size={28} />
          </Link>

          <div className="nav-actions">
            <ThemeToggle />
            <button
              className="mobile-menu-btn"
              onClick={() => setIsMenuOpen((v) => !v)}
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

        <div
          id="mobile-menu"
          className={`mobile-menu ${isMenuOpen ? 'mobile-menu-open' : ''}`}
          role="navigation"
          aria-label="Mobile navigation"
        >
          <ul className="mobile-menu-list">
            <li className="mobile-menu-group">
              <button
                type="button"
                className="mobile-menu-group-trigger"
                aria-expanded={openMobileGroup === 'gallery'}
                onClick={() => toggleMobileGroup('gallery')}
              >
                Gallery
                <span className="mobile-menu-group-chev" aria-hidden="true">
                  {openMobileGroup === 'gallery' ? '−' : '+'}
                </span>
              </button>
              {openMobileGroup === 'gallery' && (
                <ul className="mobile-menu-sublist">
                  <li>
                    <Link
                      href="/gallery"
                      className="mobile-menu-link mobile-menu-link-featured"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      All Work
                    </Link>
                  </li>
                  {galleryLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="mobile-menu-link"
                        aria-current={isActive(link.href) ? 'page' : undefined}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            <li className="mobile-menu-group">
              <button
                type="button"
                className="mobile-menu-group-trigger"
                aria-expanded={openMobileGroup === 'caseStudies'}
                onClick={() => toggleMobileGroup('caseStudies')}
              >
                Case Studies
                <span className="mobile-menu-group-chev" aria-hidden="true">
                  {openMobileGroup === 'caseStudies' ? '−' : '+'}
                </span>
              </button>
              {openMobileGroup === 'caseStudies' && (
                <ul className="mobile-menu-sublist">
                  <li>
                    <Link
                      href="/case-studies"
                      className="mobile-menu-link mobile-menu-link-featured"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      All Case Studies
                    </Link>
                  </li>
                  {caseStudyLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="mobile-menu-link"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            <li className="mobile-menu-group">
              <Link
                href="/about"
                className="mobile-menu-link"
                aria-current={isActive('/about') ? 'page' : undefined}
                onClick={() => setIsMenuOpen(false)}
              >
                About
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

      <NavMegaPanel
        openMenu={openMenu}
        onMouseEnter={() => openMenuNow(openMenu ?? 'gallery')}
        onMouseLeave={scheduleClose}
        onItemClick={handlePanelItemClick}
      />
    </>
  );
}
