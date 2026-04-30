import { Header } from "@/components/shared/header";
import { HeroSection } from "@/components/shared/hero-section";
import { FeatureCarouselSection } from "@/components/shared/feature-carousel-section";
import { FeatureSpotlightSection } from "@/components/shared/feature-spotlight-section";
import { SocialProofSection } from "@/components/shared/social-proof-section";
import { SolutionsTabsSection } from "@/components/shared/solutions-tabs-section";
import { FeaturesSection } from "@/components/shared/features-section";
import { CustomerStoriesSection } from "@/components/shared/customer-stories-section";
import { NewsInsightsSection } from "@/components/shared/news-insights-section";
import { CTASection } from "@/components/shared/cta-section";
import { Footer } from "@/components/shared/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0B0B0C] text-white selection:bg-[#C8A96A]/30">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <FeatureCarouselSection />
        <FeatureSpotlightSection />
        <SocialProofSection />
        <SolutionsTabsSection />
        <FeaturesSection /> {/* Value Proposition Grid */}
        <CustomerStoriesSection />
        <NewsInsightsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
