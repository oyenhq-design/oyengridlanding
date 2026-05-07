"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Menu, X, ArrowRight } from "lucide-react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showAnnouncement, setShowAnnouncement] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-[100] h-[78px] flex items-center transition-all duration-300 ${
          isScrolled 
            ? "bg-[#030712]/80 backdrop-blur-xl border-b border-white/5" 
            : "bg-transparent"
        }`}
      >
        <div className="container-custom flex items-center justify-between w-full">
          
          {/* LEFT: LOGO */}
          <Link href="/" className="flex flex-col leading-none group">
            <span className="font-bold text-[22px] tracking-tight text-white uppercase">OYEN GRID</span>
            <span className="text-[8px] font-black text-accent-gold/60 uppercase tracking-[0.4em] mt-0.5">Institutional Infrastructure</span>
          </Link>

          {/* CENTER: NAV */}
          <nav className="hidden lg:flex items-center gap-12">
            {["Architecture", "Solutions", "Governance", "Resources"].map((item) => (
              <Link 
                key={item} 
                href="#" 
                className="text-[13px] font-bold text-white/40 hover:text-white uppercase tracking-[0.1em] transition-colors"
              >
                {item}
              </Link>
            ))}
          </nav>

          {/* RIGHT: ACTIONS */}
          <div className="flex items-center gap-8">
            <div className="hidden md:flex items-center gap-10">
              <button className="text-white/20 hover:text-white transition-colors">
                <Search className="w-5 h-5" />
              </button>
              <Link href="#" className="text-[13px] font-bold text-white/30 hover:text-white uppercase tracking-widest transition-colors">
                Login
              </Link>
            </div>
            <div className="flex items-center gap-5">
              <Link 
                href="#" 
                className="btn-gold !h-[42px] !px-8 text-[12px] !rounded-full uppercase tracking-widest"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* ANNOUNCEMENT BAR */}
      <AnimatePresence>
        {showAnnouncement && (
          <motion.div 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="fixed top-[94px] left-0 right-0 z-[90] px-6"
          >
            <div className="max-w-fit mx-auto">
              <div className="h-[38px] px-6 rounded-full bg-accent-gold/10 border border-accent-gold/20 backdrop-blur-xl flex items-center gap-6 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                <span className="text-accent-gold text-[9px] font-black tracking-[0.3em] uppercase">
                  Programme Infrastructure for Scale
                </span>
                <div className="w-px h-3 bg-accent-gold/20" />
                <button className="flex items-center gap-2 text-white text-[9px] font-black tracking-widest hover:text-accent-gold transition-colors uppercase">
                  Architecture <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
