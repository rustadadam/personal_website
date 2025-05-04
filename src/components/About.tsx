import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto rounded-full"></div>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-8 border-gray-200 dark:border-gray-700 mx-auto">
                <img
                  src="/assets/profile.jpg"
                  alt="Adam Rustad"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-600 dark:bg-blue-400 rounded-full -z-10"></div>
            </div>
          </div>
          
          <div className="lg:w-1/2 mt-12 lg:mt-0">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Emerging Software Engineer | Published ML Researcher
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
            Welcome! I'm a computer science researcher and developer with a deep passion for building intelligent,
            human-centered software. With multiple peer-reviewed publications in machine learning and manifold alignment,
            I combine academic insight with practical coding skills to deliver innovative solutions.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
             I’m particularly driven by projects that challenge me to bridge the gap between theory and real-world 
             application—whether that's creating scalable tools, designing thoughtful interfaces, or training models
             that learn from complex data. Outside of tech, I recharge by hiking, playing chess, experimenting 
             with emerging technologies, and spending time with those I love.
            </p>

            <div className="flex flex-wrap gap-3">
              <div className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300">
                🎓 Computer Science
              </div>
              <div className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300">
                💻 Software Development
              </div>
              <div className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300">
                🧠 Machine Learning
              </div>
              <div className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300">
                📈 Data Science
              </div>
              <div className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300">
                🛠️ Systems Thinking
              </div>
              <div className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300">
                🥾 Outdoor Explorer
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;