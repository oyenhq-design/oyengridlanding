"use client"

import { motion } from "framer-motion"
import { Layers, CalendarClock, MessageSquare, Workflow, LineChart, ShieldCheck } from "lucide-react"

const features = [
  {
    title: "Curriculum Structuring",
    description: "Design multi-layered programmes with prerequisites, distinct modules, and custom learning paths.",
    icon: Layers
  },
  {
    title: "Precision Scheduling",
    description: "Automate calendar invites, enforce timezones, and manage complex cohort timelines instantly.",
    icon: CalendarClock
  },
  {
    title: "Centralised Communication",
    description: "Keep all announcements, cohort chats, and session discussions natively within the platform.",
    icon: MessageSquare
  },
  {
    title: "Automated Session Workflow",
    description: "From lobby entry to recording processing, the entire session lifecycle runs on autopilot.",
    icon: Workflow
  },
  {
    title: "Performance Analytics",
    description: "Granular dashboards showing engagement metrics, completion rates, and active participants.",
    icon: LineChart
  },
  {
    title: "Attendance Intelligence",
    description: "Silent tracking monitors who joins, when they leave, and their overall participation score.",
    icon: ShieldCheck
  }
]

export function ComplexDeliverySection() {
  return (
    <section className="py-24 bg-[#0A0A0A] border-b border-[#1F1F23]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 border-b border-[#1F1F23] pb-10">
          <h2 className="text-3xl font-bold text-white mb-4 tracking-tight">Engineered for Complex Delivery</h2>
          <p className="text-[#A1A1AA] text-lg max-w-2xl font-light">
            Go beyond basic scheduling. OYEN Grid provides the architectural primitives required to run sophisticated programmes at scale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="group flex flex-col"
              >
                <div className="flex items-center gap-3 mb-3">
                  <Icon className="w-4 h-4 text-[#C9A96E]" strokeWidth={1.5} />
                  <h3 className="text-sm font-bold text-white tracking-wide uppercase">{feature.title}</h3>
                </div>
                <p className="text-[#A1A1AA] text-sm leading-relaxed font-light pl-7">
                  {feature.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
