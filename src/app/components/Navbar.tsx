'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, Menu, X, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onNavigate: (view: 'landing' | 'dashboard') => void;
  currentView: 'landing' | 'dashboard';
  onScrollToSection: (sectionId: string) => void;
}

export default function Navbar({ onNavigate, currentView, onScrollToSection }: NavbarProps) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const navItems = [
    { label: 'Home', id: 'home', action: () => onNavigate('landing') },
    { label: 'How NLP Works', id: 'how-it-works', action: () => onScrollToSection('how-it-works') },
    { label: 'Dashboard', id: 'dashboard', action: () => onNavigate('dashboard') },
    { label: 'About', id: 'about', action: () => onScrollToSection('about') },
  ];

  const handleItemClick = (item: typeof navItems[0]) => {
    setIsMobileOpen(false);
    item.action();
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-100/80 bg-white/75 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div 
            onClick={() => onNavigate('landing')}
            className="flex cursor-pointer items-center space-x-2.5 transition-opacity hover:opacity-90"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-primary to-secondary text-white shadow-md shadow-primary/20">
              <Brain className="h-5 w-5" />
            </div>
            <div>
              <span className="text-lg font-bold tracking-tight text-text-main">
                SentiLens <span className="text-primary">AI</span>
              </span>
              <span className="ml-2 hidden rounded-full bg-indigo-50 px-2 py-0.5 text-[10px] font-semibold text-secondary sm:inline-block border border-indigo-100">
                NLP Project
              </span>
            </div>
          </div>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={item.action}
                className="text-sm font-medium text-slate-600 transition-colors hover:text-primary cursor-pointer"
              >
                {item.label}
              </button>
            ))}
            
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1.5 text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors"
            >
            <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" className="h-4.5 w-4.5">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
            </svg>
              <span>Github</span>
            </a>
          </div>

          {/* Desktop Call To Action */}
          <div className="hidden md:flex md:items-center">
            <button
              onClick={() => onScrollToSection('analyzer')}
              className="relative inline-flex items-center justify-center gap-1.5 overflow-hidden rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white shadow-md shadow-primary/10 transition-all hover:bg-blue-700 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5 cursor-pointer"
            >
              <span>Analyze Reviews</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="inline-flex items-center justify-center rounded-lg p-2 text-slate-500 hover:bg-slate-50 hover:text-slate-700 focus:outline-none"
            >
              {isMobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="border-b border-slate-100 bg-white md:hidden"
          >
            <div className="space-y-1.5 px-4 pt-2 pb-6">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleItemClick(item)}
                  className="block w-full text-left rounded-lg px-3 py-2 text-base font-semibold text-slate-700 hover:bg-slate-50 hover:text-primary transition-colors cursor-pointer"
                >
                  {item.label}
                </button>
              ))}
              
              <div className="h-px bg-slate-100 my-4" />

              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-lg px-3 py-2 text-base font-semibold text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors"
              >
              <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
                <span>Github Repository</span>
              </a>

              <button
                onClick={() => {
                  setIsMobileOpen(false);
                  onScrollToSection('analyzer');
                }}
                className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-3 text-center text-base font-bold text-white shadow-md shadow-primary/20 cursor-pointer"
              >
                <span>Analyze Reviews</span>
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
