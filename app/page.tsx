import { PremiumHeader } from "@/components/shared/premium-header";
import { PremiumHero } from "@/components/shared/premium-hero";
import { PremiumFeatures } from "@/components/shared/premium-features";
import { PremiumInsights } from "@/components/shared/premium-insights";
import { PremiumConversion } from "@/components/shared/premium-conversion";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0B0B0C] text-white selection:bg-[#F5B800]/30 font-sans overflow-x-hidden">
      {/* 1. NAVBAR + 2. ANNOUNCEMENT BAR */}
      <PremiumHeader />
      
      <main className="flex-1">
        {/* 3. HERO + 4. TRUST LOGOS + 5. OPERATIONAL CLARITY */}
        <PremiumHero />

        {/* 6. FEATURE SPLIT + 7. FEATURE GRID + 8. OPERATE WITH POWER TABS */}
        <PremiumFeatures />

        {/* 9. INSIGHTS + 10. SCALE GRID + 11. CASE STUDIES + 12. KNOWLEDGE */}
        <PremiumInsights />

        {/* 13. TESTIMONIAL + 14. PRICING CTA + 15. FINAL CTA + 16. FOOTER */}
        <PremiumConversion />
      </main>
    </div>
  );
}
