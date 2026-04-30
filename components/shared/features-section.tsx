"use client"


import { Briefcase, Calendar, MessageSquare, BarChart3, Award } from "lucide-react"

  // Minimal, premium features (4 only)
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
    <section id="features" className="py-32 bg-[#0b0b0c]">
      <div className="max-w-5xl mx-auto px-4 sm:px-8">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
            Built for operational clarity
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
            OYEN Grid gives your organisation a single, structured layer for managing, tracking, and scaling every programme.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="flex items-start gap-6 p-0 bg-transparent rounded-2xl shadow-none"
              >
                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-[#18181a]">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-2 tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="text-base text-white/60 leading-relaxed">
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
