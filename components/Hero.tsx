'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { profile, heroRoles } from '@/lib/data';
import { AgentDiagram } from './AgentDiagram';

function Typewriter({ phrases }: { phrases: string[] }) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[index];
    const speed = deleting ? 35 : 65;

    const timeout = setTimeout(() => {
      if (!deleting && text === current) {
        setTimeout(() => setDeleting(true), 1800);
        return;
      }
      if (deleting && text === '') {
        setDeleting(false);
        setIndex((index + 1) % phrases.length);
        return;
      }
      setText(deleting ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1));
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, deleting, index, phrases]);

  return (
    <span className="inline-flex items-center">
      <span className="text-accent">{text}</span>
      <span className="inline-block w-[2px] h-[0.8em] bg-accent ml-1 animate-blink" />
    </span>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />

      {/* Subtle radial gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(59, 130, 246, 0.08), transparent)',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12 py-16 w-full">
        <div className="grid lg:grid-cols-[1fr,520px] gap-12 lg:gap-16 items-center">
          {/* Left: copy */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2.5 px-3 py-1.5 border border-line/60 bg-bg-elevated/40 backdrop-blur-sm mb-8"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
              </span>
              <span className="font-mono text-[11px] tracking-[0.15em] uppercase text-ink-muted">
                Available for opportunities
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-display text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight balance leading-[1.05]"
              style={{ letterSpacing: '-0.04em' }}
            >
              Building production
              <br />
              <span className="text-ink-muted">GenAI systems</span>
              <br />
              <span className="inline-flex items-center">
                for{' '}
                <span className="ml-3">
                  <Typewriter phrases={['BMW', 'Mercedes', 'fintech', 'enterprise']} />
                </span>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-8 text-lg text-ink-muted max-w-xl leading-relaxed balance"
            >
              I&apos;m {profile.name} — an AI/ML Engineer at NetSol Technologies designing
              agentic workflows, RAG pipelines, and LLM orchestration that ship to
              enterprise customers.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.55 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 px-5 py-3 bg-accent hover:bg-accent-glow text-white font-medium text-sm transition-all"
              >
                View work
                <span className="transition-transform group-hover:translate-x-0.5">→</span>
              </a>
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 px-5 py-3 border border-line hover:border-accent hover:text-accent text-sm transition-all"
              >
                Get in touch
              </a>
              <a
                href={profile.links.github}
                target="_blank"
                rel="noopener"
                className="ml-2 text-sm text-ink-muted hover:text-ink link-underline"
              >
                /github
              </a>
              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noopener"
                className="text-sm text-ink-muted hover:text-ink link-underline"
              >
                /linkedin
              </a>
              <a
                href={profile.links.twitter}
                target="_blank"
                rel="noopener"
                className="text-sm text-ink-muted hover:text-ink link-underline"
              >
                /x
              </a>
            </motion.div>

            {/* Mono signature line */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="mt-16 flex items-center gap-3 font-mono text-[11px] tracking-wider text-ink-faint"
            >
              <span className="h-px w-8 bg-line" />
              <span>{profile.location}</span>
              <span className="text-line-bright">·</span>
              <span>{new Date().getFullYear()}</span>
              <span className="text-line-bright">·</span>
              <span>v2.0</span>
            </motion.div>
          </div>

          {/* Right: agent diagram */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="hidden lg:block"
          >
            <AgentDiagram />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-ink-faint">
          Scroll
        </span>
        <div className="h-8 w-px bg-gradient-to-b from-ink-faint to-transparent" />
      </motion.div>
    </section>
  );
}
