import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://developerstudio.org"),
  title: {
    default:
      "developerhaseeb — Haseeb, CEO & Lead Developer at DeveloperStudio",
    template: "%s · developerhaseeb",
  },
  description:
    "DeveloperStudio is a global software studio led by CEO Haseeb. From problem solving to revenue generation, we help business owners worldwide ship products that grow.",
  keywords: [
    "DeveloperStudio",
    "developerstudio.org",
    "Haseeb CEO",
    "software studio",
    "web development",
    "Next.js development",
    "revenue generation",
  ],
  authors: [{ name: "Haseeb", url: "https://developerstudio.org" }],
  openGraph: {
    title:
      "developerhaseeb — Haseeb, CEO & Lead Developer at DeveloperStudio",
    description:
      "Haseeb, CEO & Lead Developer at DeveloperStudio — helping business owners worldwide turn ideas into revenue.",
    url: "https://developerstudio.org",
    siteName: "developerhaseeb",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "developerhaseeb — Haseeb, CEO at DeveloperStudio",
    description:
      "From problem solving to revenue generation — software that grows your business.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
