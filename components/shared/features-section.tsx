import { Users, LayoutList, LineChart, MessageSquare } from "lucide-react";

const CARDS = [
  {
    title: "Real-time cohort visibility",
    description: "Monitor progress, engagement, and blockages instantly across all active cohorts.",
    icon: Users,
  },
  {
    title: "Structured programme flow",
    description: "Enforce sequential modules, milestone tracking, and required submissions.",
    icon: LayoutList,
  },
  {
    title: "Performance analytics",
    description: "Exportable, granular data on every participant's learning journey and outcomes.",
    icon: LineChart,
  },
  {
    title: "Centralised communication",
    description: "Keep all cohort messaging, announcements, and resources in one secure system.",
    icon: MessageSquare,
  },
];

export function FeaturesSection() {
  return (
    <section className="py-24 md:py-32 bg-[#0B0B0C]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-[36px] sm:text-[48px] font-bold text-white tracking-tight">
            Built for operational clarity
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {CARDS.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div 
                key={idx} 
                className="bg-[#121214] border border-[rgba(255,255,255,0.06)] rounded-[16px] p-8 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[rgba(255,255,255,0.12)]"
              >
                <div className="w-12 h-12 bg-[#1A1A1D] rounded-[10px] flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6 text-[#C8A96A]" strokeWidth={1.5} />
                </div>
                <h3 className="text-[20px] font-semibold text-white mb-3 tracking-tight">
                  {card.title}
                </h3>
                <p className="text-[16px] text-[#9CA3AF] leading-relaxed">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
