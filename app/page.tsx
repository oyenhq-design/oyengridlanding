import { Header } from "@/components/shared/header";
import { HeroSection } from "@/components/shared/hero-section";
import { TrustAndClarity } from "@/components/shared/trust-and-clarity";
import { CoreValueSections } from "@/components/shared/core-value-sections";
import { OperationalSections } from "@/components/shared/operational-sections";
import { ResourceSections } from "@/components/shared/resource-sections";
import { ConversionSections } from "@/components/shared/conversion-sections";
import { Footer } from "@/components/shared/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0B0B0C] text-white selection:bg-[#F5C044]/30 font-sans overflow-x-hidden">
      <Header />
      
      <main className="flex-1">
        {/* 3. HERO SECTION */}
        <HeroSection />

        {/* 4. TRUST / METRICS STRIP + 5. operational clarity */}
        <TrustAndClarity />

        {/* 6. FEATURE SPLIT + 7. scale and structure */}
        <CoreValueSections />

        {/* 8. operate with power + 9. ANALYTICS */}
        <OperationalSections />

        {/* 10. FEATURE GRID + 11. CASE STUDIES + 12. KNOWLEDGE */}
        <ResourceSections />

        {/* 13. TESTIMONIAL + 14. PRICING CTA + 15. FINAL CTA */}
        <ConversionSections />
      </main>

      {/* 16. FOOTER */}
      <Footer />
    </div>
  );
}
