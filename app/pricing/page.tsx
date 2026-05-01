import { Header } from "@/components/shared/header";
import { Footer } from "@/components/shared/footer";
import { PricingHeader } from "@/components/pricing/pricing-header";
import { PricingSidebar } from "@/components/pricing/pricing-sidebar";
import { PricingCards } from "@/components/pricing/pricing-cards";
import { PricingComparison } from "@/components/pricing/pricing-comparison";
import { PricingAddons } from "@/components/pricing/pricing-addons";
import { PricingFAQ } from "@/components/pricing/pricing-faq";
import { PricingCTA } from "@/components/pricing/pricing-cta";
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
        
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 flex gap-12 relative">
          {/* Sticky Sidebar */}
          <PricingSidebar />

          {/* Main Content Area */}
          <div className="flex-1 min-w-0">
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
