"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Search, ChevronDown, Grid, X, LayoutGrid, Cpu, Network, Database, Shield, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { useSearch } from "@/context/search-context";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const { openSearch } = useSearch();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Operations", hasDropdown: true },
    { label: "Programmes", hasDropdown: true },
    { label: "Intelligence", hasDropdown: false },
    { label: "Infrastructure", hasDropdown: true },
    { label: "Enterprise", hasDropdown: false },
    { label: "Pricing", hasDropdown: false }
  ];

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-[100] transition-all duration-700",
      scrolled 
        ? "bg-[rgba(4,8,22,0.85)] backdrop-blur-[24px] h-[64px] border-b border-white/5 shadow-[0_20px_50px_rgba(0,0,0,0.5)]" 
        : "bg-transparent h-[84px]"
    )}>

      {/* Cinematic Ambient Glow Overlay */}
      <div className={cn(
        "absolute inset-0 z-0 transition-opacity duration-700 pointer-events-none",
        scrolled ? "opacity-100" : "opacity-0"
      )}>
        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-full bg-[radial-gradient(circle_at_50%_0%,rgba(245,184,46,0.06),transparent_70%)]" />
      </div>

      <div className="max-w-[1450px] mx-auto h-full flex items-center justify-between px-8 relative z-10">
        
        {/* LEFT SECTION: BRAND IDENTITY */}
        <div className="flex items-center gap-12">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 bg-gradient-to-br from-[#f5b82e] to-[#d49a20] rounded-[10px] flex items-center justify-center shadow-[0_8px_20px_rgba(245,184,46,0.25)] group-hover:scale-110 transition-transform duration-500 relative">
               <div className="w-3.5 h-3.5 border-[1.5px] border-black rotate-45 relative">
                  <div className="absolute inset-0 bg-black/10 animate-pulse" />
               </div>
               {/* Inner reflection */}
               <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-[10px]" />
            </div>
            <span className="font-bold text-white text-[17px] tracking-[-0.03em] uppercase">OYEN GRID</span>
          </Link>

          {/* CENTER NAVIGATION: Balanced Spacing */}
          <nav className="hidden lg:flex items-center gap-9">
            {navItems.map((item) => (
              <Link 
                key={item.label} 
                href="#" 
                className="text-[12px] font-bold text-white/40 hover:text-white transition-all flex items-center gap-1 group tracking-[0.1em] uppercase relative py-1"
              >
                {item.label}
                {item.hasDropdown && (
                  <ChevronDown className="w-2.5 h-2.5 text-white/10 group-hover:text-[#f5b82e] transition-colors" />
                )}
                <motion.div 
                  className="absolute -bottom-1 left-0 h-[1.5px] bg-[#f5b82e] rounded-full"
                  initial={{ width: 0, opacity: 0 }}
                  whileHover={{ width: "100%", opacity: 1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              </Link>
            ))}
          </nav>
        </div>

        {/* RIGHT SECTION: UTILITIES & CTAs */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-6 pr-6 border-r border-white/10">
             <button 
               onClick={openSearch}
               className="text-white/30 hover:text-[#f5b82e] transition-all p-2 hover:bg-white/5 rounded-lg active:scale-90"
             >
                <Search className="w-[17px] h-[17px]" />
             </button>
             <Link href="#" className="text-[12px] font-bold text-white/40 hover:text-white transition-all tracking-[0.1em] uppercase h-[38px] px-5 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-center hover:bg-white/[0.05] hover:border-white/10 shadow-lg">
                Contact Sales
             </Link>
          </div>
          
          <div className="flex items-center gap-5">
            <button className="h-[38px] px-6 rounded-xl bg-gradient-to-br from-[#f5b82e] via-[#f5b82e] to-[#d49a20] text-black text-[11px] font-black uppercase tracking-widest transition-all hover:shadow-[0_12px_24px_rgba(245,184,46,0.3)] hover:scale-[1.03] active:scale-[0.98] shadow-xl">
              Get Started
            </button>
            <button className="p-2 text-white/15 hover:text-[#f5b82e] transition-colors group">
               <LayoutGrid className="w-4.5 h-4.5 group-hover:rotate-90 transition-transform duration-500" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="pt-[84px] px-8 flex justify-center relative z-[60]">
      <motion.div 
        initial={{ opacity: 0, y: -20, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        className="h-[48px] bg-[rgba(10,14,24,0.65)] backdrop-blur-[24px] border border-white/10 rounded-[20px] px-6 flex items-center justify-between w-full max-w-[1450px] shadow-[0_30px_60px_rgba(0,0,0,0.5)] overflow-hidden group relative"
      >
        {/* Soft Gold Border Glow Overlay */}
        <div className="absolute inset-0 border border-[#f5b82e]/5 rounded-[20px] pointer-events-none group-hover:border-[#f5b82e]/20 transition-colors duration-700" />
        
        {/* Subtle Inner Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(245,184,46,0.04),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

        <div className="flex items-center gap-8 mx-auto relative z-10">
          <div className="flex items-center gap-3">
             <div className="w-1.5 h-1.5 rounded-full bg-[#f5b82e] shadow-[0_0_12px_#f5b82e] animate-pulse" />
             <span className="text-[12px] text-white/60 font-bold tracking-tight uppercase">
                Run training, fellowships, and workforce operations from one unified system.
             </span>
          </div>
          
          <div className="h-3 w-px bg-white/10" />
          
          <button className="flex items-center gap-2 group/btn">
             <span className="text-[11px] font-black text-[#f5b82e] uppercase tracking-[0.15em] group-hover/btn:tracking-[0.2em] transition-all">Explore Operations</span>
             <motion.div
               animate={{ x: [0, 3, 0] }}
               transition={{ duration: 1.5, repeat: Infinity }}
             >
                <ArrowRightIcon className="w-3.5 h-3.5 text-[#f5b82e]" />
             </motion.div>
          </button>
        </div>

        <button 
          onClick={() => setIsVisible(false)}
          className="text-white/10 hover:text-white transition-colors relative z-10 p-2"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </motion.div>
    </div>
  );
}

function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="3.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}
