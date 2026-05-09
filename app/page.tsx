import { Header, AnnouncementBar } from "@/components/layout/header";
import { HeroCinematic, MetricRail } from "@/components/sections/hero-cinematic";
import { OperationalClarityCinematic, FeatureGridPremium } from "@/components/sections/operational-clarity-cinematic";
import { TestimonialCinematic, FinalCTACinematic } from "@/components/sections/testimonial-cinematic";
import { FooterPremium } from "@/components/layout/footer";
import { Chatbot } from "@/components/layout/chatbot";
import { SearchSystem } from "@/components/layout/search-system";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#05070B] selection:bg-brand-gold selection:text-black">
      <Header />
      <AnnouncementBar />
      
      {/* 1. HERO SECTION: Cinematic background, Left text, Right dashboard */}
      <HeroCinematic />

      {/* 2. METRIC RAIL: Single strip directly below hero */}
      <MetricRail />

      {/* 3. OPERATIONAL CLARITY: Image LEFT, Content RIGHT */}
      <OperationalClarityCinematic />

      {/* 4. FEATURE GRID: Exactly 4 large premium cards */}
      <FeatureGridPremium />

      {/* 5. TESTIMONIAL: Centered quote with background image anchor */}
      <TestimonialCinematic />

      {/* 6. FINAL CTA: Massive background, Centered composition */}
      <FinalCTACinematic />

      {/* 7. FOOTER: Zoom-inspired width and density */}
      <FooterPremium />

      {/* INFRASTRUCTURE INTELLIGENCE */}
      <Chatbot />
      <SearchSystem />
    </main>
  );
}
