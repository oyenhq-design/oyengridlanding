"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Layout, BarChart3, Zap, Users2, ArrowRight } from "lucide-react";

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
    image: "/images/program-management.png",
    accent: "gold"
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
    image: "/images/analytics.png",
    accent: "blue"
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
    image: "/images/automation.png",
    accent: "gold"
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
    image: "/images/collaboration.png",
    accent: "blue"
  }
];

export function InteractiveFeaturesSection() {
  const [activeTab, setActiveTab] = useState(FEATURES[0].id);
  const activeFeature = FEATURES.find((f) => f.id === activeTab)!;

  return (
    <section className="relative py-48 overflow-hidden bg-transparent">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-[#F5B942] opacity-[0.04] blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 lg:px-14 relative z-10">
        
        <div className="text-center mb-24">
          <div className="text-[#F5B942] text-[13px] font-bold tracking-[0.2em] uppercase mb-4">Capabilities</div>
          <h2 className="text-[42px] md:text-[56px] font-bold text-white mb-8 tracking-tight leading-[1.1]">
            Everything you need to <span className="text-[#F5B942]">operate with power</span>
          </h2>
        </div>

        {/* Tab Navigation - Pill Style (Centered) */}
        <div className="flex justify-center mb-24">
          <div className="flex flex-wrap items-center gap-2 p-1.5 bg-white/5 border border-white/10 rounded-[100px] backdrop-blur-md">
            {FEATURES.map((feature) => {
              const Icon = feature.icon;
              const isActive = activeTab === feature.id;
              return (
                <button
                  key={feature.id}
                  onClick={() => setActiveTab(feature.id)}
                  className={`flex items-center gap-3 px-8 py-3.5 rounded-[100px] text-[14px] font-bold transition-all duration-300 relative ${
                    isActive ? "text-black" : "text-[#71717A] hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeFeatureTab"
                      className="absolute inset-0 bg-[#F5B942] rounded-[100px] shadow-[0_4px_20px_rgba(245,185,66,0.3)]"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  <Icon className={`relative z-10 w-4.5 h-4.5 ${isActive ? "text-black" : "text-[#71717A]"}`} />
                  <span className="relative z-10">{feature.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Feature Content */}
        <div className="relative min-h-[500px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center"
            >
              {/* Left Side: Explanation */}
              <div className="lg:col-span-5 space-y-12">
                <div className="space-y-6">
                  <h3 className="text-[32px] md:text-[42px] font-bold text-white leading-tight tracking-tight">
                    {activeFeature.title}
                  </h3>
                  <p className="text-[18px] md:text-[20px] text-[#A1A1AA] leading-relaxed font-light">
                    {activeFeature.description}
                  </p>
                </div>

                <div className="space-y-5">
                  {activeFeature.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center gap-4 group/item">
                      <div className="w-6 h-6 rounded-full bg-[#F5B942]/10 border border-[#F5B942]/20 flex items-center justify-center">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#F5B942]" />
                      </div>
                      <span className="text-[16px] font-semibold text-white/90 group-hover/item:text-white transition-colors">{highlight}</span>
                    </div>
                  ))}
                </div>

                <button className="flex items-center gap-2 text-[#F5B942] font-bold text-[14px] uppercase tracking-wider group/btn">
                  Explore {activeFeature.label} 
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </button>
              </div>

              {/* Right Side: UI Preview */}
              <div className="lg:col-span-7 relative group">
                <div className="absolute -inset-12 bg-[#F5B942] opacity-[0.06] blur-[100px] rounded-full pointer-events-none group-hover:opacity-[0.1] transition-opacity duration-700" />
                
                <motion.div 
                  initial={{ rotateY: 5, rotateX: 2, scale: 0.98 }}
                  animate={{ rotateY: 0, rotateX: 0, scale: 1 }}
                  className="relative bg-[rgba(15,15,15,0.6)] backdrop-blur-3xl border border-white/10 rounded-[40px] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.8)]"
                >
                  <div className="h-10 bg-white/5 border-b border-white/5 flex items-center px-8 gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                    <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                    <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                  </div>

                  <div className="relative aspect-[16/10] bg-[#050505]">
                    <Image
                      src={activeFeature.image}
                      alt={activeFeature.label}
                      fill
                      className="object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                      priority
                    />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
