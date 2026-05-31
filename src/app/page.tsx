import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import StudioBanner from "@/components/StudioBanner";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import AccordionTabs from "@/components/AccordionTabs";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Marquee />
        <StudioBanner />
        <Stats />
        <Services />
        <AccordionTabs />
        <Process />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
