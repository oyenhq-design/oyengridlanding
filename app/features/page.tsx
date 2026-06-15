import { EnterprisePageTemplate } from "@/components/layout/enterprise-page-template";
import { Header, AnnouncementBar } from "@/components/layout/header";
import { FooterPremium } from "@/components/layout/footer";
import { Metadata } from "next";
import { Boxes, Users, Zap, LineChart } from "lucide-react";

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Features | OYEN GRID",
  description: "Core platform capabilities — programme management, participant management, OYEN Live, and Analytics & AI.",
};

export default function FeaturesPage() {
  return (
    <>
      <Header />
      <AnnouncementBar />
      <EnterprisePageTemplate
        title="Features"
        subtitle="Core Platform Capabilities"
        description="Everything you need to create, manage, and scale structured programmes — from participant registration and live session delivery to operational analytics and AI intelligence."
        category="Features"
        focusAreas={[
          { title: "Programme Management", desc: "Create, manage and scale structured programmes with total operational visibility.", icon: Boxes },
          { title: "Participant Management", desc: "Registration, tracking and engagement intelligence across every cohort.", icon: Users },
          { title: "OYEN Live", desc: "Live sessions, attendance tracking and delivery infrastructure for real-time programmes.", icon: Zap },
          { title: "Analytics & AI", desc: "Operational insights, reporting and AI intelligence across all programme data.", icon: LineChart },
        ]}
        metrics={[
          { label: "Active Programmes", value: "840+", trend: "+14%" },
          { label: "Completion Rate", value: "92%", trend: "+5%" },
          { label: "AI Automation", value: "82%", trend: "+12%" },
          { label: "Session Latency", value: "42ms", trend: "-12%" },
        ]}
      />
      <FooterPremium hideCTA={false} />
    </>
  );
}
