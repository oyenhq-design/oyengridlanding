"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CheckCircle2, Layout, Video, Database, Activity, BarChart3, Users } from "lucide-react"
import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#0B0B0C] pt-32 pb-32 border-b border-[#1F1F23]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="pr-0 lg:pr-8"
          >
            <div className="mb-6">
              <span className="text-[10px] font-bold text-[#A1A1AA] uppercase tracking-[0.2em]">
                STRUCTURED PROGRAMME OPERATING SYSTEM
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
              Run and manage your programmes from a <span className="text-[#C9A96E]">single, structured system.</span>
            </h1>
            
            <p className="text-lg text-[#A1A1AA] mb-8 leading-relaxed max-w-md font-light">
              Consolidate your entire operation into one platform. Built for organisations that need strict control, deep analytics, and scalable delivery.
            </p>
            
            {/* Proof Points */}
            <div className="space-y-3 mb-10">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#C9A96E]" strokeWidth={2} />
                <span className="text-[#D1D1D6] font-medium text-sm tracking-wide">Structured programme delivery</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#C9A96E]" strokeWidth={2} />
                <span className="text-[#D1D1D6] font-medium text-sm tracking-wide">Full participant control</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#C9A96E]" strokeWidth={2} />
                <span className="text-[#D1D1D6] font-medium text-sm tracking-wide">Built for real organisations</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/get-started">
                <Button className="bg-[#C9A96E] hover:bg-[#B39358] text-[#0A0A0B] h-12 px-8 text-sm font-bold rounded-lg shadow-none transition-all w-full sm:w-auto">
                  Get Started
                </Button>
              </Link>
              <Link href="#pricing">
                <Button variant="outline" className="border-white/20 text-white bg-transparent hover:bg-white/5 h-12 px-8 text-sm font-semibold rounded-lg shadow-none transition-all w-full sm:w-auto">
                  Book a Demo
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Right: Layered System UI */}
          <div className="relative h-[500px] sm:h-[600px] w-full mt-10 lg:mt-0 flex items-center justify-center perspective-1000">
            
            {/* Layer 4: Analytics (Background) */}
            <motion.div 
              initial={{ opacity: 0, x: 80, y: -40 }}
              animate={{ opacity: 0.3, x: 60, y: -60 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute w-[280px] sm:w-[340px] bg-[#0A0A0B] border border-white/10 rounded-xl p-4 shadow-2xl backdrop-blur-sm z-10 hidden sm:block"
            >
              <div className="flex items-center gap-2 mb-4 pb-2 border-b border-white/5">
                <BarChart3 className="w-3.5 h-3.5 text-[#A1A1AA]" />
                <span className="text-[10px] text-[#A1A1AA] uppercase tracking-wider font-bold">Analytics Engine</span>
              </div>
              <div className="flex items-end gap-1.5 h-24 mb-2">
                {[40, 60, 45, 80, 55, 90, 75, 85].map((h, i) => (
                  <div key={i} className="flex-1 bg-white/5 border border-white/10 rounded-t-sm" style={{ height: `${h}%` }}>
                    {i === 5 && <div className="w-full h-full bg-[#C9A96E]/20 border-t border-[#C9A96E]" />}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Layer 3: Session View */}
            <motion.div 
              initial={{ opacity: 0, x: 40, y: -20 }}
              animate={{ opacity: 0.6, x: 30, y: -30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute w-[300px] sm:w-[380px] bg-[#111113] border border-white/10 rounded-xl p-4 shadow-[0_20px_40px_rgba(0,0,0,0.4)] backdrop-blur-md z-20"
            >
              <div className="flex items-center gap-2 mb-4 pb-2 border-b border-white/5">
                <Video className="w-3.5 h-3.5 text-[#A1A1AA]" />
                <span className="text-[10px] text-[#A1A1AA] uppercase tracking-wider font-bold">Session Activity</span>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center bg-[#0A0A0B] border border-white/5 p-2 rounded-lg">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#27C93F]" />
                    <span className="text-xs text-[#D1D1D6] font-medium">System Design Deep Dive</span>
                  </div>
                  <span className="text-[10px] text-[#A1A1AA]">Live</span>
                </div>
                <div className="flex justify-between items-center bg-[#0A0A0B] border border-white/5 p-2 rounded-lg">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#C9A96E]" />
                    <span className="text-xs text-[#D1D1D6] font-medium">Recording Processed</span>
                  </div>
                  <span className="text-[10px] text-[#A1A1AA]">420MB</span>
                </div>
              </div>
            </motion.div>

            {/* Layer 2: Programme View */}
            <motion.div 
              initial={{ opacity: 0, x: 0, y: 0 }}
              animate={{ opacity: 0.85, x: -10, y: 10 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute w-[320px] sm:w-[420px] bg-[#0A0A0B] border border-white/15 rounded-xl p-5 shadow-[0_30px_50px_rgba(0,0,0,0.5)] z-30"
            >
              <div className="flex justify-between items-center mb-4 pb-3 border-b border-white/5">
                <div className="flex items-center gap-2">
                  <Layout className="w-4 h-4 text-white" />
                  <span className="text-[10px] text-white uppercase tracking-wider font-bold">Programme Builder</span>
                </div>
                <div className="bg-[#111113] border border-white/10 px-2 py-0.5 rounded text-[9px] text-[#A1A1AA]">Draft</div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-3 bg-[#111113] border border-white/10 rounded-lg border-l-2 border-l-[#C9A96E]">
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 bg-[#0A0A0B] border border-white/10 rounded text-[8px] text-[#A1A1AA] flex items-center justify-center">1</div>
                    <span className="text-xs text-white font-medium">Core Architecture</span>
                  </div>
                  <span className="text-[10px] text-[#A1A1AA]">3 Modules</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-[#111113] border border-white/10 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 bg-[#0A0A0B] border border-white/10 rounded text-[8px] text-[#A1A1AA] flex items-center justify-center">2</div>
                    <span className="text-xs text-[#A1A1AA] font-medium">Advanced Patterns</span>
                  </div>
                  <span className="text-[10px] text-[#555555]">Locked</span>
                </div>
              </div>
            </motion.div>

            {/* Layer 1: Dashboard Overview (Front) */}
            <motion.div 
              initial={{ opacity: 0, x: -40, y: 20 }}
              animate={{ opacity: 1, x: -40, y: 40 }}
              transition={{ duration: 0.8 }}
              className="absolute w-[340px] sm:w-[460px] bg-[#111113] border border-white/20 rounded-xl shadow-[0_40px_80px_rgba(0,0,0,0.6)] z-40 overflow-hidden"
              style={{ backdropFilter: "blur(20px)" }}
            >
              {/* Topbar */}
              <div className="bg-[#0A0A0B]/80 border-b border-white/10 px-4 py-3 flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-[#1A1A1D] border border-white/10 rounded flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-[#C9A96E] rounded-sm" />
                  </div>
                  <span className="text-xs font-semibold text-white tracking-wide">Q3 Engineering Bootcamp</span>
                </div>
                <div className="flex gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-white/20" />
                  <div className="w-2 h-2 rounded-full bg-white/20" />
                  <div className="w-2 h-2 rounded-full bg-white/20" />
                </div>
              </div>
              
              <div className="p-5">
                <div className="flex justify-between items-end mb-4">
                  <div>
                    <h3 className="text-white text-sm font-semibold tracking-tight">Active Overview</h3>
                    <p className="text-[10px] text-[#A1A1AA] mt-0.5">Real-time cohort metrics</p>
                  </div>
                  <div className="flex items-center gap-1 bg-[#0A0A0B] border border-white/10 px-1.5 py-0.5 rounded text-[9px] text-[#A1A1AA]">
                    <span className="w-1 h-1 bg-[#27C93F] rounded-full" />
                    Live
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-[#0A0A0B]/50 border border-white/5 p-3 rounded-lg">
                    <div className="flex items-center gap-1.5 text-[#A1A1AA] mb-1.5">
                      <Users className="w-3 h-3" />
                      <span className="text-[9px] uppercase tracking-wider font-bold">Participants</span>
                    </div>
                    <div className="text-xl font-bold text-white mb-0.5">1,248</div>
                    <div className="text-[#27C93F] text-[9px] font-medium">+12% this week</div>
                  </div>
                  
                  <div className="bg-[#0A0A0B]/50 border border-white/5 p-3 rounded-lg">
                    <div className="flex items-center gap-1.5 text-[#A1A1AA] mb-1.5">
                      <Activity className="w-3 h-3" />
                      <span className="text-[9px] uppercase tracking-wider font-bold">Attendance</span>
                    </div>
                    <div className="text-xl font-bold text-white mb-0.5">94.2%</div>
                    <div className="text-[#A1A1AA] text-[9px]">Stable across modules</div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  )
}
