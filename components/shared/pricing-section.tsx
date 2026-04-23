"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"

const PLANS = [
  {
    name: "Basic",
    price: "$15",
    period: "/month",
    equivalent: "(₦25,000 equivalent)",
    description: "For small teams running a single programme.",
    features: [
      "1 Programme",
      "Up to 50 Participants",
      "Session chat only",
      "Limited storage",
      "Basic dashboard",
      "Invite-only access",
      "Limited bootcamp support",
      "Private trainer notes only",
    ],
    cta: "Start Basic",
    ctaStyle: "outline",
    popular: false,
  },
  {
    name: "Standard",
    price: "$30",
    period: "/month",
    equivalent: "(₦50,000 equivalent)",
    description: "Everything you need to run structured programmes.",
    features: [
      "Up to 5 Programmes",
      "Up to 200 Participants",
      "Session + Group chat",
      "Attendance tracking",
      "Basic progress tracking",
      "Participant profiles (basic)",
      "Session notes + trainer notes",
      "Limited recordings",
      "Multi-admin (up to 3)",
      "Basic AI assistant (limited)",
    ],
    cta: "Start Standard",
    ctaStyle: "solid",
    popular: true,
  },
  {
    name: "Premium",
    price: "$60",
    period: "/month",
    equivalent: "(₦100,000 equivalent)",
    description: "Advanced tools for scaling operations.",
    features: [
      "Unlimited Programmes",
      "500+ Participants",
      "Full bootcamp system",
      "Advanced participant tracking",
      "Full notes system",
      "Session recording & storage",
      "Advanced analytics",
      "Full communication system",
      "Expanded AI tools",
      "Priority performance",
    ],
    cta: "Start Premium",
    ctaStyle: "outline-gold",
    popular: false,
  },
  {
    name: "Premium+",
    price: "Custom",
    period: "",
    equivalent: "",
    description: "For enterprise and large-scale organisations.",
    features: [
      "Custom deployment",
      "White-label branding",
      "Custom domains",
      "Dedicated support",
      "API integrations",
      "SLA guarantees",
      "Advanced reporting",
      "Onboarding & training support",
    ],
    cta: "Contact Sales",
    ctaStyle: "outline",
    popular: false,
  },
]

export function PricingSection() {
  return (
    <section className="pt-[140px] pb-32 relative bg-[#0A0A0A] overflow-hidden min-h-screen">
      {/* Soft background glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
      >
        <div
          style={{
            width: 800,
            height: 400,
            background:
              "radial-gradient(ellipse at center, rgba(201,169,110,0.035) 0%, transparent 70%)",
            borderRadius: "50%",
          }}
        />
      </div>

      <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-[48px] md:text-[56px] font-bold text-white tracking-tight leading-tight mb-6"
          >
            Simple pricing. Serious scale.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="text-[18px] md:text-[20px] text-[#A1A1AA] leading-relaxed"
          >
            Start small or deploy across your organisation. Pricing scales with your growth.
          </motion.p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8 items-stretch">
          {PLANS.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
              className={`group relative flex flex-col rounded-[20px] transition-all duration-300 ease-out hover:-translate-y-[6px] overflow-hidden
                ${
                  plan.popular
                    ? "border border-[#C9A86A] shadow-[0_0_40px_rgba(201,168,106,0.12)] lg:scale-[1.05] z-10 hover:shadow-[0_0_50px_rgba(201,168,106,0.18)]"
                    : "border border-[#222222] hover:border-[#C9A86A]/40 hover:shadow-[0_0_30px_rgba(201,168,106,0.08)]"
                }`}
              style={{ padding: "2.75rem 2.25rem", background: plan.popular ? "linear-gradient(180deg, #161618 0%, #0C0C0E 100%)" : "linear-gradient(180deg, #111113 0%, #0A0A0C 100%)" }}
            >
              {/* Inner soft glow for standard plan */}
              {plan.popular && (
                <div className="pointer-events-none absolute inset-0 rounded-[20px] shadow-[inset_0_0_40px_rgba(201,168,106,0.05)]" />
              )}

              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-[#C9A86A] text-[#0A0A0A] text-[13px] font-bold uppercase tracking-widest py-1.5 px-5 rounded-full shadow-[0_4px_12px_rgba(201,168,106,0.3)]">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Card Header */}
              <div className="mb-8 relative z-10">
                <h3 className="text-[22px] md:text-[24px] font-bold text-white mb-5 tracking-wide">
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-[40px] md:text-[48px] font-bold text-white leading-none tracking-tight">
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-[16px] text-[#A1A1AA] font-medium ml-1">
                      {plan.period}
                    </span>
                  )}
                </div>
                {plan.equivalent ? (
                  <div className="text-[14px] text-[#71717A]/70 font-medium mb-5 min-h-[20px]">
                    {plan.equivalent}
                  </div>
                ) : (
                  <div className="min-h-[20px] mb-5" />
                )}
                {plan.description && (
                  <p className="text-[15.5px] text-[#D4D4D8] leading-relaxed">
                    {plan.description}
                  </p>
                )}
              </div>

              {/* Features List */}
              <div className="flex-1 relative z-10">
                <ul className="flex flex-col gap-5 mb-10">
                  {plan.features.map((feature, idx) => {
                    const isSecondary = idx > 3 && !plan.popular && plan.name !== "Premium" && plan.name !== "Premium+";
                    return (
                      <li key={idx} className="flex items-start gap-3.5">
                        <div className="mt-[3px] shrink-0 w-[22px] h-[22px] rounded-full bg-[#C9A86A]/15 border border-[#C9A86A]/40 flex items-center justify-center">
                          <Check className="w-3.5 h-3.5 text-[#C9A86A]" strokeWidth={2.5} />
                        </div>
                        <span 
                          className={`text-[16px] leading-relaxed font-medium ${isSecondary ? "text-[#A1A1AA]" : "text-[#E4E4E7]"}`}
                        >
                          {feature}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* CTA Button */}
              <div className="mt-auto pt-4 relative z-10">
                <button
                  className={`w-full py-[18px] px-6 rounded-xl text-[16px] md:text-[17px] font-bold tracking-wide transition-all duration-300
                    ${
                      plan.ctaStyle === "solid"
                        ? "bg-gradient-to-r from-[#D4AF37] to-[#C9A86A] hover:from-[#E5C25A] hover:to-[#D4AF37] text-[#0A0A0A] shadow-[0_4px_20px_rgba(201,168,106,0.3)] hover:shadow-[0_6px_25px_rgba(201,168,106,0.45)]"
                        : plan.ctaStyle === "outline-gold"
                        ? "bg-transparent border border-[#C9A86A]/60 text-[#C9A86A] hover:bg-[#C9A86A]/15 hover:shadow-[0_0_20px_rgba(201,168,106,0.15)]"
                        : "bg-[#1A1A1C] border border-[#333333] text-white hover:border-[#C9A86A]/50 hover:bg-[#222224] hover:shadow-[0_0_15px_rgba(201,168,106,0.08)]"
                    }`}
                >
                  {plan.cta}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
