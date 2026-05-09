"use client";

import { useEffect, useState } from "react";
import { Search, Command, LayoutGrid, Building2, Shield, LifeBuoy, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useSearch } from "@/context/search-context";

export function SearchSystem() {
  const { isOpen, closeSearch } = useSearch();
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        // openSearch() is handled by context but we can toggle here too if needed
      }
      if (e.key === "Escape") closeSearch();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [closeSearch]);

  const results = [
    { title: "Infrastructure Overview", category: "Platform", icon: LayoutGrid },
    { title: "Corporate Governance", category: "Solutions", icon: Building2 },
    { title: "Sovereign Security Layer", category: "Governance", icon: Shield },
    { title: "Operational Support", category: "Resources", icon: LifeBuoy },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[300] flex items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeSearch}
            className="absolute inset-0 bg-[#040816]/90 backdrop-blur-md"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: 20 }}
            className="relative w-full max-w-[720px] bg-[#080C1A] border border-white/10 rounded-[32px] overflow-hidden shadow-[0_80px_160px_rgba(0,0,0,0.8)]"
          >
            {/* Search Input Bar */}
            <div className="p-8 border-b border-white/5 flex items-center gap-6">
              <Search className="w-6 h-6 text-accent-gold/40" />
              <input
                autoFocus
                type="text"
                placeholder="Search institutional infrastructure..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="flex-1 bg-transparent border-none outline-none text-[20px] text-white placeholder:text-white/10 font-light"
              />
              <div className="flex items-center gap-3 px-4 py-2 bg-white/[0.03] border border-white/10 rounded-xl">
                 <Command className="w-3.5 h-3.5 text-white/20" />
                 <span className="text-[11px] font-black text-white/20">ESC</span>
              </div>
            </div>

            {/* Results Layer */}
            <div className="p-4 max-h-[480px] overflow-y-auto scrollbar-hide">
               <div className="px-6 py-6 text-[10px] font-black text-white/10 uppercase tracking-[0.4em]">Suggested Protocols</div>
               
               <div className="space-y-2">
                  {results.map((item, i) => (
                    <button 
                      key={i}
                      className="w-full flex items-center justify-between p-6 rounded-[24px] hover:bg-white/[0.03] border border-transparent hover:border-white/5 transition-all group"
                    >
                       <div className="flex items-center gap-6">
                          <div className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-center text-white/20 group-hover:text-accent-gold group-hover:border-accent-gold/20 group-hover:bg-accent-gold/10 transition-all">
                             <item.icon className="w-5 h-5" />
                          </div>
                          <div className="text-left">
                             <div className="text-[17px] font-bold text-white group-hover:text-accent-gold transition-colors">{item.title}</div>
                             <div className="text-[12px] text-white/20 font-medium uppercase tracking-widest mt-1">{item.category}</div>
                          </div>
                       </div>
                       <div className="text-[10px] font-black text-white/5 uppercase tracking-widest group-hover:text-accent-gold/40 transition-colors">Select Protocol →</div>
                    </button>
                  ))}
               </div>
            </div>

            {/* Footer Layer */}
            <div className="p-8 bg-white/[0.02] border-t border-white/5 flex justify-between items-center">
               <div className="flex items-center gap-8">
                  <div className="flex items-center gap-2">
                     <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/40" />
                     <span className="text-[10px] font-bold text-white/10 uppercase tracking-widest">Index Synced</span>
                  </div>
                  <div className="flex items-center gap-2">
                     <div className="w-1.5 h-1.5 rounded-full bg-accent-gold/40" />
                     <span className="text-[10px] font-bold text-white/10 uppercase tracking-widest">Global Node Search</span>
                  </div>
               </div>
               <div className="text-[9px] font-black text-white/5 uppercase tracking-[0.3em]">OYEN GRID // Infrastructure Intelligence</div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
