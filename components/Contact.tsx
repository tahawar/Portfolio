'use client';

import { motion } from 'framer-motion';
import { profile } from '@/lib/data';

export function Contact() {
  return (
    <section id="contact" className="relative py-24 lg:py-40 border-t border-line overflow-hidden">
      {/* Background accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 60% at 50% 100%, rgba(59, 130, 246, 0.08), transparent)',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <span className="font-mono text-[11px] tracking-[0.2em] text-accent">07</span>
            <span className="h-px flex-1 max-w-12 bg-line" />
            <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-ink-dim">
              Contact
            </span>
          </div>

          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight balance mb-12 leading-[1]"
              style={{ letterSpacing: '-0.04em' }}>
            Let&apos;s build
            <br />
            <span className="text-ink-muted">something real.</span>
          </h2>

          <p className="text-xl text-ink-muted max-w-2xl mb-12 leading-relaxed">
            I&apos;m open to AI/ML engineering roles, agentic AI consulting, and
            collaborations on production GenAI systems. The fastest way to reach me is
            email.
          </p>

          <div className="grid md:grid-cols-2 gap-px bg-line/40 max-w-3xl">
            <a
              href={`mailto:${profile.email}`}
              className="group bg-bg-card p-8 hover:bg-bg-hover transition-all"
            >
              <span className="mono-label">Email</span>
              <p className="mt-3 text-xl font-medium group-hover:text-accent transition-colors break-all">
                {profile.email}
              </p>
              <span className="mt-4 inline-flex items-center gap-1 font-mono text-[11px] text-ink-faint group-hover:text-accent">
                Send a message
                <span className="transition-transform group-hover:translate-x-0.5">→</span>
              </span>
            </a>

            <a
              href={profile.links.cv}
              download
              className="group bg-bg-card p-8 hover:bg-bg-hover transition-all"
            >
              <span className="mono-label">Resume</span>
              <p className="mt-3 text-xl font-medium group-hover:text-accent transition-colors">
                Download CV
              </p>
              <span className="mt-4 inline-flex items-center gap-1 font-mono text-[11px] text-ink-faint group-hover:text-accent">
                PDF · 2 pages
                <span className="transition-transform group-hover:translate-y-0.5">↓</span>
              </span>
            </a>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3">
            <a
              href={profile.links.github}
              target="_blank"
              rel="noopener"
              className="font-mono text-sm text-ink-muted hover:text-ink link-underline"
            >
              github / tahawar
            </a>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noopener"
              className="font-mono text-sm text-ink-muted hover:text-ink link-underline"
            >
              linkedin / tahawar-ihsan
            </a>
            <a
              href={profile.links.twitter}
              target="_blank"
              rel="noopener"
              className="font-mono text-sm text-ink-muted hover:text-ink link-underline"
            >
              x / @tahawarihsan
            </a>
            <a
              href={profile.links.medium}
              target="_blank"
              rel="noopener"
              className="font-mono text-sm text-ink-muted hover:text-ink link-underline"
            >
              medium / @tahawarihsan
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
