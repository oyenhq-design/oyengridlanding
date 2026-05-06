import { Header } from "@/components/shared/header";
import { HeroSection } from "@/components/shared/hero-section";
import { SystemStatement } from "@/components/shared/system-statement";
import { FeatureTabs } from "@/components/shared/feature-tabs";
import { CorePlatform } from "@/components/shared/core-platform";
import { TrainingSystem } from "@/components/shared/training-system";
import { CommunicationSection } from "@/components/shared/communication-section";
import { AILayerSection } from "@/components/shared/ai-layer-section";
import { NotesSystemSection } from "@/components/shared/notes-system-section";
import { SocialProofSection } from "@/components/shared/social-proof-section";
import { FinalCTA } from "@/components/shared/final-cta-section";
import { Footer } from "@/components/shared/footer";
import { MainGrid } from "@/components/layout/main-grid";
import { Sidebar } from "@/components/layout/sidebar";

const HOME_NAV_ITEMS = [
  { id: "overview", label: "Overview" },
  { id: "system", label: "System" },
  { id: "features", label: "Features" },
  { id: "platform", label: "Platform" },
  { id: "training", label: "Training" },
  { id: "communication", label: "Communication" },
  { id: "intelligence", label: "Intelligence" },
  { id: "workspace", label: "Workspace" },
  { id: "proof", label: "Social Proof" },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0B0B0C] text-white selection:bg-[#F5B942]/30 font-sans relative overflow-x-hidden">
      
      {/* Global Background Atmosphere */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Top Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[#F5B942] opacity-[0.05] blur-[140px] rounded-full -translate-y-1/2" />
        {/* Mid Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[800px] bg-[#3B82F6] opacity-[0.02] blur-[160px] rounded-full" />
        {/* Subtle radial gradients */}
        <div className="absolute top-[20%] right-0 w-[600px] h-[600px] bg-[#F5B942] opacity-[0.02] blur-[120px] rounded-full" />
        <div className="absolute bottom-[20%] left-0 w-[600px] h-[600px] bg-[#3B82F6] opacity-[0.02] blur-[120px] rounded-full" />
      </div>

      <Header />
      
      <main className="flex-1 relative z-10">
        <MainGrid sidebar={<Sidebar items={HOME_NAV_ITEMS} />}>
          <div id="overview">
            <HeroSection />
          </div>

          <div id="system">
            <SystemStatement />
          </div>

          <div id="features">
            <FeatureTabs />
          </div>

          <div id="platform">
            <CorePlatform />
          </div>

          <div id="training">
            <TrainingSystem />
          </div>

          <div id="communication">
            <CommunicationSection />
          </div>

          <div id="intelligence">
            <AILayerSection />
          </div>

          <div id="workspace">
            <NotesSystemSection />
          </div>

          <div id="proof">
            <SocialProofSection />
          </div>

          <div id="cta">
            <FinalCTA />
          </div>
        </MainGrid>
      </main>

      <Footer />
    </div>
  );
}
