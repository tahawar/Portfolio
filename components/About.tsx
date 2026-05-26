'use client';

import { motion } from 'framer-motion';
import { about, stats } from '@/lib/data';

export function About() {
  return (
    <section id="about" className="relative py-24 lg:py-32 border-t border-line">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-[11px] tracking-[0.2em] text-accent">02</span>
            <span className="h-px flex-1 max-w-12 bg-line" />
            <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-ink-dim">
              About
            </span>
          </div>
          <h2 className="section-heading max-w-3xl">
            Engineering AI that is reliable, auditable,
            <br />
            <span className="text-ink-muted">and cost-efficient.</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr,400px] gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6 text-lg text-ink-muted leading-relaxed max-w-2xl"
          >
            {about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-px bg-line/40"
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-bg flex items-baseline justify-between p-6 hover:bg-bg-card transition-colors"
              >
                <span className="font-display text-5xl font-light tracking-tight text-ink">
                  {stat.value}
                </span>
                <span className="font-mono text-[11px] tracking-[0.15em] uppercase text-ink-dim text-right">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
