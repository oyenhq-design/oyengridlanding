"use client"

import { ArrowRight, Rocket, Users2, ShieldCheck } from "lucide-react"
import Link from "next/link"

const RECS = [
  {
    title: "Bootcamps",
    desc: "For fast-paced, high-intensity cohorts that require deep tracking.",
    rec: "STANDARD",
    icon: Rocket,
    href: "/get-started"
  },
  {
    title: "Training Teams",
    desc: "For organizations managing professional training and multi-track curriculums.",
    rec: "BASIC or STANDARD",
    icon: Users2,
    href: "/get-started"
  },
  {
    title: "Enterprises",
    desc: "For infrastructure-level program management across large global departments.",
    rec: "PREMIUM or ENTERPRISE",
    icon: ShieldCheck,
    href: "/contact"
  }
]

export function PricingRecommendations() {
  return (
    <section className="py-24 bg-[#0B0B0C] border-y border-[#1F1F1F]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-16 text-center">Choose the right plan for your organisation</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {RECS.map((item) => (
            <div key={item.title} className="bg-[#111111] border border-[#1F1F1F] rounded-2xl p-8 hover:border-[#D4AF37]/40 transition-all duration-300">
              <item.icon className="w-10 h-10 text-[#D4AF37] mb-6" />
              <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
              <p className="text-[#A1A1AA] mb-8 leading-relaxed">
                {item.desc}
              </p>
              <div className="pt-6 border-t border-[#1F1F1F]">
                <div className="text-[12px] font-bold text-[#71717A] uppercase tracking-widest mb-2">Recommended Plan</div>
                <div className="text-lg font-bold text-white mb-6">{item.rec}</div>
                <Link href={item.href} className="flex items-center gap-2 text-[#D4AF37] font-bold text-sm hover:gap-3 transition-all">
                  Get started <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
