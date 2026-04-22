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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Engineered for Complex Delivery</h2>
          <p className="text-[#A1A1AA] text-lg max-w-2xl">
            Go beyond basic scheduling. OYEN Grid provides the architectural primitives required to run sophisticated programmes at scale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="group"
              >
                <div className="w-10 h-10 border border-[#1F1F23] rounded-lg bg-[#111113] flex items-center justify-center mb-5 group-hover:border-[#C9A96E]/50 transition-colors">
                  <Icon className="w-4 h-4 text-[#C9A96E]" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-[#A1A1AA] text-sm leading-relaxed font-light">
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
