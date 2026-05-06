"use client";

import { motion } from "framer-motion";
import { ArrowRight, Globe, Shield, Activity, Database, Network, Box } from "lucide-react";

export function ProofKnowledge() {
  return (
    <div className="bg-background">
      
      {/* 7. PROVEN IN HIGH-FIDELITY ENVIRONMENTS */}
      <section className="py-40 border-b border-white/5 relative overflow-hidden">
        {/* Subtle Background Texture */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-paper.png')] opacity-30 pointer-events-none" />
        
        <div className="container-custom relative z-10">
          <div className="text-center mb-32">
             <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
             >
               <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter leading-tight mb-8">
                 Proven in <span className="text-accent italic">high-fidelity</span> <br /> environments.
               </h2>
               <p className="text-lg md:text-xl text-text-secondary font-light max-w-2xl mx-auto leading-relaxed">
                 Real-world success from enterprise teams operating at global scale. Cinematic results in every programme environment.
               </p>
             </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              { title: "Enterprise Command Center", img: "/control-room.png", desc: "Coordinating multi-cohort global training for Fortune 500 partners." },
              { title: "High-Performance Workshop", img: "/training-session.png", desc: "Executing intensive leadership programmes with absolute structural clarity." },
              { title: "Operational War Room", img: "https://images.unsplash.com/photo-1552664730-d307ca884978", desc: "Driving strategic programme delivery through real-time data governance." }
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[16/10] rounded-[24px] overflow-hidden mb-10 shadow-[0_40px_80px_rgba(0,0,0,0.8)] border border-white/5 group-hover:border-accent/40 transition-all duration-700">
                  <img 
                    src={card.img} 
                    alt={card.title} 
                    className="w-full h-full object-cover grayscale-0 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                  
                  {/* Performance Badge Overlay */}
                  <div className="absolute top-6 right-6 glass-card px-4 py-2 bg-black/60 border-white/10 flex items-center gap-2">
                     <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                     <span className="text-[10px] font-black text-white uppercase tracking-widest leading-none">High Fidelity</span>
                  </div>
                </div>
                <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-accent transition-colors tracking-tight">{card.title}</h4>
                <p className="text-[#A1A1AA] text-[16px] font-light leading-relaxed mb-8">{card.desc}</p>
                <div className="flex items-center gap-2 text-accent text-xs font-black uppercase tracking-[0.2em] group-hover:translate-x-2 transition-transform">
                   Case Study <ArrowRight className="w-4 h-4" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. KNOWLEDGE HUB SECTION */}
      <section className="py-40 bg-secondary/5 relative overflow-hidden">
        
        {/* Glowing Data Matrix Background */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(rgba(245,179,1,0.2)_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none" />

        <div className="container-custom relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <div className="max-w-xl">
               <div className="flex items-center gap-3 mb-6">
                  <Database className="w-5 h-5 text-accent" />
                  <span className="text-accent text-[11px] font-black tracking-[0.3em] uppercase">INTELLIGENCE ASSETS</span>
               </div>
               <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none mb-6">Knowledge <span className="text-accent italic">Hub.</span></h2>
               <p className="text-[#A1A1AA] font-light text-lg">Expert guides on building high-fidelity operational structures for modern programmes.</p>
            </div>
            <button className="btn-outline px-10 py-4 flex items-center gap-3 group">
               Browse All Intelligence <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { title: "Scaling Global Teams", icon: Network, img: "/knowledge-network.png" },
              { title: "Operational Analytics", icon: Activity, img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51" },
              { title: "Data Governance", icon: Shield, img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5" }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card overflow-hidden group border-white/5 hover:border-accent/30 bg-black/40"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="w-full h-full object-cover opacity-50 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-105"
                  />
                  {/* Glowing Data Matrix Overlay */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,179,1,0.1),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="p-10">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-8 group-hover:bg-accent transition-colors">
                     <item.icon className="w-5 h-5 text-accent group-hover:text-black transition-colors" />
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-6 group-hover:text-accent transition-colors tracking-tight">{item.title}</h4>
                  <div className="flex items-center gap-2 text-text-secondary text-xs font-black uppercase tracking-[0.2em] group-hover:text-white transition-colors">
                    Access Resource <span>→</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
