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
    <section id="plans" className="py-24 first:pt-0 relative">
      {/* Radial gold glow behind cards */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-full max-w-[900px] h-[500px] rounded-full"
        style={{
          background: "radial-gradient(ellipse at center, rgba(212,175,55,0.05) 0%, transparent 65%)",
        }}
      />

      <div className="relative z-10 mb-16">
        <h2 className="text-2xl font-bold text-white mb-2">OYEN GRID Workspace</h2>
        <p className="text-[#A1A1AA]">
          Includes programme structuring, session management, tracking, and analytics in one unified system.
        </p>
      </div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {PLANS.map((plan) => (
          <motion.div
            key={plan.name}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className={`group flex flex-col p-8 rounded-2xl border transition-all duration-300 ${
              plan.popular
                ? "bg-[#111111] border-[#D4AF37] shadow-[0_0_40px_rgba(212,175,55,0.12)] scale-[1.03] z-10"
                : "bg-[#0F0F10] border-[#1f1f1f] hover:border-[#D4AF37]/50 hover:shadow-[0_0_30px_rgba(212,175,55,0.1)]"
            }`}
          >
            {plan.popular && (
              <div className="text-[10px] font-bold uppercase tracking-widest text-[#D4AF37] mb-3">
                Most Popular
              </div>
            )}

            {/* Plan name */}
            <h3 className="text-sm font-bold text-[#A1A1AA] tracking-widest uppercase mb-4">
              {plan.name}
            </h3>

            {/* Price */}
            <div className="text-4xl font-bold text-white mb-2 leading-none">{plan.price}</div>
            <p className="text-[13px] text-[#71717A] leading-relaxed mb-5 min-h-[36px]">
              {plan.tagline}
            </p>

            {/* Divider below price block */}
            <div className="border-t border-neutral-800 mb-5" />

            {/* Features list — flex-1 so CTA stays at bottom */}
            <ul className="flex flex-col gap-5 flex-1">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" strokeWidth={3} />
                  <span className="text-sm text-[#D4D4D8] leading-snug">{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTA button — full width, mt-6 */}
            <Link
              href={plan.cta === "Talk to sales" ? "/contact" : "/get-started"}
              className="block mt-6"
            >
              <button
                className={`w-full py-3.5 rounded-xl font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2 ${
                  plan.popular
                    ? "bg-[#D4AF37] text-[#0B0B0C] shadow-[0_4px_20px_rgba(212,175,55,0.25)] hover:brightness-110 hover:shadow-[0_4px_28px_rgba(212,175,55,0.4)]"
                    : "bg-white/5 text-white border border-white/10 hover:bg-white/[0.08] hover:border-[#D4AF37]/40"
                }`}
              >
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
