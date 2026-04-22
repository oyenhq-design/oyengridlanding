"use client"

import { Header } from "@/components/shared/header"
import { Footer } from "@/components/shared/footer"
import { motion } from "framer-motion"
import { fadeUpVariant, staggerContainerVariant, staggerItemVariant } from "@/lib/motion"
import { Check, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function PricingPage() {
  const plans = [
    {
      name: "Basic",
      price: "$49",
      description: "For small teams running single programmes.",
      features: [
        "1 Programme",
        "Up to 50 Participants",
        "Session chat only",
        "Limited storage",
        "Limited bootcamp features"
      ],
      notIncluded: [
        "Group chat",
        "Advanced tracking",
        "AI capabilities"
      ],
      buttonText: "Start Basic",
      highlighted: false
    },
    {
      name: "Standard",
      price: "$149",
      description: "For growing organisations scaling delivery.",
      features: [
        "5 Programmes",
        "Up to 200 Participants",
        "Group chat enabled",
        "Basic progress tracking",
        "Limited recordings (30 days)",
        "Limited AI assistant"
      ],
      notIncluded: [
        "Full notes system",
        "Custom domains"
      ],
      buttonText: "Start Standard",
      highlighted: true
    },
    {
      name: "Premium",
      price: "$399",
      description: "Full operational power for academies.",
      features: [
        "Unlimited Programmes",
        "500+ Participants",
        "Full bootcamp system",
        "Full notes system",
        "Permanent recording storage",
        "Advanced engagement insights",
        "Expanded AI tools"
      ],
      notIncluded: [],
      buttonText: "Start Premium",
      highlighted: false
    },
    {
      name: "Premium+",
      price: "Custom",
      description: "For enterprise and extreme scale.",
      features: [
        "Custom deployment options",
        "White-labeling & custom domains",
        "Dedicated success manager",
        "Custom API integrations",
        "SLA guarantees"
      ],
      notIncluded: [],
      buttonText: "Contact Sales",
      highlighted: false
    }
  ]

  return (
    <main className="flex min-h-screen flex-col bg-[#0A0A0B] pt-[76px]">
      <Header />
      
      <section className="py-32">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariant}
            className="text-center mb-20"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              Simple pricing. Serious scale.
            </h1>
            <p className="text-[#A1A1AA] text-lg font-light max-w-2xl mx-auto">
              Start small or deploy across an entire enterprise. Our pricing scales directly with your participant volume.
            </p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainerVariant}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch"
          >
            {plans.map((plan, idx) => (
              <motion.div 
                key={idx}
                variants={staggerItemVariant}
                whileHover={{ y: -6, boxShadow: plan.highlighted ? "0 20px 40px rgba(201,169,110,0.15)" : "0 20px 40px rgba(0,0,0,0.4)" }}
                transition={{ duration: 0.2 }}
                className={`flex flex-col p-8 rounded-2xl border ${
                  plan.highlighted 
                    ? "bg-[#111113] border-[#C9A96E] relative shadow-[0_0_30px_rgba(201,169,110,0.1)]" 
                    : "bg-[#0A0A0B] border-[#1F1F23]"
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#C9A96E] text-[#0A0A0B] text-[10px] font-bold uppercase tracking-widest py-1 px-3 rounded-full">
                    Most Popular
                  </div>
                )}
                
                <h3 className="text-white font-semibold mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-3xl font-bold text-white tracking-tight">{plan.price}</span>
                  {plan.price !== "Custom" && <span className="text-[#A1A1AA] text-sm">/mo</span>}
                </div>
                <p className="text-[#A1A1AA] text-xs font-light h-10 mb-8">{plan.description}</p>
                
                <Button 
                  className={`w-full mb-8 font-bold text-sm h-11 transition-all ${
                    plan.highlighted 
                      ? "bg-[#C9A96E] hover:bg-[#D4B882] text-[#0A0A0B]" 
                      : "bg-[#111113] hover:bg-white/10 text-white border border-[#1F1F23]"
                  }`}
                >
                  {plan.buttonText}
                </Button>

                <div className="space-y-4 mt-auto">
                  {plan.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-[#C9A96E] shrink-0 mt-0.5" strokeWidth={2} />
                      <span className="text-[#D1D1D6] text-xs font-light leading-relaxed">{feature}</span>
                    </div>
                  ))}
                  {plan.notIncluded.map((feature, nIdx) => (
                    <div key={nIdx} className="flex items-start gap-3 opacity-50">
                      <X className="w-4 h-4 text-[#555555] shrink-0 mt-0.5" strokeWidth={2} />
                      <span className="text-[#555555] text-xs font-light leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>
      
      <Footer />
    </main>
  )
}
