import { useEffect } from 'react';

/**
 * useScrollEdges — marks a horizontal scroller with which of its edges
 * hide more content, so CSS can fade that edge as a "there's more" cue.
 * Writes data-scroll="start-hidden end-hidden" (either, both, or empty)
 * on the element; the gallery dial rows read it in gallery.css.
 */
export default function useScrollEdges(ref) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    const update = () => {
      const max = el.scrollWidth - el.clientWidth;
      const flags = [];
      if (max > 1) {
        if (el.scrollLeft > 1) flags.push('start-hidden');
        if (el.scrollLeft < max - 1) flags.push('end-hidden');
      }
      const next = flags.join(' ');
      if (el.dataset.scroll !== next) el.dataset.scroll = next;
    };

    update();
    el.addEventListener('scroll', update, { passive: true });
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => {
      el.removeEventListener('scroll', update);
      ro.disconnect();
    };
  }, [ref]);
}
