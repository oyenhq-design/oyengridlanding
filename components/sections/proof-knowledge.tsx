"use client";

import { motion } from "framer-motion";
import { ArrowRight, Globe, Shield, Activity, Database, Network } from "lucide-react";

export function ProofKnowledge() {
  return (
    <div className="" style={{background:'#050812'}}>
      
      {/* PROVEN IN ACTION: Editorial Cinematic Section */}
    <div className="bg-background">
      
      {/* PROVEN IN ACTION: Editorial Cinematic Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="container-custom relative z-10" style={{maxWidth:1400}}>
          <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-12">
             <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="max-w-2xl relative"
             >
               <div className="glow-ambient" style={{width:300,height:300,top:-50,left:-50}} />
               <div className="flex items-center gap-3 mb-6">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_8px_#D4A62A]" />
                  <span className="text-accent text-[10px] font-black tracking-[0.4em] uppercase opacity-80">OPERATIONAL PROOF</span>
               </div>
               <h2 className="text-white mb-6">
                 Proven in high-fidelity <br /> <span className="text-gold-gradient italic">programme environments.</span>
               </h2>
               <p className="opacity-60 max-w-md text-[16px]">
                 Validated by global enterprise leaders through rigorous multi-layer orchestration and precision delivery.
               </p>
             </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              { title: "Global Training Infrastructure", img: "/training-session.png", category: "Fortune 500" },
              { title: "Enterprise Command Center", img: "/command-wide.png", category: "Global Ops" }
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden mb-8 shadow-[0_40px_80px_rgba(0,0,0,0.5)] transition-all duration-1000 border-none group-hover:shadow-[0_60px_100px_rgba(0,0,0,0.7)]" style={{aspectRatio:'21/9',borderRadius:40}}>
                  <img 
                    src={card.img} 
                    alt={card.title} 
                    className="w-full h-full object-cover grayscale-[0.4] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                  />
                  <div className="absolute inset-0" style={{background:'linear-gradient(to top,rgba(5,8,22,0.9),transparent 60%,transparent)'}} />
                  <div className="absolute bottom-10 left-10 text-white z-20">
                     <div className="text-[9px] font-black text-accent uppercase tracking-[0.3em] mb-3 opacity-60">{card.category}</div>
                     <h3 className="text-xl font-bold tracking-tight">{card.title}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Minimal Resources CTA */}
          <div className="mt-20 pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8 opacity-40 hover:opacity-100 transition-opacity">
            <div className="flex items-center gap-4">
              <Database className="w-5 h-5 text-accent" />
              <span className="text-[13px] font-bold text-white tracking-tight">Access our Library of Operational Guides</span>
            </div>
            <button className="flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.2em] text-accent">
              Browse Resources <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>
    </div>

    </div>
  );
}
