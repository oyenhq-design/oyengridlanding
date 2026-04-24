"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Check, ArrowRight, X, AlertCircle, ChevronRight, Layers } from "lucide-react"

export interface UseCaseData {
  label: string
  hero: {
    title: string
    subtext: string
  }
  problem: {
    title: string
    bullets: string[]
  }
  solution: {
    title: string
    description: string
  }
  features: {
    title: string
    description: string
    icon?: any
  }[]
  howItWorks: {
    title: string
    description: string
  }[]
  value: {
    title: string
    items: {
      before: string
      after: string
    }[]
  }
  finalCta: {
    title: string
    subtext: string
  }
}

export function UseCaseLayout({ data }: { data: UseCaseData }) {
  return (
    <div className="bg-[#0A0A0A] min-h-screen text-white pt-[120px] pb-[80px] overflow-hidden selection:bg-[#C9A86A]/30">
      
      {/* ── GLOBAL AMBIENT GLOW ── */}
      <div 
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] opacity-40 mix-blend-screen"
        style={{
          background: "radial-gradient(circle, rgba(201,168,106,0.06) 0%, transparent 70%)"
        }}
      />

      {/* ════════════════════════════════════════════
          1. HERO SECTION
      ════════════════════════════════════════════ */}
      <section className="relative max-w-[1200px] mx-auto px-6 lg:px-8 pt-10 pb-24 md:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-start text-left relative z-10"
          >
            {/* Label */}
            <div className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full border border-[#C9A86A]/30 bg-[#C9A86A]/10">
              <span className="text-[12px] font-semibold uppercase tracking-[0.15em] text-[#C9A86A]">
                Use Case
              </span>
              <span className="w-1 h-1 rounded-full bg-[#C9A86A]" />
              <span className="text-[12px] font-semibold tracking-[0.05em] text-white/80">
                {data.label}
              </span>
            </div>

            {/* Title */}
            <h1 
              className="font-bold text-white tracking-tight leading-[1.1] mb-6"
              style={{ fontSize: "clamp(42px, 5vw, 56px)" }}
            >
              {data.hero.title}
            </h1>

            {/* Subtext */}
            <p 
              className="text-[#A1A1AA] leading-relaxed mb-10 max-w-[500px]"
              style={{ fontSize: "clamp(16px, 2vw, 18px)" }}
            >
              {data.hero.subtext}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <Link href="/get-started" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto px-8 py-3.5 bg-[#C9A86A] text-[#0A0A0A] font-bold rounded-lg hover:bg-[#D4AF37] hover:scale-[1.02] transition-all duration-300 shadow-[0_4px_20px_rgba(201,168,106,0.25)] flex items-center justify-center gap-2">
                  Start Building
                  <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
                </button>
              </Link>
              <Link href="/contact" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto px-8 py-3.5 bg-transparent border border-white/10 text-white font-medium rounded-lg hover:bg-white/5 transition-all duration-300 flex items-center justify-center">
                  Talk to Sales
                </button>
              </Link>
            </div>
          </motion.div>

          {/* Right Mockup / Graphic placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative lg:h-[500px] w-full rounded-2xl border border-white/5 bg-[#111111]/50 backdrop-blur-sm overflow-hidden flex items-center justify-center shadow-2xl"
          >
            {/* Soft inner glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#C9A86A]/5 to-transparent opacity-50" />
            <div className="flex flex-col items-center gap-4 opacity-50">
              <Layers className="w-12 h-12 text-[#C9A86A]" />
              <p className="text-sm tracking-widest uppercase text-[#A1A1AA] font-semibold">Dashboard Preview</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          2. PROBLEM SECTION
      ════════════════════════════════════════════ */}
      <section className="relative bg-[#0F0F10] py-24 border-y border-white/5">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <h2 className="text-[32px] md:text-[40px] font-bold tracking-tight text-white mb-4">
              {data.problem.title}
            </h2>
            <div className="w-16 h-1 bg-[#C9A86A]/50 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.problem.bullets.map((bullet, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="bg-[#141415] p-6 rounded-xl border border-red-900/20 shadow-[0_4px_20px_rgba(0,0,0,0.2)]"
              >
                <div className="w-8 h-8 rounded-full bg-red-950/50 flex items-center justify-center mb-4 border border-red-900/30">
                  <X className="w-4 h-4 text-red-400" strokeWidth={3} />
                </div>
                <p className="text-[#D4D4D8] font-medium leading-relaxed">
                  {bullet}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          3 & 4. SOLUTION & FEATURES SECTION
      ════════════════════════════════════════════ */}
      <section className="relative py-32 max-w-[1200px] mx-auto px-6 lg:px-8">
        
        {/* Solution Positioning */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-[36px] md:text-[48px] font-bold tracking-tight text-white mb-6">
            {data.solution.title}
          </h2>
          <p className="text-[18px] text-[#A1A1AA] leading-relaxed">
            {data.solution.description}
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {data.features.map((feature, idx) => {
            const Icon = feature.icon || Check;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="group bg-[#111111] p-8 lg:p-10 rounded-2xl border border-white/5 hover:border-[#C9A86A]/40 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(201,168,106,0.06)] hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-[#C9A86A]/10 transition-colors duration-300">
                  <Icon className="w-6 h-6 text-[#C9A86A]" />
                </div>
                <h3 className="text-[22px] font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-[16px] text-[#A1A1AA] leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* ════════════════════════════════════════════
          5. HOW IT WORKS (3 STEPS)
      ════════════════════════════════════════════ */}
      <section className="bg-[#0F0F10] py-24 border-y border-white/5 relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-[32px] md:text-[40px] font-bold text-white mb-4">How it works</h2>
            <div className="w-12 h-1 bg-[#C9A86A]/50 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {data.howItWorks.map((step, idx) => (
              <div key={idx} className="relative flex flex-col items-center text-center">
                {/* Connecting Line (Desktop) */}
                {idx < 2 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-full h-[1px] bg-gradient-to-r from-[#C9A86A]/30 to-transparent" />
                )}
                
                <div className="w-16 h-16 rounded-full bg-[#111111] border border-[#C9A86A]/30 flex items-center justify-center text-[24px] font-bold text-[#C9A86A] mb-6 shadow-[0_0_20px_rgba(201,168,106,0.15)] relative z-10">
                  {idx + 1}
                </div>
                <h3 className="text-[20px] font-bold text-white mb-3">{step.title}</h3>
                <p className="text-[15px] text-[#888888] leading-relaxed max-w-[280px]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          6. VALUE / OUTCOME (BEFORE & AFTER)
      ════════════════════════════════════════════ */}
      <section className="py-32 max-w-[1000px] mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-[32px] md:text-[40px] font-bold text-white mb-4">
            {data.value.title}
          </h2>
        </div>

        <div className="flex flex-col gap-4">
          {data.value.items.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col sm:flex-row items-stretch gap-4 sm:gap-6"
            >
              <div className="flex-1 bg-[#141415] border border-red-900/20 p-5 rounded-xl flex items-center gap-4 opacity-80 grayscale">
                <X className="w-5 h-5 text-red-500 shrink-0" strokeWidth={3} />
                <span className="text-[16px] text-white/70 font-medium">{item.before}</span>
              </div>
              
              <div className="hidden sm:flex items-center justify-center w-8 shrink-0">
                <ArrowRight className="w-6 h-6 text-[#A1A1AA]/40" />
              </div>

              <div className="flex-1 bg-[#1A1813] border border-[#C9A86A]/30 p-5 rounded-xl flex items-center gap-4 shadow-[0_0_30px_rgba(201,168,106,0.05)]">
                <Check className="w-5 h-5 text-[#C9A86A] shrink-0" strokeWidth={3} />
                <span className="text-[16px] text-white font-medium">{item.after}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════════
          7. SOCIAL PROOF
      ════════════════════════════════════════════ */}
      <section className="py-16 border-t border-white/5 flex flex-col items-center justify-center opacity-70">
        <p className="text-[14px] uppercase tracking-widest font-semibold text-[#888] mb-8">
          Trusted by forward-thinking teams
        </p>
        <div className="flex items-center gap-12 grayscale opacity-40">
          <div className="h-8 w-24 bg-white/20 rounded-md" />
          <div className="h-8 w-32 bg-white/20 rounded-md" />
          <div className="h-8 w-24 bg-white/20 rounded-md hidden md:block" />
          <div className="h-8 w-28 bg-white/20 rounded-md hidden sm:block" />
        </div>
      </section>

      {/* ════════════════════════════════════════════
          8. FINAL CTA
      ════════════════════════════════════════════ */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-[1000px] mx-auto bg-[#111111] border border-[#C9A86A]/20 rounded-3xl p-10 md:p-16 text-center relative overflow-hidden shadow-[0_0_50px_rgba(201,168,106,0.08)]">
          <div className="absolute inset-0 bg-gradient-to-t from-[#C9A86A]/5 to-transparent pointer-events-none" />
          
          <h2 className="text-[36px] md:text-[48px] font-bold text-white mb-6 relative z-10">
            {data.finalCta.title}
          </h2>
          <p className="text-[18px] text-[#A1A1AA] mb-10 max-w-[400px] mx-auto relative z-10">
            {data.finalCta.subtext}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
            <Link href="/get-started" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto px-8 py-4 bg-[#C9A86A] text-[#0A0A0A] font-bold rounded-xl hover:bg-[#D4AF37] hover:scale-[1.02] transition-all duration-300">
                Start Building
              </button>
            </Link>
            <Link href="/contact" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto px-8 py-4 bg-[#1A1A1A] border border-white/10 text-white font-semibold rounded-xl hover:bg-white/5 transition-all duration-300">
                Talk to Sales
              </button>
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
