"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Header, AnnouncementBar } from "@/components/layout/header";
import { FooterPremium } from "@/components/layout/footer";
import { 
  Users, UserCheck, BarChart3, Award, Sparkles, 
  Search, Shield, CheckCircle2, Play, Layout, FileText, Activity
} from "lucide-react";

export default function LearnerManagementPage() {
  return (
    <>
      <Header />
      <AnnouncementBar />

      <main className="min-h-screen bg-[#070913] text-white selection:bg-[#FFC72C] selection:text-black antialiased overflow-x-hidden">
        
        {/* ─── 1. HERO SECTION ─────────────────────────────────────────────────── */}
        <section className="relative pt-32 pb-24 md:pt-40 md:pb-36 overflow-hidden">
          {/* Ambient Glows */}
          <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[150px] pointer-events-none" />

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
                  LEARNER MANAGEMENT
                </span>
              </motion.div>

              {/* Title / Headline */}
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-4xl md:text-[62px] font-black tracking-tight leading-[1.05] mb-8"
              >
                Everything you need to manage every{" "}
                <span className="text-[#FFC72C] italic font-serif font-normal block md:inline">
                  learner journey.
                </span>
              </motion.h1>

              {/* Description */}
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-base md:text-xl text-white/70 font-normal leading-relaxed mb-10 max-w-[720px]"
              >
                Track learner registrations, attendance, progress, certifications, engagement, and performance from a single intelligent platform.
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

        {/* ─── 2. FEATURE OVERVIEW GRID ────────────────────────────────────────── */}
        <section id="overview" className="py-24 bg-[#090C16] border-t border-white/5 relative">
          <div className="max-w-[1280px] mx-auto px-8 relative z-10">
            
            <div className="mb-16">
              <span className="text-[10px] font-black tracking-[0.25em] text-[#FFC72C] uppercase block mb-3">
                PRODUCTS
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">
                Learner Management
              </h2>
              <p className="text-white/60 max-w-[640px] text-sm md:text-base leading-relaxed">
                Manage every learner from registration to completion. Track progress, attendance, certifications, and engagement in one place.
              </p>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Learner Profiles", desc: "Build rich customer records capturing skill histories, feedback, and notes.", icon: Users, color: "text-purple-400" },
                { title: "Registration", desc: "Embed brandable application forms and customize custom intake surveys.", icon: UserCheck, color: "text-blue-400" },
                { title: "Progress Tracking", desc: "Monitor module completion rates, grades, and milestone metrics.", icon: BarChart3, color: "text-emerald-400" },
                { title: "Certificates", desc: "Deliver verified digital badges and certifications automatically.", icon: Award, color: "text-[#FFC72C]" }
              ].map((card, i) => (
                <div key={i} className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col justify-between min-h-[180px] hover:border-white/10 transition-all duration-300">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center mb-5">
                    <card.icon className={`w-5 h-5 ${card.color}`} />
                  </div>
                  <div>
                    <h4 className="text-[15px] font-extrabold text-white mb-2">{card.title}</h4>
                    <p className="text-[12.5px] text-white/50 leading-relaxed font-light">{card.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ─── 3. DETAIL SECTIONS ────────────────────────────────────────────── */}
        <section className="py-24 bg-[#070913]">
          <div className="max-w-[1280px] mx-auto px-8 space-y-32">
            
            {/* 3.1 CUSTOM REGISTRATION */}
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <span className="text-[10px] font-black tracking-[0.25em] text-[#FFC72C] uppercase block mb-4">
                  01. INTAKE & REGISTRATION
                </span>
                <h3 className="text-3xl font-extrabold text-white mb-6">
                  Frictionless onboarding tailored to your brand.
                </h3>
                <p className="text-white/60 text-sm md:text-base leading-relaxed mb-8">
                  Deploy secure portals or embed clean signup forms straight into your website. Automate verification codes and send custom welcome sequences on successful registration.
                </p>
                <ul className="space-y-3.5">
                  {["Custom registration forms", "Automatic intake surveys", "Instant dashboard mapping"].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-xs md:text-sm font-semibold text-white/80">
                      <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 shadow-2xl relative overflow-hidden flex flex-col justify-center min-h-[300px]">
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/5 to-transparent pointer-events-none" />
                {/* Registration simulated interface */}
                <div className="relative p-5 rounded-xl bg-[#090C22] border border-white/5 space-y-3">
                  <h6 className="text-[11px] font-bold text-white/40 uppercase tracking-widest">Preview Form</h6>
                  <div className="h-9 rounded border border-white/10 bg-black/40 px-3 flex items-center text-xs text-white/50">Full Name: John Doe</div>
                  <div className="h-9 rounded border border-white/10 bg-black/40 px-3 flex items-center text-xs text-white/50">Work Email: j.doe@company.com</div>
                  <button className="h-9 w-full rounded bg-[#FFC72C] text-black text-xs font-bold uppercase tracking-wider">Submit Application</button>
                </div>
              </div>
            </div>

            {/* 3.2 DETAILED PROGRESS TRACKING */}
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="lg:order-2">
                <span className="text-[10px] font-black tracking-[0.25em] text-[#FFC72C] uppercase block mb-4">
                  02. PROGRESS & GRADES
                </span>
                <h3 className="text-3xl font-extrabold text-white mb-6">
                  Track every milestone, module, and submission.
                </h3>
                <p className="text-white/60 text-sm md:text-base leading-relaxed mb-8">
                  Get real-time insights into which participants are excelling and who might be falling behind. Set automatic flags on missing tasks to prompt immediate facilitator assistance.
                </p>
                <ul className="space-y-3.5">
                  {["Detailed progress cards", "Grade book synchronization", "Automatic task notifications"].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-xs md:text-sm font-semibold text-white/80">
                      <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:order-1 p-8 rounded-2xl bg-white/[0.02] border border-white/5 shadow-2xl relative overflow-hidden flex flex-col justify-center min-h-[300px]">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 to-transparent pointer-events-none" />
                {/* Progress bar preview */}
                <div className="relative p-4 rounded-xl bg-[#090C22] border border-[#FFC72C]/20 space-y-4">
                  <div className="flex justify-between text-xs">
                    <span className="font-bold text-white">Learner: Jane Smith</span>
                    <span className="text-[#FFC72C] font-extrabold">85% Complete</span>
                  </div>
                  <div className="w-full h-2 rounded bg-white/5 overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-blue-500 to-[#FFC72C]" style={{ width: "85%" }} />
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-[10px] text-white/40">
                    <div>
                      <span>Milestones</span>
                      <p className="font-bold text-white mt-0.5">12 / 14</p>
                    </div>
                    <div>
                      <span>Average Score</span>
                      <p className="font-bold text-white mt-0.5">94%</p>
                    </div>
                    <div>
                      <span>Status</span>
                      <p className="font-bold text-emerald-400 mt-0.5">On Track</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 3.3 AI PREDICTIVE INSIGHTS */}
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <span className="text-[10px] font-black tracking-[0.25em] text-[#FFC72C] uppercase block mb-4">
                  03. AI INTELLIGENCE
                </span>
                <h3 className="text-3xl font-extrabold text-white mb-6">
                  Proactive AI assistant that spots risk early.
                </h3>
                <p className="text-white/60 text-sm md:text-base leading-relaxed mb-8">
                  OYEN AI analyzes attendance patterns and performance trends to identify participants requiring additional mentoring support.
                </p>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center shrink-0">
                    <Sparkles className="w-4 h-4 text-purple-400" />
                  </div>
                  <div>
                    <h5 className="text-[13px] font-bold text-white">Risk Risk Predictor</h5>
                    <p className="text-[11px] text-white/50 leading-relaxed mt-0.5">Detect drop-out risk before attendance declines or homework sets go unsubmitted.</p>
                  </div>
                </div>
              </div>
              <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 shadow-2xl relative overflow-hidden flex flex-col justify-center min-h-[300px]">
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/5 to-transparent pointer-events-none" />
                {/* AI report card simulation */}
                <div className="relative p-4 rounded-xl bg-purple-950/20 border border-purple-500/30 space-y-3">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                    <span className="text-[10px] font-bold text-purple-400 uppercase tracking-wider">OYEN AI Insight</span>
                  </div>
                  <p className="text-xs text-white/80 leading-relaxed font-light">
                    "Cohort A shows a 14% drop in active engagement on database modules. Recommend scheduling an extra Q&amp;A review session."
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ─── 4. FINAL CONVERSION CTA ────────────────────────────────────────── */}
        <section className="py-24 bg-[#070913] border-t border-white/5">
          <div className="max-w-[800px] mx-auto px-8 text-center flex flex-col items-center gap-6">
            <span className="text-[11px] font-black tracking-[0.25em] text-[#FFC72C] uppercase">
              DELIVER EXCELLENCE
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
              Ready to elevate your learner experience?
            </h2>
            <p className="text-sm md:text-base text-white/60 max-w-xl leading-relaxed">
              Plan registrations, track progression matrices, and leverage artificial intelligence to guarantee successful cohort completion rates.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-4 w-full sm:w-auto">
              <Link
                href="/register"
                className="w-full sm:w-auto inline-flex items-center justify-center h-12 px-8 rounded-full bg-[#FFC72C] text-[#0B0B0B] text-sm font-bold uppercase tracking-wider transition-all hover:bg-[#FFD45B] hover:scale-[1.02]"
              >
                Book a Demo
              </Link>
              <Link
                href="/company/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center h-12 px-8 rounded-full border border-white/10 hover:border-white/20 text-white text-sm font-bold uppercase tracking-wider transition-all bg-transparent hover:bg-white/5"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </section>

      </main>

      <FooterPremium hideCTA={true} />
    </>
  );
}
