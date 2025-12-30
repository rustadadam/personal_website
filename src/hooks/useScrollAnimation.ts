/**
 * Custom hook for scroll-triggered animations
 * Wraps react-intersection-observer with sensible defaults
 */

import { useInView } from 'react-intersection-observer';

interface UseScrollAnimationOptions {
  threshold?: number;
  triggerOnce?: boolean;
}

/**
 * Hook to trigger animations when element scrolls into view
 * @param options - Configuration options
 * @returns [ref, inView] tuple from useInView
 */
export const useScrollAnimation = (options: UseScrollAnimationOptions = {}) => {
  const { threshold = 0.1, triggerOnce = true } = options;

  return useInView({
    triggerOnce,
    threshold,
  });
};
