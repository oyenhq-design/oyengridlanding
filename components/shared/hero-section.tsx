"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CheckCircle2, Layout, Video, BarChart3, Users, Activity } from "lucide-react"
import { motion, useMotionValue, useSpring, useTransform, animate } from "framer-motion"

export function HeroSection() {
  // Mouse Parallax Setup
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { damping: 30, stiffness: 100 }
  const mouseXSpring = useSpring(mouseX, springConfig)
  const mouseYSpring = useSpring(mouseY, springConfig)

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    mouseX.set(x)
    mouseY.set(y)
  }

  // Number Counter Animation
  const [participantsCount, setParticipantsCount] = useState(1200)
  
  useEffect(() => {
    const controls = animate(1200, 1248, {
      duration: 1.5,
      delay: 0.8,
      ease: "easeOut",
      onUpdate(value) {
        setParticipantsCount(Math.floor(value))
      }
    })
    return () => controls.stop()
  }, [])

  return (
    <section 
      className="relative overflow-hidden bg-[#0B0B0C] pt-32 pb-32 border-b border-[#1F1F23]"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        mouseX.set(0)
        mouseY.set(0)
      }}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          
          {/* Left: Content */}
          <div className="pr-0 lg:pr-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="mb-6"
            >
              <span className="text-[10px] font-bold text-[#A1A1AA] uppercase tracking-[0.2em]">
                STRUCTURED PROGRAMME OPERATING SYSTEM
              </span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
              className="text-5xl md:text-6xl font-bold text-white mb-6 leading-[1.1] tracking-tight"
            >
              Run and manage your programmes from a <span className="text-[#C9A96E]">single, structured system.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" }}
              className="text-lg text-[#A1A1AA] mb-8 leading-relaxed max-w-md font-light"
            >
              Consolidate your entire operation into one platform. Built for organisations that need strict control, deep analytics, and scalable delivery.
            </motion.p>
            
            {/* Proof Points */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35, ease: "easeOut" }}
              className="space-y-3 mb-10"
            >
              {[
                "Structured programme delivery",
                "Full participant control",
                "Built for real organisations"
              ].map((point, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#C9A96E]" strokeWidth={2} />
                  <span className="text-[#D1D1D6] font-medium text-sm tracking-wide">{point}</span>
                </div>
              ))}
            </motion.div>

            {/* Actions */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="/get-started">
                <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.2 }}>
                  <Button className="bg-[#C9A96E] hover:bg-[#C9A96E] text-[#0A0A0B] h-12 px-8 text-sm font-bold rounded-lg shadow-[0_0_15px_rgba(201,169,110,0.2)] transition-shadow hover:shadow-[0_0_25px_rgba(201,169,110,0.4)] w-full sm:w-auto">
                    Get Started
                  </Button>
                </motion.div>
              </Link>
              <Link href="#pricing">
                <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.2 }}>
                  <Button variant="outline" className="border-white/20 text-white bg-transparent hover:bg-white/5 h-12 px-8 text-sm font-semibold rounded-lg shadow-none w-full sm:w-auto">
                    Book a Demo
                  </Button>
                </motion.div>
              </Link>
            </motion.div>
          </div>

          {/* Right: Layered System UI */}
          <div className="relative h-[500px] sm:h-[600px] w-full mt-10 lg:mt-0 flex items-center justify-center perspective-1000">
            
            {/* Layer 4: Analytics (Background) */}
            <motion.div 
              initial={{ opacity: 0, y: -30, x: 60, scale: 0.98 }}
              animate={{ opacity: 0.3, y: -60, x: 60, scale: 1 }}
              transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
              style={{
                x: useTransform(mouseXSpring, [-0.5, 0.5], [57, 63]),
                y: useTransform(mouseYSpring, [-0.5, 0.5], [-63, -57])
              }}
              className="absolute w-[280px] sm:w-[340px] bg-[#0A0A0B] border border-white/10 rounded-xl p-4 shadow-2xl backdrop-blur-sm z-10 hidden sm:block will-change-transform"
            >
              <motion.div 
                animate={{ y: [0, -4, 0] }} 
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <div className="flex items-center gap-2 mb-4 pb-2 border-b border-white/5">
                  <BarChart3 className="w-3.5 h-3.5 text-[#A1A1AA]" />
                  <span className="text-[10px] text-[#A1A1AA] uppercase tracking-wider font-bold">Analytics Engine</span>
                </div>
                <div className="flex items-end gap-1.5 h-24 mb-2">
                  {[40, 60, 45, 80, 55, 90, 75, 85].map((h, i) => (
                    <div key={i} className="flex-1 bg-white/5 border border-white/10 rounded-t-sm h-full flex items-end">
                      <motion.div 
                        initial={{ height: 0 }}
                        animate={{ height: `${h}%` }}
                        transition={{ duration: 1.5, delay: 1 + (i * 0.1), ease: "easeOut" }}
                        className="w-full bg-white/10"
                      />
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Layer 3: Session View */}
            <motion.div 
              initial={{ opacity: 0, y: 0, x: 30, scale: 0.98 }}
              animate={{ opacity: 0.6, y: -30, x: 30, scale: 1 }}
              transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
              style={{
                x: useTransform(mouseXSpring, [-0.5, 0.5], [26, 34]),
                y: useTransform(mouseYSpring, [-0.5, 0.5], [-34, -26])
              }}
              whileHover={{ y: -34, borderColor: "rgba(255,255,255,0.2)", opacity: 0.75, transition: { duration: 0.3 } }}
              className="absolute w-[300px] sm:w-[380px] bg-[#111113] border border-white/10 rounded-xl p-4 shadow-[0_20px_40px_rgba(0,0,0,0.4)] backdrop-blur-md z-20 will-change-transform cursor-default"
            >
              <motion.div 
                animate={{ y: [0, -5, 0] }} 
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                <div className="flex items-center gap-2 mb-4 pb-2 border-b border-white/5">
                  <Video className="w-3.5 h-3.5 text-[#A1A1AA]" />
                  <span className="text-[10px] text-[#A1A1AA] uppercase tracking-wider font-bold">Session Activity</span>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center bg-[#0A0A0B] border border-white/5 p-2 rounded-lg">
                    <div className="flex items-center gap-2">
                      <motion.div 
                        animate={{ scale: [1, 1.2, 1], opacity: [0.6, 1, 0.6] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="w-2 h-2 rounded-full bg-[#27C93F]" 
                      />
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
            </motion.div>

            {/* Layer 2: Programme View */}
            <motion.div 
              initial={{ opacity: 0, y: 30, x: -10, scale: 0.98 }}
              animate={{ opacity: 0.85, y: 10, x: -10, scale: 1 }}
              transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
              style={{
                x: useTransform(mouseXSpring, [-0.5, 0.5], [-16, -4]),
                y: useTransform(mouseYSpring, [-0.5, 0.5], [4, 16])
              }}
              whileHover={{ y: 6, borderColor: "rgba(255,255,255,0.25)", opacity: 1, transition: { duration: 0.3 } }}
              className="absolute w-[320px] sm:w-[420px] bg-[#0A0A0B] border border-white/15 rounded-xl p-5 shadow-[0_30px_50px_rgba(0,0,0,0.5)] z-30 will-change-transform cursor-default"
            >
              <motion.div 
                animate={{ y: [0, -6, 0] }} 
                transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
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
            </motion.div>

            {/* Layer 1: Dashboard Overview (Front) */}
            <motion.div 
              initial={{ opacity: 0, y: 70, x: -40, scale: 0.98 }}
              animate={{ opacity: 1, y: 40, x: -40, scale: 1 }}
              transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
              style={{
                x: useTransform(mouseXSpring, [-0.5, 0.5], [-50, -30]),
                y: useTransform(mouseYSpring, [-0.5, 0.5], [30, 50]),
                backdropFilter: "blur(20px)"
              }}
              whileHover={{ y: 36, borderColor: "rgba(255,255,255,0.3)", boxShadow: "0 50px 100px rgba(0,0,0,0.8)", transition: { duration: 0.3 } }}
              className="absolute w-[340px] sm:w-[460px] bg-[#111113]/90 border border-white/20 rounded-xl shadow-[0_40px_80px_rgba(0,0,0,0.6)] z-40 overflow-hidden will-change-transform cursor-default"
            >
              <motion.div 
                animate={{ y: [0, -7, 0] }} 
                transition={{ duration: 8.5, repeat: Infinity, ease: "easeInOut", delay: 0 }}
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
                      <motion.span 
                        animate={{ scale: [1, 1.2, 1], opacity: [0.6, 1, 0.6] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        className="w-1 h-1 bg-[#27C93F] rounded-full" 
                      />
                      Live
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-[#0A0A0B]/50 border border-white/5 p-3 rounded-lg relative overflow-hidden">
                      <div className="flex items-center gap-1.5 text-[#A1A1AA] mb-1.5">
                        <Users className="w-3 h-3" />
                        <span className="text-[9px] uppercase tracking-wider font-bold">Participants</span>
                      </div>
                      <div className="text-xl font-bold text-white mb-0.5">
                        {participantsCount.toLocaleString()}
                      </div>
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
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  )
}
