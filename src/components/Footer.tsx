import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-8 px-8 bg-white dark:bg-gray-900 shadow-inner rounded-t-2xl flex flex-col items-center font-[Inter,sans-serif] mt-16">
      <div className="text-lg font-semibold text-teal-600 dark:text-teal-300 mb-2">Designed & Built by Adam Rustad</div>
      <div className="text-sm text-gray-500 dark:text-gray-400">© {currentYear} All rights reserved.</div>
    </footer>
  );
};

export default Footer;