

import { HeroSection } from "@/components/shared/hero-section";
import { FeaturesSection } from "@/components/shared/features-section";
import { CTASection } from "@/components/shared/cta-section";
import { Header } from "@/components/shared/header";
import { Footer } from "@/components/shared/footer";
import { ProblemSection } from "@/components/shared/problem-section";
import { ProductShowcaseSection } from "@/components/shared/product-showcase-section";
import { HowItWorksSection } from "@/components/shared/how-it-works-section";
import { TrustSection } from "@/components/shared/trust-section";

  return (
    <div className="flex flex-col min-h-screen bg-[#0b0f14]">
      <Header />
      <main className="flex-1 pt-0">
        {/* 1. HERO */}
        <HeroSection />

        {/* 2. PROBLEM / VALUE */}
        <ProblemSection />

        {/* 3. PRODUCT SHOWCASE */}
        <ProductShowcaseSection />

        {/* 4. CORE FEATURES */}
        <FeaturesSection />

        {/* 5. HOW IT WORKS */}
        <HowItWorksSection />

        {/* 6. TRUST & OUTCOMES */}
        <TrustSection />

        {/* 7. FINAL CTA */}
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
