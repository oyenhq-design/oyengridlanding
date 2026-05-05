"use client"

import { motion } from "framer-motion"
import { Cpu, ShieldCheck, Activity, Layers, ArrowRight } from "lucide-react"

export function CoreFeaturesSection() {
  const features = [
    {
      title: "Structure",
      description: "Define absolute programme flows with enforced sequencing and participant journey mapping.",
      icon: Cpu,
      delay: 0.1,
      indicators: [
        { top: "10%", left: "85%", size: "w-1 h-1" },
        { top: "40%", left: "95%", size: "w-2 h-2" },
      ]
    },
    {
      title: "Control",
      description: "Manage bank-grade access, resource allocation, and multi-tenant delivery environments.",
      icon: ShieldCheck,
      delay: 0.2,
      indicators: [
        { top: "20%", left: "5%", size: "w-1.5 h-1.5" },
        { top: "70%", left: "10%", size: "w-1 h-1" },
      ]
    },
    {
      title: "Visibility",
      description: "Monitor real-time participation metrics and cohort performance through unified dashboards.",
      icon: Activity,
      delay: 0.3,
      indicators: [
        { top: "30%", left: "90%", size: "w-2 h-2" },
        { top: "80%", left: "80%", size: "w-1.5 h-1.5" },
      ]
    }
  ];

  return (
    <section className="py-32 bg-transparent relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-left max-w-3xl"
        >
          <div className="inline-flex items-center gap-3 text-[#D4AF37] text-[13px] font-bold tracking-[0.2em] uppercase mb-4 opacity-80">
            <Layers className="w-4 h-4" />
            Operational Foundation
          </div>
          <h2 className="text-[42px] md:text-[56px] font-bold text-white tracking-tight leading-[1.1]">
            Everything your organisation needs <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#FFF0B3]">in one system</span>
          </h2>
        </motion.div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {/* Connector Line Decor (System Look) */}
          <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-y-1/2 hidden md:block" />

          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: feature.delay }}
              className="group relative"
            >
              {/* Visual Indicators (Dots) */}
              {feature.indicators.map((dot, dotIdx) => (
                <div 
                  key={dotIdx}
                  className={`absolute ${dot.size} bg-[#D4AF37]/20 rounded-full blur-[1px] group-hover:bg-[#D4AF37]/40 transition-colors duration-500`}
                  style={{ top: dot.top, left: dot.left }}
                />
              ))}

              <div className="h-full bg-[rgba(20,20,20,0.4)] backdrop-blur-md border border-white/5 rounded-[24px] p-8 transition-all duration-500 hover:border-[#D4AF37]/30 hover:shadow-[0_10px_40px_rgba(212,175,55,0.08)] hover:-translate-y-1.5 overflow-hidden">
                {/* Hover Glow Gradient */}
                <div className="absolute -inset-20 bg-gradient-to-br from-[#D4AF37]/0 via-transparent to-transparent group-hover:from-[#D4AF37]/5 transition-all duration-700 pointer-events-none" />
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:border-[#D4AF37]/40 transition-all duration-500">
                    <feature.icon className="w-6 h-6 text-[#A1A1AA] group-hover:text-[#D4AF37] transition-colors" strokeWidth={1.5} />
                  </div>
                  
                  <h3 className="text-[22px] font-bold text-white mb-4 tracking-tight group-hover:text-[#D4AF37] transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-[15px] text-[#A1A1AA] leading-relaxed mb-8 flex-1 font-light group-hover:text-white/80 transition-colors">
                    {feature.description}
                  </p>

                  <div className="inline-flex items-center gap-2 text-[#D4AF37] text-[13px] font-semibold opacity-0 group-hover:opacity-100 translate-x-[-10px] group-hover:translate-x-0 transition-all duration-500">
                    Explore capability <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Statement Line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 1 }}
          className="mt-24 text-center"
        >
          <div className="inline-flex items-center gap-6 text-[15px] md:text-[18px] font-light text-[#A1A1AA]">
            <div className="w-16 h-[1px] bg-gradient-to-r from-transparent to-[#D4AF37]/20" />
            <p>
              Not a collection of tools. <span className="text-white font-medium">A unified infrastructure that enforces precision.</span>
            </p>
            <div className="w-16 h-[1px] bg-gradient-to-l from-transparent to-[#D4AF37]/20" />
          </div>
        </motion.div>

      </div>
    </section>
  )
}
