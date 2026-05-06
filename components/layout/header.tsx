"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ChevronDown, 
  Search, 
  Menu, 
  X, 
  LayoutGrid, 
  Zap, 
  Shield, 
  BarChart3, 
  Users, 
  Globe, 
  Database,
  ArrowRight
} from "lucide-react";

const navigation = [
  {
    name: "Features",
    href: "#",
    dropdown: [
      { name: "Curriculum Architect", desc: "Design multi-layered programmes with absolute structural logic.", icon: Zap },
      { name: "Precision Delivery", desc: "Automate sessions and participant tracking at global volume.", icon: Shield },
      { name: "Operational Insights", desc: "Real-time analytics and high-fidelity reporting engines.", icon: BarChart3 }
    ]
  },
  {
    name: "Solutions",
    href: "#",
    dropdown: [
      { name: "Enterprise Onboarding", desc: "Scale internal growth with governed employee training paths.", icon: Users },
      { name: "Global Programmes", desc: "Manage distributed cohorts across multiple regions and timezones.", icon: Globe },
      { name: "Data Infrastructure", desc: "Centralized operational data governance for professional teams.", icon: Database }
    ]
  },
  {
    name: "Resources",
    href: "#",
    dropdown: [
      { name: "Intelligence Hub", desc: "Expert guides on building high-fidelity programmes.", icon: Database },
      { name: "API Reference", desc: "Deeply integrate OYEN into your existing tech stack.", icon: Zap },
      { name: "Operational Success", desc: "Case studies from industry-leading enterprise partners.", icon: Globe }
    ]
  },
  { name: "Pricing", href: "/pricing" }
];

export function Header() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showAnnouncement, setShowAnnouncement] = useState(true);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-[60] h-[78px] md:h-[82px] flex items-center transition-all duration-300 border-b border-white/5 sticky-header">
        {/* Background Gradient & Blur */}
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#050812]/96 to-[#050812]/92 backdrop-blur-xl" />
        
        <div className="container-custom max-w-[1400px] w-full flex items-center justify-between relative z-10 px-8">
          
          {/* LOGO AREA */}
          <div className="flex items-center gap-14">
            <Link href="/" className="flex items-center gap-4 group">
              <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(245,179,1,0.3)] group-hover:scale-105 transition-all">
                <LayoutGrid className="w-6 h-6 text-black" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-[22px] tracking-tight text-white uppercase leading-none">OYEN GRID</span>
                <span className="text-[10px] font-black text-accent tracking-[0.4em] uppercase leading-none mt-1.5 opacity-80">Infrastructure</span>
              </div>
            </Link>

            {/* NAVIGATION LINKS */}
            <nav className="hidden lg:flex items-center gap-10">
              {navigation.map((item) => (
                <div 
                  key={item.name}
                  className="relative h-[82px] flex items-center"
                  onMouseEnter={() => setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link 
                    href={item.href} 
                    className="group flex items-center gap-1.5 text-[15px] font-medium text-white/70 hover:text-white transition-all relative py-1"
                  >
                    {item.name}
                    {item.dropdown && (
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 text-white/40 group-hover:text-accent ${activeDropdown === item.name ? "rotate-180" : ""}`} />
                    )}
                    {/* Hover Underline */}
                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-accent transition-all duration-300 group-hover:w-full" />
                  </Link>

                  {/* RE-DESIGNED MEGA MENU */}
                  <AnimatePresence>
                    {item.dropdown && activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 15, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.98 }}
                        className="absolute top-[100%] left-[-100px] w-[640px] p-10 glass-card bg-[#050812]/98 border-white/10 shadow-[0_40px_80px_rgba(0,0,0,0.8)] backdrop-blur-3xl rounded-[24px]"
                      >
                        <div className="grid grid-cols-1 gap-y-4">
                           {item.dropdown.map((sub) => (
                             <Link key={sub.name} href="#" className="group flex items-center gap-6 p-5 rounded-2xl hover:bg-white/5 transition-all">
                               <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center group-hover:bg-accent group-hover:shadow-[0_0_20px_rgba(245,179,1,0.4)] transition-all">
                                 <sub.icon className="w-6 h-6 text-accent group-hover:text-black transition-colors" />
                               </div>
                               <div>
                                 <div className="font-bold text-white text-[17px] mb-1 group-hover:text-accent transition-colors tracking-tight">{sub.name}</div>
                                 <div className="text-[14px] text-text-secondary leading-tight font-light">{sub.desc}</div>
                               </div>
                               <ArrowRight className="w-5 h-5 text-white/0 group-hover:text-accent group-hover:translate-x-2 transition-all ml-auto" />
                             </Link>
                           ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>
          </div>

          {/* RIGHT SIDE BUTTONS */}
          <div className="flex items-center gap-6 md:gap-10">
            <div className="hidden xl:flex items-center gap-8">
               <button className="text-white/40 hover:text-white transition-all">
                 <Search className="w-5 h-5" />
               </button>
               <Link href="/login" className="text-[15px] font-semibold text-white/60 hover:text-white transition-all">Login</Link>
            </div>
            
            <div className="flex items-center gap-4">
              <Link href="#" className="hidden sm:block btn-outline px-8 h-[42px] flex items-center text-[14px]">Contact Sales</Link>
              <Link href="#" className="btn-primary h-[42px] flex items-center text-[14px] shadow-[0_4px_15px_rgba(245,179,1,0.2)]">Get Started</Link>
            </div>

            <button 
              className="lg:hidden text-white p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu className="w-7 h-7" />
            </button>
          </div>
        </div>
      </header>

      {/* RE-DESIGNED ANNOUNCEMENT BAR */}
      <AnimatePresence>
        {showAnnouncement && (
          <motion.div 
            initial={{ y: -60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="fixed top-[82px] left-0 right-0 z-[55] px-6 pt-4"
          >
            <div className="max-w-[1400px] mx-auto">
              <div className="bg-gradient-to-r from-[#1c1400]/85 via-[#5a3c00]/65 to-[#1c1400]/85 border border-accent/20 rounded-full h-12 md:h-14 flex items-center justify-between px-8 md:px-12 shadow-[0_10px_30px_rgba(0,0,0,0.4)] backdrop-blur-md relative overflow-hidden group">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="flex items-center gap-4 relative z-10">
                   <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse shadow-[0_0_8px_#F5B301]" />
                   <span className="text-white text-[11px] md:text-[13px] font-black tracking-[0.2em] uppercase italic">
                     PROGRAMME INFRASTRUCTURE FOR SCALE
                   </span>
                </div>
                
                <div className="flex items-center gap-6 relative z-10">
                   <button className="hidden md:flex items-center gap-3 bg-white/10 hover:bg-white/20 text-white text-[10px] font-black uppercase tracking-[0.2em] px-6 py-2 rounded-full transition-all border border-white/5">
                     EXPLORE PLATFORM <ArrowRight className="w-3.5 h-3.5" />
                   </button>
                   <button 
                    onClick={() => setShowAnnouncement(false)}
                    className="text-white/40 hover:text-white transition-colors"
                   >
                     <X className="w-4 h-4" />
                   </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MOBILE DRAWER (REFINED) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.4, ease: "circOut" }}
            className="fixed inset-0 z-[100] bg-[#050812] pt-28 px-10"
          >
            <button 
              className="absolute top-10 right-10 text-white"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X className="w-10 h-10" />
            </button>
            <nav className="flex flex-col gap-10 mt-12">
              {navigation.map((item) => (
                <div key={item.name} className="group">
                  <Link 
                    href={item.href}
                    className="text-4xl font-black text-white tracking-tighter group-hover:text-accent transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.dropdown && <div className="h-px w-full bg-white/5 mt-4" />}
                </div>
              ))}
              <div className="pt-12 border-t border-white/10 flex flex-col gap-6">
                 <Link href="#" className="btn-outline py-5 text-center text-lg">Contact Sales</Link>
                 <Link href="#" className="btn-primary py-5 text-center text-lg">Get Started</Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
