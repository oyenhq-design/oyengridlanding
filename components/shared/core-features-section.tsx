"use client"

import { motion } from "framer-motion"
import { Layout, Video, Database } from "lucide-react"

export function CoreFeaturesSection() {
  return (
    <section className="py-32 bg-[#0A0A0A] border-b border-[#1F1F23]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-24">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
            Everything your organisation needs <span className="text-[#555555] font-light">— in one system</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          
          {/* Column 1: Programme Management */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col"
          >
            {/* Minimal Header */}
            <div className="flex flex-col mb-8">
              <Layout className="w-5 h-5 text-[#C9A96E] mb-4" strokeWidth={1.5} />
              <h3 className="text-xl font-semibold text-white mb-3 tracking-tight">Programme Management</h3>
              <p className="text-[#A1A1AA] text-sm leading-relaxed font-light">
                Build multi-module curriculums, manage strict access control via invite-only cohorts, and fully automate calendar schedules.
              </p>
            </div>

            {/* UI Preview Block (Floating, no heavy box) */}
            <div className="h-48 border border-[#1F1F23] bg-[#111113] rounded-sm p-4 relative overflow-hidden flex items-center justify-center">
              <div className="w-full max-w-[220px] border border-[#1F1F23] bg-[#0A0A0A] rounded-sm p-3 relative z-10">
                <div className="flex items-center gap-2 mb-3 border-b border-[#1F1F23] pb-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#C9A96E]" />
                  <div className="text-[8px] font-medium text-white uppercase tracking-wider">Cohort A Structure</div>
                </div>
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between p-1.5 rounded-sm bg-[#111113] border border-[#1F1F23]">
                    <span className="text-[8px] text-[#A1A1AA]">Module 1: Foundations</span>
                    <span className="text-[8px] text-[#27C93F] bg-[#27C93F]/10 px-1 rounded-sm">Active</span>
                  </div>
                  <div className="flex items-center justify-between p-1.5 rounded-sm bg-[#111113] border border-[#1F1F23]">
                    <span className="text-[8px] text-[#A1A1AA]">Module 2: Advanced</span>
                    <span className="text-[8px] text-[#555555]">Locked</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Column 2: Session Delivery */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col"
          >
            {/* Minimal Header */}
            <div className="flex flex-col mb-8">
              <Video className="w-5 h-5 text-[#C9A96E] mb-4" strokeWidth={1.5} />
              <h3 className="text-xl font-semibold text-white mb-3 tracking-tight">Session Delivery</h3>
              <p className="text-[#A1A1AA] text-sm leading-relaxed font-light">
                Host HD sessions natively. Silent attendance tracking runs entirely in the background while chat and notes stay integrated.
              </p>
            </div>

            {/* UI Preview Block */}
            <div className="h-48 border border-[#1F1F23] bg-[#111113] rounded-sm p-4 relative overflow-hidden flex items-center justify-center">
              <div className="w-full max-w-[220px] border border-[#1F1F23] bg-[#0A0A0A] rounded-sm overflow-hidden relative z-10 flex flex-col">
                <div className="flex-1 bg-[#1A1A1E] relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Video className="w-4 h-4 text-[#555555]" />
                  </div>
                  <div className="absolute bottom-1.5 left-1.5 bg-[#0A0A0A] border border-[#1F1F23] px-1 py-0.5 rounded-sm text-[6px] text-white">S. Chen</div>
                </div>
                <div className="h-10 border-t border-[#1F1F23] bg-[#111113] flex gap-0.5 p-0.5">
                  <div className="flex-1 bg-[#0A0A0A] border border-[#1F1F23] rounded-sm" />
                  <div className="flex-1 bg-[#0A0A0A] border border-[#1F1F23] rounded-sm" />
                  <div className="flex-1 bg-[#0A0A0A] border border-[#1F1F23] rounded-sm" />
                  <div className="flex-1 bg-[#0A0A0A] border border-[#1F1F23] rounded-sm" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Column 3: Recordings & Storage */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col"
          >
            {/* Minimal Header */}
            <div className="flex flex-col mb-8">
              <Database className="w-5 h-5 text-[#C9A96E] mb-4" strokeWidth={1.5} />
              <h3 className="text-xl font-semibold text-white mb-3 tracking-tight">Recordings & Storage</h3>
              <p className="text-[#A1A1AA] text-sm leading-relaxed font-light">
                Securely host an automated cloud vault for your sessions. Permission controls ensure materials stay within specific cohorts.
              </p>
            </div>

            {/* UI Preview Block */}
            <div className="h-48 border border-[#1F1F23] bg-[#111113] rounded-sm p-4 relative overflow-hidden flex items-center justify-center">
              <div className="w-full max-w-[220px] relative z-10 grid grid-cols-2 gap-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="border border-[#1F1F23] bg-[#0A0A0A] rounded-sm p-1.5">
                    <div className="h-10 bg-[#1A1A1E] rounded-sm flex items-center justify-center mb-1.5 border border-[#1F1F23]">
                      <div className="w-3 h-3 rounded-full bg-[#111113] flex items-center justify-center">
                        <div className="w-1 h-1 rounded-sm bg-[#C9A96E]" />
                      </div>
                    </div>
                    <div className="text-[6px] text-white font-medium truncate">Session_{i}_Rec.mp4</div>
                    <div className="text-[5px] text-[#A1A1AA]">420MB</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
