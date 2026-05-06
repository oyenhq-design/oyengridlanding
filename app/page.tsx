import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { OperationalClarity } from "@/components/sections/operational-clarity";
import { FeatureSplit } from "@/components/sections/feature-split";
import { ScaleStructure } from "@/components/sections/scale-structure";
import { EverythingNeed } from "@/components/sections/everything-need";
import { Insights } from "@/components/sections/insights";
import { ToolsGrid } from "@/components/sections/tools-grid";
import { ProofKnowledge } from "@/components/sections/proof-knowledge";
import { TestimonialMetrics } from "@/components/sections/testimonial-metrics";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      
      <main className="flex-1">
        <Hero />
        <OperationalClarity />
        <FeatureSplit />
        <ScaleStructure />
        <EverythingNeed />
        <Insights />
        <ToolsGrid />
        <ProofKnowledge />
        <TestimonialMetrics />
      </main>

      <Footer />
    </div>
  );
}
