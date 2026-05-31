"use client";

import { motion } from "framer-motion";
import { Reveal } from "./Reveal";
import Socials from "./Socials";
import { CONTACT, mailto, whatsapp } from "./contact";
import { MailIcon, WhatsAppIcon } from "./Icons";

const METHODS = [
  {
    icon: <WhatsAppIcon className="h-5 w-5" />,
    label: "WhatsApp · UK",
    value: CONTACT.whatsappUK.label,
    href: whatsapp(CONTACT.whatsappUK.e164, "Hi Haseeb! I'd like to discuss a project."),
  },
  {
    icon: <WhatsAppIcon className="h-5 w-5" />,
    label: "WhatsApp · PK",
    value: CONTACT.whatsappPK.label,
    href: whatsapp(CONTACT.whatsappPK.e164, "Hi Haseeb! I'd like to discuss a project."),
  },
  {
    icon: <MailIcon className="h-5 w-5" />,
    label: "Work email",
    value: CONTACT.emailPrimary,
    href: mailto(CONTACT.emailPrimary),
  },
  {
    icon: <MailIcon className="h-5 w-5" />,
    label: "Personal email",
    value: CONTACT.emailPersonal,
    href: mailto(CONTACT.emailPersonal),
  },
];

export default function CTA() {
  return (
    <section id="contact" className="bg-white px-5 py-20 sm:py-28">
      <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] bg-ink px-6 py-16 sm:px-12 sm:py-20">
        {/* animated glow */}
        <div className="pointer-events-none absolute inset-0 -z-0 overflow-hidden">
          <div className="animate-aurora absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-brand-500/40 blur-[110px]" />
          <div className="absolute inset-0 grid-bg opacity-[0.06]" />
        </div>

        <div className="relative z-10 text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-brand-300">
              Let&apos;s build
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mx-auto mt-5 max-w-2xl text-balance text-3xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
              Have a problem worth solving?{" "}
              <span className="bg-gradient-to-r from-brand-300 to-brand-500 bg-clip-text text-transparent">
                Let&apos;s turn it into revenue.
              </span>
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mx-auto mt-5 max-w-xl text-lg text-white/60">
              Message me on WhatsApp or drop an email — I reply within 24 hours,
              wherever you are in the world.
            </p>
          </Reveal>
        </div>

        {/* contact method grid */}
        <Reveal delay={0.22}>
          <div className="relative z-10 mx-auto mt-10 grid max-w-3xl gap-3 sm:grid-cols-2">
            {METHODS.map((m) => (
              <motion.a
                key={m.label}
                href={m.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                transition={{ type: "spring", stiffness: 320, damping: 20 }}
                className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-left transition-colors hover:border-brand-500/50 hover:bg-white/[0.07]"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-500/15 text-brand-300 transition-colors group-hover:bg-brand-500 group-hover:text-ink">
                  {m.icon}
                </span>
                <span className="min-w-0">
                  <span className="block text-xs font-medium uppercase tracking-wider text-white/40">
                    {m.label}
                  </span>
                  <span className="block truncate text-sm font-semibold text-white">
                    {m.value}
                  </span>
                </span>
              </motion.a>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="relative z-10 mt-10 flex flex-col items-center gap-5">
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              href={whatsapp(
                CONTACT.whatsappUK.e164,
                "Hi Haseeb! I'd like to discuss a project.",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-brand-500 px-7 py-3.5 text-sm font-semibold text-ink transition-colors hover:bg-brand-400"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Chat on WhatsApp
            </motion.a>
            <Socials variant="dark" />
            <p className="text-sm text-white/40">
              Replies within 24 hours · Serving clients in 20+ countries
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
