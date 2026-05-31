"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import SectionHeading from "./SectionHeading";

type Tab = {
  key: string;
  label: string;
  heading: string;
  body: string;
  points: string[];
};

type Item = {
  id: string;
  title: string;
  blurb: string;
  metric: string;
  tabs: Tab[];
};

const ITEMS: Item[] = [
  {
    id: "discover",
    title: "Discover & Strategize",
    blurb: "We turn a vague idea into a sharp, fundable plan.",
    metric: "Week 1",
    tabs: [
      {
        key: "overview",
        label: "Overview",
        heading: "Understand the problem before the solution",
        body: "We run deep-dive workshops with you and your team to surface the real constraints, the money-making opportunities, and the riskiest assumptions to test first.",
        points: [
          "Stakeholder & user interviews",
          "Opportunity & risk mapping",
          "Lean scope you can actually fund",
        ],
      },
      {
        key: "deliverables",
        label: "Deliverables",
        heading: "What you walk away with",
        body: "A tangible, decision-ready package — not a slide deck nobody reads.",
        points: [
          "Product brief & success metrics",
          "Clickable wireframes",
          "Phased roadmap with estimates",
        ],
      },
      {
        key: "stack",
        label: "Toolkit",
        heading: "How we run it",
        body: "Collaborative, transparent, and async-friendly so it works across every timezone.",
        points: ["Figma & FigJam", "Notion roadmaps", "Loom async reviews"],
      },
    ],
  },
  {
    id: "build",
    title: "Design & Build",
    blurb: "Pixel-perfect product, engineered to scale.",
    metric: "Weeks 2–8",
    tabs: [
      {
        key: "overview",
        label: "Overview",
        heading: "Ship weekly, never disappear for months",
        body: "We work in tight iterations with a live staging link from day one, so you always see progress and steer the direction.",
        points: [
          "Weekly demoable builds",
          "Design system from the start",
          "You own the code, always",
        ],
      },
      {
        key: "deliverables",
        label: "Deliverables",
        heading: "Production-grade from line one",
        body: "Clean, tested, documented software your future team can build on.",
        points: [
          "Responsive, accessible UI",
          "Tested APIs & integrations",
          "CI/CD & one-click deploys",
        ],
      },
      {
        key: "stack",
        label: "Tech",
        heading: "Modern, boring-in-the-good-way stack",
        body: "Battle-tested tools chosen for speed today and maintainability tomorrow.",
        points: ["Next.js · React · TypeScript", "Node · Postgres", "Vercel · AWS"],
      },
    ],
  },
  {
    id: "grow",
    title: "Launch & Grow Revenue",
    blurb: "Where most studios stop, we're just getting started.",
    metric: "Ongoing",
    tabs: [
      {
        key: "overview",
        label: "Overview",
        heading: "A launch that actually drives sales",
        body: "We instrument everything, find the friction, and run experiments that compound into measurable revenue growth.",
        points: [
          "Conversion-focused launch",
          "Funnel & pricing experiments",
          "Data dashboards you'll use",
        ],
      },
      {
        key: "deliverables",
        label: "Deliverables",
        heading: "Growth on autopilot",
        body: "Systems that keep working after the engagement ends.",
        points: [
          "Analytics & event tracking",
          "A/B testing pipeline",
          "Monthly growth reports",
        ],
      },
      {
        key: "stack",
        label: "Toolkit",
        heading: "The growth engine",
        body: "Measure, learn, repeat — the boring loop that prints money.",
        points: ["PostHog · GA4", "Stripe billing", "Email & lifecycle automation"],
      },
    ],
  },
];

export default function AccordionTabs() {
  const [openId, setOpenId] = useState<string>(ITEMS[0].id);
  // remember the active tab per accordion item
  const [activeTab, setActiveTab] = useState<Record<string, string>>(
    Object.fromEntries(ITEMS.map((i) => [i.id, i.tabs[0].key])),
  );

  return (
    <section id="work" className="relative overflow-hidden bg-ink py-20 sm:py-28">
      {/* subtle green glow */}
      <div className="pointer-events-none absolute -right-1/4 top-0 h-[30rem] w-[30rem] rounded-full bg-brand-600/20 blur-[140px]" />
      <div className="relative mx-auto max-w-5xl px-5">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-brand-300">
            How it works
          </span>
          <h2 className="mx-auto mt-4 max-w-2xl text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl">
            An end-to-end engagement,{" "}
            <span className="text-brand-400">tab through every stage</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-white/60">
            Open a stage to explore exactly what happens inside it.
          </p>
        </div>

        <div className="mt-14 space-y-4">
          {ITEMS.map((item, idx) => {
            const isOpen = openId === item.id;
            const current = activeTab[item.id];
            const tab = item.tabs.find((t) => t.key === current) ?? item.tabs[0];

            return (
              <div
                key={item.id}
                className={`overflow-hidden rounded-3xl border transition-colors duration-300 ${
                  isOpen
                    ? "border-brand-500/40 bg-white/[0.06]"
                    : "border-white/10 bg-white/[0.02]"
                }`}
              >
                {/* Accordion header */}
                <button
                  onClick={() => setOpenId(isOpen ? "" : item.id)}
                  className="flex w-full items-center gap-4 px-6 py-5 text-left sm:px-8"
                  aria-expanded={isOpen}
                >
                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-sm font-bold transition-colors ${
                      isOpen
                        ? "bg-brand-500 text-ink"
                        : "bg-white/10 text-white/70"
                    }`}
                  >
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-1">
                    <span className="block text-lg font-semibold text-white">
                      {item.title}
                    </span>
                    <span className="block text-sm text-white/50">
                      {item.blurb}
                    </span>
                  </span>
                  <span className="hidden rounded-full border border-white/10 px-3 py-1 text-xs font-medium text-brand-300 sm:block">
                    {item.metric}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="text-2xl font-light text-white/70"
                  >
                    +
                  </motion.span>
                </button>

                {/* Accordion panel — contains the TAB section */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
                    >
                      <div className="px-6 pb-7 sm:px-8">
                        {/* Tab bar */}
                        <div className="relative flex flex-wrap gap-1 rounded-full border border-white/10 bg-black/30 p-1">
                          {item.tabs.map((t) => {
                            const active = t.key === current;
                            return (
                              <button
                                key={t.key}
                                onClick={() =>
                                  setActiveTab((prev) => ({
                                    ...prev,
                                    [item.id]: t.key,
                                  }))
                                }
                                className={`relative z-10 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                                  active
                                    ? "text-ink"
                                    : "text-white/60 hover:text-white"
                                }`}
                              >
                                {active && (
                                  <motion.span
                                    layoutId={`tab-pill-${item.id}`}
                                    className="absolute inset-0 -z-10 rounded-full bg-brand-400"
                                    transition={{
                                      type: "spring",
                                      stiffness: 380,
                                      damping: 30,
                                    }}
                                  />
                                )}
                                {t.label}
                              </button>
                            );
                          })}
                        </div>

                        {/* Tab content */}
                        <div className="mt-6 grid gap-6 sm:grid-cols-[1.2fr_1fr]">
                          <AnimatePresence mode="wait">
                            <motion.div
                              key={tab.key}
                              initial={{ opacity: 0, y: 12 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -8 }}
                              transition={{ duration: 0.28 }}
                            >
                              <h4 className="text-lg font-semibold text-white">
                                {tab.heading}
                              </h4>
                              <p className="mt-2 leading-relaxed text-white/60">
                                {tab.body}
                              </p>
                            </motion.div>
                          </AnimatePresence>

                          <AnimatePresence mode="wait">
                            <motion.ul
                              key={tab.key + "-points"}
                              initial={{ opacity: 0, y: 12 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -8 }}
                              transition={{ duration: 0.28, delay: 0.04 }}
                              className="space-y-2.5 rounded-2xl border border-white/10 bg-black/20 p-5"
                            >
                              {tab.points.map((p) => (
                                <li
                                  key={p}
                                  className="flex items-start gap-2.5 text-sm text-white/80"
                                >
                                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-500/20 text-[11px] text-brand-300">
                                    ✓
                                  </span>
                                  {p}
                                </li>
                              ))}
                            </motion.ul>
                          </AnimatePresence>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
