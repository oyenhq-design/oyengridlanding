import { Header, AnnouncementBar } from "@/components/layout/header";
import { Hero } from "@/components/sections/hero";
import { OperationalIntelligence } from "@/components/sections/operational-intelligence";
import { MetricsStrip } from "@/components/sections/metrics-strip";
import { EnterpriseSecurity } from "@/components/sections/enterprise-security";
import { TestimonialSection } from "@/components/sections/testimonial-section";
import { FinalCTA } from "@/components/sections/final-cta";
import { Footer } from "@/components/layout/footer";
import { SectionReveal } from "@/components/layout/section-reveal";

export default function Home() {
  return (
    <>
      <Header />
      <main className="relative">
        {/* Continuous Environment Anchor */}
        <div className="absolute inset-0 z-0 continuous-env opacity-40 pointer-events-none" />

        <AnnouncementBar />
        <Hero />
        
        {/* EDITORIAL SPACING RHYTHM */}
        
        <div className="section-rhythm-1 relative z-10">
          <SectionReveal>
            <MetricsStrip />
          </SectionReveal>
        </div>

        <div className="section-rhythm-2 relative z-10">
          <SectionReveal>
            <OperationalIntelligence />
          </SectionReveal>
        </div>

        <div className="section-divider-subtle" />

        <div className="section-rhythm-3 relative z-10">
          <SectionReveal>
            <EnterpriseSecurity />
          </SectionReveal>
        </div>

        <div className="section-divider-subtle" />

        <div className="section-rhythm-4 relative z-10">
          <SectionReveal>
            <TestimonialSection />
          </SectionReveal>
        </div>

        <div className="section-divider-subtle" />

        <div className="section-rhythm-2 relative z-10">
          <SectionReveal>
            <FinalCTA />
          </SectionReveal>
        </div>
      </main>
      <Footer />
    </>
  );
}
