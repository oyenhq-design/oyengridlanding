"use client";

import { motion } from "framer-motion";
import { ArrowRight, Globe, Shield, Activity, Database, Network } from "lucide-react";

export function ProofKnowledge() {
  return (
    <div className="bg-[#050812]">
      
      {/* PROVEN IN ACTION: Editorial Cinematic Section */}
      <section className="py-40 relative overflow-hidden">
        <div className="container-custom max-w-[1400px] relative z-10">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-32 gap-12">
             <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="max-w-2xl relative"
             >
               <div className="glow-ambient w-[400px] h-[400px] top-[-100px] left-[-100px]" />
               <div className="flex items-center gap-3 mb-8">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_10px_#D4A62A]" />
                  <span className="text-accent text-[11px] font-black tracking-[0.4em] uppercase">OPERATIONAL PROOF</span>
               </div>
               <h2 className="text-white mb-6">
                 Proven in high-fidelity <br /> <span className="text-gold-gradient italic">programme environments.</span>
               </h2>
               <p className="opacity-60 max-w-lg">
                 Validated by global enterprise leaders through rigorous multi-layer orchestration and precision delivery.
               </p>
             </motion.div>
             <button className="flex items-center gap-3 text-white/40 hover:text-white font-bold text-[13px] uppercase tracking-[0.2em] transition-all group pb-4">
                Explore Case Studies <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
             </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
            {[
              { title: "Global Training Infrastructure", img: "/training-session.png", desc: "Coordinating multi-cohort programmes for Fortune 500 enterprise partners with absolute structural integrity." },
              { title: "Enterprise Command Center", img: "/command-wide.png", desc: "Automating programme governance and session delivery across distributed regions for high-stakes operations." }
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[16/11] rounded-[48px] overflow-hidden mb-12 shadow-[0_60px_100px_rgba(0,0,0,0.6)] transition-all duration-1000 border-none group-hover:shadow-[0_80px_120px_rgba(0,0,0,0.8)]">
                  <img 
                    src={card.img} 
                    alt={card.title} 
                    className="w-full h-full object-cover grayscale-[0.4] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-[#050816]/20 to-transparent" />
                  <div className="absolute bottom-12 left-12 right-12 text-white z-20">
                     <div className="text-[10px] font-black text-accent uppercase tracking-[0.3em] mb-4 opacity-60">High Fidelity Execution</div>
                     <h3 className="text-2xl font-bold tracking-tight mb-2">{card.title}</h3>
                     <p className="text-white/40 text-[15px] font-light leading-relaxed group-hover:text-white/60 transition-colors">{card.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* KNOWLEDGE HUB: Immersive Showcase */}
      <section className="py-40 bg-[#0B0B0D] relative overflow-hidden border-t border-white/5">
        <div className="container-custom max-w-[1400px] relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
             
             <motion.div
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="lg:col-span-5"
             >
                <div className="flex items-center gap-3 mb-8">
                  <Database className="w-5 h-5 text-accent" />
                  <span className="text-accent text-[11px] font-black tracking-[0.4em] uppercase">INTELLIGENCE ASSETS</span>
                </div>
                <h2 className="mb-8">
                  Intelligence <span className="text-gold-gradient italic">Hub.</span>
                </h2>
                <p className="mb-12 opacity-60">
                  Access our library of expert guides on building high-fidelity operational structures for modern programme delivery.
                </p>
                <div className="space-y-8">
                   {[
                     { title: "Scaling Global Teams", icon: Network },
                     { title: "Operational Governance", icon: Shield }
                   ].map((item, i) => (
                     <div key={i} className="flex items-center justify-between p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-accent/40 transition-all cursor-pointer group">
                        <div className="flex items-center gap-4">
                           <item.icon className="w-5 h-5 text-accent/40 group-hover:text-accent transition-colors" />
                           <span className="text-white font-bold tracking-tight">{item.title}</span>
                        </div>
                        <ArrowRight className="w-4 h-4 text-white/20 group-hover:text-accent group-hover:translate-x-2 transition-all" />
                     </div>
                   ))}
                </div>
             </motion.div>

             <motion.div
               initial={{ opacity: 0, x: 30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="lg:col-span-7 relative"
             >
                <div className="relative rounded-[32px] overflow-hidden border border-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.6)]">
                   <img 
                     src="/knowledge-network.png" 
                     alt="Knowledge Network" 
                     className="w-full h-auto opacity-50 grayscale hover:grayscale-0 transition-all duration-1000"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                </div>
             </motion.div>

          </div>
        </div>
      </section>

    </div>
  );
}
