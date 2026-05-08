"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-24 pb-32 overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="lg:col-span-6"
          >
            <div className="text-accent-gold text-[11px] font-bold tracking-[0.3em] uppercase mb-10 flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-gold" />
              System Architecture
            </div>
            
            <h1 className="text-[48px] md:text-[64px] font-bold text-white mb-10 leading-[1.05] tracking-tight">
              Professional programme <br />
              <span className="text-gold-gradient italic font-medium">infrastructure for scale.</span>
            </h1>
            
            <p className="text-[18px] text-white/40 mb-12 max-w-[500px] leading-relaxed">
              Run complex learning operations with absolute structural integrity. 
              Built for institutional delivery and global operational governance.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-6 mb-20">
              <button className="btn-gold px-10 h-12 w-full sm:w-auto">
                Start Building
              </button>
              <button className="btn-outline px-10 h-12 w-full sm:w-auto group">
                Speak with Architects
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            
            {/* METRICS ROW */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 pt-12 border-t border-white/5">
              {[
                { val: "2,400+", label: "Networks" },
                { val: "1.2M", label: "Operations" },
                { val: "Active", label: "Monitoring" },
                { val: "99.9%", label: "Uptime" }
              ].map((stat, i) => (
                <div key={i}>
                  <div className="text-xl font-bold text-white mb-1">{stat.val}</div>
                  <div className="text-[10px] text-white/20 font-bold uppercase tracking-[0.2em]">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="lg:col-span-6 relative"
          >
            {/* Ambient Glow */}
            <div className="ambient-glow -top-20 -right-20 w-[600px] h-[600px]" />
            
            <div className="relative rounded-[32px] overflow-hidden border border-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.8)] bg-navy-light aspect-[16/11]">
              <img 
                src="/hero-dashboard.png" 
                alt="Enterprise Analytics Dashboard" 
                className="w-full h-full object-cover opacity-90"
              />
              
              {/* Floating Stat Cards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="absolute top-10 right-10 p-6 glass-card border-white/10 shadow-2xl min-w-[180px]"
              >
                <div className="text-2xl font-bold text-white mb-1">98.2%</div>
                <div className="text-[10px] text-accent-gold font-bold uppercase tracking-widest">Efficiency</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
                className="absolute bottom-10 left-10 p-6 glass-card border-white/10 shadow-2xl min-w-[200px]"
              >
                <div className="text-2xl font-bold text-white mb-1">4,284</div>
                <div className="text-[10px] text-accent-gold font-bold uppercase tracking-widest">Active Networks</div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
