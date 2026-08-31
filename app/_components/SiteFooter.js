'use client';

import Link from 'next/link';
import TrefoilKnot from '@/components/TrefoilKnot';
import { LinkedInIcon, MailIcon, FileTextIcon } from '@/components/NavIcons';

/**
 * SiteFooter — the footer strip: mark (cut = surface-1), three blue mono
 * links, copyright right-aligned above a 2px rule.
 */
export default function SiteFooter() {
  return (
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
          <span className="footer-tagline">
            Three loops, one line.
            <br />
            Try Paud.
          </span>
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
            href="/PadraicMcAteer_CV_2025.pdf"
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
  );
}
