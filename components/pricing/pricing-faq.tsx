"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

const FAQS = [
  {
    q: "Can I upgrade later?",
    a: "Yes. You can upgrade or downgrade your plan at any time as your operational scale changes. All your program data and settings will be preserved."
  },
  {
    q: "What happens if I exceed limits?",
    a: "We won't suddenly shut down your programs. If you consistently exceed your participant or program limits, we'll reach out to help you transition to the next tier."
  },
  {
    q: "Do you charge per participant?",
    a: "No. Our pricing is based on tiered participant limits per program. This allows for predictable budgeting without fluctuating per-head costs."
  },
  {
    q: "Do you host live sessions?",
    a: "Yes. OYEN Grid features integrated live room delivery, allowing you to run HD sessions directly in the browser without external links."
  },
  {
    q: "Is onboarding included?",
    a: "Every plan includes self-serve onboarding guides. Standard and above include email support, and Enterprise clients receive dedicated success managers for white-glove onboarding."
  }
]

export function PricingFAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <section className="py-24 bg-[#0B0B0C]">
      <div className="max-w-[800px] mx-auto px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-16 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {FAQS.map((faq, idx) => (
            <div 
              key={idx} 
              className="bg-[#111111] border border-[#1F1F1F] rounded-2xl overflow-hidden cursor-pointer"
              onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
            >
              <div className="p-6 flex items-center justify-between gap-4">
                <h3 className="text-lg font-bold text-white tracking-tight">{faq.q}</h3>
                <ChevronDown className={`w-5 h-5 text-[#D4AF37] transition-transform duration-300 ${activeIndex === idx ? "rotate-180" : ""}`} />
              </div>
              <AnimatePresence>
                {activeIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-[#A1A1AA] leading-relaxed border-t border-[#1F1F1F] pt-4">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
