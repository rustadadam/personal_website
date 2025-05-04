import React from 'react';
import { Calendar, Award, BookOpen, Briefcase } from 'lucide-react';

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
    title: "Research Publication at ICMLA",
    description:
      "Published Graph Integration for Diffusion‑Based Manifold Alignment at ICMLA. Introduced novel techniques for improved cross‑domain data alignment.",
    type: "award",
  },
  {
    id: 6,
    date: "Dec 2024",
    title: "Research Publication at IEEE",
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
    title: "Research Publication at SampTA",
    description:
      "Published Enabling Out‑of‑Sample Extension in Semi‑Supervised Manifold Alignment at SampTA. Presented a twin autoencoder approach for real‑world data extension.",
    type: "award",
  },
];

const IconByType: React.FC<{ type: Achievement['type'] }> = ({ type }) => {
  switch (type) {
    case 'education':
      return <BookOpen className="text-purple-500 dark:text-purple-400" />;
    case 'award':
      return <Award className="text-yellow-500 dark:text-yellow-400" />;
    case 'certification':
      return <Award className="text-green-500 dark:text-green-400" />;
    case 'experience':
      return <Briefcase className="text-blue-500 dark:text-blue-400" />;
    default:
      return <Calendar className="text-gray-500 dark:text-gray-400" />;
  }
};

const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Achievements & Education
          </h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto rounded-full mb-8"></div>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            My academic journey, professional achievements, and continuous learning path
            that have shaped my skills and knowledge in computer science.
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-blue-200 dark:bg-blue-900"></div>
          
          {/* Timeline Items */}
          <div className="space-y-12">
            {achievements.map((achievement, index) => (
              <div key={achievement.id} className="relative">
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 -translate-y-4 w-14 h-14 rounded-full bg-white dark:bg-gray-900 border-4 border-blue-400 dark:border-blue-400 z-10 flex items-center justify-center">
                  <IconByType type={achievement.type} />
                </div>
                
                {/* Content */}
                <div
                  className={`ml-12 md:ml-0 ${
                    index % 2 === 0
                      ? 'md:mr-auto md:pr-16 md:pl-0'
                      : 'md:ml-auto md:pl-16 md:pr-0'
                  } md:w-5/12`}
                >
                  <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-xl shadow-blue-800/60">
                    <div className="flex items-center mb-3">
                      <Calendar size={20} className="text-blue-600 dark:text-blue-400 mr-2" />
                      <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                        {achievement.date}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {achievement.title}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;