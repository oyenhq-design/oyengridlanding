"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Search, ChevronDown, X, Command, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  const suggestions = [
    { label: "Infrastructure Scaling", category: "Documentation" },
    { label: "Governance Protocols", category: "Security" },
    { label: "Node Architecture", category: "Solutions" },
    { label: "Pricing: Enterprise", category: "Platform" }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-3xl border-b border-white/[0.05]">
      <div className="container-custom h-[90px] flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 relative z-10">
          <div className="w-9 h-9 bg-[#C89B2D] rounded-xl flex items-center justify-center font-bold text-navy-deep text-xl shadow-[0_0_25px_rgba(200,155,45,0.4)]">O</div>
          <span className="font-bold text-white tracking-tighter text-xl uppercase hidden sm:block">OYEN GRID</span>
        </Link>

        {/* Navigation / Search Overlay */}
        <div className="flex-1 flex justify-center items-center px-10 relative">
          <AnimatePresence mode="wait">
            {!isSearchOpen ? (
              <motion.nav 
                key="nav"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="hidden lg:flex items-center gap-12"
              >
                {["Features", "Solutions", "Resources", "Pricing"].map((item) => (
                  <Link 
                    key={item}
                    href={`/${item.toLowerCase()}`} 
                    className="text-[13px] font-medium text-white/40 hover:text-white transition-all tracking-wide flex items-center gap-1.5 group"
                  >
                    {item} {item !== "Pricing" && <ChevronDown className="w-3.5 h-3.5 opacity-30 group-hover:opacity-100 transition-opacity" />}
                  </Link>
                ))}
              </motion.nav>
            ) : (
              <motion.div 
                key="search"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                className="absolute inset-x-0 mx-auto max-w-2xl bg-[#081426]/80 backdrop-blur-3xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl"
              >
                <div className="flex items-center p-4">
                  <Search className="w-5 h-5 text-[#C89B2D] mr-4" />
                  <input 
                    ref={searchInputRef}
                    type="text" 
                    placeholder="Search system architecture..." 
                    className="flex-1 bg-transparent border-none text-white text-[15px] focus:ring-0 placeholder:text-white/20"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1 px-2 py-1 bg-white/5 border border-white/10 rounded text-[10px] text-white/40 font-bold uppercase">
                      <Command className="w-2.5 h-2.5" /> K
                    </div>
                    <button onClick={() => setIsSearchOpen(false)}>
                      <X className="w-5 h-5 text-white/20 hover:text-white transition-colors" />
                    </button>
                  </div>
                </div>
                
                {/* Suggestions List */}
                <div className="border-t border-white/5 p-2">
                   {suggestions.map((s, i) => (
                     <div key={i} className="flex items-center justify-between p-3 hover:bg-white/[0.03] rounded-xl cursor-pointer group transition-colors">
                        <div className="flex items-center gap-4">
                           <div className="w-1 h-1 rounded-full bg-[#C89B2D]/40 group-hover:bg-[#C89B2D]" />
                           <span className="text-[14px] text-white/60 group-hover:text-white transition-colors">{s.label}</span>
                        </div>
                        <span className="text-[10px] text-white/10 font-bold uppercase tracking-widest">{s.category}</span>
                     </div>
                   ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-6 relative z-10">
          {!isSearchOpen && (
            <button 
              onClick={() => setIsSearchOpen(true)}
              className="w-10 h-10 flex items-center justify-center text-white/30 hover:text-white hover:bg-white/5 rounded-full transition-all"
            >
              <Search className="w-5 h-5" />
            </button>
          )}
          <Link href="/login" className="text-[14px] font-medium text-white/30 hover:text-white transition-colors hidden sm:block">
            Login
          </Link>
          <button className="btn-gold h-11 px-8 text-[12px] font-black tracking-[0.2em] uppercase shadow-[0_15px_30px_rgba(200,155,45,0.2)]">
            Initialize
          </button>
        </div>
      </div>
    </header>
  );
}

export function AnnouncementBar() {
  return (
    <div className="pt-[130px] flex justify-center px-4 relative z-40">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-[#081426]/60 border border-white/5 rounded-full px-6 py-2.5 flex items-center gap-5 backdrop-blur-2xl shadow-2xl group cursor-pointer hover:border-[#C89B2D]/20 transition-all duration-500"
      >
        <div className="live-pulse w-2 h-2" />
        <span className="text-[10px] font-black text-[#C89B2D] tracking-[0.4em] uppercase">Status: Operational</span>
        <span className="h-4 w-px bg-white/10" />
        <span className="text-[12px] text-white/40 font-light tracking-wide group-hover:text-white/60 transition-colors">Infrastructure update v.0.4.2 deployed across all nodes.</span>
        <div className="text-[10px] font-bold text-white group-hover:text-[#C89B2D] transition-colors flex items-center gap-2 ml-4">
          EXPLORE LOGS <ArrowRight className="w-3.5 h-3.5" />
        </div>
      </motion.div>
    </div>
  );
}
