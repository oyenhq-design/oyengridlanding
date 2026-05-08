"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, Send, Sparkles } from "lucide-react";

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
                className="relative group p-1 rounded-full bg-gradient-to-tr from-accent-gold/40 to-transparent shadow-[0_20px_50px_rgba(0,0,0,0.5)] hover:scale-110 transition-transform"
              >
                <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-background shadow-2xl">
                  <Image
                    src="/exec-avatar-new.png"
                    alt="Operations Analyst"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-1.5 right-1.5 w-3.5 h-3.5 bg-green-500 border-2 border-background rounded-full shadow-[0_0_10px_rgba(34,197,94,0.8)]" />
                </div>
                {/* Executive Halo Glow */}
                <div className="absolute inset-0 rounded-full blur-xl bg-accent-gold/10 -z-10 group-hover:bg-accent-gold/30 transition-colors duration-500" />
              </button>
            )}

            {/* CHAT PANEL: System Intelligence Interface */}
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: 50, scale: 0.9, transformOrigin: "bottom right" }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                className="w-[400px] bg-navy-mid/95 backdrop-blur-[40px] border border-white/10 rounded-[32px] shadow-[0_60px_120px_rgba(0,0,0,0.7)] overflow-hidden"
              >
                {/* Header: Institutional Context */}
                <div className="p-8 bg-white/[0.03] border-b border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-5">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white/10">
                       <Image src="/exec-avatar-new.png" alt="Operations Analyst" fill className="object-cover" />
                    </div>
                    <div>
                      <div className="text-[15px] font-bold text-white leading-tight tracking-tight">Executive Support AI</div>
                      <div className="text-[10px] text-accent-gold font-black uppercase tracking-[0.2em] mt-1">Institutional Instance // L-04</div>
                    </div>
                  </div>
                  <button onClick={() => setIsOpen(false)} className="w-10 h-10 rounded-full flex items-center justify-center text-white/20 hover:text-white hover:bg-white/5 transition-all">
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Intelligence Feed */}
                <div className="h-[440px] p-8 overflow-y-auto space-y-8 scrollbar-hide">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-2xl bg-accent-gold/10 border border-accent-gold/20 flex items-center justify-center shrink-0">
                      <Sparkles className="w-5 h-5 text-accent-gold" />
                    </div>
                    <div className="p-5 rounded-[24px] rounded-tl-none bg-white/[0.03] border border-white/5 text-[15px] text-white/70 leading-relaxed font-light">
                      System infrastructure is nominal. I am your designated operational analyst. How can I facilitate your institutional coordination today?
                    </div>
                  </div>
                  
                  {/* Contextual Logic Paths */}
                  <div className="space-y-3">
                    <div className="text-[10px] text-white/20 font-black uppercase tracking-[0.3em] mb-4 pl-1">Suggested Protocols</div>
                    {[
                      { label: "Infrastructure Integrity", icon: ShieldCheck },
                      { label: "Institutional Logic", icon: Cpu },
                      { label: "System Orchestration", icon: Activity }
                    ].map((s) => (
                      <button key={s.label} className="flex items-center justify-between w-full p-4 rounded-2xl bg-white/[0.01] border border-white/[0.03] text-[13px] text-white/50 hover:text-accent-gold hover:border-accent-gold/20 hover:bg-accent-gold/5 transition-all group">
                        <span className="font-medium tracking-tight">{s.label}</span>
                        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Command Input Area */}
                <div className="p-8 pt-0">
                  <div className="relative group">
                    <input 
                      type="text" 
                      placeholder="Input systemic query..."
                      className="w-full bg-navy-deep/80 border border-white/10 rounded-[20px] py-5 px-8 text-[15px] text-white placeholder:text-white/20 focus:outline-none focus:border-accent-gold/40 transition-all shadow-inner"
                    />
                    <button className="absolute right-3 top-1/2 -translate-y-1/2 w-12 h-12 rounded-[14px] bg-accent-gold text-navy-deep flex items-center justify-center hover:scale-105 transition-all shadow-[0_10px_20px_rgba(200,155,45,0.2)]">
                      <Send className="w-5 h-5" />
                    </button>
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

import { ShieldCheck, Activity, Cpu, ArrowRight } from "lucide-react";

