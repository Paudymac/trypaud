import { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import Head from 'next/head';
import Layout, { siteTitle } from '@/components/Layout';
import Lightbox from '@/components/Lightbox';
import fs from 'fs';
import path from 'path';

const ITEMS_PER_PAGE = 18;

const CATEGORIES = [
  { key: 'all', label: 'All' },
  { key: 'ui', label: 'UI / Web' },
  { key: 'logos', label: 'Logos' },
  { key: 'branding', label: 'Branding' },
  { key: 'illustration', label: 'Illustration' },
  { key: 'icons', label: 'Icons' },
];

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'data', 'gallery-items.json');
  const allItems = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  return { props: { allItems } };
}

export default function Gallery({ allItems }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);
  const [lightbox, setLightbox] = useState({
    isOpen: false,
    images: [],
    index: 0,
    title: '',
  });

  const sentinelRef = useRef(null);

  // Counts per category for the porthole dials
  const categoryCounts = useMemo(() => {
    const base = { all: allItems.length };
    for (const item of allItems) {
      base[item.category] = (base[item.category] || 0) + 1;
    }
    return base;
  }, [allItems]);

  const filteredItems =
    activeCategory === 'all'
      ? allItems
      : allItems.filter((item) => item.category === activeCategory);

  const visibleItems = filteredItems.slice(0, visibleCount);
  const hasMore = visibleCount < filteredItems.length;

  useEffect(() => {
    setVisibleCount(ITEMS_PER_PAGE);
  }, [activeCategory]);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel || !hasMore) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisibleCount((prev) => prev + ITEMS_PER_PAGE);
        }
      },
      { rootMargin: '400px' }
    );
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [hasMore, activeCategory]);

  const openLightbox = useCallback((item) => {
    setLightbox({
      isOpen: true,
      images: item.images,
      index: 0,
      title: item.title,
    });
  }, []);

  const closeLightbox = useCallback(() => {
    setLightbox((prev) => ({ ...prev, isOpen: false }));
  }, []);

  const prevImage = useCallback(() => {
    setLightbox((prev) => ({
      ...prev,
      index: prev.index > 0 ? prev.index - 1 : prev.images.length - 1,
    }));
  }, []);

  const nextImage = useCallback(() => {
    setLightbox((prev) => ({
      ...prev,
      index: prev.index < prev.images.length - 1 ? prev.index + 1 : 0,
    }));
  }, []);

  return (
    <Layout>
      <Head>
        <title>{`Gallery - ${siteTitle}`}</title>
        <meta
          name="description"
          content="Browse the complete portfolio — UI design, logos, branding, icons, animation, and illustration."
        />
      </Head>

      {/* Index head — on the sheet, with the data column right */}
      <header className="work-index-head">
        <div className="band-label">
          <span className="margin-label">W / Index</span>
        </div>
        <div className="work-index-main">
          <span className="eyebrow">Gallery</span>
          <h1 className="work-index-title">All work</h1>
          <p className="work-index-desc">
            A running index of projects across UI, branding, illustration and
            iconography — 2009 through today.
          </p>
        </div>
        <div className="work-index-stats">
          <div className="about-stat">
            <span className="about-stat-number">{allItems.length}</span>
            <span className="about-stat-unit">Pieces</span>
          </div>
          <div className="about-stat-rule" aria-hidden="true" />
          <div className="about-stat-meta">
            2009 — TODAY
            <br />
            SIX GALLERIES
          </div>
        </div>
      </header>

      <div className="gallery-page">
        {/* Porthole dials — one per category, count inside the glass */}
        <div
          className="gallery-filters"
          role="toolbar"
          aria-label="Filter by category"
        >
          {CATEGORIES.map((cat) => {
            const count = categoryCounts[cat.key] ?? 0;
            if (count === 0 && cat.key !== 'all') return null;
            return (
              <button
                key={cat.key}
                className="porthole-filter"
                onClick={() => setActiveCategory(cat.key)}
                aria-pressed={activeCategory === cat.key}
                type="button"
              >
                <span className="porthole-filter-dial" aria-hidden="true">
                  {count}
                </span>
                <span className="porthole-filter-label">{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Plates */}
        <ul className="gallery-grid" role="list">
          {visibleItems.map((item) => (
            <li key={item.id}>
              <button
                className="gallery-item"
                onClick={() => openLightbox(item)}
                aria-label={`Open ${item.title} — ${item.images.length} image${item.images.length !== 1 ? 's' : ''}`}
                type="button"
              >
                <span className="gallery-item-media notch">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.thumbnail}
                    alt=""
                    className="gallery-item-image"
                    loading="lazy"
                    width="560"
                    height="420"
                  />
                </span>
                <span className="gallery-item-caption">
                  <span className="gallery-item-title">{item.title}</span>
                  <span className="gallery-item-data">
                    {item.images.length > 1 && (
                      <span className="gallery-item-count">
                        ×{item.images.length}
                      </span>
                    )}
                    {item.year}
                  </span>
                </span>
              </button>
            </li>
          ))}
        </ul>

        {hasMore && (
          <>
            <div
              ref={sentinelRef}
              className="gallery-sentinel"
              aria-hidden="true"
            />
            <div className="gallery-loading" aria-label="Loading more items">
              <svg
                className="gallery-loading-orbit"
                viewBox="0 0 100 100"
                aria-hidden="true"
              >
                <g fill="none" stroke="currentColor" strokeWidth="3">
                  <circle cx="50" cy="33" r="22" />
                  <circle cx="64.72" cy="58.5" r="22" />
                  <circle cx="35.28" cy="58.5" r="22" />
                </g>
              </svg>
              <span className="gallery-loading-text">Loading</span>
            </div>
          </>
        )}

        {filteredItems.length === 0 && (
          <p
            className="text-secondary text-center"
            style={{ padding: 'var(--space-16) 0' }}
          >
            No items in this category yet.
          </p>
        )}
      </div>

      <Lightbox
        images={lightbox.images}
        currentIndex={lightbox.index}
        isOpen={lightbox.isOpen}
        onClose={closeLightbox}
        onPrev={prevImage}
        onNext={nextImage}
        title={lightbox.title}
      />
    </Layout>
  );
}
