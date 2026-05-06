"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <div className="relative overflow-hidden bg-background">
      
      {/* BACKGROUND: Subtle blurred office */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c" 
          alt="Office background" 
          className="w-full h-full object-cover opacity-10 grayscale blur-sm"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
      </div>

      {/* HERO SECTION */}
      <section className="relative z-10 pt-48 pb-32 min-h-screen flex items-center">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Content */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-8">
                Run structured programmes with full <span className="text-accent">operational control.</span>
              </h1>
              <p className="text-lg text-text-secondary leading-relaxed max-w-lg mb-12 font-light">
                The high-fidelity infrastructure for delivering complex professional programmes at scale. built for clarity, control, and absolute governance.
              </p>
              <div className="flex items-center gap-4">
                <button className="btn-primary px-10 py-4 text-[17px]">Start Building</button>
                <button className="btn-outline px-10 py-4 text-[17px]">Talk to Sales</button>
              </div>
            </motion.div>

            {/* Right Dashboard Mockup */}
            <motion.div 
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative"
            >
              <div className="relative group">
                {/* Glow */}
                <div className="absolute -inset-10 bg-accent/5 blur-[80px] rounded-full pointer-events-none group-hover:bg-accent/10 transition-all duration-700" />
                <div className="relative glass-card border-white/10 rounded-2xl overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.7)]">
                  <img 
                    src="https://images.unsplash.com/photo-1551288049-bbbda536639a" 
                    alt="Dashboard Mockup" 
                    className="w-full aspect-[1.4/1] object-cover opacity-90 transition-transform duration-1000 group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* TRUST / METRICS STRIP */}
      <section className="relative z-10 py-12 border-y border-white/5 bg-secondary/50 backdrop-blur-sm">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60">
            {[
              { label: "User Rating", val: "4.8/5" },
              { label: "Active Programs", val: "2,000+" },
              { label: "Global Reach", val: "45+ Countries" },
              { label: "Global Uptime", val: "99.9%" }
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center">
                <span className="text-xl font-bold text-white mb-1">{stat.val}</span>
                <span className="text-[10px] uppercase tracking-widest text-text-secondary font-bold">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
