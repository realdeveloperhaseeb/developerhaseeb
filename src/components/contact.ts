// Central contact + social details for developerstudio.org

export const CONTACT = {
  brand: "DeveloperStudio",
  domain: "developerstudio.org",
  studioUrl: "https://developerstudio.org",
  ceo: "Haseeb",
  ceoTitle: "CEO & Lead Developer",
  emailPrimary: "help@developerhaseeb.com",
  emailPersonal: "realdeveloperhaseeb@gmail.com",
  whatsappUK: { label: "+44 7988 563005", e164: "447988563005" },
  whatsappPK: { label: "+92 346 4147423", e164: "923464147423" },
};

export const mailto = (email: string) => `mailto:${email}`;
export const whatsapp = (e164: string, text?: string) =>
  `https://wa.me/${e164}${
    text ? `?text=${encodeURIComponent(text)}` : ""
  }`;

export const SOCIALS = [
  { key: "github", label: "GitHub", href: "https://github.com/developerhaseeb" },
  {
    key: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/realdeveloperhaseeb/",
  },
  {
    key: "facebook",
    label: "Facebook",
    href: "https://www.facebook.com/developerhaseeb123",
  },
  {
    key: "whatsapp",
    label: "WhatsApp",
    href: whatsapp(CONTACT.whatsappUK.e164, "Hi Haseeb!"),
  },
  {
    key: "email",
    label: "Email",
    href: mailto(CONTACT.emailPrimary),
  },
];
