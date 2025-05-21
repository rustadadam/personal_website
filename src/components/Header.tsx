import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

type NavLink = {
  name: string;
  href: string;
};

const navLinks: NavLink[] = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Contact', href: '#contact' },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full py-5 px-8 bg-white dark:bg-gray-900 shadow-md rounded-b-2xl flex items-center justify-between font-[Poppins,sans-serif]">
      <div className="text-2xl font-extrabold text-teal-400 tracking-tight">
        Adam Rustad
      </div>
      <nav className="hidden md:flex gap-8">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="text-lg font-semibold text-gray-700 dark:text-gray-200 hover:text-coral-500 dark:hover:text-coral-400 transition-colors px-2 py-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-coral-400/60"
            style={{ fontFamily: 'Inter, Poppins, sans-serif' }}
          >
            {link.name}
          </a>
        ))}
        <ThemeToggle />
      </nav>

      {/* Mobile Menu Button */}
      <div className="flex items-center md:hidden space-x-4">
        <ThemeToggle />
        <button
          onClick={toggleMenu}
          className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 py-2 transition duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;