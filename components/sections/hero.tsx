"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function Hero() {
  return (
    <section className="relative z-10 pt-[180px] pb-24 overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* LEFT CONTENT */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-white mb-8">
              Professional programme <br />
              <span className="text-gold-gradient">infrastructure for scale.</span>
            </h1>
            
            <p className="max-w-md mb-12 text-white/70 text-[18px] leading-relaxed">
              Orchestrate complex delivery networks with absolute structural integrity. Built for global governance and executive operational control.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-6 mb-20">
              <button className="btn-gold w-full sm:w-auto px-10">Start Building</button>
              <button className="flex items-center gap-3 text-white/40 hover:text-white font-bold text-[14px] transition-all group uppercase tracking-widest">
                Speak with Architects <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </button>
            </div>

            {/* METRICS ROW */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 py-8 border-t border-white/5">
              {[
                { label: "Active Programmes", val: "2,400+" },
                { label: "Sessions Daily", val: "1.2M" },
                { label: "Multi-region", val: "Active" },
                { label: "Availability", val: "99.9%" }
              ].map((stat, i) => (
                <div key={i}>
                  <div className="text-white font-bold text-[18px] mb-1">{stat.val}</div>
                  <div className="text-white/20 text-[9px] font-black uppercase tracking-[0.2em]">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT: DASHBOARD VISUAL */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            {/* Visual Glow */}
            <div className="absolute -inset-20 bg-accent-gold/5 blur-[120px] rounded-full pointer-events-none" />
            
            <div className="relative rounded-[32px] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.8)] border border-white/10 bg-[#070B1D]">
              <img 
                src="/hero-main.png" 
                alt="Enterprise Operations Monitor" 
                className="w-full h-auto object-cover opacity-90 transition-transform duration-[4s] hover:scale-105"
              />
              
              {/* Floating Metric Card */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="absolute top-8 right-8 p-6 glass-card bg-[#040816]/90 border-white/10 backdrop-blur-2xl shadow-2xl min-w-[180px]"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent-gold shadow-[0_0_8px_#C9972B]" />
                    <span className="text-[10px] font-black text-accent-gold uppercase tracking-[0.2em]">Efficiency</span>
                  </div>
                  <CheckCircle2 className="w-3.5 h-3.5 text-accent-gold opacity-50" />
                </div>
                <div className="text-[32px] font-bold text-white mb-1">98.2%</div>
                <div className="text-[10px] text-white/30 uppercase font-black tracking-widest">Resilience Score</div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
