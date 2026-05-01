"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Check, ArrowRight } from "lucide-react"
import Link from "next/link"

const TABS = [
  { id: "bootcamps", label: "Bootcamps", description: "For intensive cohort-based training and high-speed delivery." },
  { id: "training", label: "Training Teams", description: "For professional organizations managing multiple instructors and tracks." },
  { id: "enterprise", label: "Enterprise", description: "For large-scale infrastructure and global program deployment." },
]

const PLANS = [
  {
    name: "BASIC",
    price: "₦25k",
    tagline: "For small programmes starting out",
    features: [
      "1 Programme",
      "Up to 50 Participants",
      "External session links",
      "Basic attendance tracking",
      "Basic progress tracking"
    ],
    cta: "Start building",
    popular: false,
  },
  {
    name: "STANDARD",
    price: "₦50k",
    tagline: "For growing bootcamps",
    features: [
      "5 Programmes",
      "Up to 200 Participants",
      "Structured modules & sessions",
      "Attendance + progress tracking",
      "Analytics dashboard",
      "Limited storage"
    ],
    cta: "Start building",
    popular: true,
  },
  {
    name: "PREMIUM",
    price: "₦100k",
    tagline: "For high-scale operations",
    features: [
      "Expanded programme capacity",
      "Higher participant limits",
      "Advanced analytics",
      "Priority performance",
      "Increased storage"
    ],
    cta: "Start building",
    popular: false,
  },
  {
    name: "ENTERPRISE",
    price: "Custom",
    tagline: "For large organisations",
    features: [
      "Unlimited scale",
      "Custom workflows",
      "Dedicated support",
      "SLA guarantees"
    ],
    cta: "Talk to sales",
    popular: false,
  },
]

export function PricingCards() {
  const [activeTab, setActiveTab] = useState("bootcamps")

  return (
    <section className="py-24 bg-[#0B0B0C]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        
        {/* Segmentation Tabs */}
        <div className="flex flex-col items-center mb-16">
          <div className="flex gap-4 md:gap-8 border-b border-[#1F1F1F] mb-12 relative w-full justify-center">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`pb-4 text-sm md:text-base font-semibold transition-all duration-300 relative ${
                  activeTab === tab.id ? "text-white" : "text-[#71717A] hover:text-[#A1A1AA]"
                }`}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <motion.div 
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#D4AF37]"
                    transition={{ duration: 0.3 }}
                  />
                )}
              </button>
            ))}
          </div>
          
          <AnimatePresence mode="wait">
            <motion.p
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="text-lg text-[#A1A1AA] text-center max-w-2xl font-medium"
            >
              {TABS.find(t => t.id === activeTab)?.description}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {PLANS.map((plan) => (
            <motion.div
              key={plan.name}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className={`relative flex flex-col p-8 rounded-2xl border transition-all duration-300 ${
                plan.popular 
                  ? "bg-[#111111] border-[#D4AF37] shadow-[0_0_40px_rgba(212,175,55,0.1)] lg:scale-105 z-10" 
                  : "bg-[#0F0F10] border-[#1F1F1F] hover:border-white/10"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#D4AF37] text-[#0B0B0C] text-[10px] font-bold uppercase tracking-widest rounded-full">
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <div className="text-sm font-bold text-[#D4AF37] tracking-widest uppercase mb-2">{plan.name}</div>
                <div className="text-4xl font-bold text-white mb-4">{plan.price}</div>
                <p className="text-sm text-[#A1A1AA] leading-relaxed min-h-[40px]">
                  {plan.tagline}
                </p>
              </div>

              <div className="flex-1 mb-10">
                <ul className="space-y-4">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-[#D4D4D8]">
                      <Check className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" strokeWidth={3} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link href={plan.cta === "Talk to sales" ? "/contact" : "/get-started"}>
                <button className={`w-full py-4 rounded-xl font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2 ${
                  plan.popular 
                    ? "bg-[#D4AF37] text-[#0B0B0C] shadow-lg shadow-[#D4AF37]/20" 
                    : "bg-white/5 text-white border border-white/10 hover:bg-white/10"
                }`}>
                  {plan.cta}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
