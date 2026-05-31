"use client";

const ITEMS = [
  "SaaS Platforms",
  "E-commerce",
  "AI Integrations",
  "Fintech",
  "Mobile Apps",
  "Web3",
  "Dashboards",
  "Automations",
  "Marketplaces",
];

export default function Marquee() {
  const loop = [...ITEMS, ...ITEMS];
  return (
    <section className="border-y border-black/5 bg-white py-6">
      <div className="mask-fade-x overflow-hidden">
        <div className="animate-marquee flex w-max items-center gap-10 whitespace-nowrap">
          {loop.map((item, i) => (
            <div key={i} className="flex items-center gap-10">
              <span className="text-base font-medium text-ink-soft/40">
                {item}
              </span>
              <span className="text-brand-500">◆</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
