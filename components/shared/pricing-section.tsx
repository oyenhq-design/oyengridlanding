"use client"

import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"
import { PRICING_TIERS } from "@/lib/constants"

export function PricingSection() {
  return (
    <section id="pricing" className="py-24 md:py-32 bg-[#0B0B0F] border-b border-[#1F1F1F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Scale with <span className="text-[#C8A95A]">confidence</span>
          </h2>
          <p className="text-lg text-[#A1A1AA] max-w-2xl mx-auto">
            Predictable pricing built for organisations of all sizes. No hidden fees.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PRICING_TIERS.map((tier, idx) => (
            <div
              key={idx}
              className={`rounded-3xl p-8 flex flex-col transition-all duration-500 relative ${
                tier.popular
                  ? "bg-[#121212] border-2 border-[#C8A95A] scale-105 shadow-2xl shadow-[#C8A95A]/10 z-10"
                  : "bg-[#121212] border border-[#1F1F1F] hover:border-[#C8A95A]/50 hover:-translate-y-1 hover:z-10"
              }`}
            >
              {/* Optional Gradient Background for Popular Tier */}
              {tier.popular && (
                <div className="absolute inset-0 bg-gradient-to-br from-[#C8A95A]/5 to-transparent rounded-3xl pointer-events-none" />
              )}

              {/* Badge */}
              <div className="h-8 mb-4 flex items-center">
                {tier.popular && (
                  <span className="inline-block bg-[#C8A95A] text-black text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                    Most Popular
                  </span>
                )}
              </div>

              {/* Title */}
              <h3 className={`text-2xl font-semibold mb-3 ${tier.popular ? "text-[#C8A95A]" : "text-white"}`}>
                {tier.name}
              </h3>

              {/* Description */}
              <p className="text-[#A1A1AA] text-sm mb-6 leading-relaxed min-h-[40px]">
                {tier.description}
              </p>

              {/* Price */}
              <div className="mb-8 flex items-baseline gap-2">
                <span className={`text-4xl md:text-5xl font-bold ${tier.popular ? "text-white" : "text-white"}`}>
                  {tier.price}
                </span>
                {tier.price !== "Custom" && (
                  <span className="text-[#A1A1AA] text-sm font-medium">
                    /month
                  </span>
                )}
              </div>

              {/* CTA */}
              <Button
                className={`w-full mb-8 h-12 text-sm font-bold uppercase tracking-wider rounded-xl transition-all duration-300 ${
                  tier.popular
                    ? "bg-[#C8A95A] text-black hover:bg-white hover:text-black shadow-[0_0_20px_rgba(200,169,90,0.3)]"
                    : "bg-[#1A1A1A] text-white hover:bg-[#C8A95A] hover:text-black border border-[#2A2A2A] hover:border-[#C8A95A]"
                }`}
              >
                {tier.price === "Custom" ? "Contact Sales" : "Get Started"}
              </Button>

              {/* Features */}
              <div className="mt-auto">
                <p className="text-sm font-semibold text-white mb-4">Includes:</p>
                <ul className="space-y-4">
                  {tier.features.map((feature, fidx) => (
                    <li key={fidx} className="flex items-start gap-3">
                      <CheckCircle2 className={`w-5 h-5 mt-0.5 shrink-0 ${tier.popular ? "text-[#C8A95A]" : "text-[#A1A1AA]"}`} />
                      <span className="text-sm text-[#A1A1AA] leading-relaxed">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
