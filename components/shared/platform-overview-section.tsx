"use client"

import { motion } from "framer-motion"
import { Layers, CalendarClock, MessageSquare, Workflow, LineChart, ShieldCheck } from "lucide-react"
import { fadeUpVariant, staggerContainerVariant, staggerItemVariant } from "@/lib/motion"

const features = [
  { title: "Curriculum Structuring", desc: "Design multi-layered programmes with prerequisites and custom paths.", icon: Layers },
  { title: "Precision Scheduling", desc: "Automate calendar invites, enforce timezones, manage complex timelines.", icon: CalendarClock },
  { title: "Centralised Communication", desc: "Keep all announcements and cohort chats natively within the platform.", icon: MessageSquare },
  { title: "Automated Session Workflow", desc: "From lobby entry to recording processing — the full lifecycle runs on autopilot.", icon: Workflow },
  { title: "Performance Analytics", desc: "Granular dashboards tracking engagement, completion rates, and attendance.", icon: LineChart },
  { title: "Attendance Intelligence", desc: "Silent tracking monitors join time, exit time, and participation scores.", icon: ShieldCheck },
]

export function ComplexDeliverySection() {
  return (
    <section className="py-32 bg-[#0D0D0D] border-b border-[#1A1A1A]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUpVariant}
          className="mb-16 pb-10 border-b border-[#1A1A1A]"
        >
          <p className="text-[10px] font-bold text-[#A1A1AA] uppercase tracking-[0.2em] mb-4">Capabilities</p>
          <h2 className="text-3xl font-bold text-white mb-4 tracking-tight">Engineered for complex delivery</h2>
          <p className="text-[#A1A1AA] text-base max-w-xl font-light">
            Go beyond basic scheduling. OYEN Grid provides the primitives required to run sophisticated programmes at scale.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-0"
        >
          {features.map((f, idx) => {
            const Icon = f.icon
            const isRight = idx % 2 !== 0
            return (
              <motion.div
                key={idx}
                variants={staggerItemVariant}
                className={`group flex items-start gap-5 py-8 px-6 border-b border-[#1A1A1A] ${isRight ? "md:border-l" : ""} hover:bg-[#101010] transition-colors`}
              >
                <div className="w-8 h-8 rounded-lg bg-[#111111] border border-[#1A1A1A] flex items-center justify-center shrink-0 group-hover:border-[#C9A96E]/30 transition-colors">
                  <Icon className="w-4 h-4 text-[#C9A96E]" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white mb-1.5 tracking-tight">{f.title}</h3>
                  <p className="text-[#A1A1AA] text-xs leading-relaxed font-light">{f.desc}</p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
