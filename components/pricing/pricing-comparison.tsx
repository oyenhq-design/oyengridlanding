"use client"

import { Check, Minus } from "lucide-react"

const FEATURES = [
  { name: "Programmes", basic: "1", standard: "5", premium: "Unlimited", enterprise: "Unlimited" },
  { name: "Participants", basic: "Up to 50", standard: "Up to 200", premium: "Up to 1,000", enterprise: "Custom" },
  { name: "Modules per programme", basic: "Unlimited", standard: "Unlimited", premium: "Unlimited", enterprise: "Unlimited" },
  { name: "Sessions per module", basic: "Unlimited", standard: "Unlimited", premium: "Unlimited", enterprise: "Unlimited" },
  { name: "Attendance tracking", basic: true, standard: true, premium: true, enterprise: true },
  { name: "Progress tracking", basic: true, standard: true, premium: true, enterprise: true },
  { name: "Analytics", basic: "Basic", standard: "Full Dashboard", premium: "Advanced", enterprise: "Custom" },
  { name: "Storage", basic: "5GB", standard: "50GB", premium: "500GB", enterprise: "Unlimited" },
  { name: "AI (Future)", basic: false, standard: "Beta Access", premium: "Full Access", enterprise: "Tailored" },
  { name: "Support level", basic: "Community", standard: "Email", premium: "Priority", enterprise: "Dedicated Manager" },
]

export function PricingComparison() {
  return (
    <section className="py-24 bg-[#0B0B0C] border-t border-[#1F1F1F]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-16 text-center">Full capability comparison</h2>
        
        <div className="overflow-x-auto scrollbar-hide">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="border-b border-[#1F1F1F]">
                <th className="py-6 px-4 text-sm font-bold text-[#A1A1AA] uppercase tracking-wider">Operational Metric</th>
                <th className="py-6 px-4 text-center text-sm font-bold text-white uppercase tracking-wider">Basic</th>
                <th className="py-6 px-4 text-center text-sm font-bold text-[#D4AF37] uppercase tracking-wider">Standard</th>
                <th className="py-6 px-4 text-center text-sm font-bold text-white uppercase tracking-wider">Premium</th>
                <th className="py-6 px-4 text-center text-sm font-bold text-white uppercase tracking-wider">Enterprise</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#1F1F1F]">
              {FEATURES.map((feature) => (
                <tr key={feature.name} className="group hover:bg-white/[0.02] transition-colors">
                  <td className="py-6 px-4 text-white font-medium group-hover:text-[#D4AF37] transition-colors">{feature.name}</td>
                  <td className="py-6 px-4 text-center text-[#A1A1AA]">
                    {typeof feature.basic === "boolean" ? (
                      feature.basic ? <Check className="w-5 h-5 text-[#D4AF37] mx-auto" /> : <Minus className="w-5 h-5 text-[#333] mx-auto" />
                    ) : feature.basic}
                  </td>
                  <td className="py-6 px-4 text-center text-white font-semibold">
                    {typeof feature.standard === "boolean" ? (
                      feature.standard ? <Check className="w-5 h-5 text-[#D4AF37] mx-auto" /> : <Minus className="w-5 h-5 text-[#333] mx-auto" />
                    ) : feature.standard}
                  </td>
                  <td className="py-6 px-4 text-center text-[#A1A1AA]">
                    {typeof feature.premium === "boolean" ? (
                      feature.premium ? <Check className="w-5 h-5 text-[#D4AF37] mx-auto" /> : <Minus className="w-5 h-5 text-[#333] mx-auto" />
                    ) : feature.premium}
                  </td>
                  <td className="py-6 px-4 text-center text-[#A1A1AA]">
                    {typeof feature.enterprise === "boolean" ? (
                      feature.enterprise ? <Check className="w-5 h-5 text-[#D4AF37] mx-auto" /> : <Minus className="w-5 h-5 text-[#333] mx-auto" />
                    ) : feature.enterprise}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
