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
    <section id="plans" className="py-28 first:pt-0 relative bg-gradient-to-b from-[#0A0A0A] to-[#111111]">
      {/* Radial gold glow behind cards */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-full max-w-[900px] h-[500px] rounded-full"
        style={{
          background: "radial-gradient(ellipse at center, rgba(212,175,55,0.05) 0%, transparent 65%)",
        }}
      />

      <div className="relative z-10 mb-14">
        <h2 className="text-3xl font-semibold tracking-tight text-white mb-4">OYEN GRID Workspace</h2>
        <p className="text-neutral-400 text-base leading-relaxed font-normal">
          Includes programme structuring, session management, tracking, and analytics in one unified system.
        </p>
      </div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {PLANS.map((plan, idx) => {
          // Make the second plan (STANDARD) dominant
          const isDominant = idx === 1;
          return (
            <motion.div
              key={plan.name}
              whileHover={{ y: -2, scale: 1.02, boxShadow: isDominant ? "0 0 48px 0 rgba(212,175,55,0.18)" : "0 0 32px 0 rgba(24,24,24,0.10)" }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className={`group flex flex-col p-10 rounded-3xl border border-neutral-800 transition-all duration-300 ease-out backdrop-blur-sm gap-6 ${
                isDominant
                  ? "bg-[#161616] shadow-[0_0_64px_rgba(212,175,55,0.22)] scale-[1.05] z-20"
                  : "bg-[#111111] hover:shadow-[0_0_32px_0_rgba(212,175,55,0.08)]"
              }`}
            >
              {plan.popular && (
                <div className="text-[10px] font-bold uppercase tracking-widest text-[#D4AF37] mb-3">
                  Most Popular
                </div>
              )}


              {/* Plan name */}
              <h3 className={`text-3xl font-semibold tracking-tight mb-1 ${isDominant ? "text-[#FFD700]" : "text-white"}`}>
                {plan.name}
              </h3>
              {/* Who this is for */}
              <div className="text-sm text-neutral-400 mb-4 min-h-[18px] leading-relaxed font-normal">{plan.tagline}</div>

              {/* Price */}
              <div className="text-4xl font-bold text-white mb-2 leading-tight">{plan.price}</div>

              {/* CTA button — full width, directly under price */}

              <Link
                href={plan.cta === "Talk to sales" ? "/contact" : "/get-started"}
                className="block mb-2"
              >
                <button
                  className={`w-full py-3.5 rounded-2xl font-semibold text-base transition-all duration-300 ease-out flex items-center justify-center gap-2 group/button relative overflow-hidden ${
                    isDominant
                      ? "bg-[#FFD700] text-[#0B0B0C] shadow-[0_0_40px_0_rgba(212,175,55,0.18)] scale-[1.07] hover:brightness-110"
                      : "bg-white/5 text-white border border-white/10 hover:bg-white/[0.08] hover:border-neutral-700"
                  }`}
                  style={{ boxShadow: isDominant ? undefined : undefined }}
                >
                  {plan.cta}
                  <ArrowRight className="w-5 h-5 opacity-80" />
                  {/* Soft glow under primary button */}
                  {isDominant && (
                    <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-4/5 h-2 bg-gradient-to-t from-[#FFD700]/40 to-transparent rounded-b-2xl blur-sm opacity-80 pointer-events-none" />
                  )}
                </button>
              </Link>
              {/* Micro-copy under CTA */}
              <div className={`text-xs text-neutral-400 text-center mb-4 font-normal leading-relaxed ${isDominant ? "font-semibold" : ""}`}>No setup required</div>

              {/* Divider between CTA and features */}
              <div className="border-t border-neutral-800 my-5" />

              {/* Includes label */}
              <div className="text-xs font-semibold uppercase text-neutral-500 mb-3 tracking-widest">Includes:</div>

              {/* Features list */}
              <ul className="flex flex-col gap-6 flex-1">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 opacity-70 ${isDominant ? "text-[#FFD700]" : "text-neutral-500"} shrink-0 mt-0.5 transition-all duration-300 ease-out`} strokeWidth={2.2} />
                    <span className="text-base text-[#D4D4D8] leading-relaxed font-normal">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </div>
      {/* Subtle divider below cards */}
      <div className="w-full h-px bg-neutral-800 opacity-70 my-16" />
    </section>
  )
}
