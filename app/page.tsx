import { Header, AnnouncementBar } from "@/components/layout/header";
import { HeroInstitutional, PlatformOverview, OperationalControlCenter } from "@/components/sections/institutional-ecosystem";
import { IntelligenceHumanConnection, TrustOutcomes, FinalAuthorisation } from "@/components/sections/institutional-validation";
import { FooterPremium } from "@/components/layout/footer";
import { Chatbot } from "@/components/layout/chatbot";
import { SearchSystem } from "@/components/layout/search-system";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#05070B] selection:bg-brand-gold selection:text-black antialiased overflow-x-hidden">
      {/* 1. NAVIGATION & ANNOUNCEMENT */}
      <Header />
      <AnnouncementBar />
      
      <div className="relative">
        {/* Institutional Ambient Lighting */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-brand-gold/[0.04] blur-[180px] rounded-full" />
          <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-brand-gold/[0.02] blur-[150px] rounded-full" />
        </div>

        <div className="relative z-10">
          {/* 2. HERO: Institutional Infrastructure & Human Coordination */}
          <HeroInstitutional />

          {/* 3. PLATFORM OVERVIEW: Built for Structured Delivery */}
          <PlatformOverview />

          {/* 4. OPERATIONAL SYSTEM: Orchestration & Lifecycle (THE MAIN SECTION) */}
          <OperationalControlCenter />

          {/* 5. INTELLIGENCE & CONNECTION: Human Intelligence Layer */}
          <IntelligenceHumanConnection />

          {/* 6. TRUST & OUTCOMES: Metrics & Executive Validation */}
          <TrustOutcomes />

          {/* 7. FINAL AUTHORISATION: Immersive Closing */}
          <FinalAuthorisation />

          {/* 8. INSTITUTIONAL FOOTER */}
          <FooterPremium />
        </div>
      </div>

      {/* OPERATIONAL UTILITIES */}
      <Chatbot />
      <SearchSystem />
    </main>
  );
}
