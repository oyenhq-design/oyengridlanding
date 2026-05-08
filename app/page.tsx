import { Header, AnnouncementBar } from "@/components/layout/header";
import { Hero } from "@/components/sections/hero";
import { OperationalClarity } from "@/components/sections/operational-clarity";
import { InfrastructureStrip } from "@/components/sections/infrastructure-strip";
import { OperationalIntelligence } from "@/components/sections/operational-intelligence";
import { EnterpriseSecurity } from "@/components/sections/enterprise-security";
import { ProvenEnvironments } from "@/components/sections/proven-environments";
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
        <InfrastructureStrip />
        <OperationalIntelligence />
        <EnterpriseSecurity />
        <ProvenEnvironments />
        <TestimonialSection />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
