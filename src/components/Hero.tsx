import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center relative bg-gradient-to-br from-white via-white to-teal-200 dark:from-gray-900 dark:via-gray-800 dark:to-teal-900 pt-20 font-[Poppins,Inter,sans-serif]"
    >
      <div className="container mx-auto px-4 sm:px-8 lg:px-16 flex flex-col items-center text-center">
        <h1 className="mb-7 tracking-tight font-[Poppins,sans-serif]">
          <span className="block text-2xl sm:text-3xl md:text-4xl font-bold text-black dark:text-white">Hi, I'm</span>
          <span className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-coral-500 dark:text-coral-400 block" style={{ fontWeight: 900 }}>
            Adam Rustad
          </span>
        </h1>
        <div className="w-28 h-1 bg-teal-300 dark:bg-teal-400 mb-10 rounded-full"></div>
        <h2 className="text-base sm:text-lg md:text-xl text-black dark:text-white mb-10 max-w-2xl font-[Inter,sans-serif] font-medium">
          Computer Science Student & Developer passionate about building innovative solutions
        </h2>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
          <a
            href="#projects"
            className="px-10 py-3 bg-coral-500 text-white rounded-full font-semibold text-lg shadow-lg hover:bg-coral-600 hover:shadow-xl transition duration-300 focus:outline-none focus:ring-2 focus:ring-coral-400/60 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-900 transform hover:-translate-y-1"
            style={{ fontFamily: 'Poppins, Inter, sans-serif' }}
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-10 py-3 border-2 border-teal-500 text-teal-700 dark:text-teal-300 dark:border-teal-300 rounded-full font-semibold text-lg hover:bg-teal-50 dark:hover:bg-teal-900/30 transition duration-300 focus:outline-none focus:ring-2 focus:ring-teal-400/60 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-900"
            style={{ fontFamily: 'Poppins, Inter, sans-serif' }}
          >
            Contact Me
          </a>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" aria-label="Scroll to About section">
            <ArrowDown className="text-coral-500 dark:text-coral-400" size={36} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;