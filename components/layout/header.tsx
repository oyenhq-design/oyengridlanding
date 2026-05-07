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
            ? "bg-[#040816]/80 backdrop-blur-xl border-b border-white/5" 
            : "bg-transparent"
        }`}
      >
        <div className="container-custom flex items-center justify-between w-full">
          
          {/* LEFT: LOGO */}
          <Link href="/" className="flex flex-col leading-none group">
            <span className="font-bold text-[20px] tracking-tight text-white uppercase">OYEN GRID</span>
            <span className="text-[8px] font-black text-accent-gold/60 uppercase tracking-[0.4em] mt-0.5">INFRASTRUCTURE</span>
          </Link>

          {/* CENTER: NAV */}
          <nav className="hidden lg:flex items-center gap-10">
            {["Features", "Solutions", "Resources", "Pricing"].map((item) => (
              <Link 
                key={item} 
                href="#" 
                className="text-[14px] font-semibold text-white/60 hover:text-white transition-colors"
              >
                {item}
              </Link>
            ))}
          </nav>

          {/* RIGHT: ACTIONS */}
          <div className="flex items-center gap-8">
            <div className="hidden md:flex items-center gap-8">
              <button className="text-white/40 hover:text-white transition-colors">
                <Search className="w-5 h-5" />
              </button>
              <Link href="#" className="text-[14px] font-semibold text-white/60 hover:text-white transition-colors">
                Login
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <Link 
                href="#" 
                className="hidden sm:flex items-center justify-center px-6 h-[44px] rounded-full border border-white/10 text-[13px] font-bold text-white hover:bg-white/5 transition-all"
              >
                Contact Sales
              </Link>
              <Link 
                href="#" 
                className="btn-gold !h-[44px] !px-6 text-[13px] !rounded-full"
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
              <div className="h-[40px] px-6 rounded-full bg-[#C9972B]/10 border border-[#C9972B]/20 backdrop-blur-md flex items-center gap-6">
                <span className="text-[#C9972B] text-[10px] font-black tracking-[0.2em] uppercase">
                  PROGRAMME INFRASTRUCTURE FOR SCALE
                </span>
                <div className="w-px h-3 bg-[#C9972B]/20" />
                <button className="flex items-center gap-2 text-white text-[10px] font-bold hover:text-[#C9972B] transition-colors">
                  EXPLORE <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
