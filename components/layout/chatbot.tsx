"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, Send, Sparkles, Activity, ShieldCheck, Cpu, ArrowRight } from "lucide-react";

export function Chatbot() {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="relative"
          >
            {/* TRIGGER BUTTON: Executive Profile */}
            {!isOpen && (
              <button
                onClick={() => setIsOpen(true)}
                className="relative group p-1.5 rounded-full bg-gradient-to-tr from-[#C89B2D]/40 via-transparent to-transparent shadow-[0_30px_60px_rgba(0,0,0,0.6)] hover:scale-105 transition-transform duration-500"
              >
                <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-[#040816] shadow-2xl bg-[#040816]">
                  <Image
                    src="/exec-avatar-new.png"
                    alt="Operations Analyst"
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute bottom-1.5 right-1.5 w-3.5 h-3.5 bg-emerald-500 border-2 border-[#040816] rounded-full shadow-[0_0_15px_rgba(16,185,129,0.8)]" />
                </div>
                {/* Executive Halo Glow */}
                <div className="absolute -inset-4 rounded-full blur-2xl bg-[#C89B2D]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10" />
              </button>
            )}

            {/* CHAT PANEL: Executive Intelligence Interface */}
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: 50, scale: 0.9, transformOrigin: "bottom right" }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                className="w-[440px] bg-[#061120]/80 backdrop-blur-[60px] border border-white/10 rounded-[40px] shadow-[0_80px_160px_rgba(0,0,0,0.8)] overflow-hidden"
              >
                {/* Header: Institutional Context */}
                <div className="p-10 bg-white/[0.02] border-b border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-6">
                    <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-white/10 bg-[#040816]">
                       <Image src="/exec-avatar-new.png" alt="Operations Analyst" fill className="object-cover grayscale" />
                    </div>
                    <div>
                      <div className="text-[16px] font-bold text-white leading-tight tracking-tight">Executive Analyst</div>
                      <div className="text-[10px] text-[#C89B2D] font-black uppercase tracking-[0.3em] mt-2 flex items-center gap-2">
                         <div className="w-1.5 h-1.5 rounded-full bg-[#C89B2D] animate-pulse" />
                         Institutional Instance // L-04
                      </div>
                    </div>
                  </div>
                  <button onClick={() => setIsOpen(false)} className="w-10 h-10 rounded-full flex items-center justify-center text-white/20 hover:text-white hover:bg-white/5 transition-all">
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Intelligence Feed */}
                <div className="h-[480px] p-10 overflow-y-auto space-y-10 scrollbar-hide">
                  <div className="flex gap-5">
                    <div className="w-10 h-10 rounded-2xl bg-[#C89B2D]/10 border border-[#C89B2D]/20 flex items-center justify-center shrink-0">
                      <Sparkles className="w-5 h-5 text-[#C89B2D]" />
                    </div>
                    <div className="space-y-4">
                       <div className="p-6 rounded-[28px] rounded-tl-none bg-white/[0.03] border border-white/5 text-[15px] text-white/70 leading-relaxed font-light">
                         System infrastructure is nominal. How can I facilitate your institutional coordination or infrastructure initialization today?
                       </div>
                       <div className="text-[9px] text-white/10 font-black uppercase tracking-widest pl-1">09:42:15 GMT-0 // SECURE NODE</div>
                    </div>
                  </div>
                  
                  {/* Contextual Logic Paths */}
                  <div className="space-y-3 pt-4">
                    <div className="text-[10px] text-white/20 font-black uppercase tracking-[0.4em] mb-6 pl-1">Suggested Protocols</div>
                    {[
                      { label: "Infrastructure Integrity", icon: ShieldCheck, detail: "Audit structural nodes" },
                      { label: "Institutional Logic", icon: Cpu, detail: "View governance layers" },
                      { label: "System Orchestration", icon: Activity, detail: "Live telemetry feed" }
                    ].map((s) => (
                      <button key={s.label} className="flex items-center justify-between w-full p-5 rounded-2xl bg-white/[0.01] border border-white/[0.03] text-left hover:border-[#C89B2D]/30 hover:bg-[#C89B2D]/5 transition-all group">
                        <div className="flex items-center gap-4">
                           <div className="w-10 h-10 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-center group-hover:bg-[#C89B2D]/10 group-hover:border-[#C89B2D]/20 transition-all">
                              <s.icon className="w-4 h-4 text-white/20 group-hover:text-[#C89B2D] transition-colors" />
                           </div>
                           <div>
                              <div className="text-[13px] font-bold text-white/60 group-hover:text-white transition-colors">{s.label}</div>
                              <div className="text-[10px] text-white/20 group-hover:text-[#C89B2D]/40 transition-colors uppercase tracking-widest mt-1">{s.detail}</div>
                           </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-white/10 group-hover:text-[#C89B2D] group-hover:translate-x-1 transition-all" />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Command Input Area */}
                <div className="p-10 pt-0">
                  <div className="relative group">
                    <input 
                      type="text" 
                      placeholder="Input systemic query..."
                      className="w-full bg-[#040816]/60 border border-white/10 rounded-[24px] py-6 px-10 text-[15px] text-white placeholder:text-white/20 focus:outline-none focus:border-[#C89B2D]/40 transition-all shadow-inner"
                    />
                    <button className="absolute right-3 top-1/2 -translate-y-1/2 w-14 h-14 rounded-[18px] bg-[#C89B2D] text-[#040816] flex items-center justify-center hover:scale-105 transition-all shadow-[0_15px_30px_rgba(200,155,45,0.3)]">
                      <Send className="w-5 h-5" />
                    </button>
                  </div>
                  <div className="mt-6 flex items-center justify-center gap-6 opacity-20 group-hover:opacity-40 transition-opacity">
                     <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white" />
                     <div className="text-[9px] font-black uppercase tracking-[0.5em] text-white">L-04 Analyst Feed</div>
                     <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white" />
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
