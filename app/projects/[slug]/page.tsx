"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { projects } from "@/app/lib/data";
import { notFound } from "next/navigation";

export default function ProjectPage() {
  const params = useParams();
  const slug = params.slug as string;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Back link */}
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        className="max-w-5xl mx-auto px-6 md:px-10 mb-16"
      >
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-[11px] tracking-[0.25em] uppercase text-text-muted hover:text-gold transition-colors duration-500"
        >
          <span>←</span>
          <span>Back to Projects</span>
        </Link>
      </motion.div>

      {/* Hero area */}
      <div className="max-w-5xl mx-auto px-6 md:px-10 mb-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[10px] tracking-[0.3em] uppercase text-gold-muted mb-6 font-medium"
        >
          {project.category} — {project.year}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium tracking-tight leading-[1.1] mb-8 text-text"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          {project.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-text-muted max-w-3xl leading-relaxed"
        >
          {project.tagline}
        </motion.p>

        {/* Gold divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="mt-12 h-[1px] w-full origin-left"
          style={{
            background:
              "linear-gradient(90deg, var(--color-gold), transparent 60%)",
          }}
        />
      </div>

      {/* Metadata row */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="max-w-5xl mx-auto px-6 md:px-10 mb-20"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-8 border-b border-border">
          <div>
            <div className="text-[10px] tracking-[0.25em] uppercase text-text-dim mb-2 font-medium">
              Role
            </div>
            <div className="text-sm text-text">{project.role}</div>
          </div>
          <div>
            <div className="text-[10px] tracking-[0.25em] uppercase text-text-dim mb-2 font-medium">
              Year
            </div>
            <div className="text-sm text-text">{project.year}</div>
          </div>
          <div>
            <div className="text-[10px] tracking-[0.25em] uppercase text-text-dim mb-2 font-medium">
              Stack
            </div>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="text-[10px] tracking-[0.15em] uppercase text-gold-muted border border-border-gold rounded-sm px-2.5 py-1 font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div>
            <div className="text-[10px] tracking-[0.25em] uppercase text-text-dim mb-2 font-medium">
              Links
            </div>
            <div className="flex flex-col gap-1.5">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gold hover:text-gold-light transition-colors duration-500"
                >
                  Live Site ↗
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-text-muted hover:text-gold transition-colors duration-500"
                >
                  Source Code ↗
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Case study body */}
      <div className="max-w-5xl mx-auto px-6 md:px-10 space-y-16 lg:space-y-20">
        {[
          { label: "The Challenge", content: project.challenge },
          { label: "The Approach", content: project.approach },
          { label: "The Outcome", content: project.outcome },
        ].map((section, i) => (
          <motion.div
            key={section.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.9 + i * 0.15,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16"
          >
            <div className="lg:col-span-4">
              <h3
                className="text-xl font-medium text-gold"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                {section.label}
              </h3>
            </div>
            <div className="lg:col-span-8">
              <p className="text-[15px] text-text-muted leading-[1.9]">
                {section.content}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom nav */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        className="max-w-5xl mx-auto px-6 md:px-10 mt-24 pt-8 border-t border-border"
      >
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-[11px] tracking-[0.25em] uppercase text-text-muted hover:text-gold transition-colors duration-500"
        >
          <span>←</span>
          <span>All Projects</span>
        </Link>
      </motion.div>
    </div>
  );
}
