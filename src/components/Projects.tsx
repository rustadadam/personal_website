import React, { useState } from 'react';
import { ExternalLink, Github, Code, Globe } from 'lucide-react';

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveLink?: string;
  githubLink?: string;
  websiteLink?: string; // Add optional website link
  category: 'Web' | 'Machine Learning' | 'Systems';
};

const projects: Project[] = [
  {
    id: 1,
    title: "SafeSocial – AI-Powered Chrome Extension",
    description: "A Chrome extension that uses real-time in-browser computer vision to filter explicit and adult content from social media feeds. Achieves high accuracy with minimal performance overhead, designed for seamless UX and privacy.",
    image: "/assets/banner.png",
    technologies: ["TensorFlow.js", "JavaScript", "Chrome Extension APIs", "Computer Vision", "Mixpanel"],
    liveLink: "https://youtu.be/slG7xXj4rG4",
    githubLink: undefined, // Code not available
    websiteLink: "https://chromewebstore.google.com/detail/safe-social/jdacdndepggbdjbknoncakkgbbhfoccm", // Example website link
    category: 'Web'
  },
  {
    id: 2,
    title: "Leland Coaching Models",
    description: "Built machine learning models to recommend coach candidates based on profile embeddings and heuristics. Developed ensemble models and an LLM-assisted neural network achieving 89% F1 and 99% recall for Leland Coaching.",
    image: "/assets/ai-neural-network-brain.jpg",
    technologies: ["Python", "Pandas", "Scikit-learn", "TensorFlow", "HuggingFace"],
    liveLink: undefined, // TODO
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
    liveLink: "https://youtu.be/NrNHT1rozHk", // TODO
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
    liveLink: undefined, //TODO
    githubLink: "https://github.com/rustadadam/SoundScribe",
    category: "Web"
  },
  {
    id: 5,
    title: "Client-to-Client Chess Platform",
    description: "A real-time multiplayer chess app built with Java and Websocket, enabling client-to-client gameplay with secure connection handling and move validation.",
    image: "/assets/ches.png",
    technologies: ["Java", "Websocket", "SQL"],
    liveLink: undefined, // TODO
    githubLink: "https://github.com/rustadadam/chess",
    category: "Systems"
  },
  {
    id: 6,
    title: "Twin Autoencoders for Embedding Extension",
    description: "Developed and published a method to extend aligned embeddings using twin autoencoders. Applied to graph alignment and data fusion tasks with robust quantitative evaluations.",
    image: "/assets/quantum-chip-technology.jpg",
    technologies: ["PyTorch", "Joblib", "Matplotlib", "Jupyter", "TensorFlow"],
    liveLink: undefined, // TODO
    githubLink: "https://github.com/JakeSRhodesLab/TwinAE-MA",
    websiteLink: "https://scholar.google.com/citations?user=ajI1Nl8AAAAJ&hl=en",
    category: "Machine Learning"
  }
];

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'Web' | 'Machine Learning' | 'Systems'>('all');
  
  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My Projects
          </h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto rounded-full mb-8"></div>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            Here are some of the projects I've worked on during my academic journey and personal exploration.
            Each project represents a unique challenge and learning experience.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-6 py-2 rounded-full text-sm ${
                activeCategory === 'all'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700'
              } transition duration-300`}
            >
              All Projects
            </button>
            <button
              onClick={() => setActiveCategory('Web')}
              className={`px-6 py-2 rounded-full text-sm ${
                activeCategory === 'Web'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700'
              } transition duration-300`}
            >
              Web
            </button>
            <button
              onClick={() => setActiveCategory('Machine Learning')}
              className={`px-6 py-2 rounded-full text-sm ${
                activeCategory === 'Machine Learning'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700'
              } transition duration-300`}
            >
              Machine Learning
            </button>
            <button
              onClick={() => setActiveCategory('Systems')}
              className={`px-6 py-2 rounded-full text-sm ${
                activeCategory === 'Systems'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700'
              } transition duration-300`}
            >
              Systems
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
                    >
                      <ExternalLink size={16} className="mr-1" /> Live Demo
                    </a>
                  )}
                  {project.websiteLink && (
                    <a
                      href={project.websiteLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-sm text-green-700 dark:text-green-300 hover:text-green-900 dark:hover:text-green-100"
                    >
                      <Globe size={16} className="mr-1" /> Website
                    </a>
                  )}
                  {project.githubLink ? (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-sm text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                    >
                      <Github size={16} className="mr-1" /> Code
                    </a>
                  ) : (
                    <span className="flex items-center text-sm text-gray-400 dark:text-gray-500 cursor-not-allowed">
                      <Github size={16} className="mr-1" /> Code not available
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;