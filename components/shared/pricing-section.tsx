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
    monthlyUSD: 15,
    yearlyUSD: 12,
    ngnMonthly: "₦25,000",
    ngnYearly: "₦20,000",
    description: "For small teams running a single programme.",
    features: [
      { text: "1 Programme", bold: false },
      { text: "Up to 50 Participants", bold: false },
      { text: "Session chat only", bold: false },
      { text: "Limited storage (2–5 GB)", bold: false },
      { text: "Basic dashboard", bold: false },
      { text: "Invite-only access", bold: false },
      { text: "Basic support", bold: false },
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
    monthlyUSD: 30,
    yearlyUSD: 24,
    ngnMonthly: "₦50,000",
    ngnYearly: "₦40,000",
    description: "Everything you need to run structured programmes.",
    features: [
      { text: "Up to 5 Programmes", bold: true },
      { text: "Up to 200 Participants", bold: true },
      { text: "Session + Group chat", bold: true },
      { text: "Attendance tracking", bold: false },
      { text: "Basic progress tracking", bold: false },
      { text: "Participant profiles (basic)", bold: false },
      { text: "Session notes + trainer notes", bold: false },
      { text: "Multi-admin (up to 3)", bold: false },
      { text: "Limited recordings", bold: false },
      { text: "Basic AI assistant", bold: false },
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
    monthlyUSD: 60,
    yearlyUSD: 48,
    ngnMonthly: "₦100,000",
    ngnYearly: "₦80,000",
    description: "Advanced tools for scaling operations.",
    features: [
      { text: "Unlimited Programmes", bold: true },
      { text: "500+ Participants", bold: true },
      { text: "Full bootcamp system", bold: true },
      { text: "Advanced participant tracking", bold: false },
      { text: "Full notes system", bold: false },
      { text: "Session recording & storage", bold: false },
      { text: "Advanced analytics", bold: false },
      { text: "Full communication system", bold: false },
      { text: "Expanded AI tools", bold: false },
      { text: "Priority support", bold: false },
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
    description: "For enterprise and large-scale organisations.",
    features: [
      { text: "Everything in Premium", bold: true },
      { text: "Dedicated account manager", bold: false },
      { text: "Advanced reporting suite", bold: false },
      { text: "Onboarding & training support", bold: false },
    ],
    enterpriseFeatures: [
      { icon: Globe, text: "Custom deployment" },
      { icon: Building2, text: "White-label branding" },
      { icon: Cpu, text: "API integrations" },
      { icon: ShieldCheck, text: "SLA guarantees" },
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
      "relative flex flex-col rounded-[18px] transition-all duration-300 ease-out cursor-default",
    bg: "bg-[#111111]",
    border: "border border-[rgba(201,168,106,0.15)]",
    hoverBorder: "hover:border-[rgba(201,168,106,0.35)]",
    hoverGlow: "",
    padding: "p-7 lg:p-8",
    scale: "",
    zIndex: "z-0",
  },
  standard: {
    wrapper:
      "relative flex flex-col rounded-[18px] transition-all duration-300 ease-out cursor-default",
    bg: "bg-[#141412]",
    border: "border border-[#C9A86A]",
    hoverBorder: "",
    hoverGlow:
      "hover:shadow-[0_0_50px_rgba(201,168,106,0.22),0_0_100px_rgba(201,168,106,0.08)]",
    padding: "p-7 lg:p-9",
    scale: "lg:scale-[1.055]",
    zIndex: "z-10",
  },
  premium: {
    wrapper:
      "relative flex flex-col rounded-[18px] transition-all duration-300 ease-out cursor-default",
    bg: "bg-[#111111]",
    border: "border border-[rgba(201,168,106,0.3)]",
    hoverBorder: "hover:border-[rgba(201,168,106,0.6)]",
    hoverGlow:
      "hover:shadow-[0_0_30px_rgba(201,168,106,0.12)]",
    padding: "p-7 lg:p-8",
    scale: "",
    zIndex: "z-0",
  },
  enterprise: {
    wrapper:
      "relative flex flex-col rounded-[18px] transition-all duration-300 ease-out cursor-default",
    bg: "bg-[#0E0E0E]",
    border: "border border-dashed border-[rgba(201,168,106,0.25)]",
    hoverBorder: "hover:border-[rgba(201,168,106,0.45)]",
    hoverGlow: "",
    padding: "p-7 lg:p-8",
    scale: "",
    zIndex: "z-0",
  },
}

// ─── Component ────────────────────────────────────────────────────────────────

export function PricingSection() {
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly")

  return (
    <section className="relative bg-[#0A0A0A] overflow-hidden">
      {/* ── Ambient background glow ── */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(201,168,106,0.045) 0%, transparent 65%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-[-10%] top-[30%] w-[40%] h-[40%] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(201,168,106,0.02) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-12">

        {/* ════════════════════════════════════════════
            1. HERO HEADER
        ════════════════════════════════════════════ */}
        <div className="text-center pt-[110px] pb-[72px] max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="h-px w-8 bg-[#C9A86A]/40" />
              <span
                className="text-[12px] font-semibold uppercase tracking-[0.22em] text-[#C9A86A]"
              >
                Pricing
              </span>
              <div className="h-px w-8 bg-[#C9A86A]/40" />
            </div>

            <h1
              className="font-bold text-white tracking-tight leading-[1.08] mb-6"
              style={{ fontSize: "clamp(38px, 5vw, 56px)" }}
            >
              Simple pricing.{" "}
              <span className="text-[#C9A86A]">Serious scale.</span>
            </h1>

            <p
              className="text-[#A1A1AA] leading-relaxed"
              style={{ fontSize: "clamp(17px, 2vw, 20px)" }}
            >
              Start small or deploy across your organisation.
              <br className="hidden sm:block" />
              Pricing scales with your growth.
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
          className="flex items-center justify-center gap-4 mb-[72px]"
        >
          <span
            className="text-[16px] font-medium transition-colors duration-200"
            style={{ color: billing === "monthly" ? "#E4E4E7" : "#71717A" }}
          >
            Monthly
          </span>

          {/* Toggle track */}
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
                  className="text-[12px] font-bold tracking-wide px-2.5 py-1 rounded-full"
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 xl:gap-6 items-center pb-28">
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
                  styles.hoverBorder,
                  styles.hoverGlow,
                  styles.padding,
                  styles.scale,
                  styles.zIndex,
                  // Standard card glow always on
                  plan.popular
                    ? "shadow-[0_0_40px_rgba(201,168,106,0.15),0_0_80px_rgba(201,168,106,0.05)]"
                    : "",
                ].join(" ")}
              >
                {/* MOST POPULAR badge — Standard only */}
                {plan.popular && (
                  <div className="absolute -top-[14px] left-1/2 -translate-x-1/2 z-20">
                    <span
                      className="text-[11px] font-extrabold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full"
                      style={{
                        background: "linear-gradient(135deg, #D4AF37, #C9A86A)",
                        color: "#0A0A0A",
                        boxShadow: "0 4px 16px rgba(201,168,106,0.35)",
                      }}
                    >
                      Most Popular
                    </span>
                  </div>
                )}

                {/* Subtle inner top glow for Standard */}
                {plan.popular && (
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 rounded-[18px]"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(201,168,106,0.06) 0%, transparent 45%)",
                    }}
                  />
                )}

                {/* ── Card header ── */}
                <div className="relative z-10 mb-7">
                  {/* Plan name */}
                  <div className="flex items-center justify-between mb-5">
                    <h2
                      className="font-bold tracking-wide"
                      style={{
                        fontSize: "21px",
                        color: plan.popular ? "#C9A86A" : "#E4E4E7",
                      }}
                    >
                      {plan.name}
                    </h2>
                    {plan.enterprise && (
                      <span className="text-[11px] font-semibold uppercase tracking-widest text-[#71717A] border border-[#2A2A2A] rounded-md px-2 py-0.5">
                        Enterprise
                      </span>
                    )}
                  </div>

                  {/* Price display */}
                  {usdPrice !== null ? (
                    <div className="mb-1">
                      <div className="flex items-end gap-1.5 leading-none">
                        <span
                          className="font-bold text-white"
                          style={{ fontSize: "clamp(38px, 4vw, 44px)", lineHeight: 1 }}
                        >
                          ${usdPrice}
                        </span>
                        <span className="text-[16px] text-[#71717A] font-medium mb-1">
                          /mo
                        </span>
                      </div>
                      <AnimatePresence mode="wait">
                        <motion.p
                          key={billing + plan.id}
                          initial={{ opacity: 0, y: 4 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -4 }}
                          transition={{ duration: 0.2 }}
                          className="text-[13px] text-[#52525B] font-medium mt-2"
                        >
                          {ngnEquiv} equivalent
                          {isYearly && (
                            <span className="ml-1.5 text-[#C9A86A]/70">
                              · billed annually
                            </span>
                          )}
                        </motion.p>
                      </AnimatePresence>
                    </div>
                  ) : (
                    <div className="mb-1">
                      <span
                        className="font-bold text-white"
                        style={{ fontSize: "clamp(32px, 3.5vw, 40px)", lineHeight: 1 }}
                      >
                        Custom
                      </span>
                      <p className="text-[13px] text-[#52525B] font-medium mt-2">
                        Tailored to your organisation
                      </p>
                    </div>
                  )}

                  {/* Divider */}
                  <div className="h-px bg-[#1E1E1E] mt-6" />

                  {/* Description */}
                  <p className="text-[15px] text-[#A1A1AA] leading-relaxed mt-4">
                    {plan.description}
                  </p>
                </div>

                {/* ── Features list ── */}
                <div className="relative z-10 flex-1">
                  <ul className="flex flex-col gap-[11px] mb-8">
                    {plan.features.map((feat, fi) => (
                      <li key={fi} className="flex items-start gap-3">
                        <div
                          className="mt-[2px] shrink-0 w-[20px] h-[20px] rounded-full flex items-center justify-center"
                          style={{
                            background: "rgba(201,168,106,0.12)",
                            border: "1px solid rgba(201,168,106,0.35)",
                          }}
                        >
                          <Check className="w-3 h-3 text-[#C9A86A]" strokeWidth={2.8} />
                        </div>
                        <span
                          className="text-[16px] leading-relaxed"
                          style={{
                            color: feat.bold ? "#E4E4E7" : "#A1A1AA",
                            fontWeight: feat.bold ? 600 : 400,
                          }}
                        >
                          {feat.text}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Enterprise-only feature block */}
                  {"enterpriseFeatures" in plan && plan.enterpriseFeatures && (
                    <div className="mb-8">
                      <div className="h-px bg-[#1E1E1E] mb-5" />
                      <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#52525B] mb-4">
                        Enterprise Features
                      </p>
                      <ul className="flex flex-col gap-3">
                        {plan.enterpriseFeatures.map(({ icon: Icon, text }, ei) => (
                          <li key={ei} className="flex items-center gap-3">
                            <div
                              className="shrink-0 w-[28px] h-[28px] rounded-md flex items-center justify-center"
                              style={{
                                background: "rgba(201,168,106,0.08)",
                                border: "1px solid rgba(201,168,106,0.2)",
                              }}
                            >
                              <Icon className="w-3.5 h-3.5 text-[#C9A86A]" strokeWidth={1.8} />
                            </div>
                            <span className="text-[15px] font-medium text-[#D4D4D8]">
                              {text}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* ── CTA Button ── */}
                <div className="relative z-10 mt-auto pt-2">
                  <Link href={plan.ctaHref} className="block w-full">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ duration: 0.18 }}
                      id={`cta-${plan.id}`}
                      className="w-full flex items-center justify-center gap-2 rounded-xl font-bold transition-all duration-300"
                      style={{
                        fontSize: "16px",
                        padding: "16px 24px",
                        ...(plan.popular
                          ? {
                              background:
                                "linear-gradient(135deg, #D4AF37 0%, #C9A86A 100%)",
                              color: "#0A0A0A",
                              boxShadow: "0 4px 20px rgba(201,168,106,0.3)",
                            }
                          : plan.enterprise
                          ? {
                              background: "transparent",
                              color: "#C9A86A",
                              border: "1px solid rgba(201,168,106,0.45)",
                            }
                          : {
                              background: "rgba(255,255,255,0.04)",
                              color: "#D4D4D8",
                              border: "1px solid #2A2A2A",
                            }),
                      }}
                    >
                      {plan.cta}
                      <ArrowRight className="w-4 h-4" strokeWidth={2.2} />
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* ════════════════════════════════════════════
            4. CUSTOM SETUP SECTION
        ════════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative mb-28 rounded-[20px] overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #111111 0%, #0E0E0E 100%)",
            border: "1px solid rgba(201,168,106,0.15)",
          }}
        >
          {/* Faint grid overlay */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(201,168,106,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,106,1) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 px-8 py-10 md:px-12">
            <div className="flex items-center gap-5">
              <div
                className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
                style={{
                  background: "rgba(201,168,106,0.1)",
                  border: "1px solid rgba(201,168,106,0.25)",
                }}
              >
                <Zap className="w-5 h-5 text-[#C9A86A]" strokeWidth={1.8} />
              </div>
              <div>
                <h3 className="text-[20px] font-bold text-white mb-1">
                  Need a custom setup?
                </h3>
                <p className="text-[15px] text-[#71717A] leading-relaxed">
                  We'll tailor a plan around your team size, workflows, and compliance requirements.
                </p>
              </div>
            </div>

            <Link href="/contact" className="shrink-0">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.18 }}
                id="cta-custom-setup"
                className="flex items-center gap-2 font-bold rounded-xl px-7 py-4 transition-all duration-300"
                style={{
                  fontSize: "16px",
                  background: "transparent",
                  color: "#C9A86A",
                  border: "1px solid rgba(201,168,106,0.5)",
                  boxShadow: "0 0 0 0 rgba(201,168,106,0)",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLButtonElement).style.boxShadow =
                    "0 0 20px rgba(201,168,106,0.15)"
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLButtonElement).style.boxShadow =
                    "0 0 0 0 rgba(201,168,106,0)"
                }}
              >
                Talk to Sales
                <ArrowRight className="w-4 h-4" strokeWidth={2.2} />
              </motion.button>
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
