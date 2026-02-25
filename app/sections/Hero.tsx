"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex items-center justify-center min-h-screen overflow-hidden px-6">
      {/* Subtle warm ambient light */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 45%, rgba(180, 147, 80, 0.05) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 lg:gap-20 max-w-6xl w-full">
        {/* Text Content — left side on desktop */}
        <div className="text-center md:text-left order-2 md:order-1 flex-1">
          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium tracking-tight leading-[1.1] mb-2 text-text"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            <span className="block">Piyush</span>
            <span className="block mt-1">Paul</span>
          </motion.h1>

          {/* Gold Underline */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.2, delay: 1.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="mx-auto md:mx-0 mt-6 mb-8 h-[1.5px] w-32 md:w-48 origin-left"
            style={{
              background:
                "linear-gradient(90deg, var(--color-gold), transparent)",
            }}
          />

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-sm md:text-base tracking-[0.18em] uppercase text-text-muted font-light"
          >
            Full-Stack Developer. Backend Engineer. Builder.
          </motion.p>
        </div>

        {/* Profile Image — right side on desktop, top on mobile */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          className="order-1 md:order-2 relative shrink-0 w-[200px] h-[200px] md:w-[260px] md:h-[260px] lg:w-[300px] lg:h-[300px]"
        >
          {/* Gold ring glow */}
          <div
            className="absolute inset-[-4px] rounded-full"
            style={{
              background:
                "linear-gradient(135deg, var(--color-gold), rgba(180, 147, 80, 0.25), var(--color-gold))",
              opacity: 0.6,
            }}
          />
          {/* Inner background to create ring effect */}
          <div
            className="absolute inset-[2px] rounded-full"
            style={{ background: "var(--color-bg)" }}
          />
          {/* Profile photo */}
          <div
            className="relative w-full h-full rounded-full overflow-hidden"
            style={{ boxShadow: "0 8px 40px rgba(180, 147, 80, 0.12)" }}
          >
            <Image
              src="/profile.jpeg"
              alt="Piyush Paul"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 200px, (max-width: 1024px) 260px, 300px"
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 3 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-3"
        >
          <span className="text-[10px] tracking-[0.3em] uppercase text-text-dim">
            Scroll
          </span>
          <div className="w-[1px] h-8 bg-gradient-to-b from-text-dim to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
