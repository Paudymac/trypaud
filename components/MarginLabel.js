'use client';

import { useEffect, useRef, useState } from 'react';
import { useIntersectionObserver } from './useIntersectionObserver';

/**
 * MarginLabel — the vertical band label with a tape-counter reveal.
 * When the band first scrolls into view each digit rolls down onto its
 * value, the ones wheel spinning past the tens, like a counter settling.
 * Letter codes (CS, W) render static; so does prefers-reduced-motion.
 */
const TICK_MS = 55;

export default function MarginLabel({ code, text }) {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [display, setDisplay] = useState(code);
  const started = useRef(false);

  useEffect(() => {
    if (!isVisible || started.current) return;
    started.current = true;

    if (!/^\d+$/.test(code)) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const target = [...code].map(Number);
    const spins = target.map((_, i) => 6 + i * 5);
    let frame = 0;

    const roll = () =>
      target
        .map((d, i) => {
          const remaining = spins[i] - frame;
          return remaining > 0 ? (d + remaining) % 10 : d;
        })
        .join('');

    setDisplay(roll());
    const id = setInterval(() => {
      frame += 1;
      setDisplay(roll());
      if (frame >= Math.max(...spins)) clearInterval(id);
    }, TICK_MS);
    return () => clearInterval(id);
  }, [isVisible, code]);

  return (
    <span ref={ref} className="margin-label">
      {display} / {text}
    </span>
  );
}
