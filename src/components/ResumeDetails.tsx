"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Award,
  GraduationCap,
  Briefcase,
  BookmarkCheck,
  Users,
  Globe,
  Sparkles,
  CheckCircle2,
  Star,
  Layers,
  Code,
  Box,
} from "lucide-react";

export default function ResumeDetails() {
  const [activeTab, setActiveTab] = useState<"all" | "education" | "achievements" | "skills">("all");

  const education = [
    {
      degree: "BSc (Hons) in Information Technology",
      spec: "Specialising in Interactive Media",
      institution: "Sri Lanka Institute of Information Technology (SLIIT)",
      period: "Feb 2023 – Dec 2027",
      status: "In Progress",
      icon: GraduationCap,
      highlights: [
        "Specialized in 3D Prototyping, UI/UX Design, and Interactive Systems",
        "Active Member of the Microsoft Club",
      ],
    },
    {
      degree: "Advanced Level Examination",
      spec: "Commerce Stream",
      institution: "S. Thomas’ College",
      period: "Class of 2022",
      status: "Completed",
      icon: GraduationCap,
      highlights: [
        "Vice President – Student Christian Movement (SCM)",
        "Member of Gavel Club, IT Club & Rugby Team",
      ],
    },
    {
      degree: "Ordinary Level Examination",
      spec: "General Studies",
      institution: "S. Thomas’ College",
      period: "Class of 2019",
      status: "Completed",
      icon: GraduationCap,
      highlights: ["Foundation in IT, Commerce, and English Communication"],
    },
  ];

  const achievements = [
    {
      title: "Flower Boutique Commercial Contract",
      tag: "COMMERCIAL CONTRACT",
      desc: "Awarded a full development contract to design and build the web platform and mobile application for Flower Boutique LK, recognizing digital marketing performance.",
      icon: Award,
      badgeColor: "bg-orange-500/20 text-orange-400 border-orange-500/30",
    },
    {
      title: "LoolCondera Matcha Packaging Concept",
      tag: "PACKAGING & BRANDING",
      desc: "Selected to develop an innovative packaging concept and 3D dieline visualization for the LoolCondera Matcha Tea brand identity system.",
      icon: Sparkles,
      badgeColor: "bg-amber-500/20 text-amber-400 border-amber-500/30",
    },
    {
      title: "CaffiScaler Unified 3D Prototype",
      tag: "3D HARDWARE PROTOTYPE",
      desc: "Engineered high-fidelity 3D CAD modeling, photorealistic rendering, and 3D printing with embedded circuitry for CaffiScaler.",
      icon: Box,
      badgeColor: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
    },
    {
      title: "Academic Mobile UI Showcase",
      tag: "UI/UX EXCELLENCE",
      desc: "Produced multi-destination trip exploration dashboards and responsive native XML Android Studio UI layouts featured in academic showcases.",
      icon: Layers,
      badgeColor: "bg-orange-500/20 text-orange-400 border-orange-500/30",
    },
    {
      title: "Creative Direction & Team Leadership",
      tag: "LEADERSHIP & DIRECTION",
      desc: "Recognized for creative direction, visual storytelling, and structural team collaboration across commercial and academic projects.",
      icon: Star,
      badgeColor: "bg-amber-500/20 text-amber-400 border-amber-500/30",
    },
  ];

  const skills = [
    {
      category: "UI/UX Design & Prototyping",
      icon: Layers,
      items: ["Figma", "Adobe XD", "Photoshop", "Web Prototyping", "UX Research", "Usability Testing"],
    },
    {
      category: "AI Design & Web Development",
      icon: Code,
      items: ["ChatGPT", "Adobe Firefly", "Midjourney", "Figma AI", "GitHub Copilot", "WordPress", "Responsive Web Design"],
    },
    {
      category: "Languages & Frameworks",
      icon: Code,
      items: ["HTML5 / CSS3", "JavaScript (ES6+)", "Java", "MERN Stack Basics", "Kotlin", "Android Studio", "SQL"],
    },
    {
      category: "Multimedia & 3D Prototyping",
      icon: Box,
      items: ["Unity Engine", "Blender 3D", "Moho Vector Animation", "Video Editing", "Motion Graphics", "3D Prototyping"],
    },
  ];

  const certifications = [
    {
      provider: "Google Skillshop / Digital Academy",
      list: [
        "Analytics & Measurement: Google Analytics, Google Ads Measurement, Conversion Optimization",
        "Google Ads: Search, Display, Video, Apps, Creative, AI-Powered Shopping Ads",
        "Campaign Management: Display & Video 360, Campaign Manager 360",
        "Foundations: Fundamentals of Digital Marketing (Grow with Google)",
      ],
    },
    {
      provider: "HubSpot Academy",
      list: ["SEO, Content Marketing, Social Media Marketing"],
    },
  ];

  const extracurriculars = [
    {
      institution: "S. Thomas’ College",
      roles: ["Vice President – Student Christian Movement (SCM)", "Member – Gavel Club", "Member – IT Club", "Member – Rugby Team"],
    },
    {
      institution: "SLIIT",
      roles: ["Active Member – Microsoft Club"],
    },
  ];

  const languages = [
    { name: "Sinhala", level: "Native / Fluent" },
    { name: "Tamil", level: "Native / Fluent" },
    { name: "English", level: "Professional" },
  ];

  return (
    <section id="education" className="py-28 px-6 md:px-12 max-w-7xl mx-auto w-full relative z-20 bg-[#070708] border-t border-white/10">
      {/* Header & Category Switcher */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
        <div>
          <span className="font-mono text-xs md:text-sm tracking-[0.3em] uppercase text-orange-400 font-bold mb-3 block">
            QUALIFICATIONS & ACCOMPLISHMENTS
          </span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight text-white uppercase leading-tight">
            CAREER{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400">
              PATHWAY
            </span>
          </h2>
        </div>

        {/* Tab Filters */}
        <div className="mt-6 md:mt-0 flex flex-wrap gap-2 bg-white/5 p-1.5 rounded-2xl sm:rounded-full border border-white/10">
          {[
            { id: "all", label: "OVERVIEW" },
            { id: "education", label: "🎓 EDUCATION" },
            { id: "achievements", label: "🏆 ACHIEVEMENTS" },
            { id: "skills", label: "💡 SKILLS & CERTS" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as typeof activeTab)}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full font-mono text-[11px] sm:text-xs tracking-wider transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-orange-500 text-black font-bold shadow-lg"
                  : "text-white/60 hover:text-white hover:bg-white/5"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content Layout */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.35 }}
          className="space-y-16"
        >
          {/* Section 1: Education & Achievements Bento Grid */}
          {(activeTab === "all" || activeTab === "education" || activeTab === "achievements") && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* EDUCATION TIMELINE (Left 6 Columns) */}
              {(activeTab === "all" || activeTab === "education") && (
                <div className={`${activeTab === "education" ? "lg:col-span-12" : "lg:col-span-6"} space-y-6`}>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-400">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white uppercase tracking-wider">EDUCATION TIMELINE</h3>
                      <p className="text-xs text-white/50 font-light">Academic qualifications & specialized degrees</p>
                    </div>
                  </div>

                  <div className="space-y-6 relative border-l-2 border-orange-500/30 pl-6 ml-4">
                    {education.map((edu, idx) => (
                      <motion.div
                        key={idx}
                        whileHover={{ x: 4 }}
                        className="bg-[#0d0e12] border border-white/10 rounded-2xl p-6 hover:border-orange-500/40 hover:bg-[#12131b] transition-all duration-300 relative group shadow-xl"
                      >
                        {/* Timeline Node Glow Bullet */}
                        <div className="absolute -left-[31px] top-7 w-3 h-3 rounded-full bg-orange-500 border-2 border-[#070708] group-hover:scale-150 transition-transform duration-300 shadow-[0_0_10px_rgba(249,115,22,0.8)]" />

                        <div className="flex flex-wrap justify-between items-center gap-2 mb-2">
                          <span className="font-mono text-xs font-bold text-orange-400 bg-orange-500/10 px-3 py-1 rounded-full border border-orange-500/20">
                            {edu.period}
                          </span>
                          <span className="text-[10px] font-mono uppercase tracking-wider text-white/40 border border-white/10 px-2.5 py-0.5 rounded-md">
                            {edu.status}
                          </span>
                        </div>

                        <h4 className="text-lg font-black text-white group-hover:text-orange-400 transition-colors mt-1">
                          {edu.degree}
                        </h4>
                        <p className="text-xs font-semibold text-orange-300/90 mt-0.5">{edu.spec}</p>
                        <p className="text-xs text-white/50 mt-1">{edu.institution}</p>

                        <div className="mt-4 pt-3 border-t border-white/5 space-y-1.5">
                          {edu.highlights.map((h, hIdx) => (
                            <div key={hIdx} className="flex items-center gap-2 text-xs font-light text-white/60">
                              <CheckCircle2 className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                              <span>{h}</span>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {/* ACHIEVEMENTS BENTO Showcase (Right 6 Columns) */}
              {(activeTab === "all" || activeTab === "achievements") && (
                <div className={`${activeTab === "achievements" ? "lg:col-span-12" : "lg:col-span-6"} space-y-6`}>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                      <Award className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white uppercase tracking-wider">KEY ACHIEVEMENTS</h3>
                      <p className="text-xs text-white/50 font-light">Commercial contracts & design recognitions</p>
                    </div>
                  </div>

                  <div className="space-y-4 pt-2">
                    {achievements.map((item, idx) => {
                      const IconComponent = item.icon;
                      return (
                        <motion.div
                          key={idx}
                          whileHover={{ x: 4 }}
                          className="py-3.5 border-b border-white/5 last:border-b-0 transition-all duration-300 group flex items-start gap-4"
                        >
                          <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0 group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-black transition-all">
                            <IconComponent className="w-4 h-4" />
                          </div>
                          <div className="space-y-1">
                            <div className="flex flex-wrap items-center gap-2">
                              <span className={`font-mono text-[10px] font-bold px-2.5 py-0.5 rounded-full border ${item.badgeColor}`}>
                                {item.tag}
                              </span>
                            </div>
                            <h4 className="text-sm font-bold text-white group-hover:text-amber-400 transition-colors pt-0.5">
                              {item.title}
                            </h4>
                            <p className="text-xs font-light text-white/60 leading-relaxed">
                              {item.desc}
                            </p>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Section 2: Technical Skills, Certifications, Extracurriculars & Languages */}
          {(activeTab === "all" || activeTab === "skills") && (
            <div className="space-y-12 pt-6">
              {/* TECHNICAL SKILLS BENTO GRID */}
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-400">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white uppercase tracking-wider">TECHNICAL SKILLS MATRIX</h3>
                    <p className="text-xs text-white/50 font-light">Core proficiencies across software, frameworks & multimedia</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {skills.map((skillGroup, idx) => {
                    const GroupIcon = skillGroup.icon;
                    return (
                      <motion.div
                        key={idx}
                        whileHover={{ y: -4 }}
                        className="bg-[#0d0e12] border border-white/10 rounded-2xl p-5 hover:border-orange-500/40 hover:bg-[#12131b] transition-all duration-300 flex flex-col justify-between shadow-xl"
                      >
                        <div>
                          <div className="flex items-center gap-2.5 mb-4">
                            <GroupIcon className="w-4 h-4 text-orange-400" />
                            <h4 className="font-mono text-xs font-bold text-orange-400 uppercase tracking-wider">
                              {skillGroup.category}
                            </h4>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {skillGroup.items.map((item) => (
                              <span
                                key={item}
                                className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-[11px] font-sans text-white/70 hover:bg-orange-500/10 hover:border-orange-500/30 hover:text-white transition-colors"
                              >
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* CERTIFICATIONS, EXTRACURRICULARS & LANGUAGES */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Certifications */}
                <div className="bg-[#0d0e12] border border-white/10 rounded-2xl p-6 hover:border-orange-500/30 transition-all shadow-xl">
                  <div className="flex items-center gap-2.5 mb-5 border-b border-white/10 pb-3">
                    <BookmarkCheck className="w-5 h-5 text-orange-400" />
                    <h4 className="font-bold text-white text-sm uppercase tracking-wider">CERTIFICATIONS</h4>
                  </div>
                  <div className="space-y-4">
                    {certifications.map((certGroup, idx) => (
                      <div key={idx} className="space-y-2">
                        <span className="font-mono text-[11px] font-bold text-orange-400 block">
                          {certGroup.provider}
                        </span>
                        <ul className="space-y-1.5">
                          {certGroup.list.map((cert, cIdx) => (
                            <li key={cIdx} className="text-xs font-light text-white/60 leading-relaxed flex items-start gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-1.5 shrink-0" />
                              <span>{cert}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Leadership & Extracurriculars */}
                <div className="bg-[#0d0e12] border border-white/10 rounded-2xl p-6 hover:border-amber-500/30 transition-all shadow-xl">
                  <div className="flex items-center gap-2.5 mb-5 border-b border-white/10 pb-3">
                    <Users className="w-5 h-5 text-amber-400" />
                    <h4 className="font-bold text-white text-sm uppercase tracking-wider">LEADERSHIP & CLUBS</h4>
                  </div>
                  <div className="space-y-4">
                    {extracurriculars.map((activity, idx) => (
                      <div key={idx} className="space-y-2">
                        <span className="font-mono text-[11px] font-bold text-amber-400 block">
                          {activity.institution}
                        </span>
                        <ul className="space-y-1.5">
                          {activity.roles.map((role, rIdx) => (
                            <li key={rIdx} className="text-xs font-light text-white/60 flex items-start gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                              <span>{role}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Languages Proficiency */}
                <div className="bg-[#0d0e12] border border-white/10 rounded-2xl p-6 hover:border-yellow-500/30 transition-all shadow-xl">
                  <div className="flex items-center gap-2.5 mb-5 border-b border-white/10 pb-3">
                    <Globe className="w-5 h-5 text-yellow-400" />
                    <h4 className="font-bold text-white text-sm uppercase tracking-wider">LANGUAGES</h4>
                  </div>
                  <div className="space-y-3 pt-1">
                    {languages.map((lang, idx) => (
                      <div key={idx} className="flex justify-between items-center text-xs p-2.5 rounded-xl bg-white/5 border border-white/5">
                        <span className="text-white font-medium">{lang.name}</span>
                        <span className="font-mono text-[10px] font-bold text-yellow-400 uppercase tracking-wider bg-yellow-500/10 px-2.5 py-0.5 rounded-full border border-yellow-500/20">
                          {lang.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
