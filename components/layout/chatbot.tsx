"use client";

import { useState } from "react";
import { MessageSquare, X, Send, Cpu, ShieldCheck, Sparkles, Orbit, BarChart3, Users, Workflow, FileText } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
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
            className="mb-6 w-[360px] bg-[#0A0A0B]/95 backdrop-blur-[40px] border border-brand-gold/10 rounded-[28px] overflow-hidden shadow-[0_40px_120px_rgba(0,0,0,0.9)]"
          >
            {/* Header */}
            <div className="p-6 border-b border-white/5 flex items-center justify-between bg-white/[0.01]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full border border-brand-gold/30 overflow-hidden shadow-[0_0_15px_rgba(245,185,66,0.1)]">
                   <Image 
                     src="/images/oyen-ai-avatar.png" 
                     alt="OYEN AI" 
                     width={40} 
                     height={40} 
                     className="object-cover"
                   />
                </div>
                <div>
                  <div className="text-[14px] font-bold text-white tracking-tight">Institutional Copilot</div>
                  <div className="flex items-center gap-2 mt-0.5">
                    <motion.div 
                      animate={{ opacity: [1, 0.4, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-1 h-1 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981]" 
                    />
                    <span className="text-[9px] font-black text-white/20 uppercase tracking-[0.15em]">AI Core Active</span>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-lg hover:bg-white/5 flex items-center justify-center text-white/10 hover:text-white transition-all"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Content / Chat */}
            <div className="p-6 h-[380px] overflow-y-auto custom-scrollbar">
              <div className="flex flex-col items-center text-center mb-8 pt-4">
                <p className="text-white/20 text-[13px] leading-relaxed max-w-[240px] font-medium mb-6">
                  Initializing operational support protocol. How can I assist your infrastructure today?
                </p>
                
                {/* Suggested Actions */}
                <div className="w-full space-y-2">
                   {[
                     { label: "Generate operational report", icon: FileText },
                     { label: "Track participant progress", icon: Users },
                     { label: "Create programme workflow", icon: Workflow },
                     { label: "Analyze delivery metrics", icon: BarChart3 }
                   ].map((action, i) => (
                     <button 
                       key={i}
                       className="w-full p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:border-brand-gold/30 hover:bg-white/[0.04] transition-all flex items-center gap-3 group text-left"
                     >
                        <action.icon className="w-3.5 h-3.5 text-brand-gold/40 group-hover:text-brand-gold transition-colors" />
                        <span className="text-[11px] font-bold text-white/40 group-hover:text-white/80 transition-colors uppercase tracking-wider">{action.label}</span>
                     </button>
                   ))}
                </div>
              </div>
            </div>

            {/* Input Bar */}
            <div className="p-6 bg-white/[0.01] border-t border-white/5">
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Ask OYEN AI..."
                  className="w-full h-12 bg-white/[0.03] border border-white/5 rounded-xl px-5 text-[13px] text-white placeholder:text-white/10 focus:outline-none focus:border-brand-gold/40 transition-all font-medium"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-brand-gold rounded-lg flex items-center justify-center text-black shadow-lg hover:scale-105 transition-all">
                  <Send className="w-3.5 h-3.5" />
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
          y: [0, -6, 0],
          boxShadow: [
            "0 10px 30px rgba(0,0,0,0.5), 0 0 0px rgba(245,185,66,0)",
            "0 20px 40px rgba(0,0,0,0.6), 0 0 20px rgba(245,185,66,0.1)",
            "0 10px 30px rgba(0,0,0,0.5), 0 0 0px rgba(245,185,66,0)"
          ]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        whileHover={{ scale: 1.02, y: -8 }}
        whileTap={{ scale: 0.98 }}
        className={cn(
          "h-14 px-5 rounded-full flex items-center gap-4 transition-all duration-500 group relative overflow-hidden",
          isOpen 
            ? "bg-white/[0.03] border border-white/10 text-white w-14" 
            : "bg-[#0A0A0B] border border-brand-gold/30 text-white shadow-[0_0_30px_rgba(245,185,66,0.05)]"
        )}
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-brand-gold/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        
        {isOpen ? (
          <X className="w-5 h-5 mx-auto" />
        ) : (
          <>
            <div className="w-8 h-8 rounded-full border border-brand-gold/40 overflow-hidden shrink-0 shadow-[0_0_10px_rgba(245,185,66,0.2)]">
               <Image 
                 src="/images/oyen-ai-avatar.png" 
                 alt="OYEN AI" 
                 width={32} 
                 height={32} 
                 className="object-cover"
               />
            </div>
            <span className="text-[12px] font-bold tracking-wide uppercase whitespace-nowrap">OYEN AI</span>
            <div className="flex items-center gap-2">
               <div className="w-px h-3 bg-white/10" />
               <motion.div 
                 animate={{ opacity: [1, 0.5, 1] }}
                 transition={{ duration: 2, repeat: Infinity }}
                 className="w-1.5 h-1.5 bg-emerald-500 rounded-full shadow-[0_0_8px_#10b981]" 
               />
            </div>
          </>
        )}
      </motion.button>
    </div>
  );
}
