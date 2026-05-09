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

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex(prev => (prev < filteredResults.length - 1 ? prev + 1 : prev));
      }
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex(prev => (prev > 0 ? prev - 1 : prev));
      }
      if (e.key === 'Enter') {
        if (filteredResults[selectedIndex]) {
           onClose();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, selectedIndex, query]);

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
            className="absolute inset-0 bg-[#050816]/80 backdrop-blur-xl cursor-default"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: -20 }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="relative w-full max-w-2xl bg-[#07101F]/90 border border-white/10 rounded-[28px] shadow-[0_80px_160px_rgba(0,0,0,0.8)] overflow-hidden"
          >
            <div className="flex items-center h-[72px] px-6 border-b border-white/5">
              <Search className="w-6 h-6 text-[#D4A62A] mr-4" />
              <input 
                ref={inputRef}
                type="text" 
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search infrastructure, analytics, governance, workflows..."
                className="flex-1 bg-transparent border-none text-white text-[17px] focus:ring-0 placeholder:text-white/20 font-light"
              />
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5 px-2.5 py-1.5 bg-white/5 border border-white/10 rounded-lg text-[11px] text-white/40 font-black uppercase tracking-widest">
                  <Command className="w-3 h-3" /> K
                </div>
                <button onClick={onClose} className="p-2 text-white/20 hover:text-white transition-colors">
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="max-h-[480px] overflow-y-auto scrollbar-hide">
              {query.trim() === "" ? (
                <div className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <div className="text-[10px] text-white/20 font-black uppercase tracking-[0.4em] mb-6 flex items-center gap-3">
                        <History className="w-3 h-3" /> Recent Searches
                      </div>
                      <div className="space-y-4">
                        {["Programme v.04", "Node Security", "Latency Reports"].map((s, i) => (
                          <div key={i} className="text-[14px] text-white/40 hover:text-white transition-colors cursor-pointer flex items-center gap-3 group">
                             <div className="w-1 h-1 rounded-full bg-[#D4A62A]/30 group-hover:bg-[#D4A62A]" />
                             {s}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <div className="text-[10px] text-white/20 font-black uppercase tracking-[0.4em] mb-6 flex items-center gap-3">
                        <TrendingUp className="w-3 h-3" /> Popular Now
                      </div>
                      <div className="space-y-4">
                        {["Global Orchestration", "Governance Logic", "AI Forecasting"].map((s, i) => (
                          <div key={i} className="text-[14px] text-white/40 hover:text-white transition-colors cursor-pointer flex items-center gap-3 group">
                             <div className="w-1 h-1 rounded-full bg-[#D4A62A]/30 group-hover:bg-[#D4A62A]" />
                             {s}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ) : filteredResults.length > 0 ? (
                <div className="p-4 space-y-2">
                  {filteredResults.map((result, i) => (
                    <div 
                      key={result.id}
                      onMouseEnter={() => setSelectedIndex(i)}
                      className={`flex items-center justify-between p-4 rounded-2xl cursor-pointer transition-all duration-300 group ${
                        selectedIndex === i 
                        ? 'bg-[#D4A62A]/10 border border-[#D4A62A]/20' 
                        : 'bg-transparent border border-transparent hover:bg-white/[0.02]'
                      }`}
                    >
                      <div className="flex items-center gap-5">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all ${
                          selectedIndex === i ? 'bg-[#D4A62A] text-[#050816]' : 'bg-white/5 text-white/20'
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
                      <div className="flex items-center gap-4">
                        <span className="text-[10px] text-white/10 font-black uppercase tracking-widest">{result.category}</span>
                        <ArrowRight className={`w-4 h-4 transition-all ${
                          selectedIndex === i ? 'text-[#D4A62A] translate-x-0 opacity-100' : 'text-white/10 -translate-x-2 opacity-0'
                        }`} />
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="py-24 text-center">
                  <div className="w-16 h-16 bg-white/[0.02] border border-white/5 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Search className="w-6 h-6 text-white/10" />
                  </div>
                  <div className="text-[18px] font-bold text-white mb-2">No operational results found.</div>
                  <div className="text-[13px] text-white/20 font-light max-w-[280px] mx-auto">
                    Adjust your query or explore suggested infrastructure protocols.
                  </div>
                </div>
              )}
            </div>

            <div className="p-6 bg-white/[0.02] border-t border-white/5 flex items-center justify-between">
               <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2 text-[10px] text-white/20 font-black uppercase tracking-widest">
                     <span className="px-1.5 py-0.5 bg-white/5 rounded border border-white/10 text-white/40">↑↓</span> Navigate
                  </div>
                  <div className="flex items-center gap-2 text-[10px] text-white/20 font-black uppercase tracking-widest">
                     <span className="px-1.5 py-0.5 bg-white/5 rounded border border-white/10 text-white/40">↵</span> Select
                  </div>
                  <div className="flex items-center gap-2 text-[10px] text-white/20 font-black uppercase tracking-widest">
                     <span className="px-1.5 py-0.5 bg-white/5 rounded border border-white/10 text-white/40">ESC</span> Close
                  </div>
               </div>
               <div className="text-[9px] text-white/10 font-black uppercase tracking-[0.4em]">SYSTEM SEARCH v.04</div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
