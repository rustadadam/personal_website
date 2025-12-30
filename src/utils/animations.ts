/**
 * Shared animation configurations for Framer Motion
 * Centralizes animation patterns to maintain consistency and reduce duplication
 */

import { Variants } from 'framer-motion';

// Basic fade in from below
export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' }
};

// Deeper fade in from below (more dramatic)
export const fadeInUpDeep = {
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, ease: 'easeOut' }
};

// Fade in from left
export const fadeInLeft = {
  initial: { opacity: 0, x: -60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.9, delay: 0.18, ease: 'easeOut' }
};

// Fade in from right
export const fadeInRight = {
  initial: { opacity: 0, x: 60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.9, delay: 0.32, ease: 'easeOut' }
};

// Simple fade in (no movement)
export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 1.2, ease: 'easeOut' }
};

// Scale up with fade in
export const scaleIn = {
  initial: { opacity: 0, scale: 0.97, y: 10 },
  animate: { opacity: 1, scale: 1, y: 0 },
  transition: { duration: 0.9, delay: 0.08, ease: 'easeOut' }
};

// Staggered list item animation
export const staggerItem = (index: number, baseDelay: number = 0) => ({
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 1.0, ease: 'easeOut', delay: baseDelay + index * 0.23 }
});

// Timeline item animation (alternating left/right)
export const timelineItem = (index: number, fromLeft: boolean = true) => ({
  initial: { opacity: 0, x: fromLeft ? -50 : 50 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.5, delay: index * 0.1 }
});

// Hover scale effect
export const hoverScale = {
  scale: 1.03,
  boxShadow: '0 8px 26px 0 rgba(9, 189, 255, 0.91)'
};

// Small hover scale
export const hoverScaleSmall = {
  scale: 1.045,
  boxShadow: '0 8px 26px 0 rgba(9, 189, 255, 0.91)'
};

// Card hover (for project cards)
export const cardHover = {
  scale: 1.08
};

// Button hover
export const buttonHover = {
  scale: 1.05
};

// Button tap
export const buttonTap = {
  scale: 0.95
};

/**
 * Helper function to create animation props for sections
 * @param inView - Boolean from useInView hook
 * @param variant - Animation variant to use
 * @returns Animation props for motion component
 */
export const getAnimationProps = (
  inView: boolean,
  variant: typeof fadeInUp = fadeInUp
) => ({
  initial: variant.initial,
  animate: inView ? variant.animate : variant.initial,
  transition: variant.transition
});
