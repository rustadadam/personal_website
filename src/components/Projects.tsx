import React, { useState } from 'react';
import { ExternalLink, Github, Code } from 'lucide-react';

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveLink?: string;
  githubLink?: string;
  category: 'web' | 'mobile' | 'other';
};

const projects: Project[] = [
  {
    id: 1,
    title: "Smart Task Manager",
    description: "A productivity app built with React that uses machine learning to prioritize tasks based on user behavior and deadlines.",
    image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: ["React", "Node.js", "MongoDB", "TensorFlow.js"],
    liveLink: "https://example.com",
    githubLink: "https://github.com",
    category: "web"
  },
  {
    id: 2,
    title: "Eco Route Finder",
    description: "An app that finds the most eco-friendly routes for travel by calculating carbon emissions for different transportation methods.",
    image: "https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: ["React Native", "Google Maps API", "Firebase"],
    liveLink: "https://example.com",
    githubLink: "https://github.com",
    category: "mobile"
  },
  {
    id: 3,
    title: "Virtual Study Buddy",
    description: "A platform connecting students for virtual study sessions with integrated tools for collaboration and knowledge sharing.",
    image: "https://images.pexels.com/photos/7439143/pexels-photo-7439143.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: ["Next.js", "Socket.io", "PostgreSQL", "WebRTC"],
    liveLink: "https://example.com",
    githubLink: "https://github.com",
    category: "web"
  },
  {
    id: 4,
    title: "Data Visualization Tool",
    description: "A tool for creating interactive data visualizations from various data sources with export capabilities.",
    image: "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: ["D3.js", "React", "Node.js", "Express"],
    liveLink: "https://example.com",
    githubLink: "https://github.com",
    category: "web"
  },
  {
    id: 5,
    title: "Algorithmic Trading Simulator",
    description: "A platform for simulating and testing algorithmic trading strategies using historical market data.",
    image: "https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: ["Python", "Pandas", "Django", "Docker"],
    githubLink: "https://github.com",
    category: "other"
  },
  {
    id: 6,
    title: "Augmented Reality Campus Tour",
    description: "A mobile app using AR to provide an interactive tour of the university campus with historical information.",
    image: "https://images.pexels.com/photos/2228574/pexels-photo-2228574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: ["Unity", "ARCore", "C#", "Blender"],
    liveLink: "https://example.com",
    githubLink: "https://github.com",
    category: "mobile"
  }
];

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'web' | 'mobile' | 'other'>('all');
  
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
              onClick={() => setActiveCategory('web')}
              className={`px-6 py-2 rounded-full text-sm ${
                activeCategory === 'web'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700'
              } transition duration-300`}
            >
              Web
            </button>
            <button
              onClick={() => setActiveCategory('mobile')}
              className={`px-6 py-2 rounded-full text-sm ${
                activeCategory === 'mobile'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700'
              } transition duration-300`}
            >
              Mobile
            </button>
            <button
              onClick={() => setActiveCategory('other')}
              className={`px-6 py-2 rounded-full text-sm ${
                activeCategory === 'other'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700'
              } transition duration-300`}
            >
              Other
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
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-sm text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                    >
                      <Github size={16} className="mr-1" /> Code
                    </a>
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