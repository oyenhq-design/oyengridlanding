"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Search, Bell, Home, Users, BookOpen, Calendar, Layers, Database, ChevronDown, CheckCircle2, Activity, PlayCircle, BarChart3, MoreHorizontal } from "lucide-react"
import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#0A0A0A] pt-32 pb-24 border-b border-[#1F1F23]">
      {/* Premium Deep Radial Gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] opacity-30 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#C9A96E_0%,transparent_60%)] opacity-20 mix-blend-screen" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#111113_0%,#0A0A0A_100%)] opacity-80" />
      </div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-6">
              <span className="text-[10px] font-bold text-[#A1A1AA] uppercase tracking-[0.2em] bg-clip-text text-transparent bg-gradient-to-r from-[#A1A1AA] to-[#555555]">
                STRUCTURED PROGRAMME OPERATING SYSTEM
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-[72px] font-bold text-white mb-6 leading-[1.05] tracking-tight">
              Run and manage your programmes from a <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#E5D0A1] via-[#C9A96E] to-[#8C6D31]">single, structured system.</span>
            </h1>
            
            <p className="text-lg text-[#A1A1AA] mb-10 leading-relaxed max-w-md font-light">
              Replace fragmented tools with an engineered platform built for absolute structure, granular control, and operational clarity.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/get-started">
                <Button className="bg-gradient-to-b from-[#D4B882] to-[#C9A96E] hover:from-[#E5D0A1] hover:to-[#D4B882] text-[#0A0A0A] h-12 px-8 text-sm font-bold rounded-sm transition-all w-full sm:w-auto shadow-[0_0_20px_rgba(201,169,110,0.15)] border border-[#E5D0A1]/20">
                  Get Started
                </Button>
              </Link>
              <Link href="#pricing">
                <Button variant="outline" className="border-[#1F1F23] bg-gradient-to-b from-[#111113] to-[#0A0A0A] hover:from-[#1A1A1E] hover:to-[#111113] text-white h-12 px-8 text-sm font-semibold transition-all w-full sm:w-auto shadow-none rounded-sm">
                  Book a Demo
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Right: Realistic Dashboard Preview */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-[600px] bg-[#0A0A0A] border border-[#1F1F23] flex overflow-hidden rounded-sm"
          >
            {/* Sidebar */}
            <div className="w-56 border-r border-[#1F1F23] bg-[#0A0A0A] flex flex-col z-10 hidden sm:flex">
              <div className="h-14 border-b border-[#1F1F23] flex items-center px-4">
                <div className="w-5 h-5 bg-[#C9A96E] rounded-sm flex items-center justify-center mr-3">
                  <div className="w-1.5 h-1.5 bg-[#0A0A0A] rounded-full" />
                </div>
                <span className="text-white font-semibold text-xs tracking-wide">OYEN Grid</span>
              </div>
              
              <div className="flex-1 py-4 px-3 space-y-0.5">
                <div className="text-[10px] font-bold text-[#555555] mb-3 px-2 uppercase tracking-[0.15em]">Platform</div>
                
                <div className="flex items-center gap-3 px-2 py-2 bg-[#111113] text-white border-l-2 border-[#C9A96E]">
                  <Home className="w-3.5 h-3.5 text-[#C9A96E]" />
                  <span className="text-xs font-medium">Dashboard</span>
                </div>
                <div className="flex items-center gap-3 px-2 py-2 text-[#A1A1AA] hover:text-white transition-colors cursor-pointer border-l-2 border-transparent">
                  <Layers className="w-3.5 h-3.5" />
                  <span className="text-xs">Programmes</span>
                </div>
                <div className="flex items-center gap-3 px-2 py-2 text-[#A1A1AA] hover:text-white transition-colors cursor-pointer border-l-2 border-transparent">
                  <Calendar className="w-3.5 h-3.5" />
                  <span className="text-xs">Sessions</span>
                </div>
                <div className="flex items-center gap-3 px-2 py-2 text-[#A1A1AA] hover:text-white transition-colors cursor-pointer border-l-2 border-transparent">
                  <Users className="w-3.5 h-3.5" />
                  <span className="text-xs">Participants</span>
                </div>
                <div className="flex items-center gap-3 px-2 py-2 text-[#A1A1AA] hover:text-white transition-colors cursor-pointer border-l-2 border-transparent">
                  <Database className="w-3.5 h-3.5" />
                  <span className="text-xs">Recordings</span>
                </div>
              </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 bg-[#0A0A0A] flex flex-col overflow-hidden">
              {/* Topbar */}
              <div className="h-14 border-b border-[#1F1F23] bg-[#0A0A0A] flex items-center justify-between px-6 z-20">
                <div className="flex items-center gap-2 text-xs text-[#A1A1AA]">
                  <span>Acme Corp</span>
                  <span>/</span>
                  <span className="text-white font-medium">Q3 Engineering Bootcamp</span>
                </div>
                <div className="flex items-center gap-4">
                  <Search className="w-3.5 h-3.5 text-[#A1A1AA]" />
                  <Bell className="w-3.5 h-3.5 text-[#A1A1AA]" />
                  <div className="w-6 h-6 bg-[#111113] border border-[#1F1F23] rounded-sm flex items-center justify-center text-white text-[10px] font-medium">
                    JC
                  </div>
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="flex-1 p-6 overflow-hidden">
                <div className="flex justify-between items-end mb-6">
                  <div>
                    <h2 className="text-white font-semibold text-lg tracking-tight">Overview</h2>
                    <p className="text-[#A1A1AA] text-xs mt-1 font-light">Real-time metrics for active programmes.</p>
                  </div>
                  <div className="bg-[#0A0A0A] border border-[#1F1F23] px-2 py-1 flex items-center gap-2 text-[10px] text-white uppercase tracking-wider rounded-sm">
                    <span>This Week</span>
                    <ChevronDown className="w-3 h-3 text-[#555555]" />
                  </div>
                </div>

                {/* Metrics Cards */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-[#0A0A0A] border border-[#1F1F23] p-4 rounded-sm">
                    <div className="text-[#555555] text-[10px] font-bold uppercase tracking-widest mb-2">Active Participants</div>
                    <div className="text-white font-semibold text-2xl mb-1 tracking-tight">1,248</div>
                    <div className="text-[#27C93F] text-[10px] flex items-center gap-1 font-medium">+124 this week</div>
                  </div>
                  <div className="bg-[#0A0A0A] border border-[#1F1F23] p-4 rounded-sm">
                    <div className="text-[#555555] text-[10px] font-bold uppercase tracking-widest mb-2">Avg Attendance</div>
                    <div className="text-white font-semibold text-2xl mb-1 tracking-tight">94.2%</div>
                    <div className="text-[#27C93F] text-[10px] flex items-center gap-1 font-medium">+2.4% vs last cohort</div>
                  </div>
                </div>

                {/* Activity Feed */}
                <div className="bg-[#0A0A0A] border border-[#1F1F23] rounded-sm overflow-hidden mb-6">
                  <div className="px-4 py-3 border-b border-[#1F1F23] flex justify-between items-center bg-[#111113]">
                    <h3 className="text-white text-xs font-semibold uppercase tracking-wider">Live Activity</h3>
                  </div>
                  <div className="p-0">
                    <div className="flex items-start gap-4 px-4 py-3 border-b border-[#1F1F23] last:border-0">
                      <div className="mt-1">
                        <div className="w-2 h-2 rounded-full bg-[#27C93F]" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <p className="text-white text-sm font-medium">Session Started: System Design Patterns</p>
                          <span className="text-[#A1A1AA] text-[10px] uppercase tracking-wider">10:04 AM</span>
                        </div>
                        <p className="text-[#A1A1AA] text-xs mt-1 font-light">Instructor: Sarah Chen • 42 joined so far</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 px-4 py-3 border-b border-[#1F1F23] last:border-0">
                      <div className="mt-1">
                        <div className="w-2 h-2 rounded-full bg-[#C9A96E]" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <p className="text-white text-sm font-medium">Recording Processed</p>
                          <span className="text-[#A1A1AA] text-[10px] uppercase tracking-wider">09:15 AM</span>
                        </div>
                        <p className="text-[#A1A1AA] text-xs mt-1 font-light">"Intro to Distributed Systems" is now in the vault</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Fade out bottom to indicate scroll */}
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#0A0A0A] to-transparent pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
