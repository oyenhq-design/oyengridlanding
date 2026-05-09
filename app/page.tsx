import { Header, AnnouncementBar } from "@/components/layout/header";
import { HeroHumanSystem, MetricRail } from "@/components/sections/hero-cinematic";
import { OperationsUseCases, PlatformOrchestration } from "@/components/sections/human-impact-narrative";
import { WorkflowHorizontal, CoreSystems } from "@/components/sections/human-centered-architecture";
import { ImpactSection, FinalCTAHuman } from "@/components/sections/human-impact-outcomes";
import { FooterPremium } from "@/components/layout/footer";
import { Chatbot } from "@/components/layout/chatbot";
import { SearchSystem } from "@/components/layout/search-system";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#05070B] selection:bg-brand-gold selection:text-black antialiased overflow-x-hidden">
      {/* 1. NAVIGATION SYSTEM */}
      <Header />
      <AnnouncementBar />
      
      <div className="relative">
        {/* Atmospheric Cinematic Glows (Refined for Warmth) */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-gold/[0.03] blur-[150px] rounded-full" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-gold/[0.02] blur-[120px] rounded-full" />
        </div>

        <div className="relative z-10">
          {/* 2. HERO NARRATIVE: Human + System Coordination */}
          <HeroHumanSystem />

          {/* 3. INSTITUTIONAL SCALE: Metrics Proof */}
          <MetricRail />

          {/* 4. OPERATIONS + USE CASES: Merged Narrative */}
          <OperationsUseCases />

          {/* 5. PLATFORM ORCHESTRATION: Integrated Coordination */}
          <PlatformOrchestration />

          {/* 6. TECHNICAL LIFECYCLE: Horizontal Operational Flow */}
          <WorkflowHorizontal />

          {/* 7. CORE SYSTEMS: Infrastructure & Intelligence (Merged) */}
          <CoreSystems />

          {/* 8. ENTERPRISE IMPACT: Metrics & Executive Validation */}
          <ImpactSection />

          {/* 9. VISIONARY CLOSE: Final Human-Centered CTA */}
          <FinalCTAHuman />

          {/* 10. INSTITUTIONAL FOOTER */}
          <FooterPremium />
        </div>
      </div>

      {/* INTELLIGENCE LAYER */}
      <Chatbot />
      <SearchSystem />
    </main>
  );
}
