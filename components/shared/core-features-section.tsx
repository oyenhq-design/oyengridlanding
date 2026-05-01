"use client"

import { motion } from "framer-motion"
import { Layout, Video, Database } from "lucide-react"
import { fadeUpVariant, staggerContainerVariant, staggerItemVariant } from "@/lib/motion"

export function CoreFeaturesSection() {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
      {/* Subtle ambient gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[#C9A86A]/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-[42px] md:text-[60px] font-bold text-white tracking-tight leading-[1.1]">
            Everything your organisation needs <br />
            <span className="text-[#C9A86A]"> — in one system</span>
          </h2>
        </motion.div>

        {/* Asymmetrical Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* 1. PRIMARY CARD: Programme Management (Left - 60%) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 group"
          >
            <div className="h-full bg-panel border border-secondary/15 rounded-[24px] p-8 md:p-10 hover:border-secondary/40 transition-all duration-500 hover:-translate-y-1.5 shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent pointer-events-none" />
              
              <div className="flex flex-col h-full relative z-10">
                <div className="w-10 h-10 rounded-xl bg-[#1A1A1A] border border-white/5 flex items-center justify-center mb-8 group-hover:border-secondary/30 transition-colors">
                  <Layout className="w-5 h-5 text-secondary" />
                </div>
                
                <h3 className="text-[24px] font-bold text-white mb-4">Programme Management</h3>
                <p className="text-[16px] text-[#A1A1A1] leading-relaxed mb-10 max-w-[400px]">
                  Structure programmes with enforced flow, access control, and real-time visibility.
                </p>

                {/* UI PREVIEW: Module List */}
                <div className="mt-auto space-y-3 bg-background/50 rounded-2xl p-6 border border-white/5">
                  {[
                    { title: "Module 01: Strategy Foundations", status: "Active", progress: 100 },
                    { title: "Module 02: Advanced Operations", status: "Active", progress: 65 },
                    { title: "Module 03: Executive Leadership", status: "Locked", progress: 0 },
                  ].map((item, i) => (
                    <div key={i} className="flex flex-col gap-3 p-4 rounded-xl bg-panel border border-white/5 group-hover:border-secondary/20 transition-all">
                      <div className="flex items-center justify-between">
                        <span className="text-[13px] font-bold text-white/90">{item.title}</span>
                        <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${item.status === 'Active' ? 'bg-secondary/20 text-secondary' : 'bg-white/5 text-white/30'}`}>
                          {item.status}
                        </span>
                      </div>
                      <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: `${item.progress}%` }}
                          transition={{ duration: 1, delay: 0.5 + (i * 0.1) }}
                          className="h-full bg-secondary" 
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Stacked Smaller Cards (Right - 40%) */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            
            {/* 2. SECONDARY CARD: Session Delivery */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group flex-1"
            >
              <div className="h-full bg-panel border border-white/5 rounded-[24px] p-8 hover:border-secondary/40 transition-all duration-500 hover:-translate-y-1 shadow-xl relative">
                <div className="w-10 h-10 rounded-xl bg-[#1A1A1A] border border-white/5 flex items-center justify-center mb-6">
                  <Video className="w-5 h-5 text-secondary" />
                </div>
                <h3 className="text-[20px] font-bold text-white mb-3">Session Delivery</h3>
                <p className="text-[15px] text-[#A1A1A1] leading-relaxed mb-8">
                  Run sessions natively with attendance tracking and automated recording.
                </p>

                {/* UI PREVIEW: Live Session Mock */}
                <div className="bg-background rounded-xl border border-white/5 overflow-hidden">
                  <div className="aspect-video bg-panel relative flex items-center justify-center">
                    <div className="absolute top-3 left-3 flex items-center gap-2 px-2 py-1 bg-red-600 rounded-md">
                      <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                      <span className="text-[9px] font-bold text-white uppercase tracking-wider">LIVE</span>
                    </div>
                    <div className="absolute top-3 right-3 flex items-center gap-2 px-2 py-1 bg-black/40 backdrop-blur-md rounded-md border border-white/10">
                      <span className="text-[9px] font-bold text-white/80">42 participants</span>
                    </div>
                    <div className="w-12 h-12 rounded-full border-2 border-white/10 flex items-center justify-center">
                      <Video className="w-5 h-5 text-white/20" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 3. SECONDARY CARD: Recordings & Storage */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group flex-1"
            >
              <div className="h-full bg-panel border border-white/5 rounded-[24px] p-8 hover:border-secondary/40 transition-all duration-500 hover:-translate-y-1 shadow-xl relative">
                <div className="w-10 h-10 rounded-xl bg-[#1A1A1A] border border-white/5 flex items-center justify-center mb-6">
                  <Database className="w-5 h-5 text-secondary" />
                </div>
                <h3 className="text-[20px] font-bold text-white mb-3">Recordings & Storage</h3>
                <p className="text-[15px] text-[#A1A1A1] leading-relaxed mb-8">
                  Every session is stored, secured, and instantly accessible.
                </p>

                {/* UI PREVIEW: File Cards */}
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { name: "Week 01 Recording", size: "1.2 GB", duration: "1h 24m" },
                    { name: "Week 02 Recording", size: "840 MB", duration: "58m" },
                  ].map((file, i) => (
                    <div key={i} className="p-3 bg-background border border-white/5 rounded-xl hover:border-secondary/20 transition-all cursor-default">
                      <div className="text-[11px] font-bold text-white/90 truncate mb-1">{file.name}</div>
                      <div className="flex items-center justify-between text-[9px] text-white/30">
                        <span>{file.size}</span>
                        <span>{file.duration}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

          </div>
        </div>

        {/* Statement Line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-24 text-center"
        >
          <div className="inline-flex items-center gap-4 text-[16px] md:text-[20px] font-medium text-white/80">
            <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#C9A86A]/40" />
            <p>
              Not a collection of tools. <span className="text-white font-bold">A system that enforces how your programmes run.</span>
            </p>
            <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#C9A86A]/40" />
          </div>
        </motion.div>

      </div>
    </section>
  )
}
