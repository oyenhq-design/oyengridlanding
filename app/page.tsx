import { HeroSection } from "@/components/shared/hero-section";
import { FeaturesSection } from "@/components/shared/features-section";
import { HowItWorksSection } from "@/components/shared/how-it-works-section";

import { PricingSection } from "@/components/shared/pricing-section";
import { CTASection } from "@/components/shared/cta-section";
import { Header } from "@/components/shared/header";
import { Footer } from "@/components/shared/footer";

import { TrustStrip } from "@/components/shared/trust-strip";
import { PlatformOverviewSection } from "@/components/shared/platform-overview-section";
import { UseCasesSection } from "@/components/shared/use-cases-section";
import { StructureControlSection } from "@/components/shared/structure-control-section";
import { DeepFeatureBreakdownSection } from "@/components/shared/deep-feature-breakdown-section";
import { ComparisonSection } from "@/components/shared/comparison-section";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        {/* 1. HERO */}
        <HeroSection />

        {/* 2. TRUST / POSITIONING STRIP */}
        <TrustStrip />

        {/* 3. PLATFORM OVERVIEW */}
        <PlatformOverviewSection />

        {/* 4. FEATURES GRID */}
        <FeaturesSection />

        {/* 5. USE CASES */}
        <UseCasesSection />

        {/* 6. PRODUCT WALKTHROUGH */}
        <HowItWorksSection />

        {/* 7. STRUCTURE & CONTROL (DIFFERENTIATOR) */}
        <StructureControlSection />

        {/* 8. DEEP FEATURE BREAKDOWN (ADVANCED) */}
        <DeepFeatureBreakdownSection />

        {/* 9. COMPARISON SECTION (HIGH CONVERSION) */}
        <ComparisonSection />

        {/* 10. PRICING (REFINED) */}
        <PricingSection />

        {/* 11. FINAL CTA */}
        <CTASection />


      </main>
      <Footer />
    </div>
  );
}
