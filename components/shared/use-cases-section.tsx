"use client"

import { motion } from "framer-motion"
import { Building2, Zap, Briefcase } from "lucide-react"

export function UseCasesSection() {
  const useCases = [
    {
      title: "Training Organisations",
      description: "Simplify programme delivery and participant management for professional training. Centralise your entire operation into one hub.",
      icon: Building2
    },
    {
      title: "Bootcamps",
      description: "Run intensive, structured programmes with real-time tracking, cohort management, and deep engagement analytics.",
      icon: Zap
    },
    {
      title: "Corporate Programmes",
      description: "Enterprise-grade solutions for internal training, compliance modules, and continuous professional development.",
      icon: Briefcase
    }
  ]

  return (
    <section className="py-32 bg-[#F8F8F6] border-b border-[#E5E5E5]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-[#111111] mb-4 tracking-tight">Built for Different Programmes</h2>
          <p className="text-[#555555] text-lg max-w-2xl font-light">
            An adaptive architecture that supports the unique requirements of your delivery model without sacrificing structure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {useCases.map((useCase, idx) => {
            const Icon = useCase.icon
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-[#FFFFFF] border border-[#E5E5E5] rounded-sm p-10 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-8 h-8 rounded-sm bg-[#FAFAF9] border border-[#E5E5E5] flex items-center justify-center mb-6 group-hover:bg-[#C9A96E]/10 group-hover:border-[#C9A96E]/30 transition-colors">
                  <Icon className="w-4 h-4 text-[#111111] group-hover:text-[#C9A96E] transition-colors" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-semibold text-[#111111] mb-3 tracking-tight">{useCase.title}</h3>
                <p className="text-[#555555] text-sm leading-relaxed font-light">
                  {useCase.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
