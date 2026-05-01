import { Header } from "@/components/shared/header";
import { Footer } from "@/components/shared/footer";
import { PricingHero } from "@/components/pricing/pricing-hero";
import { PricingCards } from "@/components/pricing/pricing-cards";
import { PricingComparison } from "@/components/pricing/pricing-comparison";
import { PricingHowItWorks } from "@/components/pricing/pricing-how-it-works";
import { PricingRecommendations } from "@/components/pricing/pricing-recommendations";
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
        <PricingHero />
        <PricingCards />
        <PricingComparison />
        <PricingHowItWorks />
        <PricingRecommendations />
        <PricingFAQ />
        <PricingCTA />
      </main>
      <Footer />
    </div>
  );
}
