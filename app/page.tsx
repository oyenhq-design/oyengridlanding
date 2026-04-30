
import { HeroSection } from "@/components/shared/hero-section";
import { FeaturesSection } from "@/components/shared/features-section";
import { CTASection } from "@/components/shared/cta-section";
import { Header } from "@/components/shared/header";
import { Footer } from "@/components/shared/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 pt-16">
        {/* HERO */}
        <HeroSection />

        {/* PROBLEM & SOLUTION (to be merged into Features) */}
        <FeaturesSection />

        {/* PRODUCT (to be merged into Features or as a single visual below) */}

        {/* CTA */}
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
