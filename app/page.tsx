import { Header, AnnouncementBar } from "@/components/layout/header";
import { HeroZoom } from "@/components/sections/hero-zoom";
import { OperationalClarityZoom } from "@/components/sections/operational-clarity-zoom";
import { FeatureGridZoom } from "@/components/sections/feature-grid-zoom";
import { EnterpriseSecurityZoom } from "@/components/sections/enterprise-security-zoom";
import { TestimonialZoom } from "@/components/sections/testimonial-zoom";
import { FinalCTAZoom } from "@/components/sections/final-cta-zoom";
import { FooterZoom } from "@/components/layout/footer";
import { Chatbot } from "@/components/layout/chatbot";
import { SearchSystem } from "@/components/layout/search-system";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#040816]">
      <Header />
      <AnnouncementBar />
      <HeroZoom />
      <OperationalClarityZoom />
      <FeatureGridZoom />
      <EnterpriseSecurityZoom />
      <TestimonialZoom />
      <FinalCTAZoom />
      <FooterZoom />
      
      {/* Infrastructure Intelligence */}
      <Chatbot />
      <SearchSystem />
    </main>
  );
}
