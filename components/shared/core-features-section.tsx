"use client"

import { motion } from "framer-motion"
import { Layout, Video, Database, Check } from "lucide-react"

export function CoreFeaturesSection() {
  return (
    <section className="py-24 bg-[#0A0A0A] border-b border-[#1F1F23]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
            Everything your organisation needs <span className="text-[#A1A1AA] font-light">— in one system</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Column 1: Programme Management */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col bg-[#111113] border border-[#1F1F23] rounded-2xl overflow-hidden hover:border-[#C9A96E]/50 transition-colors"
          >
            {/* UI Preview Block */}
            <div className="h-48 bg-[#0A0A0A] border-b border-[#1F1F23] p-4 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#111113] to-transparent" />
              <div className="w-full max-w-[240px] bg-[#111113] border border-[#1F1F23] rounded-lg shadow-xl relative z-10 p-3">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2 h-2 rounded-full bg-[#C9A96E]" />
                  <div className="h-2 w-16 bg-[#1F1F23] rounded" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-2 rounded bg-[#0A0A0A] border border-[#1F1F23]">
                    <div className="h-1.5 w-12 bg-[#333333] rounded" />
                    <div className="h-1.5 w-8 bg-[#27C93F] rounded" />
                  </div>
                  <div className="flex items-center justify-between p-2 rounded bg-[#0A0A0A] border border-[#1F1F23]">
                    <div className="h-1.5 w-16 bg-[#333333] rounded" />
                    <div className="h-1.5 w-8 bg-[#27C93F] rounded" />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Content */}
            <div className="p-8 flex-1">
              <div className="w-10 h-10 rounded-lg bg-[#1F1F23] flex items-center justify-center mb-6">
                <Layout className="w-5 h-5 text-[#C9A96E]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Programme Management</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-[#C9A96E] shrink-0 mt-0.5" />
                  <span className="text-[#A1A1AA] text-sm">Build multi-module curriculums instantly</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-[#C9A96E] shrink-0 mt-0.5" />
                  <span className="text-[#A1A1AA] text-sm">Manage access via strict invite-only cohorts</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-[#C9A96E] shrink-0 mt-0.5" />
                  <span className="text-[#A1A1AA] text-sm">Automate schedules and calendar invites</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Column 2: Session Delivery */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col bg-[#111113] border border-[#1F1F23] rounded-2xl overflow-hidden hover:border-[#C9A96E]/50 transition-colors"
          >
            {/* UI Preview Block */}
            <div className="h-48 bg-[#0A0A0A] border-b border-[#1F1F23] p-4 flex items-center justify-center relative overflow-hidden">
              <div className="w-full max-w-[240px] bg-[#111113] border border-[#1F1F23] rounded-lg shadow-xl relative z-10 overflow-hidden">
                <div className="h-24 bg-[#1F1F23] relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Video className="w-6 h-6 text-[#A1A1AA]" />
                  </div>
                  <div className="absolute bottom-2 left-2 px-1.5 py-0.5 bg-black/50 backdrop-blur rounded text-[8px] text-white">Speaker View</div>
                </div>
                <div className="p-2 flex gap-1">
                  <div className="flex-1 h-12 bg-[#0A0A0A] border border-[#1F1F23] rounded" />
                  <div className="flex-1 h-12 bg-[#0A0A0A] border border-[#1F1F23] rounded" />
                  <div className="flex-1 h-12 bg-[#0A0A0A] border border-[#1F1F23] rounded" />
                </div>
              </div>
            </div>
            
            {/* Content */}
            <div className="p-8 flex-1">
              <div className="w-10 h-10 rounded-lg bg-[#1F1F23] flex items-center justify-center mb-6">
                <Video className="w-5 h-5 text-[#C9A96E]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Session Delivery</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-[#C9A96E] shrink-0 mt-0.5" />
                  <span className="text-[#A1A1AA] text-sm">Host HD sessions directly in the browser</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-[#C9A96E] shrink-0 mt-0.5" />
                  <span className="text-[#A1A1AA] text-sm">Silent attendance tracking running in background</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-[#C9A96E] shrink-0 mt-0.5" />
                  <span className="text-[#A1A1AA] text-sm">Integrated live chat and session notes</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Column 3: Recordings & Storage */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col bg-[#111113] border border-[#1F1F23] rounded-2xl overflow-hidden hover:border-[#C9A96E]/50 transition-colors"
          >
            {/* UI Preview Block */}
            <div className="h-48 bg-[#0A0A0A] border-b border-[#1F1F23] p-4 flex items-center justify-center relative overflow-hidden">
              <div className="w-full max-w-[240px] relative z-10 grid grid-cols-2 gap-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="bg-[#111113] border border-[#1F1F23] rounded-md p-2 shadow-lg">
                    <div className="h-12 bg-[#0A0A0A] rounded flex items-center justify-center mb-2">
                      <div className="w-4 h-4 rounded-full bg-[#1F1F23] flex items-center justify-center">
                        <div className="w-1.5 h-1.5 rounded-sm bg-[#C9A96E]" />
                      </div>
                    </div>
                    <div className="h-1.5 w-3/4 bg-[#333333] rounded" />
                  </div>
                ))}
              </div>
            </div>
            
            {/* Content */}
            <div className="p-8 flex-1">
              <div className="w-10 h-10 rounded-lg bg-[#1F1F23] flex items-center justify-center mb-6">
                <Database className="w-5 h-5 text-[#C9A96E]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Recordings & Storage</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-[#C9A96E] shrink-0 mt-0.5" />
                  <span className="text-[#A1A1AA] text-sm">Automatic cloud recording processing</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-[#C9A96E] shrink-0 mt-0.5" />
                  <span className="text-[#A1A1AA] text-sm">Strict permission controls per cohort</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-[#C9A96E] shrink-0 mt-0.5" />
                  <span className="text-[#A1A1AA] text-sm">Centralized vault for all materials and videos</span>
                </li>
              </ul>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
