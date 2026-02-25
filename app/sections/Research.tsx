"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionWrapper from "@/app/components/SectionWrapper";
import SectionHeading from "@/app/components/SectionHeading";
import { research } from "@/app/lib/data";

export default function Research() {
  return (
    <SectionWrapper id="research">
      <SectionHeading title="Research & Lab" subtitle="Technical Writing" />

      {/* Table header */}
      <div className="hidden md:grid grid-cols-12 gap-4 pb-4 mb-2 border-b border-border text-[10px] tracking-[0.25em] uppercase text-text-dim font-medium">
        <div className="col-span-2">Date</div>
        <div className="col-span-7">Title</div>
        <div className="col-span-3 text-right">Category</div>
      </div>

      {/* Entries */}
      <div className="divide-y divide-border">
        {research.map((entry, i) => (
          <ResearchRow key={i} entry={entry} index={i} />
        ))}
      </div>
    </SectionWrapper>
  );
}

function ResearchRow({
  entry,
  index,
}: {
  entry: (typeof research)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 15 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className="group cursor-pointer py-6 md:grid md:grid-cols-12 md:gap-4 md:items-center hover:bg-bg-elevated/60 transition-colors duration-500 -mx-4 px-4 rounded-sm"
    >
      {/* Date */}
      <div className="md:col-span-2 text-[12px] tracking-wider text-text-dim font-mono mb-2 md:mb-0">
        {entry.date}
      </div>

      {/* Title & Description */}
      <div className="md:col-span-7">
        <h4 className="text-[15px] font-medium text-text group-hover:text-gold transition-colors duration-500 mb-1">
          {entry.title}
        </h4>
        <p className="text-[13px] text-text-dim leading-relaxed hidden lg:block">
          {entry.description}
        </p>
      </div>

      {/* Category */}
      <div className="md:col-span-3 md:text-right mt-2 md:mt-0">
        <span className="inline-block text-[10px] tracking-[0.2em] uppercase text-gold-muted border border-border-gold rounded-sm px-3 py-1 font-medium">
          {entry.category}
        </span>
      </div>
    </motion.div>
  );
}
