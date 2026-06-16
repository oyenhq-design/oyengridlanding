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
        description="Purpose-built operational infrastructure for every type of structured program delivery — from training programs and webinars to academic education and corporate training."
        category="Solutions"
        focusAreas={[
          { title: "Bootcamps & Training", desc: "Structured program delivery for training organisations and fellowship programs.", icon: GraduationCap },
          { title: "Webinars & Events", desc: "Host sessions, manage signups, and track who actually showed up.", icon: Radio },
          { title: "Schools & Academies", desc: "Manage classes, students, and reports in one dashboard.", icon: Building2 },
          { title: "Corporate Training", desc: "Run internal upskilling programs and prove ROI to leadership.", icon: Target },
        ]}
        metrics={[
          { label: "Programs Delivered", value: "12,400+", trend: "+24%" },
          { label: "Learners Coordinated", value: "2.1M+", trend: "+18%" },
          { label: "Uptime SLA", value: "99.99%", trend: "Stable" },
          { label: "Global Regions", value: "24", trend: "+4" },
        ]}
      />
      <FooterPremium hideCTA={false} />
    </>
  );
}
