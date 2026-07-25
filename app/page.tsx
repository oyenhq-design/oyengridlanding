import { Header, AnnouncementBar } from "@/components/layout/header";
import { HeroInstitutional } from "@/components/sections/institutional-ecosystem";
import { WhyOyen } from "@/components/sections/why-oyen";
import { OperationalLifecycle } from "@/components/sections/operational-lifecycle";
import { OperationalInfrastructure } from "@/components/sections/operational-infrastructure";
import { HumanCoordination } from "@/components/sections/human-coordination";
import { ScaleStructure } from "@/components/sections/scale-structure";
import { InstitutionalImpactCinematic } from "@/components/sections/institutional-impact-cinematic";
import { WhatsNew } from "@/components/sections/whats-new";
import { CleanConversion } from "@/components/sections/clean-conversion";
import { FinalCTA } from "@/components/sections/final-cta";

import { FooterPremium } from "@/components/layout/footer";
import { SearchSystem } from "@/components/layout/search-system";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAFAF8] selection:bg-brand-gold selection:text-black antialiased overflow-x-clip">
      {/* 1. NAVIGATION & ANNOUNCEMENT */}
      <Header />
      <AnnouncementBar />
      
      <div className="relative">
        <div className="relative z-10">
          {/* 2. HERO */}
          <div className="sticky" style={{ top: 'calc(0 * var(--stack-offset))', zIndex: 10 }}>
            <HeroInstitutional />
          </div>

          {/* 2.5. WHY OYEN GRID VALUE PROP */}
          <div className="sticky" style={{ top: 'calc(1 * var(--stack-offset))', zIndex: 11 }}>
            <WhyOyen />
          </div>

          {/* 3. PROGRAMME LIFECYCLE */}
          <div className="sticky" style={{ top: 'calc(2 * var(--stack-offset))', zIndex: 12 }}>
            <OperationalLifecycle />
          </div>

          {/* 4. PLATFORM CAPABILITIES */}
          <div className="sticky" style={{ top: 'calc(3 * var(--stack-offset))', zIndex: 13 }}>
            <OperationalInfrastructure />
          </div>

          {/* 5. HUMAN COORDINATION */}
          <div className="sticky" style={{ top: 'calc(4 * var(--stack-offset))', zIndex: 14 }}>
            <HumanCoordination />
          </div>

          {/* 6. INFRASTRUCTURE SECTION */}
          <div className="sticky" style={{ top: 'calc(5 * var(--stack-offset))', zIndex: 15 }}>
            <ScaleStructure />
          </div>
          
          {/* 7. CUSTOMER TESTIMONIAL */}
          <div className="sticky" style={{ top: 'calc(6 * var(--stack-offset))', zIndex: 16 }}>
            <InstitutionalImpactCinematic />
          </div>

          {/* 7.5. WHAT'S NEW SECTION */}
          <div className="sticky" style={{ top: 'calc(7 * var(--stack-offset))', zIndex: 17 }}>
            <WhatsNew />
          </div>

          {/* 7.8. FINAL CONVERSION */}
          <div className="sticky" style={{ top: 'calc(8 * var(--stack-offset))', zIndex: 18 }}>
            <CleanConversion />
          </div>

          {/* 8. FINAL CTA */}
          <div className="sticky" style={{ top: 'calc(9 * var(--stack-offset))', zIndex: 19 }}>
            <FinalCTA />
          </div>

          {/* 9. FOOTER */}
          <div className="relative" style={{ zIndex: 20 }}>
            <FooterPremium hideCTA={true} />
          </div>
        </div>
      </div>

      {/* OPERATIONAL UTILITIES */}
      <SearchSystem />
    </main>
  );
}
