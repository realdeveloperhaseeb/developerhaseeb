"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Reveal } from "./Reveal";

const PRINCIPLES = [
  {
    k: "01",
    title: "Outcomes, not hours",
    desc: "We measure success by your revenue and your users — not by how many hours we logged.",
  },
  {
    k: "02",
    title: "One partner, end-to-end",
    desc: "Strategy, design, engineering and growth under one roof. No hand-offs, no finger-pointing.",
  },
  {
    k: "03",
    title: "Built across timezones",
    desc: "Async-first communication and a global mindset mean we work seamlessly wherever you are.",
  },
  {
    k: "04",
    title: "You own everything",
    desc: "Code, designs, accounts and IP are yours from day one. No lock-in, ever.",
  },
];

export default function Process() {
  return (
    <section id="process" className="relative bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              align="left"
              eyebrow="Why DeveloperStudio"
              title={
                <>
                  A studio that acts like{" "}
                  <span className="text-brand-600">your team</span>
                </>
              }
              description="Founder-led, senior-only, and obsessed with the only metric that matters: did it move your business forward?"
            />
            <Reveal delay={0.2}>
              <figure className="mt-8 rounded-3xl border border-black/5 bg-gradient-to-br from-brand-50 to-white p-6">
                <blockquote className="text-lg font-medium leading-relaxed text-ink">
                  &ldquo;I treat every client&apos;s business like my own. If it
                  doesn&apos;t make you money, it&apos;s not done.&rdquo;
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-3">
                  <Image
                    src="/haseeb.webp.png"
                    alt="Haseeb, CEO of DeveloperStudio"
                    width={48}
                    height={48}
                    className="h-12 w-12 rounded-full object-cover ring-2 ring-brand-400/60"
                  />
                  <span>
                    <span className="block font-semibold text-ink">Haseeb</span>
                    <span className="block text-sm text-brand-700">
                      CEO &amp; Lead Developer · DeveloperStudio
                    </span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          </div>

          <ol className="relative space-y-3 border-l border-dashed border-black/10 pl-2 sm:pl-0 sm:border-l-0">
            {PRINCIPLES.map((p, i) => (
              <motion.li
                key={p.k}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.08,
                  ease: [0.21, 0.47, 0.32, 0.98],
                }}
                className="group flex gap-5 rounded-3xl border border-black/5 bg-white p-6 transition-all hover:border-brand-200 hover:shadow-[0_24px_50px_-30px_rgba(2,122,72,0.4)]"
              >
                <span className="text-2xl font-bold tabular-nums text-brand-500/40 transition-colors group-hover:text-brand-600">
                  {p.k}
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-ink">{p.title}</h3>
                  <p className="mt-1.5 leading-relaxed text-muted">{p.desc}</p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
