import { useState, useEffect, useRef, useCallback } from 'react';
import Head from 'next/head';
import Layout, { siteTitle } from '@/components/Layout';
import Lightbox from '@/components/Lightbox';
import fs from 'fs';
import path from 'path';

const ITEMS_PER_PAGE = 16;

const CATEGORIES = [
  { key: 'all', label: 'All' },
  { key: 'ui', label: 'UI / Web' },
  { key: 'logos', label: 'Logos' },
  { key: 'branding', label: 'Branding' },
  { key: 'icons', label: 'Icons' },
  { key: 'animation', label: 'Animation' },
  { key: 'illustration', label: 'Illustration' },
];

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'data', 'gallery-items.json');
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const allItems = JSON.parse(fileContent);

  return {
    props: { allItems },
  };
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

  // Filter items by category
  const filteredItems =
    activeCategory === 'all'
      ? allItems
      : allItems.filter((item) => item.category === activeCategory);

  // Items currently visible (infinite scroll slice)
  const visibleItems = filteredItems.slice(0, visibleCount);
  const hasMore = visibleCount < filteredItems.length;

  // Reset visible count when category changes
  useEffect(() => {
    setVisibleCount(ITEMS_PER_PAGE);
  }, [activeCategory]);

  // Infinite scroll via IntersectionObserver
  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel || !hasMore) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisibleCount((prev) => prev + ITEMS_PER_PAGE);
        }
      },
      { rootMargin: '200px' }
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [hasMore, activeCategory]);

  // Lightbox handlers
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
        <title>Gallery - {siteTitle}</title>
        <meta
          name="description"
          content="Browse the complete portfolio — UI design, logos, branding, icons, animation, and illustration."
        />
      </Head>

      <div className="container section">
        <h1>Gallery</h1>
        <p
          className="text-secondary"
          style={{ marginBottom: 'var(--space-6)' }}
        >
          {filteredItems.length} project{filteredItems.length !== 1 ? 's' : ''}
        </p>

        {/* Category filters */}
        <div
          className="gallery-filters"
          role="toolbar"
          aria-label="Filter by category"
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat.key}
              className={`gallery-filter-btn ${activeCategory === cat.key ? 'gallery-filter-btn-active' : ''}`}
              onClick={() => setActiveCategory(cat.key)}
              aria-pressed={activeCategory === cat.key}
              type="button"
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery grid */}
        <div className="gallery-grid" role="list">
          {visibleItems.map((item) => (
            <button
              key={item.id}
              className="gallery-item"
              onClick={() => openLightbox(item)}
              role="listitem"
              aria-label={`View ${item.title}`}
              type="button"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.thumbnail}
                alt={item.title}
                className="gallery-item-image"
                loading="lazy"
                width="560"
                height="420"
              />
              <div className="gallery-item-overlay">
                <div>
                  <div className="gallery-item-title">{item.title}</div>
                  <div className="gallery-item-category">
                    {item.category} &middot; {item.year}
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Infinite scroll sentinel */}
        {hasMore && (
          <>
            <div
              ref={sentinelRef}
              className="gallery-sentinel"
              aria-hidden="true"
            />
            <div className="gallery-loading" aria-label="Loading more items">
              <div className="gallery-loading-spinner" />
            </div>
          </>
        )}

        {/* Empty state */}
        {filteredItems.length === 0 && (
          <p
            className="text-secondary text-center"
            style={{ padding: 'var(--space-16) 0' }}
          >
            No items in this category yet.
          </p>
        )}
      </div>

      {/* Lightbox overlay */}
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
