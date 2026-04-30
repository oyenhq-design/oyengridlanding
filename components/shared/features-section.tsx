"use client"

import { Briefcase, Calendar, MessageSquare, BarChart3 } from "lucide-react"

export function FeaturesSection() {
  const features = [
    {
      icon: Briefcase,
      title: "Real-time Visibility",
      desc: "Instantly see progress and engagement across all your programmes, cohorts, and sessions in a single view.",
    },
    {
      icon: Calendar,
      title: "Structured Flow",
      desc: "Enforce order, manage access, and track completion for every cohort automatically.",
    },
    {
      icon: BarChart3,
      title: "Deep Analytics",
      desc: "Track outcomes and surface performance insights for every individual session and participant.",
    },
    {
      icon: MessageSquare,
      title: "Contextual Comms",
      desc: "Keep all communication scoped to specific cohorts and sessions, maintaining strict focus.",
    },
  ];

  return (
    <section id="features" className="py-24 md:py-32 bg-[#0b0f14]">
      <div className="max-w-6xl mx-auto px-4 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-[32px] md:text-[40px] font-bold text-white mb-4 tracking-tight leading-[1.2]">
            Everything you need. Nothing you don't.
          </h2>
          <p className="text-[16px] md:text-[18px] text-white/70 max-w-2xl mx-auto leading-relaxed">
            A focused toolset built exclusively for operational clarity and structured delivery.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="group p-8 md:p-12 bg-[#11161d] rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.2)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.3)] transition-shadow duration-300 flex flex-col items-start"
              >
                <div className="w-14 h-14 mb-8 flex items-center justify-center rounded-xl bg-white/5 text-white">
                  <Icon className="w-7 h-7 opacity-80" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="text-[16px] md:text-[18px] text-white/60 leading-relaxed">
                    {feature.desc}
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
