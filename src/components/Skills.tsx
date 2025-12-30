import React, { useRef, useLayoutEffect } from 'react';
import { Code, PenTool, Globe } from 'lucide-react';
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
    icon: <Code className="w-6 h-6 text-teal-300 dark:text-teal-300" />,
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
      },
      {
        name: 'Flutter/Dart',
        projects: [
          {
            name: 'LumiTube – AI-Powered Video Platform',
            link: '#projects',
            description: 'Cross-platform mobile apps (iOS & Android) with video streaming, parental controls, and AI filtering.'
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
            name: 'LumiTube AI Content Filtering',
            link: '#projects',
            description: 'AI models to filter video content with novel ranking algorithms for personalized feeds.'
          },
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
    icon: <Code className="w-6 h-6 text-teal-300 dark:text-teal-300" />,
    skills: [
      {
        name: 'Containerization & CI/CD',
        projects: [
          {
            name: 'Text to Audiobook',
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
          },
          {
            name: 'Random Forest-Supervised Manifold Alignment',
            link: '#projects',
            description: 'Automated the processing of data and training of supervised experiments in parralel.'
          },
          {
            name: 'Time-Series Data Classification',
            link: '#projects',
            description: 'Built pipelines for time-series data classification using classical machine learning methods and clustering.'
          }
        ]
      }, 
      {
        name: 'Operational Excellence',
        projects: [
          {
            name: 'LumiTube – Fundraising & Growth',
            link: '#projects',
            description: 'Co-founded startup, raised funding, networked with investors, and scaled.'
          },
          {
            name: 'Serverless Audio Pipeline (SoundScribe Pro)',
            link: '#projects',
            description: 'Event‑driven pipeline with queued jobs and retries; optimized cost to save ~$7,050 per book.'
          },
          {
            name: 'Payments & Webhooks',
            link: '#projects',
            description: 'Stripe billing, webhooks, and entitlement enforcement in app.'
          },
          {
            name: 'Product Launch & Sales (SoundScribe Pro)',
            link: '#projects',
            description: 'Shipped to public, acquired paying users, support and feedback loops.'
          }
        ]
      }, 
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
      }, 
      {
        name: 'Server Interfaces',
        projects: [
          {
            name: 'Multi-User Chess Platform',
            link: '#projects',
            description: 'Real-time multiplayer chess using WebSocket to enable real-time communication between clients across a hosted server.'
          }
        ]
      }
    ]
  },
  {
    id: 'soft-skills',
    name: 'Soft Skills',
    icon: <Globe className="w-6 h-6 text-teal-300 dark:text-teal-300" />, // Use Globe for soft skills
    skills: [
      {
        name: 'Public Speaking & Presentation',
        projects: [
          {
            name: 'Academic Presentations',
            link: 'https://www.linkedin.com/in/adam-rustad-a43a65299',
            description: 'Presented research at ICMLA, IEEE, GSP, and Red Rock conferences. See LinkedIn for details.'
          }
        ]
      },
      {
        name: 'Leadership',
        projects: [
          {
            name: 'Mission Leadership',
            link: 'https://www.linkedin.com/in/adam-rustad-a43a65299',
            description: 'Lead and organized the efforts of eighty missionaries to heighten key indicators results.'
          },
          {
            name: 'SafeSocial App',
            link: '#projects',
            description: 'Designed and lead several software developers to build the SafeSocial Google extension.'
          }
        ]
      },
      {
        name: 'Multi-disciplinary Communication',
        projects: [
          {
            name: 'Twin Autoencoder Pipeline',
            link: '#projects',
            description: 'Collaborated with neuroscientists to develop and communicate complex ML pipelines to discover new findings about Alzheimer\'s disease.'
          },
          {
            name: 'Stock Data Forecasting',
            link: '#projects',
            description: 'Worked with Black Rock financial to create high-performing portfolios.'
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
    threshold: 0.3,
  });
  const scrollRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Helper to force effect to re-run when refs are set
  const refsKey = scrollRefs.current.map(el => (el ? '1' : '0')).join('');

  useLayoutEffect(() => {
    const frameHandles: number[] = [];
    const userScrollTimeouts: Array<number | null> = Array(skillCategories.length).fill(null);
    const isUserScrollingArr: boolean[] = Array(skillCategories.length).fill(false);
    const onUserScrollArr: Array<(() => void) | null> = Array(skillCategories.length).fill(null);
    scrollRefs.current.forEach((el, idx) => {
      if (!el) return;
      const scrollSpeed = 0.5;
      let lastTimestamp: number | null = null;
      const onUserScroll = () => {
        isUserScrollingArr[idx] = true;
        if (userScrollTimeouts[idx]) clearTimeout(userScrollTimeouts[idx]!);
        userScrollTimeouts[idx] = window.setTimeout(() => {
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
            // Snap to 0 to avoid any fractional offset
            el.scrollTop = 0;
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
  }, [refsKey]);

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
              className="flex-none w-[520px] h-[500px] sm:w-[520px] sm:h-[500px] w-[90vw] h-[70vw] max-w-[98vw] max-h-[80vh] bg-white dark:bg-gray-900 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300 border border-teal-100 dark:border-teal-900/40"
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