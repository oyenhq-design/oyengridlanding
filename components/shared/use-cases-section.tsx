"use client"

import { motion } from "framer-motion"
import { Building2, Zap, Briefcase } from "lucide-react"

export function UseCasesSection() {
  const useCases = [
    {
      title: "Training Organisations",
      description: "Simplify programme delivery and participant management for professional training. Centralise your entire operation.",
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
    <section className="py-24 bg-[#0A0A0A] border-b border-[#1F1F23]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Built for Different Programmes</h2>
          <p className="text-[#A1A1AA] text-lg max-w-2xl mx-auto font-light">
            An adaptive architecture that supports the unique requirements of your delivery model.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {useCases.map((useCase, idx) => {
            const Icon = useCase.icon
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-[#111113] border border-[#1F1F23] rounded-xl p-8 hover:border-[#C9A96E]/40 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-[#0A0A0A] border border-[#1F1F23] flex items-center justify-center mb-6">
                  <Icon className="w-5 h-5 text-[#C9A96E]" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                <p className="text-[#A1A1AA] text-sm leading-relaxed font-light">
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
