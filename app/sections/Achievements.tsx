"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";
import SectionWrapper from "@/app/components/SectionWrapper";
import SectionHeading from "@/app/components/SectionHeading";

const TOTAL_IMAGES = 9;
const AUTO_PLAY_INTERVAL = 4000;

const achievements = [
  {
    id: "hacktropica",
    event: "HackTropica 2K26",
    location: "Asansol Engineering College",
    team: "Team Aloo Siddo",
    date: "Apr 2026",
    logo: "/Hacktropica-logo-5.png",
    mlhLogo: "/mlh-logo-color.svg",
    prize: "₹10,000",
    rank: "1st Runners Up",
    projectName: "NeighbourNet",
    projectIcon: "📡",
    projectDescription: "A mesh networking application designed for scenarios where traditional internet infrastructure is unavailable — no towers, no signal. Enables device-to-device communication for emergencies and offline scenarios.",
    projectTags: ["Mesh Networking", "P2P Communication", "Offline-First", "Emergency Use"],
    devfolioUrl: "https://devfolio.co/projects/neighbournet-3d1f",
    journey: [
      { icon: "🔥", title: "The Spark", description: "Entered HackTropica 2K26 — our first offline MLH hackathon — with excitement but zero clarity. Three ideas, endless confusion." },
      { icon: "🧭", title: "Finding Direction", description: "Mentor Ronit Banerjee listened to every idea and gave honest feedback. We dropped everything except one — NeighbourNet." },
      { icon: "💡", title: "The Idea", description: "NeighbourNet: a mesh networking app for situations where internet is unavailable — no towers, no signal, just device-to-device communication." },
      { icon: "⚡", title: "The Grind", description: "Project ~85% complete near deadline. Mentor Narendra Nath Chatterjee validated the idea, sharpened the pitch, and refocused our priorities." },
      { icon: "🏆", title: "The Win", description: "Pulled an all-nighter, shifted focus from perfection to clarity, and presented NeighbourNet. Achieved 1st Runners Up." },
    ],
    teamMembers: ["Samiran Pal", "Tiasha Biswas", "Sudipta Ghorami", "Piyush Paul"],
    mentors: ["Ronit Banerjee", "Narendra Nath Chatterjee", "Imran Roshan", "Krishnendu Dasgupta", "Devesh Tulshyan", "Nanda Das"],
    takeaways: ["Confusion → Clarity → Execution → Win", "Power of mentorship in shaping direction", "Focus beats spreading across multiple ideas", "Pitching is as important as building"],
    imagePath: "/hacktropica/hacktropica_",
    imageCount: 9,
  },
  {
    id: "bot-to-agent",
    event: "MLH 8-Hour Sprint",
    location: "IEM Ashram Building",
    team: "Solo Sprint",
    date: "May 2026",
    logo: "/mlh-logo-color.svg",
    mlhLogo: "/mlh-logo-color.svg",
    prize: "Champion / Overall Winner",
    rank: "Overall Winner",
    projectName: "ARTA — Bot to Agent",
    projectIcon: "🤖",
    projectDescription: "An autonomous red team agent that automates the entire penetration testing pipeline — from reconnaissance and vulnerability analysis to exploit verification and PDF reporting.",
    projectTags: ["Cybersecurity", "AI Agents", "FastAPI", "Gemini 2.0 Flash"],
    githubUrl: "https://github.com/Piyush800x/arta",
    journey: [
      { icon: "⏱️", title: "The Challenge", description: "Faced with an 8-hour MLH sprint at IEM Ashram to build a functional AI-powered tool from scratch." },
      { icon: "🛡️", title: "The Vision", description: "Envisioned ARTA: an autonomous agent that could replace manual, tedious security audits with intelligent reasoning." },
      { icon: "⚙️", title: "The Build", description: "Developed a multi-agent system using Gemini 2.0 Flash to orchestrate Nmap scans and live NVD API lookups." },
      { icon: "📊", title: "The Output", description: "Implemented an automated Puppeteer-based reporting engine to generate professional security audits in seconds." },
      { icon: "🏆", title: "The Victory", description: "Successfully demoed a live autonomous scan against a Metasploitable target, securing the Overall Winner title." },
    ],
    teamMembers: ["Piyush Paul"],
    takeaways: ["8 hours is enough to build a complex agent pipeline", "Gemini 2.0 Flash's speed is a game-changer for live agents", "Safe sandboxing is critical for automated exploits", "Clear reporting makes technical tools accessible"],
    imagePath: "/bta/BTA",
    imageCount: 2,
  }
];

export default function Achievements() {
  return (
    <SectionWrapper id="achievements">
      <SectionHeading title="Achievements" subtitle="Milestones" />

      <div className="space-y-16 lg:space-y-24">
        {achievements.map((achievement) => (
          <AchievementCard key={achievement.id} achievement={achievement} />
        ))}
      </div>
    </SectionWrapper>
  );
}

function AchievementCard({ achievement }: { achievement: typeof achievements[0] }) {
  return (
    <div className="relative">
      <div className="bg-bg-card border border-border rounded-sm overflow-hidden">
        {/* Top Bar — Event Info */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between px-5 md:px-10 py-4 border-b border-border bg-bg-elevated/50 gap-4 sm:gap-0">
          <div className="flex items-center gap-4">
            <Image
              src={achievement.logo}
              alt="Event Logo"
              width={120}
              height={30}
              className="h-6 md:h-7 w-auto opacity-80"
            />
            {achievement.mlhLogo && achievement.logo !== achievement.mlhLogo && (
              <>
                <div className="w-[1px] h-5 bg-border" />
                <Image
                  src={achievement.mlhLogo}
                  alt="MLH Logo"
                  width={80}
                  height={30}
                  className="h-5 md:h-6 w-auto opacity-70"
                />
              </>
            )}
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[9px] tracking-[0.2em] uppercase text-gold-muted font-medium px-2 py-1 border border-border-gold rounded-sm bg-[rgba(180,147,80,0.05)]">
              🏆 {achievement.rank}
            </span>
          </div>
        </div>

        {/* Image Carousel */}
        <ImageCarousel path={achievement.imagePath} count={achievement.imageCount} />

        {/* Content */}
        <div className="px-6 md:px-10 py-8 md:py-10">
          {/* Title Row */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-8">
            <div>
              <div className="text-[10px] tracking-[0.25em] uppercase text-gold-muted mb-3 font-medium">
                {achievement.event} · {achievement.date}
              </div>
              <h3
                className="text-2xl md:text-3xl font-medium tracking-tight text-text mb-2"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                {achievement.event}
              </h3>
              <p className="text-sm text-text-muted">
                {achievement.location} · {achievement.team}
              </p>
            </div>
            {achievement.prize && (
              <div className="flex flex-row md:flex-col items-center md:items-end justify-between md:justify-start gap-4 md:gap-3 shrink-0 w-full md:w-auto pt-4 md:pt-0 border-t md:border-transparent border-border">
                <div className="text-left md:text-right">
                  <div className="text-[10px] tracking-[0.2em] uppercase text-text-dim mb-1">
                    Award
                  </div>
                  <div
                    className="text-lg text-gold font-medium"
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    {achievement.prize}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Project Description */}
          <div className="mb-10 p-6 rounded-sm border border-border bg-bg-elevated/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-[rgba(180,147,80,0.1)] flex items-center justify-center text-sm">
                {achievement.projectIcon}
              </div>
              <h4
                className="text-lg font-medium text-gold"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                {achievement.projectName}
              </h4>
            </div>
            <p className="text-sm text-text-muted leading-relaxed">
              {achievement.projectDescription}
            </p>
            <div className="flex flex-wrap gap-1.5 mt-4">
              {achievement.projectTags.map((tag) => (
                <span
                  key={tag}
                  className="text-[9px] tracking-[0.15em] uppercase text-text-dim border border-border rounded-sm px-2 py-0.5"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-8">
              {achievement.devfolioUrl ? (
                <a
                  href={achievement.devfolioUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-[10px] md:text-[11px] tracking-[0.2em] uppercase font-medium text-text bg-bg border border-border hover:border-border-gold transition-all duration-500 rounded-sm group hover:-translate-y-0.5 hover:shadow-[0_4px_20px_rgba(180,147,80,0.08)]"
                >
                  <span>View Project on Devfolio</span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gold-muted group-hover:text-gold transition-colors duration-500">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </a>
              ) : achievement.githubUrl ? (
                <a
                  href={achievement.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-[10px] md:text-[11px] tracking-[0.2em] uppercase font-medium text-text bg-bg border border-border hover:border-border-gold transition-all duration-500 rounded-sm group hover:-translate-y-0.5 hover:shadow-[0_4px_20px_rgba(180,147,80,0.08)]"
                >
                  <span>View Source on GitHub</span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gold-muted group-hover:text-gold transition-colors duration-500">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </a>
              ) : null}
            </div>
          </div>

          {/* Journey Timeline */}
          <div className="mb-10">
            <div className="text-[10px] tracking-[0.25em] uppercase text-gold-muted mb-6 font-medium">
              The Journey
            </div>
            <div className="space-y-0">
              {achievement.journey.map((step, i) => (
                <JourneyStep key={i} step={step} index={i} isLast={i === achievement.journey.length - 1} />
              ))}
            </div>
          </div>

          {/* Team & Mentors */}
          <div className={`grid grid-cols-1 ${achievement.mentors ? 'md:grid-cols-2' : ''} gap-8 pt-8 border-t border-border`}>
            {/* Team */}
            <div>
              <div className="text-[10px] tracking-[0.25em] uppercase text-gold-muted mb-4 font-medium">
                Team Members
              </div>
              <div className="flex flex-wrap gap-2">
                {achievement.teamMembers.map((member) => (
                  <span
                    key={member}
                    className="text-[11px] tracking-wide text-text-muted border border-border rounded-sm px-3 py-1.5 bg-bg-elevated/30"
                  >
                    {member}
                  </span>
                ))}
              </div>
            </div>

            {/* Mentors */}
            {achievement.mentors && (
              <div>
                <div className="text-[10px] tracking-[0.25em] uppercase text-gold-muted mb-4 font-medium">
                  Mentors & Guidance
                </div>
                <div className="flex flex-wrap gap-2">
                  {achievement.mentors.map((mentor) => (
                    <span
                      key={mentor}
                      className="text-[11px] tracking-wide text-text-muted border border-border rounded-sm px-3 py-1.5 bg-bg-elevated/30"
                    >
                      {mentor}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Key Takeaways */}
          <div className="mt-8 pt-8 border-t border-border">
            <div className="text-[10px] tracking-[0.25em] uppercase text-gold-muted mb-4 font-medium">
              Key Takeaways
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {achievement.takeaways.map((takeaway, i) => (
                <div
                  key={i}
                  className="text-[13px] text-text-dim leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-1.5 before:h-[1px] before:bg-gold-muted"
                >
                  {takeaway}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Image Carousel ── */
function ImageCarousel({ path, count }: { path: string; count: number }) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  const goTo = useCallback(
    (index: number) => {
      setDirection(index > current ? 1 : -1);
      setCurrent(index);
    },
    [current]
  );

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % count);
  }, [count]);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + count) % count);
  }, [count]);

  // Auto-play
  useEffect(() => {
    if (isHovered || !isInView) return;
    const interval = setInterval(next, AUTO_PLAY_INTERVAL);
    return () => clearInterval(interval);
  }, [isHovered, isInView, next]);

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? "-100%" : "100%",
      opacity: 0,
    }),
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
      className="relative aspect-video bg-bg-elevated overflow-hidden group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Images */}
      <AnimatePresence initial={false} custom={direction} mode="popLayout">
        <motion.div
          key={current}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "tween", duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
            opacity: { duration: 0.3 },
          }}
          className="absolute inset-0"
        >
          <Image
            src={`${path}${current + 1}.webp`}
            alt={`Achievement Photo ${current + 1}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 80vw, 1200px"
            priority={current === 0}
          />
        </motion.div>
      </AnimatePresence>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none z-10" />

      {/* Navigation Arrows */}
      <button
        onClick={prev}
        className="absolute left-2 md:left-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 md:w-10 md:h-10 rounded-full bg-black/30 backdrop-blur-sm border border-white/10 text-white hover:text-white hover:bg-black/50 transition-all duration-300 flex items-center justify-center opacity-100 md:opacity-0 md:group-hover:opacity-100 active:scale-95"
        aria-label="Previous image"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>
      <button
        onClick={next}
        className="absolute right-2 md:right-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 md:w-10 md:h-10 rounded-full bg-black/30 backdrop-blur-sm border border-white/10 text-white hover:text-white hover:bg-black/50 transition-all duration-300 flex items-center justify-center opacity-100 md:opacity-0 md:group-hover:opacity-100 active:scale-95"
        aria-label="Next image"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5">
        {Array.from({ length: count }).map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`transition-all duration-300 rounded-full ${
              i === current
                ? "w-6 h-1.5 bg-white"
                : "w-1.5 h-1.5 bg-white/40 hover:bg-white/70"
            }`}
            aria-label={`Go to image ${i + 1}`}
          />
        ))}
      </div>

      {/* Image Counter */}
      <div className="absolute top-4 right-4 z-20 text-[10px] tracking-[0.2em] text-white/70 bg-black/30 backdrop-blur-sm px-2.5 py-1 rounded-sm">
        {String(current + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
      </div>
    </motion.div>
  );
}

/* ── Journey Step ── */
function JourneyStep({
  step,
  index,
  isLast,
}: {
  step: (typeof achievements[0]["journey"])[0];
  index: number;
  isLast: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className="flex gap-4"
    >
      {/* Timeline */}
      <div className="flex flex-col items-center shrink-0">
        <div className="w-9 h-9 rounded-full bg-bg-elevated border border-border flex items-center justify-center text-sm">
          {step.icon}
        </div>
        {!isLast && (
          <div className="w-[1px] h-full min-h-[40px] bg-gradient-to-b from-border to-transparent" />
        )}
      </div>

      {/* Content */}
      <div className="pb-6">
        <h4 className="text-sm font-medium text-text mb-1">{step.title}</h4>
        <p className="text-[13px] text-text-dim leading-relaxed">
          {step.description}
        </p>
      </div>
    </motion.div>
  );
}
