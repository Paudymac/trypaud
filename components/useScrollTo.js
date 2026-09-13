import { useCallback } from 'react';

// Custom hook for scrolling to targets.
// Uses window.scrollTo (not scrollIntoView) so the sticky header offset
// can be respected and the scroll target is the document, not the element.
const useScrollTo = ({ targetId }) => {
  const scrollToTarget = useCallback(() => {
    const targetElement = document.getElementById(targetId);
    if (!targetElement) return;
    const headerOffset = 62;
    const top =
      targetElement.getBoundingClientRect().top + window.scrollY - headerOffset;
    window.scrollTo({ top, behavior: 'smooth' });
  }, [targetId]);

  return { scrollToTarget };
};

export default useScrollTo;
