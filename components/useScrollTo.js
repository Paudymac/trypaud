import { useCallback } from 'react';

// Custom hook for scrolling to targets
const useScrollTo = ({ targetId }) => {
  const scrollToTarget = useCallback(() => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  }, [targetId]);

  return { scrollToTarget };
};

export default useScrollTo;
