"use client"

import { FEATURES } from "@/lib/constants"
import {
  Briefcase,
  Calendar,
  MessageSquare,
  Film,
  BarChart3,
  Award,
} from "lucide-react"

const iconMap = {
  Briefcase,
  Calendar,
  MessageSquare,
  Film,
  BarChart3,
  Award,
}

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 md:py-32 bg-[#0B0B0F] border-b border-[#1F1F1F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Engineered for complex delivery
          </h2>
          <p className="text-lg text-[#A1A1AA] max-w-2xl mx-auto leading-relaxed">
            OYEN Grid unifies every tool you need to deliver, manage, and scale your programmes — with precision, security, and absolute clarity.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES.map((feature, idx) => {
            const Icon = iconMap[feature.icon as keyof typeof iconMap]
            return (
              <div
                key={idx}
                className="group p-8 rounded-3xl border border-[#1F1F1F] bg-[#121212] hover:border-[#C8A95A]/50 hover:shadow-2xl hover:shadow-[#C8A95A]/5 transition-all duration-500 hover:-translate-y-1 cursor-pointer relative overflow-hidden"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-[#C8A95A]/5 to-transparent pointer-events-none" />
                <div className="w-14 h-14 rounded-xl bg-[#1F1F1F] flex items-center justify-center mb-6 group-hover:bg-[#C8A95A]/20 transition-colors duration-500">
                  <Icon className="w-7 h-7 text-[#A1A1AA] group-hover:text-[#C8A95A] transition-colors duration-500" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-[#A1A1AA] text-base leading-relaxed">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
