import { Header } from "@/components/shared/header";
import { PremiumHero } from "@/components/shared/hero-section";
import { TrustAndClarity } from "@/components/shared/trust-and-clarity";
import { CoreValueSections } from "@/components/shared/core-value-sections";
import { DeepProductSections } from "@/components/shared/deep-product-sections";
import { ProofAndResourceSections } from "@/components/shared/proof-and-resource-sections";
import { FinalConversionSections } from "@/components/shared/final-conversion-sections";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0B0B0C] text-white selection:bg-[#F5C044]/30 font-sans overflow-x-hidden">
      <Header />
      
      <main className="flex-1">
        {/* 1. HERO + 2. TRUST STRIP */}
        <PremiumHero />

        {/* 3. operational clarity */}
        <TrustAndClarity />

        {/* 4. FEATURE SPLIT + 5. scale and structure */}
        <CoreValueSections />

        {/* 6. CORE PLATFORM + 7. ANALYTICS + 8. FEATURE GRID */}
        <DeepProductSections />

        {/* 9. CASE STUDIES + 10. KNOWLEDGE + 11. TESTIMONIAL */}
        <ProofAndResourceSections />

        {/* 12. PRICING CTA + 13. FINAL CTA + 14. FOOTER */}
        <FinalConversionSections />
      </main>
    </div>
  );
}
