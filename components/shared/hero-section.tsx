"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Search, Bell, Home, Users, BookOpen, Calendar, Settings, ChevronDown, CheckCircle2, MoreHorizontal, Activity, Layers, PlayCircle, BarChart3, Database } from "lucide-react"
import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#0A0A0A] pt-32 pb-24 border-b border-[#1F1F23]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#1F1F23] bg-[#111113] mb-8">
              <span className="w-2 h-2 rounded-full bg-[#C9A96E]"></span>
              <span className="text-xs font-medium text-[#A1A1AA] uppercase tracking-widest">Oyen Grid Operating System</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
              Run and manage your programmes from a <span className="text-[#C9A96E]">single, structured system.</span>
            </h1>
            
            <p className="text-lg text-[#A1A1AA] mb-10 leading-relaxed max-w-xl font-light">
              Replace fragmented tools with an engineered platform built for absolute structure, granular control, and operational clarity.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/get-started">
                <Button className="bg-[#C9A96E] hover:bg-[#B39358] text-black px-8 py-6 text-base font-semibold rounded-lg transition-all w-full sm:w-auto shadow-sm">
                  Get Started
                </Button>
              </Link>
              <Link href="#pricing">
                <Button variant="outline" className="border-[#1F1F23] bg-transparent hover:bg-[#111113] text-white px-8 py-6 text-base font-semibold rounded-lg transition-all w-full sm:w-auto">
                  Book a Demo
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Right: Realistic Dashboard Preview */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[600px] rounded-xl bg-[#0A0A0A] border border-[#1F1F23] overflow-hidden shadow-2xl flex"
          >
            {/* Sidebar */}
            <div className="w-56 border-r border-[#1F1F23] bg-[#0A0A0A] flex flex-col z-10 hidden sm:flex">
              <div className="h-14 border-b border-[#1F1F23] flex items-center px-4">
                <div className="w-6 h-6 bg-[#C9A96E] rounded flex items-center justify-center mr-3">
                  <div className="w-2 h-2 bg-black rounded-full" />
                </div>
                <span className="text-white font-semibold text-sm">OYEN Grid</span>
              </div>
              
              <div className="flex-1 py-4 px-3 space-y-1">
                <div className="text-xs font-semibold text-[#A1A1AA] mb-3 px-2 uppercase tracking-wider">Platform</div>
                
                <div className="flex items-center gap-3 px-2 py-2 rounded bg-[#111113] text-white border border-[#1F1F23]">
                  <Home className="w-4 h-4 text-[#C9A96E]" />
                  <span className="text-sm font-medium">Dashboard</span>
                </div>
                <div className="flex items-center gap-3 px-2 py-2 rounded text-[#A1A1AA] hover:bg-[#111113] hover:text-white transition-colors cursor-pointer">
                  <Layers className="w-4 h-4" />
                  <span className="text-sm">Programmes</span>
                </div>
                <div className="flex items-center gap-3 px-2 py-2 rounded text-[#A1A1AA] hover:bg-[#111113] hover:text-white transition-colors cursor-pointer">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">Sessions</span>
                </div>
                <div className="flex items-center gap-3 px-2 py-2 rounded text-[#A1A1AA] hover:bg-[#111113] hover:text-white transition-colors cursor-pointer">
                  <Users className="w-4 h-4" />
                  <span className="text-sm">Participants</span>
                </div>
                <div className="flex items-center gap-3 px-2 py-2 rounded text-[#A1A1AA] hover:bg-[#111113] hover:text-white transition-colors cursor-pointer">
                  <Database className="w-4 h-4" />
                  <span className="text-sm">Recordings</span>
                </div>
              </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 bg-[#111113] flex flex-col overflow-hidden">
              {/* Topbar */}
              <div className="h-14 border-b border-[#1F1F23] bg-[#0A0A0A] flex items-center justify-between px-6 z-20">
                <div className="flex items-center gap-2 text-sm text-[#A1A1AA]">
                  <span>Acme Corp</span>
                  <span>/</span>
                  <span className="text-white font-medium">Q3 Engineering Bootcamp</span>
                </div>
                <div className="flex items-center gap-4">
                  <Search className="w-4 h-4 text-[#A1A1AA]" />
                  <Bell className="w-4 h-4 text-[#A1A1AA]" />
                  <div className="w-7 h-7 rounded bg-[#1F1F23] border border-[#2A2A2E] flex items-center justify-center text-white text-xs font-medium">
                    JD
                  </div>
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="flex-1 p-6 overflow-hidden">
                <div className="flex justify-between items-end mb-6">
                  <div>
                    <h2 className="text-white font-semibold text-xl">Overview</h2>
                    <p className="text-[#A1A1AA] text-sm mt-1">Real-time metrics for your active programmes.</p>
                  </div>
                  <div className="bg-[#0A0A0A] border border-[#1F1F23] rounded-md px-3 py-1.5 flex items-center gap-2 text-xs text-white">
                    <span>This Week</span>
                    <ChevronDown className="w-3 h-3 text-[#A1A1AA]" />
                  </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="bg-[#0A0A0A] border border-[#1F1F23] rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-[#A1A1AA] text-xs font-medium uppercase tracking-wider">Participants</div>
                      <Users className="w-4 h-4 text-[#C9A96E]" />
                    </div>
                    <div className="text-white font-semibold text-2xl mb-1">1,248</div>
                    <div className="text-[#27C93F] text-xs flex items-center gap-1">+12% vs last week</div>
                  </div>
                  <div className="bg-[#0A0A0A] border border-[#1F1F23] rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-[#A1A1AA] text-xs font-medium uppercase tracking-wider">Active Programmes</div>
                      <Layers className="w-4 h-4 text-[#C9A96E]" />
                    </div>
                    <div className="text-white font-semibold text-2xl mb-1">14</div>
                    <div className="text-[#A1A1AA] text-xs flex items-center gap-1">Across 3 departments</div>
                  </div>
                  <div className="bg-[#0A0A0A] border border-[#1F1F23] rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-[#A1A1AA] text-xs font-medium uppercase tracking-wider">Avg Attendance</div>
                      <BarChart3 className="w-4 h-4 text-[#C9A96E]" />
                    </div>
                    <div className="text-white font-semibold text-2xl mb-1">94.2%</div>
                    <div className="text-[#27C93F] text-xs flex items-center gap-1">+2.4% vs last week</div>
                  </div>
                </div>

                {/* Live Activity Feed */}
                <div className="bg-[#0A0A0A] border border-[#1F1F23] rounded-lg overflow-hidden">
                  <div className="px-5 py-4 border-b border-[#1F1F23] flex justify-between items-center">
                    <h3 className="text-white text-sm font-medium flex items-center gap-2">
                      <Activity className="w-4 h-4 text-[#C9A96E]" />
                      Live Session Activity
                    </h3>
                    <MoreHorizontal className="w-4 h-4 text-[#A1A1AA]" />
                  </div>
                  <div className="p-0">
                    <div className="flex items-start gap-4 px-5 py-4 border-b border-[#1F1F23] last:border-0 hover:bg-[#111113] transition-colors">
                      <div className="w-8 h-8 rounded-full bg-[#1F1F23] flex items-center justify-center mt-0.5">
                        <PlayCircle className="w-4 h-4 text-[#A1A1AA]" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <p className="text-white text-sm font-medium">Advanced React Patterns started</p>
                          <span className="text-[#A1A1AA] text-xs">Just now</span>
                        </div>
                        <p className="text-[#A1A1AA] text-xs mt-1">Instructor: Sarah Chen • 42 participants joined</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 px-5 py-4 border-b border-[#1F1F23] last:border-0 hover:bg-[#111113] transition-colors">
                      <div className="w-8 h-8 rounded-full bg-[#1F1F23] flex items-center justify-center mt-0.5">
                        <CheckCircle2 className="w-4 h-4 text-[#27C93F]" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <p className="text-white text-sm font-medium">Module 3 Recording Processed</p>
                          <span className="text-[#A1A1AA] text-xs">15 mins ago</span>
                        </div>
                        <p className="text-[#A1A1AA] text-xs mt-1">Available in Q3 Engineering Bootcamp vault</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Fade out bottom to indicate scroll */}
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#111113] to-transparent pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
