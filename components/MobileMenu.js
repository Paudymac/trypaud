'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import { ArrowRightIcon } from './NavIcons';
import { galleryLinks, caseStudyLinks } from './NavData';

/**
 * The mobile slide-down menu panel, shared by both headers
 * (app/_components/SiteHeader.js and components/Layout.js).
 *
 * Must be rendered as a SIBLING of <header>, never inside it: .site-header
 * carries a backdrop-filter, which makes it the containing block for
 * position:fixed descendants — inside the header this panel's top/bottom
 * resolve against the 60px header box and its height collapses to zero.
 */
export default function MobileMenu({
  isOpen,
  onClose,
  openGroup,
  onToggleGroup,
  onCollaborate,
  isActive,
}) {
  // Lock body scroll while open (same pattern as Lightbox)
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [isOpen, onClose]);

  return (
    <div
      id="mobile-menu"
      className={`mobile-menu ${isOpen ? 'mobile-menu-open' : ''}`}
      role="navigation"
      aria-label="Mobile navigation"
    >
      <ul className="mobile-menu-list">
        <li className="mobile-menu-group">
          <button
            type="button"
            className="mobile-menu-group-trigger"
            aria-expanded={openGroup === 'gallery'}
            onClick={() => onToggleGroup('gallery')}
          >
            Gallery
            <span className="mobile-menu-group-chev" aria-hidden="true">
              {openGroup === 'gallery' ? '−' : '+'}
            </span>
          </button>
          {openGroup === 'gallery' && (
            <ul className="mobile-menu-sublist">
              <li>
                <Link
                  href="/gallery"
                  className="mobile-menu-link mobile-menu-link-featured"
                  onClick={onClose}
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
                    onClick={onClose}
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
            aria-expanded={openGroup === 'caseStudies'}
            onClick={() => onToggleGroup('caseStudies')}
          >
            Case Studies
            <span className="mobile-menu-group-chev" aria-hidden="true">
              {openGroup === 'caseStudies' ? '−' : '+'}
            </span>
          </button>
          {openGroup === 'caseStudies' && (
            <ul className="mobile-menu-sublist">
              <li>
                <Link
                  href="/case-studies"
                  className="mobile-menu-link mobile-menu-link-featured"
                  onClick={onClose}
                >
                  All Case Studies
                </Link>
              </li>
              {caseStudyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="mobile-menu-link"
                    onClick={onClose}
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
            onClick={onClose}
          >
            About
          </Link>
        </li>

        <li>
          <button
            onClick={() => {
              onCollaborate();
              onClose();
            }}
            className="btn btn-accent btn-sm"
            style={{ marginTop: 'var(--space-4)', width: '100%' }}
            type="button"
          >
            Hire
            <ArrowRightIcon className="icon-fwd" width={12} height={12} />
          </button>
        </li>
      </ul>
    </div>
  );
}
