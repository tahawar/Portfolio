'use client';

import { motion } from 'framer-motion';
import { experience } from '@/lib/data';

export function Work() {
  return (
    <section id="work" className="relative py-24 lg:py-32 border-t border-line">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-[11px] tracking-[0.2em] text-accent">03</span>
            <span className="h-px flex-1 max-w-12 bg-line" />
            <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-ink-dim">
              Experience
            </span>
          </div>
          <h2 className="section-heading max-w-3xl">
            Where I&apos;ve shipped
            <br />
            <span className="text-ink-muted">production AI.</span>
          </h2>
        </motion.div>

        <div className="space-y-6">
          {experience.map((job, i) => (
            <motion.article
              key={`${job.company}-${job.period}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group card-surface p-8 lg:p-10"
            >
              <div className="grid lg:grid-cols-[200px,1fr] gap-6 lg:gap-12">
                {/* Left rail: dates + status */}
                <div className="space-y-3">
                  <div className="font-mono text-[11px] tracking-[0.15em] text-ink-dim">
                    {job.period}
                  </div>
                  {job.current && (
                    <div className="inline-flex items-center gap-2 px-2 py-1 bg-accent/10 border border-accent/30">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                      <span className="font-mono text-[10px] tracking-wider text-accent">
                        CURRENT
                      </span>
                    </div>
                  )}
                  <div className="font-mono text-[11px] text-ink-faint">
                    {job.location}
                  </div>
                </div>

                {/* Right: content */}
                <div>
                  <h3 className="text-2xl lg:text-3xl font-medium tracking-tight mb-1">
                    {job.role}
                  </h3>
                  <p className="text-accent font-mono text-sm mb-5">
                    @ {job.company}
                  </p>
                  <p className="text-ink-muted leading-relaxed mb-6 max-w-2xl">
                    {job.summary}
                  </p>

                  <ul className="space-y-2.5 mb-7">
                    {job.bullets.map((bullet, j) => (
                      <li
                        key={j}
                        className="flex gap-3 text-[15px] text-ink-muted leading-relaxed"
                      >
                        <span className="font-mono text-[10px] text-accent mt-2 shrink-0">
                          {String(j + 1).padStart(2, '0')}
                        </span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {job.stack.map((tech) => (
                      <span key={tech} className="tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
