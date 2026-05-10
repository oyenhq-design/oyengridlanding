"use client";

import { useState } from "react";
import { MessageSquare, X, Send, Cpu, ShieldCheck, Sparkles, Orbit, BarChart3, Workflow, Database, UserCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);

  const quickActions = [
    { label: "Generate operational report", icon: BarChart3 },
    { label: "Track participant progress", icon: UserCheck },
    { label: "Create programme workflow", icon: Workflow },
    { label: "Analyze delivery metrics", icon: Database }
  ];

  return (
    <div className="fixed bottom-10 right-10 z-[200]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="mb-6 w-[360px] bg-[#0A0A0B]/95 backdrop-blur-[60px] border border-brand-gold/10 rounded-[32px] overflow-hidden shadow-[0_40px_120px_rgba(0,0,0,0.9)]"
          >
            {/* Header */}
            <div className="p-6 border-b border-white/5 flex items-center justify-between bg-white/[0.01]">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-12 h-12 rounded-2xl overflow-hidden border border-brand-gold/20 shadow-[0_0_20px_rgba(245,185,66,0.1)]">
                    <Image src="/oyen-ai-avatar.png" alt="OYEN AI" width={48} height={48} className="object-cover" />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-emerald-500 rounded-full border-2 border-[#0A0A0B]" />
                </div>
                <div>
                  <div className="text-[14px] font-bold text-white tracking-tight">OYEN AI</div>
                  <div className="text-[9px] font-black text-white/20 uppercase tracking-[0.15em]">Institutional Copilot</div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-lg hover:bg-white/5 flex items-center justify-center text-white/10 hover:text-white transition-all"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Content Feed */}
            <div className="p-6 h-[380px] overflow-y-auto space-y-6">
              <div className="flex flex-col gap-4">
                <div className="bg-white/[0.03] border border-white/5 rounded-2xl p-4 max-w-[85%]">
                  <p className="text-[13px] text-white/60 leading-relaxed font-light">
                    Good evening. I'm OYEN AI, your institutional copilot. How can I assist with your delivery infrastructure today?
                  </p>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="pt-4">
                <div className="text-[9px] font-black text-white/10 uppercase tracking-[0.2em] mb-4">Suggested Actions</div>
                <div className="grid grid-cols-1 gap-2">
                   {quickActions.map((action, i) => (
                     <button 
                       key={i} 
                       className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/[0.02] border border-white/5 hover:border-brand-gold/30 hover:bg-white/[0.04] transition-all text-left group"
                     >
                       <action.icon className="w-3.5 h-3.5 text-white/20 group-hover:text-brand-gold transition-colors" />
                       <span className="text-[11px] font-bold text-white/40 group-hover:text-white transition-colors">{action.label}</span>
                     </button>
                   ))}
                </div>
              </div>
            </div>

            {/* Input Area */}
            <div className="p-6 bg-white/[0.01] border-t border-white/5">
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Send operational command..."
                  className="w-full h-12 bg-white/[0.03] border border-white/5 rounded-xl px-5 text-[13px] text-white placeholder:text-white/10 focus:outline-none focus:border-brand-gold/40 transition-all font-light"
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
          "px-5 h-14 rounded-full flex items-center gap-4 transition-all duration-500 group relative overflow-hidden",
          isOpen 
            ? "bg-white/[0.03] border border-white/10 text-white w-14 justify-center px-0" 
            : "bg-[#0A0A0B] border border-brand-gold/20 text-white shadow-[0_0_20px_rgba(245,185,66,0.05)]"
        )}
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-brand-gold/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        
        {isOpen ? (
          <X className="w-5 h-5" />
        ) : (
          <>
            <div className="relative shrink-0">
              <div className="w-9 h-9 rounded-full overflow-hidden border border-brand-gold/30">
                <Image src="/oyen-ai-avatar.png" alt="OYEN AI" width={36} height={36} className="object-cover" />
              </div>
              <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-500 rounded-full border-2 border-[#0A0A0B]" />
            </div>
            <div className="flex flex-col items-start pr-2">
               <span className="text-[12px] font-bold tracking-tight">OYEN AI</span>
               <span className="text-[8px] font-black text-white/20 uppercase tracking-[0.1em]">Need assistance?</span>
            </div>
          </>
        )}
      </motion.button>
    </div>
  );
}
