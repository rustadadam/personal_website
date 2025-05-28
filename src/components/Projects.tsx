import React, { useState } from 'react';
import { ExternalLink, Github, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveLink?: string;
  githubLink?: string;
  websiteLink?: string;
  category: 'Web' | 'Machine Learning' | 'Systems';
};

const projects: Project[] = [
  {
    id: 1,
    title: "SafeSocial – AI-Powered Chrome Extension",
    description: "A Chrome extension that uses real-time in-browser computer vision to filter explicit and adult content from social media feeds. Achieves high accuracy with minimal performance overhead, designed for seamless UX and privacy.",
    image: "/assets/banner.png",
    technologies: ["TensorFlow.js", "JavaScript", "Google API", "Mixpanel"],
    liveLink: "https://youtu.be/slG7xXj4rG4",
    githubLink: undefined,
    websiteLink: "https://chromewebstore.google.com/detail/safe-social/jdacdndepggbdjbknoncakkgbbhfoccm",
    category: 'Web'
  },
  {
    id: 2,
    title: "Leland Coaching Models",
    description: "Built machine learning models to recommend coach candidates based on profile embeddings and heuristics. Developed ensemble models and an LLM-assisted neural network achieving 89% F1 and 99% recall for Leland Coaching.",
    image: "/assets/ai-neural-network-brain.jpg",
    technologies: ["Python", "Pandas", "Scikit-learn", "TensorFlow", "HuggingFace"],
    liveLink: undefined,
    githubLink: undefined,
    websiteLink: "https://www.joinleland.com/", 
    category: "Machine Learning"
  },
  {
    id: 3,
    title: "Manifold Alignment Research – MASH & SPUD",
    description: "Invented and benchmarked novel manifold alignment algorithms (SPUD, MASH) for cross-domain structure discovery. Published multiple papers and developed robust experiment pipelines.",
    image: "/assets/roasted-potatoes-with-herbs.jpg",
    technologies: ["Python", "MATLAB", "Scikit-learn", "Jupyter", "Data Science"],
    liveLink: "https://youtu.be/NrNHT1rozHk",
    githubLink: "https://github.com/rustadadam/mashspud",
    websiteLink: "https://scholar.google.com/citations?user=ajI1Nl8AAAAJ&hl=en",
    category: "Machine Learning"
  },
  {
    id: 4,
    title: "Text to Audio Conversion Pipeline",
    description: "Developed an automated pipeline that converts text to audiobooks with a single click of a button. Implemented via AWS and Google Cloud services. Uses several machine learning models.",
    image: "/assets/SoundScribe.png",
    technologies: ["AWS", "Google Cloud", "Python", "Boto3", "NLP"],
    liveLink: undefined,
    githubLink: "https://github.com/rustadadam/SoundScribe",
    category: "Web"
  },
  {
    id: 5,
    title: "Client-to-Client Chess Platform",
    description: "A real-time multiplayer chess app built with Java and Websocket, enabling client-to-client gameplay with secure connection handling and move validation. Games persist in a SQL database, allowing users to resume play at anytime even if the network fails.",
    image: "/assets/ches.png",
    technologies: ["Java", "Websocket", "SQL"],
    liveLink: undefined,
    githubLink: "https://github.com/rustadadam/chess",
    category: "Systems"
  },
  {
    id: 6,
    title: "Twin Autoencoders for Embedding Extension",
    description: "Developed and published a method to extend aligned embeddings using twin autoencoders. Applied to graph alignment and data fusion tasks with robust quantitative evaluations.",
    image: "/assets/quantum-chip-technology.jpg",
    technologies: ["PyTorch", "Joblib", "Matplotlib", "Jupyter", "TensorFlow"],
    liveLink: undefined,
    githubLink: "https://github.com/JakeSRhodesLab/TwinAE-MA",
    websiteLink: "https://scholar.google.com/citations?user=ajI1Nl8AAAAJ&hl=en",
    category: "Machine Learning"
  }
];

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'Web' | 'Machine Learning' | 'Systems'>('all');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.7, // Show animation later (more of section in view)
  });
  
  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-4 font-[Poppins,sans-serif]">
            My Projects
          </h2>
          <div className="w-28 h-1 bg-coral-500 dark:bg-coral-400 mx-auto rounded-full mb-10"></div>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-10 font-[Inter,sans-serif]">
            Here are some of the projects I've worked on during my academic journey and personal exploration. Each project represents a unique challenge and learning experience.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {['all', 'Web', 'Machine Learning', 'Systems'].map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.07 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setActiveCategory(category as any)}
                className={`px-7 py-2 rounded-full text-base font-semibold shadow-sm transition duration-300 border-2 focus:outline-none focus:ring-2 focus:ring-coral-400/60 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-900
                  ${activeCategory === category
                    ? 'bg-coral-500 text-white border-coral-500 shadow-lg'
                    : 'bg-white dark:bg-gray-900 text-teal-700 dark:text-teal-300 border-teal-300 hover:bg-teal-50 dark:hover:bg-teal-900/40 hover:text-coral-500'}
                `}
                style={{ fontFamily: 'Poppins, Inter, sans-serif' }}
              >
                {category === 'all' ? 'All Projects' : category}
              </motion.button>
            ))}
          </div>
        </motion.div>
        <div className="flex overflow-x-auto pb-8 space-x-8 scrollbar-thin scrollbar-thumb-teal-200 dark:scrollbar-thumb-teal-900 scrollbar-track-transparent">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0, transition: { duration: 1.0, ease: 'easeOut', delay: index * 0.23 } } : {}}
              exit={{ opacity: 0, x: 0, transition: { duration: 2, ease: 'easeIn' } }}
              className="flex-none w-[430px] h-[600px] sm:w-[430px] sm:h-[600px] w-[94vw] h-auto max-w-[98vw] max-h-[90vh] bg-white dark:bg-gray-900 rounded-3xl overflow-hidden border-0 shadow-[0_10px_20px_0_rgba(9,189,255,0.13),0_1.5px_16px_0_rgba(0,0,0,0.06)] dark:shadow-[0_10px_24px_0_rgba(9,189,255,0.18),0_6px_26px_0_rgba(0,0,0,0.10)] transition duration-300 flex flex-col justify-between"
              style={{ fontFamily: 'Inter, Poppins, sans-serif' }}
              layout
            >
              <div className="h-64 sm:h-64 h-[48vw] min-h-[180px] max-h-[260px] overflow-hidden rounded-t-3xl flex items-center justify-center bg-gray-100 dark:bg-gray-800">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
                  style={{ maxHeight: '16rem', minHeight: '10rem' }}
                />
              </div>
              <div className="flex-1 flex flex-col justify-between p-4 sm:p-6 pb-4">
                <div>
                  <h3 className="text-lg sm:text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-2 font-[Poppins,sans-serif]">
                    {project.title}
                  </h3>
                  <p
                    className="text-xs sm:text-base text-gray-700 dark:text-gray-300 mb-3 sm:mb-4 font-[Inter,sans-serif] max-w-prose"
                    style={{
                      fontSize: '0.98rem',
                      lineHeight: 1.5,
                      minHeight: '2.5rem',
                      maxHeight: '6.5rem',
                      marginBottom: '0.75rem',
                      overflow: 'visible',
                      display: 'block',
                      whiteSpace: 'normal',
                    }}
                  >
                    {project.description}
                  </p>
                </div>
                <div className="flex flex-col justify-end min-h-[54px] mt-3 sm:mt-4">
                  <div className="flex flex-wrap gap-2 mb-2 sm:mb-3 mt-auto">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] sm:text-xs px-2 py-1 bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-3 pt-2 min-h-[32px]">
                    {project.liveLink ? (
                      <motion.a
                        whileHover={{ scale: 1.08 }}
                        whileTap={{ scale: 0.97 }}
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-sm font-semibold text-coral-500 hover:text-coral-600 dark:text-coral-400 dark:hover:text-coral-300 transition-colors"
                      >
                        <ExternalLink size={16} className="mr-1" /> Demo
                      </motion.a>
                    ) : (
                      <span className="flex items-center text-sm text-gray-300 dark:text-gray-600 cursor-not-allowed font-semibold opacity-60">
                        <ExternalLink size={16} className="mr-1" /> Demo
                      </span>
                    )}
                    {project.websiteLink ? (
                      <motion.a
                        whileHover={{ scale: 1.08 }}
                        whileTap={{ scale: 0.97 }}
                        href={project.websiteLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-sm font-semibold text-teal-600 hover:text-teal-800 dark:text-teal-300 dark:hover:text-teal-200 transition-colors"
                      >
                        <Globe size={16} className="mr-1" /> Website
                      </motion.a>
                    ) : (
                      <span className="flex items-center text-sm text-gray-300 dark:text-gray-600 cursor-not-allowed font-semibold opacity-60">
                        <Globe size={16} className="mr-1" /> Website
                      </span>
                    )}
                    {project.githubLink ? (
                      <motion.a
                        whileHover={{ scale: 1.08 }}
                        whileTap={{ scale: 0.97 }}
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-sm font-semibold text-gray-700 dark:text-gray-300 hover:text-coral-500 dark:hover:text-coral-400 transition-colors"
                      >
                        <Github size={16} className="mr-1" /> Code
                      </motion.a>
                    ) : (
                      <span className="flex items-center text-sm text-gray-300 dark:text-gray-600 cursor-not-allowed font-semibold opacity-60">
                        <Github size={16} className="mr-1" /> Code
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;