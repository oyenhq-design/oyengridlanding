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
  category: "Infrastructure" | "Governance" | "Analytics" | "Security" | "Programmes" | "Documentation";
  icon: any;
  href: string;
}

const SEARCH_DATA: SearchResult[] = [
  { id: "1", title: "Node Architecture", description: "Manage global infrastructure scaling protocols.", category: "Infrastructure", icon: Cpu, href: "/infrastructure" },
  { id: "2", title: "Governance Layers", description: "Institutional compliance and structural integrity.", category: "Governance", icon: ShieldCheck, href: "/governance" },
  { id: "3", title: "Real-time Telemetry", description: "Live operational metrics and system health.", category: "Analytics", icon: Activity, href: "/analytics" },
  { id: "4", title: "Immutable Security", description: "Immutable protection for mission-critical nodes.", category: "Security", icon: Lock, href: "/security" },
  { id: "5", title: "Programme OS", description: "Core structural operating system for global delivery.", category: "Programmes", icon: LayoutGrid, href: "/programmes" },
  { id: "6", title: "API Documentation", description: "Institutional integration and system protocols.", category: "Documentation", icon: FileText, href: "/docs" }
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
        <div className="fixed inset-0 z-[200] flex items-start justify-center pt-24 px-4 sm:pt-32">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#030712]/85 backdrop-blur-xl cursor-default"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: -20 }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="relative w-full max-w-2xl bg-[#0E1728]/95 border border-white/10 rounded-[28px] shadow-[0_80px_160px_rgba(0,0,0,0.8)] overflow-hidden"
          >
            <div className="flex items-center h-[72px] px-8 border-b border-white/5">
              <Search className="w-6 h-6 text-[#d6a63c] mr-4" />
              <input 
                ref={inputRef}
                type="text" 
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search infrastructure, analytics, governance, workflows..."
                className="flex-1 bg-transparent border-none text-white text-[17px] focus:ring-0 placeholder:text-white/20 font-light"
              />
              <div className="flex items-center gap-4">
                <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1.5 bg-white/5 border border-white/10 rounded-lg text-[11px] text-white/40 font-black uppercase tracking-widest">
                  <Command className="w-3 h-3" /> K
                </div>
                <button onClick={onClose} className="p-2 text-white/20 hover:text-white transition-colors">
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="max-h-[480px] overflow-y-auto scrollbar-hide">
              {query.trim() === "" ? (
                <div className="p-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                      <div className="text-[10px] text-white/20 font-bold uppercase tracking-[0.4em] mb-8 flex items-center gap-3">
                        <History className="w-3 h-3" /> Recent Searches
                      </div>
                      <div className="space-y-5">
                        {["Programme v.04", "Node Security", "Latency Reports"].map((s, i) => (
                          <div key={i} className="text-[14px] text-white/40 hover:text-[#d6a63c] transition-colors cursor-pointer flex items-center gap-4 group">
                             <div className="w-1.5 h-1.5 rounded-full bg-white/10 group-hover:bg-[#d6a63c] transition-colors" />
                             {s}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <div className="text-[10px] text-white/20 font-bold uppercase tracking-[0.4em] mb-8 flex items-center gap-3">
                        <TrendingUp className="w-3 h-3" /> Popular Now
                      </div>
                      <div className="space-y-5">
                        {["Global Orchestration", "Governance Logic", "AI Forecasting"].map((s, i) => (
                          <div key={i} className="text-[14px] text-white/40 hover:text-[#d6a63c] transition-colors cursor-pointer flex items-center gap-4 group">
                             <div className="w-1.5 h-1.5 rounded-full bg-white/10 group-hover:bg-[#d6a63c] transition-colors" />
                             {s}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ) : filteredResults.length > 0 ? (
                <div className="p-6 space-y-3">
                  {filteredResults.map((result, i) => (
                    <div 
                      key={result.id}
                      onMouseEnter={() => setSelectedIndex(i)}
                      className={`flex items-center justify-between p-5 rounded-2xl cursor-pointer transition-all duration-300 group ${
                        selectedIndex === i 
                        ? 'bg-[#d6a63c]/10 border border-[#d6a63c]/20' 
                        : 'bg-transparent border border-transparent hover:bg-white/[0.02]'
                      }`}
                    >
                      <div className="flex items-center gap-6">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all ${
                          selectedIndex === i ? 'bg-[#d6a63c] text-[#030712]' : 'bg-white/5 text-white/20'
                        }`}>
                          <result.icon className="w-5 h-5" />
                        </div>
                        <div>
                          <div className={`text-[16px] font-bold transition-colors ${selectedIndex === i ? 'text-white' : 'text-white/60'}`}>
                            {result.title}
                          </div>
                          <div className="text-[12px] text-white/30 font-light mt-1">{result.description}</div>
                        </div>
                      </div>
                      <ArrowRight className={`w-5 h-5 transition-all ${
                        selectedIndex === i ? 'text-[#d6a63c] translate-x-0 opacity-100' : 'text-white/10 -translate-x-2 opacity-0'
                      }`} />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="py-24 text-center">
                  <div className="text-[18px] font-bold text-white mb-2">No operational results found.</div>
                  <div className="text-[13px] text-white/20 font-light">Adjust your query or explore suggested protocols.</div>
                </div>
              )}
            </div>

            <div className="p-6 bg-white/[0.02] border-t border-white/5 flex items-center justify-center">
               <div className="text-[9px] text-white/10 font-black uppercase tracking-[0.5em]">SYSTEM SEARCH v.0.4.2</div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
