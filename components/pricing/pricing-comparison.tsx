"use client"

import { Check, Minus } from "lucide-react"

const GROUPS = [
  {
    title: "STRUCTURE",
    features: [
      { name: "Programmes", basic: "1", standard: "5", premium: "Unlimited", enterprise: "Unlimited" },
      { name: "Modules per programme", basic: "Unlimited", standard: "Unlimited", premium: "Unlimited", enterprise: "Unlimited" },
      { name: "Sessions per module", basic: "Unlimited", standard: "Unlimited", premium: "Unlimited", enterprise: "Unlimited" },
    ]
  },
  {
    title: "CONTROL",
    features: [
      { name: "Module locking", basic: true, standard: true, premium: true, enterprise: true },
      { name: "Session enforcement", basic: false, standard: true, premium: true, enterprise: true },
      { name: "Role permissions", basic: "Basic", standard: "Standard", premium: "Advanced", enterprise: "Custom" },
    ]
  },
  {
    title: "TRACKING",
    features: [
      { name: "Attendance tracking", basic: true, standard: true, premium: true, enterprise: true },
      { name: "Progress tracking", basic: true, standard: true, premium: true, enterprise: true },
      { name: "Completion rules", basic: false, standard: true, premium: true, enterprise: true },
    ]
  },
  {
    title: "ANALYTICS",
    features: [
      { name: "Dashboard insights", basic: "Basic", standard: "Full", premium: "Advanced", enterprise: "Tailored" },
      { name: "Reporting", basic: "Standard", standard: "Enhanced", premium: "Custom", enterprise: "Full API" },
    ]
  },
  {
    title: "SYSTEM",
    features: [
      { name: "Storage", basic: "5GB", standard: "50GB", premium: "500GB", enterprise: "Unlimited" },
      { name: "Performance tier", basic: "Shared", standard: "Accelerated", premium: "Priority", enterprise: "Dedicated" },
      { name: "Support level", basic: "Community", standard: "Email", premium: "Priority", enterprise: "Dedicated Manager" },
    ]
  }
]

export function PricingComparison() {
  return (
    <section id="compare" className="py-24 border-t border-[#1F1F1F]">
      <h2 className="text-2xl font-bold text-white mb-12">Feature Comparison</h2>
      
      <div className="overflow-x-auto scrollbar-hide">
        <table className="w-full text-left border-collapse min-w-[800px]">
          <thead>
            <tr className="border-b border-[#1F1F1F]">
              <th className="py-6 px-4 text-xs font-bold text-[#71717A] uppercase tracking-wider w-1/4">Feature</th>
              <th className="py-6 px-4 text-center text-xs font-bold text-white uppercase tracking-wider">Basic</th>
              <th className="py-6 px-4 text-center text-xs font-bold text-[#D4AF37] uppercase tracking-wider">Standard</th>
              <th className="py-6 px-4 text-center text-xs font-bold text-white uppercase tracking-wider">Premium</th>
              <th className="py-6 px-4 text-center text-xs font-bold text-white uppercase tracking-wider">Enterprise</th>
            </tr>
          </thead>
          <tbody>
            {GROUPS.map((group) => (
              <React.Fragment key={group.title}>
                <tr className="bg-white/[0.02]">
                  <td colSpan={5} className="py-4 px-4 text-[11px] font-black text-[#D4AF37] tracking-[0.2em] uppercase">
                    {group.title}
                  </td>
                </tr>
                {group.features.map((feature) => (
                  <tr key={feature.name} className="border-b border-white/[0.03] group hover:bg-white/[0.01] transition-colors">
                    <td className="py-5 px-4 text-sm text-[#A1A1AA] font-medium group-hover:text-white transition-colors">{feature.name}</td>
                    <td className="py-5 px-4 text-center text-sm text-[#71717A]">
                      {typeof feature.basic === "boolean" ? (
                        feature.basic ? <Check className="w-4 h-4 text-[#D4AF37] mx-auto" /> : <Minus className="w-4 h-4 text-[#333] mx-auto" />
                      ) : feature.basic}
                    </td>
                    <td className="py-5 px-4 text-center text-sm text-white font-bold">
                      {typeof feature.standard === "boolean" ? (
                        feature.standard ? <Check className="w-4 h-4 text-[#D4AF37] mx-auto" /> : <Minus className="w-4 h-4 text-[#333] mx-auto" />
                      ) : feature.standard}
                    </td>
                    <td className="py-5 px-4 text-center text-sm text-[#71717A]">
                      {typeof feature.premium === "boolean" ? (
                        feature.premium ? <Check className="w-4 h-4 text-[#D4AF37] mx-auto" /> : <Minus className="w-4 h-4 text-[#333] mx-auto" />
                      ) : feature.premium}
                    </td>
                    <td className="py-5 px-4 text-center text-sm text-[#71717A]">
                      {typeof feature.enterprise === "boolean" ? (
                        feature.enterprise ? <Check className="w-4 h-4 text-[#D4AF37] mx-auto" /> : <Minus className="w-4 h-4 text-[#333] mx-auto" />
                      ) : feature.enterprise}
                    </td>
                  </tr>
                ))}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

import React from "react"
