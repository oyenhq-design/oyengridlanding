import { Header } from "@/components/shared/header";
import { Footer } from "@/components/shared/footer";
import { PricingSection } from "@/components/shared/pricing-section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing | OYEN Grid",
  description: "Simple pricing. Serious scale. Start small or deploy across your organisation.",
};

export default function PricingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0A0A0A]">
      <Header />
      <main className="flex-1">
        <PricingSection />
      </main>
      <Footer />
    </div>
  );
}
