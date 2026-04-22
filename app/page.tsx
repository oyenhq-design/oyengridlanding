import { HeroSection } from "@/components/shared/hero-section";
import { FeaturesSection } from "@/components/shared/features-section";
import { HowItWorksSection } from "@/components/shared/how-it-works-section";
import { CTASection } from "@/components/shared/cta-section";
import { Header } from "@/components/shared/header";
import { Footer } from "@/components/shared/footer";
import { PlatformOverviewSection } from "@/components/shared/platform-overview-section";
import { UseCasesSection } from "@/components/shared/use-cases-section";
import { StructureControlSection } from "@/components/shared/structure-control-section";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 pt-16">
        {/* 1. HERO */}
        <HeroSection />

        {/* 2. PLATFORM OVERVIEW */}
        <PlatformOverviewSection />

        {/* 3. FEATURES GRID */}
        <FeaturesSection />

        {/* 4. USE CASES */}
        <UseCasesSection />

        {/* 5. PRODUCT WALKTHROUGH */}
        <HowItWorksSection />

        {/* 6. STRUCTURE & CONTROL (DIFFERENTIATOR) */}
        <StructureControlSection />

        {/* 7. CTA */}
        <CTASection />

      </main>
      <Footer />
    </div>
  );
}
