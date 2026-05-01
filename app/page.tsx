import { Header } from "@/components/shared/header";
import { HeroSection } from "@/components/shared/hero-section";
import { TrustSection } from "@/components/shared/trust-section";
import { WhyItWorksSection } from "@/components/shared/why-it-works-section";
import { ProductOverviewSection } from "@/components/shared/product-overview-section";
import { TabbedShowcaseSection } from "@/components/shared/tabbed-showcase-section";
import { PerformanceAnalyticsSection } from "@/components/shared/performance-analytics-section";
import { FeaturesSection } from "@/components/shared/features-section";
import { RealWorldUsageSection } from "@/components/shared/real-world-usage-section";
import { InsightsSection } from "@/components/shared/insights-section";
import { CustomerStoriesSection } from "@/components/shared/customer-stories-section";
import { CTASection } from "@/components/shared/cta-section";
import { Footer } from "@/components/shared/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0B0B0C] text-white selection:bg-[#D4AF37]/30 font-sans">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <TrustSection />
        <WhyItWorksSection />
        <ProductOverviewSection />
        <TabbedShowcaseSection />
        <PerformanceAnalyticsSection />
        <FeaturesSection />
        <RealWorldUsageSection />
        <InsightsSection />
        <CustomerStoriesSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
