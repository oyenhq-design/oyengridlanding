"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Globe, ShieldCheck, Zap, Cpu, Terminal, ChevronRight, Activity, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export function FinalCTA() {
  return (
    <section className="relative py-32 md:py-48 bg-[#050816] theme-light-section overflow-hidden border-t border-white/5">
      
      {/* CINEMATIC BACKGROUND SYSTEM */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Large Institutional Branding (Subtle) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-black text-white/[0.01] leading-none select-none tracking-tighter">
          DEPLOYMENT
        </div>

        {/* Technical Grid */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, white 0.5px, transparent 0.5px)", backgroundSize: "60px 60px" }} />
        
        {/* Ambient Glows */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[radial-gradient(circle_at_bottom,rgba(245,185,66,0.06),transparent_60%)]" />
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-blue-500/5 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto"
        >
          {/* Status Badge */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-brand-gold/5 border border-brand-gold/20">
              <div className="w-1 h-1 rounded-full bg-brand-gold animate-pulse" />
              <span className="text-[9px] font-black text-brand-gold uppercase tracking-[0.2em]">Programme Intelligence</span>
            </div>
          </div>

          <h2 className="text-white mb-8 text-[40px] md:text-[72px] leading-[0.95] tracking-[-0.05em] font-bold">
            Ready to orchestrate your <br className="hidden md:block" />
            <span className="text-brand-gold italic font-semibold">entire ecosystem?</span>
          </h2>
          
          <p className="text-[15px] md:text-[18px] text-white/40 mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
            One platform. Every capability. Infinite institutional impact. Transition your programme operations to the world's most structured operating system.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <button className="group h-14 px-10 rounded-[14px] bg-brand-gold text-black font-black text-[14px] uppercase tracking-wider flex items-center gap-2.5 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_15px_40px_rgba(245,185,66,0.2)]">
              Get Started
              <ArrowUpRight className="w-4.5 h-4.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
            <button className="h-14 px-10 rounded-[14px] border border-white/10 bg-white/[0.02] backdrop-blur-xl text-white font-bold text-[14px] hover:bg-white/[0.05] transition-all flex items-center gap-2.5">
              Book a Demo
              <ChevronRight className="w-4 h-4 text-white/40" />
            </button>
            <button className="h-14 px-10 rounded-[14px] border border-white/10 bg-white/[0.02] backdrop-blur-xl text-white font-bold text-[14px] hover:bg-white/[0.05] transition-all flex items-center gap-2.5">
              Talk to a Specialist
              <ChevronRight className="w-4 h-4 text-white/40" />
            </button>
          </div>

          {/* DEPLOYMENT TELEMETRY ROW */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto pt-12 border-t border-white/5">
             <TelemetryItem icon={Globe} label="Global Nodes" val="SYNCED" />
             <TelemetryItem icon={ShieldCheck} label="Security" val="ACTIVE" />
             <TelemetryItem icon={Zap} label="Latency" val="0.8ms" />
             <TelemetryItem icon={Activity} label="Status" val="NOMINAL" />
          </div>
        </motion.div>
      </div>

      {/* Decorative Technical Corners */}
      <CornerDetail position="top-left" />
      <CornerDetail position="top-right" />
      <CornerDetail position="bottom-left" />
      <CornerDetail position="bottom-right" />
    </section>
  );
}

function TelemetryItem({ icon: Icon, label, val }: { icon: LucideIcon, label: string, val: string }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="w-8 h-8 rounded-lg bg-white/[0.02] border border-white/5 flex items-center justify-center mb-1">
        <Icon className="w-3.5 h-3.5 text-white/20" />
      </div>
      <div className="text-[9px] font-black text-white/30 uppercase tracking-widest">{label}</div>
      <div className="text-[12px] font-bold text-brand-gold tracking-widest">{val}</div>
    </div>
  );
}

function CornerDetail({ position }: { position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' }) {
  return (
    <div className={cn(
      "absolute w-24 h-24 pointer-events-none opacity-[0.08]",
      position === 'top-left' && "top-8 left-8 border-t border-l border-white",
      position === 'top-right' && "top-8 right-8 border-t border-r border-white",
      position === 'bottom-left' && "bottom-8 left-8 border-b border-l border-white",
      position === 'bottom-right' && "bottom-8 right-8 border-b border-r border-white"
    )}>
       <div className={cn(
         "absolute w-2 h-2 bg-white",
         position === 'top-left' && "-top-1 -left-1",
         position === 'top-right' && "-top-1 -right-1",
         position === 'bottom-left' && "-bottom-1 -left-1",
         position === 'bottom-right' && "-bottom-1 -right-1"
       )} />
    </div>
  );
}
