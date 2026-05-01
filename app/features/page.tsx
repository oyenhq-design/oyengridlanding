"use client"

import { Header } from "@/components/shared/header"
import { Footer } from "@/components/shared/footer"
import { motion } from "framer-motion"
import { 
  Layout, Users, Video, Database, 
  GraduationCap, TrendingUp, Key,
  MessageSquare, MessagesSquare, 
  Bot, FileText, Sparkles, Pencil,
  Lock, BookOpen, ArrowRight
} from "lucide-react"
import { InteractiveFeaturesSection } from "@/components/shared/interactive-features-section"
import Link from "next/link"

const categories = [
  {
    title: "Core Platform",
    description: "The foundational primitives for managing structured training.",
    bg: "bg-[#0A0A0A]",
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
    bg: "bg-[#0F0F10]",
    features: [
      { title: "Participant Profiles", desc: "Centralized view of attendance and engagement.", icon: GraduationCap },
      { title: "Progress Tracking", desc: "Automated progression metrics across modules.", icon: TrendingUp },
      { title: "Structured Learning Flow", desc: "Enforce module completion before unlocking next steps.", icon: Key },
      { title: "Trainer Control Panel", desc: "Override permissions, grade tasks, and monitor health.", icon: Layout },
    ]
  },
  {
    title: "Communication",
    description: "Contextual chat systems integrated directly into the learning flow.",
    bg: "bg-[#0A0A0A]",
    features: [
      { title: "Session Chat", desc: "Time-synced chat linked to specific live sessions.", icon: MessageSquare },
      { title: "Group Chat (Bootcamp)", desc: "Persistent cohort communication channels.", icon: MessagesSquare },
    ]
  },
  {
    title: "AI Layer",
    description: "Intelligent assistance that understands the context of your curriculum.",
    bg: "bg-[#0F0F10]",
    features: [
      { title: "AI Chat Assistant", desc: "Answers participant questions based on uploaded materials.", icon: Bot },
      { title: "Session Summaries", desc: "Automated transcription and key takeaway generation.", icon: FileText },
      { title: "Trainer AI Tools", desc: "Generate quiz questions and evaluate basic responses.", icon: Sparkles },
    ]
  },
  {
    title: "Notes System",
    description: "Integrated knowledge capture for participants and trainers.",
    bg: "bg-[#0A0A0A]",
    features: [
      { title: "Private Notes", desc: "Participant-specific workspaces linked to modules.", icon: Pencil },
      { title: "Session Notes", desc: "Collaborative or private note-taking during live sessions.", icon: BookOpen },
      { title: "Participant Notes", desc: "Trainer-only administrative notes on participant health.", icon: Lock },
    ]
  }
]

export default function FeaturesPage() {
  return (
    <main className="flex min-h-screen flex-col bg-[#0A0A0A] font-sans selection:bg-[#C9A86A]/30 selection:text-white overflow-x-hidden">
      <Header />
      
      {/* ════════════════════════════════════════════
          1. HERO SECTION
      ════════════════════════════════════════════ */}
      <section className="relative pt-[180px] pb-[100px] border-b border-[#FFFFFF08] flex items-center justify-center min-h-[60vh]">
        {/* Subtle radial glow */}
        <div 
          aria-hidden
          className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-40"
        >
          <div 
            className="w-[800px] h-[500px] rounded-full"
            style={{
              background: "radial-gradient(ellipse at center, rgba(201,168,106,0.06) 0%, transparent 70%)"
            }}
          />
        </div>

        <div className="relative max-w-[1200px] mx-auto px-6 lg:px-8 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-4xl mx-auto"
          >
            <h1 
              className="font-bold text-white mb-8 tracking-tight"
              style={{ fontSize: "clamp(46px, 6vw, 64px)", lineHeight: 1.15 }}
            >
              A <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-[#E5C25A] to-[#C9A86A]">complete system</span>, not a collection of features.
            </h1>
            <p 
              className="text-[#B3B3B3] font-medium leading-relaxed max-w-2xl mx-auto"
              style={{ fontSize: "clamp(18px, 2.5vw, 20px)" }}
            >
              Every capability in OYEN GRID is designed to work together — creating a single, structured environment for programme delivery.
            </p>
          </motion.div>
        </div>
      </section>

      <InteractiveFeaturesSection />

      {/* ════════════════════════════════════════════
          2. FEATURE SECTIONS
      ════════════════════════════════════════════ */}
      <div className="relative z-10">
        {categories.map((category, idx) => (
          <section 
            key={idx} 
            className={`py-[100px] border-b border-[#FFFFFF08] ${category.bg}`}
          >
            <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
              {/* Section Header */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="mb-14"
              >
                <h2 className="text-[28px] md:text-[32px] font-semibold text-white mb-4 tracking-tight">
                  {category.title}
                </h2>
                <p className="text-[16px] md:text-[18px] text-[#A1A1AA] font-medium max-w-2xl leading-relaxed">
                  {category.description}
                </p>
              </motion.div>

              {/* Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.features.map((feature, fIdx) => {
                  const Icon = feature.icon
                  return (
                    <motion.div 
                      key={fIdx}
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.5, delay: fIdx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                      whileHover={{ y: -6 }}
                      className="group bg-[#111111] rounded-[16px] p-6 lg:p-[24px] transition-all duration-300 ease-out border border-[#FFFFFF08] hover:border-[#C9A86A] hover:shadow-[0_0_25px_rgba(201,168,106,0.15)] flex flex-col"
                    >
                      <div className="w-[48px] h-[48px] rounded-full bg-[#1A1A1C] border border-[#2A2A2E] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#C9A86A]/10 group-hover:border-[#C9A86A]/30 transition-all duration-300">
                        <Icon className="w-[20px] h-[20px] text-[#C9A86A]" strokeWidth={2} />
                      </div>
                      <h3 className="text-[18px] lg:text-[20px] font-medium text-white mb-3 tracking-wide group-hover:text-white transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-[15px] lg:text-[16px] text-[#B3B3B3] leading-relaxed group-hover:text-[#D4D4D8] transition-colors line-clamp-2">
                        {feature.desc}
                      </p>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* ════════════════════════════════════════════
          3. CTA SECTION (CUSTOM FOR THIS PAGE)
      ════════════════════════════════════════════ */}
      <section className="relative py-[140px] bg-[#0A0A0A] overflow-hidden">
        {/* Glow behind CTA */}
        <div 
          aria-hidden
          className="pointer-events-none absolute inset-0 flex items-center justify-center"
        >
          <div 
            className="w-[800px] h-[500px] rounded-full"
            style={{
              background: "radial-gradient(ellipse at center, rgba(201,168,106,0.08) 0%, transparent 60%)"
            }}
          />
        </div>

        <div className="relative z-10 max-w-[1000px] mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 
              className="font-bold text-white tracking-tight mb-6"
              style={{ fontSize: "clamp(38px, 5vw, 52px)", lineHeight: 1.1 }}
            >
              Ready to structure your operations?
            </h2>
            <p className="text-[18px] md:text-[20px] text-[#B3B3B3] mb-10 max-w-2xl mx-auto leading-relaxed">
              Stop losing control across tools. Run your programmes in one structured system.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-8">
              <Link href="/get-started" className="w-full sm:w-auto">
                <motion.button 
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-[#0A0A0A] text-[16px] md:text-[18px] transition-shadow shadow-[0_0_20px_rgba(201,168,106,0.2)] hover:shadow-[0_0_30px_rgba(201,168,106,0.35)]"
                  style={{ background: "linear-gradient(135deg, #D4AF37 0%, #C9A86A 100%)" }}
                >
                  Start Building
                </motion.button>
              </Link>
              <Link href="/contact" className="w-full sm:w-auto">
                <motion.button 
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-white text-[16px] md:text-[18px] border border-[#333333] hover:border-[#C9A86A]/50 bg-transparent transition-colors hover:bg-white/5 flex items-center justify-center gap-2"
                >
                  Talk to Sales
                  <ArrowRight className="w-4 h-4 text-[#C9A86A]" strokeWidth={2.5} />
                </motion.button>
              </Link>
            </div>

            <p className="text-[14px] font-medium text-[#71717A] tracking-wide">
              No setup fees. Cancel anytime.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
