'use client';

import Link from 'next/link';
import { useIntersectionObserver } from './useIntersectionObserver';
import { galleryLinks, allWorkItem } from './NavData';
import { ArrowUpRightIcon } from './NavIcons';

const Galleries = () => {
  const [featuredRef, featuredVisible] = useIntersectionObserver({
    threshold: 0.1,
  });

  return (
    <section
      className="galleries-section bleed-wide"
      aria-label="Gallery categories"
    >
      <header className="home-section-header">
        <div className="home-section-header-text">
          <span className="home-section-eyebrow">Explore</span>
          <h2 className="home-section-title">Galleries</h2>
        </div>
        <Link href="/gallery" className="home-section-action">
          All work
          <ArrowUpRightIcon width={14} height={14} />
        </Link>
      </header>

      <div className="galleries-layout">
        <Link
          ref={featuredRef}
          href={allWorkItem.href}
          className={`galleries-featured animate-hidden ${featuredVisible ? 'animate-visible' : ''}`}
        >
          <span className="galleries-featured-icon" aria-hidden="true">
            <allWorkItem.Icon width={32} height={32} />
          </span>
          <div className="galleries-featured-text">
            <span className="galleries-featured-label">
              {allWorkItem.label}
            </span>
            <h3 className="galleries-featured-title">Browse everything</h3>
            <p className="galleries-featured-desc">
              Scroll through the full portfolio across every category.
            </p>
          </div>
          <ArrowUpRightIcon
            width={24}
            height={24}
            className="galleries-featured-arrow"
          />
        </Link>

        <ul className="galleries-tiles" role="list">
          {galleryLinks.map((link, i) => (
            <GalleryTile key={link.href} link={link} index={i} />
          ))}
        </ul>
      </div>
    </section>
  );
};

const GalleryTile = ({ link, index }) => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });
  const { Icon } = link;
  return (
    <li
      ref={ref}
      className={`animate-hidden ${isVisible ? `animate-visible delay-${index + 1}` : ''}`}
    >
      <Link href={link.href} className="galleries-tile">
        <span className="galleries-tile-icon" aria-hidden="true">
          <Icon width={22} height={22} />
        </span>
        <span className="galleries-tile-text">
          <strong>{link.label}</strong>
          <span>{link.desc}</span>
        </span>
      </Link>
    </li>
  );
};

export default Galleries;
