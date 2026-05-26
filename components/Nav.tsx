'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'work', label: 'Work' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Stack' },
  { id: 'contact', label: 'Contact' },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    handler();
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'border-b border-line/60 bg-bg/70 backdrop-blur-xl'
          : 'border-b border-transparent'
      }`}
    >
      <nav className="mx-auto max-w-7xl px-6 lg:px-12 h-16 flex items-center justify-between">
        <a href="#top" className="group flex items-center gap-2.5">
          <span className="font-mono text-[11px] tracking-[0.2em] text-accent">
            01
          </span>
          <span className="font-display text-[15px] tracking-tight">
            Tahawar Ihsan
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-1">
          {navItems.map((item, i) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="group flex items-center gap-2 px-4 py-2 text-[13px] text-ink-muted hover:text-ink transition-colors"
              >
                <span className="font-mono text-[10px] text-ink-faint group-hover:text-accent transition-colors">
                  0{i + 2}
                </span>
                {item.label}
              </a>
            </li>
          ))}
          <li className="ml-2">
            <a
              href="/Tahawar_ihsan_CV.pdf"
              download
              className="ml-2 px-4 py-2 text-[13px] border border-line hover:border-accent hover:text-accent transition-colors"
            >
              Resume ↓
            </a>
          </li>
        </ul>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5 p-2 -mr-2"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-5 h-px bg-ink transition-transform ${
              open ? 'translate-y-[6px] rotate-45' : ''
            }`}
          />
          <span
            className={`block w-5 h-px bg-ink transition-opacity ${
              open ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block w-5 h-px bg-ink transition-transform ${
              open ? '-translate-y-[6px] -rotate-45' : ''
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden border-t border-line bg-bg"
        >
          <ul className="px-6 py-4 flex flex-col gap-1">
            {navItems.map((item, i) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 px-2 py-3 text-ink-muted hover:text-ink"
                >
                  <span className="font-mono text-[10px] text-ink-faint">
                    0{i + 2}
                  </span>
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="/Tahawar_ihsan_CV.pdf"
                download
                className="flex items-center gap-3 px-2 py-3 text-accent"
              >
                <span className="font-mono text-[10px]">↓</span>
                Download Resume
              </a>
            </li>
          </ul>
        </motion.div>
      )}
    </motion.header>
  );
}
