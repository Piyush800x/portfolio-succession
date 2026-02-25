"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionWrapper from "@/app/components/SectionWrapper";
import SectionHeading from "@/app/components/SectionHeading";
import { experience } from "@/app/lib/data";

export default function Experience() {
  return (
    <SectionWrapper id="experience">
      <SectionHeading title="Experience" subtitle="Professional" />

      <div className="space-y-6">
        {experience.map((entry, i) => (
          <ExperienceCard key={i} entry={entry} index={i} />
        ))}
      </div>
    </SectionWrapper>
  );
}

function ExperienceCard({
  entry,
  index,
}: {
  entry: (typeof experience)[0];
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
        delay: index * 0.12,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      <div className="bg-bg-card border border-border rounded-sm p-8 md:p-10 hover:border-border-gold transition-colors duration-700">
        {/* Period */}
        <div className="text-[10px] tracking-[0.25em] uppercase text-gold-muted mb-4 font-medium">
          {entry.period}
        </div>

        {/* Role */}
        <h3
          className="text-xl md:text-2xl font-medium tracking-tight text-gold mb-1"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          {entry.role}
        </h3>

        {/* Company */}
        <p className="text-sm text-text-muted mb-5">{entry.company}</p>

        {/* Description */}
        <p className="text-sm text-text-muted leading-relaxed mb-5">
          {entry.description}
        </p>

        {/* Highlights */}
        <ul className="space-y-2">
          {entry.highlights.map((h, j) => (
            <li
              key={j}
              className="text-[13px] text-text-dim leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-1.5 before:h-[1px] before:bg-gold-muted"
            >
              {h}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
