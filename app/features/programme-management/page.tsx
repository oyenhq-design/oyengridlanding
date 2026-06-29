"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Header, AnnouncementBar } from "@/components/layout/header";
import { FooterPremium } from "@/components/layout/footer";
import { 
  Calendar, Users, CheckSquare, BarChart3, Award, Sparkles, 
  Clock, Shield, Settings, Play, ArrowRight, CheckCircle2,
  Lock, FileText, Database, ShieldCheck
} from "lucide-react";

export default function ProgrammeManagementPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 25 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  };

  return (
    <>
      <Header />
      <AnnouncementBar />

      <main className="min-h-screen text-white selection:bg-[#FFC72C] selection:text-black antialiased overflow-x-hidden">
        
        {/* ─── 1. HERO SECTION (#070B16) ─────────────────────────────────────────── */}
        <section className="relative pt-32 pb-24 md:pt-40 md:pb-36 overflow-hidden bg-[#070B16]">
          {/* Ambient Glows */}
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-[#D4A017]/5 rounded-full blur-[150px] pointer-events-none" />

          {/* Grid background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

          <div className="max-w-[1280px] mx-auto px-8 relative z-10">
            <div className="max-w-[840px]">
              
              {/* Eyebrow */}
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-2.5 mb-6"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-[#FFC72C]" />
                <span className="text-[11px] font-black tracking-[0.3em] text-[#FFC72C] uppercase">
                  PROGRAM MANAGEMENT
                </span>
              </motion.div>

              {/* Title / Headline */}
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-4xl md:text-[62px] font-black tracking-tight leading-[1.05] mb-8"
              >
                The operating system for{" "}
                <span className="text-[#FFC72C] italic font-serif font-normal block md:inline">
                  enterprise learning.
                </span>
              </motion.h1>

              {/* Description */}
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-base md:text-xl text-white/70 font-normal leading-relaxed mb-10 max-w-[720px]"
              >
                Plan programs, manage facilitators, automate attendance, track learners, generate reports, and coordinate every cohort from a single platform.
              </motion.p>

              {/* CTAs */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="flex flex-col sm:flex-row items-center gap-4"
              >
                <Link
                  href="/register"
                  className="w-full sm:w-auto inline-flex items-center justify-center h-12 px-8 rounded-full bg-[#FFC72C] hover:bg-[#FFD45B] text-[#0B0B0B] text-sm font-extrabold uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(255,199,44,0.25)] hover:scale-[1.02]"
                >
                  Book a Demo
                </Link>
                <Link
                  href="#overview"
                  className="w-full sm:w-auto inline-flex items-center justify-center h-12 px-8 rounded-full border border-white/10 hover:border-white/20 text-white text-sm font-bold uppercase tracking-wider transition-all bg-white/[0.02] hover:bg-white/[0.05] gap-2"
                >
                  <Play className="w-3.5 h-3.5 fill-white/80" /> Watch Demo
                </Link>
              </motion.div>

            </div>
          </div>
        </section>

        {/* ─── 2. FEATURE OVERVIEW GRID (#0C1120) ───────────────────────────────── */}
        <section id="overview" className="py-24 bg-[#0C1120] border-t border-white/5 relative">
          <div className="max-w-[1280px] mx-auto px-8 relative z-10">
            
            <div className="mb-16">
              <span className="text-[10px] font-black tracking-[0.25em] text-[#FFC72C] uppercase block mb-3">
                PRODUCTS
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">
                Program Management
              </h2>
              <p className="text-white/60 max-w-[640px] text-sm md:text-base leading-relaxed">
                Plan, organize, and deliver programs from one intelligent workspace. Manage cohorts, schedules, facilitators, attendance, assessments, and reporting with ease.
              </p>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Program Planning", desc: "Design learning journeys, schedules, facilitators, and curriculum from one workspace.", icon: Calendar, color: "text-blue-400" },
                { title: "Cohort Management", desc: "Automate student registration, profile fields, and group allocations seamlessly.", icon: Users, color: "text-purple-400" },
                { title: "Attendance Tracking", desc: "Get real-time verification and custom presence logging parameters.", icon: CheckSquare, color: "text-emerald-400" },
                { title: "Reporting & Analytics", desc: "Generate grade sheets, operational reports, and programmatic analytics.", icon: BarChart3, color: "text-[#FFC72C]" }
              ].map((card, i) => (
                <motion.div 
                  key={i} 
                  {...fadeInUp}
                  transition={{ duration: 0.6, delay: i * 0.06 }}
                  className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col justify-between min-h-[220px] hover:border-white/10 transition-all duration-300 group"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center mb-5">
                      <card.icon className={`w-5 h-5 ${card.color}`} />
                    </div>
                    <h4 className="text-[15px] font-extrabold text-white mb-2">{card.title}</h4>
                    <p className="text-[12.5px] text-white/50 leading-relaxed font-light mb-4">{card.desc}</p>
                  </div>
                  <Link href="#planning" className="text-xs font-bold text-[#FFC72C] hover:text-[#FFD45B] inline-flex items-center gap-1 mt-auto">
                    Learn More <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </motion.div>
              ))}
            </div>

          </div>
        </section>

        {/* ─── 3. DEEP FEATURES: DETAIL SECTIONS (#070B16 & #0C1120) ─────────── */}
        
        {/* 3.1 PROGRAM PLANNING (#070B16) */}
        <section id="planning" className="py-24 bg-[#070B16] border-t border-white/5">
          <div className="max-w-[1280px] mx-auto px-8">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Left Column: Text & Metrics */}
              <div className="lg:col-span-7">
                <span className="text-[10px] font-black tracking-[0.25em] text-[#FFC72C] uppercase block mb-4">
                  01 Plan every program.
                </span>
                <h3 className="text-3xl font-extrabold text-white mb-6">
                  Design curricula that align directly with outcomes.
                </h3>
                <p className="text-white/60 text-sm md:text-base leading-relaxed mb-8">
                  OYEN GRID makes program layout trivial. Map training milestones, integrate live webinar platforms, assign specific coordinators to modules, and store resource materials in structured libraries.
                </p>
                
                {/* 3 metrics horizontal strip */}
                <div className="grid grid-cols-3 gap-6 border-y border-white/10 py-6 mb-8">
                  <div>
                    <span className="text-2xl font-black text-[#FFC72C] block">50+</span>
                    <span className="text-[10px] text-white/40 uppercase font-bold tracking-wider">Programs Managed</span>
                  </div>
                  <div>
                    <span className="text-2xl font-black text-white block">2,000+</span>
                    <span className="text-[10px] text-white/40 uppercase font-bold tracking-wider">Sessions Scheduled</span>
                  </div>
                  <div>
                    <span className="text-2xl font-black text-white block">98%</span>
                    <span className="text-[10px] text-white/40 uppercase font-bold tracking-wider">Completion Rate</span>
                  </div>
                </div>

                <ul className="space-y-3.5">
                  {["Visual curriculum builder", "Reusable session templates", "Facilitator calendar matching"].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-xs md:text-sm font-semibold text-white/80">
                      <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Column: Interactive Panel */}
              <motion.div 
                {...fadeInUp}
                className="lg:col-span-5 p-8 rounded-2xl bg-white/[0.02] border border-white/5 shadow-2xl relative overflow-hidden flex flex-col justify-center min-h-[300px]"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 to-transparent pointer-events-none" />
                <div className="relative space-y-4">
                  <div className="p-4 rounded-xl bg-[#090C22] border border-white/5">
                    <span className="text-[9px] font-bold text-blue-400 uppercase tracking-widest block mb-1">MODULE 1</span>
                    <h5 className="text-[13px] font-bold text-white mb-2">Introduction to Enterprise Workflows</h5>
                    <div className="flex gap-2 text-[10px] text-white/40">
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> 4 Sessions</span>
                      <span>•</span>
                      <span>Assignee: Sarah Jenkins</span>
                    </div>
                  </div>
                  <div className="p-4 rounded-xl bg-[#090C22]/40 border border-dashed border-white/10">
                    <span className="text-[11px] font-bold text-white/30">+ Add Session Milestone</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 3.2 COHORT OPERATIONS (#0C1120) */}
        <section className="py-24 bg-[#0C1120] border-t border-white/5">
          <div className="max-w-[1280px] mx-auto px-8">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Left Column: Interactive Panel */}
              <motion.div 
                {...fadeInUp}
                className="lg:col-span-5 lg:order-1 p-8 rounded-2xl bg-white/[0.02] border border-white/5 shadow-2xl relative overflow-hidden flex flex-col justify-center min-h-[300px]"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/5 to-transparent pointer-events-none" />
                <div className="relative space-y-3">
                  {[
                    { name: "Engineering Intake 2026", count: "128 learners", status: "Active" },
                    { name: "Product Design Cohort A", count: "48 learners", status: "Active" },
                    { name: "Executive Leadership Program", count: "12 learners", status: "Pending" }
                  ].map((cohort, idx) => (
                    <div key={idx} className="p-3 rounded-lg bg-[#090C22] border border-white/5 flex items-center justify-between">
                      <div>
                        <h6 className="text-[12.5px] font-bold text-white leading-tight">{cohort.name}</h6>
                        <span className="text-[10px] text-white/40">{cohort.count}</span>
                      </div>
                      <span className="px-2 py-0.5 rounded text-[9px] font-bold bg-white/5 text-white/60 border border-white/10">{cohort.status}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Right Column: Text & Metrics */}
              <div className="lg:col-span-7 lg:order-2">
                <span className="text-[10px] font-black tracking-[0.25em] text-[#FFC72C] uppercase block mb-4">
                  02 Coordinate every cohort.
                </span>
                <h3 className="text-3xl font-extrabold text-white mb-6">
                  Manage multiple teams and pipelines effortlessly.
                </h3>
                <p className="text-white/60 text-sm md:text-base leading-relaxed mb-8">
                  Segment your participants by department, location, performance, or intake program. Control global policies or customize individual access settings for each cohort.
                </p>
                
                {/* 3 metrics horizontal strip */}
                <div className="grid grid-cols-3 gap-6 border-y border-white/10 py-6 mb-8">
                  <div>
                    <span className="text-2xl font-black text-[#FFC72C] block">40,000+</span>
                    <span className="text-[10px] text-white/40 uppercase font-bold tracking-wider">Learners</span>
                  </div>
                  <div>
                    <span className="text-2xl font-black text-white block">120+</span>
                    <span className="text-[10px] text-white/40 uppercase font-bold tracking-wider">Facilitators</span>
                  </div>
                  <div>
                    <span className="text-2xl font-black text-white block">90%</span>
                    <span className="text-[10px] text-white/40 uppercase font-bold tracking-wider">Automation</span>
                  </div>
                </div>

                <ul className="space-y-3.5">
                  {["Bulk participant enrollments", "Dynamic group creation", "Cross-cohort communication"].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-xs md:text-sm font-semibold text-white/80">
                      <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        </section>

        {/* 3.3 ASSESSMENTS & CREDENTIALS (#070B16) */}
        <section className="py-24 bg-[#070B16] border-t border-white/5">
          <div className="max-w-[1280px] mx-auto px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <span className="text-[10px] font-black tracking-[0.25em] text-[#FFC72C] uppercase block mb-4">
                  03 Assess every learner.
                </span>
                <h3 className="text-3xl font-extrabold text-white mb-6">
                  Set up automated grading and custom certificates.
                </h3>
                <p className="text-white/60 text-sm md:text-base leading-relaxed mb-8">
                  Create rich testing parameters. Set passing thresholds, allow multiple attempts, and issue branded certifications automatically upon completion.
                </p>
                <div className="flex flex-col sm:flex-row gap-6">
                  <div className="flex items-start gap-3">
                    <Award className="w-5 h-5 text-[#FFC72C] shrink-0 mt-0.5" />
                    <div>
                      <h5 className="text-[13px] font-bold text-white">Smart Credentials</h5>
                      <p className="text-[11px] text-white/50 leading-relaxed mt-0.5">Secure, shareable digital badges built to verify training milestones.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Sparkles className="w-5 h-5 text-purple-400 shrink-0" />
                    <div>
                      <h5 className="text-[13px] font-bold text-white">Auto-Grading</h5>
                      <p className="text-[11px] text-white/50 leading-relaxed mt-0.5">Instantly evaluate submissions and sync outcomes with student records.</p>
                    </div>
                  </div>
                </div>
              </div>
              <motion.div 
                {...fadeInUp}
                className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 shadow-2xl relative overflow-hidden flex flex-col justify-center min-h-[300px]"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-[#FFC72C]/5 to-transparent pointer-events-none" />
                <div className="relative p-6 rounded-xl border border-[#D4A017]/30 bg-black/40 flex flex-col items-center text-center">
                  <Award className="w-10 h-10 text-[#FFC72C] mb-3" />
                  <span className="text-[8px] font-bold text-[#FFC72C] tracking-widest uppercase">CERTIFICATE OF TRAINING</span>
                  <h6 className="text-[14px] font-black text-white mt-1.5">Enterprise Leadership Excellence</h6>
                  <span className="text-[10px] text-white/40 mt-1">Presented to John Doe</span>
                  <div className="w-12 h-px bg-[#D4A017]/30 my-3" />
                  <span className="text-[8px] text-white/30 uppercase tracking-widest">VERIFIED BY OYEN GRID SECURE BADGE</span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ─── 4. SECURITY SECTION WITH 4 FEATURES CARDS (#0C1120) ──────────────── */}
        <section className="py-24 bg-[#0C1120] border-t border-white/5">
          <div className="max-w-[1280px] mx-auto px-8">
            <div className="text-center mb-16">
              <span className="text-[10px] font-black tracking-[0.25em] text-[#FFC72C] uppercase block mb-4">
                04 Secure every operation.
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                Enterprise security built into every program.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Role-Based Access", desc: "Granular permissions for admins, trainers, facilitators and learners.", icon: Lock, color: "text-[#FFC72C]" },
                { title: "Audit Logs", desc: "Every action is recorded and searchable across your entire workspace.", icon: FileText, color: "text-blue-400" },
                { title: "Automatic Backups", desc: "Daily encrypted database backups with isolated recovery endpoints.", icon: Database, color: "text-purple-400" },
                { title: "Enterprise Compliance", desc: "Built inside SOC 2 compliant protocols prioritizing data confidentiality.", icon: ShieldCheck, color: "text-emerald-400" }
              ].map((card, i) => (
                <motion.div 
                  key={i} 
                  {...fadeInUp}
                  transition={{ duration: 0.6, delay: i * 0.06 }}
                  className="p-6 rounded-2xl bg-white/[0.01] border border-white/5 hover:border-white/10 transition-all flex flex-col justify-between min-h-[180px]"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center mb-5">
                    <card.icon className={`w-5 h-5 ${card.color}`} />
                  </div>
                  <div>
                    <h4 className="text-[15px] font-bold text-white mb-2">{card.title}</h4>
                    <p className="text-[12.5px] text-white/50 leading-relaxed font-light">{card.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── 5. FINAL SCREENSHOT (#070B16) ────────────────────────────────────── */}
        <section className="py-24 bg-[#070B16] border-t border-white/5 relative overflow-hidden">
          <div className="max-w-[1000px] mx-auto px-8 text-center flex flex-col items-center gap-6">
            <span className="text-[10px] font-black tracking-[0.25em] text-[#FFC72C] uppercase block">
              WORKSPACES
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
              Everything working together.
            </h2>
            <p className="text-sm md:text-base text-white/60 max-w-xl leading-relaxed">
              From planning and attendance to analytics and AI, OYEN GRID connects every part of your training operations.
            </p>
            
            {/* Dashboard screenshot */}
            <motion.div 
              {...fadeInUp}
              className="mt-8 relative w-full h-[320px] md:h-[480px] rounded-2xl border border-white/10 bg-black/40 overflow-hidden shadow-2xl"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="/diagram-new.png" 
                alt="OYEN GRID Operating System Dashboard" 
                className="w-full h-full object-cover object-top opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070B16] via-transparent to-transparent pointer-events-none" />
            </motion.div>
          </div>
        </section>

        {/* ─── 6. CUSTOMER PROOF STRIP (#0C1120) ─────────────────────────────────── */}
        <section className="py-12 bg-[#0C1120] border-t border-b border-white/5">
          <div className="max-w-[1280px] mx-auto px-8 flex flex-col items-center gap-6">
            <span className="text-xs md:text-sm font-bold text-white/60 tracking-wider text-center uppercase">
              Trusted by organizations delivering <span className="text-[#FFC72C] font-black">250,000+</span> learning activities every year
            </span>
            <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4 opacity-30 grayscale contrast-200">
              <span className="text-sm font-black tracking-widest text-white">ALTSCHOOL</span>
              <span className="text-sm font-black tracking-widest text-white">TALENTQL</span>
              <span className="text-sm font-black tracking-widest text-white">UNICEF</span>
              <span className="text-sm font-black tracking-widest text-white">MTN</span>
              <span className="text-sm font-black tracking-widest text-white">MICROSOFT</span>
            </div>
          </div>
        </section>

        {/* ─── 7. BETTER FINAL CONVERSION CTA (#0D1428) ─────────────────────────── */}
        <section className="py-24 bg-[#0D1428]">
          <div className="max-w-[800px] mx-auto px-8 text-center flex flex-col items-center gap-6">
            <span className="text-[11px] font-black tracking-[0.25em] text-[#FFC72C] uppercase">
              DELIVER AT SCALE
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
              Ready to modernize your training operations?
            </h2>
            <p className="text-sm md:text-base text-white/60 max-w-xl leading-relaxed">
              Join organizations using OYEN GRID to manage learning, automate operations, and scale delivery from one secure workspace.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-4 w-full sm:w-auto">
              <Link
                href="/register"
                className="w-full sm:w-auto inline-flex items-center justify-center h-12 px-8 rounded-full bg-[#FFC72C] text-[#0B0B0B] text-sm font-bold uppercase tracking-wider transition-all hover:bg-[#FFD45B] hover:scale-[1.02]"
              >
                Get Started
              </Link>
              <Link
                href="/register"
                className="w-full sm:w-auto inline-flex items-center justify-center h-12 px-8 rounded-full border border-white/10 hover:border-white/20 text-white text-sm font-bold uppercase tracking-wider transition-all bg-transparent hover:bg-white/5"
              >
                Book Demo
              </Link>
            </div>
          </div>
        </section>

      </main>

      <FooterPremium hideCTA={true} />
    </>
  );
}
