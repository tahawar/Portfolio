'use client';

import { motion } from 'framer-motion';
import { education, certifications } from '@/lib/data';

export function Education() {
  return (
    <section id="education" className="relative py-24 lg:py-32 border-t border-line">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-[11px] tracking-[0.2em] text-accent">06</span>
            <span className="h-px flex-1 max-w-12 bg-line" />
            <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-ink-dim">
              Credentials
            </span>
          </div>
          <h2 className="section-heading max-w-3xl">
            Education &amp;
            <br />
            <span className="text-ink-muted">certifications.</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-px bg-line/40">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-bg-card p-8"
          >
            <span className="mono-label mb-6 block">Degree</span>
            {education.map((edu) => (
              <div key={edu.degree}>
                <h3 className="text-xl font-medium mb-2">{edu.degree}</h3>
                <p className="text-accent text-sm font-mono mb-3">{edu.school}</p>
                <div className="flex gap-4 text-sm text-ink-muted">
                  <span>{edu.location}</span>
                  <span>·</span>
                  <span className="font-mono">{edu.period}</span>
                </div>
                <p className="mt-4 text-sm text-ink-dim">{edu.note}</p>
              </div>
            ))}
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-bg-card p-8"
          >
            <span className="mono-label mb-6 block">Certifications</span>
            <ul className="space-y-5">
              {certifications.map((cert) => (
                <li key={cert.name}>
                  {cert.link ? (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener"
                      className="group block"
                    >
                      <h4 className="text-[15px] font-medium group-hover:text-accent transition-colors">
                        {cert.name}
                        <span className="ml-2 font-mono text-[10px] text-ink-faint group-hover:text-accent">
                          ↗
                        </span>
                      </h4>
                      <p className="text-sm text-ink-muted mt-0.5">{cert.issuer}</p>
                    </a>
                  ) : (
                    <div>
                      <h4 className="text-[15px] font-medium">{cert.name}</h4>
                      <p className="text-sm text-ink-muted mt-0.5">{cert.issuer}</p>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
