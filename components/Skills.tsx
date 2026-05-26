'use client';

import { motion } from 'framer-motion';
import { skills } from '@/lib/data';

export function Skills() {
  return (
    <section id="skills" className="relative py-24 lg:py-32 border-t border-line">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-[11px] tracking-[0.2em] text-accent">05</span>
            <span className="h-px flex-1 max-w-12 bg-line" />
            <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-ink-dim">
              Stack
            </span>
          </div>
          <h2 className="section-heading max-w-3xl">
            Tools I reach for
            <br />
            <span className="text-ink-muted">daily.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-line/40">
          {skills.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.04 }}
              className="bg-bg-card p-6 hover:bg-bg-hover transition-all"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="font-mono text-[10px] tracking-[0.15em] text-accent">
                  /{String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="font-mono text-[13px] tracking-wider uppercase text-ink">
                  {group.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="tag">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
