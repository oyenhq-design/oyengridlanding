import { Header, AnnouncementBar } from "@/components/layout/header";
import { Hero } from "@/components/sections/hero";
import { OperationalClarity } from "@/components/sections/operational-clarity";
import { OperationalIntelligence } from "@/components/sections/operational-intelligence";
import { MetricsStrip } from "@/components/sections/metrics-strip";
import { EnterpriseSecurity } from "@/components/sections/enterprise-security";
import { TestimonialSection } from "@/components/sections/testimonial-section";
import { FinalCTA } from "@/components/sections/final-cta";
import { Footer } from "@/components/layout/footer";
import { SectionReveal } from "@/components/layout/section-reveal";
import { SectionDivider } from "@/components/layout/section-divider";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <AnnouncementBar />
        <Hero />
        
        {/* UNEVEN EDITORIAL RHYTHM */}
        
        <div className="mt-40"> {/* 160px spacing */}
          <SectionDivider />
          <SectionReveal>
            <OperationalClarity />
          </SectionReveal>
        </div>

        <div className="mt-56"> {/* 224px spacing */}
          <SectionDivider />
          <SectionReveal>
            <OperationalIntelligence />
          </SectionReveal>
        </div>

        <div className="mt-40"> {/* 160px spacing */}
          <SectionDivider />
          <SectionReveal>
            <MetricsStrip />
          </SectionReveal>
        </div>

        <div className="mt-64"> {/* 256px spacing */}
          <SectionDivider />
          <SectionReveal>
            <EnterpriseSecurity />
          </SectionReveal>
        </div>

        <div className="mt-48"> {/* 192px spacing */}
          <SectionDivider />
          <SectionReveal>
            <TestimonialSection />
          </SectionReveal>
        </div>

        <div className="mt-64"> {/* 256px spacing */}
          <SectionDivider />
          <SectionReveal>
            <FinalCTA />
          </SectionReveal>
        </div>
      </main>
      <Footer />
    </>
  );
}
