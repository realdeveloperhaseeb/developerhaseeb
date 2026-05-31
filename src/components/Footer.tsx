import Logo from "./Logo";
import Socials from "./Socials";
import { CONTACT, mailto, whatsapp } from "./contact";

const NAV = [
  { label: "Services", href: "#services", external: false },
  { label: "How it works", href: "#work", external: false },
  { label: "Why DeveloperStudio", href: "#process", external: false },
  { label: "Client voices", href: "#voices", external: false },
  { label: "developerstudio.org ↗", href: CONTACT.studioUrl, external: true },
];

const REACH = [
  { label: CONTACT.emailPrimary, href: mailto(CONTACT.emailPrimary) },
  { label: CONTACT.emailPersonal, href: mailto(CONTACT.emailPersonal) },
  {
    label: `WhatsApp ${CONTACT.whatsappUK.label} (UK)`,
    href: whatsapp(CONTACT.whatsappUK.e164),
  },
  {
    label: `WhatsApp ${CONTACT.whatsappPK.label} (PK)`,
    href: whatsapp(CONTACT.whatsappPK.e164),
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-black/5 bg-white">
      <div className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1.2fr]">
          <div>
            <Logo animated={false} />
            <p className="mt-4 max-w-xs leading-relaxed text-muted">
              A global software studio led by CEO Haseeb — helping business
              owners worldwide go from problem solving to revenue generation.
            </p>
            <Socials className="mt-5" />
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-ink">
              Explore
            </h4>
            <ul className="mt-4 space-y-2.5">
              {NAV.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    {...(l.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className={`transition-colors hover:text-brand-600 ${
                      l.external ? "font-semibold text-brand-700" : "text-muted"
                    }`}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-ink">
              Get in touch
            </h4>
            <ul className="mt-4 space-y-2.5">
              {REACH.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted transition-colors hover:text-brand-600"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className="mt-5 inline-flex items-center gap-1.5 rounded-full bg-ink px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-600"
            >
              Start a project →
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-black/5 pt-6 text-sm text-muted sm:flex-row">
          <p>
            © {2026}{" "}
            <span className="font-semibold text-ink">
              developer<span className="text-brand-600">haseeb</span>
            </span>
            . All rights reserved.
          </p>
          <a
            href={CONTACT.studioUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-ink transition-colors hover:text-brand-600"
          >
            {CONTACT.domain} ↗
          </a>
        </div>
      </div>
    </footer>
  );
}
