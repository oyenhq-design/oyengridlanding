"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Search, Bell, Menu, Home, Users, BookOpen, Calendar, Settings, ChevronDown, CheckCircle2, MoreHorizontal } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#0B0B0F] pt-32 pb-20 border-b border-[#1F1F1F]">
      {/* Subtle gold glow background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-24 left-1/4 w-[600px] h-[300px] bg-[#C8A95A] opacity-10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/4 w-[500px] h-[400px] bg-[#C8A95A] opacity-[0.05] rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              <span className="relative inline-block">
                <span className="z-10 relative">Run and manage your <span className="text-[#C8A95A] drop-shadow-[0_0_12px_rgba(200,169,90,0.4)]">programmes</span></span>
                <span className="absolute left-0 right-0 bottom-2 h-3 bg-[#C8A95A] opacity-15 blur-lg rounded-full -z-1" />
              </span>
              <br />from a single, structured system
            </h1>
            <p className="text-lg text-[#A1A1AA] mb-8 leading-relaxed max-w-xl">
              OYEN Grid gives you total control, structure, and clarity for every programme, session, and participant — all in one place. Built for organisations that demand reliability and scale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/app">
                <Button className="bg-[#C8A95A] hover:bg-[#D4B86A] text-black px-8 py-6 text-lg font-semibold rounded-lg shadow-lg shadow-[#C8A95A]/20 transition-all w-full sm:w-auto">
                  Get Started
                </Button>
              </Link>
              <Link href="#pricing">
                <Button variant="outline" className="border-[#1F1F1F] bg-[#121212] hover:border-[#C8A95A] text-white px-8 py-6 text-lg font-semibold rounded-lg hover:bg-[#C8A95A]/5 transition-all w-full sm:w-auto">
                  Book Demo
                  <ArrowRight className="ml-2 w-5 h-5 text-[#C8A95A]" />
                </Button>
              </Link>
            </div>
            
            <div className="mt-12 flex items-center gap-4 text-sm text-[#A1A1AA]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C8A95A]" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C8A95A]" />
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>

          {/* Right: Realistic Dashboard Preview */}
          <div className="relative h-[550px] rounded-2xl bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] border border-[#2A2A2A] overflow-hidden shadow-2xl shadow-black/80 flex">
            {/* Topbar Simulation */}
            <div className="absolute top-0 left-0 right-0 h-12 border-b border-[#1F1F1F] bg-[#111111]/80 backdrop-blur-md flex items-center justify-between px-4 z-20">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
              </div>
              <div className="flex items-center gap-4">
                <Search className="w-4 h-4 text-[#A1A1AA]" />
                <Bell className="w-4 h-4 text-[#A1A1AA]" />
                <div className="w-6 h-6 rounded-full bg-[#C8A95A] flex items-center justify-center text-black text-xs font-bold">OG</div>
              </div>
            </div>

            {/* Sidebar Simulation */}
            <div className="w-48 border-r border-[#1F1F1F] bg-[#0B0B0F] pt-16 flex flex-col z-10 hidden sm:flex">
              <div className="px-4 mb-6 flex items-center gap-2">
                <div className="w-6 h-6 bg-[#C8A95A] rounded-md flex items-center justify-center">
                  <div className="w-2 h-2 bg-black rounded-full" />
                </div>
                <span className="text-white font-semibold text-sm">OYEN Grid</span>
              </div>
              <div className="flex-1 flex flex-col gap-1 px-2">
                <div className="flex items-center gap-3 px-3 py-2 rounded-lg bg-[#C8A95A]/10 text-[#C8A95A]">
                  <Home className="w-4 h-4" />
                  <span className="text-sm font-medium">Overview</span>
                </div>
                <div className="flex items-center gap-3 px-3 py-2 rounded-lg text-[#A1A1AA] hover:bg-[#121212]">
                  <BookOpen className="w-4 h-4" />
                  <span className="text-sm font-medium">Programmes</span>
                </div>
                <div className="flex items-center gap-3 px-3 py-2 rounded-lg text-[#A1A1AA] hover:bg-[#121212]">
                  <Users className="w-4 h-4" />
                  <span className="text-sm font-medium">Participants</span>
                </div>
                <div className="flex items-center gap-3 px-3 py-2 rounded-lg text-[#A1A1AA] hover:bg-[#121212]">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm font-medium">Sessions</span>
                </div>
              </div>
              <div className="p-4 border-t border-[#1F1F1F]">
                <div className="flex items-center gap-3 px-2 text-[#A1A1AA]">
                  <Settings className="w-4 h-4" />
                  <span className="text-sm">Settings</span>
                </div>
              </div>
            </div>

            {/* Main Content Area Simulation */}
            <div className="flex-1 bg-[#0A0A0A] pt-16 p-6 overflow-hidden">
              <div className="flex justify-between items-end mb-6">
                <div>
                  <h2 className="text-white font-bold text-lg">Dashboard</h2>
                  <p className="text-[#A1A1AA] text-xs">Welcome back, here's what's happening today.</p>
                </div>
                <div className="bg-[#121212] border border-[#1F1F1F] rounded-md px-3 py-1.5 flex items-center gap-2 text-xs text-white">
                  <span>Last 30 Days</span>
                  <ChevronDown className="w-3 h-3 text-[#A1A1AA]" />
                </div>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-[#121212] border border-[#1F1F1F] rounded-xl p-4">
                  <div className="text-[#A1A1AA] text-xs mb-2">Total Participants</div>
                  <div className="text-white font-bold text-xl mb-1">1,248</div>
                  <div className="text-[#27C93F] text-[10px] flex items-center gap-1">↑ 12% from last month</div>
                </div>
                <div className="bg-[#121212] border border-[#1F1F1F] rounded-xl p-4">
                  <div className="text-[#A1A1AA] text-xs mb-2">Active Programmes</div>
                  <div className="text-white font-bold text-xl mb-1">14</div>
                  <div className="text-[#27C93F] text-[10px] flex items-center gap-1">↑ 2 new this week</div>
                </div>
                <div className="bg-[#121212] border border-[#1F1F1F] rounded-xl p-4 relative overflow-hidden">
                  <div className="absolute right-0 bottom-0 w-16 h-16 bg-[#C8A95A]/10 rounded-tl-full" />
                  <div className="text-[#C8A95A] text-xs mb-2 font-medium">Upcoming Session</div>
                  <div className="text-white font-bold text-sm mb-1 truncate">Q2 Leadership Training</div>
                  <div className="text-[#A1A1AA] text-[10px]">In 45 minutes</div>
                </div>
              </div>

              {/* Table Simulation */}
              <div className="bg-[#121212] border border-[#1F1F1F] rounded-xl overflow-hidden">
                <div className="px-4 py-3 border-b border-[#1F1F1F] flex justify-between items-center">
                  <h3 className="text-white text-sm font-medium">Recent Enrolments</h3>
                  <MoreHorizontal className="w-4 h-4 text-[#A1A1AA]" />
                </div>
                <div className="p-0">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-center justify-between px-4 py-3 border-b border-[#1F1F1F]/50 last:border-0">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-[#1F1F1F] flex items-center justify-center text-[#A1A1AA] text-xs">
                          {String.fromCharCode(64 + i)}
                        </div>
                        <div>
                          <div className="text-white text-xs font-medium">Participant Name {i}</div>
                          <div className="text-[#A1A1AA] text-[10px]">Engineering Bootcamp</div>
                        </div>
                      </div>
                      <div className="px-2 py-1 rounded bg-[#27C93F]/10 text-[#27C93F] text-[10px] font-medium">
                        Active
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Gradient Overlay for bottom fade out */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0A0A0A] to-transparent pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  )
}
