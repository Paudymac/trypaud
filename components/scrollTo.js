import { useCallback } from 'react';

// scroll to function for page
const scrollTo = ({ targetId }) => {
  const scrollToTarget = useCallback(() => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  }, [targetId]);

  return { scrollToTarget }; 
};

export default scrollTo;