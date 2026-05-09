import { Header, AnnouncementBar } from "@/components/layout/header";
import { HeroCinematic, MetricRail } from "@/components/sections/hero-cinematic";
import { UseCasesSection, OrchestrationSection } from "@/components/sections/institutional-narrative";
import { WorkflowSection, PlatformModules } from "@/components/sections/system-architecture";
import { ControlCenterSection, SecuritySection } from "@/components/sections/institutional-integrity";
import { OperationalOutcomes } from "@/components/sections/operational-outcomes";
import { FinalCTACinematic } from "@/components/sections/testimonial-cinematic";
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
        {/* Atmospheric Glow Layer (Global) */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand-gold/[0.02] blur-[120px] rounded-full" />
          <div className="absolute bottom-1/4 right-1/4 w-[700px] h-[700px] bg-brand-gold/[0.01] blur-[150px] rounded-full" />
        </div>

        <div className="relative z-10">
          {/* 2. HERO NARRATIVE: Infrastructure Establishment */}
          <HeroCinematic />

          {/* 3. INSTITUTIONAL SCALE: Metrics Proof */}
          <MetricRail />

          {/* 4. ORGANISATIONAL CONTEXT: Use Case Matrix */}
          <UseCasesSection />

          {/* 5. SYSTEM ORCHESTRATION: The Delivery Core */}
          <OrchestrationSection />

          {/* 6. TECHNICAL LIFECYCLE: The Workflow Pipeline */}
          <WorkflowSection />

          {/* 7. CAPABILITY LAYERS: The Platform Modules */}
          <PlatformModules />

          {/* 8. THE COMMAND CENTER: Global Scale (WOW SECTION) */}
          <ControlCenterSection />

          {/* 9. ROI VALIDATION: Operational Outcomes */}
          <OperationalOutcomes />

          {/* 10. GOVERNANCE: Security & Infrastructure */}
          <SecuritySection />

          {/* 11. FINAL AUTHORIZATION: The CTA */}
          <FinalCTACinematic />

          {/* 12. INSTITUTIONAL FOOTER */}
          <FooterPremium />
        </div>
      </div>

      {/* INTELLIGENCE LAYER */}
      <Chatbot />
      <SearchSystem />
    </main>
  );
}
