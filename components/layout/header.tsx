"use client";

import Link from "next/link";
import { Search, ChevronDown, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useSearch } from "@/context/search-context";

export function Header() {
  const { openSearch } = useSearch();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#030712]/60 backdrop-blur-3xl border-b border-white/[0.04]">
      <div className="container-custom h-[88px] flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 relative z-10 group">
          <div className="w-10 h-10 bg-[#d6a63c] rounded-xl flex items-center justify-center font-bold text-[#030712] text-2xl shadow-[0_0_25px_rgba(214,166,60,0.3)] group-hover:scale-105 transition-transform">O</div>
          <span className="font-bold text-white tracking-tighter text-xl uppercase hidden sm:block">OYEN GRID</span>
        </Link>

        {/* Navigation */}
        <nav className="hidden lg:flex items-center gap-14">
          {["Features", "Solutions", "Resources", "Pricing"].map((item) => (
            <Link 
              key={item}
              href={`/${item.toLowerCase()}`} 
              className="text-[13px] font-bold text-white/40 hover:text-white transition-all tracking-wide flex items-center gap-2 group"
            >
              {item} {item !== "Pricing" && <ChevronDown className="w-3.5 h-3.5 opacity-20 group-hover:opacity-100 transition-opacity" />}
            </Link>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-8 relative z-10">
          <button 
            onClick={openSearch}
            className="w-10 h-10 flex items-center justify-center text-white/20 hover:text-white hover:bg-white/5 rounded-full transition-all group"
          >
            <Search className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </button>
          <Link href="/login" className="text-[13px] font-bold text-white/30 hover:text-white transition-colors hidden sm:block">
            Login
          </Link>
          <button className="btn-gold h-12 px-10">
            Initialize
          </button>
        </div>
      </div>
    </header>
  );
}

export function AnnouncementBar() {
  return (
    <div className="pt-[120px] flex justify-center px-4 relative z-40">
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-[#0E1728]/60 border border-white/5 rounded-full px-6 py-2.5 flex items-center gap-5 backdrop-blur-3xl shadow-2xl group cursor-pointer hover:border-[#d6a63c]/20 transition-all duration-500"
      >
        <div className="w-2 h-2 rounded-full bg-[#d6a63c] shadow-[0_0_10px_rgba(214,166,60,0.4)]" />
        <span className="premium-label text-[9px]">Status: Operational</span>
        <span className="h-4 w-px bg-white/10" />
        <span className="text-[12px] text-white/40 font-light tracking-wide group-hover:text-white/60 transition-colors">Infrastructure update v.0.4.2 deployed across all nodes.</span>
        <div className="text-[10px] font-bold text-white group-hover:text-[#d6a63c] transition-colors flex items-center gap-2 ml-4">
          EXPLORE <ArrowRight className="w-3.5 h-3.5" />
        </div>
      </motion.div>
    </div>
  );
}
