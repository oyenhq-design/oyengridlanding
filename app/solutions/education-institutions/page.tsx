"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Header, AnnouncementBar } from "@/components/layout/header";
import { FooterPremium } from "@/components/layout/footer";
import { 
  Building2, Users, FileText, Award, Shield, 
  CheckCircle2, Play, Activity, LineChart
} from "lucide-react";

export default function SchoolsAcademiesPage() {
  return (
    <>
      <Header />
      <AnnouncementBar />

      <main className="min-h-screen bg-[#070913] text-white selection:bg-[#FFC72C] selection:text-black antialiased overflow-x-hidden">
        
        {/* ─── 1. HERO SECTION ─────────────────────────────────────────────────── */}
        <section className="relative pt-32 pb-24 md:pt-40 md:pb-36 overflow-hidden">
          {/* Ambient Glows */}
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[150px] pointer-events-none" />

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
                  SOLUTIONS
                </span>
              </motion.div>

              {/* Title / Headline */}
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-4xl md:text-[62px] font-black tracking-tight leading-[1.05] mb-8"
              >
                Schools &amp;{" "}
                <span className="text-[#FFC72C] italic font-serif font-normal block md:inline">
                  Academies
                </span>
              </motion.h1>

              {/* Description */}
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-base md:text-xl text-white/70 font-normal leading-relaxed mb-10 max-w-[720px]"
              >
                Manage academic programs, students, instructors, attendance, assessments, and institutional reporting.
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

        {/* ─── 2. ACADEMY MANAGEMENT OVERVIEW ───────────────────────────────── */}
        <section id="overview" className="py-24 bg-[#090C16] border-t border-white/5 relative">
          <div className="max-w-[1280px] mx-auto px-8 relative z-10">
            
            <div className="mb-16">
              <span className="text-[10px] font-black tracking-[0.25em] text-[#FFC72C] uppercase block mb-3">
                OVERVIEW
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">
                Academic Operations
              </h2>
              <p className="text-white/60 max-w-[640px] text-sm md:text-base leading-relaxed">
                Connect students and faculty, construct curriculum profiles, track assessment logs, and compile analytics reports automatically.
              </p>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Student Management", desc: "Track course assignments, registration surveys, and milestones.", icon: Users, color: "text-blue-400" },
                { title: "Faculty Workspace", desc: "Coordinate facilitator loads, lecture hours, and grading reviews.", icon: Building2, color: "text-purple-400" },
                { title: "Academic Reporting", desc: "Automate gradebook calculations, compliance records, and data exports.", icon: LineChart, color: "text-emerald-400" },
                { title: "Certificates", desc: "Issue secure verified digital credentials automatically on completion.", icon: Award, color: "text-[#FFC72C]" }
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

        {/* ─── 3. FINAL CONVERSION CTA ────────────────────────────────────────── */}
        <section className="py-24 bg-[#070913] border-t border-white/5">
          <div className="max-w-[800px] mx-auto px-8 text-center flex flex-col items-center gap-6">
            <span className="text-[11px] font-black tracking-[0.25em] text-[#FFC72C] uppercase">
              DELIVER EDUCATION
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
              Ready to automate your academy operations?
            </h2>
            <p className="text-sm md:text-base text-white/60 max-w-xl leading-relaxed">
              Plan course curricula, assign facilitators, monitor grade outcomes, and compile reporting matrices.
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
