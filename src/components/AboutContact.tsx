"use client";

import React from "react";
import { Mail, ArrowUp, Phone, MapPin, ExternalLink } from "lucide-react";

export default function AboutContact() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="py-24 px-6 md:px-12 max-w-7xl mx-auto w-full relative z-20 bg-[#070708] border-t border-white/5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 mb-16">
        {/* Left Column: About Me & Resume */}
        <div id="about">
          <span className="font-mono text-xs md:text-sm tracking-[0.3em] uppercase text-orange-400 mb-3 block font-bold">
            ABOUT ME
          </span>
          <h3 className="text-3xl md:text-5xl font-black tracking-tighter text-white mb-6 uppercase">
            DRIVEN BY CREATIVITY
          </h3>
          <p className="text-sm md:text-base font-light text-white/70 leading-relaxed max-w-md mb-6">
            I am a motivated IT undergraduate student at SLIIT specializing in Interactive Media. I focus on creative coding, digital sketching, 3D prototyping, and interactive design.
          </p>
          <p className="text-sm md:text-base font-light text-white/50 leading-relaxed max-w-md">
            Currently pursuing my BSc (Hons) in Information Technology (Feb 2023 – Dec 2027), bridging technical engineering with digital arts and media.
          </p>

          {/* Download Resume CTA */}
          <a
            href="/resume.pdf"
            download="Edmund_Augustine_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full border border-orange-500/40 bg-orange-500/10 text-orange-300 text-xs font-mono tracking-wider uppercase hover:bg-orange-500 hover:text-black hover:border-orange-500 transition-all duration-300 group w-fit font-bold shadow-lg"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 group-hover:translate-y-0.5 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3" />
            </svg>
            <span>Download Official Resume</span>
          </a>
        </div>

        {/* Right Column: Contact Cards (Original Stage 1 Style + Direct Email Feature) */}
        <div className="flex flex-col justify-between">
          <div>
            <span className="font-mono text-xs md:text-sm tracking-[0.3em] uppercase text-orange-400 mb-3 block font-bold">
              GET IN TOUCH
            </span>
            <h3 className="text-3xl md:text-5xl font-black tracking-tighter text-white mb-6 uppercase">
              LET&apos;S TALK.
            </h3>

            {/* Contacts Cards */}
            <div className="space-y-3.5 max-w-md mb-6">
              {/* Email Card */}
              <a
                href="mailto:edmundaugustine12@gmail.com"
                className="glass-card p-4 rounded-2xl flex items-center gap-4 group hover:border-orange-500/50 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 group-hover:bg-orange-500 group-hover:text-black transition-all duration-300 shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="overflow-hidden flex-1">
                  <div className="text-[9px] font-mono tracking-wider text-white/40 uppercase">DIRECT EMAIL</div>
                  <div className="text-xs font-semibold text-white group-hover:text-orange-400 transition-colors truncate">edmundaugustine12@gmail.com</div>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-white/30 group-hover:text-orange-400 transition-colors" />
              </a>

              {/* LinkedIn Card */}
              <a
                href="https://www.linkedin.com/in/edmund-augustine-622a48385/"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-4 rounded-2xl flex items-center gap-4 group hover:border-orange-500/50 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 group-hover:bg-orange-500 group-hover:text-black transition-all duration-300 shrink-0">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </div>
                <div className="overflow-hidden flex-1">
                  <div className="text-[9px] font-mono tracking-wider text-white/40 uppercase">LINKEDIN</div>
                  <div className="text-xs font-semibold text-white group-hover:text-orange-400 transition-colors truncate">linkedin.com/in/edmund-augustine</div>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-white/30 group-hover:text-orange-400 transition-colors" />
              </a>

              {/* GitHub Card */}
              <a
                href="https://github.com/Edmund0007"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-4 rounded-2xl flex items-center gap-4 group hover:border-orange-500/50 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 group-hover:bg-orange-500 group-hover:text-black transition-all duration-300 shrink-0">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482C19.138 20.197 22 16.44 22 12.017 22 6.484 17.522 2 12 2z"/>
                  </svg>
                </div>
                <div className="overflow-hidden flex-1">
                  <div className="text-[9px] font-mono tracking-wider text-white/40 uppercase">GITHUB</div>
                  <div className="text-xs font-semibold text-white group-hover:text-orange-400 transition-colors truncate">github.com/Edmund0007</div>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-white/30 group-hover:text-orange-400 transition-colors" />
              </a>

              {/* Phone Card */}
              <a
                href="tel:+94759948727"
                className="glass-card p-4 rounded-2xl flex items-center gap-4 group hover:border-orange-500/50 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 group-hover:bg-orange-500 group-hover:text-black transition-all duration-300 shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="overflow-hidden flex-1">
                  <div className="text-[9px] font-mono tracking-wider text-white/40 uppercase">PHONE</div>
                  <div className="text-xs font-semibold text-white group-hover:text-orange-400 transition-colors truncate">+94-75 994 8727</div>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-white/30 group-hover:text-orange-400 transition-colors" />
              </a>

              {/* Location Card */}
              <div className="glass-card p-4 rounded-2xl flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[9px] font-mono tracking-wider text-white/40 uppercase">LOCATION</div>
                  <div className="text-xs font-semibold text-white">Bandarawela, Sri Lanka</div>
                </div>
              </div>
            </div>
          </div>

          {/* Social icons & Scroll top */}
          <div className="flex items-center justify-between max-w-md pt-6 border-t border-white/5">
            <div className="flex gap-3">
              <a
                href="https://github.com/Edmund0007"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 hover:border-orange-500/50 flex items-center justify-center text-white/60 hover:text-orange-400 transition-all duration-300"
                aria-label="GitHub"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482C19.138 20.197 22 16.44 22 12.017 22 6.484 17.522 2 12 2z"/>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/edmund-augustine-622a48385/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 hover:border-orange-500/50 flex items-center justify-center text-white/60 hover:text-orange-400 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a
                href="mailto:edmundaugustine12@gmail.com"
                className="w-10 h-10 rounded-full border border-white/10 hover:border-orange-500/50 flex items-center justify-center text-white/60 hover:text-orange-400 transition-all duration-300"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full bg-white/5 hover:bg-orange-500 border border-white/10 hover:border-orange-500 flex items-center justify-center text-white hover:text-black transition-all duration-300"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5 animate-pulse" />
            </button>
          </div>
        </div>
      </div>

      {/* Copyright row */}
      <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-[10px] font-mono tracking-widest text-white/30">
        <div>© 2026 EDMUND AUGUSTINE. ALL RIGHTS RESERVED.</div>
        <div className="mt-2 md:mt-0">DESIGN & DEV BY EDMUND AUGUSTINE</div>
      </div>
    </footer>
  );
}
