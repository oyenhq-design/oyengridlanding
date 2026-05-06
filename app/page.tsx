import { Header } from "@/components/layout/header";
import { OyenHero } from "@/components/sections/hero-section";
import { TrustAndClarity } from "@/components/sections/trust-and-clarity";
import { CoreValueSections } from "@/components/sections/core-value-sections";
import { DeepProductSections } from "@/components/sections/deep-product-sections";
import { ProofAndResourceSections } from "@/components/sections/proof-and-resource-sections";
import { FinalConversionSections } from "@/components/sections/final-conversion-sections";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0B0B0D] text-white selection:bg-[#F5B800]/30 font-sans overflow-x-hidden">
      <div style={{ background: 'red', color: 'white', padding: '20px', fontSize: '20px', textAlign: 'center', zIndex: 9999 }}>
        DEBUG: THIS IS THE ACTIVE FILE
      </div>
      <Header />
      
      <main className="flex-1">
        {/* HERO SECTION */}
        <OyenHero />

        {/* TRUST / METRICS STRIP + operational clarity */}
        <TrustAndClarity />

        {/* FEATURE SPLIT + scale and structure */}
        <CoreValueSections />

        {/* CORE PLATFORM + ANALYTICS + FEATURE GRID */}
        <DeepProductSections />

        {/* CASE STUDIES + KNOWLEDGE + TESTIMONIAL */}
        <ProofAndResourceSections />

        {/* PRICING CTA + FINAL CTA + FOOTER */}
        <FinalConversionSections />
      </main>
    </div>
  );
}
