"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X, Sparkles, Layers, Monitor, Maximize2, Palette, Box, Globe, ExternalLink, Film, Pause, Play, ChevronLeft, ChevronRight, LayoutGrid, Grid, List, Eye, SlidersHorizontal } from "lucide-react";

interface ProjectSegment {
  title: string;
  description: string;
}

interface ProjectDetails {
  concept?: string;
  strategy?: string;
  contentCreation?: string;
  environmentPhysics?: string;
  interactionsAudio?: string;
  execution?: string;
  presentation?: string;
  segments?: ProjectSegment[];
}

interface ProjectImage {
  url: string;
  caption: string;
  category?: string;
}

interface ProjectVideo {
  url: string;
  title: string;
  category?: string;
}

interface SocialLink {
  label: string;
  url: string;
  platform: "facebook" | "instagram" | "other";
}

interface Project {
  id: string;
  title: string;
  category: string;
  filterCategory: "3d" | "ui" | "web";
  description: string;
  details?: ProjectDetails;
  coverImage?: string;
  images?: ProjectImage[];
  videos?: ProjectVideo[];
  socialLinks?: SocialLink[];
  tags: string[];
  link: string;
}

const stackProjects = [
  {
    id: "15",
    title: "CHARACTER DESIGNING",
    category: "AI CHARACTER DESIGN & ANIMATION",
    subtitle: "43 AI character turnarounds, Sunday Drive & motion frames",
    image: "/projects/character-designing/character-designing-hero-cover.webp",
    projectIndex: 14,
  },
  {
    id: "14",
    title: "GRAPHICAL DESIGNS",
    category: "DIGITAL ART & ILLUSTRATION",
    subtitle: "STOREX streetwear graphics & digital artwork",
    image: "/projects/graphical-designs/storex-greek-statue-classical-art.webp",
    projectIndex: 13,
  },
  {
    id: "13",
    title: "POSTER DESIGNING",
    category: "GRAPHIC DESIGN & ADVERTISING",
    subtitle: "Storex Tech promotional campaign posters",
    image: "/projects/poster-designing/poster-designing-hero-cover.webp",
    projectIndex: 12,
  },
  {
    id: "12",
    title: "T SHIRT DESIGNING",
    category: "APPAREL & BRANDING",
    subtitle: "STOREX streetwear techpacks & graphics",
    image: "/projects/tshirt-designing/tshirt-designing-hero-cover.webp",
    projectIndex: 11,
  },
  {
    id: "05",
    title: "STOREX FASHION APP",
    category: "UI/UX DESIGN",
    subtitle: "Figma UI/UX fashion e-commerce prototype",
    image: "/projects/storex-app/storex-app-hero-cover.jpg",
    projectIndex: 4,
  },
  {
    id: "04",
    title: "FUTURISTIC MATCHATEA",
    category: "BRANDING & 3D",
    subtitle: "Brand identity & packaging system",
    image: "/projects/loolcondera/matcha-tea-box-set-hero.jpg",
    projectIndex: 3,
  },
  {
    id: "01",
    title: "INNOSPARK (CAFFISCALER)",
    category: "3D DESIGN",
    subtitle: "Precision 3D modeling & prototype",
    image: "/projects/innospark/3d-modeling/caffiscaler-hero-cover.webp",
    projectIndex: 0,
  },
  {
    id: "06",
    title: "TRAVEL APPLICATION UI",
    category: "UI/UX DESIGN",
    subtitle: "Trip exploration dashboards & XML UI",
    image: "/projects/travel-app/travel-app-hero-cover.jpg",
    projectIndex: 5,
  },
  {
    id: "02",
    title: "VR CRICKET GAME",
    category: "UNITY ENGINE VR",
    subtitle: "1st-person VR sports simulation",
    image: "/projects/vr-cricket/vr-cricket-stadium-hero.jpg",
    projectIndex: 1,
  },
  {
    id: "07",
    title: "RIDE ENERGY DRINK COMMERCIAL",
    category: "BRAND & MARKETING",
    subtitle: "Cargills RIDE Energy Drink promo campaign",
    image: "/projects/ride-commercial/page_01.png",
    projectIndex: 6,
  },
  {
    id: "08",
    title: "FIT FLEX MOBILE APP",
    category: "MOBILE APP UI DESIGN",
    subtitle: "33-frame Figma fitness UI & interactive video",
    image: "/projects/fit-flex/fit-flex-hero-cover.jpg",
    projectIndex: 7,
  },
  {
    id: "09",
    title: "SEHERA COLLECTION",
    category: "WEB E-COMMERCE",
    subtitle: "MERN stack luxury fashion portal",
    image: "/projects/sehera-collection/desktop-web/high-end-dressed.png",
    projectIndex: 8,
  },
];

const toolsList = [
  {
    num: "01",
    name: "PHOTOSHOP",
    description: "Image editing, compositing, and digital artwork.",
    glowColor: "#31A8FF",
    bgGradient: "from-[#001E36] to-[#003B66]",
    icon: (
      <svg viewBox="0 0 48 48" className="w-7 h-7 md:w-8 md:h-8">
        <rect width="48" height="48" rx="10" fill="#001E36" />
        <text x="14" y="32" fill="#31A8FF" fontSize="22" fontWeight="bold" fontFamily="sans-serif">Ps</text>
      </svg>
    ),
  },
  {
    num: "02",
    name: "ILLUSTRATOR",
    description: "Vector graphics, branding, and illustration.",
    glowColor: "#FF9A00",
    bgGradient: "from-[#330000] to-[#661A00]",
    icon: (
      <svg viewBox="0 0 48 48" className="w-7 h-7 md:w-8 md:h-8">
        <rect width="48" height="48" rx="10" fill="#330000" />
        <text x="14" y="32" fill="#FF9A00" fontSize="22" fontWeight="bold" fontFamily="sans-serif">Ai</text>
      </svg>
    ),
  },
  {
    num: "03",
    name: "INDESIGN",
    description: "Print layout, editorial design, and typography.",
    glowColor: "#FF3366",
    bgGradient: "from-[#2B0018] to-[#590033]",
    icon: (
      <svg viewBox="0 0 48 48" className="w-7 h-7 md:w-8 md:h-8">
        <rect width="48" height="48" rx="10" fill="#2B0018" />
        <text x="15" y="32" fill="#FF3366" fontSize="22" fontWeight="bold" fontFamily="sans-serif">Id</text>
      </svg>
    ),
  },
  {
    num: "04",
    name: "FIGMA",
    description: "UI/UX design, prototyping, and design systems.",
    glowColor: "#A259FF",
    bgGradient: "from-[#1A102F] to-[#3A1C66]",
    icon: (
      <svg viewBox="0 0 38 57" className="w-5 h-7">
        <path fill="#E24943" d="M19 19A9.5 9.5 0 1 1 19 0h9.5v19H19z" />
        <path fill="#A259FF" d="M9.5 28.5A9.5 9.5 0 0 1 19 19v19a9.5 9.5 0 0 1-9.5-9.5z" />
        <path fill="#F24E1E" d="M0 9.5A9.5 9.5 0 0 1 9.5 0H19v19H9.5A9.5 9.5 0 0 1 0 9.5z" />
        <path fill="#1ABCFE" d="M0 28.5A9.5 9.5 0 0 1 9.5 19H19v9.5A9.5 9.5 0 0 1 9.5 38 9.5 9.5 0 0 1 0 28.5z" />
        <path fill="#0ACF83" d="M0 47.5A9.5 9.5 0 0 1 9.5 38 9.5 9.5 0 0 1 19 47.5v9.5h-9.5A9.5 9.5 0 0 1 0 47.5z" />
      </svg>
    ),
  },
  {
    num: "05",
    name: "PREMIERE PRO",
    description: "Video editing, motion graphics, and post-production.",
    glowColor: "#9999FF",
    bgGradient: "from-[#00005B] to-[#1A1A8C]",
    icon: (
      <svg viewBox="0 0 48 48" className="w-7 h-7 md:w-8 md:h-8">
        <rect width="48" height="48" rx="10" fill="#00005B" />
        <text x="14" y="32" fill="#9999FF" fontSize="22" fontWeight="bold" fontFamily="sans-serif">Pr</text>
      </svg>
    ),
  },
  {
    num: "06",
    name: "AFTER EFFECTS",
    description: "Motion design, visual effects, and 2D animation.",
    glowColor: "#D99BFF",
    bgGradient: "from-[#1D003B] to-[#3B006B]",
    icon: (
      <svg viewBox="0 0 48 48" className="w-7 h-7 md:w-8 md:h-8">
        <rect width="48" height="48" rx="10" fill="#00005B" />
        <text x="13" y="32" fill="#D99BFF" fontSize="22" fontWeight="bold" fontFamily="sans-serif">Ae</text>
      </svg>
    ),
  },
  {
    num: "07",
    name: "BLENDER",
    description: "3D modeling, rendering, and scene physics animation.",
    glowColor: "#EA7600",
    bgGradient: "from-[#281400] to-[#5C2E00]",
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7 md:w-8 md:h-8" fill="none">
        <path d="M12.5 12a3.5 3.5 0 100 7 3.5 3.5 0 000-7z" fill="#E87D0D" />
        <circle cx="12.5" cy="15.5" r="1.5" fill="#225A9B" />
        <path d="M3 13.5L12 8l-2.5 5.5L3 13.5z" fill="#EA7600" />
        <path d="M17.5 7L13 12.5l5.5-2L17.5 7z" fill="#EA7600" />
      </svg>
    ),
  },
  {
    num: "08",
    name: "VS CODE",
    description: "Code editing, development, and customization.",
    glowColor: "#007ACC",
    bgGradient: "from-[#001A2C] to-[#003D66]",
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7 md:w-8 md:h-8" fill="none">
        <path d="M17.5 2.5L22 4.8v14.4l-4.5 2.3-9-8.5 9-8.5z" fill="#0065A9" />
        <path d="M17.5 2.5l-9.8 9 9.8 10V2.5z" fill="#007ACC" />
        <path d="M2 16.5l5.7-4.5L2 7.5v9z" fill="#1F9CF0" />
        <path d="M7.7 12L2 7.5l11.5-5 4 2.5L7.7 12z" fill="#0065A9" />
      </svg>
    ),
  },
  {
    num: "09",
    name: "ANDROID STUDIO",
    description: "Native mobile development, XML layouts, and Kotlin.",
    glowColor: "#3DDC84",
    bgGradient: "from-[#0A2316] to-[#164D31]",
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7 md:w-8 md:h-8" fill="#3DDC84">
        <path d="M6 18c0 .55.45 1 1 1h1v3c0 .55.45 1 1 1s1-.45 1-1v-3h4v3c0 .55.45 1 1 1s1-.45 1-1v-3h1c.55 0 1-.45 1-1V9H6v9zm2.5-7.5c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1zm7 0c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1zM15.53 2.16l1.3-1.3c.2-.2.2-.51 0-.71a.498.498 0 0 0-.7 0l-1.48 1.48C13.42 1.23 12.25 1 11 1c-1.25 0-2.42.23-3.65.63L5.87.15c-.2-.2-.51-.2-.71 0a.498.498 0 0 0 0 .7l1.3 1.3C4.54 3.4 3 5.56 3 8h16c0-2.44-1.54-4.6-3.47-5.84z" />
      </svg>
    ),
  },
  {
    num: "10",
    name: "UNITY ENGINE",
    description: "1st-person VR sports simulations & 3D physics.",
    glowColor: "#FFFFFF",
    bgGradient: "from-[#1A1A1A] to-[#333333]",
    icon: (
      <svg viewBox="0 0 100 100" className="w-7 h-7 md:w-8 md:h-8">
        <rect width="100" height="100" rx="18" fill="#000000" />
        <path
          fill="#FFFFFF"
          d="M50 16L22 32v36l28 16 28-16V32L50 16zm21 47.5L50 75.5l-21-12V39.5l21-12 21 12v24zm-21-30.8L35.5 41v18L50 67.3l14.5-8.3V41L50 32.7z"
        />
      </svg>
    ),
  },
  {
    num: "11",
    name: "UNREAL ENGINE",
    description: "Real-time 3D rendering, environments, and FX.",
    glowColor: "#E2E8F0",
    bgGradient: "from-[#141414] to-[#2E2E2E]",
    icon: (
      <svg viewBox="0 0 100 100" className="w-7 h-7 md:w-8 md:h-8">
        <circle cx="50" cy="50" r="48" fill="#000000" />
        <path
          fill="#FFFFFF"
          d="M26 22c6.5 4.5 15.5 0 15.5 0v24c0 6.5 3.5 10 8.5 10s8.5-3.5 8.5-10V22s9 4.5 15.5 0c-4.5 11.5-1.5 24-1.5 24 0 14.5-10 23.5-22.5 23.5S27.5 60.5 27.5 46c0 0 3-12.5-1.5-24z"
        />
      </svg>
    ),
  },
  {
    num: "12",
    name: "AUTODESK MAYA",
    description: "3D character modeling, rigging, and asset generation.",
    glowColor: "#06B6D4",
    bgGradient: "from-[#00252C] to-[#005463]",
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7 md:w-8 md:h-8" fill="#06B6D4">
        <path d="M3 5l4.5 7L12 5l4.5 7L21 5v14h-3.5V11L13.5 17h-3L6.5 11v8H3V5z" />
      </svg>
    ),
  },
  {
    num: "13",
    name: "MOHO ANIME STUDIO",
    description: "2D vector animation, skeletal rigging, and storytelling.",
    glowColor: "#FF1F1F",
    bgGradient: "from-[#330000] to-[#660000]",
    icon: (
      <svg viewBox="0 0 100 100" className="w-7 h-7 md:w-8 md:h-8">
        <circle cx="50" cy="50" r="48" fill="#FF1F1F" />
        <path
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="9"
          strokeLinecap="round"
          d="M26 34C32 46 36 60 44 60C52 60 52 42 60 42C68 42 68 58 75 58"
        />
        <circle cx="82" cy="58" r="4.5" fill="#FFFFFF" />
      </svg>
    ),
  },
  {
    num: "14",
    name: "CAPCUT",
    description: "Short-form promotional reels and video editing.",
    glowColor: "#F4F5F8",
    bgGradient: "from-[#1F2229] to-[#3A3F4C]",
    icon: (
      <svg viewBox="0 0 100 100" className="w-7 h-7 md:w-8 md:h-8">
        <rect width="100" height="100" rx="22" fill="#F4F5F8" />
        <path
          fill="#000000"
          d="M24 21c0-2.2 1.8-4 4-4h35c2.2 0 4 1.8 4 4v2.5L34.2 46.5H63c2.2 0 4 1.8 4 4v3c0 2.2-1.8 4-4 4H28c-2.2 0-4-1.8-4-4v-2.5l32.8-24H28c-2.2 0-4-1.8-4-4v-3zm52 0l-14 11V10l14 11zm-52 35l14-11v22l-14-11z"
        />
      </svg>
    ),
  },
];

interface DesignToolsArcProps {
  onExploreClick?: () => void;
}

// Interactive Semi-Circular Arc Tool Showcase Component (Image 2 Design)
function DesignToolsArc({ onExploreClick }: DesignToolsArcProps) {
  const [activeIndex, setActiveIndex] = useState<number>(3);
  const [isUserInteracting, setIsUserInteracting] = useState<boolean>(false);
  const [windowWidth, setWindowWidth] = useState<number>(1024);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isUserInteracting) return;
    const interval = setInterval(() => {
      if (typeof document !== "undefined" && document.hidden) return;
      setActiveIndex((prev) => (prev + 1) % toolsList.length);
    }, 3200);
    return () => clearInterval(interval);
  }, [isUserInteracting]);

  const activeTool = toolsList[activeIndex];
  const total = toolsList.length;

  const isMobile = windowWidth < 640;
  const isTablet = windowWidth >= 640 && windowWidth < 1024;
  const radiusX = isMobile ? Math.min(windowWidth * 0.38, 140) : isTablet ? 260 : 360;
  const radiusY = isMobile ? 115 : isTablet ? 160 : 210;

  return (
    <div className="mb-20 pb-16 relative flex flex-col items-center select-none border-b border-white/10">
      {/* Background Ambient Glow matching active tool color */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[500px] md:w-[650px] h-[250px] sm:h-[350px] md:h-[400px] rounded-full blur-[90px] md:blur-[130px] pointer-events-none transition-all duration-700 opacity-20"
        style={{ backgroundColor: activeTool.glowColor }}
      />

      {/* Semi-Circular Arch Container of Glowing Squircle Icons */}
      <div className="relative w-full max-w-5xl h-[340px] sm:h-[480px] md:h-[540px] flex items-center justify-center">
        {toolsList.map((tool, index) => {
          // Angle math: from -132deg (left bottom) to +132deg (right bottom)
          const angleDeg = -132 + index * (264 / (total - 1));
          const rad = (angleDeg * Math.PI) / 180;

          const x = Math.sin(rad) * radiusX;
          const y = -Math.cos(rad) * radiusY;

          const isActive = index === activeIndex;

          return (
            <motion.button
              key={tool.num}
              onClick={() => setActiveIndex(index)}
              onMouseEnter={() => {
                setIsUserInteracting(true);
                setActiveIndex(index);
              }}
              onMouseLeave={() => setIsUserInteracting(false)}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{
                x,
                y,
                scale: isActive ? 1.35 : 1,
                opacity: isActive ? 1 : 0.85,
              }}
              transition={{
                type: "spring",
                stiffness: 280,
                damping: 22,
              }}
              style={{
                boxShadow: isActive
                  ? `0 0 35px ${tool.glowColor}, 0 0 15px ${tool.glowColor}`
                  : `0 0 12px ${tool.glowColor}40`,
                borderColor: isActive ? tool.glowColor : "rgba(255, 255, 255, 0.18)",
              }}
              className={`absolute w-11 h-11 md:w-16 md:h-16 rounded-2xl md:rounded-[22px] bg-gradient-to-br ${tool.bgGradient} border flex items-center justify-center p-2 cursor-pointer transition-shadow duration-300 z-20 group`}
            >
              <div className="w-full h-full flex items-center justify-center transition-transform group-hover:scale-110">
                {tool.icon}
              </div>

              {/* Number Badge Pill on Active Icon */}
              {isActive && (
                <span
                  className="absolute -top-2 -right-2 px-1.5 py-0.5 rounded-full text-[9px] font-mono font-bold text-black shadow-lg"
                  style={{ backgroundColor: tool.glowColor }}
                >
                  {tool.num}
                </span>
              )}
            </motion.button>
          );
        })}

        {/* Center Content Box inside the Arch (Dead-Center Alignment) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center max-w-lg px-6 z-10 flex flex-col items-center">
          {/* Active Tool Index Pill */}
          <motion.div
            key={`badge-${activeIndex}`}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/15 text-[10px] font-mono tracking-[0.2em] uppercase text-white/60 mb-3"
          >
            <span
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ backgroundColor: activeTool.glowColor }}
            />
            <span>MY EXPERTISE • {activeTool.num} / 14</span>
          </motion.div>

          {/* Tool Title */}
          <AnimatePresence mode="wait">
            <motion.h3
              key={`title-${activeIndex}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="text-3xl md:text-5xl font-black tracking-tight text-white uppercase leading-tight drop-shadow-md"
            >
              {activeTool.name}
            </motion.h3>
          </AnimatePresence>

          {/* Tool Description */}
          <AnimatePresence mode="wait">
            <motion.p
              key={`desc-${activeIndex}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25, delay: 0.05 }}
              className="text-xs md:text-sm font-light text-white/70 mt-3 leading-relaxed max-w-sm md:max-w-md min-h-[40px]"
            >
              {activeTool.description}
            </motion.p>
          </AnimatePresence>

          {/* Action Pill Button — Switches to Grid View & Smooth Scrolls */}
          <motion.button
            onClick={() => {
              if (onExploreClick) {
                onExploreClick();
              } else {
                const el = document.getElementById("designs-that-speak");
                if (el) {
                  el.scrollIntoView({ behavior: "smooth" });
                }
              }
            }}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 px-7 py-2.5 rounded-full bg-white text-black font-bold font-mono text-xs uppercase tracking-wider hover:bg-orange-400 transition-colors shadow-2xl flex items-center gap-2 cursor-pointer"
          >
            <span>EXPLORE WORK</span>
            <span>→</span>
          </motion.button>
        </div>
      </div>
    </div>
  );
}

const projects: Project[] = [
  {
    id: "01",
    title: "INNOSPARK (CAFFISCALER)",
    category: "3D DESIGN & HARDWARE INTEGRATION",
    filterCategory: "3d",
    description: "Designed and developed an integrated smart coffee scale prototype (CAFFISCALER) focusing on precision dosing, modular 3D structural modeling, exploded CAD segments, product design, packaging dielines, and brand identity.",
    details: {
      concept: "Conceived an integrated smart coffee scale prototype (CAFFISCALER) engineered for ergonomic usability, precision dosing, and accessibility for barista and home coffee setups.",
      execution: "3D CAD modeling & segment breakdown assembly — engineered the modular cylindrical chassis, internal mounting disc, display housing cutouts, and upper dosing chamber in Blender.",
      environmentPhysics: "Constructed dynamic 3D viewport environment featuring particle-scattered coffee beans, custom glass storage canisters with cork stoppers, and ceramic espresso cup placement.",
      presentation: "Rendered photorealistic studio scene with warm ambient lighting, glass shaders, PBR texture mapping, and an active digital scale LCD weight readout (30.0 g).",
      segments: [
        {
          title: "Segment 01: Lower Housing & LCD Interface Cutout",
          description: "Precision 3D cylindrical housing featuring custom cutouts for the digital scale LCD weight telemetry (30.0 g display) and tactile control buttons."
        },
        {
          title: "Segment 02: Internal Support Rails & Mounting Key",
          description: "Guiding rails inside the lower shell with an interlocking key structure engineered to lock components securely into place without external screws."
        },
        {
          title: "Segment 03: Mounting Disc & Sensor Cable Pass-Throughs",
          description: "Central structural disc featuring dedicated rectangular pass-through slots for load-cell weight sensor cables and microcontroller wiring."
        },
        {
          title: "Segment 04: Upper Dosing Chamber & Internal Ribs",
          description: "Hollow cylindrical upper container reinforced with internal structural ribbing for high rigidity and consistent coffee bean flow."
        },
        {
          title: "Segment 05: Top Cap & Sealing Dome",
          description: "Ergonomically contoured top cap engineered for easy refilling, bean containment, and dust-proof sealing."
        },
        {
          title: "Segment 06: Environment & Bean Scattering Physics",
          description: "Dynamic 3D particle simulation of realistic coffee beans scattered across the base plane, complemented by custom glass canisters and a ceramic latte cup."
        },
        {
          title: "Segment 07: Photorealistic Shading & Studio Lighting",
          description: "High-end Cycles material setup with warm directional studio lighting, PBR coffee bean shaders, glass refractions, and illuminated LCD display."
        }
      ]
    },
    coverImage: "/projects/innospark/3d-modeling/caffiscaler-hero-cover.webp",
    videos: [
      {
        url: "/projects/innospark/videos/animation-cup.mp4",
        title: "Caffiscaler 3D Cup Motion & Dosing Animation",
        category: "Videos / 3D Animation"
      }
    ],
    images: [
      // --- FOLDER: 3D Modeling ---
      {
        url: "/projects/innospark/3d-modeling/photorealistic-3d-render.webp",
        caption: "Final Photorealistic 3D Render - Caffiscaler Smart Scale with Active 30.0g Display, Coffee Beans & Warm Studio Lighting",
        category: "3D Modeling / Photorealistic Render"
      },
      {
        url: "/projects/innospark/3d-modeling/exploded-segment-assembly.webp",
        caption: "3D Exploded Assembly View - Modular Structural Cylindrical Shell Segments, Internal Mounting Disc & Screen Cutouts",
        category: "3D Modeling / Exploded Assembly"
      },
      {
        url: "/projects/innospark/3d-modeling/exploded-front-housing.webp",
        caption: "3D Exploded View - Front Shell Housing, Button Cutouts & Curved Top Cap Alignment",
        category: "3D Modeling / Front Housing Exploded"
      },
      {
        url: "/projects/innospark/3d-modeling/exploded-internal-ribs.webp",
        caption: "3D Exploded View - Upper Dosing Chamber Ribs, Central Divider & Internal Mounting Key",
        category: "3D Modeling / Internal Ribs & Keys"
      },
      {
        url: "/projects/innospark/3d-modeling/exploded-mounting-plate-slots.webp",
        caption: "3D Exploded View - Mounting Plate Wire Pass-Through Slots & Internal Support Rails",
        category: "3D Modeling / Sensor & Cable Routing"
      },
      {
        url: "/projects/innospark/3d-modeling/3d-viewport-caffiscaler-scene.webp",
        caption: "3D Viewport Modeling Scene - Solid/Wireframe Mesh Setup of Caffiscaler Body, Coffee Bean Scatter & Storage Jars",
        category: "3D Modeling / Viewport Scene"
      },
      {
        url: "/projects/innospark/3d-modeling/caffiscaler-display-close-up.webp",
        caption: "Front Display & Base Alignment Close-Up - 30.0g LCD Scale Interface & Coffee Bean Particle Mesh Detail",
        category: "3D Modeling / Display Segment"
      },
      {
        url: "/projects/innospark/3d-modeling/top-chamber-perspective.webp",
        caption: "Top Chamber Perspective View - Upper Dosing Cylinder Geometry, Camera Angle & Surrounding Prop Composition",
        category: "3D Modeling / Upper Chamber"
      },

      // --- FOLDER: Product ---
      {
        url: "/projects/innospark/product/Cup Prototype.webp",
        caption: "Caffiscaler Dosing Cup Physical Prototype Concept & Mold Design",
        category: "Product / Cup Prototype"
      },
      {
        url: "/projects/innospark/product/cup1.webp",
        caption: "Caffiscaler Dosing Cup Side Profile & Ergonomic Lip Contour",
        category: "Product / Ergonomic Form"
      },
      {
        url: "/projects/innospark/product/cup2.webp",
        caption: "Dosing Cup Base Alignment & Scale Platform Interlocking Interface",
        category: "Product / Scale Base Fit"
      },
      {
        url: "/projects/innospark/product/cup 3.webp",
        caption: "Matte Finish Dosing Vessel Surface Texture & Material Spec",
        category: "Product / Material Surface"
      },
      {
        url: "/projects/innospark/product/cup 4.webp",
        caption: "Interior Volume Capacity & Bean Flow Chamber Profile",
        category: "Product / Volumetric Dosing"
      },

      // --- FOLDER: Package Designing ---
      {
        url: "/projects/innospark/package-designing/Box dieline FINISHED Package.webp",
        caption: "INNOSPARK Caffiscaler Full Finished Structural Box Packaging Design",
        category: "Package Designing / Finished Box"
      },
      {
        url: "/projects/innospark/package-designing/Box dieline Final.webp",
        caption: "Precision Packaging Dieline Vector Layout & Fold Crease Callouts",
        category: "Package Designing / Dieline Vector"
      },
      {
        url: "/projects/innospark/package-designing/Box dieline 01.webp",
        caption: "Initial Dieline Blueprint & Structural Dimension Spec",
        category: "Package Designing / Dieline Concept"
      },

      // --- FOLDER: Logos ---
      {
        url: "/projects/innospark/logos/3D logo.webp",
        caption: "3D Embossed INNOSPARK Brand Emblem with Metallic Finish",
        category: "Logos / 3D Emblem"
      },
      {
        url: "/projects/innospark/logos/Icon Logo.webp",
        caption: "High-Resolution Icon Brand Mark & Coffee Bean Emblem",
        category: "Logos / Icon Mark"
      },
      {
        url: "/projects/innospark/logos/Inno.webp",
        caption: "Primary INNOSPARK Wordmark & Brand Typography Identity",
        category: "Logos / Primary Logo"
      },
      {
        url: "/projects/innospark/logos/Rotated Logo.webp",
        caption: "Horizontal Brand Seal & Structural Badge",
        category: "Logos / Horizontal Variant"
      },
      {
        url: "/projects/innospark/logos/Sticker.webp",
        caption: "Brand Sticker Decal & Promotional Packaging Seal",
        category: "Logos / Sticker Badge"
      },
      {
        url: "/projects/innospark/logos/inno2.webp",
        caption: "INNOSPARK Dark Theme Vector Brand Emblem",
        category: "Logos / Dark Variant"
      },

      // --- FOLDER: Marketing ---
      {
        url: "/projects/innospark/marketing/flyer.webp",
        caption: "INNOSPARK Caffiscaler Official Product Launch Poster & Feature Breakdown Flyer",
        category: "Marketing / Product Flyer"
      },
    ],
    tags: ["3D Modeling", "Product Design", "Package Designing", "Logos & Branding", "Hardware Prototype"],
    link: "#",
  },
  {
    id: "02",
    title: "VR CRICKET GAME",
    category: "UNITY ENGINE IMMERSIVE INTERACTION",
    filterCategory: "3d",
    description: "Immersive 1st-person VR sports simulation built in Unity featuring physics tracking, 3D stadium assets, haptic controls, and spatial audio.",
    details: {
      environmentPhysics: "Built a 1st-person stadium environment in Unity with custom physics tracking and realistic 3D assets.",
      interactionsAudio: "Integrated reactive haptic feedback and 3D spatial audio to mimic realistic match dynamics.",
      execution: "Designed intuitive batting mechanics, ball trajectory interactions, and optimized render performance.",
    },
    coverImage: "/projects/vr-cricket/vr-cricket-stadium-hero.jpg",
    images: [
      {
        url: "/projects/vr-cricket/unity-batsman-perspective.jpg",
        caption: "1st-Person Batsman Crease Perspective & Pitch Alignment",
        category: "Gameplay View"
      },
      {
        url: "/projects/vr-cricket/unity-pitch-stadium-view.jpg",
        caption: "Full Stadium Environment & Fielders Alignment in Unity",
        category: "Stadium Environment"
      },
      {
        url: "/projects/vr-cricket/unity-player-controller-crease.jpg",
        caption: "PlayerController Physics Rig & Batting Interaction Gizmos",
        category: "Physics & Interaction"
      },
      {
        url: "/projects/vr-cricket/unity-aerial-pitch-overview.jpg",
        caption: "Aerial Overview of Outfield Fielders & NavMesh Placement",
        category: "Scene Architecture"
      },
      {
        url: "/projects/vr-cricket/unity-spatial-audio-gizmos.jpg",
        caption: "3D Spatial Audio Emitters & Ambient Stadium Sound Gizmos",
        category: "Audio & Interaction"
      },
      {
        url: "/projects/vr-cricket/unity-csharp-scripts-inspector.png",
        caption: "Unity C# Scripts & AnimationsController Inspector Settings",
        category: "Scripting & Architecture"
      },
      {
        url: "/projects/vr-cricket/unity-3d-stadium-mesh-model.png",
        caption: "3D Circular Stadium Mesh Model Top-Down Render",
        category: "3D Asset Modeling"
      },
      {
        url: "/projects/vr-cricket/unity-meta-xr-hands-rig.png",
        caption: "Meta XR Interaction Rig & Hand Controller Hierarchy",
        category: "VR Rigging & Controls"
      },
      {
        url: "/projects/vr-cricket/unity-scoreboard-manager-hierarchy.png",
        caption: "Scoreboard Billboard & Environment Manager Hierarchy",
        category: "UI & Environment Setup"
      },
    ],
    tags: ["Unity Engine", "C#", "VR Interaction", "3D Physics", "Spatial Audio"],
    link: "#",
  },
  {
    id: "03",
    title: "FLOWER BOUTIQUE MARKETING",
    category: "SOCIAL MEDIA MARKETING CAMPAIGN",
    filterCategory: "web",
    description: "Multi-format digital marketing campaign for Flower Boutique LK including feed posts, promotional reels, and commercial video direction.",
    details: {
      strategy: "Planned a multi-format social media campaign to boost brand awareness and engagement for Flower Boutique.",
      contentCreation: "Designed 3 feed posts (Instagram/Facebook), produced 2 short promotional reels, and directed 1 main commercial video.",
      execution: "Handled end-to-end creative direction, scriptwriting, visual styling, and video editing.",
    },
    coverImage: "/projects/flower-boutique/social-media-post-1-poster.jpg",
    images: [
      {
        url: "/projects/flower-boutique/social-media-post-1-poster.jpg",
        caption: "Social media post 1 - Whispering Floral Campaign Poster",
        category: "Social Media Post 1"
      },
      {
        url: "/projects/flower-boutique/social-media-post-1-newspaper.jpg",
        caption: "Social media post 1 - 'JUST PICK UP' Editorial Concept",
        category: "Social Media Post 1"
      },
      {
        url: "/projects/flower-boutique/social-media-post-1-bouquet.jpg",
        caption: "Social media post 1 - Signature Orchid Bouquet Showcase",
        category: "Social Media Post 1"
      },
      {
        url: "/projects/flower-boutique/social-media-post-2-poster.jpg",
        caption: "Social media post 2 - 'Always LOVE YOU DAD' Campaign Poster",
        category: "Social Media Post 2"
      },
      {
        url: "/projects/flower-boutique/social-media-post-2-father.jpg",
        caption: "Social media post 2 - 'My First Hero, My Dad' Portrait",
        category: "Social Media Post 2"
      },
      {
        url: "/projects/flower-boutique/social-media-post-2-gifting.jpg",
        caption: "Social media post 2 - Happy Father's Day Gifting Moment",
        category: "Social Media Post 2"
      },
    ],
    socialLinks: [
      {
        label: "Facebook Official Page",
        url: "https://www.facebook.com/share/19FDKpyhvB/",
        platform: "facebook"
      },
      {
        label: "Instagram - @flowerboutique.lk",
        url: "https://www.instagram.com/flowerboutique.lk?igsh=MWQ4czBjamZrYWcyYQ==",
        platform: "instagram"
      },
      {
        label: "Instagram - @the_wedding_boutique_lk",
        url: "https://www.instagram.com/the_wedding_boutique_lk?igsh=MWZnOGFxNHc4cXUwYQ==",
        platform: "instagram"
      },
    ],
    tags: ["Branding", "Video Production", "Marketing", "Social Media"],
    link: "https://www.facebook.com/share/19FDKpyhvB/",
  },
  {
    id: "04",
    title: "FUTURISTIC MATCHATEA BRAND",
    category: "LOOLCONDERA PACKAGE DESIGN",
    filterCategory: "ui",
    description: "Futuristic brand identity & packaging design system for LoolCondera Matcha Tea featuring custom vector graphics, packaging dielines, and realistic 3D mockups.",
    details: {
      concept: "Created a futuristic brand identity and packaging concept for LoolCondera Matcha Tea.",
      execution: "Designed custom vector graphics and packaging dielines in Adobe Illustrator.",
      presentation: "Applied textures, lighting, and realistic 3D mockups using Adobe Photoshop.",
    },
    coverImage: "/projects/loolcondera/matcha-tea-box-set-hero.jpg",
    images: [
      {
        url: "/projects/loolcondera/matcha-ceylon-boxes-3d.jpg",
        caption: "LoolCondera Ceylonese Matcha 3D Floating Tea Box Packaging Showcase",
        category: "3D Presentation"
      },
      {
        url: "/projects/loolcondera/open-box-mockup.jpg",
        caption: "Unboxing & Gift Box Mockup",
        category: "Product Experience"
      },
      {
        url: "/projects/loolcondera/closed-rigid-box.jpg",
        caption: "Closed Rigid Box Packaging Mockup",
        category: "Packaging Mockup"
      },
      {
        url: "/projects/loolcondera/logo-badge.png",
        caption: "Custom Vector Logo & Emblem Badge",
        category: "Brand Vector Graphics"
      },
      {
        url: "/projects/loolcondera/emblem-leaf-background.jpg",
        caption: "Brand Emblem & Botanical Background",
        category: "Visual Identity"
      },
      {
        url: "/projects/loolcondera/packaging-dieline.png",
        caption: "Packaging Dieline & Graphics Layout",
        category: "Dieline Design"
      },
      {
        url: "/projects/loolcondera/packaging-spec-layout.jpg",
        caption: "Packaging Specification & Material Callouts",
        category: "Technical Layout"
      },
      {
        url: "/projects/loolcondera/palette.jpg",
        caption: "Color Palette: Futuristic & Organic Fusion",
        category: "Color System"
      },
      {
        url: "/projects/loolcondera/palette-options-comparison.jpg",
        caption: "Brand Color Systems (Heritage vs Modern)",
        category: "Palette Options"
      },
      {
        url: "/projects/loolcondera/hand-drawn-sketch.jpg",
        caption: "Initial Concept Wireframe & Hand-Drawn Sketch",
        category: "Concept Sketch"
      },
      {
        url: "/projects/loolcondera/gold-embossed-seal.jpg",
        caption: "Gold Embossed Logo & Brand Stamp",
        category: "Brand Identity"
      },
      {
        url: "/projects/loolcondera/sinhala-packaging-layout.jpg",
        caption: "Sinhala Script Brand Packaging Variant",
        category: "Packaging Layout"
      },
      {
        url: "/projects/loolcondera/matcha-jar-vector.png",
        caption: "Matcha Jar Vector Illustration & Whisk",
        category: "Vector Graphics"
      },
      {
        url: "/projects/loolcondera/matcha-jar-seal.png",
        caption: "Circular Matcha Jar Brand Seal ('Since 1867')",
        category: "Emblem Badge"
      },
    ],
    tags: ["Illustrator", "Photoshop", "Brand Identity", "3D Mockups"],
    link: "#",
  },
  {
    id: "05",
    title: "STOREX FASHION APP",
    category: "UI/UX DESIGN & MOBILE PROTOTYPING",
    filterCategory: "ui",
    description: "Designed a high-fidelity fashion e-commerce mobile application (STOREX APP) in Figma, complete with 17 custom UI frames, interactive shopping workflows, and a full video motion walkthrough.",
    details: {
      concept: "Conceived an intuitive fashion e-commerce mobile application interface featuring curated apparel catalogs, personalized wishlist telemetry, interactive product customizer, and a seamless multi-step checkout experience.",
      execution: "Designed 17 high-resolution mobile UI frames in Figma utilizing modern typography tokens, subtle dark/light contrast aesthetics, vector icons, and interactive micro-animations.",
      presentation: "Produced a full video motion walkthrough demonstrating smooth screen transitions, interactive shopping bag management, and order confirmation flows.",
      segments: [
        {
          title: "Segment 01: Visual Direction & Mobile Layout Architecture",
          description: "Structured a high-contrast luxury UI theme tailored for mobile fashion retail, utilizing modern typography tokens and minimal grid architecture."
        },
        {
          title: "Segment 02: Interactive Shopping Flow & Catalog Architecture",
          description: "Designed product filtering, size/color selectors, wishlist management, and high-resolution clothing card components."
        },
        {
          title: "Segment 03: Checkout & Prototype Motion Walkthrough",
          description: "Engineered seamless multi-step checkout screens and produced an interactive video demonstration of the prototype."
        }
      ]
    },
    coverImage: "/projects/storex-app/storex-app-hero-cover.jpg",
    videos: [
      {
        url: "/projects/storex-app/videos/storex-app-demo.mp4",
        title: "Storex Mobile App Prototype & UI Interaction Walkthrough",
        category: "Videos / Mobile App Demo"
      }
    ],
    images: [
      {
        url: "/projects/storex-app/ui-screens/frame_01.png",
        caption: "Storex Fashion App - Welcome & Splash Screen",
        category: "UI Screens / Splash"
      },
      {
        url: "/projects/storex-app/ui-screens/frame_02.png",
        caption: "Storex Fashion App - Onboarding & Brand Introduction",
        category: "UI Screens / Onboarding"
      },
      {
        url: "/projects/storex-app/ui-screens/frame_03.png",
        caption: "Storex Fashion App - Main Home Feed & Featured Fashion Collections",
        category: "UI Screens / Home Feed"
      },
      {
        url: "/projects/storex-app/ui-screens/frame_04.png",
        caption: "Storex Fashion App - Trending Categories & Search Interface",
        category: "UI Screens / Search"
      },
      {
        url: "/projects/storex-app/ui-screens/frame_05.png",
        caption: "Storex Fashion App - Product Listing & Grid View",
        category: "UI Screens / Catalog"
      },
      {
        url: "/projects/storex-app/ui-screens/frame_06.png",
        caption: "Storex Fashion App - Filter & Sorting Options",
        category: "UI Screens / Filters"
      },
      {
        url: "/projects/storex-app/ui-screens/frame_07.png",
        caption: "Storex Fashion App - Detailed Product View & Size Selection",
        category: "UI Screens / Product Details"
      },
      {
        url: "/projects/storex-app/ui-screens/frame_08.png",
        caption: "Storex Fashion App - Color Variants & Fabric Specifications",
        category: "UI Screens / Product Specs"
      },
      {
        url: "/projects/storex-app/ui-screens/frame_09.png",
        caption: "Storex Fashion App - Shopping Bag & Cart Telemetry",
        category: "UI Screens / Shopping Cart"
      },
      {
        url: "/projects/storex-app/ui-screens/frame_10.png",
        caption: "Storex Fashion App - Checkout & Shipping Address Details",
        category: "UI Screens / Checkout"
      },
      {
        url: "/projects/storex-app/ui-screens/frame_11.png",
        caption: "Storex Fashion App - Payment Gateway & Card Verification",
        category: "UI Screens / Payment"
      },
      {
        url: "/projects/storex-app/ui-screens/frame_12.png",
        caption: "Storex Fashion App - Order Confirmation & Delivery Tracker",
        category: "UI Screens / Order Status"
      },
      {
        url: "/projects/storex-app/ui-screens/frame_13.png",
        caption: "Storex Fashion App - User Profile & Wishlist Collections",
        category: "UI Screens / User Profile"
      },
      {
        url: "/projects/storex-app/ui-screens/frame_14.png",
        caption: "Storex Fashion App - Saved Outfits & Favorite Designers",
        category: "UI Screens / Wishlist"
      },
      {
        url: "/projects/storex-app/ui-screens/frame_15.png",
        caption: "Storex Fashion App - Customer Reviews & Ratings Interface",
        category: "UI Screens / Reviews"
      },
      {
        url: "/projects/storex-app/ui-screens/frame_16.png",
        caption: "Storex Fashion App - Push Notifications & Promotional Alerts",
        category: "UI Screens / Alerts"
      },
      {
        url: "/projects/storex-app/ui-screens/frame_17.png",
        caption: "Storex Fashion App - App Settings & Theme Preferences",
        category: "UI Screens / Settings"
      }
    ],
    tags: ["Figma", "UI/UX Design", "Mobile App", "Fashion E-commerce", "Interactive Prototype"],
    link: "#",
  },
  {
    id: "06",
    title: "TRAVEL APPLICATION UI",
    category: "INTERFACE PROTOTYPING",
    filterCategory: "ui",
    description: "Structured an intuitive layout and custom aesthetic components for multi-destination trip exploration dashboards in Android Studio using XML.",
    details: {
      concept: "Designed a modern mobile travel exploration app UI featuring destination discovery, booking management, interactive trip itineraries, and user profile management.",
      execution: "Engineered custom layout components, responsive XML interface structures, vector icons, and smooth screen navigation flows in Android Studio.",
      presentation: "Crafted high-fidelity mobile screen wireframes, color palette systems, dark/light theme options, and interactive component prototypes.",
    },
    coverImage: "/projects/travel-app/travel-app-hero-cover.jpg",
    images: [
      {
        url: "/projects/travel-app/ui-screens/001 (1).png",
        caption: "Multi-Destination Exploration Dashboard & Featured Travel Cards",
        category: "UI Screens / Exploration Dashboard"
      },
      {
        url: "/projects/travel-app/ui-screens/001 (2).png",
        caption: "Detailed Destination Overview, Pricing Telemetry & Booking Interface",
        category: "UI Screens / Trip Overview & Booking"
      },
      {
        url: "/projects/travel-app/ui-screens/001 (3).png",
        caption: "Interactive Day-by-Day Trip Schedule & Activity Recommendations",
        category: "UI Screens / Itinerary Planner"
      },
      {
        url: "/projects/travel-app/ui-screens/001 (4).png",
        caption: "Category Filter Chips, Location Search Bar & Popular Hotspot Listings",
        category: "UI Screens / Search & Filters"
      },
      {
        url: "/projects/travel-app/ui-screens/001 (5).png",
        caption: "Saved Trip Wishlists, User Profile Preferences & Account Settings",
        category: "UI Screens / User Profile & Saved"
      },
      {
        url: "/projects/travel-app/ui-screens/001 (6).png",
        caption: "Clean Welcome Onboarding Hero View & Get Started Interface",
        category: "UI Screens / Onboarding Flow"
      },
      {
        url: "/projects/travel-app/ui-screens/001 (7).png",
        caption: "Interactive Route Mapping, GPS Waypoints & Local Attractions Map",
        category: "UI Screens / Navigation & Map"
      },
      {
        url: "/projects/travel-app/ui-screens/001 (8).png",
        caption: "Reservation Confirmation Summary, Payment Options & Ticket Badge",
        category: "UI Screens / Checkout & Tickets"
      },
      {
        url: "/projects/travel-app/ui-screens/001 (9).png",
        caption: "XML Layout Architecture & Mobile Component Hierarchy Specs",
        category: "UI Screens / Layout System"
      },
    ],
    tags: ["XML", "Android Studio", "UI Prototyping", "Mobile Design", "Layout Systems"],
    link: "#",
  },
  {
    id: "07",
    title: "RIDE ENERGY DRINK COMMERCIAL",
    category: "BRAND PROMOTION & DIGITAL MARKETING",
    filterCategory: "ui",
    description: "Designed promotional ad layouts and digital marketing assets in Figma for RIDE Energy Drink (Cargills). Styled product mockups, dynamic action visuals, and energetic typography to align with the brand’s high-energy identity.",
    details: {
      concept: "Visual Direction: Designed promotional ad layouts and digital marketing assets in Figma for RIDE Energy Drink (Cargills).",
      execution: "Asset Creation: Styled product mockups, dynamic action visuals, and energetic typography to align with the brand’s high-energy identity.",
      presentation: "Presentation: Structured commercial display mockups and social ad banners tailored for promotional campaigns.",
      segments: [
        {
          title: "Segment 01: Visual Direction & Promotional Ad Layouts",
          description: "Designed promotional ad layouts and digital marketing assets in Figma for RIDE Energy Drink (Cargills)."
        },
        {
          title: "Segment 02: Asset Creation & High-Energy Product Mockups",
          description: "Styled product mockups, dynamic action visuals, and energetic typography to align with the brand’s high-energy identity."
        },
        {
          title: "Segment 03: Commercial Display & Social Ad Banners",
          description: "Structured commercial display mockups and social ad banners tailored for promotional campaigns."
        }
      ]
    },
    coverImage: "/projects/ride-commercial/page_01.png",
    images: [
      {
        url: "/projects/ride-commercial/page_01.png",
        caption: "Page 01 - RIDE Energy Drink Commercial Cover & Brand Presentation",
        category: "Ride Energy Drink Commercial / Slide 01"
      },
      {
        url: "/projects/ride-commercial/page_02.png",
        caption: "Page 02 - Brand Color Palette & Typography Tokens",
        category: "Ride Energy Drink Commercial / Slide 02"
      },
      {
        url: "/projects/ride-commercial/page_03.png",
        caption: "Page 03 - Can Product Mockup & Action Visuals",
        category: "Ride Energy Drink Commercial / Slide 03"
      },
      {
        url: "/projects/ride-commercial/page_04.png",
        caption: "Page 04 - Social Media Ad Campaign Banners",
        category: "Ride Energy Drink Commercial / Slide 04"
      },
      {
        url: "/projects/ride-commercial/page_05.png",
        caption: "Page 05 - Commercial Retail POS Display Mockup",
        category: "Ride Energy Drink Commercial / Slide 05"
      },
      {
        url: "/projects/ride-commercial/page_06.png",
        caption: "Page 06 - Flavor Lineup & Product Variants Showcase",
        category: "Ride Energy Drink Commercial / Slide 06"
      },
      {
        url: "/projects/ride-commercial/page_07.png",
        caption: "Page 07 - Dynamic Lifestyle Visuals & Brand Messaging",
        category: "Ride Energy Drink Commercial / Slide 07"
      },
      {
        url: "/projects/ride-commercial/page_08.png",
        caption: "Page 08 - Mobile & Desktop Digital Web Banners",
        category: "Ride Energy Drink Commercial / Slide 08"
      },
      {
        url: "/projects/ride-commercial/page_09.png",
        caption: "Page 09 - Energetic Typography & Vector Asset Library",
        category: "Ride Energy Drink Commercial / Slide 09"
      },
      {
        url: "/projects/ride-commercial/page_10.png",
        caption: "Page 10 - Outdoor Billboard & Commercial Ad Mockups",
        category: "Ride Energy Drink Commercial / Slide 10"
      },
      {
        url: "/projects/ride-commercial/page_11.png",
        caption: "Page 11 - Promotional Campaign Flow & Social Ad Variants",
        category: "Ride Energy Drink Commercial / Slide 11"
      },
      {
        url: "/projects/ride-commercial/page_12.png",
        caption: "Page 12 - Interactive Prototype & Presentation Dielines",
        category: "Ride Energy Drink Commercial / Slide 12"
      },
      {
        url: "/projects/ride-commercial/page_13.png",
        caption: "Page 13 - Micro-Interactions & Animated Promo Variations",
        category: "Ride Energy Drink Commercial / Slide 13"
      },
      {
        url: "/projects/ride-commercial/page_14.png",
        caption: "Page 14 - Complete RIDE Energy Drink Campaign Specs",
        category: "Ride Energy Drink Commercial / Slide 14"
      }
    ],
    tags: ["Figma", "Digital Marketing", "Ad Campaign", "Brand Identity", "Product Mockups", "Social Banners"],
    link: "#",
  },
  {
    id: "08",
    title: "FIT FLEX MOBILE APP",
    category: "MOBILE APP UI DESIGN & PROTOTYPING",
    filterCategory: "ui",
    description: "Designed a comprehensive fitness & workout tracking mobile application (FIT FLEX APP) in Figma, complete with 33 high-fidelity UI frames, personalized onboarding telemetry, workout categories, custom schedules, and interactive video motion prototype.",
    details: {
      concept: "Conceived an all-in-one mobile fitness application engineered for goal-oriented workout tracking, personalized user telemetry (age, weight, gender), customizable daily routines, and cardio/strength training guides.",
      execution: "Designed 33 high-resolution mobile UI frames in Figma incorporating sleek dark-mode fitness aesthetics, custom vector icons, category selection chips, and structured calendar schedules.",
      presentation: "Produced a full video motion walkthrough demonstrating smooth screen transitions, interactive onboarding flows, and daily workout management.",
      segments: [
        {
          title: "Segment 01: Onboarding & User Telemetry Architecture",
          description: "Structured multi-step onboarding flows for gender identification, age customization, weight selection wheels, and targeted fitness goals (Lose Weight, Build Muscle, Flexibility)."
        },
        {
          title: "Segment 02: Dashboard & Workout Category Systems",
          description: "Engineered main home feeds featuring personalized morning workout plans, beginner-to-advanced categories, cardio guides (LISS), and active yoga modules."
        },
        {
          title: "Segment 03: Daily Schedule & Routine Telemetry",
          description: "Designed day-by-day workout routines (Day 1, 2, 3 plans), reminder alarms, profile health metrics, and exported a video prototype walkthrough."
        }
      ]
    },
    coverImage: "/projects/fit-flex/fit-flex-hero-cover.jpg",
    videos: [
      {
        url: "/projects/fit-flex/videos/fit-flex-demo.mp4",
        title: "Fit Flex Mobile App Prototype & UI Interaction Walkthrough",
        category: "Videos / Mobile App Demo"
      }
    ],
    images: [
      {
        url: "/projects/fit-flex/ui-screens/frame_01.png",
        caption: "Fit Flex Mobile App - iOS Lockscreen & Widget Integration",
        category: "UI Screens / Lockscreen"
      },
      {
        url: "/projects/fit-flex/ui-screens/frame_02.png",
        caption: "Fit Flex Mobile App - Splash Screen & Brand Identity ('STAY FIT - DON'T QUIT')",
        category: "UI Screens / Splash"
      },
      {
        url: "/projects/fit-flex/ui-screens/frame_03.png",
        caption: "Fit Flex Mobile App - Onboarding 01: Workout Tracking & Challenge Friends",
        category: "UI Screens / Onboarding"
      },
      {
        url: "/projects/fit-flex/ui-screens/frame_04.png",
        caption: "Fit Flex Mobile App - Onboarding 02: Street Workouts & Skill Building",
        category: "UI Screens / Onboarding"
      },
      {
        url: "/projects/fit-flex/ui-screens/frame_05.png",
        caption: "Fit Flex Mobile App - Onboarding 03: Learn Secret Techniques with Pro Instructors",
        category: "UI Screens / Onboarding"
      },
      {
        url: "/projects/fit-flex/ui-screens/frame_06.png",
        caption: "Fit Flex Mobile App - Onboarding 04: Push Yourself Harder & Get Started",
        category: "UI Screens / Onboarding"
      },
      {
        url: "/projects/fit-flex/ui-screens/frame_07.png",
        caption: "Fit Flex Mobile App - Basic Training & Jumping Jacks Guide",
        category: "UI Screens / Workouts"
      },
      {
        url: "/projects/fit-flex/ui-screens/frame_08.png",
        caption: "Fit Flex Mobile App - Cardio Training & LISS Steady State Overview",
        category: "UI Screens / Workouts"
      },
      {
        url: "/projects/fit-flex/ui-screens/frame_09.png",
        caption: "Fit Flex Mobile App - Workout Getting Started & Health Consult Tips",
        category: "UI Screens / Tips"
      },
      {
        url: "/projects/fit-flex/ui-screens/frame_10.png",
        caption: "Fit Flex Mobile App - Strength Training & Squat Workout Plan",
        category: "UI Screens / Workouts"
      },
      {
        url: "/projects/fit-flex/ui-screens/frame_11.png",
        caption: "Fit Flex Mobile App - Create Account & Sign Up Form Interface",
        category: "UI Screens / Authentication"
      },
      {
        url: "/projects/fit-flex/ui-screens/frame_12.png",
        caption: "Fit Flex Mobile App - Successful Registration & Access Confirmation",
        category: "UI Screens / Authentication"
      },
      {
        url: "/projects/fit-flex/ui-screens/frame_13.png",
        caption: "Fit Flex Mobile App - User Login & Sign In Screen",
        category: "UI Screens / Authentication"
      },
      {
        url: "/projects/fit-flex/ui-screens/frame_14.png",
        caption: "Fit Flex Mobile App - Gender Selection User Onboarding (Female)",
        category: "UI Screens / Onboarding Telemetry"
      },
      {
        url: "/projects/fit-flex/ui-screens/frame_15.png",
        caption: "Fit Flex Mobile App - Gender Selection User Onboarding (Male)",
        category: "UI Screens / Onboarding Telemetry"
      },
      {
        url: "/projects/fit-flex/ui-screens/frame_16.png",
        caption: "Fit Flex Mobile App - Gender Preference Selected",
        category: "UI Screens / Onboarding Telemetry"
      },
      {
        url: "/projects/fit-flex/ui-screens/frame_17.png",
        caption: "Fit Flex Mobile App - Fitness Goal Selection (Lose Weight, Build Muscle, Get Fit)",
        category: "UI Screens / Goal Setup"
      },
      {
        url: "/projects/fit-flex/ui-screens/frame_18.png",
        caption: "Fit Flex Mobile App - Fitness Goal Selection (Strong Arms, Back Relaxation)",
        category: "UI Screens / Goal Setup"
      },
      {
        url: "/projects/fit-flex/ui-screens/frame_19.png",
        caption: "Fit Flex Mobile App - Fitness Goal Selection (Flexibility, Shred, Sprint)",
        category: "UI Screens / Goal Setup"
      },
      {
        url: "/projects/fit-flex/ui-screens/frame_20.png",
        caption: "Fit Flex Mobile App - Fitness Goal Active State",
        category: "UI Screens / Goal Setup"
      },
      {
        url: "/projects/fit-flex/ui-screens/frame_21.png",
        caption: "Fit Flex Mobile App - Main Home Dashboard & Today's Workout Plan (Good Morning)",
        category: "UI Screens / Home Feed"
      },
      {
        url: "/projects/fit-flex/ui-screens/frame_22.png",
        caption: "Fit Flex Mobile App - Home Feed Workout Categories (Beginner, Intermediate, Advanced)",
        category: "UI Screens / Home Feed"
      },
      {
        url: "/projects/fit-flex/ui-screens/frame_23.png",
        caption: "Fit Flex Mobile App - Full Mobile Feed Scrolling Architecture",
        category: "UI Screens / Home Feed Layout"
      },
      {
        url: "/projects/fit-flex/ui-screens/frame_24.png",
        caption: "Fit Flex Mobile App - Active Yoga Training & Hatha Yoga Overview",
        category: "UI Screens / Workouts"
      },
      {
        url: "/projects/fit-flex/ui-screens/frame_25.png",
        caption: "Fit Flex Mobile App - Age Selection Wheel Telemetry",
        category: "UI Screens / User Telemetry"
      },
      {
        url: "/projects/fit-flex/ui-screens/frame_26.png",
        caption: "Fit Flex Mobile App - Weight Selector Wheel (Personalized Plan)",
        category: "UI Screens / User Telemetry"
      },
      {
        url: "/projects/fit-flex/ui-screens/frame_27.png",
        caption: "Fit Flex Mobile App - Extended Weight Telemetry Matrix",
        category: "UI Screens / User Telemetry"
      },
      {
        url: "/projects/fit-flex/ui-screens/frame_28.png",
        caption: "Fit Flex Mobile App - 7-Day Workout Program Overview",
        category: "UI Screens / Workout Schedule"
      },
      {
        url: "/projects/fit-flex/ui-screens/frame_29.png",
        caption: "Fit Flex Mobile App - User Profile, Health Metrics (Blood, Height, Weight)",
        category: "UI Screens / Profile"
      },
      {
        url: "/projects/fit-flex/ui-screens/frame_30.png",
        caption: "Fit Flex Mobile App - Reminders & Daily Fitness Schedule Alarms",
        category: "UI Screens / Reminders"
      },
      {
        url: "/projects/fit-flex/ui-screens/frame_31.png",
        caption: "Fit Flex Mobile App - Day 1 Workout Routine (Warm-Up, Push-Ups, Dumbbell Press)",
        category: "UI Screens / Daily Routine"
      },
      {
        url: "/projects/fit-flex/ui-screens/frame_32.png",
        caption: "Fit Flex Mobile App - Day 2 Workout Routine (Brisk Walk, Crunches, Leg Raises)",
        category: "UI Screens / Daily Routine"
      },
      {
        url: "/projects/fit-flex/ui-screens/frame_33.png",
        caption: "Fit Flex Mobile App - Day 3 Workout Routine (Bodyweight Squats & Lunges)",
        category: "UI Screens / Daily Routine"
      }
    ],
    tags: ["Figma", "UI/UX Design", "Mobile App", "Fitness Tracker", "Interactive Prototype", "Wireframes"],
    link: "#",
  },
  {
    id: "09",
    title: "SEHERA COLLECTION",
    category: "DESKTOP WEB APPLICATION",
    filterCategory: "web",
    description: "Built a full e-commerce clothing desktop web application optimizing interface usability, product databases, and system responsiveness using the MERN stack.",
    details: {
      concept: "Engineered a luxury fashion & high-end apparel e-commerce web platform featuring interactive catalog browsing, dynamic shopping cart telemetry, and responsive desktop UI layouts.",
      execution: "Built using MongoDB, Express, React, and Node.js (MERN stack), integrating dynamic REST APIs, stateful product filtering, and fast database queries.",
      presentation: "Designed high-resolution desktop web layouts, promotional video teasers, and seamless user checkout navigation flows.",
    },
    coverImage: "/projects/sehera-collection/desktop-web/high-end-dressed.png",
    videos: [
      {
        url: "/projects/sehera-collection/videos/s01.mp4",
        title: "Sehera Collection E-Commerce Desktop Web Experience Showcase",
        category: "Videos / E-Commerce Video Showcase"
      }
    ],
    images: [
      {
        url: "/projects/sehera-collection/desktop-web/high-end-dressed.png",
        caption: "High-End Dressed Luxury Collection Desktop Showcase & Banner Layout",
        category: "Desktop Web / Fashion Catalog"
      }
    ],
    tags: ["MERN Stack", "React.js", "UX Optimization", "E-commerce", "Desktop Web"],
    link: "#",
  },
  {
    id: "10",
    title: "SCHOOL MANAGEMENT SYSTEM",
    category: "PORTAL WEB DEVELOPMENT",
    filterCategory: "web",
    description: "Programmed a full web-based school management portal integrated with dynamic backend databases using Java, JavaScript, CSS, and SQL. Features student records telemetry, course registration portals, attendance management, and role-based user authentication.",
    details: {
      concept: "Programmed a web-based school management portal integrated with dynamic backend databases using Java, JavaScript, CSS, and SQL.",
      execution: "Engineered student record telemetry, course registration portals, attendance management, gradebook databases, and role-based user authentication.",
      presentation: "Built responsive web interface layouts, interactive data tables, and exported full web demonstration video walkthrough.",
      segments: [
        {
          title: "Segment 01: Core Web Architecture & SQL Integration",
          description: "Programmed a web-based school management portal integrated with dynamic backend databases using Java, JavaScript, CSS, and SQL."
        },
        {
          title: "Segment 02: Student & Academic Portal Modules",
          description: "Engineered student record telemetry, course registration portals, attendance management, gradebook databases, and role-based user authentication."
        },
        {
          title: "Segment 03: Responsive UI & Demo Walkthrough",
          description: "Built responsive web interface layouts, interactive data tables, and exported full web demonstration video walkthrough."
        }
      ]
    },
    coverImage: "/projects/school-management/school-management-hero-cover.jpg",
    videos: [
      {
        url: "/projects/school-management/videos/school-management-web.mp4",
        title: "School Management System Web Portal Demo & Walkthrough",
        category: "Videos / Web Application Showcase"
      }
    ],
    tags: ["Java", "JavaScript", "SQL Database", "CSS", "Web Portal", "Backend Systems"],
    link: "/projects/school-management/videos/school-management-web.mp4",
  },
  {
    id: "11",
    title: "MULTIMEDIA ANIMATIONS",
    category: "VECTOR ART & VISUAL SKETCHES",
    filterCategory: "3d",
    description: "Developed custom vector project animations, structural character body movements, character rigging, and animated storytelling using Moho.",
    details: {
      concept: "Conceived a narrative animation project focusing on character design, expressive vector movements, and environmental storytelling.",
      execution: "Rigged vector characters, created keyframe motion sequences, and synced sound design using Moho Vector Animation.",
      presentation: "Exported final 2D digital animation render featuring smooth character performance and dynamic camera movements.",
    },
    coverImage: "/projects/multimedia-animations/animation-hero-cover.jpg",
    videos: [
      {
        url: "/projects/multimedia-animations/dicc-animation-final.mp4",
        title: "DICC Final Animation Production",
        category: "Moho 2D Vector Animation"
      }
    ],
    tags: ["Moho", "Vector Art", "Motion Graphics", "2D Animation", "Character Rigging"],
    link: "/projects/multimedia-animations/dicc-animation-final.mp4",
  },
  {
    id: "12",
    title: "T SHIRT DESIGNING",
    category: "APPAREL & GRAPHIC DESIGN",
    filterCategory: "ui",
    description: "Designed custom streetwear apparel mockups, vector artwork techpacks, Y2K cyberpunk graphics, and logo branding systems for STOREX.CLOTHING and SLIIT Club.",
    details: {
      concept: "Conceived custom streetwear apparel mockups and apparel techpack specs for STOREX.CLOTHING, blending Y2K cyberpunk graphic aesthetics, typography layout systems, and minimal emblem mark placements.",
      execution: "Created high-fidelity apparel vector techpacks, color palette specifications (Black, Purple, Charcoal, White, Ice Blue), fabric specifications (100% Cotton, Oversized Fit), and print placement layouts (Front Left Chest, Front Right Typography, Back Album Art Graphics).",
      presentation: "Structured complete techpack presentation sheets specifying sizing parameters (S, M, L, XL, XXL), print dimensions, and color variants.",
      segments: [
        {
          title: "Segment 01: STOREX Rebel Cyberpunk Angel Techpack",
          description: "Black & Purple oversized streetwear tee featuring SLIIT Club chest logo and Y2K angel typography back graphic layout."
        },
        {
          title: "Segment 02: STOREX Aesthetic Globe Graphic Charcoal Techpack",
          description: "Dark charcoal streetwear tee with front left emblem, front right typography, and vibrant blue globe back graphic."
        },
        {
          title: "Segment 03: STOREX 007 Y2K Hip-Hop Album Art Techpack",
          description: "Light ice-blue oversized t-shirt featuring Y2K hip-hop album cover back artwork and minimal chest logo."
        },
        {
          title: "Segment 04: Minimalist Chest Emblem & Apparel Color Variants",
          description: "Clean front & back techpack layouts showcasing color swatches, 100% cotton fabric specs, and oversized fit parameters."
        }
      ]
    },
    coverImage: "/projects/tshirt-designing/tshirt-designing-hero-cover.webp",
    images: [
      {
        url: "/projects/tshirt-designing/storex-rebel-cyberpunk-techpack.webp",
        caption: "STOREX Rebel Cyberpunk Angel Techpack - Black & Purple Oversized Tee",
        category: "Apparel Techpack / STOREX Rebel"
      },
      {
        url: "/projects/tshirt-designing/sliit-club-minimal-techpack.webp",
        caption: "SLIIT Club Front & Back Minimalist T-Shirt Design Layout",
        category: "Apparel Techpack / SLIIT Club"
      },
      {
        url: "/projects/tshirt-designing/storex-aesthetic-charcoal-globe-techpack.webp",
        caption: "STOREX Aesthetic Charcoal T-Shirt - Blue Globe Graphic Back & Chest Logos",
        category: "Apparel Techpack / Globe Graphic"
      },
      {
        url: "/projects/tshirt-designing/storex-aesthetic-iceblue-minimal-techpack.webp",
        caption: "STOREX Aesthetic Ice Blue T-Shirt - Minimal Chest Branding Spec",
        category: "Apparel Techpack / Ice Blue Minimal"
      },
      {
        url: "/projects/tshirt-designing/storex-aesthetic-y2k-hiphop-techpack.webp",
        caption: "STOREX 007 Y2K Hip-Hop Album Cover Graphic T-Shirt Techpack",
        category: "Apparel Techpack / Y2K Album Art"
      }
    ],
    tags: ["Apparel Design", "Photoshop", "Illustrator", "Techpack", "Streetwear", "Branding"],
    link: "#",
  },
  {
    id: "13",
    title: "POSTER DESIGNING",
    category: "GRAPHIC DESIGN & ADVERTISING",
    filterCategory: "web",
    description: "Designed high-impact promotional campaign posters, retail launching flyers, and marketing banners including Storex Tech 'LIMITED TECH DROP', BUNZAA Gourmet Burger launch, and INNOSPARK Caffiscale vintage pop-art illustrations.",
    details: {
      concept: "Conceived multi-industry promotional poster campaigns for tech retail, food & beverage, and hardware branding — utilizing high-contrast typography hierarchy, vibrant color-blocking, and isolated product artwork.",
      execution: "Designed in Photoshop & Illustrator using custom vector layouts, PBR food photography retouching, vintage line art illustration, and clean grid alignment.",
      presentation: "Structured complete promotional asset sets including digital social media flyers, opening announcement posters, and print campaign banners.",
      segments: [
        {
          title: "Segment 01: Storex Tech 'LIMITED TECH DROP' Retail Campaign",
          description: "Bold condensed headline typography paired with vibrant purple color blocks, isolated 3D headphones, and neon lime CTA pills."
        },
        {
          title: "Segment 02: BUNZAA Gourmet Burger Launch Campaign",
          description: "High-impact food photography art direction on vibrant orange backdrop with bold cream typography and location/opening telemetry."
        },
        {
          title: "Segment 03: INNOSPARK Caffiscale Vintage Pop-Art Poster",
          description: "Retro dual-tone pop-art illustration featuring star emblem badge, iced coffee graphics, and 'Scale Smart, Brew Better!' slogan typography."
        }
      ]
    },
    coverImage: "/projects/poster-designing/poster-designing-hero-cover.webp",
    images: [
      {
        url: "/projects/poster-designing/limited-tech-drop-poster.webp",
        caption: "Storex Tech 'LIMITED TECH DROP' Official Promotional Campaign Poster",
        category: "Poster Design / Tech Retail"
      },
      {
        url: "/projects/poster-designing/bunzaa-burger-launch-poster.webp",
        caption: "BUNZAA Gourmet Burger 'Get Ready To Bite Into Something Big' Grand Opening Teaser Poster",
        category: "Poster Design / Food & Restaurant"
      },
      {
        url: "/projects/poster-designing/innospark-caffiscale-retro-poster.webp",
        caption: "INNOSPARK Caffiscale 'Scale Smart, Brew Better!' Vintage Pop-Art Brand Poster",
        category: "Poster Design / Vintage Illustration"
      }
    ],
    tags: ["Photoshop", "Graphic Design", "Poster Design", "Branding", "Advertising", "Illustrator"],
    link: "#",
  },
  {
    id: "14",
    title: "GRAPHICAL DESIGNS",
    category: "DIGITAL ART & ILLUSTRATION",
    filterCategory: "ui",
    description: "Created high-concept digital graphic artworks, apparel illustration graphics, Y2K album art covers, classical sculpture typography composites, and surreal vector art for STOREX.",
    details: {
      concept: "Conceived a multi-style collection of digital graphic art exploring classical Greco-Roman sculpture typography, Y2K cyberpunk angel aesthetics, urban hip-hop album cover art, psychedelic surreal animal illustrations, and distressed gothic line art.",
      execution: "Designed in Photoshop, Illustrator, and digital painting suites — utilizing complex layer blending, custom vector typography, grunge textures, metallic chrome effects, and high-contrast color palettes.",
      presentation: "Structured digital art showcase frames specifying graphic categories, typography tokens, composition styles, and high-resolution print dieline specs.",
      segments: [
        {
          title: "Segment 01: Classical Greco-Roman Sculpture Typography",
          description: "High-contrast monochrome engraving style featuring classical Greek statue artwork overlaid with bold vertical STOREX typography tokens."
        },
        {
          title: "Segment 02: Cyberpunk Rebel Angel Graphic Artwork",
          description: "3D sculpted celestial angel holding chain mace weapons overlaid with vibrant purple STOREX REBEL script and SLIIT Club branding."
        },
        {
          title: "Segment 03: Y2K Hip-Hop Album Cover & Urban Typography",
          description: "Gritty urban album cover aesthetic featuring 3D chrome bubble typography, parental advisory badges, and street fashion portraiture."
        },
        {
          title: "Segment 04: Surreal Creatures Psychedelic Fox & Gothic Line Art",
          description: "Surreal multi-headed fox illustration with lightning bolts alongside distressed gothic skull & cross typography graphics."
        }
      ]
    },
    coverImage: "/projects/graphical-designs/storex-greek-statue-classical-art.webp",
    images: [
      {
        url: "/projects/graphical-designs/storex-greek-statue-classical-art.webp",
        caption: "STOREX Classical Greco-Roman Sculpture Engraving & Typography Graphic",
        category: "Graphic Art / Classical Sculpture"
      },
      {
        url: "/projects/graphical-designs/storex-cyberpunk-angel-rebel-art.webp",
        caption: "STOREX REBEL Cyberpunk Celestial Angel Graphic & Purple Typography",
        category: "Graphic Art / Cyberpunk Angel"
      },
      {
        url: "/projects/graphical-designs/storex-007-y2k-album-cover-art.webp",
        caption: "STOREX 007 ZEPHYLORD Y2K Hip-Hop Album Cover & Urban Typography Concept",
        category: "Graphic Art / Y2K Album Cover"
      },
      {
        url: "/projects/graphical-designs/storex-surreal-creatures-fox-art.webp",
        caption: "STOREX Surreal Creatures - Multi-Headed Psychedelic Fox Artwork & Chrome Typography",
        category: "Graphic Art / Surreal Illustration"
      },
      {
        url: "/projects/graphical-designs/storex-gothic-skull-crosses-art.webp",
        caption: "STOREX Gothic Distressed Skull, Crosses & Floral Typographic Artwork",
        category: "Graphic Art / Gothic Distressed"
      }
    ],
    tags: ["Digital Art", "Graphic Design", "Illustration", "Photoshop", "Typography", "Vector Art"],
    link: "#",
  },
  {
    id: "15",
    title: "CHARACTER DESIGNING",
    category: "AI CHARACTER DESIGN & ANIMATION",
    filterCategory: "3d",
    description: "Designed 40+ AI-generated character models, turnaround rigs, stylized animal mascot concepts, sci-fi robot avatars, and motion keyframe sequences for AI video production.",
    details: {
      concept: "Conceived a comprehensive AI character design & video storyboard project featuring stylized rabbit mascots, futuristic android turnarounds, Sunday Drive vehicle character rigs, and cinematic motion keyframe sequences.",
      execution: "Generated and refined using Midjourney, Stable Diffusion, and Adobe Photoshop — establishing character turnarounds, expression sheets, 3D lighting consistency, and frame-by-frame video motion keyframes.",
      presentation: "Structured full AI character development breakdown across 43 high-resolution concept art sheets, model turnarounds, and Sunday Drive asset folder frames.",
      segments: [
        {
          title: "Segment 01: Stylized Bunny Mascot Concepts",
          description: "Expression sheets, 3D stylized fur rendering, action poses, and costume design for 3D animated rabbit character mascots."
        },
        {
          title: "Segment 02: Character Model Turnarounds & Rig Specs",
          description: "Front, side, and 3/4 perspective turnaround rigs for character model sheets (B1–B4)."
        },
        {
          title: "Segment 03: AI Video Storyboard Motion Keyframe Sequence",
          description: "21-frame cinematic motion sequence (Frames 01–21) establishing character continuity, camera angles, and action shots."
        },
        {
          title: "Segment 04: Sunday Drive Concept & Vehicle Rigs",
          description: "Dedicated asset folder containing classic blue Buick vehicle character renders (car.webp, car-f, c-side, c1), robot avatar (bot.webp), dog companion (dog.webp), and 7-frame drive keyframes (car1–car7)."
        }
      ]
    },
    coverImage: "/projects/character-designing/character-designing-hero-cover.webp",
    images: [
      // --- FOLDER: Mascot Concepts ---
      {
        url: "/projects/character-designing/bunny.webp",
        caption: "Stylized Bunny Mascot Character - High-Fidelity 3D Concept Art",
        category: "Mascot Concepts / Bunny Mascot"
      },
      {
        url: "/projects/character-designing/bunny2.webp",
        caption: "Stylized Bunny Character Variant - Expression & Outfit Detail",
        category: "Mascot Concepts / Bunny Variant 2"
      },
      {
        url: "/projects/character-designing/bunny3.webp",
        caption: "Stylized Bunny Character Variant - Action Pose & Lighting",
        category: "Mascot Concepts / Bunny Variant 3"
      },

      // --- FOLDER: Character Rigs ---
      {
        url: "/projects/character-designing/b1.webp",
        caption: "Character Model Sheet B1 - 3/4 Perspective & Apparel Spec",
        category: "Character Rigs / Model Sheet B1"
      },
      {
        url: "/projects/character-designing/b2.webp",
        caption: "Character Model Sheet B2 - Side Profile & Pose Alignment",
        category: "Character Rigs / Model Sheet B2"
      },
      {
        url: "/projects/character-designing/b3.webp",
        caption: "Character Model Sheet B3 - Full Body Frontal Rigging Spec",
        category: "Character Rigs / Model Sheet B3"
      },
      {
        url: "/projects/character-designing/b4.webp",
        caption: "Character Model Sheet B4 - Lighting & Shading Reference",
        category: "Character Rigs / Model Sheet B4"
      },

      // --- FOLDER: Video Sequences ---
      {
        url: "/projects/character-designing/1.webp",
        caption: "AI Video Character Motion Sequence - Frame 01",
        category: "Video Sequences / Frame 01"
      },
      {
        url: "/projects/character-designing/2.webp",
        caption: "AI Video Character Motion Sequence - Frame 02",
        category: "Video Sequences / Frame 02"
      },
      {
        url: "/projects/character-designing/3.webp",
        caption: "AI Video Character Motion Sequence - Frame 03",
        category: "Video Sequences / Frame 03"
      },
      {
        url: "/projects/character-designing/4.webp",
        caption: "AI Video Character Motion Sequence - Frame 04",
        category: "Video Sequences / Frame 04"
      },
      {
        url: "/projects/character-designing/5.webp",
        caption: "AI Video Character Motion Sequence - Frame 05",
        category: "Video Sequences / Frame 05"
      },
      {
        url: "/projects/character-designing/6.webp",
        caption: "AI Video Character Motion Sequence - Frame 06",
        category: "Video Sequences / Frame 06"
      },
      {
        url: "/projects/character-designing/7.webp",
        caption: "AI Video Character Motion Sequence - Frame 07",
        category: "Video Sequences / Frame 07"
      },
      {
        url: "/projects/character-designing/8.webp",
        caption: "AI Video Character Motion Sequence - Frame 08",
        category: "Video Sequences / Frame 08"
      },
      {
        url: "/projects/character-designing/9.webp",
        caption: "AI Video Character Motion Sequence - Frame 09",
        category: "Video Sequences / Frame 09"
      },
      {
        url: "/projects/character-designing/10.webp",
        caption: "AI Video Character Motion Sequence - Frame 10",
        category: "Video Sequences / Frame 10"
      },
      {
        url: "/projects/character-designing/11.webp",
        caption: "AI Video Character Motion Sequence - Frame 11",
        category: "Video Sequences / Frame 11"
      },
      {
        url: "/projects/character-designing/12.webp",
        caption: "AI Video Character Motion Sequence - Frame 12",
        category: "Video Sequences / Frame 12"
      },
      {
        url: "/projects/character-designing/13.webp",
        caption: "AI Video Character Motion Sequence - Frame 13",
        category: "Video Sequences / Frame 13"
      },
      {
        url: "/projects/character-designing/14.webp",
        caption: "AI Video Character Motion Sequence - Frame 14",
        category: "Video Sequences / Frame 14"
      },
      {
        url: "/projects/character-designing/15.webp",
        caption: "AI Video Character Motion Sequence - Frame 15",
        category: "Video Sequences / Frame 15"
      },
      {
        url: "/projects/character-designing/16.webp",
        caption: "AI Video Character Motion Sequence - Frame 16",
        category: "Video Sequences / Frame 16"
      },
      {
        url: "/projects/character-designing/17.webp",
        caption: "AI Video Character Motion Sequence - Frame 17",
        category: "Video Sequences / Frame 17"
      },
      {
        url: "/projects/character-designing/18.webp",
        caption: "AI Video Character Motion Sequence - Frame 18",
        category: "Video Sequences / Frame 18"
      },
      {
        url: "/projects/character-designing/19.webp",
        caption: "AI Video Character Motion Sequence - Frame 19",
        category: "Video Sequences / Frame 19"
      },
      {
        url: "/projects/character-designing/20.webp",
        caption: "AI Video Character Motion Sequence - Frame 20",
        category: "Video Sequences / Frame 20"
      },
      {
        url: "/projects/character-designing/21.webp",
        caption: "AI Video Character Motion Sequence - Frame 21",
        category: "Video Sequences / Frame 21"
      },
      {
        url: "/projects/character-designing/car-drive.webp",
        caption: "AI Video Action Drive Keyframe 01",
        category: "Video Sequences / Drive Shot 1"
      },
      {
        url: "/projects/character-designing/car-drive-2.webp",
        caption: "AI Video Action Drive Keyframe 02",
        category: "Video Sequences / Drive Shot 2"
      },

      // --- FOLDER: Sunday Drive (Dedicated Folder Frame inside CHARACTER DESIGNING) ---
      {
        url: "/projects/character-designing/sunday-drive-bot.webp",
        caption: "Sci-Fi Robot Avatar Character - 3D Mechanical Bot Design",
        category: "Sunday Drive / Robot Avatar"
      },
      {
        url: "/projects/character-designing/sunday-drive-dog.webp",
        caption: "Sunday Drive Animal Companion - Stylized Dog Character Concept",
        category: "Sunday Drive / Dog Companion"
      },
      {
        url: "/projects/character-designing/sunday-drive-car.webp",
        caption: "Sunday Drive Main Vehicle Character Render - Classic Blue Buick Convertible",
        category: "Sunday Drive / Main Vehicle"
      },
      {
        url: "/projects/character-designing/sunday-drive-car-f.webp",
        caption: "Sunday Drive Front Elevation Vehicle Character Spec",
        category: "Sunday Drive / Front Elevation"
      },
      {
        url: "/projects/character-designing/sunday-drive-c-side.webp",
        caption: "Sunday Drive Side Profile Vehicle Character Spec",
        category: "Sunday Drive / Side View"
      },
      {
        url: "/projects/character-designing/sunday-drive-c1.webp",
        caption: "Sunday Drive Cockpit Interior Perspective View",
        category: "Sunday Drive / Interior Cockpit"
      },
      {
        url: "/projects/character-designing/sunday-drive-car1.webp",
        caption: "Sunday Drive Motion Keyframe Sequence - Frame 01",
        category: "Sunday Drive / Drive Frame 01"
      },
      {
        url: "/projects/character-designing/sunday-drive-car2.webp",
        caption: "Sunday Drive Motion Keyframe Sequence - Frame 02",
        category: "Sunday Drive / Drive Frame 02"
      },
      {
        url: "/projects/character-designing/sunday-drive-car3.webp",
        caption: "Sunday Drive Motion Keyframe Sequence - Frame 03",
        category: "Sunday Drive / Drive Frame 03"
      },
      {
        url: "/projects/character-designing/sunday-drive-car4.webp",
        caption: "Sunday Drive Motion Keyframe Sequence - Frame 04",
        category: "Sunday Drive / Drive Frame 04"
      },
      {
        url: "/projects/character-designing/sunday-drive-car5.webp",
        caption: "Sunday Drive Motion Keyframe Sequence - Frame 05",
        category: "Sunday Drive / Drive Frame 05"
      },
      {
        url: "/projects/character-designing/sunday-drive-car6.webp",
        caption: "Sunday Drive Motion Keyframe Sequence - Frame 06",
        category: "Sunday Drive / Drive Frame 06"
      },
      {
        url: "/projects/character-designing/sunday-drive-car7.webp",
        caption: "Sunday Drive Motion Keyframe Sequence - Frame 07",
        category: "Sunday Drive / Drive Frame 07"
      }
    ],
    tags: ["AI Character Design", "Midjourney", "Character Rigging", "Concept Art", "3D Animation", "Photoshop"],
    link: "#",
  },
];

type CategoryFilter = "all" | "3d" | "ui" | "web";

function ProjectCardSlideshow({ project }: { project: Project }) {
  const coverUrl = project.coverImage || (project.images && project.images.length > 0 ? project.images[0].url : null);

  if (!coverUrl) return null;

  return (
    <div className="absolute inset-0 z-0 overflow-hidden opacity-30 group-hover:opacity-50 transition-opacity duration-500 pointer-events-none">
      <img
        src={coverUrl}
        alt={project.title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#070708] via-[#070708]/85 to-transparent" />
    </div>
  );
}

function ModalFolderSlideshow({
  folderName,
  folderImages,
  projectId,
  onEnlarge,
}: {
  folderName: string;
  folderImages: ProjectImage[];
  projectId: string;
  onEnlarge: (url: string) => void;
}) {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!isPlaying || folderImages.length <= 1) {
      return;
    }

    const intervalTime = 3000;
    const tickRate = 50;
    let elapsed = 0;

    const timer = setInterval(() => {
      if (typeof document !== "undefined" && document.hidden) return;
      elapsed += tickRate;
      setProgress((elapsed / intervalTime) * 100);

      if (elapsed >= intervalTime) {
        elapsed = 0;
        setActiveIdx((prev) => (prev + 1) % folderImages.length);
      }
    }, tickRate);

    return () => {
      clearInterval(timer);
      setProgress(0);
    };
  }, [isPlaying, folderImages.length]);

  const handlePrev = () => {
    setActiveIdx((prev) => (prev === 0 ? folderImages.length - 1 : prev - 1));
    setProgress(0);
  };

  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % folderImages.length);
    setProgress(0);
  };

  const activeImg = folderImages[activeIdx] || folderImages[0];

  return (
    <div className="p-5 md:p-6 rounded-3xl bg-[#0a0b0e] border border-white/10 shadow-2xl space-y-4 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-36 h-36 bg-orange-500/5 rounded-full blur-2xl pointer-events-none" />

      {/* Header with Slideshow controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-white/10 pb-3 gap-3 relative z-10">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-400">
            <Box className="w-4 h-4" />
          </div>
          <div>
            <h5 className="text-sm font-mono font-bold text-orange-400 uppercase tracking-wider">
              {folderName}
            </h5>
            <span className="text-[10px] font-mono text-white/40">
              /projects/{projectId === "01" ? "innospark" : projectId}/{folderName.toLowerCase().replace(/\s+/g, "-")}/
            </span>
          </div>
        </div>

        {folderImages.length > 1 && (
          <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full text-xs font-mono">
            <button
              onClick={handlePrev}
              className="p-1 hover:text-orange-400 text-white/60 transition-colors"
              title="Previous Slide"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="text-orange-300 font-bold min-w-[50px] text-center">
              {activeIdx + 1} / {folderImages.length}
            </span>
            <button
              onClick={handleNext}
              className="p-1 hover:text-orange-400 text-white/60 transition-colors"
              title="Next Slide"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>

      {/* Animated Image Display Frame */}
      <div className="relative rounded-2xl overflow-hidden bg-black/90 border border-white/15 aspect-[16/9] md:aspect-[21/9] group">
        <AnimatePresence mode="wait">
          <motion.img
            key={activeImg.url}
            src={activeImg.url}
            alt={activeImg.caption}
            loading="lazy"
            decoding="async"
            initial={{ opacity: 0, x: 25, scale: 0.98 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -25, scale: 0.98 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="w-full h-full object-contain p-2 md:p-4"
          />
        </AnimatePresence>

        {folderImages.length > 1 && (
          <>
            <button
              onClick={handlePrev}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 border border-white/20 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 hover:bg-orange-500 hover:text-black hover:border-orange-500 transition-all duration-300 shadow-xl z-20"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 border border-white/20 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 hover:bg-orange-500 hover:text-black hover:border-orange-500 transition-all duration-300 shadow-xl z-20"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}

        <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/95 via-black/70 to-transparent flex justify-between items-end z-10">
          <div className="max-w-[80%]">
            <span className="text-[10px] font-mono text-orange-400 uppercase tracking-widest block mb-0.5 font-bold">
              {activeImg.category || folderName} • SLIDE {activeIdx + 1} OF {folderImages.length}
            </span>
            <p className="text-xs md:text-sm font-medium text-white line-clamp-2">
              {activeImg.caption}
            </p>
          </div>
          <button
            onClick={() => onEnlarge(activeImg.url)}
            className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-orange-500 hover:text-black border border-white/20 text-xs font-mono transition-all duration-300 flex items-center gap-1.5 shrink-0"
          >
            <Maximize2 className="w-3.5 h-3.5" />
            <span>Enlarge</span>
          </button>
        </div>
      </div>

      {/* Thumbnails Bar */}
      {folderImages.length > 1 && (
        <div className="grid grid-cols-4 sm:grid-cols-7 md:grid-cols-10 gap-2 pt-2">
          {folderImages.map((img, idx) => (
            <button
              key={idx}
              onClick={() => {
                setActiveIdx(idx);
                setProgress(0);
              }}
              className={`relative rounded-xl overflow-hidden aspect-video border transition-all duration-300 group ${activeIdx === idx
                ? "border-orange-500 ring-2 ring-orange-500/50 scale-105 z-10"
                : "border-white/10 opacity-50 hover:opacity-100 hover:border-white/30"
                }`}
            >
              <img
                src={img.url}
                alt={img.caption}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
              <div
                className={`absolute inset-0 transition-colors ${activeIdx === idx ? "bg-orange-500/10" : "bg-black/30"
                  }`}
              />
              <span className="absolute bottom-1 right-1 text-[8px] font-mono font-bold px-1 rounded bg-black/70 text-orange-300">
                {idx + 1}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState<CategoryFilter>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  // View mode & 3D Carousel state
  const [viewMode, setViewMode] = useState<"carousel" | "grid">("carousel");
  const [activeCarouselIndex, setActiveCarouselIndex] = useState<number>(0);
  const [isCarouselHovered, setIsCarouselHovered] = useState<boolean>(false);
  const [windowWidth, setWindowWidth] = useState<number>(1024);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const filteredProjects = projects.filter((p) => {
    if (filter === "all") return true;
    return p.filterCategory === filter;
  });

  // 3D Carousel Infinite Auto-Scroll Interval (Pauses on Hover, Modal Open, or Tab Hidden)
  useEffect(() => {
    if (viewMode !== "carousel" || isCarouselHovered || selectedProject !== null || projects.length === 0) return;

    const interval = setInterval(() => {
      if (typeof document !== "undefined" && document.hidden) return;
      setActiveCarouselIndex((prev) => (prev + 1) % projects.length);
    }, 3200);

    return () => clearInterval(interval);
  }, [viewMode, isCarouselHovered, selectedProject, projects.length]);

  const categories: { label: string; value: CategoryFilter }[] = [
    { label: "ALL WORK", value: "all" },
    { label: "3D & INTERACTIVE", value: "3d" },
    { label: "UI/UX & MOBILE", value: "ui" },
    { label: "WEB & MARKETING", value: "web" },
  ];

  const handleOpenModal = (project: Project) => {
    setSelectedProject(project);
  };

  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto w-full relative z-20 bg-[#070708]">
      {/* Essential Design Tools Section (Semi-Circular Arch Showcase - Image 2 Design) */}
      <DesignToolsArc
        onExploreClick={() => {
          setViewMode("grid");
          const el = document.getElementById("designs-that-speak");
          if (el) {
            el.scrollIntoView({ behavior: "smooth" });
          }
        }}
      />

      {/* Top Hero Banner Section - "Designs that speak." + 3D Arc Cover Flow Carousel */}
      <div id="designs-that-speak" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16 relative">
        {/* Left Text Column */}
        <div className="lg:col-span-5 space-y-6 relative z-10">
          <span className="font-mono text-xs md:text-sm tracking-[0.3em] uppercase text-red-500 font-bold block flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            SELECTED WORK
          </span>

          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white leading-[1.05]">
            Designs that <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 to-amber-500">
              speak.
            </span>
          </h1>

          <p className="text-sm md:text-base font-light text-white/60 max-w-lg leading-relaxed">
            A collection of branding, UI/UX and digital experiences crafted with purpose and precision.
          </p>

          <div className="pt-2 flex items-center gap-4">
            <div className="h-0.5 w-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-full" />
            <span className="font-mono text-xs text-white/40 tracking-wider">
              15 SELECTED PROJECTS
            </span>
          </div>
        </div>

        {/* Right Column: 3D Arc Cover Flow Carousel (Replaces Old Stacked Deck) */}
        <div className="lg:col-span-7 flex flex-col items-center relative z-10 py-2">
          <div
            onMouseEnter={() => setIsCarouselHovered(true)}
            onMouseLeave={() => setIsCarouselHovered(false)}
            className="relative w-full py-4 overflow-hidden flex flex-col items-center select-none"
          >
            {/* Ambient Center Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[280px] bg-gradient-to-r from-orange-500/20 via-amber-500/25 to-yellow-500/15 rounded-full blur-[90px] pointer-events-none" />

            {/* 3D Arc Curved Cards Container */}
            <div className="relative w-full max-w-5xl h-[300px] sm:h-[360px] md:h-[410px] flex items-center justify-center perspective-[1200px] [transform-style:preserve-3d]">
              {projects.map((project, index) => {
                const offset = index - activeCarouselIndex;
                const absOffset = Math.abs(offset);

                // Hide items further away than 3 positions
                if (absOffset > 3) return null;

                // Responsive 3D Arc spacing
                const isMobile = windowWidth < 640;
                const isTablet = windowWidth >= 640 && windowWidth < 1024;
                const stepX = isMobile ? 82 : isTablet ? 130 : 175;

                const rotateY = offset === 0 ? 0 : offset < 0 ? 25 + absOffset * 6 : -25 - absOffset * 6;
                const translateX = offset * stepX;
                const translateZ = isMobile ? -absOffset * 50 : -absOffset * 95;
                const scale = offset === 0 ? (isMobile ? 1.02 : 1.05) : Math.max(1 - absOffset * 0.1, 0.72);
                const opacity = offset === 0 ? 1 : Math.max(1 - absOffset * 0.15, 0.65);
                const zIndex = 30 - absOffset * 5;

                return (
                  <motion.div
                    key={project.id}
                    initial={false}
                    animate={{
                      x: translateX,
                      z: translateZ,
                      rotateY: rotateY,
                      scale: scale,
                      opacity: opacity,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 240,
                      damping: 24,
                      mass: 0.8,
                    }}
                    onClick={() => {
                      if (offset === 0) {
                        handleOpenModal(project);
                      } else {
                        setActiveCarouselIndex(index);
                      }
                    }}
                    style={{
                      zIndex: zIndex,
                      transformStyle: "preserve-3d",
                    }}
                    className={`absolute w-[155px] sm:w-[220px] md:w-[260px] aspect-[3/4.2] rounded-[18px] sm:rounded-[24px] overflow-hidden border cursor-pointer group transition-all duration-500 shadow-2xl ${offset === 0
                        ? "border-orange-500/80 shadow-[0_20px_50px_rgba(249,115,22,0.35)] ring-1 ring-orange-500/50"
                        : "border-white/20 hover:border-orange-500/40 shadow-[0_15px_30px_rgba(0,0,0,0.8)]"
                      }`}
                  >
                    {/* Full Cover Project Image */}
                    <img
                      src={project.coverImage || project.images?.[0]?.url || "/projects/innospark/3d-modeling/caffiscaler-hero-cover.webp"}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />

                    {/* Top Category Badge & ID */}
                    <div className="absolute top-3 left-3 right-3 flex justify-between items-center z-20">
                      <span className="px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/25 text-[9px] font-mono font-bold text-white uppercase tracking-wider shadow-lg">
                        {project.category}
                      </span>
                      <span className="font-mono text-[10px] font-black text-orange-400 bg-black/40 backdrop-blur-md px-2 py-0.5 rounded-full border border-orange-500/40 shadow-lg">
                        {project.id}
                      </span>
                    </div>

                    {/* Bottom Text Shader */}
                    <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end z-20">
                      <h4 className="text-sm font-black text-white uppercase tracking-tight group-hover:text-orange-400 transition-colors drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)] line-clamp-1">
                        {project.title}
                      </h4>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Carousel Navigation Controls */}
            <div className="flex items-center gap-4 mt-4 z-20">
              <button
                onClick={() => setActiveCarouselIndex((prev) => (prev > 0 ? prev - 1 : projects.length - 1))}
                className="w-8 h-8 rounded-full bg-white/5 border border-white/15 hover:border-orange-500 hover:bg-orange-500/20 text-white flex items-center justify-center transition-all duration-300 shadow-lg group"
                aria-label="Previous project"
              >
                <ChevronLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform text-white/80 group-hover:text-orange-400" />
              </button>

              <div className="flex items-center gap-1.5">
                {projects.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveCarouselIndex(idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${activeCarouselIndex === idx
                        ? "w-6 bg-orange-500 shadow-[0_0_12px_rgba(249,115,22,0.8)]"
                        : "w-1.5 bg-white/20 hover:bg-white/40"
                      }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={() => setActiveCarouselIndex((prev) => (prev < projects.length - 1 ? prev + 1 : 0))}
                className="w-8 h-8 rounded-full bg-white/5 border border-white/15 hover:border-orange-500 hover:bg-orange-500/20 text-white flex items-center justify-center transition-all duration-300 shadow-lg group"
                aria-label="Next project"
              >
                <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform text-white/80 group-hover:text-orange-400" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Filter Tabs Navigation (Grid View Only) */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-10 border-t border-white/10 pt-8">
        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2.5 md:gap-3">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setFilter(cat.value)}
              className={`px-4 py-2 rounded-full text-xs font-mono tracking-wider border transition-all duration-300 ${filter === cat.value
                  ? "bg-orange-500 text-black border-orange-500 font-bold shadow-lg shadow-orange-500/20"
                  : "bg-white/5 text-white/60 border-white/10 hover:border-orange-500/30 hover:text-white"
                }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Projects Grid View - Split Half Cover Photo / Half Design Info */}
      <motion.div layout className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              key={project.id}
              onClick={() => handleOpenModal(project)}
              className="group p-0 rounded-3xl overflow-hidden cursor-pointer border border-white/10 hover:border-orange-500/50 bg-[#0d0e13] hover:bg-[#111218] transition-all duration-500 shadow-2xl flex flex-col sm:flex-row min-h-[300px] sm:min-h-[290px] relative"
            >
              {/* Left Half: Clean Visible Cover Photo Showcase (48% Width) */}
              <div className="w-full sm:w-[48%] h-52 sm:h-auto relative overflow-hidden shrink-0 bg-black/60">
                <img
                  src={project.coverImage || project.images?.[0]?.url || "/projects/innospark/3d-modeling/caffiscaler-hero-cover.webp"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                />
                {/* Subtle Right Shadow Fade for Smooth Split Transition */}
                <div className="absolute inset-y-0 right-0 w-10 bg-gradient-to-r from-transparent to-[#0d0e13] hidden sm:block pointer-events-none" />
                <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-b from-transparent to-[#0d0e13] sm:hidden pointer-events-none" />

                {/* Floating Media Badges on Image */}
                <div className="absolute top-3 left-3 flex items-center gap-1.5 z-10">
                  {project.videos && project.videos.length > 0 && (
                    <span className="px-2.5 py-1 rounded-full bg-black/75 backdrop-blur-md border border-amber-500/40 text-[9px] font-mono font-bold text-amber-300 uppercase tracking-wider shadow-lg flex items-center gap-1">
                      <Film className="w-2.5 h-2.5" />
                      {project.videos.length} VIDEO
                    </span>
                  )}
                  {project.images && project.images.length > 0 && (
                    <span className="px-2.5 py-1 rounded-full bg-black/75 backdrop-blur-md border border-orange-500/40 text-[9px] font-mono font-bold text-orange-300 uppercase tracking-wider shadow-lg flex items-center gap-1">
                      <Box className="w-2.5 h-2.5" />
                      {project.images.length} MEDIA
                    </span>
                  )}
                </div>
              </div>

              {/* Right Half: Project Design & Info Section (52% Width) */}
              <div className="w-full sm:w-[52%] p-5 sm:p-6 flex flex-col justify-between relative z-10 bg-gradient-to-br from-[#0d0e13] to-[#08080a]">
                {/* Top Row: ID Badge & Category */}
                <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-3">
                  <div className="flex items-center gap-2.5">
                    <span className="font-mono text-2xl font-black text-orange-400 group-hover:text-orange-300 transition-colors">
                      {project.id}
                    </span>
                    <span className="h-3.5 w-[1px] bg-white/20" />
                    <span className="font-mono text-[10px] tracking-[0.18em] text-white/60 uppercase font-bold line-clamp-1">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Middle: Project Title */}
                <div className="my-auto py-2">
                  <h3 className="text-lg sm:text-xl font-black tracking-tight text-white uppercase group-hover:text-orange-400 transition-colors duration-300 leading-snug">
                    {project.title}
                  </h3>
                </div>

                {/* Bottom Row: Tags & Interactive Circle Arrow */}
                <div className="pt-3 border-t border-white/10 flex justify-between items-end gap-2 mt-2">
                  <div className="flex flex-wrap gap-1.5 max-w-[78%]">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-[9px] font-mono text-white/70 group-hover:border-white/25 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:bg-orange-500 group-hover:text-black group-hover:border-orange-500 transition-all duration-300 shadow-md shrink-0">
                    <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Case Study / Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/85 backdrop-blur-md"
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-5xl bg-[#0c0d10] border border-white/15 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-10 z-10 my-4 sm:my-8 max-h-[92vh] overflow-y-auto shadow-2xl custom-scrollbar"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 sm:top-6 sm:right-6 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/5 border border-white/10 hover:bg-orange-500 hover:text-black hover:border-orange-500 text-white/70 transition-all duration-300 flex items-center justify-center z-20"
                aria-label="Close modal"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              {/* Modal Header */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-mono text-xs text-orange-400 font-semibold px-2.5 py-1 rounded-md bg-orange-500/10 border border-orange-500/20">
                    PROJECT {selectedProject.id}
                  </span>
                  <span className="font-mono text-xs tracking-[0.2em] text-white/40 uppercase">
                    {selectedProject.category}
                  </span>
                </div>
                <h2 className="text-2xl md:text-4xl font-black text-white tracking-tight">
                  {selectedProject.title}
                </h2>
              </div>

              {/* 1. Video Production Showcase Section */}
              {selectedProject.videos && selectedProject.videos.length > 0 && (
                <div className="mb-8 space-y-4">
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <h4 className="text-sm font-mono tracking-widest text-orange-400 uppercase flex items-center gap-2">
                      <Film className="w-4 h-4" />
                      ANIMATION & VIDEO SHOWCASE ({selectedProject.videos.length})
                    </h4>
                  </div>
                  {selectedProject.videos.map((vid, idx) => (
                    <div key={idx} className="space-y-3">
                      <div className="relative rounded-2xl overflow-hidden bg-black/80 border border-white/15 aspect-video shadow-2xl">
                        <video
                          src={vid.url}
                          autoPlay
                          muted
                          loop
                          playsInline
                          controls
                          preload="auto"
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="flex items-center justify-between px-1">
                        <p className="text-xs md:text-sm font-medium text-white">
                          {vid.title}
                        </p>
                        {vid.category && (
                          <span className="text-[10px] font-mono text-orange-400 uppercase tracking-widest px-2.5 py-1 rounded bg-orange-500/10 border border-orange-500/20">
                            {vid.category}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* 2. Media Gallery Section - Grouped into Separate Folder Frames */}
              {selectedProject.images && selectedProject.images.length > 0 && (
                <div className="mb-10 space-y-8">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-white/10 pb-3 gap-2">
                    <h4 className="text-sm font-mono tracking-widest text-orange-400 uppercase flex items-center gap-2">
                      <Palette className="w-4 h-4" />
                      PROJECT ASSET FOLDERS ({selectedProject.images.length} TOTAL FILES)
                    </h4>
                    <span className="text-xs text-white/40 font-mono">Each folder is displayed in its own section</span>
                  </div>

                  {/* Group images into separate animated slideshow folder frames */}
                  {Array.from(
                    new Set(
                      selectedProject.images.map((img) =>
                        img.category ? img.category.split("/")[0].trim() : "General"
                      )
                    )
                  ).map((folderName) => {
                    const folderImages = selectedProject.images!.filter(
                      (img) => (img.category ? img.category.split("/")[0].trim() : "General") === folderName
                    );

                    return (
                      <ModalFolderSlideshow
                        key={folderName}
                        folderName={folderName}
                        folderImages={folderImages}
                        projectId={selectedProject.id}
                        onEnlarge={(url) => setLightboxImage(url)}
                      />
                    );
                  })}
                </div>
              )}

              {/* 3. Detailed Breakdown Cards (Positioned Below Project Images) */}
              {selectedProject.details && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 pt-4 border-t border-white/10">
                  {selectedProject.details.concept && (
                    <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-orange-500/30 transition-colors">
                      <div className="flex items-center gap-2 text-orange-400 font-mono text-xs uppercase tracking-wider mb-2 font-bold">
                        <Sparkles className="w-4 h-4" />
                        <span>Concept</span>
                      </div>
                      <p className="text-xs md:text-sm text-white/80 leading-relaxed font-light">
                        {selectedProject.details.concept}
                      </p>
                    </div>
                  )}

                  {selectedProject.details.strategy && (
                    <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-orange-500/30 transition-colors">
                      <div className="flex items-center gap-2 text-orange-400 font-mono text-xs uppercase tracking-wider mb-2 font-bold">
                        <Sparkles className="w-4 h-4" />
                        <span>Strategy</span>
                      </div>
                      <p className="text-xs md:text-sm text-white/80 leading-relaxed font-light">
                        {selectedProject.details.strategy}
                      </p>
                    </div>
                  )}

                  {selectedProject.details.environmentPhysics && (
                    <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-orange-500/30 transition-colors">
                      <div className="flex items-center gap-2 text-orange-400 font-mono text-xs uppercase tracking-wider mb-2 font-bold">
                        <Sparkles className="w-4 h-4" />
                        <span>Environment & Physics</span>
                      </div>
                      <p className="text-xs md:text-sm text-white/80 leading-relaxed font-light">
                        {selectedProject.details.environmentPhysics}
                      </p>
                    </div>
                  )}

                  {selectedProject.details.interactionsAudio && (
                    <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-amber-500/30 transition-colors">
                      <div className="flex items-center gap-2 text-amber-400 font-mono text-xs uppercase tracking-wider mb-2 font-bold">
                        <Layers className="w-4 h-4" />
                        <span>Interactions & Audio</span>
                      </div>
                      <p className="text-xs md:text-sm text-white/80 leading-relaxed font-light">
                        {selectedProject.details.interactionsAudio}
                      </p>
                    </div>
                  )}

                  {selectedProject.details.contentCreation && (
                    <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-amber-500/30 transition-colors">
                      <div className="flex items-center gap-2 text-amber-400 font-mono text-xs uppercase tracking-wider mb-2 font-bold">
                        <Layers className="w-4 h-4" />
                        <span>Content Creation</span>
                      </div>
                      <p className="text-xs md:text-sm text-white/80 leading-relaxed font-light">
                        {selectedProject.details.contentCreation}
                      </p>
                    </div>
                  )}

                  {selectedProject.details.execution && (
                    <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-emerald-500/30 transition-colors">
                      <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs uppercase tracking-wider mb-2 font-bold">
                        <Monitor className="w-4 h-4" />
                        <span>Execution</span>
                      </div>
                      <p className="text-xs md:text-sm text-white/80 leading-relaxed font-light">
                        {selectedProject.details.execution}
                      </p>
                    </div>
                  )}

                  {selectedProject.details.presentation && (
                    <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-emerald-500/30 transition-colors">
                      <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs uppercase tracking-wider mb-2 font-bold">
                        <Monitor className="w-4 h-4" />
                        <span>Presentation</span>
                      </div>
                      <p className="text-xs md:text-sm text-white/80 leading-relaxed font-light">
                        {selectedProject.details.presentation}
                      </p>
                    </div>
                  )}
                </div>
              )}

              {/* 4. 3D Structural Segments Breakdown (Positioned Below Project Images) */}
              {selectedProject.details?.segments && selectedProject.details.segments.length > 0 && (
                <div className="mb-8 p-6 rounded-2xl bg-[#0e0f13] border border-orange-500/25 shadow-lg relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 rounded-full blur-2xl pointer-events-none" />
                  <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                    <div className="flex items-center gap-2 text-orange-400 font-mono text-xs uppercase tracking-wider font-bold">
                      <Box className="w-4 h-4 text-orange-500" />
                      <span>3D MODELING & STRUCTURAL SEGMENTS BREAKDOWN</span>
                    </div>
                    <span className="text-[10px] font-mono text-orange-400/80 bg-orange-500/10 px-2.5 py-0.5 rounded border border-orange-500/20">
                      /3d-modeling/
                    </span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                    {selectedProject.details.segments.map((seg, sIdx) => (
                      <div
                        key={sIdx}
                        className="p-4 rounded-xl bg-white/[0.025] border border-white/10 hover:border-orange-500/40 transition-all duration-300 group"
                      >
                        <h5 className="text-xs font-mono font-bold text-orange-300 mb-1.5 flex items-center gap-2 group-hover:text-orange-400 transition-colors">
                          <span className="w-2 h-2 rounded-full bg-orange-500 inline-block group-hover:scale-125 transition-transform" />
                          {seg.title}
                        </h5>
                        <p className="text-xs text-white/70 font-light leading-relaxed pl-4 border-l border-orange-500/20">
                          {seg.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 5. General Description if no structured details */}
              {!selectedProject.details && (
                <p className="text-sm md:text-base text-white/70 font-light leading-relaxed mb-8 pt-4 border-t border-white/10">
                  {selectedProject.description}
                </p>
              )}

              {/* Campaign Links Section */}
              {selectedProject.socialLinks && selectedProject.socialLinks.length > 0 && (
                <div className="mb-8 pt-6 border-t border-white/10">
                  <h4 className="text-sm font-mono tracking-widest text-orange-400 uppercase flex items-center gap-2 mb-4">
                    <Globe className="w-4 h-4" />
                    CAMPAIGN CHANNELS & LIVE LINKS
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.socialLinks.map((linkItem, idx) => (
                      <a
                        key={idx}
                        href={linkItem.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/15 hover:border-orange-500/50 hover:bg-orange-500/10 text-white/90 hover:text-orange-400 font-mono text-xs transition-all duration-300 flex items-center gap-2.5 group"
                      >
                        {linkItem.platform === "facebook" ? (
                          <svg className="w-4 h-4 text-blue-400 group-hover:scale-110 transition-transform fill-current" viewBox="0 0 24 24">
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                          </svg>
                        ) : linkItem.platform === "instagram" ? (
                          <svg className="w-4 h-4 text-pink-400 group-hover:scale-110 transition-transform fill-current" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                          </svg>
                        ) : (
                          <Globe className="w-4 h-4 text-orange-400 group-hover:scale-110 transition-transform" />
                        )}
                        <span>{linkItem.label}</span>
                        <ExternalLink className="w-3.5 h-3.5 text-white/40 group-hover:text-orange-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {/* Tags & Tech */}
              <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-white/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-6 py-2.5 rounded-full bg-orange-500 text-black font-semibold font-mono text-xs hover:bg-orange-400 transition-colors"
                >
                  CLOSE CASE STUDY
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Lightbox / Fullscreen Image Viewer Modal */}
      <AnimatePresence>
        {lightboxImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-xl">
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 text-white hover:bg-orange-500 hover:text-black flex items-center justify-center transition-all z-50"
            >
              <X className="w-6 h-6" />
            </button>
            <motion.img
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              src={lightboxImage}
              alt="Enlarged view"
              className="max-w-full max-h-[90vh] object-contain rounded-xl shadow-2xl"
            />
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

