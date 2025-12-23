'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Snowflake } from 'lucide-react';
import Link from 'next/link';

const navLinks = [
  { name: 'Products', href: '#products' },
  { name: 'Features', href: '#features' },
  { name: 'About', href: '#about' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-900/90 backdrop-blur-md shadow-[0_1px_3px_rgba(0,0,0,0.1)] border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <Snowflake className="w-10 h-10 text-sky-400 group-hover:rotate-180 transition-transform duration-700" />
              <div className="absolute inset-0 w-10 h-10 bg-sky-400/30 blur-xl rounded-full" />
            </div>
            <span className="text-2xl font-bold text-white tracking-tight">
              Snow<span className="text-sky-400">PlowBot</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-sky-400 transition-colors font-medium text-sm lg:text-base"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="#contact"
              className="bg-sky-500 hover:bg-sky-600 text-white px-6 py-2.5 rounded-full font-semibold transition-all hover:shadow-lg hover:shadow-sky-500/25 active:scale-95"
            >
              Get a Quote
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-3 -mr-2 rounded-lg hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm md:hidden"
              style={{ zIndex: 40 }}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[280px] bg-slate-900 shadow-2xl md:hidden flex flex-col"
              style={{ zIndex: 60 }}
            >
              <div className="flex items-center justify-between h-20 px-6 border-b border-white/5">
                <span className="text-xl font-bold text-white">Menu</span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 hover:text-white p-2"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="px-6 py-8 space-y-4 overflow-y-auto flex-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block text-lg text-gray-300 hover:text-sky-400 transition-colors font-medium py-3 border-b border-white/5"
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="pt-4">
                  <Link
                    href="#contact"
                    onClick={() => setIsOpen(false)}
                    className="block bg-sky-500 hover:bg-sky-600 text-white px-6 py-4 rounded-xl font-semibold text-center transition-all shadow-lg shadow-sky-500/20 active:scale-95"
                  >
                    Get a Quote
                  </Link>
                </div>
              </div>
              <div className="p-6 border-t border-white/5 text-center">
                <p className="text-gray-500 text-sm">© 2025 SnowPlowBot Robotics</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
