"use client"

import { motion } from "framer-motion"
import { Building2, Zap, Briefcase, ArrowRight } from "lucide-react"
import { fadeUpVariant, staggerContainerVariant, staggerItemVariant } from "@/lib/motion"
import Link from "next/link"

const useCases = [
  {
    title: "Training Organisations",
    description: "Centralise programme delivery, participant management, and operations in a single structured system.",
    icon: Building2,
    label: "Training",
    href: "/solutions/training"
  },
  {
    title: "Bootcamps",
    description: "Run intensive cohorts with real-time tracking, enforced structure, and deep engagement visibility.",
    icon: Zap,
    label: "Bootcamps",
    href: "/solutions/bootcamps",
    isFeatured: true
  },
  {
    title: "Corporate Programmes",
    description: "Deliver internal training, compliance, and workforce development with full operational control.",
    icon: Briefcase,
    label: "Corporate",
    href: "/solutions/corporate"
  }
]

export function UseCasesSection() {
  return (
    <section className="py-32 bg-[#0B0B0C] relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUpVariant}
          className="mb-16 md:mb-24 text-left"
        >
          <span className="text-[12px] font-bold text-[#C9A86A] uppercase tracking-[0.2em] block mb-6">
            PROGRAMME TYPES
          </span>
          <h2 className="text-[40px] md:text-[48px] font-bold text-[#EDEDED] leading-[1.1] tracking-tight mb-4 max-w-2xl">
            Built for structured programme delivery
          </h2>
          <p className="text-[#9CA3AF] text-base md:text-lg max-w-[520px] font-normal leading-[1.6]">
            Designed to support training organisations, bootcamps, and enterprise programmes without compromising structure.
          </p>
        </motion.div>

        {/* Grid System */}
        <motion.div
          variants={staggerContainerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12 items-center"
        >
          {useCases.map((uc, idx) => {
            const Icon = uc.icon
            const isFeatured = uc.isFeatured
            
            return (
              <motion.div
                key={idx}
                variants={staggerItemVariant}
                whileHover={{ 
                  y: -4,
                  borderColor: "rgba(255,255,255,0.12)",
                }}
                className={`group relative bg-[#111113] border ${isFeatured ? 'border-[#C9A86A]/30 scale-[1.02] shadow-[0_0_40px_rgba(201,168,106,0.05)]' : 'border-white/[0.06]'} rounded-[18px] p-8 transition-all duration-300`}
              >
                {/* Soft Inner Glow on Hover */}
                <div className="absolute inset-0 bg-[#C9A86A]/[0.02] opacity-0 group-hover:opacity-100 transition-opacity rounded-[18px]" />
                
                <div className="relative z-10">
                  {/* Top Row */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-10 h-10 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center justify-center group-hover:border-[#C9A86A]/40 transition-colors">
                      <Icon className="w-5 h-5 text-[#EDEDED] group-hover:text-[#C9A86A] transition-colors stroke-[1.5]" />
                    </div>
                    <span className="text-[11px] font-medium text-[#9CA3AF] uppercase tracking-widest">
                      {uc.label}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-[20px] md:text-[22px] font-semibold text-[#F5F5F5] mb-4">
                    {uc.title}
                  </h3>
                  <p className="text-[#9CA3AF] text-[15px] leading-[1.6] mb-8 min-h-[72px]">
                    {uc.description}
                  </p>

                  {/* CTA */}
                  <Link 
                    href={uc.href}
                    className="inline-flex items-center gap-2 text-[14px] font-medium text-[#C9A86A] hover:text-[#D4AF37] transition-colors group/cta"
                  >
                    View setup
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/cta:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
