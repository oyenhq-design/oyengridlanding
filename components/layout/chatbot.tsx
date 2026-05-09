"use client";

import { useState } from "react";
import { MessageSquare, X, Send, Cpu, ShieldCheck } from "lucide-react";
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
            className="mb-6 w-[420px] bg-[#080C1A]/95 backdrop-blur-[40px] border border-white/10 rounded-[32px] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.8)]"
          >
            {/* Header */}
            <div className="p-8 border-b border-white/5 flex items-center justify-between bg-white/[0.02]">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-accent-gold/10 flex items-center justify-center text-accent-gold border border-accent-gold/20 shadow-[0_0_15px_rgba(212,166,58,0.2)]">
                  <Cpu className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-[16px] font-bold text-white tracking-tight">Operational Assistant</div>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981]" />
                    <span className="text-[10px] font-black text-white/30 uppercase tracking-widest">System Online // L-04</span>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="w-10 h-10 rounded-xl hover:bg-white/5 flex items-center justify-center text-white/20 hover:text-white transition-all"
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
                  className="w-full h-14 bg-white/[0.03] border border-white/5 rounded-2xl px-6 text-[14px] text-white placeholder:text-white/10 focus:outline-none focus:border-accent-gold/40 transition-all font-light"
                />
                <button className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-accent-gold rounded-xl flex items-center justify-center text-black shadow-lg hover:scale-105 transition-all">
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
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={cn(
          "w-16 h-16 rounded-[22px] flex items-center justify-center transition-all duration-500 shadow-2xl group relative",
          isOpen 
            ? "bg-white/[0.05] border border-white/10 text-white" 
            : "bg-accent-gold text-black border-none"
        )}
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-7 h-7" />}
        
        {!isOpen && (
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-500 border-4 border-[#040816] rounded-full" />
        )}
      </motion.button>
    </div>
  );
}
