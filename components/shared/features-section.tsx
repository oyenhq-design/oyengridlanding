import { Eye, LayoutList, LineChart, MessageSquare } from "lucide-react";

const FEATURES = [
  {
    title: "Real-time Cohort Visibility",
    description: "Monitor progress, engagement, and blockages instantly.",
    icon: Eye,
  },
  {
    title: "Structured Programme Flow",
    description: "Enforce sequential modules and milestone tracking.",
    icon: LayoutList,
  },
  {
    title: "Performance Analytics",
    description: "Exportable data on every participant's journey.",
    icon: LineChart,
  },
  {
    title: "Centralised Communication",
    description: "Keep all cohort messaging and resources in one system.",
    icon: MessageSquare,
  },
];

export function FeaturesSection() {
  return (
    <section className="py-24 bg-[#0E0E10] border-t border-[#1A1A1D]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-[32px] sm:text-[36px] font-bold text-white tracking-tight mb-4">
            Built for operational clarity
          </h2>
          <p className="text-[#A1A1AA] max-w-2xl text-lg">
            A single source of truth for your entire programme delivery lifecycle.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
          {FEATURES.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div key={idx} className="flex gap-5 items-start">
                <div className="shrink-0 p-3 bg-[#1A1A1D] rounded-lg">
                  <Icon className="w-6 h-6 text-[#C9A86A]" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2 tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="text-[#A1A1AA] leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
