"use client";

import { motion } from "framer-motion";

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

      <div className="relative z-10 text-center max-w-4xl">
        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-medium tracking-tight leading-[1.1] mb-2 text-text"
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
          className="mx-auto mt-6 mb-8 h-[1.5px] w-32 md:w-48 origin-center"
          style={{
            background:
              "linear-gradient(90deg, transparent, var(--color-gold), transparent)",
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

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 3 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
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
      </div>
    </section>
  );
}
