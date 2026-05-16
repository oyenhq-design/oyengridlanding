import { EnterprisePageTemplate } from "@/components/layout/enterprise-page-template";
import { getPageData } from "@/lib/enterprise-data";
import { Metadata } from "next";

interface PageProps {
  params: {
    category: string;
    slug: string;
  };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const data = getPageData(`${params.category}/${params.slug}`);
  return {
    title: `${data.title} | OYEN GRID`,
    description: data.description,
  };
}

export default function EnterpriseRoute({ params }: PageProps) {
  const data = getPageData(`${params.category}/${params.slug}`);
  
  return (
    <EnterprisePageTemplate 
      title={data.title}
      subtitle={data.subtitle}
      description={data.description}
      focusAreas={data.focusAreas}
      metrics={data.metrics}
      category={data.category}
    />
  );
}
