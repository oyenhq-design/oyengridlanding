"use client"

import { Header } from "@/components/shared/header"
import { Footer } from "@/components/shared/footer"
import { CTASection } from "@/components/shared/cta-section"
import { motion } from "framer-motion"
import { 
  fadeUpVariant, 
  staggerContainerVariant, 
  staggerItemVariant 
} from "@/lib/motion"
import { 
  Layout, Users, Video, Database, 
  GraduationCap, TrendingUp, Key,
  MessageSquare, MessagesSquare, 
  Bot, FileText, Sparkles, Pencil,
  Lock, BookOpen
} from "lucide-react"

export default function FeaturesPage() {
  const categories = [
    {
      title: "Core Platform",
      description: "The foundational primitives for managing structured training.",
      features: [
        { title: "Programme Hosting", desc: "Build multi-layered curriculums with strict dependencies.", icon: Layout },
        { title: "Participant Management", desc: "Granular access control and profile tracking.", icon: Users },
        { title: "Session Delivery", desc: "Native HD sessions directly in the browser.", icon: Video },
        { title: "Content Management", desc: "Immutable recording vaults and resource lockers.", icon: Database },
      ]
    },
    {
      title: "Training / Bootcamp System",
      description: "Specialized tools for intensive cohort-based learning.",
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
      features: [
        { title: "Session Chat", desc: "Time-synced chat linked to specific live sessions.", icon: MessageSquare },
        { title: "Group Chat (Bootcamp)", desc: "Persistent cohort communication channels.", icon: MessagesSquare },
      ]
    },
    {
      title: "AI Layer",
      description: "Intelligent assistance that understands the context of your curriculum.",
      features: [
        { title: "AI Chat Assistant", desc: "Answers participant questions based on uploaded materials.", icon: Bot },
        { title: "Session Summaries", desc: "Automated transcription and key takeaway generation.", icon: FileText },
        { title: "Trainer AI Tools", desc: "Generate quiz questions and evaluate basic responses.", icon: Sparkles },
      ]
    },
    {
      title: "Notes System",
      description: "Integrated knowledge capture for participants and trainers.",
      features: [
        { title: "Private Notes", desc: "Participant-specific workspaces linked to modules.", icon: Pencil },
        { title: "Session Notes", desc: "Collaborative or private note-taking during live sessions.", icon: BookOpen },
        { title: "Participant Notes", desc: "Trainer-only administrative notes on participant health.", icon: Lock },
      ]
    }
  ]

  return (
    <main className="flex min-h-screen flex-col bg-[#0A0A0B] pt-[76px]">
      <Header />
      
      {/* Hero Section */}
      <section className="py-24 border-b border-[#1F1F23]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariant}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              A complete system, not a collection of features.
            </h1>
            <p className="text-[#A1A1AA] text-lg font-light leading-relaxed">
              Every capability in OYEN Grid is designed to work together, providing a single source of truth for your entire programme operation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Feature Categories */}
      <div className="bg-[#111113]">
        {categories.map((category, idx) => (
          <section key={idx} className="py-24 border-b border-[#1F1F23] even:bg-[#0A0A0B]">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeUpVariant}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-white mb-3 tracking-tight">{category.title}</h2>
                <p className="text-[#A1A1AA] text-sm font-light max-w-2xl">{category.description}</p>
              </motion.div>

              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainerVariant}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
              >
                {category.features.map((feature, fIdx) => {
                  const Icon = feature.icon
                  return (
                    <motion.div 
                      key={fIdx}
                      variants={staggerItemVariant}
                      whileHover={{ y: -4, backgroundColor: "rgba(255,255,255,0.03)" }}
                      transition={{ duration: 0.2 }}
                      className="bg-[#0A0A0B] border border-[#1F1F23] rounded-xl p-6 transition-colors"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#111113] border border-[#1F1F23] flex items-center justify-center mb-5">
                        <Icon className="w-4 h-4 text-[#C9A96E]" strokeWidth={1.5} />
                      </div>
                      <h3 className="text-white font-semibold text-sm mb-2">{feature.title}</h3>
                      <p className="text-[#A1A1AA] text-xs leading-relaxed font-light">{feature.desc}</p>
                    </motion.div>
                  )
                })}
              </motion.div>
            </div>
          </section>
        ))}
      </div>

      <CTASection />
      <Footer />
    </main>
  )
}
