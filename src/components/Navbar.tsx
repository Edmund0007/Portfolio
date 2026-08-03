"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const navItems = [
    { label: "Work", target: "#designs-that-speak" },
    { label: "About", target: "#about" },
    { label: "Contact", target: "#contact" },
  ];
  const [isScrolledPastHero, setIsScrolledPastHero] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const el = document.getElementById("designs-that-speak");
      if (el) {
        const rect = el.getBoundingClientRect();
        // Keep transparent glass look from Home through "Designs that speak" section.
        // Switch to solid black ONLY after scrolling down past the bottom of "Designs that speak" section (rect.bottom <= 80).
        setIsScrolledPastHero(rect.bottom <= 80);
      } else {
        setIsScrolledPastHero(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    // Check after short delay for dynamically mounted DOM elements
    const timer = setTimeout(handleScroll, 300);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    e.preventDefault();
    const selector = target.startsWith("#") ? target.slice(1) : target;
    const el = document.getElementById(selector);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-3 sm:top-6 left-0 right-0 z-50 flex justify-center px-2 sm:px-4 pointer-events-none"
    >
      <div
        className={`px-3 sm:px-6 py-2 sm:py-3 rounded-full flex items-center justify-between gap-2 sm:gap-6 md:gap-12 pointer-events-auto transition-all duration-500 max-w-[calc(100vw-1rem)] sm:max-w-xl w-full ${
          isScrolledPastHero
            ? "bg-black/95 border border-white/20 shadow-2xl shadow-black/95"
            : "bg-black/40 backdrop-blur-md border border-white/10 shadow-lg shadow-black/40"
        }`}
      >
        {/* Logo / Initials */}
        <a href="#" className="font-bold text-[11px] sm:text-sm tracking-[0.18em] sm:tracking-[0.25em] text-white hover:text-orange-400 transition-colors shrink-0">
          EA<span className="text-orange-500">.</span>
        </a>

        {/* Links */}
        <nav className="flex items-center gap-2 sm:gap-6">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.target}
              onClick={(e) => handleNavClick(e, item.target)}
              className="text-[10px] sm:text-xs font-mono tracking-wider text-white/70 hover:text-white transition-colors duration-200"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Action Button — downloads resume PDF */}
        <a
          href="/resume.pdf"
          download="Edmund_Augustine_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[8.5px] sm:text-[10px] font-mono tracking-[0.08em] sm:tracking-[0.15em] uppercase px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-300 hover:bg-orange-500 hover:text-black hover:border-orange-500 transition-all duration-300 flex items-center gap-1 sm:gap-1.5 shrink-0"
        >
          {/* Download icon */}
          <svg xmlns="http://www.w3.org/2000/svg" className="w-2.5 h-2.5 sm:w-3 sm:h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3" />
          </svg>
          <span>Resume</span>
        </a>
      </div>
    </motion.header>
  );
}

