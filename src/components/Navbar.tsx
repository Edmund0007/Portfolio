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
      className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none"
    >
      <div
        className={`px-6 py-3 rounded-full flex items-center justify-between gap-12 pointer-events-auto transition-all duration-500 max-w-xl w-full ${
          isScrolledPastHero
            ? "bg-black border border-white/20 shadow-2xl shadow-black/95"
            : "bg-black/40 backdrop-blur-md border border-white/10 shadow-lg shadow-black/40"
        }`}
      >
        {/* Logo / Initials */}
        <a href="#" className="font-bold text-sm tracking-[0.25em] text-white hover:text-orange-400 transition-colors">
          EA<span className="text-orange-500">.</span>
        </a>

        {/* Links */}
        <nav className="flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.target}
              onClick={(e) => handleNavClick(e, item.target)}
              className="text-xs font-mono tracking-wider text-white/60 hover:text-white transition-colors duration-200"
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
          className="text-[10px] font-mono tracking-[0.15em] uppercase px-4 py-2 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-300 hover:bg-orange-500 hover:text-black hover:border-orange-500 transition-all duration-300 flex items-center gap-1.5"
        >
          {/* Download icon */}
          <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3" />
          </svg>
          Resume
        </a>
      </div>
    </motion.header>
  );
}

