import React from 'react';
import { Mail, MapPin, Linkedin, Github } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto rounded-full mb-8"></div>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Let's connect and see how we can drive learning and innovation together.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto bg-blue-50 dark:bg-gray-800 p-8 rounded-lg shadow-xl">
          <div className="space-y-8">
            <div className="flex items-start">
              <a
                href="mailto:rustadadam@gmail.com"
                className="flex-shrink-0 bg-blue-100 dark:bg-blue-900/50 p-3 rounded-full hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors"
              >
                <Mail className="text-blue-600 dark:text-blue-400" size={24} />
              </a>
              <div className="ml-4">
                <h4 className="text-lg font-medium text-gray-900 dark:text-white">Email</h4>
                <a
                  href="mailto:rustadadam@gmail.com"
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  rustadadam@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 bg-blue-100 dark:bg-blue-900/50 p-3 rounded-full">
                <MapPin className="text-blue-600 dark:text-blue-400" size={24} />
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-medium text-gray-900 dark:text-white">Location</h4>
                <p className="text-gray-700 dark:text-gray-300">Vineyard, UT</p>
              </div>
            </div>

            <div className="flex items-start">
              <a
                href="https://www.linkedin.com/in/adam-rustad-a43a65299"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 bg-blue-100 dark:bg-blue-900/50 p-3 rounded-full hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors"
              >
                <Linkedin className="text-blue-600 dark:text-blue-400" size={24} />
              </a>
              <div className="ml-4">
                <h4 className="text-lg font-medium text-gray-900 dark:text-white">LinkedIn</h4>
                <a
                  href="https://www.linkedin.com/in/adam-rustad-a43a65299"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Connect with me on LinkedIn
                </a>
              </div>
            </div>

            <div className="flex items-start">
              <a
                href="https://github.com/rustadadam"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 bg-blue-100 dark:bg-blue-900/50 p-3 rounded-full hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors"
              >
                <Github className="text-blue-600 dark:text-blue-400" size={24} />
              </a>
              <div className="ml-4">
                <h4 className="text-lg font-medium text-gray-900 dark:text-white">GitHub</h4>
                <a
                  href="https://github.com/rustadadam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  View my public projects on GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;