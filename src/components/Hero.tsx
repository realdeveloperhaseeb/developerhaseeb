"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const word = {
  hidden: { opacity: 0, y: 28, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] as const },
  },
};

const HEADLINE = ["We", "build", "software", "that", "pays", "for", "itself."];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-white pt-32 pb-20 sm:pt-40 sm:pb-28"
    >
      {/* grid + aurora backdrop */}
      <div className="grid-bg absolute inset-0 -z-10" />
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="animate-aurora absolute -left-1/4 top-[-10%] h-[34rem] w-[34rem] rounded-full bg-brand-300/40 blur-[120px]" />
        <div className="animate-float absolute right-[-6%] top-[14%] h-[26rem] w-[26rem] rounded-full bg-brand-500/25 blur-[120px]" />
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-white to-transparent" />

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">
        {/* Left: copy */}
        <div>
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-brand-700"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-600" />
            </span>
            DeveloperStudio · led by Haseeb, CEO
          </motion.span>

          <h1 className="mt-6 text-balance text-[2.6rem] font-bold leading-[1.04] tracking-tight text-ink sm:text-6xl">
            <motion.span
              initial="hidden"
              animate="show"
              transition={{ staggerChildren: 0.08, delayChildren: 0.15 }}
              className="inline"
            >
              {HEADLINE.map((w, i) => (
                <motion.span
                  key={i}
                  variants={word}
                  className={`inline-block ${
                    w === "pays"
                      ? "bg-gradient-to-r from-brand-500 to-brand-700 bg-clip-text text-transparent"
                      : ""
                  }`}
                >
                  {w}
                  {i < HEADLINE.length - 1 ? " " : ""}
                </motion.span>
              ))}
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-muted"
          >
            I&apos;m <span className="font-semibold text-ink">Haseeb</span>,
            CEO &amp; Lead Developer of{" "}
            <span className="font-semibold text-ink">DeveloperStudio</span>. We
            partner with business owners across the globe — taking you from a
            messy problem to a polished product that drives real revenue.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.85 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-brand-600 hover:shadow-[0_18px_40px_-12px] hover:shadow-brand-500/70"
            >
              Book a discovery call
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-6 py-3.5 text-sm font-semibold text-ink transition-colors hover:border-brand-300 hover:bg-brand-50"
            >
              See how we work
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="mt-10 flex flex-wrap items-center gap-x-4 gap-y-3 text-sm text-muted"
          >
            <div className="flex -space-x-3">
              {[
                { i: "SM", from: "from-brand-400", to: "to-brand-600" },
                { i: "DO", from: "from-ink", to: "to-ink-soft" },
                { i: "ML", from: "from-brand-500", to: "to-brand-700" },
                { i: "HB", from: "from-emerald-400", to: "to-brand-600" },
              ].map((a, idx) => (
                <span
                  key={idx}
                  className={`flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-gradient-to-br ${a.from} ${a.to} text-[11px] font-semibold text-white shadow-sm`}
                >
                  {a.i}
                </span>
              ))}
            </div>
            <div className="flex flex-col">
              <span className="flex items-center gap-1 text-brand-500">
                {"★★★★★".split("").map((s, i) => (
                  <span key={i}>{s}</span>
                ))}
                <span className="ml-1 font-semibold text-ink">4.9/5</span>
              </span>
              <span>
                Trusted by <strong className="text-ink">120+</strong> founders
                in <strong className="text-ink">20+</strong> countries
              </span>
            </div>
          </motion.div>
        </div>

        {/* Right: CEO profile card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="relative mx-auto w-full max-w-sm"
        >
          {/* glow ring behind the photo */}
          <div className="absolute -inset-3 -z-10 rounded-[2rem] bg-gradient-to-br from-brand-300/50 to-brand-600/30 blur-2xl" />

          <div className="animate-float">
            <div className="overflow-hidden rounded-[1.8rem] border border-black/10 bg-ink shadow-[0_40px_80px_-30px_rgba(0,0,0,0.55)]">
              <div className="relative">
                <Image
                  src="/haseeb.webp.png"
                  alt="Haseeb — CEO & Lead Developer of DeveloperStudio"
                  width={520}
                  height={560}
                  priority
                  className="h-auto w-full object-cover"
                />
                {/* name plate */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink via-ink/70 to-transparent px-6 pb-5 pt-12">
                  <p className="text-lg font-bold text-white">Haseeb</p>
                  <p className="text-sm font-medium text-brand-300">
                    CEO &amp; Lead Developer · DeveloperStudio
                  </p>
                </div>
                {/* available badge */}
                <span className="absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-brand-700 backdrop-blur">
                  <span className="h-2 w-2 rounded-full bg-brand-500" />
                  Available
                </span>
              </div>
            </div>
          </div>

          {/* floating revenue chip — sits below the card, clear of the face */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="absolute left-2 top-full z-10 mt-4 flex items-center gap-3 rounded-xl border border-black/5 bg-white px-4 py-3 shadow-xl sm:-left-4"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-100 text-brand-700">
              ↑
            </div>
            <div>
              <p className="text-xs text-muted">Avg. revenue lift</p>
              <p className="text-sm font-bold text-ink">+38% in 90 days</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
