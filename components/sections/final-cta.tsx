"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Globe, ShieldCheck, Zap, Cpu, Terminal, ChevronRight, Activity } from "lucide-react";
import { cn } from "@/lib/utils";

export function FinalCTA() {
  return (
    <section className="relative py-40 md:py-48 bg-[#050816] overflow-hidden border-t border-white/5">
      
      {/* 1. CINEMATIC ATMOSPHERE BACKGROUND */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-black text-white/[0.01] leading-none select-none tracking-tighter">
          AUTHORIZATION
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(245,185,66,0.03)_0%,transparent_100%)]" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, white 0.5px, transparent 0.5px)", backgroundSize: "60px 60px" }} />
      </div>

      <div className="container-custom max-w-[1240px] px-6 mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* LEFT SIDE: COMMAND NARRATIVE (40%) */}
          <div className="lg:col-span-5 space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center gap-3 mb-8">
                 <div className="w-1.5 h-1.5 rounded-full bg-brand-gold shadow-[0_0_8px_#f5b82e]" />
                 <span className="text-brand-gold/80 tracking-[0.4em] uppercase text-[10px] font-black">
                   Deployment Protocol Ready
                 </span>
              </div>

              <h2 className="text-[32px] md:text-[62px] font-bold text-white mb-8 leading-[0.95] tracking-tighter">
                Ready to orchestrate your <br />
                <span className="text-brand-gold italic font-serif">entire ecosystem?</span>
              </h2>

              <p className="text-[15px] text-white/40 mb-12 leading-relaxed font-medium">
                One platform. Every capability. Infinite institutional impact. Transition your programme operations to the world&apos;s most structured operating system.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-6 mb-16">
                <button className="w-full sm:w-auto h-14 px-10 rounded-xl bg-brand-gold text-black font-black text-[11px] uppercase tracking-widest hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_20px_50px_rgba(245,185,66,0.2)]">
                  Deploy Institutional Grid
                </button>
                <button className="w-full sm:w-auto h-14 px-10 rounded-xl border border-white/10 bg-white/[0.02] backdrop-blur-xl text-white font-bold text-[11px] uppercase tracking-widest hover:bg-white/[0.05] transition-all">
                  Consult Architecture
                </button>
              </div>

              {/* INTEGRATED TELEMETRY */}
              <div className="grid grid-cols-4 gap-6 pt-10 border-t border-white/5">
                 <TelemetryItem icon={Globe} label="Nodes" val="READY" />
                 <TelemetryItem icon={ShieldCheck} label="Security" val="L4" />
                 <TelemetryItem icon={Zap} label="Latency" val="0.8ms" />
                 <TelemetryItem icon={Activity} label="Status" val="NOMINAL" />
              </div>
            </motion.div>
          </div>

          {/* RIGHT SIDE: AUTHORIZATION PROTOCOL VISUAL (60%) */}
          <div className="lg:col-span-7 relative">
             <motion.div
               initial={{ opacity: 0, scale: 0.95, x: 20 }}
               whileInView={{ opacity: 1, scale: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
               className="relative w-full aspect-[1.1] rounded-[48px] bg-[#0b1220]/40 backdrop-blur-3xl border border-white/10 overflow-hidden shadow-[0_80px_160px_rgba(0,0,0,0.8)]"
             >
                {/* Protocol Terminal Window */}
                <div className="absolute inset-0 p-12 flex flex-col justify-center items-center">
                   <div className="relative w-full max-w-[480px] p-8 rounded-[32px] bg-[#080B14] border border-white/10 shadow-3xl overflow-hidden group">
                      <div className="flex items-center justify-between mb-10">
                         <div className="flex gap-1.5">
                            <div className="w-2.5 h-2.5 rounded-full bg-brand-gold/40" />
                            <div className="w-2.5 h-2.5 rounded-full bg-white/5" />
                            <div className="w-2.5 h-2.5 rounded-full bg-white/5" />
                         </div>
                         <span className="text-[9px] font-black text-white/30 uppercase tracking-widest">DEPLOYMENT_VERSION_4.2</span>
                      </div>

                      <div className="space-y-8 py-4">
                         <div className="space-y-3">
                            <div className="flex justify-between items-end">
                               <span className="text-[10px] font-black text-white/40 uppercase tracking-widest">Protocol Authorization</span>
                               <span className="text-[12px] font-bold text-emerald-500">98% COMPLETE</span>
                            </div>
                            <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                               <motion.div 
                                  initial={{ width: 0 }}
                                  whileInView={{ width: "98%" }}
                                  transition={{ duration: 2, delay: 0.5 }}
                                  className="h-full bg-brand-gold/40" 
                               />
                            </div>
                         </div>

                         <div className="flex items-center gap-6 p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                            <div className="w-12 h-12 rounded-xl bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center">
                               <Cpu className="w-6 h-6 text-brand-gold animate-pulse" />
                            </div>
                            <div>
                               <div className="text-[18px] font-bold text-white tracking-tighter uppercase">Protocol Authorized</div>
                               <div className="text-[9px] font-black text-emerald-500 uppercase tracking-widest mt-1">Identity Verified :: Root Access</div>
                            </div>
                         </div>
                      </div>

                      {/* Scanning Line Animation */}
                      <motion.div 
                        animate={{ top: ["-10%", "110%"] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        className="absolute left-0 right-0 h-px bg-brand-gold/20 shadow-[0_0_15px_#f5b82e] z-20 pointer-events-none"
                      />
                   </div>
                </div>

                {/* Floating Technical HUD Detail */}
                <div className="absolute bottom-12 right-12 p-5 rounded-2xl bg-[#080B14]/80 border border-white/10 backdrop-blur-2xl">
                   <div className="flex items-center gap-3">
                      <Terminal className="w-4 h-4 text-brand-gold" />
                      <span className="text-[9px] font-black text-white/40 uppercase tracking-widest">Sync_ID :: OG-X992</span>
                   </div>
                </div>
             </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

function TelemetryItem({ icon: Icon, label, val }: { icon: any, label: string, val: string }) {
  return (
    <div className="flex flex-col items-start gap-1 group cursor-pointer">
      <div className="w-6 h-6 rounded bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-brand-gold/30 transition-all">
        <Icon className="w-3 h-3 text-white/20 group-hover:text-brand-gold transition-colors" />
      </div>
      <div className="text-[8px] font-black text-white/20 uppercase tracking-widest group-hover:text-white/40 transition-colors mt-2">{label}</div>
      <div className="text-[11px] font-bold text-white group-hover:text-brand-gold transition-colors">{val}</div>
    </div>
  );
}
