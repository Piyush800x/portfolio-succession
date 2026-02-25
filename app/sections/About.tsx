"use client";

import SectionWrapper from "@/app/components/SectionWrapper";
import SectionHeading from "@/app/components/SectionHeading";
import { skills } from "@/app/lib/data";

export default function About() {
  return (
    <SectionWrapper id="about">
      <SectionHeading title="About" subtitle="Profile" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
        {/* Left column — statement */}
        <div className="lg:col-span-5">
          <p
            className="text-2xl md:text-3xl lg:text-4xl font-medium leading-snug tracking-tight text-text"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Building
            <span className="text-gold"> scalable systems</span> and
            <span className="text-gold"> modern applications</span> that solve real problems.
          </p>
        </div>

        {/* Right column — bio */}
        <div className="lg:col-span-7 space-y-6">
          <p className="text-text-muted leading-relaxed text-[15px]">
            A full-stack developer with a strong backend foundation, building
            production-grade web applications across diverse domains — from
            security tooling and astrology platforms to educational systems and
            developer utilities. Comfortable across the stack with Python, Java,
            Rust, Next.js, React, and multiple database systems.
          </p>
          <p className="text-text-muted leading-relaxed text-[15px]">
            Currently pursuing a B.Tech in Computer Science and Engineering at
            JIS College of Engineering, with a Diploma in CS already completed.
            Professional experience includes building backend APIs for influencer
            marketing platforms, and a growing portfolio of 27+ repositories and
            shipped products — including platforms trusted by thousands of users.
          </p>
          <p className="text-text-muted leading-relaxed text-[15px]">
            Currently deepening expertise in data structures, algorithms, and
            cybersecurity. Driven by a belief that great engineering is invisible
            — it just works. Every project approached with rigour, clarity, and
            a commitment to shipping systems that scale.
          </p>

          {/* Skills grid */}
          <div className="pt-8 mt-8 border-t border-border">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map((group) => (
                <div key={group.category}>
                  <div className="text-[10px] tracking-[0.25em] uppercase text-gold-muted mb-3 font-medium">
                    {group.category}
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="text-[11px] tracking-wide text-text-muted border border-border rounded-sm px-2 py-0.5"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
