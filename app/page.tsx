import { Header, AnnouncementBar } from "@/components/layout/header";
import { Hero } from "@/components/sections/hero";
import { OperationalClarity } from "@/components/sections/operational-clarity";
import { OperationalIntelligence } from "@/components/sections/operational-intelligence";
import { MetricsStrip } from "@/components/sections/metrics-strip";
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
        <OperationalClarity />
        <OperationalIntelligence />
        <MetricsStrip />
        <EnterpriseSecurity />
        <TestimonialSection />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
