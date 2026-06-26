import { Header, AnnouncementBar } from "@/components/layout/header";
import { HeroInstitutional } from "@/components/sections/institutional-ecosystem";
import { OperationalLifecycle } from "@/components/sections/operational-lifecycle";
import { OperationalInfrastructure } from "@/components/sections/operational-infrastructure";
import { ScaleStructure } from "@/components/sections/scale-structure";
import { InstitutionalImpactCinematic } from "@/components/sections/institutional-impact-cinematic";
import { WhatsNew } from "@/components/sections/whats-new";
import { CleanConversion } from "@/components/sections/clean-conversion";
import { FinalCTA } from "@/components/sections/final-cta";

import { FooterPremium } from "@/components/layout/footer";
import { SearchSystem } from "@/components/layout/search-system";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAFAF8] selection:bg-brand-gold selection:text-black antialiased overflow-x-hidden">
      {/* 1. NAVIGATION & ANNOUNCEMENT */}
      <Header />
      <AnnouncementBar />
      
      <div className="relative">
        <div className="relative z-10">
          {/* 2. HERO */}
          <HeroInstitutional />

          {/* 3. PROGRAMME LIFECYCLE */}
          <OperationalLifecycle />

          {/* 4. PLATFORM CAPABILITIES */}
          <OperationalInfrastructure />

          {/* 6. INFRASTRUCTURE SECTION */}
          <ScaleStructure />
          
          {/* 7. CUSTOMER TESTIMONIAL */}
          <InstitutionalImpactCinematic />

          {/* 7.5. WHAT'S NEW SECTION */}
          <WhatsNew />

          {/* 7.8. FINAL CONVERSION */}
          <CleanConversion />

          {/* 8. FINAL CTA */}
          <FinalCTA />

          {/* 9. FOOTER */}
          <FooterPremium hideCTA={true} />
        </div>
      </div>

      {/* OPERATIONAL UTILITIES */}
      <SearchSystem />
    </main>
  );
}
