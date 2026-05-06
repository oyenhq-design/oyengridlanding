"use client"

import { Check, Minus, Layers, Lock, Users, BarChart2, Database, Settings, Activity, Shield, PieChart, FileText, Zap, UserCheck } from "lucide-react"

const GROUPS = [
  {
    title: "STRUCTURE",
    features: [
      { name: "Programmes", icon: Layers, basic: "1", standard: "5", premium: "Unlimited", enterprise: "Unlimited" },
      { name: "Modules per programme", icon: Layers, basic: "Unlimited", standard: "Unlimited", premium: "Unlimited", enterprise: "Unlimited" },
      { name: "Sessions per module", icon: Layers, basic: "Unlimited", standard: "Unlimited", premium: "Unlimited", enterprise: "Unlimited" },
    ]
  },
  {
    title: "CONTROL",
    features: [
      { name: "Module locking", icon: Lock, basic: true, standard: true, premium: true, enterprise: true },
      { name: "Session enforcement", icon: Settings, basic: false, standard: true, premium: true, enterprise: true },
      { name: "Role permissions", icon: Users, basic: "Basic", standard: "Standard", premium: "Advanced", enterprise: "Custom" },
    ]
  },
  {
    title: "TRACKING",
    features: [
      { name: "Attendance tracking", icon: UserCheck, basic: true, standard: true, premium: true, enterprise: true },
      { name: "Progress tracking", icon: Activity, basic: true, standard: true, premium: true, enterprise: true },
      { name: "Completion rules", icon: Shield, basic: false, standard: true, premium: true, enterprise: true },
    ]
  },
  {
    title: "ANALYTICS",
    features: [
      { name: "Dashboard insights", icon: BarChart2, basic: "Basic", standard: "Full", premium: "Advanced", enterprise: "Tailored" },
      { name: "Reporting", icon: FileText, basic: "Standard", standard: "Enhanced", premium: "Custom", enterprise: "Full API" },
    ]
  },
  {
    title: "SYSTEM",
    features: [
      { name: "Storage", icon: Database, basic: "5GB", standard: "50GB", premium: "500GB", enterprise: "Unlimited" },
      { name: "Performance tier", icon: Zap, basic: "Shared", standard: "Accelerated", premium: "Priority", enterprise: "Dedicated" },
      { name: "Support level", icon: Shield, basic: "Community", standard: "Email", premium: "Priority", enterprise: "Dedicated Manager" },
    ]
  }
]

export function PricingComparison() {
  return (
    <section id="compare" className="py-24 bg-[#18181B] border-t border-[#232323] -mx-8 px-8 relative">
      {/* Top separator */}
      <div className="absolute left-0 right-0 top-0 h-2 bg-gradient-to-b from-[#232323] to-transparent opacity-80" />
      <div className="max-w-3xl mx-auto mb-12 text-center">
        <h2 className="text-3xl font-bold text-white mb-3 tracking-tight">Compare all features</h2>
        <p className="text-[#A1A1AA] text-base">See how each plan supports your operations</p>
      </div>
      <div className="overflow-x-auto scrollbar-hide">
        <table className="w-full text-left border-collapse min-w-[900px] group/table">
          <thead className="sticky top-0 z-20 bg-[#18181B]">
            <tr className="border-b border-[#232323]">
              <th className="py-8 px-4" />
              <th className="py-8 px-4 text-left text-xs font-bold text-[#71717A] uppercase tracking-wider w-1/4">Feature</th>
              <th className="py-8 px-4 text-left text-xs font-bold text-white uppercase tracking-wider group/header hover:bg-[#232323]/60 cursor-pointer">Basic</th>
              <th className="py-8 px-4 text-left text-xs font-bold text-[#D4AF37] uppercase tracking-wider group/header hover:bg-[#232323]/60 cursor-pointer">Standard</th>
              <th className="py-8 px-4 text-left text-xs font-bold text-white uppercase tracking-wider group/header hover:bg-[#232323]/60 cursor-pointer">Premium</th>
              <th className="py-8 px-4 text-left text-xs font-bold text-white uppercase tracking-wider group/header hover:bg-[#232323]/60 cursor-pointer">Enterprise</th>
            </tr>
          </thead>
          <tbody>
            {GROUPS.map((group) => (
              <React.Fragment key={group.title}>
                <tr>
                  <td colSpan={6} className="py-8 px-4 text-xs font-bold text-[#FFD700] tracking-[0.2em] uppercase bg-[#232323]/60 border-t border-[#232323]">{group.title}</td>
                </tr>
                {group.features.map((feature, idx) => {
                  const isAlt = idx % 2 !== 0;
                  return (
                    <tr
                      key={feature.name}
                      className={`border-b border-neutral-800 group/row hover:bg-[#232323]/40 transition-colors ${isAlt ? "bg-[#18120A]/10" : "bg-transparent"}`}
                    >
                      <td className="py-5 px-4 w-12">
                        {feature.icon ? <feature.icon className="w-6 h-6 text-[#FFD700]" /> : null}
                      </td>
                      <td className="py-5 px-4 text-sm text-[#A1A1AA] font-medium group-hover/row:text-white transition-colors">{feature.name}</td>
                      <td className="py-5 px-4 text-left text-sm text-[#71717A] group-hover/row:bg-[#FFD700]/10 group-hover/row:text-[#FFD700] transition-colors cursor-pointer">
                        {typeof feature.basic === "boolean" ? (
                          feature.basic ? <Check className="w-5 h-5 text-[#FFD700]" /> : <Minus className="w-5 h-5 text-[#333]" />
                        ) : feature.basic}
                      </td>
                      <td className="py-5 px-4 text-left text-sm text-white font-bold group-hover/row:bg-[#FFD700]/10 group-hover/row:text-[#FFD700] transition-colors cursor-pointer">
                        {typeof feature.standard === "boolean" ? (
                          feature.standard ? <Check className="w-5 h-5 text-[#FFD700]" /> : <Minus className="w-5 h-5 text-[#333]" />
                        ) : feature.standard}
                      </td>
                      <td className="py-5 px-4 text-left text-sm text-[#71717A] group-hover/row:bg-[#FFD700]/10 group-hover/row:text-[#FFD700] transition-colors cursor-pointer">
                        {typeof feature.premium === "boolean" ? (
                          feature.premium ? <Check className="w-5 h-5 text-[#FFD700]" /> : <Minus className="w-5 h-5 text-[#333]" />
                        ) : feature.premium}
                      </td>
                      <td className="py-5 px-4 text-left text-sm text-[#71717A] group-hover/row:bg-[#FFD700]/10 group-hover/row:text-[#FFD700] transition-colors cursor-pointer">
                        {typeof feature.enterprise === "boolean" ? (
                          feature.enterprise ? <Check className="w-5 h-5 text-[#FFD700]" /> : <Minus className="w-5 h-5 text-[#333]" />
                        ) : feature.enterprise}
                      </td>
                    </tr>
                  );
                })}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
      {/* Bottom separator */}
      <div className="absolute left-0 right-0 bottom-0 h-2 bg-gradient-to-t from-[#232323] to-transparent opacity-80" />
      <div className="w-full h-px bg-[#232323] opacity-60 my-12" />
    </section>
  )
}

import React from "react"
