"use client"

import { TARGET_USERS } from "@/lib/constants"
import { Building2, Zap, Briefcase, Globe, ArrowRight } from "lucide-react"
import Link from "next/link"

const iconMap = {
  Building2,
  Zap,
  Briefcase,
  Globe,
}

export function TargetUsersSection() {
  return (
    <section id="for" className="py-24 bg-[#0B0B0C] border-t border-neutral-800">
      <div className="relative">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Built for <span className="text-[#C8A95A]">scale and structure</span>
          </h2>
          <p className="text-lg text-[#A1A1AA] max-w-2xl mx-auto">
            Whether you&apos;re running intensive bootcamps, corporate training, or social programs, OYEN Grid provides the infrastructure to operate with clarity.
          </p>
        </div>

        {/* User Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TARGET_USERS.map((user, idx) => {
            const Icon = iconMap[user.icon as keyof typeof iconMap]
            return (
              <Link
                key={idx}
                href={user.href || "#"}
                className="group relative p-8 rounded-2xl bg-[#111111] border border-[#1F1F1F] hover:border-[#C8A95A]/50 transition-all duration-500 flex flex-col h-full"
              >
                {/* Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#C8A95A]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-12 h-12 rounded-xl bg-[#1A1A1A] border border-[#2A2A2A] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#C8A95A]/10 group-hover:border-[#C8A95A]/30 transition-all duration-500">
                    <Icon className="w-6 h-6 text-[#A1A1AA] group-hover:text-[#C8A95A] transition-colors duration-500" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#C8A95A] transition-colors duration-500">
                    {user.title}
                  </h3>
                  
                  <p className="text-[#A1A1AA] text-sm leading-relaxed mb-8 flex-grow">
                    {user.description}
                  </p>

                  <div className="flex items-center gap-2 text-[#C8A95A] text-sm font-semibold group-hover:gap-3 transition-all duration-300">
                    See how it works
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
