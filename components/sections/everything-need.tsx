"use client";

import { motion } from "framer-motion";
import { Check, Monitor, Smartphone, Globe, Shield } from "lucide-react";

export function EverythingNeed() {
  const bullets = [
    { title: "Modular curriculum builder", desc: "Design multi-layered programs with prerequisites and cohort logic." },
    { title: "Automated participant tracking", desc: "Automate attendance, completions, and progression with zero overhead." },
    { title: "High-fidelity ROI analytics", desc: "Deep visibility into session impact and participant performance." },
    { title: "Enterprise-grade security", desc: "SOC2 compliant infrastructure with granular data governance." }
  ];

  return (
    <section className="py-40 bg-black relative overflow-hidden">
      
      {/* CINEMATIC LIGHTING & TEXTURE */}
      <div className="absolute inset-0 z-0">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(245,179,1,0.05),transparent_70%)]" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
          
          {/* Right: Large Cinematic Workstation Panel (Swapped for rhythm) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: -40 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 relative"
          >
            <div className="relative group">
              {/* Massive Shadow/Glow */}
              <div className="absolute -inset-10 bg-accent/5 blur-[100px] rounded-full pointer-events-none" />
              
              <div className="relative glass-card border-white/10 p-3 lg:p-4 shadow-[0_80px_150px_rgba(0,0,0,0.9)] bg-secondary/20">
                <div className="relative rounded-xl overflow-hidden border border-white/5">
                  <img 
                    src="/workstation.png" 
                    alt="Cinematic Workstation" 
                    className="w-full aspect-[16/10] object-cover group-hover:scale-105 transition-transform duration-1000"
                  />
                  {/* Warm Office Reflections Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-accent/10 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

              {/* Floating Live State Chip */}
              <div className="absolute -top-8 left-12 glass-card p-4 px-6 bg-accent border-accent shadow-[0_0_30px_rgba(245,179,1,0.3)] flex items-center gap-3">
                 <div className="w-2 h-2 rounded-full bg-black animate-pulse" />
                 <span className="text-black font-black text-xs uppercase tracking-widest">Live Operations</span>
              </div>
            </div>
          </motion.div>

          {/* Left: Text Block */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <h2 className="text-4xl md:text-6xl font-black text-white leading-tight mb-10 tracking-tighter">
              Operate with <br />
              <span className="text-accent italic">absolute power.</span>
            </h2>
            <p className="text-lg text-[#A1A1AA] font-light leading-relaxed mb-12">
              Stop stitching together disparate tools. OYEN GRID provides a comprehensive workstation suite designed for professional programme leaders.
            </p>
            <div className="space-y-10">
              {bullets.map((bullet, i) => (
                <div key={i} className="flex gap-6 group">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:border-accent transition-all">
                    <Check className="w-5 h-5 text-accent group-hover:text-black" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-xl mb-2 tracking-tight group-hover:text-accent transition-colors">{bullet.title}</h4>
                    <p className="text-[#71717A] font-light leading-relaxed text-sm">{bullet.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="btn-primary mt-16 px-12 py-5 text-lg">See the Workstation in Action</button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
