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
import { GlideSection } from "@/components/layout/glide-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAFAF8] selection:bg-brand-gold selection:text-black antialiased overflow-x-hidden">
      {/* 1. NAVIGATION & ANNOUNCEMENT */}
      <Header />
      <AnnouncementBar />
      
      <div className="relative">
        <div className="relative z-10">
          {/* 2. HERO */}
          <div className="relative" style={{ zIndex: 1 }}>
            <HeroInstitutional />
          </div>

          {/* 2.5. WHY OYEN GRID VALUE PROP */}
          <GlideSection index={2}>
            <WhyOyen />
          </GlideSection>

          {/* 3. PROGRAMME LIFECYCLE */}
          <GlideSection index={3} speedMultiplier={1.5}>
            <OperationalLifecycle />
          </GlideSection>

          {/* 4. PLATFORM CAPABILITIES */}
          <GlideSection index={4}>
            <OperationalInfrastructure />
          </GlideSection>

          {/* 5. HUMAN COORDINATION */}
          <GlideSection index={5}>
            <HumanCoordination />
          </GlideSection>

          {/* 6. INFRASTRUCTURE SECTION */}
          <GlideSection index={6}>
            <ScaleStructure />
          </GlideSection>
          
          {/* 7. CUSTOMER TESTIMONIAL */}
          <GlideSection index={7}>
            <InstitutionalImpactCinematic />
          </GlideSection>

          {/* 7.5. WHAT'S NEW SECTION */}
          <GlideSection index={8}>
            <WhatsNew />
          </GlideSection>

          {/* 7.8. FINAL CONVERSION */}
          <GlideSection index={9}>
            <CleanConversion />
          </GlideSection>

          {/* 8. FINAL CTA */}
          <GlideSection index={10}>
            <FinalCTA />
          </GlideSection>

          {/* 9. FOOTER */}
          <div className="relative" style={{ zIndex: 11 }}>
            <FooterPremium hideCTA={true} />
          </div>
        </div>
      </div>

      {/* OPERATIONAL UTILITIES */}
      <SearchSystem />
    </main>
  );
}
