import { ZoomHeader } from "@/components/shared/zoom/header";
import { ZoomHero } from "@/components/shared/zoom/hero";
import { ProductCarousel } from "@/components/shared/zoom/product-carousel";
import { AICompanionSection } from "@/components/shared/zoom/ai-companion";
import { FeatureAwards } from "@/components/shared/zoom/feature-awards";
import { PlatformTrust } from "@/components/shared/zoom/platform-trust";
import { SocialProof } from "@/components/shared/zoom/social-proof";
import { FooterCTA } from "@/components/shared/zoom/footer-cta";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-[#232333] selection:bg-[#0B5CFF]/30 font-sans overflow-x-hidden">
      <ZoomHeader />
      
      <main className="flex-1">
        {/* 3. HERO SECTION */}
        <ZoomHero />

        {/* 4. PRODUCT CAROUSEL */}
        <ProductCarousel />

        {/* 5. AI COMPANION SECTION */}
        <AICompanionSection />

        {/* 6. FEATURE SPLIT + 7. AWARDS CARDS */}
        <FeatureAwards />

        {/* 8. PLATFORM SECTION + 9. RATINGS / TRUST METRICS */}
        <PlatformTrust />

        {/* 10. TESTIMONIAL + 11. CASE STUDY CAROUSEL */}
        <SocialProof />

        {/* 12. NEWS GRID + 13. FINAL CTA + 14. FOOTER */}
        <FooterCTA />
      </main>
    </div>
  );
}
