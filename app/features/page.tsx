"use client";

import { Header } from "@/components/shared/header";
import { Footer } from "@/components/shared/footer";
import { motion } from "framer-motion";
import { 
  Layout, Users, Video, Database, 
  GraduationCap, TrendingUp, Key,
  MessageSquare, MessagesSquare, 
  Bot, FileText, Sparkles, Pencil,
  Lock, BookOpen, ArrowRight, Star
} from "lucide-react";
import { InteractiveFeaturesSection } from "@/components/shared/interactive-features-section";
import Link from "next/link";

const categories = [
  {
    title: "Core Platform",
    description: "The foundational primitives for managing structured training.",
    accent: "gold",
    layout: "split-left",
    features: [
      { title: "Programme Hosting", desc: "Build multi-layered curriculums with strict dependencies.", icon: Layout },
      { title: "Participant Management", desc: "Granular access control and profile tracking.", icon: Users },
      { title: "Session Delivery", desc: "Native HD sessions directly in the browser.", icon: Video },
      { title: "Content Management", desc: "Immutable recording vaults and resource lockers.", icon: Database },
    ]
  },
  {
    title: "Training System",
    description: "Specialized tools for intensive cohort-based learning.",
    accent: "blue",
    layout: "grid-4",
    features: [
      { title: "Participant Profiles", desc: "Centralized view of attendance and engagement.", icon: GraduationCap },
      { title: "Progress Tracking", desc: "Automated progression metrics across modules.", icon: TrendingUp },
      { title: "Structured Learning Flow", desc: "Enforce module completion before unlocking next steps.", icon: Key },
      { title: "Trainer Control Panel", desc: "Override permissions, grade tasks, and monitor health.", icon: Layout },
    ]
  },
  {
    title: "AI Layer",
    description: "Intelligent assistance that understands the context of your curriculum.",
    accent: "gold",
    layout: "split-right",
    features: [
      { title: "AI Chat Assistant", desc: "Answers participant questions based on uploaded materials.", icon: Bot },
      { title: "Session Summaries", desc: "Automated transcription and key takeaway generation.", icon: FileText },
      { title: "Trainer AI Tools", desc: "Generate quiz questions and evaluate basic responses.", icon: Sparkles },
    ]
  },
  {
    title: "Communication",
    description: "Contextual chat systems integrated directly into the learning flow.",
    accent: "blue",
    layout: "grid-2",
    features: [
      { title: "Session Chat", desc: "Time-synced chat linked to specific live sessions.", icon: MessageSquare },
      { title: "Group Chat (Bootcamp)", desc: "Persistent cohort communication channels.", icon: MessagesSquare },
    ]
  },
  {
    title: "Notes System",
    description: "Integrated knowledge capture for participants and trainers.",
    accent: "gold",
    layout: "grid-3",
    features: [
      { title: "Private Notes", desc: "Participant-specific workspaces linked to modules.", icon: Pencil },
      { title: "Session Notes", desc: "Collaborative or private note-taking during live sessions.", icon: BookOpen },
      { title: "Participant Notes", desc: "Trainer-only administrative notes on participant health.", icon: Lock },
    ]
  }
];

export default function FeaturesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#050505] text-white selection:bg-[#D4AF37]/30 font-sans relative overflow-x-hidden">
      
      {/* Global Background Atmosphere */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Top Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[#D4AF37] opacity-[0.05] blur-[140px] rounded-full -translate-y-1/2" />
        {/* Mid Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[800px] bg-[#3B82F6] opacity-[0.02] blur-[160px] rounded-full" />
        {/* Subtle radial gradients across sections */}
        <div className="absolute top-[20%] right-0 w-[600px] h-[600px] bg-[#D4AF37] opacity-[0.03] blur-[120px] rounded-full" />
        <div className="absolute bottom-[20%] left-0 w-[600px] h-[600px] bg-[#3B82F6] opacity-[0.03] blur-[120px] rounded-full" />
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
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-[#D4AF37] text-[12px] font-bold uppercase tracking-[0.2em] mb-8">
                <Star className="w-3.5 h-3.5 fill-[#D4AF37]" />
                Platform Infrastructure
              </div>
              
              <h1 className="text-[48px] md:text-[72px] font-bold text-white mb-8 tracking-tight leading-[1.05]">
                A <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FACC15] via-white to-[#EAB308] animate-gradient-x">complete system</span>, <br />
                not a collection of features.
              </h1>
              
              <p className="text-[18px] md:text-[21px] text-[#A1A1AA] font-light leading-relaxed max-w-2xl mx-auto mb-12">
                Every capability in OYEN GRID is designed to work together — creating a single, structured environment for high-stakes programme delivery.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
                <Link href="/get-started">
                  <button className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#FACC15] to-[#EAB308] text-black font-bold text-[16px] transition-all duration-300 shadow-[0_10px_30px_rgba(250,204,21,0.2)] hover:shadow-[0_20px_40px_rgba(250,204,21,0.4)] hover:scale-105 active:scale-95">
                    Start Building
                  </button>
                </Link>
                <Link href="/contact">
                  <button className="px-8 py-4 rounded-xl border border-white/10 bg-white/5 text-white font-bold text-[16px] transition-all duration-300 hover:bg-white/10 hover:border-white/20 active:scale-95">
                    Talk to Sales
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>
          
          {/* Section Transition Fade */}
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#050505] to-transparent pointer-events-none" />
        </section>

        <InteractiveFeaturesSection />

        {/* ════════════════════════════════════════════
            2. FEATURE CATEGORIES (ALTERNATING LAYOUTS)
        ════════════════════════════════════════════ */}
        <div className="space-y-48 py-32">
          {categories.map((category, idx) => (
            <section 
              key={idx} 
              className="relative px-6 lg:px-14 scroll-mt-24"
            >
              <div className="max-w-[1280px] mx-auto">
                
                {category.layout === "split-left" && (
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                    <motion.div 
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      className="lg:col-span-5 pt-8"
                    >
                      <div className={`inline-block text-[13px] font-bold tracking-[0.2em] uppercase mb-4 ${category.accent === "gold" ? "text-[#D4AF37]" : "text-[#3B82F6]"}`}>
                        {category.title}
                      </div>
                      <h2 className="text-[32px] md:text-[42px] font-bold text-white mb-8 tracking-tight leading-tight">
                        {category.description}
                      </h2>
                      <p className="text-[#A1A1AA] text-lg font-light leading-relaxed mb-10">
                        The foundational building blocks required to manage thousands of participants across global time zones with total precision.
                      </p>
                      <div className={`w-20 h-1 rounded-full ${category.accent === "gold" ? "bg-[#D4AF37]" : "bg-[#3B82F6]"}`} />
                    </motion.div>
                    
                    <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
                      {category.features.map((feature, fIdx) => (
                        <FeatureCard key={fIdx} feature={feature} accent={category.accent} delay={fIdx * 0.1} />
                      ))}
                    </div>
                  </div>
                )}

                {category.layout === "split-right" && (
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                    <div className="lg:col-span-7 order-2 lg:order-1 grid grid-cols-1 md:grid-cols-2 gap-6">
                      {category.features.map((feature, fIdx) => (
                        <FeatureCard key={fIdx} feature={feature} accent={category.accent} delay={fIdx * 0.1} />
                      ))}
                    </div>

                    <motion.div 
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      className="lg:col-span-5 pt-8 order-1 lg:order-2"
                    >
                      <div className={`inline-block text-[13px] font-bold tracking-[0.2em] uppercase mb-4 ${category.accent === "gold" ? "text-[#D4AF37]" : "text-[#3B82F6]"}`}>
                        {category.title}
                      </div>
                      <h2 className="text-[32px] md:text-[42px] font-bold text-white mb-8 tracking-tight leading-tight">
                        {category.description}
                      </h2>
                      <p className="text-[#A1A1AA] text-lg font-light leading-relaxed mb-10">
                        Move beyond static materials with an intelligent layer that understands your curriculum and supports every participant journey.
                      </p>
                      <div className={`w-20 h-1 rounded-full ${category.accent === "gold" ? "bg-[#D4AF37]" : "bg-[#3B82F6]"}`} />
                    </motion.div>
                  </div>
                )}

                {category.layout.startsWith("grid") && (
                  <div>
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="text-center mb-20 max-w-3xl mx-auto"
                    >
                      <div className={`inline-block text-[13px] font-bold tracking-[0.2em] uppercase mb-4 ${category.accent === "gold" ? "text-[#D4AF37]" : "text-[#3B82F6]"}`}>
                        {category.title}
                      </div>
                      <h2 className="text-[32px] md:text-[42px] font-bold text-white mb-6 tracking-tight leading-tight">
                        {category.description}
                      </h2>
                    </motion.div>

                    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${category.layout.split("-")[1]} gap-8`}>
                      {category.features.map((feature, fIdx) => (
                        <FeatureCard key={fIdx} feature={feature} accent={category.accent} delay={fIdx * 0.1} />
                      ))}
                    </div>
                  </div>
                )}

              </div>
              
              {/* Subtle transition fade */}
              <div className="absolute bottom-[-32px] left-0 w-full h-[64px] bg-gradient-to-b from-[#050505] to-transparent pointer-events-none opacity-50" />
            </section>
          ))}
        </div>

        {/* ════════════════════════════════════════════
            3. FINAL CONVERSION SECTION
        ════════════════════════════════════════════ */}
        <section className="relative py-48 overflow-hidden bg-transparent">
          {/* Gradient Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#D4AF37] opacity-[0.08] blur-[120px] rounded-full pointer-events-none" />
          
          <div className="max-w-[1280px] mx-auto px-6 lg:px-14 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-[42px] md:text-[72px] font-bold text-white tracking-tight leading-[1.05] mb-8">
                Ready to structure <br /> your operations?
              </h2>
              <p className="text-[20px] md:text-[24px] text-[#A1A1AA] font-light mb-16 max-w-2xl mx-auto leading-relaxed">
                Stop losing control across fragmented tools. Run your programmes in one unified system built for scale and structural integrity.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Link href="/get-started">
                  <button className="px-12 py-5 rounded-2xl bg-[#D4AF37] text-black font-bold text-[18px] transition-all duration-300 shadow-[0_15px_40px_rgba(212,175,55,0.3)] hover:shadow-[0_25px_60px_rgba(212,175,55,0.5)] hover:scale-105 active:scale-95">
                    Start Building →
                  </button>
                </Link>
                <Link href="/contact">
                  <button className="px-12 py-5 rounded-2xl border border-white/10 bg-white/5 text-white font-bold text-[18px] transition-all duration-300 hover:bg-white/10 hover:border-white/20 active:scale-95">
                    Talk to Sales
                  </button>
                </Link>
              </div>
              
              <p className="mt-16 text-[13px] text-[#52525B] font-bold uppercase tracking-[0.2em]">
                Enterprise-grade security included by default.
              </p>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

function FeatureCard({ feature, accent, delay }: { feature: any, accent: string, delay: number }) {
  const Icon = feature.icon;
  return (
    <motion.div 
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="group relative h-full"
    >
      {/* Glass Card */}
      <div className="h-full bg-[rgba(255,255,255,0.02)] backdrop-blur-xl border border-white/[0.08] rounded-[24px] p-10 flex flex-col transition-all duration-300 group-hover:border-[#D4AF37]/40 group-hover:bg-white/[0.04] group-hover:shadow-[0_30px_70px_rgba(0,0,0,0.7)] overflow-hidden">
        
        {/* Border Glow Accent */}
        <div className={`absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-[24px] ${accent === "gold" ? "shadow-[0_0_20px_rgba(212,175,55,0.15)]" : "shadow-[0_0_20px_rgba(59,130,246,0.15)]"}`} />

        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-10 transition-all duration-500 border ${accent === "gold" ? "bg-[#D4AF37]/5 border-[#D4AF37]/10 text-[#D4AF37] group-hover:bg-[#D4AF37]/20 group-hover:border-[#D4AF37]/40 group-hover:shadow-[0_0_30px_rgba(212,175,55,0.3)]" : "bg-[#3B82F6]/5 border-[#3B82F6]/10 text-[#3B82F6] group-hover:bg-[#3B82F6]/20 group-hover:border-[#3B82F6]/40 group-hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]"}`}>
          <Icon className="w-7 h-7" strokeWidth={1.5} />
        </div>
        
        <h3 className="text-[22px] font-bold text-white mb-5 group-hover:text-white transition-colors">
          {feature.title}
        </h3>
        <p className="text-[16px] text-[#A1A1AA] leading-relaxed font-light group-hover:text-white/80 transition-colors">
          {feature.desc}
        </p>

        <div className="mt-auto pt-10 flex items-center gap-2 text-[14px] font-bold text-white/40 group-hover:text-[#D4AF37] transition-all duration-300 translate-x-[-4px] group-hover:translate-x-0">
          Learn more <ArrowRight className="w-4.5 h-4.5" />
        </div>
      </div>
    </motion.div>
  );
}
