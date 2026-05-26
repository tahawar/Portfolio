'use client';

import { motion } from 'framer-motion';
import { projects } from '@/lib/data';

export function Projects() {
  const enterprise = projects.filter((p) => p.category === 'enterprise');
  const personal = projects.filter((p) => p.category !== 'enterprise');

  return (
    <section id="projects" className="relative py-24 lg:py-32 border-t border-line">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-[11px] tracking-[0.2em] text-accent">04</span>
            <span className="h-px flex-1 max-w-12 bg-line" />
            <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-ink-dim">
              Selected Work
            </span>
          </div>
          <h2 className="section-heading max-w-3xl">
            Production systems.
            <br />
            <span className="text-ink-muted">Real customers.</span>
          </h2>
        </motion.div>

        {/* Enterprise projects */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="mono-label">Enterprise</span>
            <span className="h-px flex-1 bg-line" />
          </div>

          <div className="grid md:grid-cols-2 gap-px bg-line/40">
            {enterprise.map((project, i) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group relative bg-bg-card p-8 hover:bg-bg-hover transition-all"
              >
                {/* Featured marker */}
                {project.featured && (
                  <div className="absolute top-8 right-8">
                    <span className="font-mono text-[10px] tracking-[0.15em] text-accent">
                      ★ FEATURED
                    </span>
                  </div>
                )}

                <div className="flex items-start justify-between mb-4">
                  <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-ink-faint">
                    {project.company}
                  </span>
                </div>

                <h3 className="text-2xl font-medium tracking-tight mb-3 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>

                <p className="text-ink-muted text-[15px] leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.stack.map((tech) => (
                    <span key={tech} className="tag">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="pt-4 border-t border-line">
                  <span className="font-mono text-[11px] text-ink-faint">
                    Enterprise project — case study coming soon
                  </span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* Personal & Academic */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <span className="mono-label">Open Source &amp; Academic</span>
            <span className="h-px flex-1 bg-line" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-line/40">
            {personal.map((project, i) => (
              <motion.a
                key={project.title}
                href={project.link?.href || '#'}
                target={project.link ? '_blank' : undefined}
                rel="noopener"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group relative bg-bg-card p-6 hover:bg-bg-hover transition-all"
              >
                <h3 className="text-lg font-medium mb-3 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>

                <p className="text-ink-muted text-sm leading-relaxed mb-5 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.stack.slice(0, 4).map((tech) => (
                    <span key={tech} className="tag !text-[10px]">
                      {tech}
                    </span>
                  ))}
                </div>

                {project.link && (
                  <span className="font-mono text-[11px] text-accent inline-flex items-center gap-1">
                    {project.link.label}
                    <span className="transition-transform group-hover:translate-x-0.5">→</span>
                  </span>
                )}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
