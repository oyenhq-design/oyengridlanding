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
  category: "Infrastructure" | "Governance" | "Analytics" | "Security" | "Operations" | "Documentation";
  icon: any;
  href: string;
}

const SEARCH_DATA: SearchResult[] = [
  { id: "1", title: "Infrastructure Nodes", description: "Coordinate global delivery infrastructure layers.", category: "Infrastructure", icon: Cpu, href: "/infrastructure" },
  { id: "2", title: "Governance Protocols", description: "Access institutional compliance and integrity layers.", category: "Governance", icon: ShieldCheck, href: "/governance" },
  { id: "3", title: "Telemetry Systems", description: "Real-time visibility across operational delivery points.", category: "Analytics", icon: Activity, href: "/analytics" },
  { id: "4", title: "Immutable Security", description: "Manage mission-critical structural protection nodes.", category: "Security", icon: Lock, href: "/security" },
  { id: "5", title: "Programme Operations", description: "Structural orchestration for complex delivery cycles.", category: "Operations", icon: LayoutGrid, href: "/operations" },
  { id: "6", title: "Architecture Docs", description: "Institutional protocols for system integration.", category: "Documentation", icon: FileText, href: "/docs" }
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
        <div className="fixed inset-0 z-[200] flex items-start justify-center pt-24 px-4 sm:pt-40">
          {/* Institutional Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#030712]/90 backdrop-blur-3xl cursor-default"
          />

          {/* Command Search Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.99, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.99, y: -20 }}
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            className="relative w-full max-w-2xl bg-[#0E1728]/98 border border-white/10 rounded-[24px] shadow-[0_80px_160px_rgba(0,0,0,0.8)] overflow-hidden"
          >
            {/* Input Bar */}
            <div className="flex items-center h-[76px] px-8 border-b border-white/5">
              <Search className="w-5 h-5 text-[#d6a63c] mr-5" />
              <input 
                ref={inputRef}
                type="text" 
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search infrastructure, governance, analytics..."
                className="flex-1 bg-transparent border-none text-white text-[16px] focus:ring-0 placeholder:text-white/15 font-light"
              />
              <div className="flex items-center gap-5">
                <div className="hidden sm:flex items-center gap-2 px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-[10px] text-white/30 font-bold uppercase tracking-widest">
                  <Command className="w-3.5 h-3.5" /> K
                </div>
                <button onClick={onClose} className="p-2 text-white/20 hover:text-white transition-colors">
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Results Hierarchy */}
            <div className="max-h-[520px] overflow-y-auto scrollbar-hide">
              {query.trim() === "" ? (
                <div className="p-12">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    <div>
                      <div className="text-[10px] text-white/10 font-bold uppercase tracking-[0.5em] mb-10 flex items-center gap-4">
                        <History className="w-3.5 h-3.5" /> Recent Actions
                      </div>
                      <div className="space-y-6">
                        {["Programme_v.04.2", "Node_Security_L0", "Latency_Feed"].map((s, i) => (
                          <div key={i} className="text-[14px] text-white/30 hover:text-[#d6a63c] transition-colors cursor-pointer flex items-center gap-4 group">
                             <div className="w-1.5 h-1.5 rounded-full bg-white/5 group-hover:bg-[#d6a63c] transition-colors" />
                             {s}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <div className="text-[10px] text-white/10 font-bold uppercase tracking-[0.5em] mb-10 flex items-center gap-4">
                        <TrendingUp className="w-3.5 h-3.5" /> Frequent Protocols
                      </div>
                      <div className="space-y-6">
                        {["Global_Orchestration", "Governance_Logic", "Operational_L0"].map((s, i) => (
                          <div key={i} className="text-[14px] text-white/30 hover:text-[#d6a63c] transition-colors cursor-pointer flex items-center gap-4 group">
                             <div className="w-1.5 h-1.5 rounded-full bg-white/5 group-hover:bg-[#d6a63c] transition-colors" />
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
                      className={`flex items-center justify-between p-6 rounded-2xl cursor-pointer transition-all duration-300 group ${
                        selectedIndex === i 
                        ? 'bg-[#d6a63c]/10 border border-[#d6a63c]/20' 
                        : 'bg-transparent border border-transparent hover:bg-white/[0.02]'
                      }`}
                    >
                      <div className="flex items-center gap-8">
                        <div className={`w-14 h-14 rounded-xl flex items-center justify-center transition-all ${
                          selectedIndex === i ? 'bg-[#d6a63c] text-[#030712]' : 'bg-white/5 text-white/15'
                        }`}>
                          <result.icon className="w-6 h-6" />
                        </div>
                        <div>
                          <div className={`text-[17px] font-bold transition-colors ${selectedIndex === i ? 'text-white' : 'text-white/60'}`}>
                            {result.title}
                          </div>
                          <div className="text-[13px] text-white/20 font-light mt-1.5">{result.description}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-6">
                         <span className="text-[10px] text-white/10 font-bold uppercase tracking-widest">{result.category}</span>
                         <ArrowRight className={`w-5 h-5 transition-all ${
                           selectedIndex === i ? 'text-[#d6a63c] translate-x-0 opacity-100' : 'text-white/10 -translate-x-2 opacity-0'
                         }`} />
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="py-32 text-center">
                  <div className="text-[19px] font-bold text-white mb-3">No operational results found.</div>
                  <div className="text-[14px] text-white/15 font-light">Adjust coordinating protocols or explore documentation layers.</div>
                </div>
              )}
            </div>

            {/* Architectural Footer */}
            <div className="p-6 bg-white/[0.02] border-t border-white/5 flex items-center justify-center">
               <div className="text-[10px] text-white/5 font-bold uppercase tracking-[0.6em]">Command_Center_L0 // Architectural_Search</div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
