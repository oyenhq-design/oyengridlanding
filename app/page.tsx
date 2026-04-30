import { HeroSection } from "@/components/shared/hero-section";
import { CapabilityTrustSection } from "@/components/shared/feature-strip";
import { CoreFeaturesSection } from "@/components/shared/core-features-section";
import { ComplexDeliverySection } from "@/components/shared/platform-overview-section";
import { HowItWorksSection } from "@/components/shared/how-it-works-section";
import { StructureValueSection } from "@/components/shared/structure-value-section";
import { CTASection } from "@/components/shared/cta-section";
import { Header } from "@/components/shared/header";
import { Footer } from "@/components/shared/footer";
import { UseCasesSection } from "@/components/shared/use-cases-section";
import { PositioningSection } from "@/components/shared/positioning-section";

import { ProgrammeManagementSection } from "@/components/shared/programme-management-section";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 pt-16">

        {/* 1. HERO */}
        <HeroSection />

        {/* 2. CAPABILITY & TRUST — unified feature strip + logo section */}
        <CapabilityTrustSection />

        {/* 3. POSITIONING */}
        <PositioningSection />


        {/* 4. PROGRAMME MANAGEMENT DASHBOARD (PREMIUM SECTION) */}
        <ProgrammeManagementSection />

        {/* 5. CORE FEATURES (3 COLUMNS WITH UI PREVIEWS) */}
        <CoreFeaturesSection />


        {/* 6. COMPLEX DELIVERY (GRID OF 6) */}
        <ComplexDeliverySection />

        {/* 7. USE CASES */}
        <UseCasesSection />

        {/* 8. HOW IT WORKS */}
        <HowItWorksSection />

        {/* 9. STRUCTURE VALUE (RADIAL VISUAL) */}
        <StructureValueSection />

        {/* 10. CTA */}
        <CTASection />

      </main>
      <Footer />
    </div>
  );
}
