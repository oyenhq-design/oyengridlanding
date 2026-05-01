"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { CheckCircle2, Layout, BarChart3, Zap, Users2 } from "lucide-react"

const FEATURES = [
  {
    id: "program-management",
    label: "Program Management",
    icon: Layout,
    title: "Orchestrate complex learning at scale",
    description: "Design multi-layered curricula, manage nested cohorts, and standardise delivery across thousands of participants with absolute precision.",
    highlights: [
      "Hierarchical Curriculum Architect",
      "Dynamic Cohort Synchronisation",
      "Template-Based Program Deployment"
    ],
    image: "/images/program-management.png"
  },
  {
    id: "analytics",
    label: "Analytics",
    icon: BarChart3,
    title: "Real-time insights into every interaction",
    description: "Move beyond simple attendance tracking. Monitor engagement depth, content mastery, and participant sentiment in real-time.",
    highlights: [
      "Granular Engagement Dashboards",
      "Predictive Dropout Risk Alerts",
      "Automated Impact Assessment"
    ],
    image: "/images/analytics.png"
  },
  {
    id: "automation",
    label: "Automation",
    icon: Zap,
    title: "Scale operations without increasing headcount",
    description: "Automate the high-volume, low-value tasks that consume your team's time, from certificate issuance to compliance nudges.",
    highlights: [
      "Conditional Workflow Engine",
      "Automated Credentialing System",
      "Smart Notification Pipelines"
    ],
    image: "/images/automation.png"
  },
  {
    id: "collaboration",
    label: "Collaboration",
    icon: Users2,
    title: "Unified workspace for your entire team",
    description: "Eliminate silos between instructors, administrators, and program managers. Share assets, insights, and feedback instantly.",
    highlights: [
      "Centralised Team Asset Vault",
      "Cross-Cohort Activity Feeds",
      "Integrated Facilitator Messaging"
    ],
    image: "/images/collaboration.png"
  }
]

export function InteractiveFeaturesSection() {
  const [activeTab, setActiveTab] = useState(FEATURES[0].id)
  const activeFeature = FEATURES.find((f) => f.id === activeTab)!

  return (
    <section className="py-24 md:py-32 bg-[#0B0B0C] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Everything you need to <span className="text-[#C8A95A]">operate with power</span>
          </h2>
          <p className="text-lg text-[#A1A1AA] max-w-2xl mx-auto">
            Deeply integrated tools designed for the unique operational complexity of modern learning programs.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-16 border-b border-[#1F1F1F] relative">
          {FEATURES.map((feature) => {
            const Icon = feature.icon
            const isActive = activeTab === feature.id
            return (
              <button
                key={feature.id}
                onClick={() => setActiveTab(feature.id)}
                className={`flex items-center gap-2 pb-4 text-sm md:text-base font-medium transition-all duration-300 relative ${
                  isActive ? "text-[#C8A95A]" : "text-[#A1A1AA] hover:text-white"
                }`}
              >
                <Icon className={`w-4 h-4 md:w-5 h-5 transition-colors ${isActive ? "text-[#C8A95A]" : "text-[#A1A1AA]"}`} />
                {feature.label}
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C8A95A]"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            )
          })}
        </div>

        {/* Feature Content */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
            >
              {/* Left Side: Explanation */}
              <div className="space-y-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C8A95A]/10 border border-[#C8A95A]/20 text-[#C8A95A] text-xs font-semibold uppercase tracking-wider">
                  Core Feature
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                  {activeFeature.title}
                </h3>
                <p className="text-lg text-[#A1A1AA] leading-relaxed">
                  {activeFeature.description}
                </p>
                <ul className="space-y-4">
                  {activeFeature.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-white">
                      <div className="w-5 h-5 rounded-full bg-[#C8A95A]/10 border border-[#C8A95A]/20 flex items-center justify-center">
                        <CheckCircle2 className="w-3 h-3 text-[#C8A95A]" />
                      </div>
                      <span className="font-medium">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Side: UI Preview */}
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-[#C8A95A]/20 to-transparent blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
                <div className="relative bg-[#111111] border border-[#1F1F1F] rounded-2xl overflow-hidden shadow-2xl">
                  {/* Top Bar Decoration */}
                  <div className="h-8 bg-[#1A1A1A] border-b border-[#1F1F1F] flex items-center px-4 gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#333]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#333]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#333]" />
                  </div>
                  <div className="relative aspect-video">
                    <Image
                      src={activeFeature.image}
                      alt={activeFeature.label}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      priority
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
