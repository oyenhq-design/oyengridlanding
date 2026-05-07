"use client";

import { motion } from "framer-motion";
import { ArrowRight, Layout, BarChart3, Users, Network } from "lucide-react";

export function ScaleStructure() {
  return (
    <section className="py-40 relative bg-background overflow-hidden">
      
      {/* Background Atmosphere */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,166,42,0.02),transparent_70%)]" />

      <div className="container-custom relative z-10" style={{maxWidth:1400}}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
          
          {/* Left: Asymmetrical Storytelling */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <div className="flex items-center gap-3 mb-8">
               <div className="h-px w-8 bg-accent" />
               <span className="text-accent text-[11px] font-black tracking-[0.4em] uppercase">SYSTEM FLOW</span>
            </div>
            <h2 className="mb-10 text-white">
              A structured workflow <br />
              <span className="text-gold-gradient italic">for high-fidelity teams.</span>
            </h2>
            <p className="mb-12 opacity-60">
              OYEN GRID isn&apos;t just a dashboard—it&apos;s an operational environment where programme logic, participant data, and outcomes converge.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
               {[
                 { title: "Cohort Sync", val: "98.4%", icon: Users },
                 { title: "Efficiency", val: "+4.5x", icon: Network }
               ].map((stat, i) => (
                 <div key={i} className="glass-card p-8 bg-background/60 border-none shadow-[0_30px_60px_rgba(0,0,0,0.4)]">
                    <stat.icon className="w-5 h-5 text-accent/30 mb-6 group-hover:text-accent transition-colors" />
                    <div className="text-3xl font-bold text-white tracking-tighter mb-1">{stat.val}</div>
                    <div className="text-[10px] font-black text-white/30 uppercase tracking-[0.3em]">{stat.title}</div>
                 </div>
               ))}
            </div>

            <button className="btn-primary mt-16 px-10 text-[15px]" style={{height:52}}>See the Infrastructure</button>
          </motion.div>

          {/* Right: Immersive Dashboard Environment */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 relative"
          >
             <div className="relative group">
                <div className="absolute -inset-10 bg-accent/5 blur-[80px] rounded-full pointer-events-none opacity-50" />
                
                <div className="relative rounded-[48px] overflow-hidden shadow-[0_60px_120px_rgba(0,0,0,0.8)] bg-background/60 border-none">
                    <img 
                      src="/wide-dashboard.png" 
                      alt="Operational Dashboard" 
                      className="w-full h-auto grayscale-[0.4] group-hover:grayscale-0 transition-all duration-1000 opacity-90 group-hover:scale-105"
                    />
                    
                    {/* Overlay Hint Cards */}
                    <motion.div 
                      animate={{ x: [0, 10, 0] }}
                      transition={{ duration: 6, repeat: Infinity }}
                      className="absolute top-12 right-12 glass-card p-8 bg-background/90 border-none backdrop-blur-3xl shadow-2xl w-56"
                    >
                       <div className="text-[10px] font-black text-accent uppercase tracking-[0.3em] mb-4 opacity-60">Live Insights</div>
                       <div className="h-1 w-full bg-white/5 rounded-full mb-5"><div className="h-full bg-accent w-[84%] shadow-[0_0_10px_#D4A62A]" /></div>
                       <div className="text-xl font-bold text-white tracking-tight">84% Retention</div>
                    </motion.div>
                 </div>
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
