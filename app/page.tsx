import { Header, AnnouncementBar } from "@/components/layout/header";
import { HeroInstitutional, PlatformOverview } from "@/components/sections/institutional-ecosystem";
import { OperationalLifecycle } from "@/components/sections/operational-lifecycle";
import { OperationalInfrastructure } from "@/components/sections/operational-infrastructure";
import { HumanCoordination } from "@/components/sections/human-coordination";
import { OperationalIntelligence } from "@/components/sections/operational-intelligence";
import { ScaleStructure } from "@/components/sections/scale-structure";
import { IntelligenceLayer } from "@/components/sections/intelligence-layer";
import { TrustOutcomes, FinalAuthorisation } from "@/components/sections/institutional-validation";
import { FooterPremium } from "@/components/layout/footer";
import { Chatbot } from "@/components/layout/chatbot";
import { SearchSystem } from "@/components/layout/search-system";

export default function Home() {
  // Operational Lifecycle & Institutional Infrastructure
  return (
    <main className="min-h-screen bg-[#05070B] selection:bg-brand-gold selection:text-black antialiased overflow-x-hidden">
      {/* 1. NAVIGATION & ANNOUNCEMENT */}
      <Header />
      <AnnouncementBar />
      
      <div className="relative">
        <div className="relative z-10">
          {/* 2. HERO: Institutional Infrastructure & Human Coordination */}
          <HeroInstitutional />

          {/* NEW: OPERATIONAL LIFECYCLE: Interactive Programme Flow */}
          <OperationalLifecycle />

          {/* NEW: OPERATIONAL INFRASTRUCTURE: Command Center & System Capabilities */}
          <OperationalInfrastructure />

          {/* NEW: HUMAN COORDINATION: Intelligent Communications & Live Sync */}
          <HumanCoordination />

          {/* 4. OPERATIONAL SYSTEM: Operational Intelligence & Telemetry */}
          <OperationalIntelligence />

          {/* 5. INSTITUTIONAL SCALE: Architectural Infrastructure & Global Sync */}
          <ScaleStructure />

          {/* 6. INTELLIGENCE LAYER: Human Coordination Powered by Intelligence */}
          <IntelligenceLayer />

          {/* 7. TRUST & OUTCOMES: Metrics & Executive Validation */}
          <TrustOutcomes />

          {/* 8. FINAL AUTHORISATION: Immersive Closing */}
          <FinalAuthorisation />

          {/* 9. INSTITUTIONAL FOOTER */}
          <FooterPremium />
        </div>
      </div>

      {/* OPERATIONAL UTILITIES */}
      <Chatbot />
      <SearchSystem />
    </main>
  );
}
