"use client";

import React, { useState, useEffect } from "react";
import { GitHubCalendar } from "react-github-calendar";
import { ExternalLink } from "lucide-react";

export default function GithubCalendarSection() {
  const [mounted, setMounted] = useState(false);
  const [selectedYear, setSelectedYear] = useState<number>(2026);
  const [githubStats, setGithubStats] = useState<{
    publicRepos: number;
    followers: number;
    avatarUrl: string;
    bio: string;
  } | null>(null);

  useEffect(() => {
    setMounted(true);
    fetch("https://api.github.com/users/Edmund0007")
      .then((res) => res.json())
      .then((data) => {
        if (data && data.login) {
          setGithubStats({
            publicRepos: data.public_repos || 0,
            followers: data.followers || 0,
            avatarUrl: data.avatar_url || "https://github.com/Edmund0007.png",
            bio: data.bio || "IT Undergraduate @ SLIIT | Interactive Media & Software Engineering",
          });
        }
      })
      .catch((err) => console.error("GitHub API fetch error:", err));
  }, []);

  // Theme matching GitHub Dark & Portfolio Emerald Accent
  const customTheme = {
    dark: [
      "#161b22", // Level 0 (no activity)
      "#0e4429", // Level 1
      "#006d32", // Level 2
      "#26a641", // Level 3
      "#39d353", // Level 4 (high activity)
    ],
  };

  return (
    <section id="github-activity" className="py-16 px-6 md:px-12 max-w-7xl mx-auto w-full relative z-20 bg-[#070708]">
      <div className="glass-card p-6 md:p-10 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden">
        {/* Subtle Background Glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 pb-6 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-mono text-xs tracking-[0.25em] uppercase text-emerald-400 font-bold">
                GITHUB OPEN SOURCE ACTIVITY
              </span>
            </div>
            <h3 className="text-2xl md:text-4xl font-black text-white tracking-tight uppercase flex items-center gap-3">
              CONTRIBUTIONS & CODE TELEMETRY
            </h3>
          </div>

          <a
            href="https://github.com/Edmund0007"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl bg-white/5 border border-white/15 hover:border-emerald-500/50 hover:bg-emerald-500/10 text-white hover:text-emerald-400 text-xs font-mono tracking-wider transition-all duration-300 group shrink-0"
          >
            <svg className="w-4 h-4 fill-current text-white/80 group-hover:text-emerald-400" viewBox="0 0 24 24">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482C19.138 20.197 22 16.44 22 12.017 22 6.484 17.522 2 12 2z"/>
            </svg>
            <span className="font-semibold">@Edmund0007</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100" />
          </a>
        </div>

        {/* GitHub Contribution Calendar Box */}
        <div className="bg-[#0d1117] border border-[#30363d] rounded-2xl p-6 shadow-inner min-h-[160px] flex items-center justify-center">
          {mounted ? (
            <div className="overflow-x-auto pb-4 custom-scrollbar flex justify-center w-full">
              <GitHubCalendar
                username="Edmund0007"
                blockSize={13}
                blockMargin={4}
                fontSize={12}
                colorScheme="dark"
                theme={customTheme}
              />
            </div>
          ) : (
            <div className="flex items-center gap-3 text-xs font-mono text-white/40 animate-pulse py-8">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span>Loading GitHub Telemetry...</span>
            </div>
          )}
        </div>

        {/* Contribution Activity Timeline & Year Switcher */}
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col md:flex-row items-start justify-between gap-6">
          <div className="flex-1 w-full">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-base font-bold text-white tracking-wide">
                Contribution activity
              </h4>
              <div className="flex gap-2">
                <button
                  onClick={() => setSelectedYear(2026)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-bold transition-all duration-200 ${
                    selectedYear === 2026
                      ? "bg-blue-600 text-white shadow-md"
                      : "bg-white/5 text-white/50 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  2026
                </button>
                <button
                  onClick={() => setSelectedYear(2025)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-bold transition-all duration-200 ${
                    selectedYear === 2025
                      ? "bg-blue-600 text-white shadow-md"
                      : "bg-white/5 text-white/50 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  2025
                </button>
              </div>
            </div>

            {/* Timeline details */}
            <div className="bg-[#0d1117]/60 border border-white/5 rounded-xl p-5 text-xs text-white/60 font-mono flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>July {selectedYear}</span>
              </div>
              <div className="text-white/40">
                Edmund0007 activity telemetry active
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
