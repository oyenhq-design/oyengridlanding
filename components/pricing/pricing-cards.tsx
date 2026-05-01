"use client"

import { motion } from "framer-motion"
import { Check, ArrowRight } from "lucide-react"
import Link from "next/link"

const PLANS = [
  {
    name: "BASIC",
    price: "₦25,000",
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
    price: "₦50,000",
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
    price: "₦100,000",
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
  return (
    <section id="plans" className="py-16">
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-2">OYEN GRID Workspace</h2>
        <p className="text-[#A1A1AA]">
          Includes programme structuring, session management, tracking, and analytics in one unified system.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {PLANS.map((plan) => (
          <motion.div
            key={plan.name}
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className={`flex flex-col p-8 rounded-2xl border transition-all duration-300 ${
              plan.popular 
                ? "bg-[#111111] border-[#D4AF37] shadow-[0_0_40px_rgba(212,175,55,0.1)] scale-105 z-10" 
                : "bg-[#0F0F10] border-[#1F1F1F] hover:border-white/10"
            }`}
          >
            {plan.popular && (
              <div className="text-[10px] font-bold uppercase tracking-widest text-[#D4AF37] mb-2">
                Most Popular
              </div>
            )}

            <div className="mb-6">
              <h3 className="text-sm font-bold text-[#A1A1AA] tracking-widest uppercase mb-4">{plan.name}</h3>
              <div className="text-3xl font-bold text-white mb-2">{plan.price}</div>
              <p className="text-[13px] text-[#71717A] leading-relaxed min-h-[40px]">
                {plan.tagline}
              </p>
            </div>

            <div className="border-t border-[#1F1F1F] pt-6 flex-1 mb-8">
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
    </section>
  )
}
