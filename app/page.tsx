import { Header, AnnouncementBar } from "@/components/layout/header";
import { Hero } from "@/components/sections/hero";
import { OperationalClarity } from "@/components/sections/operational-clarity";
import { WhoItIsFor } from "@/components/sections/who-it-is-for";
import { OperationalIntelligence } from "@/components/sections/operational-intelligence";
import { EnterpriseSecurity } from "@/components/sections/enterprise-security";
import { TestimonialSection } from "@/components/sections/testimonial-section";
import { FinalCTA } from "@/components/sections/final-cta";
import { Footer } from "@/components/layout/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <AnnouncementBar />
        <Hero />
        <OperationalClarity />      {/* Section 02: Infrastructure */}
        <WhoItIsFor />              {/* Segmentation Layer */}
        <OperationalIntelligence /> {/* Section 03: Intelligence */}
        <EnterpriseSecurity />      {/* Section 04: Security */}
        <TestimonialSection />      {/* Section 05: Social Proof */}
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
