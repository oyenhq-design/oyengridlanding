"use client"

import { motion } from "framer-motion"
import { Building2, Zap, Briefcase } from "lucide-react"
import { fadeUpVariant, staggerContainerVariant, staggerItemVariant } from "@/lib/motion"

export function UseCasesSection() {
  const useCases = [
    {
      title: "Training Organisations",
      description: "Simplify programme delivery and participant management. Centralise your full operation into one unified hub with zero tool-switching.",
      icon: Building2,
      tag: "Enterprise"
    },
    {
      title: "Bootcamps",
      description: "Run intensive, structured programmes with real-time cohort tracking, attendance scoring, and deep engagement analytics.",
      icon: Zap,
      tag: "Intensive"
    },
    {
      title: "Corporate Programmes",
      description: "Enterprise-grade solutions for internal training, compliance modules, and continuous professional development at scale.",
      icon: Briefcase,
      tag: "Corporate"
    }
  ]

  return (
    <section className="py-32 bg-[#0A0A0A] border-b border-[#1A1A1A]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUpVariant}
          className="mb-16"
        >
          <p className="text-[10px] font-bold text-[#A1A1AA] uppercase tracking-[0.2em] mb-4">Programme Types</p>
          <h2 className="text-3xl font-bold text-white mb-4 tracking-tight">Built for different delivery models</h2>
          <p className="text-[#A1A1AA] text-base max-w-xl font-light">
            An adaptive architecture that supports the unique requirements of your model without sacrificing structure.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {useCases.map((uc, idx) => {
            const Icon = uc.icon
            return (
              <motion.div
                key={idx}
                variants={staggerItemVariant}
                whileHover={{ y: -5, borderColor: "rgba(255,255,255,0.07)" }}
                transition={{ duration: 0.2 }}
                className="group flex flex-col bg-[#0D0D0D] border border-[#1A1A1A] rounded-xl p-8"
              >
                <div className="flex items-start justify-between mb-7">
                  <div className="w-9 h-9 rounded-lg bg-[#111111] border border-[#1A1A1A] flex items-center justify-center group-hover:border-[#C9A96E]/30 transition-colors">
                    <Icon className="w-4 h-4 text-[#C9A96E]" strokeWidth={1.5} />
                  </div>
                  <span className="text-[9px] font-bold text-[#555555] uppercase tracking-widest border border-[#1A1A1A] px-2 py-1 rounded-sm">{uc.tag}</span>
                </div>
                <h3 className="text-white font-semibold mb-3 tracking-tight">{uc.title}</h3>
                <p className="text-[#A1A1AA] text-sm leading-relaxed font-light">{uc.description}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
