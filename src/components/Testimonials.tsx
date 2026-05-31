"use client";

import SectionHeading from "./SectionHeading";
import { Stagger, StaggerItem } from "./Reveal";
import { motion } from "framer-motion";

const REVIEWS = [
  {
    quote:
      "Haseeb didn't just build our platform — he reshaped how we think about the whole funnel. Revenue is up 40% since launch.",
    name: "Sofia Marchetti",
    role: "Founder, LumenCommerce",
    flag: "🇮🇹",
    initials: "SM",
  },
  {
    quote:
      "Fastest, cleanest engineering partner we've worked with. Weekly demos meant zero surprises and a launch we were proud of.",
    name: "David Okoye",
    role: "CEO, PayraFin",
    flag: "🇳🇬",
    initials: "DO",
  },
  {
    quote:
      "We came with a vague idea and left with a fundable product. The discovery phase alone paid for itself.",
    name: "Mei Lin",
    role: "Co-founder, Stackbloom",
    flag: "🇸🇬",
    initials: "ML",
  },
  {
    quote:
      "Truly global — across a 9-hour timezone gap it never once felt like an offshore vendor. Felt like our own CTO.",
    name: "Hannah Berg",
    role: "COO, NordicGrid",
    flag: "🇸🇪",
    initials: "HB",
  },
];

export default function Testimonials() {
  return (
    <section id="voices" className="bg-brand-50/40 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Client voices"
          title={
            <>
              Founders worldwide,{" "}
              <span className="text-brand-600">growing with us</span>
            </>
          }
          description="From Lagos to Singapore to Stockholm — here's what working with DeveloperStudio feels like."
        />

        <Stagger className="mt-14 grid gap-5 sm:grid-cols-2">
          {REVIEWS.map((r) => (
            <StaggerItem key={r.name}>
              <motion.figure
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="flex h-full flex-col rounded-3xl border border-black/5 bg-white p-7 shadow-[0_1px_0_rgba(0,0,0,0.03)]"
              >
                <div className="mb-3 flex gap-0.5 text-brand-500">
                  {"★★★★★".split("").map((s, i) => (
                    <span key={i}>{s}</span>
                  ))}
                </div>
                <blockquote className="flex-1 text-lg leading-relaxed text-ink-soft">
                  &ldquo;{r.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-ink text-sm font-semibold text-brand-400">
                    {r.initials}
                  </span>
                  <span>
                    <span className="block font-semibold text-ink">
                      {r.name} <span className="ml-0.5">{r.flag}</span>
                    </span>
                    <span className="block text-sm text-muted">{r.role}</span>
                  </span>
                </figcaption>
              </motion.figure>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
