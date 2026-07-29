"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, MotionValue, useTransform } from "framer-motion";

interface OverlayProps {
  scrollYProgress: MotionValue<number>;
}

export default function Overlay({ scrollYProgress }: OverlayProps) {
  const roles = [
    "Graphic Designer",
    "3D Artist",
    "UI/UX Designer",
    "Content Creator",
    "Interactive Developer",
  ];
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2400);
    return () => clearInterval(interval);
  }, [roles.length]);

  // ─── Section 1: 0% → 12% (Left side hero, fades out quickly as user scrolls) ─
  const op1 = useTransform(scrollYProgress, [0, 0.04, 0.12], [1, 1, 0]);
  const y1  = useTransform(scrollYProgress, [0, 0.04, 0.12], [0, -20, -40]);

  // ─── Section 2: 20% → 50% (Specialization) ─────────────────────────────────
  const op2 = useTransform(scrollYProgress, [0.20, 0.28, 0.42, 0.50], [0, 1, 1, 0]);
  const y2  = useTransform(scrollYProgress, [0.20, 0.28, 0.42, 0.50], [40, 0, 0, -40]);

  // ─── Section 3: 58% → 88% (Process) ────────────────────────────────────────
  const op3 = useTransform(scrollYProgress, [0.58, 0.66, 0.80, 0.88], [0, 1, 1, 0]);
  const y3  = useTransform(scrollYProgress, [0.58, 0.66, 0.80, 0.88], [40, 0, 0, -40]);

  return (
    /*
     * Single sticky container — everything lives inside one sticky div.
     * Sections are absolute-positioned inside this container so they never
     * stack DOM layers and can never bleed into each other.
     */
    <div className="sticky top-0 h-screen w-full pointer-events-none z-10">

      {/* ── SECTION 1 · Left side ──────────────────────────────────────────── */}
      <motion.div
        style={{ opacity: op1, y: y1 }}
        className="absolute inset-0 flex flex-col justify-center
                   items-start px-4 sm:px-6 md:px-16 lg:px-20 text-left"
      >
        <div className="max-w-full sm:max-w-[600px] md:max-w-[760px] lg:max-w-[920px]">
          <span className="font-mono text-[10px] sm:text-xs md:text-sm tracking-[0.2em] uppercase text-orange-400 font-bold mb-1.5 sm:mb-3 block">
            HELLO, IT&apos;S ME
          </span>
          <h1 className="text-xl sm:text-4xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
            EDMUND<br />AUGUSTINE
          </h1>

          {/* Animated Role Line: "I'm a [Role]" — Strictly Single Line Alignment */}
          <div className="mt-1.5 sm:mt-3 text-xs sm:text-xl md:text-3xl lg:text-4xl font-bold text-white flex items-baseline gap-1.5 sm:gap-3 whitespace-nowrap min-h-[28px] sm:min-h-[48px] relative">
            <span className="text-white/90 shrink-0 whitespace-nowrap drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">I&apos;m a</span>
            <div className="relative overflow-visible flex items-center whitespace-nowrap">
              <AnimatePresence mode="wait">
                <motion.span
                  key={roleIndex}
                  initial={{ x: 30, opacity: 0, scale: 0.92, filter: "blur(6px)" }}
                  animate={{ x: 0, opacity: 1, scale: 1, filter: "blur(0px)" }}
                  exit={{ x: -30, opacity: 0, scale: 0.92, filter: "blur(6px)" }}
                  transition={{
                    type: "spring",
                    stiffness: 320,
                    damping: 22,
                    mass: 0.7,
                  }}
                  className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400 font-black inline-block whitespace-nowrap leading-tight py-0.5 drop-shadow-[0_4px_20px_rgba(251,146,60,0.45)] drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)]"
                >
                  {roles[roleIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>

          <p className="mt-2 sm:mt-4 text-[11px] sm:text-xs md:text-sm font-light text-white/65 tracking-wide leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)] max-w-[280px] sm:max-w-md">
            I create visual experiences that communicate, inspire, and leave a lasting impact.
          </p>

          {/* Scroll indicator */}
          <div className="mt-5 sm:mt-8 flex flex-col items-start gap-1.5 sm:gap-2">
            <span className="font-mono text-[8px] sm:text-[9px] tracking-[0.2em] text-white/40 uppercase drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]">
              Scroll to begin
            </span>
            <div className="w-[16px] sm:w-[18px] h-[26px] sm:h-[30px] rounded-full border border-white/20 p-1 flex justify-center backdrop-blur-sm bg-black/20">
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="w-1 h-1.5 bg-orange-400 rounded-full"
              />
            </div>
          </div>
        </div>
      </motion.div>

      {/* ── SECTION 2 · Right side / Mobile Centered ───────────────────────── */}
      <motion.div
        style={{ opacity: op2, y: y2 }}
        className="absolute inset-0 flex flex-col justify-center
                   items-center sm:items-end px-4 sm:px-6 md:px-16 lg:px-20 text-center sm:text-right"
      >
        <div className="max-w-[290px] sm:max-w-[360px] lg:max-w-[410px] flex flex-col items-center sm:items-end">
          <span className="font-mono text-[9px] sm:text-[10px] md:text-xs tracking-[0.25em] uppercase
                           text-orange-400 mb-1.5 sm:mb-3 block">
            02 / SPECIALIZATION
          </span>
          <h2 className="text-lg sm:text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight
                         leading-tight text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
            I design and build
            <span className="block text-transparent bg-clip-text
                             bg-gradient-to-r from-amber-400 to-orange-500">
              interactive systems.
            </span>
          </h2>
          <p className="mt-2.5 sm:mt-5 text-[11px] sm:text-xs md:text-sm font-light text-white/65
                        leading-relaxed drop-shadow-[0_1px_6px_rgba(0,0,0,0.9)] max-w-[280px] sm:max-w-[360px]">
            Focused on the interface between user experience and digital
            platforms — responsive mobile apps, VR environments, and
            hardware prototypes.
          </p>
        </div>
      </motion.div>

      {/* ── SECTION 3 · Right side / Mobile Centered ───────────────────────── */}
      <motion.div
        style={{ opacity: op3, y: y3 }}
        className="absolute inset-0 flex flex-col justify-center
                   items-center sm:items-end px-4 sm:px-6 md:px-16 lg:px-20 text-center sm:text-right"
      >
        <div className="max-w-[290px] sm:max-w-[360px] lg:max-w-[410px] flex flex-col items-center sm:items-end">
          <span className="font-mono text-[9px] sm:text-[10px] md:text-xs tracking-[0.25em] uppercase
                           text-orange-400 mb-1.5 sm:mb-3 block">
            03 / PROCESS
          </span>
          <h2 className="text-lg sm:text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight
                         leading-tight text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
            Bringing creative ideas to
            <span className="block text-transparent bg-clip-text
                             bg-gradient-to-r from-orange-400 to-red-500
                             pb-1 sm:pb-3">
              physical &amp; digital reality.
            </span>
          </h2>
          <p className="mt-2.5 sm:mt-5 text-[11px] sm:text-xs md:text-sm font-light text-white/65
                        leading-relaxed drop-shadow-[0_1px_6px_rgba(0,0,0,0.9)] max-w-[280px] sm:max-w-[360px]">
            Combining vector animations, UI/UX mockups, and structured
            coding to produce engaging digital products and visual branding.
          </p>
        </div>
      </motion.div>

    </div>
  );
}
