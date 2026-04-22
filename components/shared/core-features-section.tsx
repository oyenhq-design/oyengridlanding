"use client"

import { motion } from "framer-motion"
import { Layout, Video, Database } from "lucide-react"
import { fadeUpVariant, staggerContainerVariant, staggerItemVariant } from "@/lib/motion"

export function CoreFeaturesSection() {
  return (
    <section className="py-32 bg-[#FAFAF9] border-b border-[#E5E5E5] overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUpVariant}
          className="mb-24"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#111111] mb-4 tracking-tight">
            Everything your organisation needs <span className="text-[#A1A1AA] font-light">— in one system</span>
          </h2>
        </motion.div>

        <motion.div 
          variants={staggerContainerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
        >
          
          {/* Column 1: Programme Management */}
          <motion.div 
            variants={staggerItemVariant}
            whileHover={{ y: -4, boxShadow: "0 10px 30px rgba(0,0,0,0.05)" }}
            transition={{ duration: 0.2 }}
            className="flex flex-col bg-[#FFFFFF] border border-[#E5E5E5] hover:border-[#D1D1D6] p-8 rounded-sm shadow-sm transition-colors"
          >
            {/* Minimal Header */}
            <div className="flex flex-col mb-8">
              <Layout className="w-5 h-5 text-[#C9A96E] mb-4" strokeWidth={1.5} />
              <h3 className="text-xl font-semibold text-[#111111] mb-3 tracking-tight">Programme Management</h3>
              <p className="text-[#555555] text-sm leading-relaxed font-light">
                Build multi-module curriculums, manage strict access control via invite-only cohorts, and fully automate calendar schedules.
              </p>
            </div>

            {/* UI Preview Block */}
            <div className="mt-auto pt-6 border-t border-[#E5E5E5]">
              <div className="w-full bg-[#FAFAF9] border border-[#E5E5E5] rounded-sm p-4">
                <div className="flex items-center gap-2 mb-3 border-b border-[#E5E5E5] pb-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#C9A96E]" />
                  <div className="text-[10px] font-bold text-[#111111] uppercase tracking-wider">Cohort A Structure</div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-2 rounded-sm bg-[#FFFFFF] border border-[#E5E5E5] shadow-sm">
                    <span className="text-[10px] font-medium text-[#111111]">Module 1: Foundations</span>
                    <span className="text-[10px] text-[#27C93F] bg-[#27C93F]/10 px-1.5 rounded-sm font-semibold">Active</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded-sm bg-[#FAFAF9] border border-[#E5E5E5]">
                    <span className="text-[10px] font-medium text-[#A1A1AA]">Module 2: Advanced</span>
                    <span className="text-[10px] text-[#A1A1AA]">Locked</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Column 2: Session Delivery */}
          <motion.div 
            variants={staggerItemVariant}
            whileHover={{ y: -4, boxShadow: "0 10px 30px rgba(0,0,0,0.05)" }}
            transition={{ duration: 0.2 }}
            className="flex flex-col bg-[#FFFFFF] border border-[#E5E5E5] hover:border-[#D1D1D6] p-8 rounded-sm shadow-sm transition-colors"
          >
            {/* Minimal Header */}
            <div className="flex flex-col mb-8">
              <Video className="w-5 h-5 text-[#C9A96E] mb-4" strokeWidth={1.5} />
              <h3 className="text-xl font-semibold text-[#111111] mb-3 tracking-tight">Session Delivery</h3>
              <p className="text-[#555555] text-sm leading-relaxed font-light">
                Host HD sessions natively. Silent attendance tracking runs entirely in the background while chat and notes stay integrated.
              </p>
            </div>

            {/* UI Preview Block */}
            <div className="mt-auto pt-6 border-t border-[#E5E5E5]">
              <div className="w-full bg-[#FAFAF9] border border-[#E5E5E5] rounded-sm overflow-hidden flex flex-col">
                <div className="h-20 bg-[#F0F0F0] relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Video className="w-5 h-5 text-[#A1A1AA]" />
                  </div>
                  <div className="absolute bottom-1.5 left-1.5 bg-[#FFFFFF] border border-[#E5E5E5] px-1.5 py-0.5 rounded-sm text-[8px] text-[#111111] font-semibold">S. Chen</div>
                </div>
                <div className="h-12 border-t border-[#E5E5E5] bg-[#FFFFFF] flex gap-1 p-1">
                  <div className="flex-1 bg-[#F0F0F0] border border-[#E5E5E5] rounded-sm" />
                  <div className="flex-1 bg-[#F0F0F0] border border-[#E5E5E5] rounded-sm" />
                  <div className="flex-1 bg-[#F0F0F0] border border-[#E5E5E5] rounded-sm" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Column 3: Recordings & Storage */}
          <motion.div 
            variants={staggerItemVariant}
            whileHover={{ y: -4, boxShadow: "0 10px 30px rgba(0,0,0,0.05)" }}
            transition={{ duration: 0.2 }}
            className="flex flex-col bg-[#FFFFFF] border border-[#E5E5E5] hover:border-[#D1D1D6] p-8 rounded-sm shadow-sm transition-colors"
          >
            {/* Minimal Header */}
            <div className="flex flex-col mb-8">
              <Database className="w-5 h-5 text-[#C9A96E] mb-4" strokeWidth={1.5} />
              <h3 className="text-xl font-semibold text-[#111111] mb-3 tracking-tight">Recordings & Storage</h3>
              <p className="text-[#555555] text-sm leading-relaxed font-light">
                Securely host an automated cloud vault for your sessions. Permission controls ensure materials stay within specific cohorts.
              </p>
            </div>

            {/* UI Preview Block */}
            <div className="mt-auto pt-6 border-t border-[#E5E5E5]">
              <div className="w-full grid grid-cols-2 gap-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="border border-[#E5E5E5] bg-[#FAFAF9] rounded-sm p-2">
                    <div className="h-10 bg-[#FFFFFF] border border-[#E5E5E5] rounded-sm flex items-center justify-center mb-2 shadow-sm">
                      <div className="w-4 h-4 rounded-full bg-[#F0F0F0] flex items-center justify-center border border-[#E5E5E5]">
                        <div className="w-1.5 h-1.5 rounded-sm bg-[#C9A96E]" />
                      </div>
                    </div>
                    <div className="text-[8px] text-[#111111] font-semibold truncate mb-0.5">Session_{i}_Rec.mp4</div>
                    <div className="text-[7px] text-[#A1A1AA]">420MB</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  )
}
