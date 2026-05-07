import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { OperationalClarity } from "@/components/sections/operational-clarity";
import { EnterpriseInfrastructure } from "@/components/sections/enterprise-infrastructure";
import { OperationalIntelligence } from "@/components/sections/operational-intelligence";
import { EnterpriseSecurity } from "@/components/sections/enterprise-security";
import { ProofKnowledge } from "@/components/sections/proof-knowledge";
import { TestimonialMetrics } from "@/components/sections/testimonial-metrics";
import { FinalCTA } from "@/components/sections/final-cta";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050816] selection:bg-accent selection:text-black">
      <Header />
      <Hero />
      <OperationalClarity />
      <EnterpriseInfrastructure />
      <OperationalIntelligence />
      <EnterpriseSecurity />
      <ProofKnowledge />
      <TestimonialMetrics />
      <FinalCTA />
      <Footer />
    </main>
  );
}
