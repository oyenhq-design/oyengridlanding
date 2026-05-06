"use client"

import { motion } from "framer-motion"
import { Plus, Users, Database, Sparkles, ArrowRight, CheckCircle } from "lucide-react"

const ADDONS = [
  {
    title: "Extra Participants",
    desc: "Grow your cohorts without limits. Add more participants as your programme scales.",
    icon: Users,
    price: "₦5,000/mo",
    details: "Add 100 more participants to your plan."
  },
  {
    title: "Extra Storage",
    desc: "Never worry about running out of space. Expand your storage for resources and recordings.",
    icon: Database,
    price: "₦2,000/mo",
    details: "Add 100GB more storage to your workspace."
  },
  {
    title: "AI Insights",
    desc: "Unlock actionable analytics and recommendations to improve outcomes (coming soon).",
    icon: Sparkles,
    price: null,
    details: "Coming soon: AI-powered insights for engagement and outcomes."
  }
]

import { useState } from "react"

export function PricingAddons() {
  const [openIdx, setOpenIdx] = useState<number | null>(null)
  return (
    <section id="addons" className="py-28 bg-[#0B0B0C] border-t border-neutral-800 -mx-8 px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-12 tracking-tight text-center">Add-ons</h2>
        <div className="flex flex-col gap-12 items-center">
          {ADDONS.map((addon, idx) => (
            <motion.div
              key={addon.title}
              initial={{ boxShadow: "0 0 0 rgba(212,175,55,0)" }}
              animate={{ boxShadow: openIdx === idx ? "0 0 40px 0 rgba(212,175,55,0.18)" : "0 0 0 rgba(212,175,55,0)" }}
              transition={{ duration: 0.3 }}
              className={`w-full max-w-2xl min-h-[180px] p-12 rounded-2xl bg-[#111111] border border-[#1F1F1F] group hover:border-[#D4AF37]/30 hover:shadow-[0_0_40px_0_rgba(212,175,55,0.13)] transition-all duration-300 cursor-pointer relative overflow-hidden flex flex-col justify-between`}
              onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
            >
              <div className="flex items-center gap-6 mb-6">
                <div className="w-16 h-16 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-[#D4AF37]/10 transition-colors">
                  <addon.icon className="w-8 h-8 text-[#FFD700]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-1">{addon.title}</h3>
                  <p className="text-base text-neutral-400 leading-relaxed mb-1">{addon.desc}</p>
                </div>
                {addon.price && (
                  <div className="ml-4 px-5 py-2 rounded-lg bg-[#18120A] text-[#FFD700] text-lg font-bold min-w-[110px] text-right">
                    {addon.price}
                  </div>
                )}
                <motion.span
                  animate={{ rotate: openIdx === idx ? 90 : 0 }}
                  className="ml-4 text-[#FFD700] text-2xl font-bold transition-transform"
                >
                  <ArrowRight className="w-7 h-7" />
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
                    <div className="text-base text-[#FFD700] font-semibold mb-2">{addon.details}</div>
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
