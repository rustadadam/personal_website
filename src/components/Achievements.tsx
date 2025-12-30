import React, { useState } from 'react';
import { Calendar, Award, BookOpen, Briefcase, ChevronDown, ChevronUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { SectionHeader } from './ui/SectionHeader';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { timelineItem, hoverScaleSmall, buttonTap } from '../utils/animations';

type Achievement = {
  id: number;
  date: string;
  title: string;
  description: string;
  type: 'education' | 'award' | 'certification' | 'experience';
};

const achievements: Achievement[] = [
  {
    id: 12,
    date: "Sept 2024 - Present",
    title: "Co-Founder & Technical Lead at LumiTube",
    description:
      "Co-founded AI-powered video platform for kids with customizable parental controls. Built entire technical stack using Flutter for iOS/Android apps, implementing novel AI filtering and ranking algorithms.",
    type: "experience",
  },
  {
    id: 11,
    date: "Sept 2024 - Present",
    title: "Sandbox Student Innovator",
    description:
      "Accepted into a premier innovation and entrepreneurship program in partnership with BYU. Collaborated with fellow student innovators, received mentorship, and built and scaled ventures.",
    type: "education",
  },
  {
    id: 4,
    date: "Jan 2024 - Present",
    title: "Machine Learning Research Assistant",
    description:
      "Engaged as a research assistant focusing on machine learning and data analysis. Designed and implemented code to advance cutting‑edge CS research.",
    type: "experience",
  },
  {
    id: 1,
    date: "June 2021 - Present",
    title: "Bachelors in Computer Science",
    description:
      "Brigham Young University, GPA: 3.91, Dean's List. Minors in Mathematics and Entrepreneurship.",
    type: "education",
  },
  {
    id: 14,
    date: "Dec 2025",
    title: "Academic Publication at ICDM",
    description:
      "Published Guided Manifold Alignment with Geometry-Regularized Twin Autoencoders at ICDM. Advanced manifold alignment with geometric regularization techniques.",
    type: "award",
  },
  {
    id: 15,
    date: "Dec 2025",
    title: "Academic Publication at ICMLA",
    description:
      "Published Label-Guided Imputation via Forest-Based Proximities for Improved Time Series Classification at ICMLA. Enhanced time series classification through novel imputation methods.",
    type: "award",
  },
  {
    id: 9,
    date: "June 2025 - Sept 2025",
    title: "AI Engineer Intern at N of 1 AI",
    description:
      "Built agentic AI workflows from the ground up, designing end-to-end pipelines that automated complex tasks and integrated tools for reliable autonomy.",
    type: "experience",
  },
  {
    id: 10,
    date: "July 2025",
    title: "Launched SoundScribe Pro",
    description:
      "Released SoundScribe Pro publicly and onboarded real paying users. Platform automates audiobook narration/mastering, saving authors about $7,050 per audiobook with distribution-ready outputs.",
    type: "experience",
  },
  {
    id: 8,
    date: "Mar 2025",
    title: "Academic Publication at SampTA",
    description:
      "Published Enabling Out‑of‑Sample Extension in Semi‑Supervised Manifold Alignment at SampTA. Presented a twin autoencoder approach for real‑world data extension.",
    type: "award",
  },
  {
    id: 7,
    date: "Feb 2025",
    title: "AWS Academy Graduate",
    description:
      "Completed AWS Academy Machine Learning Foundations certification. Validated foundational expertise in cloud computing and AWS ML services.",
    type: "education",
  },
  {
    id: 5,
    date: "Dec 2024",
    title: "Academic Publication at ICMLA",
    description:
      "Published Graph Integration for Diffusion‑Based Manifold Alignment at ICMLA. Introduced novel techniques for improved cross‑domain data alignment.",
    type: "award",
  },
  {
    id: 6,
    date: "Dec 2024",
    title: "Academic Publication at IEEE",
    description:
      "Published Random Forest‑Supervised Manifold Alignment at IEEE Big Data. Demonstrated enhanced performance of manifold alignment in high‑dimensional settings.",
    type: "award",
  },
  {
    id: 3,
    date: "Nov 2023 - Feb 2024",
    title: "Research Intern at Allset",
    description:
      "Worked as a research intern at Allset. Developed AI‑driven product concepts and engaged local businesses to validate solution designs.",
    type: "experience",
  },
  {
    id: 2,
    date: "Oct 2021 - Oct 2023",
    title: "Missionary Service",
    description:
      "Volunteered as a missionary for The Church of Jesus Christ of Latter-day Saints. Provided leadership to the mission unit, worked 70+ hour weeks, and produced monthly performance reports.",
    type: "experience",
  },
];

const IconByType: React.FC<{ type: Achievement['type'] }> = ({ type }) => {
  switch (type) {
    case 'education':
      return <BookOpen className="text-coral-500 dark:text-teal-400" />;
    case 'award':
      return <Award className="text-coral-500 dark:text-coral-400" />;
    case 'certification':
      return <Award className="text-coral-500 dark:text-green-400" />;
    case 'experience':
      return <Briefcase className="text-coral-500 dark:text-teal-400" />;
    default:
      return <Calendar className="text-coral-500 dark:text-gray-400" />;
  }
};

const Achievements: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  const [ref, inView] = useScrollAnimation({ threshold: 0.3 });

  const visibleAchievements = showAll ? achievements : achievements.slice(0, 4);

  return (
    <section id="achievements" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Achievements & Education"
          description="My academic journey, professional achievements, and continuous learning path that have shaped my skills and knowledge in computer science."
          dividerColor="coral"
        />
        <div className="relative">
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-teal-200 dark:bg-teal-900"></div>
          <div ref={ref} className="space-y-7 md:space-y-5">
            {visibleAchievements.map((achievement, index) => (
              <motion.div
                key={achievement.id}
                {...timelineItem(index, index % 2 === 0)}
                animate={inView ? timelineItem(index, index % 2 === 0).animate : timelineItem(index, index % 2 === 0).initial}
                className="relative"
              >
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 -translate-y-4 w-14 h-14 rounded-full bg-white dark:bg-gray-950 border-4 border-teal-400 dark:border-teal-400 z-10 flex items-center justify-center shadow-md">
                  <span className="flex items-center justify-center w-full h-full">
                    <IconByType type={achievement.type} />
                  </span>
                </div>
                <div
                  className={`ml-12 md:ml-0 ${
                    index % 2 === 0
                      ? 'md:mr-auto md:pr-10 md:pl-0'
                      : 'md:ml-auto md:pl-10 md:pr-0'
                  } md:w-5/12`}
                >
                  <motion.div
                    whileHover={hoverScaleSmall}
                    className={`p-6 rounded-2xl border-0 shadow-card-hover dark:shadow-card-hover-dark transition duration-500 ${
                      index % 2 === 0
                        ? 'gradient-card-teal'
                        : 'gradient-card-coral'
                    }`}
                  >
                    <div className="flex items-center mb-2">
                      <Calendar size={18} className="text-teal-600 dark:text-teal-400 mr-2" />
                      <span className="text-xs text-teal-600 dark:text-teal-400 font-medium">
                        {achievement.date}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1 font-heading">
                      {achievement.title}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                      {achievement.description}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        {achievements.length > 4 && (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={buttonTap}
            onClick={() => setShowAll(!showAll)}
            className="mx-auto mt-10 flex items-center gap-2 px-6 py-2 bg-coral-500 text-white rounded-full hover:bg-coral-600 transition-colors shadow-md font-heading"
          >
            {showAll ? (
              <>Show Less <ChevronUp size={20} /></>
            ) : (
              <>Show More <ChevronDown size={20} /></>
            )}
          </motion.button>
        )}
      </div>
    </section>
  );
};

export default Achievements;