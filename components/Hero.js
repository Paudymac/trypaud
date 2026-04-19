'use client';

import Image from 'next/image';
import { useCallback } from 'react';
import { ArrowUpRightIcon } from './NavIcons';

export default function Hero() {
  const scrollToCollaborate = useCallback(() => {
    const el = document.getElementById('collaborate');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  return (
    <section className="hero bleed-full" aria-label="Hero banner">
      <Image
        src="/images/hero/artemis-ii-hero.jpg"
        alt="NASA Artemis II mission — Earth setting over the lunar far side"
        fill
        priority
        sizes="100vw"
        className="hero-image"
      />

      <div className="hero-overlay" aria-hidden="true" />

      <div className="hero-content">
        <div className="hero-content-inner">
          <span className="hero-badge">Design Portfolio</span>
          <h1 className="hero-title">
            Crafting digital experiences for over 17 years
          </h1>
          <p className="hero-subtitle">
            UI design, branding, illustration, and visual storytelling — from
            concept to launch.
          </p>
          <button
            onClick={scrollToCollaborate}
            className="btn btn-accent btn-lg"
            type="button"
          >
            Let&apos;s Collaborate
            <ArrowUpRightIcon width={16} height={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
