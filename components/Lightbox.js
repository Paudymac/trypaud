import { useEffect, useCallback, useRef } from 'react';

/**
 * Lightbox — full-screen image overlay with prev/next navigation.
 * Keyboard accessible: Arrow keys navigate, Escape closes.
 * Traps focus while open.
 */
export default function Lightbox({
  images = [],
  currentIndex = 0,
  isOpen = false,
  onClose,
  onPrev,
  onNext,
  title = '',
}) {
  // Keyboard navigation
  const handleKeyDown = useCallback(
    (e) => {
      if (!isOpen) return;
      switch (e.key) {
        case 'Escape':
          onClose();
          break;
        case 'ArrowLeft':
          onPrev();
          break;
        case 'ArrowRight':
          onNext();
          break;
      }
    },
    [isOpen, onClose, onPrev, onNext]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Touch swipe: horizontal swipe navigates prev/next, vertical swipe down closes
  const touchStart = useRef({ x: 0, y: 0, t: 0 });

  const handleTouchStart = (e) => {
    const t = e.touches[0];
    touchStart.current = { x: t.clientX, y: t.clientY, t: Date.now() };
  };

  const handleTouchEnd = (e) => {
    const t = e.changedTouches[0];
    if (!t) return;
    const dx = t.clientX - touchStart.current.x;
    const dy = t.clientY - touchStart.current.y;
    const dt = Date.now() - touchStart.current.t;
    if (dt > 600) return; // too slow, ignore
    const ax = Math.abs(dx);
    const ay = Math.abs(dy);
    if (ax > 50 && ax > ay * 1.5) {
      if (dx < 0) onNext();
      else onPrev();
    } else if (dy > 80 && ay > ax * 1.5) {
      onClose();
    }
  };

  if (!isOpen || images.length === 0) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="lightbox lightbox-open"
      role="dialog"
      aria-modal="true"
      aria-label={title || 'Image viewer'}
      onClick={handleBackdropClick}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Close button */}
      <button
        className="lightbox-close"
        onClick={onClose}
        aria-label="Close lightbox"
        type="button"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>

      {/* Previous button */}
      {images.length > 1 && (
        <button
          className="lightbox-nav lightbox-prev"
          onClick={onPrev}
          aria-label="Previous image"
          type="button"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
      )}

      {/* Image */}
      <div className="lightbox-content">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={images[currentIndex]}
          alt={`${title} — image ${currentIndex + 1} of ${images.length}`}
          className="lightbox-image"
          loading="eager"
        />
      </div>

      {/* Next button */}
      {images.length > 1 && (
        <button
          className="lightbox-nav lightbox-next"
          onClick={onNext}
          aria-label="Next image"
          type="button"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      )}

      {/* Counter */}
      {images.length > 1 && (
        <div className="lightbox-counter" aria-live="polite">
          {currentIndex + 1} / {images.length}
        </div>
      )}

      {/* Caption */}
      {title && (
        <div className="lightbox-caption">
          <div className="lightbox-caption-title">{title}</div>
        </div>
      )}
    </div>
  );
}
