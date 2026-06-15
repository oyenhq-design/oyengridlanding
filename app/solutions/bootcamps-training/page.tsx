"use client";

import { motion } from "framer-motion";
import { 
  ArrowRight, Globe, Shield, Zap, Activity, Cpu, 
  Users, BarChart3, Settings, Lock, FileCheck, Layers, Boxes, Bot, 
  LineChart, Server, Workflow, Radio, Brain, BookOpen, GraduationCap, 
  Building2, Terminal, Target, AlertCircle, Play, Mail, Sparkles, Check, 
  ChevronRight, HelpCircle
} from "lucide-react";
import Link from "next/link";
import { Header, AnnouncementBar } from "@/components/layout/header";
import { FooterPremium } from "@/components/layout/footer";

export default function BootcampsTrainingPage() {
  return (
    <>
      <Header />
      <AnnouncementBar />
      
      <div className="min-h-screen bg-[#02040A] text-white pb-32 overflow-hidden relative font-sans selection:bg-[#E8B84A]/30 selection:text-white">
        
        {/* Soft Ambient Cinematic Glow */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[radial-gradient(circle_at_50%_-20%,rgba(232,184,74,0.05),transparent_70%)]" />
          <div className="absolute top-[35%] left-1/4 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(232,184,74,0.015),transparent_60%)]" />
          <div className="absolute bottom-[20%] right-1/4 w-[700px] h-[700px] bg-[radial-gradient(circle,rgba(232,184,74,0.02),transparent_65%)]" />
        </div>

        <div className="max-w-[1200px] mx-auto px-8 relative z-10">
          
          {/* =========================================================================
              1. HERO SECTION (Spacious, Calm, Borderless)
              ========================================================================= */}
          <section className="pt-36 pb-32">
            <div className="grid lg:grid-cols-12 gap-16 items-center">
              
              {/* Left Side: Dominating Typography */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="lg:col-span-7 space-y-8"
              >
                <h1 className="text-6xl lg:text-8xl font-bold tracking-tight leading-[0.95] text-white">
                  One Platform.<br />
                  <span className="bg-gradient-to-br from-white via-white to-white/40 bg-clip-text text-transparent">
                    Complete <br />
                    Coordination.
                  </span>
                </h1>
                
                <p className="text-lg text-white/50 leading-relaxed max-w-[520px] font-medium">
                  A unified operating system for cohort delivery. Coordinate instructors, track real-time attendance, and issue certificates without stitching separate tools together.
                </p>
                
                <div className="pt-4 flex items-center gap-6">
                  <Link
                    href="#get-started"
                    className="inline-flex h-[52px] px-8 rounded-lg text-xs font-bold bg-[#E8B84A] text-black hover:shadow-[0_0_30px_rgba(232,184,74,0.25)] hover:scale-[1.01] transition-all items-center justify-center"
                  >
                    Start Free Trial
                  </Link>
                  <Link
                    href="#demo"
                    className="inline-flex h-[52px] px-8 rounded-lg text-xs font-bold text-white/70 hover:text-white transition-all items-center justify-center"
                  >
                    Book Demo
                  </Link>
                </div>
              </motion.div>

              {/* Right Side: Clean Premium Dashboard Preview (Borderless UI) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.15 }}
                className="lg:col-span-5 relative"
              >
                <div className="w-full aspect-[4/3] rounded-2xl bg-white/[0.02] border border-white/5 p-6 relative overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.6)]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(232,184,74,0.03),transparent_70%)]" />
                  
                  {/* Clean UI mockup */}
                  <div className="h-full flex flex-col justify-between relative z-10">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold tracking-widest text-[#E8B84A] uppercase">Active Session Node</span>
                      <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    </div>
                    
                    <div className="space-y-4 py-8">
                      <div className="h-2 w-2/3 bg-white/5 rounded" />
                      <div className="h-2 w-1/2 bg-white/5 rounded" />
                      <div className="h-10 w-full bg-white/[0.01] border border-white/5 rounded-lg flex items-center justify-between px-4">
                        <span className="text-[11px] text-white/40">Completion status</span>
                        <span className="text-[11px] text-white/90 font-bold">94.8%</span>
                      </div>
                    </div>

                    <div className="flex justify-between items-center text-[9px] text-white/30 font-mono">
                      <span>SYNC: OPERATIONAL</span>
                      <span>GRID v1.0.2</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* =========================================================================
              2. BUILT FOR (Minimalist Cards, Wide Spacing)
              ========================================================================= */}
          <section className="py-32">
            <div className="space-y-16">
              <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-white/90">
                Built For Modern Training Organizations
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
                {[
                  { title: "Bootcamps", desc: "Accelerate transition to employment with clean cohort scheduling, grading workflows, and automated certificates." },
                  { title: "Training Organizations", desc: "Coordinate large-scale curriculum delivery, facilitator assignments, and student records without spreadsheet sprawl." },
                  { title: "Fellowship Programmes", desc: "Run prestigious fellowships with built-in scheduling, community channels, and detailed participant analytics." },
                  { title: "Workforce Development", desc: "Deliver funded or corporate initiatives with secure, audit-ready attendance logging and sponsor reporting." }
                ].map((org, idx) => (
                  <div key={idx} className="space-y-4">
                    <h3 className="text-lg font-bold text-[#E8B84A]">{org.title}</h3>
                    <p className="text-white/40 text-xs leading-relaxed font-medium">
                      {org.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* =========================================================================
              3. ONE PLATFORM. COMPLETE COORDINATION.
              ========================================================================= */}
          <section className="py-32">
            <div className="grid lg:grid-cols-12 gap-16 items-center">
              
              <div className="lg:col-span-5 space-y-8">
                <h2 className="text-3xl lg:text-5xl font-bold tracking-tight text-white leading-[1.05]">
                  One Platform.<br />
                  <span className="bg-gradient-to-r from-white via-white to-white/40 bg-clip-text text-transparent">Complete Coordination.</span>
                </h2>
                <p className="text-white/40 text-sm leading-relaxed font-medium">
                  Instead of layering disconnected tools, OYEN GRID unifies the entire programme delivery lifecycle under a single operational infrastructure.
                </p>
              </div>

              {/* Minimalist Map of Integrated Core Items */}
              <div className="lg:col-span-7">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                  {[
                    { label: "Programmes", desc: "Design reusable templates for lesson plans, session times, and milestones." },
                    { label: "Participants", desc: "A single student profile tracking live attendance, grades, and files." },
                    { label: "Attendance", desc: "Capture presence logs down to the second without manual roll calls." },
                    { label: "Resources", desc: "Distribute lecture recordings, reading lists, and files inside the classroom." },
                    { label: "Assessments", desc: "Collect project files, grade submissions, and provide feedback in one workspace." },
                    { label: "Certificates", desc: "Automatically generate and issue secure credentials upon course completion." }
                  ].map((feat, idx) => (
                    <div key={idx} className="p-6 rounded-xl bg-white/[0.01] hover:bg-white/[0.02] transition-colors space-y-2">
                      <h4 className="text-xs font-black tracking-wider text-[#E8B84A] uppercase">{feat.label}</h4>
                      <p className="text-white/45 text-[11px] leading-snug">{feat.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* =========================================================================
              4. OYEN LIVE
              ========================================================================= */}
          <section className="py-32">
            <div className="grid lg:grid-cols-12 gap-16 items-center">
              
              {/* Left Column: UI Presentation */}
              <div className="lg:col-span-7">
                <div className="w-full aspect-[1.6] rounded-2xl bg-white/[0.01] border border-white/5 p-6 relative overflow-hidden shadow-2xl flex flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold text-white/30 tracking-widest uppercase">OYEN Live Channel</span>
                    <span className="text-[9px] text-[#E8B84A] font-bold">ATTENDANCE LOGGING</span>
                  </div>
                  
                  <div className="flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-[#E8B84A]/10 flex items-center justify-center">
                      <Play className="w-4 h-4 text-[#E8B84A] fill-[#E8B84A] translate-x-0.5" />
                    </div>
                  </div>

                  <div className="flex justify-between items-center text-[10px] text-white/30">
                    <span>LIVE SESSION: COHORT A</span>
                    <span>HD ENCRYPTION</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Copy */}
              <div className="lg:col-span-5 space-y-8">
                <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight">
                  Run Sessions Without Leaving OYEN GRID
                </h2>
                <p className="text-white/50 text-sm leading-relaxed">
                  Host virtual lectures directly in the browser. Instructors don&apos;t need to generate meeting links, and the system automatically logs attendance minutes directly to the student registry.
                </p>
                <div className="grid grid-cols-2 gap-x-6 gap-y-4 text-xs font-bold text-white/40">
                  <span>• In-browser video</span>
                  <span>• Session chat</span>
                  <span>• Attendance audits</span>
                  <span>• Cloud recordings</span>
                </div>
              </div>
            </div>
          </section>

          {/* =========================================================================
              5. AI SECTION
              ========================================================================= */}
          <section className="py-32">
            <div className="grid lg:grid-cols-12 gap-16 items-center">
              
              <div className="lg:col-span-5 space-y-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8B84A]/5 border border-[#E8B84A]/10">
                  <Sparkles className="w-3.5 h-3.5 text-[#E8B84A]" />
                  <span className="text-[9px] font-black text-[#E8B84A] uppercase tracking-widest">SYSTEM INTELLIGENCE</span>
                </div>
                
                <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight">
                  Intelligence Built Into Every Programme
                </h2>
                
                <p className="text-white/50 text-sm leading-relaxed">
                  Automate the repetitive parts of running a cohort. Let OYEN handle transcriptions, student queries, and progress risk analysis.
                </p>
              </div>

              {/* Minimal visual AI list */}
              <div className="lg:col-span-7 space-y-4">
                {[
                  { title: "Post-Session Summaries", desc: "Instantly convert live lectures into structured class notes, key questions, and transcripts." },
                  { title: "24/7 Student Assistant", desc: "An AI tutor trained on your specific curriculum to answer participant questions instantly." },
                  { title: "Completion Risk Detection", desc: "Automatically flags students who fall behind on attendance or milestones before they drop out." }
                ].map((aiItem, idx) => (
                  <div key={idx} className="p-6 rounded-xl bg-white/[0.01] hover:bg-white/[0.02] transition-colors flex items-start gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#E8B84A] mt-2 flex-shrink-0" />
                    <div>
                      <h4 className="text-sm font-bold text-white/90 mb-1">{aiItem.title}</h4>
                      <p className="text-white/40 text-xs">{aiItem.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* =========================================================================
              6. FINAL CTA (Minimal, High Contrast)
              ========================================================================= */}
          <section className="py-24" id="get-started">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="py-16 text-center max-w-3xl mx-auto space-y-8"
            >
              <h2 className="text-4xl lg:text-6xl font-bold tracking-tight text-white leading-[1.05]">
                Ready To Modernize <br />
                Programme Delivery?
              </h2>
              <p className="text-white/50 text-sm leading-relaxed max-w-lg mx-auto">
                Ditch the spreadsheets and disconnected meeting links. Build a professional delivery environment for your next cohort.
              </p>
              
              <div className="pt-4 flex items-center justify-center gap-6">
                <Link
                  href="#get-started"
                  className="inline-flex h-[52px] px-8 rounded-lg text-xs font-bold bg-[#E8B84A] text-black hover:shadow-[0_0_30px_rgba(232,184,74,0.25)] hover:scale-[1.01] transition-all items-center justify-center"
                >
                  Start Free Trial
                </Link>
                <Link
                  href="#demo"
                  className="inline-flex h-[52px] px-8 rounded-lg text-xs font-bold text-white/60 hover:text-white transition-all items-center justify-center"
                >
                  Book Demo
                </Link>
              </div>
            </motion.div>
          </section>

        </div>
      </div>

      <FooterPremium hideCTA={false} />
    </>
  );
}
