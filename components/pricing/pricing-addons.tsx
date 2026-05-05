"use client"

import { motion } from "framer-motion"
import { Plus, Users, Database, Sparkles } from "lucide-react"

const ADDONS = [
  {
    title: "Extra Participants",
    desc: "Unlock more seats for your growing cohorts and never turn away a participant.",
    icon: Users,
    price: "₦5,000/mo",
    details: "Add 100 more participants to your plan."
  },
  {
    title: "Extra Storage",
    desc: "Keep all your session recordings, resources, and data safe as you scale.",
    icon: Database,
    price: "₦2,000/mo",
    details: "Add 100GB more storage to your workspace."
  },
  {
    title: "AI Insights",
    desc: "Get actionable analytics and automated recommendations for your programmes.",
    icon: Sparkles,
    price: null,
    details: "Coming soon: AI-powered insights for engagement and outcomes."
  }
]

import { useState } from "react"

export function PricingAddons() {
  const [openIdx, setOpenIdx] = useState<number | null>(null)
  return (
    <section id="addons" className="py-24 bg-[#0B0B0C] border-t border-neutral-800 -mx-8 px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-white mb-10 tracking-wider uppercase text-center">Add-ons</h2>
        <div className="flex flex-col gap-8 items-center">
          {ADDONS.map((addon, idx) => (
            <motion.div
              key={addon.title}
              initial={{ boxShadow: "0 0 0 rgba(212,175,55,0)" }}
              animate={{ boxShadow: openIdx === idx ? "0 0 32px 0 rgba(212,175,55,0.18)" : "0 0 0 rgba(212,175,55,0)" }}
              transition={{ duration: 0.3 }}
              className={`w-full max-w-2xl p-10 rounded-2xl bg-[#111111] border border-[#1F1F1F] group hover:border-[#D4AF37]/30 transition-all duration-300 cursor-pointer relative overflow-hidden`}
              onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
            >
              <div className="flex items-center gap-5 mb-4">
                <div className="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-[#D4AF37]/10 transition-colors">
                  <addon.icon className="w-7 h-7 text-[#D4AF37]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-1">{addon.title}</h3>
                  <p className="text-base text-[#A1A1AA] leading-relaxed mb-1">{addon.desc}</p>
                </div>
                {addon.price && (
                  <div className="ml-4 px-4 py-2 rounded-lg bg-[#18120A] text-[#D4AF37] text-sm font-bold min-w-[90px] text-center">
                    {addon.price}
                  </div>
                )}
                <motion.span
                  animate={{ rotate: openIdx === idx ? 45 : 0 }}
                  className="ml-4 text-[#D4AF37] text-xl font-bold transition-transform"
                >
                  <Plus className="w-6 h-6" />
                </motion.span>
              </div>
              <motion.div
                initial={false}
                animate={{ height: openIdx === idx ? "auto" : 0, opacity: openIdx === idx ? 1 : 0 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                {openIdx === idx && (
                  <div className="pt-2 pb-2 px-2">
                    <div className="text-sm text-[#D4AF37] font-semibold mb-2">{addon.details}</div>
                  </div>
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
