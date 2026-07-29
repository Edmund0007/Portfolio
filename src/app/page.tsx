"use client";

import React, { useRef } from "react";
import { useScroll } from "framer-motion";
import Navbar from "@/components/Navbar";
import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import Projects from "@/components/Projects";
import ResumeDetails from "@/components/ResumeDetails";
import GithubCalendarSection from "@/components/GithubCalendarSection";
import AboutContact from "@/components/AboutContact";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress of the scrollytelling section (500vh scroll depth)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <div className="bg-[#070708] min-h-screen text-white font-sans selection:bg-orange-500 selection:text-black">
      {/* Header Navigation */}
      <Navbar />

      {/* Hero Section: Sticky Canvas + Parallax Text Overlay */}
      <div ref={containerRef} className="relative h-[500vh] w-full bg-[#070708]">
        <ScrollyCanvas scrollYProgress={scrollYProgress} />
        <Overlay scrollYProgress={scrollYProgress} />
      </div>

      {/* Projects Showcase Section */}
      <div id="work">
        <Projects />
      </div>

      {/* Resume Details Section (Education, Skills, Certifications, etc.) */}
      <div id="about">
        <ResumeDetails />
      </div>

      {/* GitHub Open Source Contributions & Activity Section */}
      <GithubCalendarSection />

      {/* About & Contact Footer Section */}
      <AboutContact />
    </div>
  );
}
