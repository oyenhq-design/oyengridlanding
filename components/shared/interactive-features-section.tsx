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
    <section className="relative py-32 overflow-hidden bg-transparent">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-[#D4AF37] opacity-[0.03] blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 lg:px-14 relative z-10">
        
        <div className="text-left mb-20 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-[#D4AF37] text-[12px] font-bold uppercase tracking-[0.2em] mb-6">
            System Capabilities
          </div>
          <h2 className="text-[42px] md:text-[56px] font-bold text-white mb-8 tracking-tight leading-[1.1]">
            Everything you need to <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#FFF0B3]">operate with power</span>
          </h2>
          <p className="text-[18px] md:text-[20px] text-[#A1A1AA] font-light leading-relaxed">
            Deeply integrated tools designed for the unique operational complexity of modern learning programs.
          </p>
        </div>

        {/* Tab Navigation - Premium Pill Style */}
        <div className="flex flex-wrap items-center gap-2 mb-20 p-1.5 bg-white/5 border border-white/10 rounded-2xl w-fit backdrop-blur-md">
          {FEATURES.map((feature) => {
            const Icon = feature.icon;
            const isActive = activeTab === feature.id;
            return (
              <button
                key={feature.id}
                onClick={() => setActiveTab(feature.id)}
                className={`flex items-center gap-3 px-6 py-3 rounded-xl text-[14px] font-bold transition-all duration-300 relative ${
                  isActive ? "text-black" : "text-[#71717A] hover:text-white"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeFeatureTab"
                    className="absolute inset-0 bg-[#D4AF37] rounded-xl shadow-[0_4px_15px_rgba(212,175,55,0.3)]"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <Icon className={`relative z-10 w-4.5 h-4.5 ${isActive ? "text-black" : "text-[#71717A]"}`} />
                <span className="relative z-10">{feature.label}</span>
              </button>
            );
          })}
        </div>

        {/* Feature Content */}
        <div className="relative min-h-[500px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center"
            >
              {/* Left Side: Explanation (60/40 Layout) */}
              <div className="lg:col-span-5 space-y-10">
                <div className="space-y-6">
                  <h3 className="text-[32px] md:text-[42px] font-bold text-white leading-tight tracking-tight">
                    {activeFeature.title}
                  </h3>
                  <p className="text-[17px] md:text-[19px] text-[#A1A1AA] leading-relaxed font-light">
                    {activeFeature.description}
                  </p>
                </div>

                <div className="space-y-4">
                  {activeFeature.highlights.map((highlight, idx) => (
                    <motion.div 
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + idx * 0.1 }}
                      key={idx} 
                      className="flex items-center gap-4 group/item"
                    >
                      <div className="w-6 h-6 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center group-hover/item:bg-[#D4AF37]/20 transition-colors">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37]" />
                      </div>
                      <span className="text-[15px] font-semibold text-white/90 group-hover/item:text-white transition-colors">{highlight}</span>
                    </motion.div>
                  ))}
                </div>

                <button className="flex items-center gap-2 text-[#D4AF37] font-bold text-[14px] uppercase tracking-wider group/btn">
                  See implementation details 
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </button>
              </div>

              {/* Right Side: UI Preview (Standout Section) */}
              <div className="lg:col-span-7 relative group">
                {/* Visual Depth Glow */}
                <div className="absolute -inset-10 bg-gradient-to-tr from-[#D4AF37]/20 via-transparent to-[#3B82F6]/10 blur-[80px] opacity-40 group-hover:opacity-60 transition-opacity duration-700 pointer-events-none" />
                
                <motion.div 
                  initial={{ rotateY: 5, rotateX: 2, scale: 0.98 }}
                  animate={{ rotateY: 0, rotateX: 0, scale: 1 }}
                  whileHover={{ y: -10, rotateY: -2, transition: { duration: 0.5 } }}
                  className="relative bg-[rgba(15,15,15,0.6)] backdrop-blur-2xl border border-white/10 rounded-3xl overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.8)]"
                >
                  {/* Browser-style bar */}
                  <div className="h-10 bg-white/5 border-b border-white/5 flex items-center px-6 gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                    <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                    <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                    <div className="ml-4 px-3 py-1 rounded-md bg-white/5 text-[10px] text-white/20 font-bold uppercase tracking-widest">
                      oyengrid.io/admin
                    </div>
                  </div>

                  <div className="relative aspect-[16/10] bg-[#050505]">
                    <Image
                      src={activeFeature.image}
                      alt={activeFeature.label}
                      fill
                      className="object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                      priority
                    />
                    
                    {/* Glass Overlay Elements for Depth */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-40" />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      
      {/* Section Transition Fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#050505] to-transparent pointer-events-none" />
    </section>
  );
}
