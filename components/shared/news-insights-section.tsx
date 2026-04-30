import Link from "next/link";
import { ArrowRight } from "lucide-react";

const INSIGHTS = [
  {
    category: "Product Update",
    title: "Introducing advanced cohort analytics",
    description: "Get granular insights into engagement drops and milestone completion rates.",
    date: "Mar 15, 2026",
    href: "/blog/advanced-analytics"
  },
  {
    category: "Best Practices",
    title: "How to structure an enterprise bootcamp",
    description: "A framework for scaling high-intensity training programs without operational collapse.",
    date: "Mar 02, 2026",
    href: "/blog/enterprise-bootcamps"
  },
  {
    category: "Customer Story",
    title: "Scaling from 100 to 1,000 active participants",
    description: "Learn how TechElevate used OYEN Grid to multiply their throughput by 10x.",
    date: "Feb 18, 2026",
    href: "/blog/techelevate-story"
  }
];

export function NewsInsightsSection() {
  return (
    <section className="py-24 md:py-32 bg-[#0B0B0C] border-t border-[rgba(255,255,255,0.03)]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 gap-6">
          <h2 className="text-[36px] sm:text-[48px] font-bold text-white tracking-tight">
            News & Insights
          </h2>
          <Link href="/blog" className="text-[#C8A96A] text-[15px] font-medium hover:text-white transition-colors flex items-center gap-2 group">
            View all articles
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {INSIGHTS.map((item, idx) => (
            <Link 
              key={idx}
              href={item.href}
              className="group block bg-[#121214] border border-[rgba(255,255,255,0.06)] rounded-[16px] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(255,255,255,0.12)] relative overflow-hidden"
            >
              {/* Subtle Glow on hover */}
              <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-[#C8A96A]/0 blur-[50px] rounded-full transition-colors duration-500 group-hover:bg-[#C8A96A]/10 pointer-events-none" />
              
              <div className="relative z-10">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-[12px] font-bold tracking-wider uppercase text-[#C8A96A]">
                    {item.category}
                  </span>
                  <span className="text-[13px] text-[#9CA3AF]">
                    {item.date}
                  </span>
                </div>
                
                <h3 className="text-[20px] font-semibold text-white mb-3 tracking-tight group-hover:text-[#C8A96A] transition-colors duration-300">
                  {item.title}
                </h3>
                
                <p className="text-[15px] text-[#9CA3AF] leading-relaxed mb-6">
                  {item.description}
                </p>

                <div className="flex items-center text-[#9CA3AF] group-hover:text-white transition-colors text-[14px] font-medium gap-2">
                  Read more
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
