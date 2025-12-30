/**
 * Reusable section header component
 * Provides consistent styling for all section titles across the site
 */

import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { fadeInUp } from '../../utils/animations';

interface SectionHeaderProps {
  title: string;
  description?: string;
  dividerColor?: 'coral' | 'teal';
  className?: string;
  threshold?: number;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  description,
  dividerColor = 'coral',
  className = '',
  threshold = 0.1
}) => {
  const [ref, inView] = useScrollAnimation({ threshold });

  const dividerClasses = dividerColor === 'coral'
    ? 'bg-coral-500 dark:bg-coral-400'
    : 'bg-coral-500 dark:bg-teal-400';

  return (
    <motion.div
      ref={ref}
      initial={fadeInUp.initial}
      animate={inView ? fadeInUp.animate : fadeInUp.initial}
      transition={fadeInUp.transition}
      className={`text-center mb-16 ${className}`}
    >
      <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 font-heading tracking-tight">
        {title}
      </h2>
      <div className={`w-28 h-1 ${dividerClasses} mx-auto rounded-full mb-10`} />
      {description && (
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto font-body">
          {description}
        </p>
      )}
    </motion.div>
  );
};
