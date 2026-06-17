"use client";

import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, Globe, Shield, Zap, Activity, Cpu, 
  Users, BarChart3, Settings, Lock, FileCheck, Layers, Boxes, Bot, 
  LineChart, Server, Workflow, Radio, Brain, BookOpen, GraduationCap, 
  Building2, Terminal, Target, AlertCircle, Play, Mail, Sparkles, Check, 
  ChevronRight, HelpCircle, XCircle, CheckCircle2, MessageSquare, Video
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Header, AnnouncementBar } from "@/components/layout/header";
import { FooterPremium } from "@/components/layout/footer";
import { cn } from "@/lib/utils";
import { FinalCTA } from "@/components/sections/final-cta";

export default function BootcampsTrainingPage() {
  const [activeStage, setActiveStage] = useState("programmes");

  const stageVisuals: Record<string, any> = {
    programmes: {
      title: "Programmes Blueprint",
      desc: "Model reusable curriculums with course milestones, modular scheduling, and instructor assignments in one central template.",
      mockup: (
        <div className="space-y-4">
          <div className="flex items-center justify-between border-b border-white/5 pb-3">
            <span className="text-[10px] font-mono text-neutral-500">CURRICULUM BLUEPRINT</span>
            <span className="text-[9px] text-[#E8B84A] font-bold px-2 py-0.5 rounded bg-[#E8B84A]/5">MASTER</span>
          </div>
          <div className="space-y-2.5">
            {[
              { title: "Module 1: Systems Architecture", duration: "Weeks 1-3", status: "Active" },
              { title: "Module 2: Database Infrastructure", duration: "Weeks 4-6", status: "Draft" },
              { title: "Module 3: Global Scale Ops", duration: "Weeks 7-9", status: "Draft" }
            ].map((mod, i) => (
              <div key={i} className="p-3 rounded-lg bg-white/[0.01] border border-white/5 flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold block">{mod.title}</span>
                  <span className="text-[10px] text-neutral-500">{mod.duration}</span>
                </div>
                <span className="text-[9px] font-bold text-neutral-400">{mod.status}</span>
              </div>
            ))}
          </div>
        </div>
      )
    },
    participants: {
      title: "Participants Directory",
      desc: "Access student records, verification keys, active course timelines, and historic performance stats from a clean individual profile.",
      mockup: (
        <div className="space-y-4">
          <div className="flex items-center gap-3 border-b border-white/5 pb-3">
            <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[10px] font-bold">
              AM
            </div>
            <div>
              <span className="text-xs font-bold block">Alex Mercer</span>
              <span className="text-[9px] text-neutral-500">alex@mit.edu</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 text-[10px]">
            <div className="p-2 rounded bg-white/[0.01] border border-white/5">
              <span className="text-neutral-500 block mb-0.5">Live Presence</span>
              <span className="font-bold text-white">98.2%</span>
            </div>
            <div className="p-2 rounded bg-white/[0.01] border border-white/5">
              <span className="text-neutral-500 block mb-0.5">Grades Average</span>
              <span className="font-bold text-white">A- (94%)</span>
            </div>
          </div>
          <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
            <div className="h-full w-[84%] bg-[#E8B84A]" />
          </div>
          <span className="text-[9px] text-neutral-500 block text-right">84% Programme Progress</span>
        </div>
      )
    },
    attendance: {
      title: "Attendance Intelligence",
      desc: "Second-by-second join and leave logs compiled automatically. Eliminate manual rolls and export sponsor-compliant presence reports instantly.",
      mockup: (
        <div className="space-y-4">
          <div className="flex items-center justify-between border-b border-white/5 pb-3">
            <span className="text-[10px] font-mono text-neutral-500">REAL-TIME PRESENCE LOG</span>
            <span className="text-[9px] text-emerald-500 font-bold animate-pulse">MONITORING</span>
          </div>
          <div className="space-y-2">
            {[
              { name: "Sarah Connor", event: "Joined Room", time: "10:00:02" },
              { name: "John Doe", event: "Temporary Disconnect", time: "10:14:22" },
              { name: "John Doe", event: "Reconnected", time: "10:15:01" }
            ].map((log, i) => (
              <div key={i} className="flex justify-between text-[10px] py-1 border-b border-white/[0.02]">
                <span className="font-medium">{log.name}</span>
                <span className="text-neutral-500">{log.event}</span>
                <span className="font-mono text-neutral-400">{log.time}</span>
              </div>
            ))}
          </div>
        </div>
      )
    },
    assessments: {
      title: "Assessments & Submissions",
      desc: "Accept zip files, code links, or proctored essays. Grade, comment, and export registry scores from one centralized grading board.",
      mockup: (
        <div className="space-y-4">
          <div className="flex items-center justify-between border-b border-white/5 pb-3">
            <span className="text-[10px] font-mono text-neutral-500">PENDING SUBMISSIONS</span>
            <span className="text-[9px] text-amber-500 font-bold">4 REVIEW REQUIRED</span>
          </div>
          <div className="p-3 rounded-lg bg-white/[0.01] border border-[#E8B84A]/25 space-y-2">
            <div className="flex justify-between items-center text-xs">
              <span className="font-bold">Project 1: API Endpoint</span>
              <span className="text-[10px] text-neutral-500">Submitted 2h ago</span>
            </div>
            <div className="flex justify-between items-center text-[10px]">
              <span className="text-neutral-400">Git: github.com/alex/api-project</span>
              <button className="px-2 py-0.5 rounded bg-[#E8B84A] text-black font-bold">Grade</button>
            </div>
          </div>
        </div>
      )
    },
    resources: {
      title: "Learning Resources",
      desc: "Host slide decks, manuals, PDFs, and classroom video records. Monitor document reading durations to analyze learner interest.",
      mockup: (
        <div className="space-y-4">
          <div className="flex items-center justify-between border-b border-white/5 pb-3">
            <span className="text-[10px] font-mono text-neutral-500">CURRICULUM FILES</span>
            <span className="text-[9px] text-neutral-500">14 TOTAL</span>
          </div>
          <div className="space-y-2">
            {[
              { name: "Lecture_02_Slides.pdf", size: "4.2 MB", views: "148 Views" },
              { name: "Systems_Spec_v3.docx", size: "1.8 MB", views: "92 Views" }
            ].map((file, i) => (
              <div key={i} className="flex justify-between items-center text-[10px] p-2 rounded bg-white/[0.01] border border-white/5">
                <span className="font-medium">{file.name}</span>
                <span className="text-neutral-500">{file.size}</span>
                <span className="text-[#E8B84A] font-bold">{file.views}</span>
              </div>
            ))}
          </div>
        </div>
      )
    },
    certificates: {
      title: "Verifiable Certificates",
      desc: "Design and issue credentials automatically upon completion. Employers verify certifications directly through a hosted portal.",
      mockup: (
        <div className="h-full flex flex-col justify-between items-center text-center p-4">
          <GraduationCap className="w-12 h-12 text-[#E8B84A] mb-2" />
          <div className="space-y-1">
            <span className="text-xs font-bold block text-white">Alex Mercer</span>
            <span className="text-[9px] text-neutral-500">Systems Engineering Certificate</span>
          </div>
          <div className="mt-4 px-3 py-1 rounded bg-[#E8B84A]/10 border border-[#E8B84A]/25 text-[8px] text-[#E8B84A] font-mono font-bold tracking-widest uppercase">
            CERT ID: OYEN-842-AX3
          </div>
        </div>
      )
    }
  };

  return (
    <>
      <Header />
      <AnnouncementBar />
      
      <div className="min-h-screen bg-[#020203] text-[#F3F4F6] pb-32 overflow-hidden relative font-sans selection:bg-[#E8B84A]/30 selection:text-white">
        
        {/* Soft Ambient Cinematic Glow */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-[radial-gradient(circle_at_50%_-10%,rgba(232,184,74,0.05),transparent_65%)]" />
          <div className="absolute top-[40%] right-[-10%] w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(232,184,74,0.01),transparent_70%)]" />
          <div className="absolute bottom-[20%] left-[-10%] w-[700px] h-[700px] bg-[radial-gradient(circle,rgba(232,184,74,0.015),transparent_70%)]" />
        </div>

        <div className="max-w-[1200px] mx-auto px-8 relative z-10">
          
          {/* =========================================================================
              1. HERO SECTION (Dominating Typography & Calm Premium Visual)
              ========================================================================= */}
          <section className="pt-40 pb-28">
            <div className="grid lg:grid-cols-12 gap-16 items-center">
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="lg:col-span-7 space-y-8"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8B84A]/5 border border-[#E8B84A]/10">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#E8B84A]" />
                  <span className="text-[10px] font-black text-[#E8B84A] uppercase tracking-widest">
                    Built For Modern Bootcamps
                  </span>
                </div>

                <h1 className="text-6xl lg:text-7xl font-bold tracking-tight leading-[0.95] text-white">
                  One Platform.<br />
                  <span className="bg-gradient-to-r from-white via-white/90 to-[#E8B84A] bg-clip-text text-transparent">
                    Complete <br />
                    Coordination.
                  </span>
                </h1>
                
                <p className="text-lg text-neutral-400 leading-relaxed max-w-[500px] font-medium">
                  Manage cohorts, instructors, attendance, assessments, certifications, and learner progress from one platform.
                </p>
                
                <div className="pt-4 flex items-center gap-6">
                  <Link
                    href="#get-started"
                    className="inline-flex h-[52px] px-8 rounded-lg text-xs font-bold bg-[#E8B84A] text-black hover:shadow-[0_0_30px_rgba(232,184,74,0.3)] hover:scale-[1.01] transition-all items-center justify-center"
                  >
                    Start Free Trial
                  </Link>
                  <Link
                    href="#demo"
                    className="inline-flex h-[52px] px-8 rounded-lg text-xs font-bold text-neutral-400 hover:text-white transition-all items-center justify-center"
                  >
                    Book Demo
                  </Link>
                </div>
              </motion.div>

              {/* Right Side: Large Bootcamp Operations Dashboard Visual */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.15 }}
                className="lg:col-span-5"
              >
                <div className="w-full aspect-[4/3] rounded-2xl bg-white/[0.01] border border-white/5 p-6 relative overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.8)] backdrop-blur-xl">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(232,184,74,0.03),transparent_70%)]" />
                  
                  {/* Dashboard Mockup Content */}
                  <div className="h-full flex flex-col justify-between relative z-10">
                    <div className="flex items-center justify-between border-b border-white/5 pb-3">
                      <span className="text-[10px] font-bold tracking-widest text-[#E8B84A] uppercase">OPERATIONS CONTROL</span>
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    </div>

                    <div className="space-y-4 py-4">
                      <div className="flex justify-between items-center text-xs text-neutral-400">
                        <span>Active Cohorts</span>
                        <span className="text-white font-bold">12 Runs</span>
                      </div>
                      <div className="flex justify-between items-center text-xs text-neutral-400">
                        <span>Live Classes</span>
                        <span className="text-white font-bold">4 Streaming</span>
                      </div>
                      <div className="space-y-1">
                        <div className="flex justify-between text-[10px] text-neutral-500">
                          <span>Average Attendance</span>
                          <span>96.8%</span>
                        </div>
                        <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                          <div className="h-full w-[96.8%] bg-[#E8B84A]" />
                        </div>
                      </div>
                      <div className="space-y-1">
                        <div className="flex justify-between text-[10px] text-neutral-500">
                          <span>Cohort Completion Rate</span>
                          <span>94.2%</span>
                        </div>
                        <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                          <div className="h-full w-[94.2%] bg-[#E8B84A]" />
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-between items-center text-[9px] text-neutral-600 font-mono">
                      <span>SECURE SERVER NODES</span>
                      <span>GRID v1.0.2</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* =========================================================================
              2. THE BOOTCAMP CHALLENGE (Problem-focused comparison)
              ========================================================================= */}
          <section className="py-24 border-t border-white/5">
            <div className="space-y-16">
              <div className="space-y-4 max-w-2xl">
                <span className="text-[10px] font-black text-red-500/80 uppercase tracking-widest block">OPERATIONAL FRAGMENTATION</span>
                <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight">
                  Bootcamp Operations Shouldn&apos;t Require 10 Different Tools
                </h2>
              </div>

              <div className="grid lg:grid-cols-2 gap-16 relative">
                {/* Visual before/after layout */}
                <div className="space-y-6">
                  <span className="text-xs font-black text-neutral-500 uppercase tracking-widest block">MESSY WORKFLOW</span>
                  <div className="space-y-3">
                    {[
                      "Manual attendance tracking via Zoom roster exports",
                      "Spreadsheet-based student files and records",
                      "Disconnected Zoom, Meet and Teams virtual rooms",
                      "Scattered learner folders in Drive and Dropbox",
                      "Manual certificate design and distribution",
                      "Blindspots in tracking individual student progress"
                    ].map((issue, idx) => (
                      <div key={idx} className="p-4 rounded-xl bg-red-500/[0.01] border border-red-500/5 flex items-center gap-3 text-neutral-400 text-xs">
                        <XCircle className="w-4 h-4 text-red-500/80 flex-shrink-0" />
                        <span>{issue}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-6">
                  <span className="text-xs font-black text-[#E8B84A] uppercase tracking-widest block">OYEN GRID WORKFLOW</span>
                  <div className="space-y-3">
                    {[
                      "Automatic attendance logger tracking connection time",
                      "A single database profile for student actions & marks",
                      "Built-in classroom workspaces with OYEN Live",
                      "Centralized media libraries for course resources",
                      "Verified certificates issued upon module milestones",
                      "Proactive risk warnings flagging disengaged students"
                    ].map((sol, idx) => (
                      <div key={idx} className="p-4 rounded-xl bg-[#E8B84A]/[0.01] border border-[#E8B84A]/10 flex items-center gap-3 text-white/80 text-xs">
                        <CheckCircle2 className="w-4 h-4 text-[#E8B84A] flex-shrink-0" />
                        <span>{sol}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* =========================================================================
              3. EVERYTHING IN ONE SYSTEM (Unified Stage Tabs)
              ========================================================================= */}
          <section className="py-24 border-t border-white/5">
            <div className="space-y-16">
              <div className="space-y-4 text-center">
                <span className="text-[10px] font-black text-[#E8B84A] uppercase tracking-widest block">PRODUCT PRESENTATION</span>
                <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-white">
                  One Platform For Every Stage Of Delivery
                </h2>
              </div>

              {/* Large Visual Tab Selection */}
              <div className="grid lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-5 space-y-3">
                  {Object.keys(stageVisuals).map((key) => (
                    <button
                      key={key}
                      onClick={() => setActiveStage(key)}
                      className={cn(
                        "w-full p-5 rounded-xl text-left transition-all border block",
                        activeStage === key 
                          ? "bg-white/[0.02] border-[#E8B84A]/30 text-white"
                          : "bg-transparent border-transparent text-neutral-500 hover:text-neutral-300"
                      )}
                    >
                      <h4 className="text-sm font-bold uppercase tracking-wider mb-1">{stageVisuals[key].title}</h4>
                      <p className="text-[11px] leading-relaxed text-neutral-400">
                        {stageVisuals[key].desc}
                      </p>
                    </button>
                  ))}
                </div>

                <div className="lg:col-span-7">
                  <div className="w-full aspect-[1.5] rounded-3xl bg-white/[0.01] border border-white/5 p-8 relative overflow-hidden shadow-2xl backdrop-blur-xl">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(232,184,74,0.03),transparent_70%)]" />
                    <div className="relative z-10 h-full flex flex-col justify-between">
                      {stageVisuals[activeStage].mockup}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* =========================================================================
              4. COHORT MANAGEMENT (Alternating Layout)
              ========================================================================= */}
          <section className="py-24 border-t border-white/5">
            <div className="grid lg:grid-cols-12 gap-16 items-center">
              
              <div className="lg:col-span-6 space-y-6">
                <span className="text-[10px] font-black text-[#E8B84A] uppercase tracking-widest block">ADMINISTRATION</span>
                <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight">
                  Coordinate Every Cohort From A Single Workspace
                </h2>
                <p className="text-neutral-400 text-xs leading-relaxed font-medium">
                  Allocate multiple cohorts, map class slots, assign instructors, manage seats, and monitor progress trajectories from a unified administrative control dashboard.
                </p>
                <div className="grid grid-cols-2 gap-4 text-xs font-bold text-neutral-400 pt-4">
                  <span>• Multiple cohorts</span>
                  <span>• Instructor assignments</span>
                  <span>• Session schedules</span>
                  <span>• Capacity management</span>
                  <span>• Progress tracking</span>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="w-full aspect-[4/3] rounded-2xl bg-white/[0.01] border border-white/5 p-6 relative overflow-hidden shadow-2xl">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(232,184,74,0.02),transparent_70%)]" />
                  <div className="h-full flex flex-col justify-between relative z-10 text-[10px] text-neutral-400 space-y-4">
                    <div className="flex justify-between items-center border-b border-white/5 pb-2">
                      <span className="font-bold text-white">Cohort Registry Overview</span>
                      <span className="text-[#E8B84A] font-bold">4 Cohorts</span>
                    </div>
                    <div className="flex-1 space-y-2.5">
                      {[
                        { cohort: "Software Engineering - Feb", instructor: "David K.", progress: "64%" },
                        { cohort: "Data Science - March", instructor: "Maria G.", progress: "20%" },
                        { cohort: "Product Design - Jan", instructor: "Sarah L.", progress: "90%" }
                      ].map((item, idx) => (
                        <div key={idx} className="p-3 rounded-lg bg-white/[0.01] border border-white/5 flex items-center justify-between">
                          <div>
                            <span className="text-white font-bold block text-xs">{item.cohort}</span>
                            <span className="text-[9px] text-neutral-500">Instructor: {item.instructor}</span>
                          </div>
                          <span className="font-bold text-[#E8B84A]">{item.progress} Completion</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* =========================================================================
              5. LIVE TRAINING DELIVERY (Alternating Layout)
              ========================================================================= */}
          <section className="py-24 border-t border-white/5">
            <div className="grid lg:grid-cols-12 gap-16 items-center">
              
              <div className="lg:col-span-6 order-last lg:order-first">
                <div className="w-full aspect-[1.6] rounded-2xl bg-white/[0.01] border border-white/5 p-6 relative overflow-hidden shadow-2xl flex flex-col justify-between">
                  <div className="flex justify-between items-center border-b border-white/5 pb-3 text-[10px]">
                    <div className="flex items-center gap-2">
                      <Video className="w-3.5 h-3.5 text-[#E8B84A]" />
                      <span className="font-bold text-white">Live Classroom - Node 1</span>
                    </div>
                    <span className="text-[9px] text-[#E8B84A] font-bold">RECORDING ON</span>
                  </div>
                  
                  <div className="flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-[#E8B84A]/10 border border-[#E8B84A]/20 flex items-center justify-center">
                      <Play className="w-4 h-4 text-[#E8B84A] fill-[#E8B84A] translate-x-0.5" />
                    </div>
                  </div>

                  <div className="flex justify-between items-center text-[9px] text-neutral-500">
                    <span>94 Active Learners Connected</span>
                    <span>ATTENDANCE AUTO-LOGGING</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 space-y-6">
                <span className="text-[10px] font-black text-[#E8B84A] uppercase tracking-widest block">INTEGRATED CLASSROOMS</span>
                <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight">
                  Run Classes Without Leaving OYEN GRID
                </h2>
                <p className="text-neutral-400 text-xs leading-relaxed font-medium">
                  Host interactive sessions directly inside OYEN GRID. Connection logs are automatically synced, marking attendance instantly and processing class recordings to the student registry.
                </p>
                <div className="grid grid-cols-2 gap-4 text-xs font-bold text-neutral-400 pt-4">
                  <span>• Built-in virtual classrooms</span>
                  <span>• Automatic attendance logging</span>
                  <span>• Session recordings</span>
                  <span>• Instructor controls</span>
                  <span>• Learner engagement tracking</span>
                </div>
              </div>
            </div>
          </section>

          {/* =========================================================================
              6. AI OPERATIONS (Alternating Layout)
              ========================================================================= */}
          <section className="py-24 border-t border-white/5">
            <div className="grid lg:grid-cols-12 gap-16 items-center">
              
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8B84A]/5 border border-[#E8B84A]/10 mb-2">
                  <Sparkles className="w-3.5 h-3.5 text-[#E8B84A]" />
                  <span className="text-[9px] font-black text-[#E8B84A] uppercase tracking-widest">AI CAPABILITIES</span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight">
                  AI That Helps You Scale Programmes
                </h2>
                <p className="text-neutral-400 text-xs leading-relaxed font-medium">
                  Reduce administrative duties with built-in AI that transcribes session audio, flags students with dropping engagement trends, and assists participants 24/7.
                </p>
                <div className="grid grid-cols-2 gap-4 text-xs font-bold text-neutral-400 pt-4">
                  <span>• Session summaries</span>
                  <span>• Learner risk detection</span>
                  <span>• Progress analysis</span>
                  <span>• AI teaching assistant</span>
                  <span>• Automated reporting</span>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="w-full aspect-[4/3] rounded-2xl bg-white/[0.01] border border-white/5 p-6 relative overflow-hidden shadow-2xl">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(232,184,74,0.02),transparent_70%)]" />
                  <div className="h-full flex flex-col justify-between relative z-10 text-[10px] text-neutral-400 space-y-4">
                    <span className="font-bold text-white border-b border-white/5 pb-2 block">AI Operations Console</span>
                    <div className="p-3 rounded-lg bg-white/[0.01] border border-red-500/20 space-y-1">
                      <span className="text-[9px] text-red-500 font-bold">RISK WARNING</span>
                      <span className="text-white block font-medium">Alex Mercer attendance has dropped below 80%</span>
                    </div>
                    <div className="p-3 rounded-lg bg-white/[0.01] border border-white/5 space-y-1">
                      <span className="text-[9px] text-[#E8B84A] font-bold">AI SESSION TRANSCRIBE</span>
                      <span className="text-neutral-400 block italic leading-normal">
                        &ldquo;Today we covered API setups and database models... Summary generated.&rdquo;
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* =========================================================================
              7. RESULTS (Measurable Outcomes)
              ========================================================================= */}
          <section className="py-24 border-t border-white/5">
            <div className="space-y-16">
              <div className="text-center space-y-4">
                <span className="text-[10px] font-black text-[#E8B84A] uppercase tracking-widest block">OUTCOMES</span>
                <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-white">
                  Built For Results
                </h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  { value: "90%", label: "Less Administrative Work", desc: "Automate attendance sheets, score registers, and manual certifications." },
                  { value: "3x", label: "Faster Cohort Setup", desc: "Launch new programs and schedules in minutes using master templates." },
                  { value: "100%", label: "Attendance Visibility", desc: "Access live arrival, reconnect, and disconnect records automatically." },
                  { value: "Instant", label: "Certificate Generation", desc: "Issue verifiable student certifications upon module completion." }
                ].map((out, idx) => (
                  <div key={idx} className="p-8 rounded-2xl bg-white/[0.01] border border-white/5 flex flex-col justify-between h-[220px] hover:border-[#E8B84A]/25 transition-all">
                    <span className="text-4xl lg:text-5xl font-black text-[#E8B84A] tracking-tight">{out.value}</span>
                    <div className="space-y-2">
                      <h4 className="text-sm font-bold text-white">{out.label}</h4>
                      <p className="text-neutral-400 text-xs leading-relaxed">{out.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>

      <FooterPremium hideCTA={true} />
    </>
  );
}
