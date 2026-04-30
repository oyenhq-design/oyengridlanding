"use client"

import { Briefcase, Calendar, MessageSquare, BarChart3 } from "lucide-react"

export function FeaturesSection() {
  const features = [
    {
      icon: Briefcase,
      title: "Real-time Cohort Visibility",
      desc: "Instantly see progress and engagement across all programmes.",
    },
    {
      icon: Calendar,
      title: "Structured Programme Flow",
      desc: "Enforce order, access, and completion for every cohort.",
    },
    {
      icon: BarChart3,
      title: "Performance Analytics",
      desc: "Track outcomes and surface insights for every session.",
    },
    {
      icon: MessageSquare,
      title: "Centralised Communication",
      desc: "Keep all messaging scoped, contextual, and secure.",
    },
  ];

  return (
    <section id="features" className="py-40 bg-[#0b0b0c]">
      <div className="max-w-5xl mx-auto px-4 sm:px-8">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6 tracking-tight leading-tight">
            Built for operational clarity.
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed font-light">
            OYEN Grid gives your organisation a single, structured layer for managing, tracking, and scaling every programme.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="group p-8 md:p-10 bg-[#101012] rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.5)] transition-all duration-300 hover:bg-[#141416]"
              >
                <div className="w-16 h-16 mb-8 flex items-center justify-center rounded-2xl bg-[#1a1a1c] text-white/80 group-hover:text-white transition-colors">
                  <Icon className="w-8 h-8" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-4 tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="text-lg text-white/50 leading-relaxed font-light">
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
