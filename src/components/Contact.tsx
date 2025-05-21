import React from 'react';
import { Mail, MapPin, Linkedin, Github } from 'lucide-react';
import { motion } from 'framer-motion';

const contactMethods = [
	{
		icon: <Mail className="text-teal-600 dark:text-teal-300" size={24} />,
		label: 'Email',
		value: 'rustadadam@gmail.com',
		href: 'mailto:rustadadam@gmail.com',
		description: null,
		bg: 'bg-teal-100 dark:bg-teal-900/40',
		hover: 'hover:bg-teal-200 dark:hover:bg-teal-900/60',
	},
	{
		icon: <MapPin className="text-teal-600 dark:text-teal-300" size={24} />,
		label: 'Location',
		value: 'Vineyard, UT',
		href: 'https://www.google.com/maps/place/Vineyard,+UT',
		description: null,
		bg: 'bg-teal-100 dark:bg-teal-900/40',
		hover: 'hover:bg-teal-200 dark:hover:bg-teal-900/60',
	},
	{
		icon: <Linkedin className="text-teal-600 dark:text-teal-300" size={24} />,
		label: 'LinkedIn',
		value: 'Connect with me on LinkedIn',
		href: 'https://www.linkedin.com/in/adam-rustad-a43a65299',
		description: null,
		bg: 'bg-teal-100 dark:bg-teal-900/40',
		hover: 'hover:bg-teal-200 dark:hover:bg-teal-900/60',
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
		<section id="contact" className="py-16 bg-white dark:bg-gray-900 font-[Inter,sans-serif]">
			<div className="container mx-auto px-4 sm:px-8 lg:px-16">
				<motion.div
					initial={{ opacity: 0, y: 10 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.2 }}
					transition={{ duration: 1.9, ease: 'easeOut' }}
					className="text-center mb-10"
				>
					<h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 font-[Poppins,sans-serif] tracking-tight">
						Get In Touch
					</h2>
					<div className="w-28 h-1 bg-coral-500 dark:bg-coral-400 mx-auto rounded-full mb-8"></div>
					<p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto font-[Inter,sans-serif]">
						Let&apos;s connect and see how we can drive learning and innovation together.
					</p>
				</motion.div>
				<motion.div
					initial={{ opacity: 0, scale: 0.97, y: 10 }}
					whileInView={{ opacity: 1, scale: 1, y: 0 }}
					viewport={{ once: true, amount: 0.2 }}
					transition={{ duration: 0.9, delay: 0.08, ease: 'easeOut' }}
					className="max-w-2xl mx-auto bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-3xl shadow-2xl border border-teal-100 dark:border-teal-900/40 mb-0"
				>
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
						{contactMethods.map((method, idx) => {
							const CardContent = (
								<motion.div
									initial={{ opacity: 0, y: 12 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true, amount: 0.2 }}
									transition={{ duration: 0.7, delay: 0.18 + idx * 0.09, ease: 'easeOut' }}
									whileHover={method.href ? { scale: 1.035, boxShadow: '0 8px 32px 0 rgba(0,128,128,0.13)' } : {}}
									className="flex items-center gap-4 bg-gradient-to-br from-white via-teal-50 to-teal-100 dark:from-gray-800 dark:via-teal-900/30 dark:to-teal-900 rounded-2xl p-5 shadow-md hover:shadow-xl transition-all duration-200 cursor-pointer"
									tabIndex={method.href ? 0 : undefined}
								>
									<div className={`flex-shrink-0 p-3 rounded-full shadow-md ${method.bg}`}>{method.icon}</div>
									<div>
										<a
											href={method.href || undefined}
											target={method.href && method.href.startsWith('http') ? '_blank' : undefined}
											rel={method.href && method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
											className="text-base font-semibold text-gray-900 dark:text-white mb-1 font-[Poppins,sans-serif] hover:text-coral-500 dark:hover:text-coral-400 transition-colors focus:underline"
										>
											{method.label}
										</a>
										{method.href ? (
											<a
												href={method.href}
												target={method.href.startsWith('http') ? '_blank' : undefined}
												rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
												className="block text-sm text-gray-700 dark:text-gray-300 hover:text-coral-500 dark:hover:text-coral-400 font-medium transition-colors"
											>
												{method.value}
											</a>
										) : (
											<p className="text-sm text-gray-700 dark:text-gray-300 font-medium">{method.value}</p>
										)}
										{method.description && (
											<p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{method.description}</p>
										)}
									</div>
								</motion.div>
							);
							return method.href ? (
								<a
									href={method.href}
									target={method.href.startsWith('http') ? '_blank' : undefined}
									rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
									className="block focus:outline-none group"
									style={{ textDecoration: 'none' }}
								>
									{CardContent}
								</a>
							) : CardContent;
						})}
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default Contact;