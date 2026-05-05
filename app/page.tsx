import { Header } from "@/components/shared/header";
import { HeroSection } from "@/components/shared/hero-section";
import { TrustSection } from "@/components/shared/trust-section";
import { WhyItWorksSection } from "@/components/shared/why-it-works-section";
import { ProductOverviewSection } from "@/components/shared/product-overview-section";
import { PerformanceAnalyticsSection } from "@/components/shared/performance-analytics-section";
import { FeaturesSection } from "@/components/shared/features-section";
import { RealWorldUsageSection } from "@/components/shared/real-world-usage-section";
import { InsightsSection } from "@/components/shared/insights-section";
import { CustomerStoriesSection } from "@/components/shared/customer-stories-section";
import { PricingEntrySection } from "@/components/shared/pricing-entry-section";
import { CTASection } from "@/components/shared/cta-section";
import { TargetUsersSection } from "@/components/shared/target-users-section";
import { InteractiveFeaturesSection } from "@/components/shared/interactive-features-section";
import { Footer } from "@/components/shared/footer";
import { MainGrid } from "@/components/layout/main-grid";
import { Sidebar } from "@/components/layout/sidebar";

const HOME_NAV_ITEMS = [
  { id: "overview", label: "Overview" },
  { id: "why-it-works", label: "Why it works" },
  { id: "product", label: "Product overview" },
  { id: "interactive", label: "Interactive demo" },
  { id: "analytics", label: "Analytics" },
  { id: "features", label: "All features" },
  { id: "pricing", label: "Pricing" },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0B0B0C] text-white selection:bg-[#D4AF37]/30 font-sans relative">
      {/* Global Background Atmosphere */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Top Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[#D4AF37] opacity-[0.05] blur-[140px] rounded-full -translate-y-1/2" />
        {/* Mid Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[800px] bg-white opacity-[0.02] blur-[160px] rounded-full" />
        {/* Bottom Glow Variation */}
        <div className="absolute bottom-0 left-0 w-full h-[500px] bg-gradient-to-t from-[#111111] to-transparent opacity-40" />
      </div>

      <Header />
      <main className="flex-1">
        <MainGrid sidebar={<Sidebar items={HOME_NAV_ITEMS} />}>
          {/* Each section owns its py-24 vertical spacing */}
          <div id="overview">
            <HeroSection />
            <TrustSection />
          </div>

          <div id="why-it-works">
            <WhyItWorksSection />
          </div>

          <div id="product">
            <ProductOverviewSection />
            <TargetUsersSection />
          </div>

          <div id="interactive">
            <InteractiveFeaturesSection />
          </div>

          <div id="analytics">
            <PerformanceAnalyticsSection />
          </div>

          <div id="features">
            <FeaturesSection />
            <RealWorldUsageSection />
            <InsightsSection />
            <CustomerStoriesSection />
          </div>

          <div id="pricing">
            <PricingEntrySection />
            <CTASection />
          </div>
        </MainGrid>
      </main>
      <Footer />
    </div>
  );
}
