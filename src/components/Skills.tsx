import React, { useRef, useEffect } from 'react';
import { Code, Server, Database, PenTool, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './SkillsScrollbar.css'; // Hide vertical scrollbars for skills box

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

// SkillItem component for rendering each skill
const SkillItem: React.FC<{ skill: SkillCategory["skills"][0] }> = ({ skill }) => (
  <div className="border-l-4 border-teal-400 dark:border-teal-500 pl-4">
    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 font-[Poppins,sans-serif]">
      {skill.name}
    </h4>
    <div className="space-y-3">
      {skill.projects.map((project) => (
        <motion.a
          key={project.name}
          whileHover={{ scale: 1.03 }}
          href={project.link}
          className="block p-3 bg-teal-50 dark:bg-teal-900/30 rounded-lg hover:bg-coral-50 dark:hover:bg-coral-900/20 transition-colors duration-300 shadow-sm"
        >
          <div className="font-medium text-teal-700 dark:text-teal-300">
            {project.name}
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
            {project.description}
          </p>
        </motion.a>
      ))}
    </div>
  </div>
);

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3, // Show animation later (more of section in view)
  });
  // Refs for each vertical scroll area
  const scrollRefs = useRef<(HTMLDivElement | null)[]>([]);
  // Auto-scroll effect for each skills box
  useEffect(() => {
    const frameHandles: number[] = [];
    const userScrollTimeouts: Array<number | null> = Array(skillCategories.length).fill(null);
    const isUserScrollingArr: boolean[] = Array(skillCategories.length).fill(false);
    const onUserScrollArr: Array<(() => void) | null> = Array(skillCategories.length).fill(null);
    scrollRefs.current.length = skillCategories.length;
    scrollRefs.current.forEach((el, idx) => {
      if (!el) return;
      const scrollSpeed = 0.5;
      let lastTimestamp: number | null = null;
      // Handler for this category
      const onUserScroll = () => {
        isUserScrollingArr[idx] = true;
        if (userScrollTimeouts[idx]) clearTimeout(userScrollTimeouts[idx]!);
        userScrollTimeouts[idx] = setTimeout(() => {
          isUserScrollingArr[idx] = false;
        }, 1200);
      };
      onUserScrollArr[idx] = onUserScroll;
      el.addEventListener('wheel', onUserScroll, { passive: true });
      el.addEventListener('touchmove', onUserScroll, { passive: true });
      const scrollContent = el.querySelector('.scroll-content') as HTMLElement;
      if (!scrollContent) return;
      const contentHeight = scrollContent.scrollHeight / 2;
      let frame: number;
      const autoScroll = (timestamp?: number) => {
        if (!lastTimestamp) lastTimestamp = timestamp || 0;
        lastTimestamp = timestamp || 0;
        if (!isUserScrollingArr[idx]) {
          el.scrollTop += scrollSpeed;
          if (el.scrollTop >= contentHeight) {
            el.scrollTop = el.scrollTop - contentHeight;
          }
        }
        frame = requestAnimationFrame(autoScroll);
      };
      frame = requestAnimationFrame(autoScroll);
      frameHandles.push(frame);
    });
    return () => {
      scrollRefs.current.forEach((el, idx) => {
        if (el && onUserScrollArr[idx]) {
          el.removeEventListener('wheel', onUserScrollArr[idx]!);
          el.removeEventListener('touchmove', onUserScrollArr[idx]!);
        }
        if (userScrollTimeouts[idx]) clearTimeout(userScrollTimeouts[idx]!);
      });
      frameHandles.forEach((frame) => cancelAnimationFrame(frame));
    };
  }, []);

  return (
    <section id="skills" className="py-24 bg-gray-50 dark:bg-gray-800 font-[Inter,sans-serif]">
      <div className="container mx-auto px-4 sm:px-8 lg:px-16">
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 font-[Poppins,sans-serif] tracking-tight">
            My Skills
          </h2>
          <div className="w-28 h-1 bg-coral-500 dark:bg-teal-400 mx-auto rounded-full mb-10"></div>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto font-[Inter,sans-serif]">
            Here are my key skills demonstrated through various projects. Click on any project to see it in action.
          </p>
        </motion.div>
        <div className="flex overflow-x-auto pb-8 space-x-8 scrollbar-thin scrollbar-thumb-teal-200 dark:scrollbar-thumb-teal-900 scrollbar-track-transparent">
          {skillCategories.map((category, categoryIndex) => (
            <div // removed motion.div for no slide-in animation
              key={category.id}
              className="flex-none w-[520px] h-[500px] bg-white dark:bg-gray-900 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300 border border-teal-100 dark:border-teal-900/40"
              style={{ fontFamily: 'Inter, Poppins, sans-serif' }}
            >
              <div className="flex items-center mb-6 px-7 pt-7">
                {category.icon}
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white ml-3 font-[Poppins,sans-serif]">
                  {category.name}
                </h3>
              </div>
              <div
                ref={el => (scrollRefs.current[categoryIndex] = el)}
                className="px-7 pb-7 flex flex-col gap-6 overflow-y-auto h-[410px] pr-2 hide-scrollbar scroll-container"
              >
                <div className="scroll-content flex flex-col gap-6">
                  {category.skills.map((skill) => (
                    <SkillItem key={skill.name} skill={skill} />
                  ))}
                  {/* Duplicate for seamless scroll */}
                  {category.skills.map((skill) => (
                    <SkillItem key={skill.name + '-duplicate'} skill={skill} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;