"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Header, AnnouncementBar } from "@/components/layout/header";
import { FooterPremium } from "@/components/layout/footer";
import { 
  FileText, Activity, Users, Building2, GraduationCap, Globe, CheckCircle2
} from "lucide-react";

export default function CaseStudiesPage() {
  return (
    <>
      <Header />
      <AnnouncementBar />

      <main className="min-h-screen bg-[#070913] text-white selection:bg-[#FFC72C] selection:text-black antialiased overflow-x-hidden">
        
        {/* ─── 1. HERO SECTION ─────────────────────────────────────────────────── */}
        <section className="relative pt-32 pb-24 md:pt-40 md:pb-36 overflow-hidden">
          {/* Ambient Glows */}
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[150px] pointer-events-none" />

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
                  RESOURCES
                </span>
              </motion.div>

              {/* Title / Headline */}
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-4xl md:text-[62px] font-black tracking-tight leading-[1.05] mb-8"
              >
                Customer Stories
              </motion.h1>

              {/* Description */}
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-base md:text-xl text-white/70 font-normal leading-relaxed mb-10 max-w-[720px]"
              >
                See how organizations use OYEN GRID to deliver learning programs, improve operations, automate workflows, and measure real business impact.
              </motion.p>

            </div>
          </div>
        </section>

        {/* ─── 2. SECTIONS GRID ──────────────────────────────────────────────── */}
        <section className="py-24 bg-[#090C16] border-t border-white/5 relative">
          <div className="max-w-[1280px] mx-auto px-8 relative z-10">
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Featured Success Stories", desc: "Global organizations scaling program delivery to 10K+ active users.", icon: FileText, color: "text-[#FFC72C]" },
                { title: "Bootcamps", desc: "How top tech fellowships automated participant tracking processes.", icon: GraduationCap, color: "text-blue-400" },
                { title: "Corporate Training", desc: "Upskilling and onboarding programs built on compliance architectures.", icon: Building2, color: "text-purple-400" },
                { title: "Schools & Academies", desc: "Institutions using unified schedules and class logs.", icon: Globe, color: "text-emerald-400" },
                { title: "NGOs & Government", desc: "National training initiatives deployed across remote regions.", icon: Users, color: "text-indigo-400" },
                { title: "Results & Impact", desc: "Verified data showing 82% administrative work reduction stats.", icon: Activity, color: "text-rose-400" }
              ].map((card, i) => (
                <div key={i} className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col justify-between min-h-[170px] hover:border-white/10 transition-all duration-300">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center mb-4">
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

        {/* ─── 3. STILL NEED HELP CTA ────────────────────────────────────────── */}
        <section className="py-24 bg-[#070913] border-t border-white/5">
          <div className="max-w-[800px] mx-auto px-8 text-center flex flex-col items-center gap-6">
            <span className="text-[11px] font-black tracking-[0.25em] text-[#FFC72C] uppercase">
              SUPPORT
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
              Still need help?
            </h2>
            <p className="text-sm md:text-base text-white/60 max-w-xl leading-relaxed">
              Our team is here to help you get the most out of OYEN GRID.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-4 w-full sm:w-auto">
              <Link
                href="/company/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center h-12 px-8 rounded-full bg-[#FFC72C] text-[#0B0B0B] text-sm font-bold uppercase tracking-wider transition-all hover:bg-[#FFD45B] hover:scale-[1.02]"
              >
                Contact Support
              </Link>
              <Link
                href="/register"
                className="w-full sm:w-auto inline-flex items-center justify-center h-12 px-8 rounded-full border border-white/10 hover:border-white/20 text-white text-sm font-bold uppercase tracking-wider transition-all bg-transparent hover:bg-white/5"
              >
                Book a Demo
              </Link>
            </div>
          </div>
        </section>

      </main>

      <FooterPremium hideCTA={true} />
    </>
  );
}
