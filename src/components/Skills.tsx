import React from 'react';
import { Code, Server, Database, PenTool, Globe } from 'lucide-react';

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
    icon: <Code className="w-6 h-6 text-purple-500 dark:text-purple-400" />,
    skills: [
      {
        name: 'JavaScript/TypeScript',
        projects: [
          {
            name: 'SafeSocial – AI-Powered Chrome Extension',
            link: '#projects',
            description: 'Chrome extension using JavaScript, TensorFlow.js, and Chrome Extension APIs for real-time content filtering.'
          },
          {
            name: 'Peer-to-Peer Chess Platform',
            link: '#projects',
            description: 'Real-time multiplayer chess app using JavaScript, WebRTC, and Firebase.'
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
            description: 'Novel manifold alignment algorithms and experiment pipelines in Python.'
          },
          {
            name: 'Algorithmic Trading Simulator',
            link: '#projects',
            description: 'Stock trading simulator and backtesting framework using Python, Pandas, Django.'
          },
          {
            name: 'Audiobook Generation Pipeline',
            link: '#projects',
            description: 'Automated pipeline for audiobook generation using Python, AWS Lambda, Polly, Boto3.'
          }
        ]
      }
    ]
  },
  {
    id: 'frontend',
    name: 'Frontend Development',
    icon: <Code className="w-6 h-6 text-blue-500 dark:text-blue-400" />,
    skills: [
      {
        name: 'React',
        projects: [
          {
            name: 'BYU Course Alignment Tool',
            link: '#projects',
            description: 'Internal tool for mapping courses and projects, built with React and D3.js.'
          }
        ]
      },
      {
        name: 'Tailwind CSS',
        projects: [
          {
            name: 'Personal Portfolio',
            link: '#',
            description: 'This responsive portfolio website using Tailwind CSS.'
          }
        ]
      }
    ]
  },
  {
    id: 'backend',
    name: 'Backend & Systems',
    icon: <Server className="w-6 h-6 text-green-500 dark:text-green-400" />,
    skills: [
      {
        name: 'Node.js & Express',
        projects: [
          {
            name: 'BYU Course Alignment Tool',
            link: '#projects',
            description: 'Backend API for course mapping using Node.js and Express.'
          }
        ]
      },
      {
        name: 'Django',
        projects: [
          {
            name: 'Algorithmic Trading Simulator',
            link: '#projects',
            description: 'Backtesting and trading simulation backend using Django.'
          }
        ]
      },
      {
        name: 'AWS Lambda & Polly',
        projects: [
          {
            name: 'Audiobook Generation Pipeline',
            link: '#projects',
            description: 'Serverless audiobook generation pipeline using AWS Lambda and Polly.'
          }
        ]
      }
    ]
  },
  {
    id: 'tools',
    name: 'Tools & Technologies',
    icon: <PenTool className="w-6 h-6 text-orange-500 dark:text-orange-400" />,
    skills: [
      {
        name: 'Docker',
        projects: [
          {
            name: 'Algorithmic Trading Simulator',
            link: '#projects',
            description: 'Containerized deployment and reproducible environments using Docker.'
          },
          {
            name: 'Audiobook Generation Pipeline',
            link: '#projects',
            description: 'Containerized serverless pipeline using Docker.'
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
            name: 'Manifold Alignment Research – MASH & SPUD',
            link: '#projects',
            description: 'Research and benchmarking of manifold alignment algorithms.'
          },
          {
            name: 'Twin Autoencoders for Embedding Extension',
            link: '#projects',
            description: 'Embedding extension using PyTorch, MLFlow, and Jupyter.'
          }
        ]
      },
      {
        name: 'Firebase & WebRTC',
        projects: [
          {
            name: 'Peer-to-Peer Chess Platform',
            link: '#projects',
            description: 'Real-time multiplayer chess using Firebase and WebRTC.'
          }
        ]
      }
    ]
  }
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My Skills
          </h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto rounded-full mb-8"></div>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Here are my key skills demonstrated through various projects. Click on any project to see it in action.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category) => (
            <div key={category.id} className="bg-white dark:bg-gray-900 rounded-lg shadow-xl p-6 transform transition-all duration-300 hover:scale-[1.02]">
              <div className="flex items-center mb-6">
                {category.icon}
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white ml-3">
                  {category.name}
                </h3>
              </div>
              
              <div className="space-y-6">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="border-l-4 border-blue-500 dark:border-blue-400 pl-4">
                    <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                      {skill.name}
                    </h4>
                    <div className="space-y-3">
                      {skill.projects.map((project) => (
                        <a
                          key={project.name}
                          href={project.link}
                          className="block p-3 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors duration-300"
                        >
                          <div className="font-medium text-blue-600 dark:text-blue-400">
                            {project.name}
                          </div>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                            {project.description}
                          </p>
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;