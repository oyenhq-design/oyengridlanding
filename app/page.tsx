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
    <div className="flex flex-col min-h-screen bg-[#0B0B0C] text-white selection:bg-[#D4AF37]/30 font-sans">
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
