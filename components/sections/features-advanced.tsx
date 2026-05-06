"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Activity, BarChart3, Users, Zap, Globe, Shield, Layout, Cpu } from "lucide-react";

export function FeaturesAdvanced() {
  const [activeTab, setActiveTab] = useState("Program Management");

  const tabs = [
    { name: "Program Management", icon: Layout, title: "Build complex programs in minutes", bullets: ["Modular curriculum builder", "Multi-cohort scheduling", "Instructor assignments"] },
    { name: "Analytics", icon: BarChart3, title: "High-fidelity data insights", bullets: ["Real-time attendance tracking", "Performance heatmaps", "ROI attribution"] },
    { name: "Automation", icon: Zap, title: "Operate on autopilot", bullets: ["Automated grading systems", "Trigger-based notifications", "Progress-locked modules"] },
    { name: "Collaboration", icon: Users, title: "Unified team workspace", bullets: ["Granular role permissions", "Shared resource libraries", "Internal team comms"] },
  ];

  return (
    <div className="bg-[#0B0B0D]">
      
      {/* 8. EVERYTHING YOU NEED TO OPERATE WITH POWER (Tabs) */}
      <section className="py-32 border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 mb-24 text-center">
           <h2 className="text-[40px] md:text-[56px] font-black text-white tracking-tighter leading-tight mb-8">
            Everything you need to <br />
            <span className="text-[#F5B942]">operate with power.</span>
           </h2>
           
           <div className="flex flex-wrap justify-center gap-2">
             {tabs.map((tab) => (
               <button
                 key={tab.name}
                 onClick={() => setActiveTab(tab.name)}
                 className={`px-8 py-4 rounded-full text-sm font-bold transition-all flex items-center gap-2.5 ${activeTab === tab.name ? "bg-[#F5B942] text-black shadow-lg shadow-[#F5B942]/10" : "text-[#71717A] hover:text-white"}`}
               >
                 <tab.icon className="w-4 h-4" />
                 {tab.name}
               </button>
             ))}
           </div>
        </div>

        <div className="max-w-[1400px] mx-auto px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center glass-card p-12 lg:p-20"
            >
              <div>
                <span className="text-[#F5B942] text-[12px] font-bold tracking-[0.2em] uppercase mb-8 block">
                  CAPABILITY: {activeTab.toUpperCase()}
                </span>
                <h3 className="text-white text-[32px] md:text-[44px] font-black mb-10 leading-tight">
                  {tabs.find(t => t.name === activeTab)?.title}
                </h3>
                <div className="space-y-6">
                  {tabs.find(t => t.name === activeTab)?.bullets.map((bullet, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="w-6 h-6 rounded-full bg-[#F5B942]/10 flex items-center justify-center">
                        <Check className="w-3.5 h-3.5 text-[#F5B942]" />
                      </div>
                      <span className="text-white font-medium">{bullet}</span>
                    </div>
                  ))}
                </div>
                <button className="btn-gold mt-12">Learn more about {activeTab}</button>
              </div>

              <div className="relative">
                <div className="absolute -inset-10 bg-[#F5B942]/5 blur-[80px] rounded-full pointer-events-none" />
                <div className="relative glass-card border-white/10 rounded-2xl overflow-hidden aspect-[1.3/1] shadow-2xl">
                   <img 
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f" 
                    alt="Product Screenshot" 
                    className="w-full h-full object-cover opacity-90"
                   />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* 9. INSIGHTS SECTION */}
      <section className="py-32 border-t border-white/5 bg-black/40">
        <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
          
          {/* LEFT: Stats Cards */}
          <div className="lg:col-span-6">
            <h2 className="text-[36px] md:text-[48px] font-black text-white leading-tight mb-8">
              Operational insights <br />
              <span className="text-[#F5B942]">that drive results.</span>
            </h2>
            <p className="text-[#71717A] mb-12 max-w-lg font-light leading-relaxed">
              OYEN GRID transforms complex operational logs into actionable intelligence, allowing leadership to move with precision.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Efficiency Gain", val: "42%", trend: "up" },
                { label: "Retention Rate", val: "98.5%", trend: "up" },
                { label: "Cost Savings", val: "$1.2M", trend: "up" },
                { label: "Completion", val: "84%", trend: "up" }
              ].map((stat, i) => (
                <div key={i} className="glass-card p-8 group hover:bg-[#F5B942]/5">
                   <div className="text-[11px] font-bold text-[#71717A] uppercase tracking-widest mb-2 group-hover:text-white transition-colors">{stat.label}</div>
                   <div className="text-3xl font-black text-white mb-2">{stat.val}</div>
                   <div className="text-[#F5B942] text-xs font-bold flex items-center gap-1">
                     <Activity className="w-3 h-3" /> +12.5% this quarter
                   </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Charts UI */}
          <div className="lg:col-span-6 relative">
             <div className="glass-card rounded-[24px] overflow-hidden p-2 border-white/10 shadow-[0_50px_100px_rgba(0,0,0,0.6)]">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bbbda536639a" 
                  alt="Chart View" 
                  className="w-full h-full object-cover rounded-2xl"
                />
             </div>
             {/* Floating Mini Chart Card */}
             <div className="absolute -top-10 -right-10 glass-card p-6 bg-black border-white/20 hidden md:block w-48 shadow-2xl">
                <div className="flex justify-between items-center mb-4">
                   <div className="w-8 h-8 rounded-lg bg-[#F5B942]/20 flex items-center justify-center">
                      <BarChart3 className="w-4 h-4 text-[#F5B942]" />
                   </div>
                </div>
                <div className="text-xl font-bold text-white">78.4%</div>
                <div className="text-[10px] text-[#71717A] font-bold uppercase tracking-widest mt-1">Growth Index</div>
             </div>
          </div>
        </div>
      </section>

      {/* 10. SCALE FEATURES GRID */}
      <section className="py-32 border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { icon: Globe, title: "Scalability", desc: "Deploy infrastructure across multiple regions and timezones with zero latency." },
            { icon: BarChart3, title: "Data Analytics", desc: "Native integration for advanced BI tools and custom operational reporting." },
            { icon: Cpu, title: "Infrastructure", desc: "Serverless delivery models that scale automatically based on programme load." },
            { icon: Shield, title: "Integrations", desc: "Seamlessly connect with your existing HRIS, LMS, and ERP systems." }
          ].map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="glass-card p-10 hover:border-[#F5B942]/30 group text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center mb-8 mx-auto group-hover:scale-110 transition-transform">
                <card.icon className="w-7 h-7 text-[#71717A] group-hover:text-[#F5B942]" />
              </div>
              <h4 className="text-white font-bold text-xl mb-4">{card.title}</h4>
              <p className="text-[#71717A] text-sm leading-relaxed font-light">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
}
