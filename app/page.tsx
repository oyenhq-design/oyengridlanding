import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero";
import { FeaturesMain } from "@/components/sections/features-main";
import { FeaturesAdvanced } from "@/components/sections/features-advanced";
import { ProofAndKnowledge } from "@/components/sections/proof-and-knowledge";
import { ConversionSections } from "@/components/sections/conversion";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0B0B0D]">
      {/* 1. Header & 2. Announcement Bar */}
      <Header />
      
      <main className="flex-1">
        
        {/* 3. Hero & 4. Trust Strip */}
        <HeroSection />

        {/* 5. Operational Clarity, 6. Feature Split, 7. Scale & Structure */}
        <FeaturesMain />

        {/* 8. Tabs, 9. Insights, 10. Scale Grid */}
        <FeaturesAdvanced />

        {/* 11. Built for Operators, 12. Knowledge, 13. Testimonials */}
        <ProofAndKnowledge />

        {/* 14. Pricing CTA, 15. Final CTA */}
        <ConversionSections />

      </main>

      {/* 16. Footer */}
      <Footer />
    </div>
  );
}
