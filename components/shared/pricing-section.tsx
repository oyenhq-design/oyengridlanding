"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Check, ArrowRight, Building2, Cpu, Globe, ShieldCheck, Zap } from "lucide-react"
import Link from "next/link"

// ─── Plan data ────────────────────────────────────────────────────────────────

const PLANS = [
  {
    id: "basic",
    name: "Basic",
    tier: "basic",
    monthlyUSD: 19,
    yearlyUSD: 15,
    ngnMonthly: "₦25,000",
    ngnYearly: "₦20,000",
    description: "For starting structured programmes",
    subtext: "Best for small teams getting started",
    features: [
      { text: "1 Programme", bold: true, locked: false },
      { text: "Up to 50 Participants", bold: true, locked: false },
      { text: "Session chat only", bold: false, locked: false },
      { text: "Limited storage", bold: false, locked: false },
      { text: "Basic dashboard", bold: false, locked: false },
      { text: "Invite-only access", bold: false, locked: false },
    ],
    cta: "Start Basic",
    ctaHref: "/get-started",
    popular: false,
    enterprise: false,
  },
  {
    id: "standard",
    name: "Standard",
    tier: "standard",
    monthlyUSD: 37,
    yearlyUSD: 29,
    ngnMonthly: "₦50,000",
    ngnYearly: "₦40,000",
    description: "For running structured programmes at scale",
    subtext: "Most organisations start here",
    features: [
      { text: "Up to 5 Programmes", bold: true, locked: false },
      { text: "Up to 200 Participants", bold: true, locked: false },
      { text: "Session + Group chat", bold: true, locked: false },
      { text: "Attendance tracking", bold: false, locked: false },
      { text: "Basic progress tracking", bold: false, locked: false },
      { text: "Participant profiles", bold: false, locked: false },
      { text: "Session notes + trainer notes", bold: false, locked: false },
    ],
    cta: "Start Standard",
    ctaHref: "/get-started",
    popular: true,
    enterprise: false,
  },
  {
    id: "premium",
    name: "Premium",
    tier: "premium",
    monthlyUSD: 74,
    yearlyUSD: 59,
    ngnMonthly: "₦100,000",
    ngnYearly: "₦80,000",
    description: "For scaling training operations",
    subtext: "Built for serious programme delivery",
    features: [
      { text: "Unlimited Programmes", bold: true, locked: false },
      { text: "500+ Participants", bold: true, locked: false },
      { text: "Full bootcamp system", bold: true, locked: false },
      { text: "Advanced participant tracking", bold: false, locked: false },
      { text: "Full notes system", bold: false, locked: false },
      { text: "Session recording & storage", bold: false, locked: false },
      { text: "Advanced analytics", bold: false, locked: false },
    ],
    cta: "Start Premium",
    ctaHref: "/get-started",
    popular: false,
    enterprise: false,
  },
  {
    id: "premium-plus",
    name: "Premium+",
    tier: "enterprise",
    monthlyUSD: null,
    yearlyUSD: null,
    ngnMonthly: null,
    ngnYearly: null,
    description: "Enterprise-grade deployment",
    subtext: "Tailored for large organisations",
    features: [
      { text: "Custom deployment", bold: true, locked: false },
      { text: "White-label branding", bold: false, locked: false },
      { text: "Custom domains", bold: false, locked: false },
      { text: "Dedicated support", bold: false, locked: false },
      { text: "API integrations", bold: false, locked: false },
      { text: "SLA guarantees", bold: false, locked: false },
    ],
    cta: "Contact Sales",
    ctaHref: "/contact",
    popular: false,
    enterprise: true,
  },
] as const

// ─── Card styles by tier ──────────────────────────────────────────────────────

const cardStyles = {
  basic: {
    wrapper:
      "relative flex flex-col rounded-[16px] transition-all duration-250 ease-out cursor-default order-3 lg:order-1",
    bg: "bg-[#111111]",
    border: "border border-[rgba(255,255,255,0.06)] hover:border-[rgba(255,255,255,0.15)]",
    hoverGlow: "hover:shadow-[0_8px_30px_rgba(0,0,0,0.4)]",
    scale: "",
    defaultY: "translate-y-0",
    zIndex: "z-0",
  },
  standard: {
    wrapper:
      "relative flex flex-col rounded-[16px] transition-all duration-250 ease-out cursor-default order-1 lg:order-2",
    bg: "bg-[#141310]",
    border: "border border-[#C9A86A]",
    hoverGlow: "shadow-[0_0_40px_rgba(201,168,106,0.12)] hover:shadow-[0_0_60px_rgba(201,168,106,0.2)]",
    scale: "lg:scale-[1.06]",
    defaultY: "lg:-translate-y-[8px]",
    zIndex: "z-10",
  },
  premium: {
    wrapper:
      "relative flex flex-col rounded-[16px] transition-all duration-250 ease-out cursor-default order-2 lg:order-3",
    bg: "bg-[#111111]",
    border: "border border-[rgba(201,168,106,0.2)] hover:border-[rgba(201,168,106,0.4)]",
    hoverGlow: "hover:shadow-[0_8px_30px_rgba(201,168,106,0.08)]",
    scale: "",
    defaultY: "translate-y-0",
    zIndex: "z-0",
  },
  enterprise: {
    wrapper:
      "relative flex flex-col rounded-[16px] transition-all duration-250 ease-out cursor-default order-4 lg:order-4",
    bg: "bg-[#0A0A0A]",
    border: "border border-dashed border-[rgba(201,168,106,0.25)] hover:border-[rgba(201,168,106,0.4)]",
    hoverGlow: "hover:shadow-[0_8px_30px_rgba(0,0,0,0.5)]",
    scale: "",
    defaultY: "translate-y-0",
    zIndex: "z-0",
  },
}

// ─── Component ────────────────────────────────────────────────────────────────

export function PricingSection() {
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly")

  return (
    <section className="relative bg-[#0A0A0A] overflow-hidden pt-[100px] pb-[80px] min-h-screen flex flex-col justify-center">
      {/* ── Background Glow ── */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
      >
        <div 
          className="w-full max-w-[1000px] h-[600px] rounded-full"
          style={{
            background: "radial-gradient(circle at center, rgba(201,168,106,0.08) 0%, transparent 60%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto w-full px-5 sm:px-8 lg:px-8">

        {/* ════════════════════════════════════════════
            1. HERO HEADER
        ════════════════════════════════════════════ */}
        <div className="text-center pb-[50px] max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1
              className="font-bold text-white tracking-tight leading-[1.1] mb-6"
              style={{ fontSize: "clamp(38px, 5vw, 56px)" }}
            >
              Simple pricing. Serious scale.
            </h1>

            <p
              className="text-[#A1A1AA] leading-relaxed max-w-lg mx-auto"
              style={{ fontSize: "clamp(16px, 2vw, 18px)" }}
            >
              Start small or deploy across your organisation. Pricing that grows with you.
            </p>
          </motion.div>
        </div>

        {/* ════════════════════════════════════════════
            2. BILLING TOGGLE
        ════════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex items-center justify-center gap-4 mb-[60px]"
        >
          <span
            className="text-[16px] font-medium transition-colors duration-200"
            style={{ color: billing === "monthly" ? "#E4E4E7" : "#71717A" }}
          >
            Monthly
          </span>

          <button
            id="billing-toggle"
            role="switch"
            aria-checked={billing === "yearly"}
            onClick={() => setBilling(b => b === "monthly" ? "yearly" : "monthly")}
            className="relative w-[56px] h-[30px] rounded-full transition-colors duration-300 outline-none focus-visible:ring-2 focus-visible:ring-[#C9A86A]/50"
            style={{
              background:
                billing === "yearly"
                  ? "linear-gradient(135deg, #D4AF37, #C9A86A)"
                  : "#1C1C1E",
              border: billing === "yearly" ? "none" : "1px solid #333",
            }}
          >
            <motion.span
              layout
              transition={{ type: "spring", stiffness: 500, damping: 35 }}
              className="absolute top-[3px] w-[24px] h-[24px] rounded-full bg-white shadow-md"
              style={{ left: billing === "yearly" ? "29px" : "3px" }}
            />
          </button>

          <span
            className="text-[16px] font-medium flex items-center gap-2.5 transition-colors duration-200"
            style={{ color: billing === "yearly" ? "#E4E4E7" : "#71717A" }}
          >
            Yearly
            <AnimatePresence>
              {billing === "yearly" && (
                <motion.span
                  key="save-badge"
                  initial={{ opacity: 0, scale: 0.8, x: -6 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.8, x: -6 }}
                  transition={{ duration: 0.22 }}
                  className="text-[12px] font-bold tracking-wide px-2.5 py-1 rounded-full whitespace-nowrap"
                  style={{
                    background: "linear-gradient(135deg, #D4AF37, #C9A86A)",
                    color: "#0A0A0A",
                  }}
                >
                  Save 20%
                </motion.span>
              )}
            </AnimatePresence>
          </span>
        </motion.div>

        {/* ════════════════════════════════════════════
            3. PRICING CARDS
        ════════════════════════════════════════════ */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-[24px] xl:gap-[32px] items-start pb-10">
          {PLANS.map((plan, i) => {
            const styles = cardStyles[plan.tier as keyof typeof cardStyles]
            const isYearly = billing === "yearly"

            const usdPrice =
              plan.monthlyUSD !== null
                ? isYearly
                  ? plan.yearlyUSD
                  : plan.monthlyUSD
                : null

            const ngnEquiv =
              plan.ngnMonthly !== null
                ? isYearly
                  ? plan.ngnYearly
                  : plan.ngnMonthly
                : null

            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.55,
                  delay: i * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ y: -6 }}
                className={[
                  styles.wrapper,
                  styles.bg,
                  styles.border,
                  styles.hoverGlow,
                  styles.scale,
                  styles.defaultY,
                  styles.zIndex,
                  "px-[24px] py-[28px] lg:py-[32px] hover:-translate-y-[6px]"
                ].join(" ")}
              >
                {/* Popular Plan badge — Standard only */}
                {plan.popular && (
                  <div className="absolute -top-[14px] left-1/2 -translate-x-1/2 z-30 pointer-events-none group-hover:scale-[1.02] group-hover:brightness-110 transition-all duration-300">
                    <span
                      className="text-[11px] md:text-[12px] font-medium tracking-[0.04em] px-[12px] py-[6px] rounded-full backdrop-blur-sm inline-block whitespace-nowrap"
                      style={{
                        background: "rgba(201, 168, 106, 0.10)",
                        color: "#C9A86A",
                        border: "1px solid rgba(201, 168, 106, 0.30)",
                      }}
                    >
                      Popular
                    </span>
                  </div>
                )}

                {/* Subtle inner top gold gradient for Standard */}
                {plan.popular && (
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 rounded-[16px]"
                    style={{
                      background: "linear-gradient(180deg, rgba(201,168,106,0.06) 0%, transparent 40%)",
                    }}
                  />
                )}

                {/* ── Card header ── */}
                <div className="relative z-10 flex-col flex h-full">
                  
                  {/* Plan name */}
                  <div className="mb-[12px]">
                    <h2 className="font-semibold text-white tracking-wide text-[20px] lg:text-[22px]">
                      {plan.name}
                    </h2>
                  </div>
                  
                  {/* Price display */}
                  {usdPrice !== null ? (
                    <div>
                      <div className="flex items-end gap-1.5 leading-[1]">
                        <span className="font-bold text-white text-[44px] lg:text-[52px] tracking-tight">
                          ${usdPrice}
                        </span>
                        <span className="text-[14px] lg:text-[16px] text-[#A1A1AA] font-medium mb-[6px]">
                          /month
                        </span>
                      </div>
                      
                      <div className="mt-[6px] h-[20px]">
                        <AnimatePresence mode="wait">
                          <motion.p
                            key={billing + plan.id}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.15 }}
                            className="text-[13px] lg:text-[14px] text-[#888888] font-medium"
                          >
                            {ngnEquiv}
                          </motion.p>
                        </AnimatePresence>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <span className="font-bold text-white text-[40px] lg:text-[46px] tracking-tight leading-[1]">
                        Custom
                      </span>
                      <div className="mt-[6px] h-[20px]" />
                    </div>
                  )}

                  {/* Description */}
                  <p className="text-[14px] lg:text-[16px] text-[#A1A1AA] mt-[14px] leading-relaxed max-w-[220px]">
                    {plan.description}
                  </p>

                  <div className="mt-[20px] flex-1">
                    <ul className="flex flex-col gap-[10px] lg:gap-[12px]">
                      {plan.features.map((feat, fi) => (
                        <li key={fi} className="flex items-start gap-[10px]">
                          <div className="mt-[4px] shrink-0 flex items-center justify-center">
                            <Check className="w-[14px] h-[14px] text-[#C9A86A] opacity-80" strokeWidth={3} />
                          </div>
                          <span
                            className="text-[15px] lg:text-[16px] leading-[1.6] transition-colors"
                            style={{
                              color: feat.bold ? "#FFFFFF" : plan.tier === "basic" ? "#999999" : "#D4D4D8",
                              opacity: feat.locked ? 0.45 : 1,
                            }}
                          >
                            {feat.text}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* ── Subtext & CTA Button ── */}
                  <div className="mt-[24px]">
                    <Link href={plan.ctaHref} className="block w-full">
                      <motion.button
                        whileHover={{ scale: 1.01, y: -1, filter: "brightness(1.05)" }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ duration: 0.15 }}
                        className="w-full h-[44px] lg:h-[48px] flex items-center justify-center gap-2 rounded-[8px] font-semibold transition-all duration-300"
                        style={{
                          fontSize: "15px",
                          ...(plan.popular
                            ? {
                                background: "#C9A86A",
                                color: "#0A0A0A",
                                boxShadow: "0 4px 15px rgba(201,168,106,0.25)",
                              }
                            : plan.enterprise
                            ? {
                                background: "rgba(255,255,255,0.02)",
                                color: "#FFFFFF",
                                border: "1px solid rgba(255,255,255,0.1)",
                              }
                            : {
                                background: "transparent",
                                color: "#FFFFFF",
                                border: "1px solid rgba(201,168,106,0.4)",
                              }),
                        }}
                      >
                        {plan.cta}
                      </motion.button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
