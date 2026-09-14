import { useState, useCallback } from 'react';
import Image from 'next/image';
import Lightbox from './Lightbox';
import { ArrowUpRightIcon } from './NavIcons';

/**
 * PortfolioItem — a single project within a gallery page.
 * Two modes:
 *   - images prop (preferred): renders a thumbnail grid that opens the shared
 *     fullscreen Lightbox on click.
 *   - children (legacy): renders whatever is passed in — used for videos,
 *     custom grids, or BackgroundImage compositions.
 */
/* Thumbnails sit in an auto-fill grid of 18rem columns (12rem under
   600px) — never wider than about a fifth of a desktop viewport, so the
   optimizer serves ~600px files instead of the full-size originals. The
   originals still open in the lightbox. */
const THUMB_SIZES = '(max-width: 600px) 50vw, (max-width: 1200px) 33vw, 20vw';

export default function PortfolioItem({
  date,
  title,
  launchUrl,
  description,
  images,
  children,
}) {
  const [lightbox, setLightbox] = useState({ isOpen: false, index: 0 });
  const hasImages = Array.isArray(images) && images.length > 0;

  const openAt = useCallback(
    (i) => setLightbox({ isOpen: true, index: i }),
    []
  );
  const close = useCallback(
    () => setLightbox((p) => ({ ...p, isOpen: false })),
    []
  );
  const prev = useCallback(
    () =>
      setLightbox((p) => ({
        ...p,
        index: p.index > 0 ? p.index - 1 : images.length - 1,
      })),
    [images]
  );
  const next = useCallback(
    () =>
      setLightbox((p) => ({
        ...p,
        index: p.index < images.length - 1 ? p.index + 1 : 0,
      })),
    [images]
  );

  return (
    <section className="portfolio-project" aria-label={title}>
      <header className="portfolio-project-header">
        <div className="portfolio-project-meta">
          {date && <span className="portfolio-project-year">{date}</span>}
          {hasImages && images.length > 1 && (
            <span className="portfolio-project-plates">×{images.length}</span>
          )}
          {launchUrl && (
            <a
              href={launchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="portfolio-project-launch"
            >
              Launch
              <ArrowUpRightIcon width={14} height={14} />
            </a>
          )}
        </div>
        <h3 className="portfolio-project-title">{title}</h3>
        {description && <p className="portfolio-project-desc">{description}</p>}
      </header>

      {hasImages ? (
        <ul className="portfolio-project-grid" role="list">
          {images.map((img, i) => (
            <li key={i}>
              <button
                className="portfolio-thumb"
                onClick={() => openAt(i)}
                type="button"
                aria-label={`Open image ${i + 1} of ${title}`}
              >
                <span className="portfolio-thumb-media notch">
                  {/* The button's aria-label is the accessible name; the
                      alt is for image search */}
                  <Image
                    src={img}
                    alt={`${title} (${i + 1} of ${images.length})`}
                    width={640}
                    height={400}
                    sizes={THUMB_SIZES}
                    unoptimized={img.endsWith('.svg')}
                  />
                </span>
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <div className="portfolio-project-body">{children}</div>
      )}

      {hasImages && (
        <Lightbox
          images={images}
          currentIndex={lightbox.index}
          isOpen={lightbox.isOpen}
          onClose={close}
          onPrev={prev}
          onNext={next}
          title={title}
        />
      )}
    </section>
  );
}
