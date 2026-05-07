import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { CenteredStatement } from "@/components/sections/centered-statement";
import { EnterpriseInfrastructure } from "@/components/sections/enterprise-infrastructure";
import { OperationalIntelligence } from "@/components/sections/operational-intelligence";
import { OperationalMetrics } from "@/components/sections/operational-metrics";
import { Security } from "@/components/sections/security";
import { SocialProof } from "@/components/sections/social-proof";
import { TestimonialSection } from "@/components/sections/testimonial-section";
import { FinalCTA } from "@/components/sections/final-cta";
import { ChatAssistant } from "@/components/shared/chat-assistant";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#030712]">
      <Header />
      <Hero />
      <CenteredStatement />
      <EnterpriseInfrastructure />
      <OperationalIntelligence />
      <OperationalMetrics />
      <Security />
      <SocialProof />
      <TestimonialSection />
      <FinalCTA />
      <Footer />
      <ChatAssistant />
    </main>
  );
}
