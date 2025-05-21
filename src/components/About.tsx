import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-24 bg-white dark:bg-gray-900 font-[Inter,sans-serif]">
      <div className="container mx-auto px-4 sm:px-8 lg:px-16">
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 font-[Poppins,sans-serif] tracking-tight">
            About Me
          </h2>
          <div className="w-28 h-1 bg-coral-500 dark:bg-teal-400 mx-auto rounded-full"></div>
        </motion.div>
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.18, ease: 'easeOut' }}
            className="lg:w-1/2 flex justify-center items-center"
          >
            <div className="relative w-full max-w-[28rem] aspect-square flex items-center justify-center">
              <div className="absolute inset-0 z-0 rounded-full shadow-[0_16px_96px_0_rgba(80,200,180,0.32),0_4px_32px_0_rgba(255,180,120,0.18)] pointer-events-none"></div>
              <div
                className="relative w-full h-full rounded-full overflow-hidden shadow-2xl border-8 border-white dark:border-gray-900 z-20"
                style={{
                  boxShadow: '0 8px 48px 0 rgba(20, 184, 166, 0.22), 0 1.5px 8px 0 rgba(255,127,80,0.10)'
                }}
              >
                <img
                  src="/assets/profile.jpg"
                  alt="Adam Rustad"
                  className="w-full h-full object-cover grayscale-0 hover:grayscale transition duration-500"
                  draggable="false"
                />
                <div className="absolute inset-0 rounded-full ring-4 ring-coral-200 dark:ring-teal-800 pointer-events-none animate-pulse-slow"></div>
              </div>
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white dark:bg-gray-900 px-6 py-2 rounded-full shadow-lg border border-teal-100 dark:border-teal-900/40 text-teal-700 dark:text-teal-300 font-semibold text-lg font-[Poppins,sans-serif] z-20">
                Adam Rustad
              </div>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.32, ease: 'easeOut' }}
            className="lg:w-1/2 mt-12 lg:mt-0"
          >
            <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 dark:text-white mb-6 font-[Poppins,sans-serif]">
              Emerging Software Engineer <span className="text-coral-500 dark:text-teal-400">|</span> Published ML Researcher
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed text-lg">
              Welcome! I'm a computer science researcher and developer with a deep passion for building intelligent,
              human-centered software. With multiple peer-reviewed publications in machine learning and manifold alignment,
              I combine academic insight with practical coding skills to deliver innovative solutions.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-10 leading-relaxed text-lg">
              I'm particularly driven by projects that challenge me to bridge the gap between theory and real-world 
              application—whether that's creating scalable tools, designing thoughtful interfaces, or training models
              that learn from complex data. Outside of tech, I recharge by hiking, playing chess, experimenting 
              with emerging technologies, and spending time with those I love.
            </p>
            <motion.div 
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
              className="flex flex-wrap gap-3"
            >
              {[
                '🎓 Computer Science',
                '💻 Software Development',
                '🧠 Machine Learning',
                '📈 Data Science',
                '🛠️ Systems Thinking',
                '🥾 Outdoor Explorer'
              ].map((tag) => (
                <motion.div
                  key={tag}
                  whileHover={{ scale: 1.08, backgroundColor: '#fca5a5', color: '#fff' }}
                  whileTap={{ scale: 0.96 }}
                  className="px-4 py-2 bg-teal-50 dark:bg-teal-900/30 rounded-full text-teal-700 dark:text-teal-300 font-semibold shadow-sm transition-colors duration-300 cursor-pointer border border-teal-100 dark:border-teal-900/40"
                >
                  {tag}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;