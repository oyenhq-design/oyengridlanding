import { Header } from "@/components/shared/header";
import { Footer } from "@/components/shared/footer";
import { PricingSection } from "@/components/shared/pricing-section";
import { ComparisonSection } from "@/components/shared/comparison-section";

export default function PricingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0B0B0F]">
      <Header />
      <main className="flex-1 pt-24">
        {/* We reuse the PricingSection component directly here */}
        <div className="pt-8">
          <PricingSection />
        </div>
        
        {/* Added Comparison Section to justify the pricing to enterprise buyers */}
        <ComparisonSection />

      </main>
      <Footer />
    </div>
  );
}
