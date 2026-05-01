"use client"

import { motion } from "framer-motion"
import { Check, ArrowRight } from "lucide-react"
import Link from "next/link"

const TIERS = [
  {
    name: "Starter",
    price: "$19",
    description: "Ideal for small teams and pilots.",
    features: ["1 Active Program", "Up to 50 Participants", "Basic Analytics", "Community Support"],
    cta: "Start for free",
    href: "/get-started",
    popular: false,
  },
  {
    name: "Growth",
    price: "$49",
    description: "Scale your training operations with ease.",
    features: ["5 Active Programs", "Up to 250 Participants", "Advanced Tracking", "Priority Support"],
    cta: "Go Growth",
    href: "/get-started",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Global scale with enterprise control.",
    features: ["Unlimited Programs", "White-label Branding", "SSO & Security", "Dedicated Success Manager"],
    cta: "Contact Sales",
    href: "/contact",
    popular: false,
  },
]

export function PricingEntrySection() {
  return (
    <section className="py-24 md:py-32 bg-[#0B0B0C] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              Simple pricing for <span className="text-[#C8A95A]">structured operations</span>
            </h2>
            <p className="text-lg text-[#A1A1AA] max-w-2xl mx-auto leading-relaxed">
              Predictable costs, unlimited potential. Choose the plan that matches your programme's scale.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TIERS.map((tier, idx) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              className={`relative flex flex-col p-8 rounded-2xl border transition-all duration-300 ${
                tier.popular 
                  ? "bg-[#111111] border-[#C8A95A] shadow-[0_0_40px_rgba(201,168,106,0.1)]" 
                  : "bg-[#0F0F10] border-white/5 hover:border-white/10"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#C8A95A] text-[#0B0B0C] text-[10px] font-bold uppercase tracking-widest rounded-full">
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-xl font-bold text-white mb-2">{tier.name}</h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-4xl font-bold text-white">{tier.price}</span>
                  {tier.price !== "Custom" && <span className="text-[#A1A1AA] text-sm">/mo</span>}
                </div>
                <p className="text-sm text-[#A1A1AA] leading-relaxed">
                  {tier.description}
                </p>
              </div>

              <ul className="space-y-4 mb-10 flex-1">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-[#D4D4D8]">
                    <Check className="w-4 h-4 text-[#C8A95A] shrink-0 mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link href={tier.href}>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-3 rounded-xl font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2 ${
                    tier.popular
                      ? "bg-[#C8A95A] text-[#0B0B0C] shadow-lg shadow-[#C8A95A]/20"
                      : "bg-white/5 text-white border border-white/10 hover:bg-white/10"
                  }`}
                >
                  {tier.cta}
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link href="/pricing" className="text-[#A1A1AA] hover:text-[#C8A95A] text-sm font-medium transition-colors flex items-center justify-center gap-2">
            See all features and enterprise details
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
