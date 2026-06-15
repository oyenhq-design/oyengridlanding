import { EnterprisePageTemplate } from "@/components/layout/enterprise-page-template";
import { Header, AnnouncementBar } from "@/components/layout/header";
import { FooterPremium } from "@/components/layout/footer";
import { Metadata } from "next";
import { Users, Zap, Globe, Radio } from "lucide-react";

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Company | OYEN GRID",
  description: "Learn about OYEN GRID — our vision, mission, careers, partnerships, and how to get in touch.",
};

export default function CompanyPage() {
  return (
    <>
      <Header />
      <AnnouncementBar />
      <EnterprisePageTemplate
        title="Company"
        subtitle="About OYEN GRID"
        description="We build operational infrastructure for the world's most impactful programmes. Our mission is to give every institution the coordination power of the most sophisticated operations on earth."
        category="Company"
        focusAreas={[
          { title: "About Us", desc: "The vision and mission driving OYEN GRID — operational infrastructure for institutional impact.", icon: Users },
          { title: "Careers", desc: "Join a team building the future of programme coordination and institutional delivery.", icon: Zap },
          { title: "Partners", desc: "Technology and implementation partnership opportunities with OYEN GRID.", icon: Globe },
          { title: "Contact", desc: "Get in touch with our team for sales, support, or partnership enquiries.", icon: Radio },
        ]}
        metrics={[
          { label: "Founded", value: "2023", trend: "Growing" },
          { label: "Countries", value: "12+", trend: "+3" },
          { label: "Team Members", value: "50+", trend: "Hiring" },
          { label: "Programmes Supported", value: "12,400+", trend: "+24%" },
        ]}
      />
      <FooterPremium hideCTA={false} />
    </>
  );
}
