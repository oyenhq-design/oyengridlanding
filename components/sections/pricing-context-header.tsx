"use client"

import { motion } from "framer-motion"

interface PricingContextHeaderProps {
  planLabel: string
  planName: string
  price: string
  billingText: string
  cta: string
  features: string[]
}

export function PricingContextHeader({
  planLabel,
  planName,
  price,
  billingText,
  cta,
  features,
}: PricingContextHeaderProps) {
  return (
    <section className="w-full max-w-2xl mx-auto bg-[#111111] rounded-2xl border border-[#1F1F1F] p-8 mt-12 mb-12">
      <div className="mb-4">
        <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]/80">OYEN GRID</span>
        <h2 className="text-3xl font-bold text-white mt-2 mb-1">Workspace</h2>
        <p className="text-sm text-[#A1A1AA] mb-4">
          Includes programme structuring, session delivery, tracking, and analytics in one unified system
        </p>
      </div>
      <div className="flex flex-wrap gap-2 mb-6">
        <span className="bg-[#18120A] text-[#D4AF37] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">{planLabel}</span>
        <span className="bg-[#232323] text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">{planName}</span>
      </div>
      <div className="flex items-end gap-6 mb-6">
        <div>
          <div className="text-4xl font-bold text-white mb-1">{price}</div>
          <div className="text-xs text-[#71717A] font-medium">{billingText}</div>
        </div>
        <button className="ml-auto px-6 py-3 rounded-xl font-bold text-sm bg-[#D4AF37] text-[#0B0B0C] shadow-[0_4px_20px_rgba(212,175,55,0.18)] hover:brightness-110 transition-all">
          {cta}
        </button>
      </div>
      <div className="border-t border-neutral-800 my-6" />
      <div>
        <div className="text-xs font-bold uppercase text-[#D4AF37]/70 mb-3 tracking-widest">Includes</div>
        <ul className="space-y-2">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-center gap-2 text-sm text-[#D4D4D8]">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
