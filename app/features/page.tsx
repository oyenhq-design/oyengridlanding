"use client";

import { Header } from "@/components/shared/header";
import { Footer } from "@/components/shared/footer";
import { motion } from "framer-motion";
import { 
  Layout, Users, Video, Database, 
  GraduationCap, TrendingUp, Key,
  MessageSquare, MessagesSquare, 
  Bot, FileText, Sparkles, Pencil,
  Lock, BookOpen, ArrowRight, Star,
  ShieldCheck, BarChart3, Zap, Users2
} from "lucide-react";
import { InteractiveFeaturesSection } from "@/components/shared/interactive-features-section";
import Link from "next/link";
import Image from "next/image";

export default function FeaturesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0B0B0C] text-white selection:bg-[#F5B942]/30 font-sans relative overflow-x-hidden">
      
      {/* Global Background Atmosphere */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[#F5B942] opacity-[0.05] blur-[140px] rounded-full -translate-y-1/2" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[800px] bg-[#3B82F6] opacity-[0.02] blur-[160px] rounded-full" />
      </div>

      <Header />
      
      <main className="relative z-10 flex-1">
        
        {/* ════════════════════════════════════════════
            1. HERO SECTION
        ════════════════════════════════════════════ */}
        <section className="relative pt-48 pb-32 flex items-center justify-center min-h-[70vh]">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-14 text-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-4xl mx-auto"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5B942]/10 border border-[#F5B942]/20 text-[#F5B942] text-[12px] font-bold uppercase tracking-[0.2em] mb-8">
                <Star className="w-3.5 h-3.5 fill-[#F5B942]" />
                Platform Infrastructure
              </div>
              
              <h1 className="text-[48px] md:text-[72px] lg:text-[80px] font-bold text-white mb-8 tracking-tight leading-[1.05]">
                Run structured programmes <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5B942] via-white to-[#D4A017]">at global scale.</span>
              </h1>
              
              <p className="text-[18px] md:text-[21px] text-[#A1A1AA] font-light leading-relaxed max-w-2xl mx-auto mb-12">
                Every capability in OYEN GRID is designed to work together — creating a single, structured environment for high-stakes programme delivery.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Link href="/get-started">
                  <button className="px-10 py-5 rounded-2xl bg-[#F5B942] text-black font-bold text-[17px] transition-all duration-300 shadow-[0_15px_40px_rgba(245,185,66,0.3)] hover:shadow-[0_25px_60px_rgba(245,185,66,0.5)] hover:scale-105 active:scale-95">
                    Start Building
                  </button>
                </Link>
                <Link href="/contact">
                  <button className="px-10 py-5 rounded-2xl border border-white/10 bg-white/5 text-white font-bold text-[17px] transition-all duration-300 hover:bg-white/10 hover:border-white/20 active:scale-95">
                    Talk to Sales
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0B0B0C] to-transparent pointer-events-none" />
        </section>

        {/* ════════════════════════════════════════════
            2. SYSTEM STATEMENT SECTION
        ════════════════════════════════════════════ */}
        <section className="py-24 text-center border-y border-white/5 bg-white/[0.01]">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-[1280px] mx-auto px-6"
          >
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#F5B942]/50 to-transparent mx-auto mb-12" />
            <h2 className="text-[32px] md:text-[48px] font-bold text-white tracking-tight">
              “A complete system, not a collection of features.”
            </h2>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#F5B942]/50 to-transparent mx-auto mt-12" />
          </motion.div>
        </section>

        {/* ════════════════════════════════════════════
            3. FEATURE TABS SECTION
        ════════════════════════════════════════════ */}
        <InteractiveFeaturesSection />

        {/* ════════════════════════════════════════════
            4. CORE PLATFORM SECTION (Grid of 4)
        ════════════════════════════════════════════ */}
        <section className="py-32 px-6 lg:px-14">
          <div className="max-w-[1280px] mx-auto">
            <div className="mb-20">
              <div className="text-[#F5B942] text-[13px] font-bold tracking-[0.2em] uppercase mb-4">Core Platform</div>
              <h2 className="text-[36px] md:text-[48px] font-bold text-white tracking-tight">The foundational primitives.</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: "Programme Hosting", desc: "Build multi-layered curriculums with strict dependencies.", icon: Layout },
                { title: "Participant Management", desc: "Granular access control and profile tracking.", icon: Users },
                { title: "Session Delivery", desc: "Native HD sessions directly in the browser.", icon: Video },
                { title: "Content Management", desc: "Immutable recording vaults and resource lockers.", icon: Database },
              ].map((feature, i) => (
                <div key={i} className="group relative bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] rounded-[24px] p-10 flex flex-col transition-all duration-500 hover:border-[#F5B942]/40 hover:bg-white/[0.04] hover:shadow-[0_30px_70px_rgba(0,0,0,0.7)] hover:-translate-y-2">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-10 transition-all duration-500 group-hover:bg-[#F5B942]/20 group-hover:border-[#F5B942]/40 group-hover:shadow-[0_0_25px_rgba(245,185,66,0.2)]">
                    <feature.icon className="w-7 h-7 text-[#71717A] group-hover:text-[#F5B942] transition-colors" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-[22px] font-bold text-white mb-5">{feature.title}</h3>
                  <p className="text-[16px] text-[#A1A1AA] leading-relaxed font-light group-hover:text-white/80 transition-colors">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════
            5. TRAINING SYSTEM SECTION (Visual Workflow)
        ════════════════════════════════════════════ */}
        <section className="py-32 px-6 lg:px-14 bg-white/[0.01]">
          <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
            <div className="lg:col-span-5">
              <div className="text-[#3B82F6] text-[13px] font-bold tracking-[0.2em] uppercase mb-4">Training System</div>
              <h2 className="text-[36px] md:text-[48px] font-bold text-white mb-8 tracking-tight">Structured learning flows.</h2>
              <div className="space-y-8">
                {[
                  { title: "Participant Profiles", desc: "Centralized view of attendance and engagement.", icon: GraduationCap },
                  { title: "Progress Tracking", desc: "Automated progression metrics across modules.", icon: TrendingUp },
                  { title: "Learning Gates", desc: "Enforce module completion before unlocking next steps.", icon: Key },
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 group">
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-[#3B82F6]/40 transition-colors">
                      <item.icon className="w-5 h-5 text-[#71717A] group-hover:text-[#3B82F6]" />
                    </div>
                    <div>
                      <h4 className="text-[18px] font-bold text-white mb-1">{item.title}</h4>
                      <p className="text-[15px] text-[#A1A1AA] leading-relaxed font-light">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-7 relative">
              <div className="absolute inset-0 bg-[#3B82F6] opacity-[0.05] blur-[120px] rounded-full" />
              <div className="relative bg-[#050505] border border-white/10 rounded-[32px] p-8 shadow-2xl">
                <div className="flex items-center gap-4 mb-10">
                  <div className="flex-1 h-2 bg-[#3B82F6] rounded-full" />
                  <div className="flex-1 h-2 bg-[#3B82F6]/20 rounded-full" />
                  <div className="flex-1 h-2 bg-[#3B82F6]/20 rounded-full" />
                </div>
                <div className="grid grid-cols-3 gap-6">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="h-24 rounded-xl border border-white/5 bg-white/[0.02]" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════
            6. COMMUNICATION SECTION (Centered Chat UI)
        ════════════════════════════════════════════ */}
        <section className="py-48 px-6 lg:px-14">
          <div className="max-w-[1000px] mx-auto text-center mb-20">
            <div className="text-[#F5B942] text-[13px] font-bold tracking-[0.2em] uppercase mb-4">Communication</div>
            <h2 className="text-[36px] md:text-[56px] font-bold text-white mb-8 tracking-tight">Contextual Chat for Bootcamps.</h2>
            <p className="text-[19px] text-[#A1A1AA] font-light max-w-2xl mx-auto">
              Integrated messaging that keeps trainers and participants aligned throughout the entire learning journey.
            </p>
          </div>
          
          <div className="max-w-[1200px] mx-auto relative group">
            <div className="absolute -inset-10 bg-[#F5B942] opacity-[0.03] blur-[100px] rounded-full pointer-events-none group-hover:opacity-[0.06] transition-opacity duration-700" />
            <div className="relative bg-[#0B0B0C] border border-white/10 rounded-[40px] shadow-[0_50px_100px_rgba(0,0,0,0.8)] overflow-hidden aspect-[16/8] flex">
              <div className="w-64 border-r border-white/5 bg-white/[0.01] p-6 hidden md:block">
                <div className="space-y-4">
                  {[...Array(4)].map((_, i) => <div key={i} className="h-3 bg-white/10 rounded-full w-full" />)}
                </div>
              </div>
              <div className="flex-1 p-8 flex flex-col">
                <div className="flex-1 space-y-6">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className={`flex gap-4 ${i % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
                      <div className="w-10 h-10 rounded-full bg-white/5 shrink-0" />
                      <div className="p-4 rounded-2xl bg-white/[0.03] max-w-[70%]">
                        <div className="h-3 bg-white/10 rounded-full w-48 mb-2" />
                        <div className="h-2 bg-white/5 rounded-full w-32" />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-8 p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
                  <span className="text-white/20 text-sm">Type your message...</span>
                  <div className="w-8 h-8 rounded-lg bg-[#F5B942] flex items-center justify-center">
                    <ArrowRight className="w-4 h-4 text-black" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════
            7. AI LAYER SECTION (Visually Distinct)
        ════════════════════════════════════════════ */}
        <section className="relative py-48 px-6 lg:px-14 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0C] via-[#1A0B2E]/20 to-[#0B0B0C]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-[#9333EA] opacity-[0.08] blur-[160px] rounded-full pointer-events-none" />
          
          <div className="max-w-[1280px] mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1 relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-[#F5B942]/10 blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-700" />
              <div className="relative rounded-[40px] border border-white/10 overflow-hidden shadow-2xl">
                <Image 
                  src="/saas_ai_assistant_ui_1778044900996.png" 
                  alt="AI Assistant UI" 
                  width={800} height={600} 
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-[12px] font-bold uppercase tracking-[0.2em] mb-8">
                <Sparkles className="w-3.5 h-3.5 fill-purple-400" />
                Intelligent Layer
              </div>
              <h2 className="text-[36px] md:text-[56px] font-bold text-white mb-8 tracking-tight">AI that understands <br /> your context.</h2>
              <div className="space-y-10">
                {[
                  { title: "AI Chat Assistant", desc: "Answers participant questions based on uploaded materials.", icon: Bot },
                  { title: "Session Summaries", desc: "Automated transcription and key takeaway generation.", icon: FileText },
                  { title: "Trainer AI Tools", desc: "Generate quiz questions and evaluate basic responses.", icon: Sparkles },
                ].map((item, i) => (
                  <div key={i} className="group flex gap-8">
                    <div className="w-14 h-14 rounded-2xl bg-purple-500/5 border border-purple-500/10 flex items-center justify-center shrink-0 group-hover:bg-purple-500/20 transition-all">
                      <item.icon className="w-7 h-7 text-purple-400" />
                    </div>
                    <div>
                      <h4 className="text-[20px] font-bold text-white mb-2">{item.title}</h4>
                      <p className="text-[17px] text-[#A1A1AA] leading-relaxed font-light">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════
            8. NOTES SYSTEM SECTION
        ════════════════════════════════════════════ */}
        <section className="py-48 px-6 lg:px-14">
          <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div>
              <div className="text-[#F5B942] text-[13px] font-bold tracking-[0.2em] uppercase mb-4">Notes System</div>
              <h2 className="text-[36px] md:text-[56px] font-bold text-white mb-10 tracking-tight">Integrated knowledge capture.</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { title: "Private Notes", desc: "Participant-specific workspaces.", icon: Pencil },
                  { title: "Session Notes", desc: "Linked to live session recordings.", icon: BookOpen },
                  { title: "Trainer Notes", desc: "Internal participant evaluations.", icon: Lock },
                ].map((item, i) => (
                  <div key={i} className="p-8 bg-white/[0.02] border border-white/[0.08] rounded-3xl hover:border-[#F5B942]/40 transition-all">
                    <item.icon className="w-6 h-6 text-[#F5B942] mb-6" />
                    <h4 className="text-[18px] font-bold text-white mb-2">{item.title}</h4>
                    <p className="text-[14px] text-[#A1A1AA] font-light leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative group">
              <div className="absolute inset-0 bg-[#F5B942] opacity-[0.04] blur-[100px] rounded-full" />
              <div className="relative rounded-[40px] border border-white/10 overflow-hidden shadow-2xl">
                <Image 
                  src="/saas_notes_editor_ui_1778044925516.png" 
                  alt="Notes Editor UI" 
                  width={800} height={600} 
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════
            9. SOCIAL PROOF SECTION
        ════════════════════════════════════════════ */}
        <section className="py-48 px-6 lg:px-14 bg-white/[0.01] border-y border-white/5">
          <div className="max-w-[1280px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <div>
                <h2 className="text-[36px] md:text-[56px] font-bold text-white mb-12 tracking-tight">Proven at the scale of thousands.</h2>
                <div className="grid grid-cols-2 gap-12">
                  {[
                    { val: "2x", label: "Faster delivery" },
                    { val: "40%", label: "Operational efficiency" },
                    { val: "92%", label: "Participant completion" },
                    { val: "10k+", label: "Cohorts managed" },
                  ].map((stat, i) => (
                    <div key={i}>
                      <div className="text-[42px] font-bold text-[#F5B942] mb-1">{stat.val}</div>
                      <div className="text-[#71717A] text-sm uppercase tracking-widest font-bold">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="p-12 bg-[#0B0B0C] border border-white/10 rounded-[40px] shadow-2xl relative">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-14 h-14 rounded-full bg-[#F5B942]/20 flex items-center justify-center font-bold text-[#F5B942]">JD</div>
                    <div>
                      <div className="text-white font-bold text-lg">Jane Doe</div>
                      <div className="text-[#71717A] text-sm">Director of Learning, TechCorp</div>
                    </div>
                  </div>
                  <p className="text-[20px] text-[#A1A1AA] italic font-light leading-relaxed">
                    “OYEN GRID transformed how we deliver our bootcamps. The level of structural control and automated insight is unlike anything we’ve used before. It’s an absolute game changer for high-stakes training.”
                  </p>
                  <div className="absolute top-10 right-12 text-[#F5B942]/20">
                    <Star className="w-12 h-12 fill-current" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════
            10. FINAL CTA SECTION
        ════════════════════════════════════════════ */}
        <section className="relative py-48 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#F5B942] opacity-[0.1] blur-[140px] rounded-full pointer-events-none" />
          
          <div className="max-w-[1280px] mx-auto px-6 lg:px-14 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-[42px] md:text-[72px] font-bold text-white tracking-tight leading-[1.05] mb-10 max-w-4xl mx-auto">
                Stop losing control across tools. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5B942] via-white to-[#D4A017]">Run your programmes in one system.</span>
              </h2>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
                <Link href="/get-started">
                  <button className="px-12 py-5 rounded-2xl bg-[#F5B942] text-black font-bold text-[18px] transition-all duration-300 shadow-[0_20px_50px_rgba(245,185,66,0.4)] hover:shadow-[0_30px_70px_rgba(245,185,66,0.6)] hover:scale-105 active:scale-95">
                    Start Building →
                  </button>
                </Link>
                <Link href="/contact">
                  <button className="px-12 py-5 rounded-2xl border border-white/10 bg-white/5 text-white font-bold text-[18px] transition-all duration-300 hover:bg-white/10 hover:scale-105 active:scale-95">
                    Talk to Sales
                  </button>
                </Link>
              </div>
              
              <div className="flex items-center justify-center gap-12 opacity-40">
                {[...Array(4)].map((_, i) => <div key={i} className="w-24 h-8 bg-white/10 rounded-md" />)}
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
