import { HeroSection } from "@/components/shared/hero-section";
import { FeatureStrip } from "@/components/shared/feature-strip";
import { TrustStrip } from "@/components/shared/trust-strip";
import { CoreFeaturesSection } from "@/components/shared/core-features-section";
import { ComplexDeliverySection } from "@/components/shared/platform-overview-section";
import { HowItWorksSection } from "@/components/shared/how-it-works-section";
import { StructureValueSection } from "@/components/shared/structure-value-section";
import { CTASection } from "@/components/shared/cta-section";
import { Header } from "@/components/shared/header";
import { Footer } from "@/components/shared/footer";
import { UseCasesSection } from "@/components/shared/use-cases-section";
import { PositioningSection } from "@/components/shared/positioning-section";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 pt-16">
        
        {/* 1. HERO */}
        <HeroSection />

        {/* 2. FEATURE STRIP */}
        <FeatureStrip />

        {/* 3. TRUST STRIP */}
        <TrustStrip />

        {/* 3. POSITIONING */}
        <PositioningSection />

        {/* 4. CORE FEATURES (3 COLUMNS WITH UI PREVIEWS) */}
        <CoreFeaturesSection />

        {/* 5. COMPLEX DELIVERY (GRID OF 6) */}
        <ComplexDeliverySection />

        {/* 6. USE CASES */}
        <UseCasesSection />

        {/* 7. HOW IT WORKS */}
        <HowItWorksSection />

        {/* 8. STRUCTURE VALUE (RADIAL VISUAL) */}
        <StructureValueSection />

        {/* 9. CTA */}
        <CTASection />

      </main>
      <Footer />
    </div>
  );
}
