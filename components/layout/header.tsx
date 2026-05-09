"use client";

import Link from "next/link";
import { Search, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { useSearch } from "@/context/search-context";

export function Header() {
  const { openSearch } = useSearch();

  const navItems = [
    { label: "Infrastructure", href: "/infrastructure" },
    { label: "Governance", href: "/governance" },
    { label: "Intelligence", href: "/intelligence" },
    { label: "Operations", href: "/operations" },
    { label: "Security", href: "/security" }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#020617]/40 backdrop-blur-3xl border-b border-white/[0.04]">
      <div className="container-custom h-[96px] flex items-center justify-between">
        
        {/* Institutional Identity */}
        <Link href="/" className="flex items-center gap-4 relative z-10">
          <div className="w-8 h-8 bg-accent-gold rounded-lg flex items-center justify-center font-bold text-[#020617] text-lg">O</div>
          <div className="flex flex-col">
            <span className="font-bold text-white tracking-tighter text-[16px] uppercase leading-none">OYEN GRID</span>
            <span className="text-[10px] font-medium text-accent-gold/60 uppercase tracking-[0.15em] mt-1.5">Institutional Infrastructure</span>
          </div>
        </Link>

        {/* Architectural Navigation */}
        <nav className="hidden lg:flex items-center gap-14">
          {navItems.map((item) => (
            <Link 
              key={item.label}
              href={item.href} 
              className="text-[12px] font-medium text-white/40 hover:text-white transition-all tracking-[0.08em] flex items-center gap-2 group"
            >
              {item.label}
              <ChevronDown className="w-3 h-3 opacity-20 group-hover:opacity-100 transition-opacity" />
            </Link>
          ))}
        </nav>

        {/* Right Action Protocol */}
        <div className="flex items-center gap-8 relative z-10">
          <button 
            onClick={openSearch}
            className="w-11 h-11 flex items-center justify-center bg-white/[0.02] border border-white/5 text-white/30 hover:text-white hover:bg-white/5 rounded-full transition-all group"
          >
            <Search className="w-4.5 h-4.5 group-hover:scale-110 transition-transform" />
          </button>
          
          <div className="flex items-center gap-6">
            <Link href="/contact" className="text-[12px] font-bold text-white/30 hover:text-white transition-colors uppercase tracking-[0.15em]">
              Talk to Architects
            </Link>
            <button className="btn-gold h-12 px-10 text-[11px]">
              Initialize
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export function AnnouncementBar() {
  return (
    <div className="pt-[136px] flex justify-center px-4 relative z-40">
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-[#031022]/40 border border-white/[0.03] rounded-full px-6 py-2.5 flex items-center gap-5 backdrop-blur-2xl shadow-2xl group cursor-pointer hover:border-accent-gold/20 transition-all duration-700"
      >
        <div className="live-pulse" />
        <span className="label-institutional !tracking-[0.3em] opacity-80">Status: Operational</span>
        <span className="h-4 w-px bg-white/5" />
        <span className="text-[12px] text-white/30 font-light tracking-wide group-hover:text-white/50 transition-colors">Infrastructure update v.0.4.2 deployed across all nodes.</span>
      </motion.div>
    </div>
  );
}
