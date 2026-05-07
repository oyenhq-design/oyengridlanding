"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";

export function OperationalClarity() {
  const points = [
    { title: "Fragmentation Elimination", desc: "Unify siloed spreadsheets into a single, high-fidelity infrastructure." },
    { title: "Structural Governance", desc: "Enforce absolute programme logic and compliance across all cohorts." },
    { title: "Automated Scaling", desc: "Execute global deployments with 2x faster orchestration capabilities." }
  ];

  return (
    <section className="py-40 relative bg-[#050812] overflow-hidden">
      
      {/* Subtle Grid Accent */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(245,179,1,0.03)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none" />

      <div className="container-custom max-w-[1400px] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          
          {/* Left: Editorial Storytelling */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8">
               <div className="w-1.5 h-1.5 rounded-full bg-accent" />
               <span className="text-accent text-[11px] font-black tracking-[0.4em] uppercase">OPERATIONAL ECOSYSTEM</span>
            </div>
            <h2 className="text-[32px] md:text-[42px] font-bold text-white tracking-tight leading-[1.1] mb-10">
              Built for operational clarity <br />
              <span className="text-white/40 italic">at global enterprise scale.</span>
            </h2>
            <p className="text-[17px] text-white/50 font-light leading-relaxed mb-12 max-w-lg">
              OYEN GRID transforms fragmented operations into a cohesive, high-performance system. Manage sessions, participants, and outcomes in one immersive environment.
            </p>
            
            <div className="space-y-12">
               {points.map((point, i) => (
                 <div key={i} className="flex gap-6 group">
                   <div className="mt-1">
                      <CheckCircle2 className="w-5 h-5 text-accent" />
                   </div>
                   <div>
                      <h4 className="text-white font-bold text-lg mb-2 tracking-tight group-hover:text-accent transition-colors">{point.title}</h4>
                      <p className="text-white/40 text-[15px] font-light leading-relaxed max-w-sm">{point.desc}</p>
                   </div>
                 </div>
               ))}
            </div>

            <button className="btn-primary mt-16 h-[52px] px-10 text-[15px]">Download Operational Guide</button>
          </motion.div>

          {/* Right: Immersive Environmental Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative group">
               {/* Restricted Glow */}
               <div className="absolute -inset-10 bg-accent/5 blur-[100px] rounded-full pointer-events-none" />
               
               <div className="relative rounded-[32px] overflow-hidden border border-white/5 shadow-[0_40px_80px_rgba(0,0,0,0.5)]">
                  <img 
                    src="/team-collab.png" 
                    alt="Team Collaborating" 
                    className="w-full h-auto grayscale-[0.2] opacity-90 group-hover:scale-105 transition-transform duration-1000"
                  />
                  {/* Subtle Shading */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
               </div>

               {/* Stats Overlay Hint */}
               <div className="absolute bottom-10 left-10 glass-card p-6 bg-[#050812]/90 border-white/10 backdrop-blur-xl shadow-2xl">
                  <div className="text-[10px] font-black text-accent uppercase tracking-widest mb-2">Systems Active</div>
                  <div className="flex -space-x-2">
                     {[1,2,3,4].map(i => <div key={i} className="w-8 h-8 rounded-full border-2 border-[#050812] bg-gray-800" />)}
                  </div>
               </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
