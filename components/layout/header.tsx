"use client";

import Link from "next/link";
import { Search, ChevronDown, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useSearch } from "@/context/search-context";

export function Header() {
  const { openSearch } = useSearch();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#050816]/60 backdrop-blur-3xl border-b border-white/[0.05]">
      <div className="container-custom h-[90px] flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 relative z-10">
          <div className="w-9 h-9 bg-[#D4A62A] rounded-xl flex items-center justify-center font-bold text-[#050816] text-xl shadow-[0_0_25px_rgba(212,166,42,0.4)]">O</div>
          <span className="font-bold text-white tracking-tighter text-xl uppercase hidden sm:block">OYEN GRID</span>
        </Link>

        {/* Navigation */}
        <nav className="hidden lg:flex items-center gap-12">
          {["Features", "Solutions", "Resources", "Pricing"].map((item) => (
            <Link 
              key={item}
              href={`/${item.toLowerCase()}`} 
              className="text-[13px] font-medium text-white/40 hover:text-white transition-all tracking-wide flex items-center gap-1.5 group"
            >
              {item} {item !== "Pricing" && <ChevronDown className="w-3.5 h-3.5 opacity-30 group-hover:opacity-100 transition-opacity" />}
            </Link>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-6 relative z-10">
          <button 
            onClick={openSearch}
            className="w-10 h-10 flex items-center justify-center text-white/30 hover:text-white hover:bg-white/5 rounded-full transition-all group"
          >
            <Search className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </button>
          <Link href="/login" className="text-[14px] font-medium text-white/30 hover:text-white transition-colors hidden sm:block">
            Login
          </Link>
          <button className="btn-gold h-11 px-8 text-[12px] font-black tracking-[0.2em] uppercase shadow-[0_15px_30px_rgba(212,166,42,0.2)]">
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
        className="bg-[#07101F]/60 border border-white/5 rounded-full px-6 py-2.5 flex items-center gap-5 backdrop-blur-2xl shadow-2xl group cursor-pointer hover:border-[#D4A62A]/20 transition-all duration-500"
      >
        <div className="live-pulse w-2 h-2" />
        <span className="text-[10px] font-black text-[#D4A62A] tracking-[0.4em] uppercase">Status: Operational</span>
        <span className="h-4 w-px bg-white/10" />
        <span className="text-[12px] text-white/40 font-light tracking-wide group-hover:text-white/60 transition-colors">Infrastructure update v.0.4.2 deployed across all nodes.</span>
        <div className="text-[10px] font-bold text-white group-hover:text-[#D4A62A] transition-colors flex items-center gap-2 ml-4">
          EXPLORE LOGS <ArrowRight className="w-3.5 h-3.5" />
        </div>
      </motion.div>
    </div>
  );
}
