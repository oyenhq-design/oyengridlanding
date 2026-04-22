"use client"

import { motion } from "framer-motion"
import { Layout, Video, Database } from "lucide-react"
import { fadeUpVariant, staggerContainerVariant, staggerItemVariant } from "@/lib/motion"

export function CoreFeaturesSection() {
  const features = [
    {
      title: "Programme Management",
      description: "Build multi-module curriculums with prerequisite gates, module locking, and automated invite-only cohort access.",
      icon: Layout,
      preview: (
        <div className="w-full bg-[#0A0A0A] border border-[#1A1A1A] rounded-lg p-4 mt-5">
          <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[#1A1A1A]">
            <div className="w-1.5 h-1.5 rounded-full bg-[#C9A96E]" />
            <span className="text-[10px] font-bold text-white uppercase tracking-widest">Cohort A — Active</span>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between p-2.5 rounded-md bg-[#111111] border border-[#1A1A1A] border-l-2 border-l-[#C9A96E]">
              <span className="text-[10px] font-semibold text-white">01 — Foundations</span>
              <span className="text-[9px] text-[#27C93F] bg-[#27C93F]/10 px-1.5 py-0.5 rounded-sm font-bold">Active</span>
            </div>
            <div className="flex items-center justify-between p-2.5 rounded-md bg-[#0D0D0D] border border-[#1A1A1A]">
              <span className="text-[10px] font-medium text-[#555555]">02 — Advanced</span>
              <span className="text-[9px] text-[#333333] font-medium">Locked</span>
            </div>
            <div className="flex items-center justify-between p-2.5 rounded-md bg-[#0D0D0D] border border-[#1A1A1A]">
              <span className="text-[10px] font-medium text-[#555555]">03 — Certification</span>
              <span className="text-[9px] text-[#333333] font-medium">Locked</span>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Session Delivery",
      description: "Host HD video sessions natively with silent attendance tracking, integrated chat, and automatic recording to your vault.",
      icon: Video,
      preview: (
        <div className="w-full bg-[#0A0A0A] border border-[#1A1A1A] rounded-lg overflow-hidden mt-5">
          <div className="h-24 bg-[#0D0D0D] relative flex items-center justify-center border-b border-[#1A1A1A]">
            <div className="w-10 h-10 rounded-sm bg-[#111111] border border-[#1A1A1A] flex items-center justify-center text-[10px] text-[#A1A1AA] font-bold">SC</div>
            <div className="absolute top-2 right-2 flex items-center gap-1.5 bg-[#0A0A0A] border border-[#1A1A1A] px-2 py-1 rounded-sm">
              <motion.div animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} className="w-1.5 h-1.5 rounded-full bg-[#27C93F]" />
              <span className="text-[8px] text-white font-bold tracking-wider">LIVE</span>
            </div>
          </div>
          <div className="p-3 flex justify-between items-center">
            <span className="text-[9px] text-[#A1A1AA]">42 participants joined</span>
            <div className="flex gap-1.5">
              <div className="w-6 h-6 rounded-sm bg-[#111111] border border-[#1A1A1A]" />
              <div className="w-6 h-6 rounded-sm bg-[#111111] border border-[#1A1A1A]" />
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Recordings & Storage",
      description: "An automated cloud vault processes and secures every session. Permission gates enforce material access per cohort.",
      icon: Database,
      preview: (
        <div className="w-full bg-[#0A0A0A] border border-[#1A1A1A] rounded-lg p-4 mt-5">
          <div className="grid grid-cols-2 gap-2">
            {[
              { name: "Session_01.mp4", size: "420 MB", hot: true },
              { name: "Session_02.mp4", size: "380 MB", hot: false },
              { name: "Session_03.mp4", size: "512 MB", hot: false },
              { name: "Session_04.mp4", size: "290 MB", hot: false },
            ].map((f, i) => (
              <div key={i} className={`border rounded-md p-2 ${f.hot ? "border-[#C9A96E]/30 bg-[#C9A96E]/5" : "border-[#1A1A1A] bg-[#0D0D0D]"}`}>
                <div className="w-4 h-4 rounded-sm bg-[#111111] border border-[#1A1A1A] mb-1.5 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-sm bg-[#C9A96E] opacity-60" />
                </div>
                <div className="text-[8px] font-semibold text-[#D1D1D1] truncate">{f.name}</div>
                <div className="text-[7px] text-[#555555]">{f.size}</div>
              </div>
            ))}
          </div>
        </div>
      )
    }
  ]

  return (
    <section className="py-32 bg-[#0A0A0A] border-b border-[#1A1A1A]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUpVariant}
          className="mb-16"
        >
          <p className="text-[10px] font-bold text-[#A1A1AA] uppercase tracking-[0.2em] mb-4">Core Platform</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Everything your organisation needs{" "}
            <span className="text-[#A1A1AA] font-light">— in one system</span>
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {features.map((f, idx) => {
            const Icon = f.icon
            return (
              <motion.div
                key={idx}
                variants={staggerItemVariant}
                whileHover={{ y: -4, borderColor: "rgba(255,255,255,0.08)" }}
                transition={{ duration: 0.2 }}
                className="flex flex-col bg-[#0D0D0D] border border-[#1A1A1A] rounded-xl p-6"
              >
                <div className="w-8 h-8 rounded-lg bg-[#111111] border border-[#1A1A1A] flex items-center justify-center mb-5">
                  <Icon className="w-4 h-4 text-[#C9A96E]" strokeWidth={1.5} />
                </div>
                <h3 className="text-white font-semibold text-sm mb-2 tracking-tight">{f.title}</h3>
                <p className="text-[#A1A1AA] text-xs leading-relaxed font-light">{f.description}</p>
                {f.preview}
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
