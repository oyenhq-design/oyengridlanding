import { EnterprisePageTemplate } from "@/components/layout/enterprise-page-template";
import { Header, AnnouncementBar } from "@/components/layout/header";
import { FooterPremium } from "@/components/layout/footer";
import { Metadata } from "next";
import { BookOpen, Activity, Globe, HelpCircle } from "lucide-react";

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Resources | OYEN GRID",
  description: "Platform guides, case studies, blog insights, and help center articles for OYEN GRID users.",
};

export default function ResourcesPage() {
  return (
    <>
      <Header />
      <AnnouncementBar />
      <EnterprisePageTemplate
        title="Resources"
        subtitle="Learning & Company Resources"
        description="Everything you need to get started, go deeper, and get help — from implementation guides and case studies to blog insights and support articles."
        category="Resources"
        focusAreas={[
          { title: "Documentation", desc: "Platform guides and implementation resources for every feature and workflow.", icon: BookOpen },
          { title: "Case Studies", desc: "Real customer success stories and measurable programme outcomes.", icon: Activity },
          { title: "Blog", desc: "Insights, product updates and operational intelligence from the OYEN GRID team.", icon: Globe },
          { title: "Help Center", desc: "Support articles, FAQs and troubleshooting guides.", icon: HelpCircle },
        ]}
        metrics={[
          { label: "Documentation Articles", value: "200+", trend: "Growing" },
          { label: "Case Studies", value: "40+", trend: "+8" },
          { label: "Blog Posts", value: "120+", trend: "Weekly" },
          { label: "Support Response", value: "<2hrs", trend: "Improving" },
        ]}
      />
      <FooterPremium hideCTA={false} />
    </>
  );
}
