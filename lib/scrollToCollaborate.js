import { useRouter } from 'next/router';
import useScrollTo from '@/components/useScrollTo';

/**
 * Custom hook that handles navigation and scrolling to the collaborate section
 * Provides a unified handler for the "Collaborate" button across the site
 */
export function useScrollToCollaborate() {
  const router = useRouter();
  const { scrollToTarget } = useScrollTo({ targetId: 'collaborate' });

  const handleCollaborateClick = () => {
    if (router.pathname !== '/') {
      // Navigate to the homepage first
      router.push('/').then(() => {
        // After navigation, scroll to the collaborate section
        scrollToTarget();
      });
    } else {
      // If already on the homepage, just scroll to the collaborate section
      scrollToTarget();
    }
  };

  return { handleCollaborateClick };
}
