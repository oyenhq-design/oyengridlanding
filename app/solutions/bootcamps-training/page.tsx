"use client";

import { motion } from "framer-motion";
import { 
  ArrowRight, CheckCircle2, Globe, Shield, Zap, Activity, Cpu, 
  Users, BarChart3, Settings, Lock, FileCheck, Layers, Boxes, Bot, 
  LineChart, Server, Workflow, Radio, Brain, BookOpen, GraduationCap, 
  Building2, Terminal, Target, AlertCircle, Play, Mail, Sparkles, Check, 
  ChevronRight, XCircle
} from "lucide-react";
import Link from "next/link";
import { Header, AnnouncementBar } from "@/components/layout/header";
import { FooterPremium } from "@/components/layout/footer";
import { cn } from "@/lib/utils";

export default function BootcampsTrainingPage() {
  return (
    <>
      <Header />
      <AnnouncementBar />
      
      <div className="min-h-screen bg-[#02040A] text-white pb-32 overflow-hidden relative font-sans">
        
        {/* Cinematic Backdrop Glow */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[700px] bg-[radial-gradient(circle_at_50%_-20%,rgba(232,184,74,0.06),transparent_65%)]" />
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.012] mix-blend-overlay" />
        </div>

        {/* =========================================================================
            1. HERO SECTION
            ========================================================================= */}
        <section className="relative z-10 pt-[140px] pb-24 max-w-[1400px] mx-auto px-8">
          {/* Breadcrumb */}
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 mb-12 text-[10px] font-black uppercase tracking-[0.2em] text-[#E8B84A]/60"
          >
            <Link href="/" className="hover:text-[#E8B84A] transition-colors">Home</Link>
            <span className="opacity-20">/</span>
            <span className="opacity-50">Solutions</span>
            <span className="opacity-20">/</span>
            <span className="text-[#E8B84A]">Bootcamps & Training</span>
          </motion.div>

          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 space-y-8"
            >
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight leading-[1.05] text-white">
                Run Programmes <br />
                <span className="bg-gradient-to-r from-white via-white to-white/40 bg-clip-text text-transparent">That Scale.</span>
              </h1>
              
              <p className="text-xl text-white/50 leading-relaxed font-medium max-w-[620px]">
                From bootcamps and fellowships to workforce development initiatives, OYEN GRID provides the operational infrastructure required to coordinate participants, deliver learning experiences, and measure outcomes from a single platform.
              </p>
              
              <div className="pt-4">
                <Link
                  href="#get-started"
                  className="inline-flex h-[52px] px-10 rounded-xl text-[11px] font-black uppercase tracking-widest bg-[#E8B84A] text-black hover:shadow-[0_0_30px_rgba(232,184,74,0.3)] hover:scale-[1.02] transition-all items-center justify-center"
                >
                  Get started
                </Link>
              </div>
            </motion.div>

            {/* Premium Dashboard Preview */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="lg:col-span-5 relative"
            >
              <div className="w-full aspect-[4/3] rounded-3xl bg-gradient-to-br from-white/[0.04] to-transparent border border-white/10 p-6 relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(232,184,74,0.05),transparent_70%)]" />
                
                {/* Mock UI Frame */}
                <div className="h-full flex flex-col justify-between relative z-10 text-white/80">
                  <div className="flex items-center justify-between border-b border-white/5 pb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#E8B84A]" />
                      </div>
                      <span className="text-[10px] font-black tracking-wider uppercase text-white/40">Active Cohort System</span>
                    </div>
                    <span className="text-[9px] text-[#E8B84A] font-bold bg-[#E8B84A]/5 border border-[#E8B84A]/10 px-2 py-0.5 rounded-md">GRID SYNCED</span>
                  </div>

                  <div className="flex-1 py-6 space-y-4">
                    <div className="space-y-1">
                      <span className="text-[9px] font-black text-white/20 uppercase tracking-widest block">Cohort Name</span>
                      <span className="text-lg font-bold text-white">Fellowship Program - Q3 Run</span>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                        <span className="text-[8px] text-white/30 uppercase tracking-widest block mb-1">Active Attendance</span>
                        <span className="text-xl font-bold">96.4%</span>
                      </div>
                      <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                        <span className="text-[8px] text-white/30 uppercase tracking-widest block mb-1">Completion Index</span>
                        <span className="text-xl font-bold">94.8%</span>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-white/5 pt-4 flex items-center justify-between">
                    <span className="text-[9px] text-white/30 font-bold">FACILITATOR CONSOLE</span>
                    <div className="w-4 h-4 rounded-full bg-white/5 flex items-center justify-center">
                      <ChevronRight className="w-3 h-3 text-white/40" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* =========================================================================
            2. SECTION 2: BUILT FOR MODERN PROGRAMME DELIVERY
            ========================================================================= */}
        <section className="py-24 relative z-10 max-w-[1400px] mx-auto px-8 border-t border-white/5">
          <div className="space-y-16">
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-white">
              Built For Modern Programme Delivery
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Bootcamps", desc: "Structured intensive modules requiring real-time performance tracking and automated certification." },
                { title: "Training Organizations", desc: "Multi-tiered educational models built to manage scaling volumes of remote learners." },
                { title: "Fellowship Programmes", desc: "High-trust networks requiring unified communications, facilitator tracking, and analytics." },
                { title: "Workforce Development", desc: "Initiatives focused on skill verify audits, strict milestone capture, and employer reports." }
              ].map((org, idx) => (
                <div 
                  key={idx} 
                  className="p-8 rounded-2xl bg-white/[0.01] border border-white/5 hover:border-[#E8B84A]/20 transition-all flex flex-col justify-between h-[200px]"
                >
                  <h3 className="text-lg font-bold text-white">{org.title}</h3>
                  <p className="text-white/45 text-xs leading-relaxed font-medium">
                    {org.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================================
            3. SECTION 3: BEFORE / AFTER COMPARISON
            ========================================================================= */}
        <section className="py-24 relative z-10 max-w-[1400px] mx-auto px-8 border-t border-white/5">
          <div className="space-y-16">
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-white">
              Replace Operational Chaos With Structure
            </h2>

            <div className="grid lg:grid-cols-2 gap-12 relative">
              {/* Vertical border divider */}
              <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-[#E8B84A]/20 via-white/5 to-transparent -translate-x-1/2" />

              {/* Before Column */}
              <div className="space-y-8 pr-0 lg:pr-12">
                <div className="flex items-center gap-2 text-red-500/80">
                  <XCircle className="w-5 h-5" />
                  <span className="text-xs font-black uppercase tracking-widest">Before OYEN GRID</span>
                </div>
                <div className="space-y-4">
                  {[
                    { title: "Multiple tools", desc: "Operations scattered across Zoom, WhatsApp, Google Sheets and forms." },
                    { title: "Multiple workflows", desc: "Facilitators and administrators coordinate via fragmented steps." },
                    { title: "Multiple sources of truth", desc: "Inconsistent data records lead to inaccurate attendance and grade tracking." }
                  ].map((item, idx) => (
                    <div key={idx} className="p-6 rounded-xl bg-red-500/[0.01] border border-red-500/5">
                      <h4 className="text-sm font-bold text-white/80 mb-1">{item.title}</h4>
                      <p className="text-white/40 text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* After Column */}
              <div className="space-y-8 pl-0 lg:pl-12">
                <div className="flex items-center gap-2 text-[#E8B84A]">
                  <CheckCircle2 className="w-5 h-5" />
                  <span className="text-xs font-black uppercase tracking-widest">With OYEN GRID</span>
                </div>
                <div className="space-y-4">
                  {[
                    { title: "One platform", desc: "Your registry, virtual classes, files and records under a single environment." },
                    { title: "One workflow", desc: "Automate everything from participant entries to live checks and certifications." },
                    { title: "One operational system", desc: "Live dashboard tracking provides real-time visibility into all cohort outcomes." }
                  ].map((item, idx) => (
                    <div key={idx} className="p-6 rounded-xl bg-[#E8B84A]/[0.01] border border-[#E8B84A]/10">
                      <h4 className="text-sm font-bold text-[#E8B84A] mb-1">{item.title}</h4>
                      <p className="text-white/40 text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            4. SECTION 4: UNIFIED PRODUCT SHOWCASE
            ========================================================================= */}
        <section className="py-24 relative z-10 max-w-[1400px] mx-auto px-8 border-t border-white/5">
          <div className="space-y-16">
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-white text-center">
              Everything Required To Run A Successful Programme
            </h2>

            <div className="rounded-[40px] bg-gradient-to-b from-white/[0.02] to-transparent border border-white/10 p-10 lg:p-16 relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(232,184,74,0.04),transparent_70%)]" />
              
              <div className="grid lg:grid-cols-12 gap-12 items-center relative z-10">
                <div className="lg:col-span-5 space-y-8">
                  <div className="space-y-2">
                    <span className="text-[10px] font-black tracking-widest uppercase text-[#E8B84A]">UNIFIED WORKSPACE</span>
                    <h3 className="text-2xl font-bold">Integrated Core Registry</h3>
                  </div>
                  <p className="text-white/50 text-sm leading-relaxed">
                    OYEN GRID integrates all critical operational pillars. Instead of separate modules, your programmes, participant directories, real-time presence audits, learning resources, graded milestones, and credentials operate as a single unified system.
                  </p>
                  
                  <div className="space-y-3.5 pt-4">
                    {[
                      "Programmes — Blueprints and cohort structures",
                      "Participants — Comprehensive learner records",
                      "Attendance — Automated presence metrics",
                      "Learning Resources — Embedded files and media",
                      "Assessments — Integrated milestones & evaluations",
                      "Certificates — Verifiable digital credentials"
                    ].map(feat => (
                      <div key={feat} className="flex items-center gap-3 text-xs text-white/70">
                        <Check className="w-4 h-4 text-[#E8B84A]" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Conceptual Showcase Graphics */}
                <div className="lg:col-span-7">
                  <div className="rounded-2xl border border-white/5 bg-[#02040A]/80 p-8 space-y-6">
                    <span className="text-[9px] font-black text-white/20 tracking-wider uppercase block">System Flow Overview</span>
                    <div className="grid grid-cols-3 gap-3">
                      {[
                        { title: "Programmes", items: ["Structure", "Calendars"] },
                        { title: "Participants", items: ["Registry", "Records"] },
                        { title: "Attendance", items: ["Live Logs", "Auditing"] }
                      ].map((card, idx) => (
                        <div key={idx} className="p-4 rounded-xl bg-white/[0.01] border border-white/5">
                          <span className="text-[10px] font-bold text-[#E8B84A] block mb-2">{card.title}</span>
                          <div className="space-y-1">
                            {card.items.map(item => (
                              <span key={item} className="text-[9px] text-white/40 block">• {item}</span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="h-[1px] bg-white/5 w-full" />
                    
                    <div className="grid grid-cols-3 gap-3">
                      {[
                        { title: "Resources", items: ["Document Stacks", "Videos"] },
                        { title: "Assessments", items: ["Gradebooks", "Feedback"] },
                        { title: "Certificates", items: ["Verification", "Issuing"] }
                      ].map((card, idx) => (
                        <div key={idx} className="p-4 rounded-xl bg-white/[0.01] border border-white/5">
                          <span className="text-[10px] font-bold text-[#E8B84A] block mb-2">{card.title}</span>
                          <div className="space-y-1">
                            {card.items.map(item => (
                              <span key={item} className="text-[9px] text-white/40 block">• {item}</span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            5. SECTION 5: OYEN LIVE
            ========================================================================= */}
        <section className="py-24 relative z-10 max-w-[1400px] mx-auto px-8 border-t border-white/5">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5 space-y-8">
              <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight">
                Deliver Learning Without using disconected tools
              </h2>
              <p className="text-white/50 text-sm leading-relaxed">
                OYEN Live embeds virtual delivery directly inside your platform registry. Eliminate external meeting links and manual administration completely.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {[
                  { title: "Video Sessions", desc: "HD latency-aware classrooms." },
                  { title: "Chat", desc: "Native chat logs mapped to student profiles." },
                  { title: "Attendance Capture", desc: "Automated second-by-second join tracking." },
                  { title: "Session Recordings", desc: "Instant cloud storage and automatic mapping." }
                ].map((liveItem, idx) => (
                  <div key={idx} className="space-y-1">
                    <h4 className="text-xs font-bold text-[#E8B84A]">{liveItem.title}</h4>
                    <p className="text-white/40 text-[11px] leading-relaxed">{liveItem.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Embedded Live Console Mockup */}
            <div className="lg:col-span-7">
              <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.03] to-transparent p-6 relative overflow-hidden shadow-2xl aspect-[1.5]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(232,184,74,0.06),transparent_70%)]" />
                <div className="h-full flex flex-col justify-between relative z-10">
                  <div className="flex items-center justify-between border-b border-white/5 pb-4">
                    <span className="text-[10px] font-black text-white/30 uppercase tracking-widest">OYEN Live Studio</span>
                    <span className="text-[9px] text-[#E8B84A] font-bold">STREAM ACTIVE</span>
                  </div>
                  
                  {/* Speaker Placeholder */}
                  <div className="flex-1 flex items-center justify-center relative">
                    <div className="w-14 h-14 rounded-full bg-[#E8B84A]/10 border border-[#E8B84A]/25 flex items-center justify-center">
                      <Play className="w-5 h-5 text-[#E8B84A] fill-[#E8B84A] translate-x-0.5" />
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-white/45 text-[10px] pt-4 border-t border-white/5">
                    <span>PARTICIPANTS: 184</span>
                    <span>ATTENDANCE CAPTURE: ENABLED</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            6. SECTION 6: AI-POWERED OPERATIONS
            ========================================================================= */}
        <section className="py-24 relative z-10 max-w-[1400px] mx-auto px-8 border-t border-white/5">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            {/* Visual preview */}
            <div className="lg:col-span-6 order-last lg:order-first">
              <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.02] to-transparent p-8 space-y-6">
                <span className="text-[9px] font-black text-white/20 tracking-wider uppercase block">Operational Analysis</span>
                <div className="space-y-4">
                  {[
                    { label: "Session Summaries", status: "Transcribing", val: "Complete summary ready" },
                    { label: "Participant Insights", status: "Scanning", val: "High engagement indexes" },
                    { label: "Programme Intelligence", status: "Aggregating", val: "Resource utilization: 92%" }
                  ].map((intel, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-white/[0.01] border border-white/5 flex items-center justify-between">
                      <div>
                        <span className="text-[10px] text-white/30 block uppercase tracking-wider">{intel.label}</span>
                        <span className="text-sm font-bold text-white/80">{intel.val}</span>
                      </div>
                      <span className="text-[9px] text-[#E8B84A] font-bold px-2 py-0.5 rounded-md bg-[#E8B84A]/5 border border-[#E8B84A]/10">
                        {intel.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8B84A]/5 border border-[#E8B84A]/10 mb-2">
                <Sparkles className="w-3.5 h-3.5 text-[#E8B84A]" />
                <span className="text-[9px] font-black text-[#E8B84A] uppercase tracking-widest">INTELLIGENCE</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight">
                Intelligence Built Into Every Programme
              </h2>
              <p className="text-white/50 text-sm leading-relaxed">
                OYEN GRID embeds practical artificial intelligence to streamline cohort administration, highlight outcomes, and flag progress risks.
              </p>
              
              <div className="space-y-4 pt-2">
                {[
                  { title: "Session Summaries", desc: "Automatically generate action items, questions, and curriculum summaries directly after classes end." },
                  { title: "Participant Insights", desc: "Spot specific behavioral changes, and monitor engagement trends continuously." },
                  { title: "Programme Intelligence", desc: "Surface clear, data-backed recommendations to improve class schedules and overall pass rates." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#E8B84A] mt-2" />
                    <div>
                      <h4 className="text-sm font-bold text-white/90">{item.title}</h4>
                      <p className="text-white/40 text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            7. SECTION 7: BUILT FOR RESULTS
            ========================================================================= */}
        <section className="py-24 relative z-10 max-w-[1400px] mx-auto px-8 border-t border-white/5">
          <div className="space-y-16">
            <div className="text-center space-y-4">
              <span className="text-[10px] font-black text-[#E8B84A] uppercase tracking-[0.3em] block">BUSINESS METRICS</span>
              <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-white">
                Built For Results
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Better Participant Engagement", desc: "Empower learners with native communication, interactive live tools, and structured resource libraries." },
                { title: "Higher Completion Rates", desc: "Automatically identify disengaged participants early with systemic alerts to secure outcomes." },
                { title: "Reduced Administrative Work", desc: "Save hours of roster upkeep, grading compilation, and credential packaging via auto-issuing." },
                { title: "Complete Programme Visibility", desc: "Access live administrative directories for total transparency across semesters, facilitators, and outcomes." }
              ].map((res, idx) => (
                <div key={idx} className="p-8 rounded-2xl bg-white/[0.01] border border-white/5 flex flex-col justify-between h-[220px]">
                  <h4 className="text-base font-bold text-white">{res.title}</h4>
                  <p className="text-white/40 text-xs leading-relaxed font-medium">
                    {res.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================================
            8. FINAL CTA
            ========================================================================= */}
        <section className="py-12 relative z-10 max-w-[1200px] mx-auto px-8" id="get-started">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-16 rounded-[40px] bg-gradient-to-br from-[#E8B84A]/10 via-transparent to-transparent border border-[#E8B84A]/20 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(232,184,74,0.06),transparent_70%)]" />
            <div className="relative z-10 max-w-2xl mx-auto space-y-8">
              <span className="text-[11px] font-black text-[#E8B84A] uppercase tracking-[0.4em] block">TRANSFORM DELIVERY</span>
              <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-white">
                Ready To Modernize Programme Delivery?
              </h2>
              <p className="text-white/50 text-sm leading-relaxed">
                Join organizations transforming how training programmes, fellowships, and workforce development initiatives are delivered.
              </p>
              
              <div className="pt-4 flex items-center justify-center">
                <Link
                  href="#get-started"
                  className="inline-flex h-[56px] px-12 rounded-2xl bg-[#E8B84A] text-black text-[12px] font-black uppercase tracking-widest hover:shadow-[0_20px_40px_rgba(232,184,74,0.3)] transition-all items-center justify-center hover:scale-[1.02]"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </motion.div>
        </section>

      </div>

      <FooterPremium hideCTA={false} />
    </>
  );
}
