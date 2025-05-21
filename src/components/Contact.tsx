import React from 'react';
import { Mail, MapPin, Linkedin, Github } from 'lucide-react';
import { motion } from 'framer-motion';

const contactMethods = [
  {
    icon: <Mail className="text-coral-500 dark:text-coral-400" size={24} />, 
    label: 'Email',
    value: 'rustadadam@gmail.com',
    href: 'mailto:rustadadam@gmail.com',
    description: null,
    bg: 'bg-coral-100 dark:bg-coral-400/20',
    hover: 'hover:bg-coral-200 dark:hover:bg-coral-400/40',
  },
  {
    icon: <MapPin className="text-teal-600 dark:text-teal-300" size={24} />, 
    label: 'Location',
    value: 'Vineyard, UT',
    href: null,
    description: null,
    bg: 'bg-teal-100 dark:bg-teal-900/40',
    hover: '',
  },
  {
    icon: <Linkedin className="text-coral-500 dark:text-coral-400" size={24} />, 
    label: 'LinkedIn',
    value: 'Connect with me on LinkedIn',
    href: 'https://www.linkedin.com/in/adam-rustad-a43a65299',
    description: null,
    bg: 'bg-coral-100 dark:bg-coral-400/20',
    hover: 'hover:bg-coral-200 dark:hover:bg-coral-400/40',
  },
  {
    icon: <Github className="text-teal-600 dark:text-teal-300" size={24} />, 
    label: 'GitHub',
    value: 'View my public projects on GitHub',
    href: 'https://github.com/rustadadam',
    description: null,
    bg: 'bg-teal-100 dark:bg-teal-900/40',
    hover: 'hover:bg-teal-200 dark:hover:bg-teal-900/60',
  },
];

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-white dark:bg-gray-900 font-[Inter,sans-serif]">
      <div className="container mx-auto px-4 sm:px-8 lg:px-16">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 font-[Poppins,sans-serif] tracking-tight">
            Get In Touch
          </h2>
          <div className="w-28 h-1 bg-coral-500 dark:bg-coral-400 mx-auto rounded-full mb-10"></div>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto font-[Inter,sans-serif]">
            Let's connect and see how we can drive learning and innovation together.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="max-w-3xl mx-auto bg-white dark:bg-gray-800 p-10 rounded-3xl shadow-2xl border border-teal-100 dark:border-teal-900/40"
        >
          <div className="space-y-10">
            {contactMethods.map((method, idx) => (
              <motion.div
                key={method.label}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: 0.15 + idx * 0.08 }}
                className="flex items-start"
              >
                {method.href ? (
                  <a
                    href={method.href}
                    target={method.href.startsWith('http') ? '_blank' : undefined}
                    rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className={`flex-shrink-0 p-3 rounded-full shadow-md transition-colors ${method.bg} ${method.hover}`}
                  >
                    {method.icon}
                  </a>
                ) : (
                  <div className={`flex-shrink-0 p-3 rounded-full shadow-md ${method.bg}`}>{method.icon}</div>
                )}
                <div className="ml-5">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1 font-[Poppins,sans-serif]">{method.label}</h4>
                  {method.href ? (
                    <a
                      href={method.href}
                      target={method.href.startsWith('http') ? '_blank' : undefined}
                      rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-base text-gray-700 dark:text-gray-300 hover:text-coral-500 dark:hover:text-coral-400 font-medium transition-colors"
                    >
                      {method.value}
                    </a>
                  ) : (
                    <p className="text-base text-gray-700 dark:text-gray-300 font-medium">{method.value}</p>
                  )}
                  {method.description && (
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{method.description}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;