"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Search, X, Command, Cpu, ShieldCheck, Activity, 
  Lock, LayoutGrid, FileText, ArrowRight, History, TrendingUp 
} from "lucide-react";
import { useSearch } from "@/context/search-context";

interface SearchResult {
  id: string;
  title: string;
  description: string;
  category: "Infrastructure" | "Governance" | "Intelligence" | "Security" | "Operations";
  icon: any;
  href: string;
}

const SEARCH_DATA: SearchResult[] = [
  { id: "1", title: "Infrastructure Architecture", description: "Coordinate global delivery nodes and scaling protocols.", category: "Infrastructure", icon: Cpu, href: "/infrastructure" },
  { id: "2", title: "Governance Protocols", description: "Institutional compliance and structural integrity layers.", category: "Governance", icon: ShieldCheck, href: "/governance" },
  { id: "3", title: "Systemic Intelligence", description: "Real-time forecasting and operational awareness.", category: "Intelligence", icon: Activity, href: "/intelligence" },
  { id: "4", title: "Institutional Security", description: "Mission-critical node protection and surveillance.", category: "Security", icon: Lock, href: "/security" },
  { id: "5", title: "Operational Dashboards", description: "Executive oversight for complex programme delivery.", category: "Operations", icon: LayoutGrid, href: "/operations" }
];

export function SearchSystem() {
  const { isSearchOpen: isOpen, closeSearch: onClose } = useSearch();
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
      setQuery("");
      setSelectedIndex(0);
    }
  }, [isOpen]);

  const filteredResults = query.trim() === "" 
    ? [] 
    : SEARCH_DATA.filter(item => 
        item.title.toLowerCase().includes(query.toLowerCase()) || 
        item.category.toLowerCase().includes(query.toLowerCase())
      );

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex items-start justify-center pt-32 px-4">
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#020617]/90 backdrop-blur-2xl"
          />

          {/* Command Search Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: -20 }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="relative w-full max-w-2xl bg-[#07101F]/95 border border-white/10 rounded-[32px] shadow-[0_100px_200px_rgba(0,0,0,0.9)] overflow-hidden"
          >
            {/* Search Input */}
            <div className="flex items-center h-[80px] px-8 border-b border-white/5">
              <Search className="w-5 h-5 text-accent-gold mr-6" />
              <input 
                ref={inputRef}
                type="text" 
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search infrastructure, governance, intelligence..."
                className="flex-1 bg-transparent border-none text-white text-[17px] focus:ring-0 placeholder:text-white/15 font-light"
              />
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-[10px] text-white/30 font-black uppercase tracking-[0.2em]">
                  <Command className="w-3 h-3" /> K
                </div>
                <button onClick={onClose} className="p-2 text-white/20 hover:text-white transition-colors">
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Results Area */}
            <div className="max-h-[520px] overflow-y-auto p-6 space-y-2 scrollbar-hide">
              {query.trim() === "" ? (
                <div className="p-6">
                   <div className="text-[10px] text-white/10 font-black uppercase tracking-[0.4em] mb-10">Quick Navigation Protocols</div>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                      <div className="space-y-6">
                         <div className="text-[11px] text-accent-gold/40 font-bold uppercase tracking-widest flex items-center gap-3">
                            <History className="w-3 h-3" /> Recent Access
                         </div>
                         {["Architecture Layer", "Node Status", "Compliance Logs"].map((s, i) => (
                           <div key={i} className="text-[14px] text-white/30 hover:text-white transition-colors cursor-pointer flex items-center gap-4 group">
                              <div className="w-1.5 h-1.5 rounded-full bg-white/5 group-hover:bg-accent-gold" />
                              {s}
                           </div>
                         ))}
                      </div>
                      <div className="space-y-6">
                         <div className="text-[11px] text-accent-gold/40 font-bold uppercase tracking-widest flex items-center gap-3">
                            <TrendingUp className="w-3 h-3" /> System Trending
                         </div>
                         {["Operational Sync", "Scale Forecasting", "Security Audit"].map((s, i) => (
                           <div key={i} className="text-[14px] text-white/30 hover:text-white transition-colors cursor-pointer flex items-center gap-4 group">
                              <div className="w-1.5 h-1.5 rounded-full bg-white/5 group-hover:bg-accent-gold" />
                              {s}
                           </div>
                         ))}
                      </div>
                   </div>
                </div>
              ) : filteredResults.length > 0 ? (
                filteredResults.map((result, i) => (
                  <div 
                    key={result.id}
                    onMouseEnter={() => setSelectedIndex(i)}
                    className={`flex items-center justify-between p-5 rounded-[20px] cursor-pointer transition-all duration-300 group ${
                      selectedIndex === i 
                      ? 'bg-accent-gold/[0.08] border border-accent-gold/20' 
                      : 'bg-transparent border border-transparent hover:bg-white/[0.02]'
                    }`}
                  >
                    <div className="flex items-center gap-6">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all ${
                        selectedIndex === i ? 'bg-accent-gold text-[#020617]' : 'bg-white/5 text-white/20'
                      }`}>
                        <result.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className={`text-[16px] font-bold transition-colors ${selectedIndex === i ? 'text-white' : 'text-white/60'}`}>
                          {result.title}
                        </div>
                        <div className="text-[12.5px] text-white/25 font-light mt-1">{result.description}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-5">
                      <span className="text-[9px] text-white/10 font-black uppercase tracking-widest">{result.category}</span>
                      <ArrowRight className={`w-4 h-4 transition-all ${
                        selectedIndex === i ? 'text-accent-gold translate-x-0 opacity-100' : 'text-white/10 -translate-x-2 opacity-0'
                      }`} />
                    </div>
                  </div>
                ))
              ) : (
                <div className="py-28 text-center">
                  <div className="w-16 h-16 bg-white/[0.02] border border-white/5 rounded-2xl flex items-center justify-center mx-auto mb-8">
                    <Search className="w-6 h-6 text-white/10" />
                  </div>
                  <div className="text-[18px] font-bold text-white mb-3">No operational layers found.</div>
                  <div className="text-[13px] text-white/20 font-light max-w-[300px] mx-auto">
                    Refine your search command or access institutional documentation.
                  </div>
                </div>
              )}
            </div>

            {/* Terminal Context */}
            <div className="p-8 bg-white/[0.02] border-t border-white/5 flex items-center justify-between">
               <div className="flex items-center gap-10">
                  <div className="flex items-center gap-2.5 text-[10px] text-white/10 font-black uppercase tracking-widest">
                     <span className="px-1.5 py-0.5 bg-white/5 rounded border border-white/10 text-white/30">↑↓</span> Navigate
                  </div>
                  <div className="flex items-center gap-2.5 text-[10px] text-white/10 font-black uppercase tracking-widest">
                     <span className="px-1.5 py-0.5 bg-white/5 rounded border border-white/10 text-white/30">↵</span> Execute
                  </div>
               </div>
               <div className="text-[9px] text-white/5 font-black uppercase tracking-[0.5em]">COMMAND CENTER v.04</div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
