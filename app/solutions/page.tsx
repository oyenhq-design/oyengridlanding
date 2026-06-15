import { EnterprisePageTemplate } from "@/components/layout/enterprise-page-template";
import { Header, AnnouncementBar } from "@/components/layout/header";
import { FooterPremium } from "@/components/layout/footer";
import { Metadata } from "next";
import { GraduationCap, Radio, Building2, Target } from "lucide-react";

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Solutions | OYEN GRID",
  description: "Discover how OYEN GRID serves bootcamps, training organisations, webinars, educational institutions, and enterprise operations.",
};

export default function SolutionsPage() {
  return (
    <>
      <Header />
      <AnnouncementBar />
      <EnterprisePageTemplate
        title="Solutions"
        subtitle="Who OYEN GRID Serves"
        description="Purpose-built operational infrastructure for every type of structured programme delivery — from bootcamps and webinars to institutional education and enterprise operations."
        category="Solutions"
        focusAreas={[
          { title: "Bootcamps & Training", desc: "Structured programme delivery for bootcamps, training organisations and fellowship programmes.", icon: GraduationCap },
          { title: "Webinars & Events", desc: "Live coordination infrastructure for webinars, workshops and virtual events.", icon: Radio },
          { title: "Education & Institutions", desc: "Academic systems and institutional learning infrastructure.", icon: Building2 },
          { title: "Enterprise Operations", desc: "Operational coordination, governance and institutional delivery systems.", icon: Target },
        ]}
        metrics={[
          { label: "Programmes Delivered", value: "12,400+", trend: "+24%" },
          { label: "Participants Coordinated", value: "2.1M+", trend: "+18%" },
          { label: "Uptime SLA", value: "99.99%", trend: "Stable" },
          { label: "Global Regions", value: "24", trend: "+4" },
        ]}
      />
      <FooterPremium hideCTA={false} />
    </>
  );
}
