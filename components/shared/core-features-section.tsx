"use client";

import { motion } from "framer-motion";
import { Cpu, ShieldCheck, Activity, Layers, ArrowRight } from "lucide-react";

export function CoreFeaturesSection() {
  const features = [
    {
      title: "Structure",
      description: "Define absolute programme flows with enforced sequencing and participant journey mapping.",
      icon: Cpu,
      delay: 0.1,
      accent: "gold"
    },
    {
      title: "Control",
      description: "Manage bank-grade access, resource allocation, and multi-tenant delivery environments.",
      icon: ShieldCheck,
      delay: 0.2,
      accent: "blue"
    },
    {
      title: "Visibility",
      description: "Monitor real-time participation metrics and cohort performance through unified dashboards.",
      icon: Activity,
      delay: 0.3,
      accent: "gold"
    }
  ];

  return (
    <section className="py-32 bg-[#050505] relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#D4AF37] opacity-[0.03] blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 lg:px-14 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24 text-left max-w-3xl"
        >
          <div className="inline-flex items-center gap-3 text-[#D4AF37] text-[13px] font-bold tracking-[0.2em] uppercase mb-6 opacity-80">
            <Layers className="w-4 h-4" />
            Operational Foundation
          </div>
          <h2 className="text-[44px] md:text-[60px] font-bold text-white tracking-tight leading-[1.1] mb-8">
            Everything your organisation needs <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#FFF0B3]">in one system</span>
          </h2>
          <p className="text-[19px] md:text-[21px] text-[#A1A1AA] font-light leading-relaxed max-w-2xl">
            A unified infrastructure that replaces fragmented tools with absolute structural precision.
          </p>
        </motion.div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: feature.delay }}
              whileHover={{ y: -10 }}
              className="group relative h-full"
            >
              {/* Premium Glass Card */}
              <div className="h-full bg-[rgba(255,255,255,0.02)] backdrop-blur-2xl border border-white/[0.08] rounded-[32px] p-10 flex flex-col transition-all duration-500 group-hover:border-[#D4AF37]/30 group-hover:bg-white/[0.04] group-hover:shadow-[0_40px_80px_rgba(0,0,0,0.6)] overflow-hidden">
                
                {/* Visual Accent Glow */}
                <div className={`absolute -top-24 -right-24 w-48 h-48 blur-[60px] rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none ${feature.accent === "gold" ? "bg-[#D4AF37]" : "bg-[#3B82F6]"}`} />
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-10 transition-all duration-500 border ${feature.accent === "gold" ? "bg-[#D4AF37]/5 border-[#D4AF37]/10 text-[#D4AF37] group-hover:bg-[#D4AF37]/20 group-hover:border-[#D4AF37]/40" : "bg-[#3B82F6]/5 border-[#3B82F6]/10 text-[#3B82F6] group-hover:bg-[#3B82F6]/20 group-hover:border-[#3B82F6]/40"}`}>
                    <feature.icon className="w-7 h-7" strokeWidth={1.5} />
                  </div>
                  
                  <h3 className="text-[24px] font-bold text-white mb-6 tracking-tight group-hover:text-white transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-[17px] text-[#A1A1AA] leading-relaxed mb-10 flex-1 font-light group-hover:text-white/80 transition-colors">
                    {feature.description}
                  </p>

                  <div className="inline-flex items-center gap-2 text-[#D4AF37] text-[14px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 translate-x-[-10px] group-hover:translate-x-0 transition-all duration-500">
                    Explore capability <ArrowRight className="w-5 h-5" />
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
          className="mt-32 text-center"
        >
          <div className="inline-flex items-center gap-8 text-[16px] md:text-[20px] font-light text-[#71717A]">
            <div className="w-20 h-[1px] bg-gradient-to-r from-transparent to-[#D4AF37]/20" />
            <p>
              Built for <span className="text-white font-bold">operational excellence.</span>
            </p>
            <div className="w-20 h-[1px] bg-gradient-to-l from-transparent to-[#D4AF37]/20" />
          </div>
        </motion.div>

      </div>

      {/* Section Transition Fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#050505] to-transparent pointer-events-none" />
    </section>
  );
}
