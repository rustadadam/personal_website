import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-coral-500 dark:bg-teal-400 mx-auto rounded-full"></div>
        </motion.div>
        
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-1/2 flex justify-center"
          >
            <div className="relative">
              <div
                className="w-96 h-96 sm:w-[28rem] sm:h-[28rem] rounded-full overflow-hidden mx-auto"
                style={{
                  transform: 'translateY(-20px)',
                  boxShadow: '10px 10px 40px 10px rgba(20, 184, 166, 0.35)'
                }}
              >
                <img
                  src="/assets/profile.jpg"
                  alt="Adam Rustad"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:w-1/2 mt-12 lg:mt-0"
          >
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Emerging Software Engineer | Published ML Researcher
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Welcome! I'm a computer science researcher and developer with a deep passion for building intelligent,
              human-centered software. With multiple peer-reviewed publications in machine learning and manifold alignment,
              I combine academic insight with practical coding skills to deliver innovative solutions.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
              I'm particularly driven by projects that challenge me to bridge the gap between theory and real-world 
              application—whether that's creating scalable tools, designing thoughtful interfaces, or training models
              that learn from complex data. Outside of tech, I recharge by hiking, playing chess, experimenting 
              with emerging technologies, and spending time with those I love.
            </p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap gap-3"
            >
              {[
                '🎓 Computer Science',
                '💻 Software Development',
                '🧠 Machine Learning',
                '📈 Data Science',
                '🛠️ Systems Thinking',
                '🥾 Outdoor Explorer'
              ].map((tag, index) => (
                <motion.div
                  key={tag}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 bg-teal-50 dark:bg-teal-900/30 rounded-full text-teal-700 dark:text-teal-300"
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