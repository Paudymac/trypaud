import TrefoilLogo from './TrefoilLogo';

/**
 * Hero — Static image hero section replacing the video.
 * Uses a NASA Artemis II mission image (public domain).
 * Falls back to a gradient background if no image is provided.
 */
export default function Hero({ scrollToTarget }) {
  return (
    <section className="hero" aria-label="Hero banner">
      {/* NASA Artemis II Earthset — public domain (nasa.gov) */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/hero/artemis-ii-hero.jpg"
        alt="NASA Artemis II mission — Earth setting over the lunar far side"
        className="hero-image"
        loading="eager"
        fetchPriority="high"
        width="1920"
        height="1280"
      />

      {/* Gradient overlay for text legibility */}
      <div className="hero-overlay" aria-hidden="true" />

      {/* Decorative trefoil in corner */}
      <div className="hero-logo" aria-hidden="true">
        <TrefoilLogo size={192} />
      </div>

      {/* Hero content */}
      <div className="hero-content">
        <span className="hero-badge">Design Portfolio</span>
        <h1 className="hero-title">
          Crafting digital experiences for over 17 years
        </h1>
        <p className="hero-subtitle">
          UI design, branding, illustration, and visual storytelling — from
          concept to launch.
        </p>
        <button
          onClick={scrollToTarget}
          className="btn btn-accent btn-lg"
          type="button"
        >
          Let&apos;s Collaborate &nearr;
        </button>
      </div>
    </section>
  );
}
