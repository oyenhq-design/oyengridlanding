import { EnterprisePageTemplate } from "@/components/layout/enterprise-page-template";
import { getPageData } from "@/lib/enterprise-data";
import { Metadata } from "next";

interface PageProps {
  params: {
    category: string;
  };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const data = getPageData(params.category);
  return {
    title: `${data.category} | OYEN GRID`,
    description: `Enterprise-grade ${data.category.toLowerCase()} infrastructure and institutional delivery systems.`,
  };
}

export default function CategoryRoute({ params }: PageProps) {
  const data = getPageData(params.category);
  
  return (
    <EnterprisePageTemplate 
      title={data.category}
      subtitle="Operational Infrastructure"
      description={`Professional ${data.category.toLowerCase()} systems designed for global institutional coordination and structured programme delivery.`}
      focusAreas={data.focusAreas}
      metrics={data.metrics}
      category={data.category}
    />
  );
}
