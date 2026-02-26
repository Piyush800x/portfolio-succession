"use client";

import SectionWrapper from "@/app/components/SectionWrapper";
import ResumeDownloadButton from "@/app/components/ResumeDownloadButton";
import { socialLinks } from "@/app/lib/data";

export default function Contact() {
  return (
    <SectionWrapper id="contact" className="text-center">
      <div className="max-w-2xl mx-auto">
        {/* Gold divider */}
        <div
          className="mx-auto mb-12 h-[1px] w-16"
          style={{
            background:
              "linear-gradient(90deg, transparent, var(--color-gold), transparent)",
          }}
        />

        <h2
          className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight mb-6"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          Get in Touch
        </h2>

        <p className="text-text-muted text-sm leading-relaxed mb-10 max-w-lg mx-auto">
          Open to opportunities, collaborations, and interesting conversations.
          Let&apos;s build something meaningful.
        </p>

        <a
          href={`mailto:${socialLinks.email}`}
          className="inline-block text-gold hover:text-gold-light tracking-[0.15em] text-sm transition-colors duration-500 gold-underline pb-1"
        >
          {socialLinks.email}
        </a>

        {/* Social links */}
        <div className="flex items-center justify-center gap-8 mt-10">
          {[
            { label: "GitHub", href: socialLinks.github },
            { label: "LinkedIn", href: socialLinks.linkedin },
            { label: "Medium", href: socialLinks.medium },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] tracking-[0.2em] uppercase text-text-dim hover:text-gold transition-colors duration-500"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Resume download button */}
        <div className="mt-14">
          <ResumeDownloadButton />
        </div>

        {/* Footer */}
        <div className="mt-24 pt-8 border-t border-border">
          <div className="flex items-center justify-center gap-6 mb-4">
            <span className="text-[10px] tracking-[0.2em] uppercase text-text-dim">
              Previous Versions
            </span>
            <a
              href="https://v1.piyushpaul.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] tracking-[0.2em] uppercase text-text-dim hover:text-gold transition-colors duration-500"
            >
              2022 — v1
            </a>
            <a
              href="https://v2.piyushpaul.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] tracking-[0.2em] uppercase text-text-dim hover:text-gold transition-colors duration-500"
            >
              2025 — v2
            </a>
          </div>
          <p className="text-[11px] tracking-[0.2em] uppercase text-text-dim">
            &copy; {new Date().getFullYear()} Piyush Paul. All rights reserved.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}
