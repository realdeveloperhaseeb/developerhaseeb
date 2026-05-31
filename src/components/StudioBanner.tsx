"use client";

import { motion } from "framer-motion";
import { Reveal } from "./Reveal";
import { CONTACT } from "./contact";

const HIGHLIGHTS = [
  { k: "120+", v: "Projects delivered" },
  { k: "20+", v: "Countries served" },
  { k: "Senior", v: "Only experts, no juniors" },
];

export default function StudioBanner() {
  return (
    <section className="bg-white px-5 py-10 sm:py-14">
      <Reveal>
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-ink p-8 sm:p-12">
          {/* backdrop */}
          <div className="pointer-events-none absolute inset-0 grid-bg opacity-[0.06]" />
          <div className="pointer-events-none absolute -right-16 -top-20 h-72 w-72 rounded-full bg-brand-500/25 blur-[120px]" />
          <div className="pointer-events-none absolute -bottom-24 -left-10 h-64 w-64 rounded-full bg-brand-400/15 blur-[120px]" />

          <div className="relative grid items-center gap-10 lg:grid-cols-[1.3fr_1fr]">
            {/* Left: copy */}
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-brand-300">
                The company behind the work
              </span>

              <div className="mt-5 flex items-center gap-3">
                {/* studio mark */}
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 48 48"
                  fill="none"
                  aria-hidden
                >
                  <defs>
                    <linearGradient id="sb-grad" x1="6" y1="4" x2="42" y2="44">
                      <stop offset="0" stopColor="#32d583" />
                      <stop offset="1" stopColor="#027a48" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M24 2.5 42.5 13v22L24 45.5 5.5 35V13L24 2.5Z"
                    stroke="url(#sb-grad)"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M17.5 17 12 24l5.5 7M30.5 17 36 24l-5.5 7"
                    stroke="url(#sb-grad)"
                    strokeWidth="2.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="text-2xl font-bold tracking-tight text-white">
                  Developer<span className="text-brand-400">Studio</span>
                </span>
              </div>

              <p className="mt-4 max-w-md text-lg leading-relaxed text-white/60">
                Beyond my own work, I lead a full software studio — a senior team
                shipping products end-to-end for founders worldwide. See the
                team, services and case studies.
              </p>

              <motion.a
                href={CONTACT.studioUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="group mt-7 inline-flex items-center gap-2 rounded-full bg-brand-500 px-7 py-3.5 text-sm font-semibold text-ink transition-colors hover:bg-brand-400"
              >
                Visit {CONTACT.domain}
                <span className="transition-transform group-hover:translate-x-1">
                  ↗
                </span>
              </motion.a>
            </div>

            {/* Right: highlight stats */}
            <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
              {HIGHLIGHTS.map((h) => (
                <div
                  key={h.v}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 transition-colors hover:border-brand-500/40 hover:bg-white/[0.07]"
                >
                  <p className="text-2xl font-bold text-brand-400">{h.k}</p>
                  <p className="mt-0.5 text-sm text-white/60">{h.v}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
