"use client";

import { motion } from "framer-motion";
import { Globe, Zap, Network, ArrowRight } from "lucide-react";

export function GlobalInfrastructure() {
  return (
    <section className="py-40 bg-[#050812] relative overflow-hidden">
      
      {/* FULL-WIDTH IMMERSIVE BACKGROUND */}
      <div className="absolute inset-0 z-0">
         <div className="glow-ambient w-[800px] h-[800px] top-[20%] left-[20%]" />
         <img 
           src="/global-infra.png" 
           alt="Global Infrastructure" 
           className="w-full h-full object-cover opacity-20 grayscale"
         />
         <div className="absolute inset-0 bg-gradient-to-t from-[#050812] via-[#050812]/80 to-transparent" />
      </div>

      <div className="container-custom max-w-[1400px] relative z-10">
        <div className="text-center mb-32">
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
           >
              <div className="flex items-center justify-center gap-3 mb-8">
                 <Globe className="w-5 h-5 text-accent" />
                 <span className="text-accent text-[11px] font-black tracking-[0.4em] uppercase">GLOBAL RELIABILITY</span>
              </div>
              <h2 className="mb-8 text-white">
                The backbone of <br />
                <span className="text-gold-gradient italic">global programme delivery.</span>
              </h2>
              <p className="text-[17px] text-white/50 font-light max-w-2xl mx-auto leading-relaxed">
                OYEN GRID operates on a resilient, multi-region cloud infrastructure designed for 99.99% uptime and zero-latency operational control.
              </p>
           </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
           {[
             { title: "Multi-Region Redundancy", desc: "Data is replicated across global nodes to ensure absolute availability.", icon: Network },
             { title: "Zero-Latency Execution", desc: "Edge-optimized delivery for sessions and participant interactions.", icon: Zap },
             { title: "Enterprise Integrations", desc: "Deeply integrate with your existing CRM, LMS, and HRIS tech stack.", icon: Globe }
           ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-12 bg-[#050816]/40 border-none hover:bg-white/[0.04] transition-all group"
              >
                 <div className="w-16 h-16 rounded-2xl bg-white/5 border-none flex items-center justify-center mb-10 group-hover:bg-accent group-hover:shadow-[0_0_20px_rgba(212,166,42,0.4)] transition-all">
                    <item.icon className="w-6 h-6 text-accent group-hover:text-black transition-all" />
                 </div>
                 <h3 className="text-xl font-bold text-white mb-6 tracking-tight">{item.title}</h3>
                 <p className="opacity-40 text-[15px] group-hover:opacity-60 transition-opacity">{item.desc}</p>
                 <div className="mt-10 h-px w-full bg-white/5 group-hover:bg-accent/20 transition-all" />
              </motion.div>
           ))}
        </div>

        <div className="mt-32 pt-20 border-t border-white/5 text-center">
           <div className="flex flex-wrap justify-center gap-20 opacity-30">
              {["AWS PARTNER", "AZURE CLOUD", "GOOGLE CLOUD", "SOC2 TYPE II"].map((text, i) => (
                <div key={i} className="text-[11px] font-black text-white uppercase tracking-[0.4em]">{text}</div>
              ))}
           </div>
        </div>
      </div>
    </section>
  );
}
