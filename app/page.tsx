import { Header, AnnouncementBar } from "@/components/layout/header";
import { HeroReplica } from "@/components/sections/hero-replica";
import { StatsStrip, OperationalClarityReplica } from "@/components/sections/operational-clarity-replica";
import { FeatureGridReplica } from "@/components/sections/feature-grid-replica";
import { SecurityReplica, TestimonialReplica } from "@/components/sections/security-replica";
import { FinalCTAReplica, FooterReplica } from "@/components/layout/footer-replica";
import { Chatbot } from "@/components/layout/chatbot";
import { SearchSystem } from "@/components/layout/search-system";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#05070B]">
      <Header />
      <AnnouncementBar />
      
      {/* SECTION 1: HERO */}
      <HeroReplica />

      {/* SECTION 2: STATS RAIL 1 */}
      <StatsStrip />

      {/* SECTION 3: OPERATIONAL CLARITY */}
      <OperationalClarityReplica />

      {/* SECTION 4: FEATURE GRID */}
      <FeatureGridReplica />

      {/* SECTION 5: STATS RAIL 2 (Repeat as requested) */}
      <StatsStrip />

      {/* SECTION 6: SECURITY GOVERNANCE */}
      <SecurityReplica />

      {/* SECTION 7: TESTIMONIAL & RESULTS */}
      <TestimonialReplica />

      {/* SECTION 8: FINAL CTA */}
      <FinalCTAReplica />

      {/* SECTION 9: FOOTER */}
      <FooterReplica />

      {/* INFRASTRUCTURE INTELLIGENCE */}
      <Chatbot />
      <SearchSystem />
    </main>
  );
}
