'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useCallback, useRef } from 'react';
import ThemeToggle from '@/components/ThemeToggle';
import TrefoilKnot from '@/components/TrefoilKnot';
import NavMegaPanel from '@/components/NavMegaPanel';
import MobileMenu from '@/components/MobileMenu';
import { ChevronDownIcon, ArrowRightIcon } from '@/components/NavIcons';
import { isGalleryRoute } from '@/components/NavData';

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

  const isActive = (href) => pathname === href;
  const inGallery = isGalleryRoute(pathname);
  const inCaseStudies = pathname?.startsWith('/case-studies');

  const handleCollaborateClick = useCallback(() => {
    const el = document.getElementById('collaborate');
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 62;
    window.scrollTo({ top, behavior: 'smooth' });
  }, []);

  const toggleMobileGroup = useCallback(
    (key) => setOpenMobileGroup((curr) => (curr === key ? null : key)),
    []
  );

  const closeMobileMenu = useCallback(() => setIsMenuOpen(false), []);

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
              Hire
              <ArrowRightIcon className="icon-fwd" width={12} height={12} />
            </button>
          </div>
        </nav>

        <div className="mobile-nav">
          <Link href="/" className="nav-logo" aria-label="TryPaud home">
            {/* The full mark, near desktop size — the knot alone at 32px
                read as a favicon next to the 44px pills */}
            <TrefoilKnot size={40} />
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
      </header>

      <MobileMenu
        isOpen={isMenuOpen}
        onClose={closeMobileMenu}
        openGroup={openMobileGroup}
        onToggleGroup={toggleMobileGroup}
        onCollaborate={handleCollaborateClick}
        isActive={isActive}
      />

      <NavMegaPanel
        openMenu={openMenu}
        onMouseEnter={() => openMenuNow(openMenu ?? 'gallery')}
        onMouseLeave={scheduleClose}
        onItemClick={handlePanelItemClick}
      />
    </>
  );
}
