"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Check, ArrowRight, X, AlertCircle, ChevronRight, Layers } from "lucide-react"

export interface UseCaseData {
  label: string
  hero: {
    title: string
    subtext: string
    heroImage?: string
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
    <div className="bg-background min-h-screen text-white pt-[120px] pb-[80px] overflow-hidden selection:bg-primary/30">
      
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
            <div className="mb-6">
              <span className="text-[12px] font-bold uppercase tracking-[0.12em] text-[#C9A86A]">
                Use Case
              </span>
            </div>

            {/* Title */}
            <h1 
              className="font-bold text-white tracking-tight leading-[1.1] mb-6 max-w-[520px]"
              style={{ fontSize: "clamp(48px, 6vw, 60px)" }}
            >
              {data.hero.title}
            </h1>

            {/* Subtext */}
            <p 
              className="text-[#A1A1AA] leading-relaxed mb-10 max-w-[480px]"
              style={{ fontSize: "18px" }}
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

          {/* Right Mockup / Graphic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative lg:h-[500px] w-full rounded-2xl border border-white/10 bg-panel/80 backdrop-blur-md overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] group"
          >
            {/* Subtle glow behind image */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#C9A86A]/5 via-transparent to-transparent opacity-50" />
            
            {data.hero.heroImage ? (
              <div className="w-full h-full relative">
                <img 
                  src={data.hero.heroImage} 
                  alt="Dashboard Preview" 
                  className="w-full h-full object-cover opacity-90 group-hover:scale-[1.02] transition-transform duration-700"
                />
                <div className="absolute inset-0 border border-[#C9A86A]/10 rounded-2xl pointer-events-none" />
                {/* Glass overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-full gap-4 opacity-50">
                <Layers className="w-12 h-12 text-[#C9A86A]" />
                <p className="text-sm tracking-widest uppercase text-[#A1A1AA] font-semibold">Dashboard Preview</p>
              </div>
            )}
            
            {/* Soft border glow */}
            <div className="absolute -inset-[1px] bg-gradient-to-tr from-[#C9A86A]/20 to-transparent rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          2. PROBLEM SECTION
      ════════════════════════════════════════════ */}
      {/* ════════════════════════════════════════════
          2. PROBLEM SECTION
      ════════════════════════════════════════════ */}
      <section className="relative py-24 md:py-32">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-[32px] md:text-[40px] font-bold tracking-tight text-white mb-6">
              {data.problem.title}
            </h2>
            <div className="w-16 h-1 bg-[#C9A86A]/50 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {data.problem.bullets.map((bullet, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="bg-panel p-7 rounded-xl border border-white/5 shadow-xl hover:border-white/10 transition-colors group"
              >
                <div className="w-2 h-2 rounded-full bg-red-500 mb-6 group-hover:scale-125 transition-transform" />
                <p className="text-[#A1A1AA] font-medium leading-relaxed group-hover:text-white transition-colors">
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
      {/* ════════════════════════════════════════════
          3 & 4. SOLUTION & FEATURES SECTION
      ════════════════════════════════════════════ */}
      <section className="relative py-32 max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Solution Left side */}
          <div className="lg:col-span-5">
            <h2 className="text-[36px] md:text-[48px] font-bold tracking-tight text-white mb-6 leading-[1.1]">
              {data.solution.title}
            </h2>
            <p className="text-[18px] text-[#A1A1AA] leading-relaxed mb-8">
              {data.solution.description}
            </p>
            <Link href="/get-started">
              <button className="flex items-center gap-2 text-secondary font-bold hover:gap-3 transition-all">
                See features in action <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </div>

          {/* Feature Grid Right side */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.features.map((feature, idx) => {
              const Icon = feature.icon || Check;
              // Make the first card larger / anchor
              const isLarge = idx === 0;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className={`group bg-panel p-8 rounded-2xl border border-white/5 hover:border-secondary/40 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(59,130,246,0.1)] hover:-translate-y-1 ${isLarge ? 'md:col-span-2 md:p-10' : ''}`}
                >
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-secondary/10 transition-colors duration-300 relative">
                    <Icon className="w-6 h-6 text-secondary" />
                    <div className="absolute inset-0 rounded-xl bg-secondary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <h3 className="text-[20px] font-bold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-[16px] text-[#A1A1AA] leading-relaxed line-clamp-2 group-hover:text-white/90 transition-colors">
                    {feature.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          5. HOW IT WORKS (3 STEPS)
      ════════════════════════════════════════════ */}
      {/* ════════════════════════════════════════════
          5. HOW IT WORKS (STEPPER)
      ════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-panel/30 relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-left mb-16">
            <h2 className="text-[32px] md:text-[40px] font-bold text-white mb-4">How it works</h2>
            <div className="w-12 h-1 bg-[#C9A86A]/50 rounded-full" />
          </div>

          <div className="flex flex-col md:flex-row items-start gap-12 md:gap-20 relative">
            {/* Desktop Connector Line */}
            <div className="hidden md:block absolute top-[22px] left-8 right-8 h-[1px] bg-gradient-to-r from-[#C9A86A]/40 via-[#C9A86A]/20 to-transparent" />
            
            {data.howItWorks.map((step, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2, duration: 0.6 }}
                className="flex-1 relative z-10"
              >
                <div className="w-11 h-11 rounded-full bg-background border-2 border-primary flex items-center justify-center text-[18px] font-bold text-white mb-6 shadow-[0_0_15px_rgba(201,168,106,0.3)] relative">
                  {idx + 1}
                  <div className="absolute inset-0 rounded-full bg-[#C9A86A]/20 animate-ping" style={{ animationDuration: '3s' }} />
                </div>
                <h3 className="text-[20px] font-bold text-white mb-3">{step.title}</h3>
                <p className="text-[15px] text-[#A1A1AA] leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          6. VALUE / OUTCOME (BEFORE & AFTER)
      ════════════════════════════════════════════ */}
      {/* ════════════════════════════════════════════
          6. VALUE / OUTCOME (BEFORE & AFTER)
      ════════════════════════════════════════════ */}
      <section className="py-32 max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="text-left mb-16">
          <h2 className="text-[32px] md:text-[40px] font-bold text-white mb-4">
            {data.value.title}
          </h2>
          <div className="w-12 h-1 bg-[#C9A86A]/50 rounded-full" />
        </div>

        <div className="grid grid-cols-1 gap-6">
          {data.value.items.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group flex flex-col md:flex-row items-stretch gap-6 md:gap-12"
            >
              <div className="flex-1 bg-panel border border-white/5 p-6 md:p-8 rounded-2xl flex items-center gap-6 opacity-60 grayscale group-hover:opacity-80 transition-all">
                <div className="w-6 h-6 rounded-full bg-red-950/30 flex items-center justify-center shrink-0">
                  <X className="w-3 h-3 text-red-500" strokeWidth={3} />
                </div>
                <span className="text-[17px] text-white/70 font-medium">{item.before}</span>
              </div>
              
              <div className="hidden md:flex items-center justify-center shrink-0">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:scale-110 group-hover:bg-secondary/20 transition-all duration-500">
                  <ArrowRight className="w-5 h-5 text-secondary" />
                </div>
              </div>

              <div className="flex-1 bg-panel-alt border border-secondary/20 p-6 md:p-8 rounded-2xl flex items-center gap-6 shadow-2xl relative overflow-hidden group-hover:border-secondary/40 transition-all">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent pointer-events-none" />
                <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center shrink-0 relative z-10">
                  <Check className="w-3 h-3 text-secondary" strokeWidth={3} />
                </div>
                <span className="text-[17px] text-white font-semibold relative z-10">{item.after}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════════
          7. SOCIAL PROOF
      ════════════════════════════════════════════ */}
      {/* ════════════════════════════════════════════
          7. SOCIAL PROOF
      ════════════════════════════════════════════ */}
      <section className="py-20 border-t border-white/5 flex flex-col items-center justify-center">
        <p className="text-[14px] uppercase tracking-[0.2em] font-bold text-[#A1A1AA] mb-10">
          Used by growing training teams
        </p>
        <div className="flex flex-wrap items-center justify-center gap-10 md:gap-20 opacity-30 grayscale contrast-125">
          <div className="h-6 w-32 bg-white/40 rounded-sm" />
          <div className="h-7 w-28 bg-white/40 rounded-sm" />
          <div className="h-6 w-36 bg-white/40 rounded-sm" />
          <div className="h-8 w-24 bg-white/40 rounded-sm hidden md:block" />
        </div>
      </section>

      {/* ════════════════════════════════════════════
          8. FINAL CTA
      ════════════════════════════════════════════ */}
      {/* ════════════════════════════════════════════
          8. FINAL CTA
      ════════════════════════════════════════════ */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-[1200px] mx-auto bg-gradient-to-b from-panel to-background border border-white/10 rounded-[32px] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#C9A86A]/5 blur-[120px] rounded-full pointer-events-none" />
          
          <h2 className="text-[40px] md:text-[56px] font-bold text-white mb-4 relative z-10 tracking-tight leading-[1.1]">
            {data.finalCta.title}
          </h2>
          <p className="text-[18px] text-[#A1A1AA] mb-12 max-w-[500px] mx-auto relative z-10 leading-relaxed">
            {data.finalCta.subtext}
          </p>

          <div className="flex flex-col items-center gap-6 relative z-10">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
              <Link href="/get-started" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto px-10 py-4 bg-[#C9A86A] text-[#0A0A0A] font-bold rounded-xl hover:bg-[#D4AF37] hover:scale-[1.05] transition-all duration-300 shadow-[0_0_40px_rgba(201,168,106,0.3)]">
                  Start Building
                </button>
              </Link>
              <Link href="/contact" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto px-10 py-4 bg-transparent border border-secondary/30 text-secondary font-bold rounded-xl hover:bg-secondary/5 transition-all duration-300">
                  Talk to Sales
                </button>
              </Link>
            </div>
            <p className="text-[14px] text-white/40 font-medium tracking-wide">
              No setup fee &middot; Cancel anytime
            </p>
          </div>
        </div>
      </section>

    </div>
  )
}
