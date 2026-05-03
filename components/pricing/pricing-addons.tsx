"use client"

import { motion } from "framer-motion"
import { Plus, Users, Database, Sparkles } from "lucide-react"

const ADDONS = [
  {
    title: "Extra Participants",
    desc: "Expand participant limits for growing programmes.",
    icon: Users,
  },
  {
    title: "Extra Storage",
    desc: "Increase storage capacity for sessions and data.",
    icon: Database,
  },
  {
    title: "AI Insights",
    desc: "Advanced analytics and automation (Coming soon).",
    icon: Sparkles,
  }
]

export function PricingAddons() {
  return (
    <section id="addons" className="py-24 bg-[#0B0B0C] border-t border-neutral-800 -mx-8 px-8">
      <h2 className="text-2xl font-bold text-white mb-16">Add-ons</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {ADDONS.map((addon) => (
          <div key={addon.title} className="p-8 rounded-2xl bg-[#111111] border border-[#1F1F1F] group hover:border-[#D4AF37]/30 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-[#D4AF37]/10 transition-colors">
              <addon.icon className="w-6 h-6 text-[#D4AF37]" />
            </div>
            <h3 className="text-lg font-bold text-white mb-3">{addon.title}</h3>
            <p className="text-sm text-[#71717A] mb-8 leading-relaxed">
              {addon.desc}
            </p>
            <button className="flex items-center gap-2 text-sm font-bold text-[#D4AF37] hover:gap-3 transition-all">
              Learn more
              <Plus className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}
