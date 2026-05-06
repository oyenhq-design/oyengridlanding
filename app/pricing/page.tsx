import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { PricingHeader } from "@/components/sections/pricing-header";
import { PricingSidebar } from "@/components/sections/pricing-sidebar";
import { PricingCards } from "@/components/sections/pricing-cards";
import { PricingContextHeader } from "@/components/sections/pricing-context-header";
import { PlanExplainerSection } from "@/components/sections/plan-explainer-section";
import { PricingComparison } from "@/components/sections/pricing-comparison";
import { PricingAddons } from "@/components/sections/pricing-addons";
import { PricingFAQ } from "@/components/sections/pricing-faq";
import { PricingCTA } from "@/components/sections/pricing-cta";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing | OYEN Grid",
  description: "Simple pricing. Serious scale. Start with one programme and scale to full operational control.",
};

export default function PricingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0B0B0C]">
      <Header />
      <main className="flex-1">
        <PricingHeader />
        
        <div className="max-w-[1400px] mx-auto px-8 flex flex-col lg:flex-row gap-8 relative">
          {/* Sticky Sidebar (Fixed 240px) */}
          <PricingSidebar />

          {/* Main Content Area (Max 1100px, Centered in its column) */}
          <div className="flex-1 max-w-[1100px] w-full mx-auto">
            <PlanExplainerSection />
            <PricingCards />
            <PricingComparison />
            <PricingAddons />
            <PricingFAQ />
          </div>
        </div>

        <PricingCTA />
      </main>
      <Footer />
    </div>
  );
}
