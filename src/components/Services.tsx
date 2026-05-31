"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Stagger, StaggerItem } from "./Reveal";

const SERVICES = [
  {
    icon: "◎",
    title: "Problem Discovery",
    desc: "We dig into your business, map the real bottleneck, and define what success looks like — before a line of code is written.",
    tags: ["Audit", "Strategy", "Roadmap"],
    span: "md:col-span-2",
  },
  {
    icon: "⚡",
    title: "Web & App Development",
    desc: "Fast, accessible, beautiful products built with Next.js, React & modern stacks.",
    tags: ["Next.js", "React", "Mobile"],
    span: "",
  },
  {
    icon: "✦",
    title: "AI & Automation",
    desc: "Put AI to work — assistants, pipelines, and automations that save hours every week.",
    tags: ["LLMs", "Workflows"],
    span: "",
  },
  {
    icon: "↗",
    title: "Revenue Engineering",
    desc: "Funnels, pricing, analytics and conversion work that turns traffic into recurring revenue.",
    tags: ["CRO", "Analytics", "Growth"],
    span: "md:col-span-2",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="What we do"
          title={
            <>
              From the <span className="text-brand-600">first problem</span> to
              your next <span className="text-brand-600">revenue stream</span>
            </>
          }
          description="One studio, end to end. We don't just write code — we own the outcome alongside you."
        />

        <Stagger className="mt-14 grid gap-5 md:grid-cols-3">
          {SERVICES.map((s) => (
            <StaggerItem key={s.title} className={s.span}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="group relative h-full overflow-hidden rounded-3xl border border-black/5 bg-white p-7 shadow-[0_1px_0_rgba(0,0,0,0.03)] transition-shadow hover:shadow-[0_30px_60px_-30px_rgba(2,122,72,0.35)]"
              >
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-brand-50/0 to-brand-50/0 opacity-0 transition-opacity duration-300 group-hover:from-brand-50 group-hover:to-white group-hover:opacity-100" />
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-ink text-xl text-brand-400 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                  {s.icon}
                </div>
                <h3 className="mt-5 text-xl font-semibold text-ink">
                  {s.title}
                </h3>
                <p className="mt-2 max-w-md leading-relaxed text-muted">
                  {s.desc}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-black/5 bg-brand-50/70 px-3 py-1 text-xs font-medium text-brand-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
