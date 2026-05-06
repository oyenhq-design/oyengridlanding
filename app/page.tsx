import { ZoomHeader } from "@/components/shared/zoom-header";
import { ZoomHero } from "@/components/shared/zoom-hero";
import { ZoomFeatures } from "@/components/shared/zoom-features";
import { ZoomSocialProof } from "@/components/shared/zoom-social-proof";
import { ZoomFooter } from "@/components/shared/zoom-footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-[#0B0B0C] selection:bg-[#0B5CFF]/10 font-sans overflow-x-hidden">
      {/* 1. NAVBAR + 2. ANNOUNCEMENT BAR */}
      <ZoomHeader />
      
      <main className="flex-1">
        {/* 3. HERO + 4. PRODUCT CAROUSEL + 5. AI INTRO */}
        <ZoomHero />

        {/* 6. FEATURE SPLIT + 7. AWARDS + 8. PLATFORM */}
        <ZoomFeatures />

        {/* 9. RATINGS + 10. TESTIMONIAL + 11. CASE STUDY CAROUSEL + 12. NEWS GRID */}
        <ZoomSocialProof />

        {/* 13. FINAL CTA + 14. FOOTER */}
        <ZoomFooter />
      </main>
    </div>
  );
}
