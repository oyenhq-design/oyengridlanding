"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

export function CinematicCTASection() {
  return (
    <section className="relative w-full h-[420px] lg:h-[520px] overflow-hidden group">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/professional_workspace_ops_team_1778024747201.png" 
          alt="Professional Workspace" 
          className="w-full h-full object-cover transition-transform duration-[10s] ease-out group-hover:scale-105"
        />
        {/* Cinematic Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent opacity-90" />
      </div>

      <div className="relative z-10 h-full max-w-[1400px] mx-auto px-12 lg:px-20 flex flex-col justify-center items-start text-left">
        
        {/* Soft Content Glow */}
        <div className="absolute left-10 top-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#D4AF37] opacity-[0.08] blur-[120px] rounded-full pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl relative"
        >
          <div className="inline-flex items-center gap-3 text-[#D4AF37] text-[13px] font-bold tracking-[0.2em] uppercase mb-6">
            <Sparkles className="w-4 h-4" />
            Scale Your Operations
          </div>
          
          <h2 className="text-[36px] md:text-[52px] font-bold text-white leading-[1.1] tracking-tight mb-6">
            Structure your programmes <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#FFF0B3]">with confidence.</span>
          </h2>
          
          <p className="text-lg md:text-xl text-[#A1A1AA] leading-relaxed mb-10 font-light">
            Get full operational control, track performance, and scale your training systems — all in one platform.
          </p>

          <div className="flex flex-wrap gap-6">
            <Link 
              href="/get-started"
              className="relative px-10 py-4 rounded-xl text-[15px] font-bold transition-all duration-300 overflow-hidden group/btn shadow-[0_10px_25px_rgba(250,204,21,0.2)] hover:shadow-[0_15px_30px_rgba(250,204,21,0.4)] hover:scale-105 active:scale-95"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#FACC15] to-[#EAB308]" />
              <span className="relative z-10 text-black flex items-center gap-2">
                Start building <ArrowRight className="w-4 h-4" />
              </span>
            </Link>

            <Link 
              href="/contact"
              className="px-10 py-4 rounded-xl border border-white/10 bg-white/5 text-white text-[15px] font-bold hover:bg-white/10 hover:border-white/20 transition-all duration-300 active:scale-95"
            >
              Talk to sales
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Cinematic Border Accent */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}
