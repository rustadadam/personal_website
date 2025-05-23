import React, { useState } from 'react';
import { Calendar, Award, BookOpen, Briefcase, ChevronDown, ChevronUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

type Achievement = {
  id: number;
  date: string;
  title: string;
  description: string;
  type: 'education' | 'award' | 'certification' | 'experience';
};

const achievements: Achievement[] = [
  {
    id: 1,
    date: "June 2021 - Present",
    title: "Bachelors in Computer Science",
    description:
      "Brigham Young University, GPA: 3.91, Dean's List. Minors in Mathematics and Entrepreneurship.",
    type: "education",
  },
  {
    id: 2,
    date: "Oct 2021 - Oct 2023",
    title:
      "Missionary Service",
    description:
      "Volunteered as a missionary for The Church of Jesus Christ of Latter-day Saints. Provided leadership to the mission unit, worked 70+ hour weeks, and produced monthly performance reports.",
    type: "experience",
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
    id: 4,
    date: "Jan 2024 - Present",
    title: "Research Assistant",
    description:
      "Engaged as a research assistant focusing on machine learning and data analysis. Designed and implemented code to advance cutting‑edge CS research.",
    type: "experience",
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
    id: 7,
    date: "Feb 2025",
    title: "AWS Academy Graduate",
    description:
      "Completed AWS Academy Machine Learning Foundations certification. Validated foundational expertise in cloud computing and AWS ML services.",
    type: "education",
  },
  {
    id: 8,
    date: "Mar 2025",
    title: "Academic Publication at SampTA",
    description:
      "Published Enabling Out‑of‑Sample Extension in Semi‑Supervised Manifold Alignment at SampTA. Presented a twin autoencoder approach for real‑world data extension.",
    type: "award",
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
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3, // Show animation later (more of section in view)
  });

  const visibleAchievements = showAll ? achievements : achievements.slice(0, 4);

  return (
    <section id="achievements" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4 font-[Poppins,sans-serif]">
            Achievements & Education
          </h2>
          <div className="w-24 h-1 bg-coral-500 dark:bg-coral-400 mx-auto rounded-full mb-8"></div>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            My academic journey, professional achievements, and continuous learning path
            that have shaped my skills and knowledge in computer science.
          </p>
        </motion.div>
        <div className="relative">
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-teal-200 dark:bg-teal-900"></div>
          <div className="space-y-7 md:space-y-5">
            {visibleAchievements.map((achievement, index) => (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
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
                    whileHover={{ scale: 1.045, boxShadow: '0 8px 26px 0 rgba(9, 189, 255, 0.91)' }}
                    className={`p-6 rounded-2xl border-0 shadow-[0_8px_40px_0_rgba(9,189,255,0.32),0_1.5px_8px_0_rgba(0,0,0,0.10)] dark:shadow-[0_8px_48px_0_rgba(9,189,255,0.38),0_6px_18px_0_rgba(0,0,0,0.18)] transition duration-500 ${
                      index % 2 === 0
                        ? 'bg-gradient-to-br from-white via-teal-100 to-coral-200 dark:from-gray-900 dark:via-teal-950 dark:to-coral-700'
                        : 'bg-gradient-to-br from-coral-200 via-white to-teal-100 dark:from-coral-800 dark:via-gray-900 dark:to-teal-950'
                    }`}
                  >
                    <div className="flex items-center mb-2">
                      <Calendar size={18} className="text-teal-600 dark:text-teal-400 mr-2" />
                      <span className="text-xs text-teal-600 dark:text-teal-400 font-medium">
                        {achievement.date}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1 font-[Poppins,sans-serif]">
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
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowAll(!showAll)}
            className="mx-auto mt-10 flex items-center gap-2 px-6 py-2 bg-coral-500 text-white rounded-full hover:bg-coral-600 transition-colors shadow-md"
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