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
      <main>
        <AnnouncementBar />
        <Hero />
        
        <SectionReveal>
          <MetricsStrip />
        </SectionReveal>

        <div className="section-divider-subtle" />

        <SectionReveal>
          <OperationalIntelligence />
        </SectionReveal>

        <div className="section-divider-subtle" />

        <SectionReveal>
          <EnterpriseSecurity />
        </SectionReveal>

        <div className="section-divider-subtle" />

        <SectionReveal>
          <TestimonialSection />
        </SectionReveal>

        <div className="section-divider-subtle" />

        <SectionReveal>
          <FinalCTA />
        </SectionReveal>
      </main>
      <Footer />
    </>
  );
}
