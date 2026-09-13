'use client';

import { useEffect, useState, useCallback } from 'react';
import { ArrowUpIcon } from './NavIcons';

const THRESHOLD = 400;

export default function BackToTop() {
  const [visible, setVisible] = useState(false);
  const [lift, setLift] = useState(0);

  useEffect(() => {
    let raf = 0;
    const measure = () => {
      raf = 0;
      setVisible(window.scrollY > THRESHOLD);
      // Dock above the footer: lift the button by however far the footer
      // has entered the viewport, so it never overlaps the strip.
      const footer = document.querySelector('.site-footer-wrapper');
      if (footer) {
        const overlap = window.innerHeight - footer.getBoundingClientRect().top;
        setLift(overlap > 0 ? Math.round(overlap) : 0);
      }
    };
    const onScroll = () => {
      if (!raf) raf = window.requestAnimationFrame(measure);
    };
    measure();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) window.cancelAnimationFrame(raf);
    };
  }, []);

  const handleClick = useCallback(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
    });
  }, []);

  return (
    <button
      type="button"
      className="back-to-top"
      data-visible={visible}
      style={{ '--btt-lift': `${lift}px` }}
      aria-label="Back to top"
      title="Back to top"
      tabIndex={visible ? 0 : -1}
      onClick={handleClick}
    >
      <ArrowUpIcon width={18} height={18} />
    </button>
  );
}
