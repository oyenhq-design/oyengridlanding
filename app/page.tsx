import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { OperationalClarity } from "@/components/sections/operational-clarity";
import { FeatureSplit } from "@/components/sections/feature-split";
import { ScaleStructure } from "@/components/sections/scale-structure";
import { EverythingNeed } from "@/components/sections/everything-need";
import { Insights } from "@/components/sections/insights";
import { ProofKnowledge } from "@/components/sections/proof-knowledge";
import { TestimonialMetrics } from "@/components/sections/testimonial-metrics";
import { EnterpriseSecurity } from "@/components/sections/enterprise-security";
import { GovernanceControl } from "@/components/sections/governance-control";
import { AIIntelligence } from "@/components/sections/ai-intelligence";
import { GlobalInfrastructure } from "@/components/sections/global-infrastructure";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050812]">
      <Header />
      <Hero />
      <OperationalClarity />
      <FeatureSplit />
      <ScaleStructure />
      <GovernanceControl />
      <EverythingNeed />
      <AIIntelligence />
      <Insights />
      <EnterpriseSecurity />
      <ProofKnowledge />
      <GlobalInfrastructure />
      <TestimonialMetrics />
      <Footer />
    </main>
  );
}
