import React from 'react';
import { Code, Server, Database, PenTool, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

type SkillCategory = {
  id: string;
  name: string;
  icon: React.ReactNode;
  skills: {
    name: string;
    projects: Array<{
      name: string;
      link: string;
      description: string;
    }>;
  }[];
};

const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    name: 'Programming Languages',
    icon: <Code className="w-6 h-6 text-teal-500 dark:text-teal-400" />,
    skills: [
      {
        name: 'JavaScript/TypeScript',
        projects: [
          {
            name: 'SafeSocial – AI-Powered Chrome Extension',
            link: '#projects',
            description: 'Chrome extension using JavaScript, TensorFlow.js, and Chrome Extension APIs for real-time content filtering.'
          }
        ]
      },
      {
        name: 'Java',
        projects: [
          {
            name: 'Client-to-Client Chess Platform',
            link: '#projects',
            description: 'Real-time multiplayer chess app using JavaScript, Websocket, and SQL.'
          }
        ]
      },
      {
        name: 'Python',
        projects: [
          {
            name: 'Leland Coaching Models',
            link: '#projects',
            description: 'ML models for talent discovery using Python, Pandas, Scikit-learn, TensorFlow, HuggingFace.'
          },
          {
            name: 'Manifold Alignment Research – MASH & SPUD',
            link: '#projects',
            description: 'Novel manifold alignment algorithms and experiment pipelines in Python and MATLAB.'
          },
          {
            name: 'Audiobook Generation Pipeline',
            link: '#projects',
            description: 'Automated pipeline for audiobook generation using Python, AWS EC2, Boto3, etc.'
          }
        ]
      }
    ]
  },
  {
    id: 'tools',
    name: 'Tools & Technologies',
    icon: <PenTool className="w-6 h-6 text-coral-500 dark:text-coral-400" />,
    skills: [
      {
        name: 'Manifold Alignment',
        projects: [
          {
            name: 'mashspud',
            link: '#projects',
            description: 'Created a library implementing SPUD & MASH algorithms for cross-domain data alignment, with reproducible benchmarks.'
          }
        ]
      },
      {
        name: 'ML & Data Science',
        projects: [
          {
            name: 'Leland Coaching Models',
            link: '#projects',
            description: 'ML models using TensorFlow, Scikit-learn, HuggingFace.'
          },
          {
            name: 'Twin Autoencoders for Embedding Extension',
            link: '#projects',
            description: 'Novel embedding extension using PyTorch and Jupyter.'
          }
        ]
      },
      {
        name: 'Databases',
        projects: [
          {
            name: 'Peer-to-Peer Chess Platform',
            link: '#projects',
            description: 'Real-time multiplayer chess using mySQL to store games and to enable continous access.'
          }
        ]
      }
    ]
  },
  {
    id: 'devops',
    name: 'DevOps & Automation',
    icon: <Code className="w-6 h-6 text-teal-500 dark:text-teal-400" />,
    skills: [
      {
        name: 'Containerization & CI/CD',
        projects: [
          {
            name: 'Audiobook Generation Pipeline',
            link: '#projects',
            description: 'Containerized Lambda functions and built code into pipelines for scalable deployments.'
          }
        ]
      },
      {
        name: 'Experiment Tracking & Automation',
        projects: [
          {
            name: 'Twin Autoencoders Pipeline',
            link: '#projects',
            description: 'Automated training and logging of embedding-extension experiments using Joblib and ssh servers for thousands of experiments.'
          }
        ]
      }
    ]
  },
  {
    id: 'cloud',
    name: 'Cloud & API Development',
    icon: <Code className="w-6 h-6 text-coral-500 dark:text-coral-400" />,
    skills: [
      {
        name: 'Scalable Server Architecture',
        projects: [
          {
            name: 'Audiobook Generation Pipeline',
            link: '#projects',
            description: 'Built a fully automated and cost-efficient architecture that seamlessly scales using AWS Lambda and AWS EC2.'
          }
        ]
      },
      {
        name: 'LLM Integration',
        projects: [
          {
            name: 'Leland Coaching Models',
            link: '#projects',
            description: 'Used OpenAI API and Google Gemini API to integrate LLMS to read scraped LinkedIn profiles and generate scores.'
          }
        ]
      }
    ]
  },
];

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My Skills
          </h2>
          <div className="w-24 h-1 bg-teal-500 dark:bg-teal-400 mx-auto rounded-full mb-8"></div>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Here are my key skills demonstrated through various projects. Click on any project to see it in action.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div 
              key={category.id}
              initial={{ opacity: 0, x: categoryIndex % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-xl p-6 transform transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="flex items-center mb-6">
                {category.icon}
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white ml-3">
                  {category.name}
                </h3>
              </div>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div 
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: (categoryIndex * 0.1) + (skillIndex * 0.1) }}
                    className="border-l-4 border-teal-500 dark:border-teal-400 pl-4"
                  >
                    <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                      {skill.name}
                    </h4>
                    <div className="space-y-3">
                      {skill.projects.map((project, projectIndex) => (
                        <motion.a
                          key={project.name}
                          whileHover={{ scale: 1.02 }}
                          href={project.link}
                          className="block p-3 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-teal-50 dark:hover:bg-teal-900/30 transition-colors duration-300"
                        >
                          <div className="font-medium text-teal-600 dark:text-teal-400">
                            {project.name}
                          </div>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                            {project.description}
                          </p>
                        </motion.a>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;