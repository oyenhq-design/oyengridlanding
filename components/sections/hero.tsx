"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <div className="relative overflow-hidden bg-background">
      
      {/* 3. HERO SECTION */}
      <section className="relative min-h-[900px] flex items-center">
        
        {/* Full-Bleed Generated Premium Background */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/hero-bg.png" 
            alt="OYEN GRID Hero" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent" />
        </div>

        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Content (Overlay) */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-xl"
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-8">
                Run structured programmes with full <span className="text-accent">operational control.</span>
              </h1>
              <p className="text-lg text-text-secondary leading-relaxed mb-12 font-light">
                The high-fidelity infrastructure for delivering complex professional programmes at scale. Built for clarity, control, and absolute governance.
              </p>
              <div className="flex items-center gap-4">
                <button className="btn-primary px-10 py-4 text-[17px]">Start Building</button>
                <button className="btn-outline px-10 py-4 text-[17px]">Talk to Sales</button>
              </div>
            </motion.div>

            {/* Right side remains empty as the image already contains the dashboard mockup */}
            <div className="hidden lg:block h-full" />

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
