"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import { CONTACT } from "./contact";

const LINKS = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Voices", href: "#voices" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="fixed inset-x-0 top-0 z-50 px-4 pt-3 sm:px-6"
    >
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-4 py-2.5 transition-all duration-300 sm:px-5 ${
          scrolled
            ? "border border-black/5 bg-white/80 shadow-[0_8px_30px_rgba(0,0,0,0.06)] backdrop-blur-xl"
            : "border border-transparent bg-transparent"
        }`}
      >
        <a href="#top" aria-label="DeveloperStudio home">
          <Logo />
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative rounded-full px-3.5 py-2 text-sm font-medium text-ink-soft/70 transition-colors hover:text-ink"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-2 md:flex">
          <a
            href={CONTACT.studioUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 rounded-full border border-black/10 px-4 py-2 text-sm font-semibold text-ink transition-colors hover:border-brand-300 hover:bg-brand-50"
          >
            Visit Studio
            <span className="text-brand-600 transition-transform group-hover:translate-x-0.5">
              ↗
            </span>
          </a>
          <a
            href="#contact"
            className="group inline-flex items-center gap-1.5 rounded-full bg-ink px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-brand-600 hover:shadow-[0_10px_30px_-8px] hover:shadow-brand-500/60"
          >
            Start a project
            <span className="transition-transform group-hover:translate-x-0.5">
              →
            </span>
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-black/10 md:hidden"
        >
          <div className="space-y-1.5">
            <motion.span
              animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="block h-0.5 w-5 bg-ink"
            />
            <motion.span
              animate={open ? { opacity: 0 } : { opacity: 1 }}
              className="block h-0.5 w-5 bg-ink"
            />
            <motion.span
              animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="block h-0.5 w-5 bg-ink"
            />
          </div>
        </button>
      </nav>

      {/* Mobile sheet */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="mx-auto mt-2 max-w-6xl overflow-hidden rounded-2xl border border-black/5 bg-white/90 p-2 shadow-xl backdrop-blur-xl md:hidden"
          >
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-3 text-sm font-medium text-ink-soft hover:bg-brand-50"
              >
                {l.label}
              </a>
            ))}
            <a
              href={CONTACT.studioUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-1 block rounded-xl border border-black/10 px-4 py-3 text-center text-sm font-semibold text-ink hover:bg-brand-50"
            >
              Visit DeveloperStudio ↗
            </a>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-1 block rounded-xl bg-ink px-4 py-3 text-center text-sm font-semibold text-white"
            >
              Start a project →
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
