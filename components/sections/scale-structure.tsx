"use client";

import { motion } from "framer-motion";
import { ArrowRight, Layout, BarChart3, Users, Network } from "lucide-react";

export function ScaleStructure() {
  return (
    <section className="py-40 relative bg-[#050812] overflow-hidden">
      
      {/* Background Atmosphere */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,179,1,0.02),transparent_70%)]" />

      <div className="container-custom max-w-[1400px] relative z-10">
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
            <h2 className="text-[32px] md:text-[40px] font-bold text-white tracking-tight leading-tight mb-10">
              A structured workflow <br />
              <span className="text-white/40 italic">for high-fidelity teams.</span>
            </h2>
            <p className="text-[17px] text-white/50 font-light leading-relaxed mb-12">
              OYEN GRID isn&apos;t just a dashboard—it&apos;s an operational environment where programme logic, participant data, and outcomes converge.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
               {[
                 { title: "Cohort Sync", val: "98.4%", icon: Users },
                 { title: "Efficiency", val: "+4.5x", icon: Network }
               ].map((stat, i) => (
                 <div key={i} className="glass-card p-8 bg-white/[0.02] border-white/5">
                    <stat.icon className="w-5 h-5 text-accent/40 mb-6" />
                    <div className="text-3xl font-bold text-white tracking-tighter mb-1">{stat.val}</div>
                    <div className="text-[10px] font-black text-white/40 uppercase tracking-widest">{stat.title}</div>
                 </div>
               ))}
            </div>

            <button className="btn-primary mt-16 h-[52px] px-10 text-[15px]">See the Infrastructure</button>
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
                
                <div className="relative rounded-[24px] overflow-hidden border border-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.7)] bg-[#0B0F14]">
                   <img 
                     src="/wide-dashboard.png" 
                     alt="Operational Dashboard" 
                     className="w-full h-auto grayscale-[0.5] group-hover:grayscale-0 transition-all duration-1000 opacity-90"
                   />
                   
                   {/* Overlay Hint Cards */}
                   <motion.div 
                     animate={{ x: [0, 15, 0] }}
                     transition={{ duration: 6, repeat: Infinity }}
                     className="absolute top-10 right-10 glass-card p-5 bg-[#050812]/95 border-accent/20 backdrop-blur-2xl shadow-2xl w-48"
                   >
                      <div className="text-[10px] font-black text-accent uppercase tracking-widest mb-3">Live Insights</div>
                      <div className="h-1 w-full bg-white/5 rounded-full mb-3"><div className="h-full bg-accent w-[84%]" /></div>
                      <div className="text-lg font-bold text-white">84% Retention</div>
                   </motion.div>
                </div>
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
