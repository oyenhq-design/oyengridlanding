import { Header, AnnouncementBar } from "@/components/layout/header";
import { HeroInstitutional } from "@/components/sections/hero-institutional";
import { OperationalClarityV2 } from "@/components/sections/operational-clarity-v2";
import { IntelligenceLayerV2 } from "@/components/sections/intelligence-layer-v2";
import { StructuralProtection } from "@/components/sections/structural-protection";
import { InstitutionalTestimonials } from "@/components/sections/institutional-testimonials";
import { FinalCTAInstitutional } from "@/components/sections/final-cta-institutional";
import { Footer } from "@/components/layout/footer";
import { Chatbot } from "@/components/layout/chatbot";
import { SearchSystem } from "@/components/layout/search-system";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#040816]">
      <Header />
      <AnnouncementBar />
      <HeroInstitutional />
      <OperationalClarityV2 />
      <IntelligenceLayerV2 />
      <StructuralProtection />
      <InstitutionalTestimonials />
      <FinalCTAInstitutional />
      <Footer />
      <Chatbot />
      <SearchSystem />
    </main>
  );
}
