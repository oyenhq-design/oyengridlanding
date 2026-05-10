"use client";

import { useState } from "react";
import { MessageSquare, X, Send, Cpu, ShieldCheck, Sparkles, Orbit } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-10 right-10 z-[200]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="mb-8 w-[420px] bg-[#0A0A0B]/95 backdrop-blur-[60px] border border-brand-gold/10 rounded-[32px] overflow-hidden shadow-[0_40px_120px_rgba(0,0,0,0.9)]"
          >
            {/* Header */}
            <div className="p-8 border-b border-white/5 flex items-center justify-between bg-white/[0.01]">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-brand-gold/5 flex items-center justify-center text-brand-gold border border-brand-gold/20 shadow-[0_0_20px_rgba(245,185,66,0.1)]">
                  <Orbit className="w-6 h-6 animate-spin-slow" />
                </div>
                <div>
                  <div className="text-[16px] font-bold text-white tracking-tight">Institutional Copilot</div>
                  <div className="flex items-center gap-2 mt-1">
                    <motion.div 
                      animate={{ opacity: [1, 0.4, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981]" 
                    />
                    <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.2em]">Operational Intelligence Active</span>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="w-10 h-10 rounded-xl hover:bg-white/5 flex items-center justify-center text-white/10 hover:text-white transition-all"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content Placeholder */}
            <div className="p-10 h-[400px] flex flex-col justify-center items-center text-center">
              <div className="w-20 h-20 rounded-full bg-white/[0.02] border border-white/5 flex items-center justify-center mb-8">
                 <ShieldCheck className="w-8 h-8 text-white/10" />
              </div>
              <h4 className="text-white font-bold mb-3 tracking-tight">Institutional Intelligence</h4>
              <p className="text-white/20 text-[14px] leading-relaxed max-w-[240px] font-light">
                Initializing operational support protocol. How can I assist with your delivery infrastructure?
              </p>
            </div>

            {/* Input Bar */}
            <div className="p-8 bg-white/[0.02] border-t border-white/5">
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Send operational command..."
                  className="w-full h-14 bg-white/[0.03] border border-white/5 rounded-2xl px-6 text-[14px] text-white placeholder:text-white/10 focus:outline-none focus:border-brand-gold/40 transition-all font-light"
                />
                <button className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-brand-gold rounded-xl flex items-center justify-center text-black shadow-lg hover:scale-105 transition-all">
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Trigger Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        animate={{ 
          y: [0, -8, 0],
          boxShadow: [
            "0 10px 30px rgba(0,0,0,0.5), 0 0 0px rgba(245,185,66,0)",
            "0 20px 40px rgba(0,0,0,0.6), 0 0 25px rgba(245,185,66,0.15)",
            "0 10px 30px rgba(0,0,0,0.5), 0 0 0px rgba(245,185,66,0)"
          ]
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        whileHover={{ scale: 1.05, y: -12 }}
        whileTap={{ scale: 0.95 }}
        className={cn(
          "w-16 h-16 rounded-[24px] flex items-center justify-center transition-all duration-500 group relative overflow-hidden",
          isOpen 
            ? "bg-white/[0.03] border border-white/10 text-white" 
            : "bg-[#0A0A0B] border border-brand-gold/30 text-brand-gold shadow-[0_0_20px_rgba(245,185,66,0.1)]"
        )}
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-brand-gold/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        {isOpen ? <X className="w-6 h-6" /> : <Sparkles className="w-6 h-6" />}
        
        {!isOpen && (
          <div className="absolute top-4 right-4 w-2 h-2">
             <motion.div 
               animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
               transition={{ duration: 2, repeat: Infinity }}
               className="w-full h-full bg-emerald-500 rounded-full shadow-[0_0_8px_#10b981]" 
             />
          </div>
        )}
      </motion.button>
    </div>
  );
}
