import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { OperationalClarity } from "@/components/sections/operational-clarity";
import { ProductShowcase } from "@/components/sections/product-showcase";
import { ProgrammeControl } from "@/components/sections/programme-control";
import { OperationalIntelligence } from "@/components/sections/operational-intelligence";
import { EnterpriseSecurity } from "@/components/sections/enterprise-security";
import { TestimonialMetrics } from "@/components/sections/testimonial-metrics";
import { FinalCTA } from "@/components/sections/final-cta";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050816] selection:bg-accent selection:text-black">
      <Header />
      <Hero />
      <OperationalClarity />
      <ProductShowcase />
      <ProgrammeControl />
      <EnterpriseSecurity />
      <OperationalIntelligence />
      <TestimonialMetrics />
      <FinalCTA />
      <Footer />
    </main>
  );
}
