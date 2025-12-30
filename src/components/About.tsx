import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from './ui/SectionHeader';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { fadeInLeft, fadeInRight } from '../utils/animations';

const About: React.FC = () => {
  const [ref, inView] = useScrollAnimation();

  return (
    <section id="about" className="py-24 bg-white dark:bg-gray-900 font-body">
      <div className="container mx-auto px-4 sm:px-8 lg:px-16">
        <SectionHeader title="About Me" dividerColor="teal" />
        <div ref={ref} className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div
            initial={fadeInLeft.initial}
            animate={inView ? fadeInLeft.animate : fadeInLeft.initial}
            transition={fadeInLeft.transition}
            className="lg:w-1/2 flex justify-center items-center"
          >
            <div className="relative w-full max-w-[28rem] aspect-square flex items-center justify-center">
              <div className="absolute inset-0 z-0 rounded-full shadow-[0_16px_96px_0_rgba(80,200,180,0.32),0_4px_32px_0_rgba(255,180,120,0.18)] pointer-events-none"></div>
              <div
                className="relative w-full h-full rounded-full overflow-hidden shadow-profile border-8 border-white dark:border-gray-900 z-20"
              >
                <img
                  src="/assets/profile.jpg"
                  alt="Adam Rustad"
                  className="w-full h-full object-cover grayscale-0 hover:grayscale transition duration-500"
                  draggable="false"
                />
                <div className="absolute inset-0 rounded-full ring-4 ring-coral-200 dark:ring-teal-800 pointer-events-none animate-pulse-slow"></div>
              </div>
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white dark:bg-gray-900 px-6 py-2 rounded-full shadow-lg border border-teal-100 dark:border-teal-900/40 text-teal-700 dark:text-teal-300 font-semibold text-lg font-heading z-20">
                Adam Rustad
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={fadeInRight.initial}
            animate={inView ? fadeInRight.animate : fadeInRight.initial}
            transition={fadeInRight.transition}
            className="lg:w-1/2 mt-12 lg:mt-0"
          >
            <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 dark:text-white mb-6 font-heading">
              AI and Software Engineer <span className="text-coral-500 dark:text-teal-400">|</span> Published ML Researcher <span className="text-coral-500 dark:text-teal-400">|</span> Co-Founder
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed text-lg">
              Welcome! I'm a computer science researcher and developer with a deep passion for building intelligent,
              human-centered software. With several peer-reviewed publications in machine learning and experience founding multiple software startups including LumiTube (an AI-powered video platform for kids),
              I blend academic expertise with hands-on development skills to deliver impactful, innovative solutions.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-10 leading-relaxed text-lg">
              I'm particularly driven by projects that challenge me to bridge the gap between theory and real-world 
              application—whether that's creating scalable tools, designing thoughtful interfaces, or designing novel AI systems.
              Outside of tech, I recharge by hiking, playing chess, experimenting 
              with emerging technologies, and spending time with those I love.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;