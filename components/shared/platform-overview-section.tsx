"use client"

import { motion } from "framer-motion"
import { 
  Layers, 
  CalendarClock, 
  MessageSquare, 
  Workflow, 
  LineChart, 
  ShieldCheck 
} from "lucide-react"
import { fadeUpVariant, staggerContainerVariant, staggerItemVariant } from "@/lib/motion"

const capabilities = [
  { 
    title: "Curriculum Structuring", 
    desc: "Design multi-layered programmes with controlled progression, prerequisites, and access logic.", 
    icon: Layers 
  },
  { 
    title: "Precision Scheduling", 
    desc: "Coordinate sessions across cohorts with strict timing, timezone control, and automated triggers.", 
    icon: CalendarClock 
  },
  { 
    title: "Centralised Communication", 
    desc: "Keep all programme communication scoped, contextual, and contained within each cohort.", 
    icon: MessageSquare 
  },
  { 
    title: "Automated Session Workflow", 
    desc: "From entry to recording and archiving — sessions operate within a controlled lifecycle.", 
    icon: Workflow 
  },
  { 
    title: "Performance Analytics", 
    desc: "Track engagement, completion, and participant behaviour with structured visibility.", 
    icon: LineChart 
  },
  { 
    title: "Attendance Intelligence", 
    desc: "Capture presence, timing, and interaction signals without disrupting the session flow.", 
    icon: ShieldCheck 
  },
]

export function ComplexDeliverySection() {
  return (
    <section className="py-32 bg-[#0B0B0C] relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUpVariant}
          className="mb-16 md:mb-24"
        >
          <span className="text-[12px] font-bold text-[#C6A96B] uppercase tracking-[0.2em] block mb-6">
            → CAPABILITIES
          </span>
          <h2 className="text-[40px] md:text-[56px] lg:text-[64px] font-semibold text-[#EDEDED] leading-[1.1] tracking-tight mb-4 max-w-3xl">
            Engineered for complex programme delivery
          </h2>
          <p className="text-[#9CA3AF] text-base md:text-lg max-w-xl font-normal leading-[1.6]">
            Go beyond basic scheduling with a system built for high-stakes organisational training.
          </p>
        </motion.div>

        {/* Grid System */}
        <motion.div
          variants={staggerContainerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10"
        >
          {capabilities.map((cap, idx) => {
            const Icon = cap.icon
            return (
              <motion.div
                key={idx}
                variants={staggerItemVariant}
                className="group relative bg-[#111113] border border-white/[0.06] rounded-[16px] p-6 md:p-8 transition-all duration-300 hover:border-[#C6A96B]/30"
              >
                {/* Subtle Background Shift on Hover */}
                <div className="absolute inset-0 bg-white/[0.01] opacity-0 group-hover:opacity-100 transition-opacity rounded-[16px]" />
                
                <div className="relative z-10">
                  <div className="mb-6">
                    <Icon className="w-5 h-5 text-[#9CA3AF] group-hover:text-[#C6A96B] transition-colors stroke-[1.5]" />
                  </div>
                  <h3 className="text-[18px] md:text-[20px] font-medium text-[#EDEDED] mb-3">
                    {cap.title}
                  </h3>
                  <p className="text-[#9CA3AF] text-[15px] md:text-[16px] leading-[1.6] max-w-sm">
                    {cap.desc}
                  </p>
                  
                  {/* Subtle Underline Accent */}
                  <div className="mt-6 w-0 h-[1px] bg-[#C6A96B]/40 group-hover:w-8 transition-all duration-500" />
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
