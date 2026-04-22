"use client"

import { motion } from "framer-motion"
import { fadeUpVariant, staggerContainerVariant, staggerItemVariant } from "@/lib/motion"
import { Users, Video, Activity, Layout, ChevronRight, MoreHorizontal, Calendar, Clock } from "lucide-react"

export default function DashboardPage() {
  const stats = [
    { label: "Active Participants", value: "1,248", change: "+12%", trend: "up", icon: Users },
    { label: "Live Programmes", value: "8", change: "Stable", trend: "neutral", icon: Layout },
    { label: "Sessions Hosted", value: "156", change: "+24 this month", trend: "up", icon: Video },
    { label: "Avg. Attendance", value: "94.2%", change: "+2.1%", trend: "up", icon: Activity },
  ]

  const upcomingSessions = [
    { title: "System Design Deep Dive", programme: "Q3 Engineering Bootcamp", time: "14:00 today", duration: "90m", type: "Live" },
    { title: "React Performance Patterns", programme: "Frontend Mastery", time: "09:00 tomorrow", duration: "60m", type: "Live" },
    { title: "Database Sharding", programme: "Backend Architecture", time: "16:30 tomorrow", duration: "120m", type: "Recording" },
  ]

  const activeProgrammes = [
    { name: "Q3 Engineering Bootcamp", progress: 65, participants: 420, status: "Active" },
    { name: "Frontend Mastery Cohort", progress: 32, participants: 185, status: "Active" },
    { name: "Product Management 101", progress: 88, participants: 310, status: "Active" },
    { name: "DevOps Foundations", progress: 0, participants: 150, status: "Draft" },
  ]

  return (
    <motion.div 
      variants={staggerContainerVariant}
      initial="hidden"
      animate="visible"
      className="space-y-8"
    >
      {/* Page Header */}
      <motion.div variants={fadeUpVariant} className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white tracking-tight">Overview</h1>
          <p className="text-sm text-[#A1A1AA] font-light mt-1">Monitor your programmes and live cohorts.</p>
        </div>
        <div className="flex gap-3">
          <button className="bg-[#111113] border border-[#1F1F23] hover:border-[#555555] text-white px-4 py-2 text-xs font-semibold rounded-lg transition-colors shadow-sm">
            Generate Report
          </button>
          <button className="bg-[#C9A96E] hover:bg-[#D4B882] text-[#0A0A0B] px-4 py-2 text-xs font-semibold rounded-lg transition-colors shadow-sm">
            + New Programme
          </button>
        </div>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, idx) => {
          const Icon = stat.icon
          return (
            <motion.div 
              key={idx}
              variants={staggerItemVariant}
              className="bg-[#111113] border border-[#1F1F23] p-5 rounded-xl shadow-sm flex flex-col"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="w-8 h-8 bg-[#0A0A0B] border border-[#1F1F23] rounded-lg flex items-center justify-center">
                  <Icon className="w-4 h-4 text-[#C9A96E]" strokeWidth={1.5} />
                </div>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                  stat.trend === 'up' ? 'bg-[#27C93F]/10 text-[#27C93F]' : 'bg-[#1F1F23] text-[#A1A1AA]'
                }`}>
                  {stat.change}
                </span>
              </div>
              <div className="mt-auto">
                <div className="text-2xl font-bold text-white tracking-tight">{stat.value}</div>
                <div className="text-[#A1A1AA] text-xs font-medium mt-1">{stat.label}</div>
              </div>
            </motion.div>
          )
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Active Programmes */}
        <motion.div variants={staggerItemVariant} className="lg:col-span-2 bg-[#111113] border border-[#1F1F23] rounded-xl shadow-sm overflow-hidden flex flex-col">
          <div className="p-5 border-b border-[#1F1F23] flex justify-between items-center bg-[#0A0A0B]/50">
            <h2 className="text-sm font-semibold text-white">Active Programmes</h2>
            <button className="text-xs text-[#A1A1AA] hover:text-white transition-colors flex items-center gap-1">
              View All <ChevronRight className="w-3 h-3" />
            </button>
          </div>
          <div className="p-0 flex-1 overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[#1F1F23]">
                  <th className="px-5 py-3 text-[10px] font-bold text-[#555555] uppercase tracking-wider">Programme Name</th>
                  <th className="px-5 py-3 text-[10px] font-bold text-[#555555] uppercase tracking-wider">Progress</th>
                  <th className="px-5 py-3 text-[10px] font-bold text-[#555555] uppercase tracking-wider">Participants</th>
                  <th className="px-5 py-3 text-[10px] font-bold text-[#555555] uppercase tracking-wider">Status</th>
                  <th className="px-5 py-3 w-10"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1F1F23]">
                {activeProgrammes.map((prog, i) => (
                  <tr key={i} className="hover:bg-[#1A1A1D] transition-colors group">
                    <td className="px-5 py-4 text-sm font-medium text-white">{prog.name}</td>
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">
                        <div className="flex-1 h-1.5 bg-[#1F1F23] rounded-full overflow-hidden w-24">
                          <div className="h-full bg-[#C9A96E]" style={{ width: `${prog.progress}%` }} />
                        </div>
                        <span className="text-xs text-[#A1A1AA] font-mono">{prog.progress}%</span>
                      </div>
                    </td>
                    <td className="px-5 py-4 text-xs text-[#A1A1AA]">{prog.participants}</td>
                    <td className="px-5 py-4">
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-sm border ${
                        prog.status === 'Active' 
                          ? 'bg-[#27C93F]/10 border-[#27C93F]/20 text-[#27C93F]' 
                          : 'bg-[#1F1F23] border-[#333333] text-[#A1A1AA]'
                      }`}>
                        {prog.status}
                      </span>
                    </td>
                    <td className="px-5 py-4 text-right">
                      <button className="text-[#555555] hover:text-white transition-colors opacity-0 group-hover:opacity-100">
                        <MoreHorizontal className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Upcoming Sessions */}
        <motion.div variants={staggerItemVariant} className="bg-[#111113] border border-[#1F1F23] rounded-xl shadow-sm flex flex-col">
          <div className="p-5 border-b border-[#1F1F23] bg-[#0A0A0B]/50 flex justify-between items-center">
            <h2 className="text-sm font-semibold text-white">Upcoming Sessions</h2>
            <Calendar className="w-4 h-4 text-[#A1A1AA]" />
          </div>
          <div className="p-5 flex-1 flex flex-col gap-4">
            {upcomingSessions.map((session, i) => (
              <div key={i} className="group border border-[#1F1F23] rounded-lg p-4 bg-[#0A0A0B] hover:border-[#333333] transition-colors">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xs font-semibold text-white truncate pr-2">{session.title}</h3>
                  <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded-sm ${
                    session.type === 'Live' ? 'bg-[#C9A96E]/20 text-[#C9A96E]' : 'bg-[#1F1F23] text-[#A1A1AA]'
                  }`}>
                    {session.type}
                  </span>
                </div>
                <div className="text-[10px] text-[#A1A1AA] mb-3 truncate">{session.programme}</div>
                <div className="flex items-center gap-4 border-t border-[#1F1F23] pt-3">
                  <div className="flex items-center gap-1.5 text-[10px] text-[#555555]">
                    <Clock className="w-3 h-3" />
                    <span>{session.time}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[10px] text-[#555555]">
                    <Video className="w-3 h-3" />
                    <span>{session.duration}</span>
                  </div>
                </div>
              </div>
            ))}
            <button className="mt-auto w-full py-2 border border-[#1F1F23] rounded-lg text-xs font-medium text-[#A1A1AA] hover:text-white hover:bg-[#1A1A1D] transition-colors">
              View Calendar
            </button>
          </div>
        </motion.div>

      </div>
    </motion.div>
  )
}
