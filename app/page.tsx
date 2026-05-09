import { Header } from "@/components/layout/header";
import { Hero } from "@/components/sections/hero";
import { LogoStrip } from "@/components/sections/logo-strip";
import { OperationalClarity } from "@/components/sections/operational-clarity";
import { CapabilitiesGrid } from "@/components/sections/capabilities-grid";
import { SecurityGovernance } from "@/components/sections/security-governance";
import { TestimonialMetrics } from "@/components/sections/testimonial-metrics";
import { FinalCTA } from "@/components/sections/final-cta";
import { Footer } from "@/components/layout/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505]">
      <Header />
      <Hero />
      <LogoStrip />
      <OperationalClarity />
      <CapabilitiesGrid />
      <SecurityGovernance />
      <TestimonialMetrics />
      <FinalCTA />
      <Footer />
    </main>
  );
}
