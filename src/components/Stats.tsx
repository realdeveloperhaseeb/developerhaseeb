"use client";

import Counter from "./Counter";
import { Stagger, StaggerItem } from "./Reveal";

const STATS = [
  { to: 120, suffix: "+", label: "Projects shipped", decimals: 0 },
  { to: 20, suffix: "+", label: "Countries served", decimals: 0 },
  { to: 38, suffix: "%", label: "Avg. revenue lift", prefix: "+", decimals: 0 },
  { to: 4.9, suffix: "/5", label: "Client rating", decimals: 1 },
];

export default function Stats() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-5">
        <Stagger className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-black/5 bg-black/5 lg:grid-cols-4">
          {STATS.map((s) => (
            <StaggerItem key={s.label} className="bg-white">
              <div className="flex flex-col items-center justify-center px-6 py-10 text-center transition-colors hover:bg-brand-50/60">
                <div className="text-4xl font-bold tracking-tight text-ink sm:text-5xl">
                  <Counter
                    to={s.to}
                    suffix={s.suffix}
                    prefix={s.prefix}
                    decimals={s.decimals}
                  />
                </div>
                <p className="mt-2 text-sm font-medium text-muted">{s.label}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
