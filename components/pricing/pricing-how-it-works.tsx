"use client"

import { Layers, Users, Zap } from "lucide-react"

export function PricingHowItWorks() {
  const points = [
    {
      title: "Programmes",
      desc: "Defines how many structured operations you can run.",
      icon: Layers
    },
    {
      title: "Participants",
      desc: "Defines how many users you can manage per programme.",
      icon: Users
    },
    {
      title: "Features",
      desc: "Defines your level of operational control and visibility.",
      icon: Zap
    }
  ]

  return (
    <section className="py-24 bg-[#0B0B0C]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-16 text-center">How pricing works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {points.map((point) => (
            <div key={point.title} className="text-center group">
              <div className="w-16 h-16 bg-[#111111] border border-[#1F1F1F] rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:border-[#D4AF37]/50 transition-colors">
                <point.icon className="w-8 h-8 text-[#D4AF37]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{point.title}</h3>
              <p className="text-[#A1A1AA] leading-relaxed max-w-[280px] mx-auto">
                {point.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
