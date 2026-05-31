"use client";

import { motion } from "framer-motion";
import { SOCIALS } from "./contact";
import { iconFor } from "./Icons";

type Props = {
  variant?: "light" | "dark";
  className?: string;
};

/** Row of animated social icon buttons. */
export default function Socials({ variant = "light", className = "" }: Props) {
  const base =
    variant === "dark"
      ? "border-white/15 bg-white/5 text-white/70 hover:bg-brand-500 hover:text-ink hover:border-brand-500"
      : "border-black/10 bg-white text-ink-soft/70 hover:bg-brand-600 hover:text-white hover:border-brand-600";

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {SOCIALS.map((s) => (
        <motion.a
          key={s.key}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={s.label}
          title={s.label}
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.92 }}
          transition={{ type: "spring", stiffness: 400, damping: 18 }}
          className={`flex h-10 w-10 items-center justify-center rounded-xl border transition-colors ${base}`}
        >
          {iconFor(s.key, "h-[18px] w-[18px]")}
        </motion.a>
      ))}
    </div>
  );
}
