import { Header, AnnouncementBar } from "@/components/layout/header";
import { Hero } from "@/components/sections/hero";
import { OperationalClarity } from "@/components/sections/operational-clarity";
import { OperationalIntelligence } from "@/components/sections/operational-intelligence";
import { MetricsStrip } from "@/components/sections/metrics-strip";
import { EnterpriseSecurity } from "@/components/sections/enterprise-security";
import { TestimonialSection } from "@/components/sections/testimonial-section";
import { FinalCTA } from "@/components/sections/final-cta";
import { Footer } from "@/components/layout/footer";
import { SectionReveal } from "@/components/layout/section-reveal";
import { SectionDivider } from "@/components/layout/section-divider";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <AnnouncementBar />
        <Hero />
        
        <SectionDivider />

        <SectionReveal>
          <OperationalClarity />
        </SectionReveal>

        <SectionDivider />

        <SectionReveal>
          <OperationalIntelligence />
        </SectionReveal>

        <SectionDivider />

        <SectionReveal>
          <MetricsStrip />
        </SectionReveal>

        <SectionDivider />

        <SectionReveal>
          <EnterpriseSecurity />
        </SectionReveal>

        <SectionDivider />

        <SectionReveal>
          <TestimonialSection />
        </SectionReveal>

        <SectionDivider />

        <SectionReveal>
          <FinalCTA />
        </SectionReveal>
      </main>
      <Footer />
    </>
  );
}
