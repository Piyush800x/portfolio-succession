"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import SectionWrapper from "@/app/components/SectionWrapper";
import SectionHeading from "@/app/components/SectionHeading";
import { projects } from "@/app/lib/data";

export default function Projects() {
  return (
    <SectionWrapper id="projects">
      <SectionHeading title="Selected Projects" subtitle="Case Studies" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {projects.map((project, i) => (
          <ProjectCard key={project.slug} project={project} index={i} />
        ))}
      </div>
    </SectionWrapper>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.8,
        delay: index * 0.15,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className="h-full"
    >
      <Link href={`/projects/${project.slug}`} className="block group h-full">
        <div className="relative bg-bg-card border border-border hover:border-border-gold rounded-sm p-8 md:p-10 transition-all duration-700 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(180,147,80,0.08)] h-full flex flex-col">
          {/* Category */}
          <div className="text-[10px] tracking-[0.25em] uppercase text-gold-muted mb-6 font-medium">
            {project.category}
          </div>

          {/* Title */}
          <h3
            className="text-xl md:text-2xl font-medium tracking-tight mb-3 text-text group-hover:text-gold transition-colors duration-500"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            {project.title}
          </h3>

          {/* Tagline */}
          <p className="text-text-muted text-sm leading-relaxed mb-8 flex-1">
            {project.tagline}
          </p>

          {/* Stack tags */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.stack.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="text-[9px] tracking-[0.15em] uppercase text-text-dim border border-border rounded-sm px-2 py-0.5"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between pt-6 border-t border-border">
            <span className="text-[11px] tracking-[0.15em] text-text-dim uppercase">
              {project.year}
            </span>
            <span className="text-[11px] tracking-[0.2em] text-gold-muted uppercase group-hover:text-gold transition-colors duration-500">
              View Case Study →
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
