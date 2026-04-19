'use client';

import Link from 'next/link';
import { useCallback } from 'react';
import { TrefoilMark } from '@/components/TrefoilLogo';
import { ArrowUpRightIcon } from '@/components/NavIcons';

export default function SiteFooter() {
  const handleCollaborateClick = useCallback(() => {
    const el = document.getElementById('collaborate');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  return (
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
            Let&apos;s Collaborate
            <ArrowUpRightIcon width={16} height={16} />
          </button>
        </div>
      </div>
      <p className="footer-copyright">
        &copy; {new Date().getFullYear()} TryPaud. All rights reserved.
      </p>
    </footer>
  );
}
