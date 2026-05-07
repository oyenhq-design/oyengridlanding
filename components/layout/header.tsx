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
  ArrowRight,
  TrendingUp
} from "lucide-react";

const navigation = [
  {
    name: "Features",
    href: "#",
    dropdown: [
      { name: "Curriculum Architect", desc: "Design multi-layered programmes with absolute logic.", icon: Zap },
      { name: "Precision Delivery", desc: "Automate sessions and participant tracking at scale.", icon: Shield },
      { name: "Operational Insights", desc: "Real-time analytics and high-fidelity reporting.", icon: BarChart3 }
    ],
    preview: {
      title: "Featured Tool",
      desc: "Experience the Curriculum Architect v2.0",
      stats: "78% Completion Rate"
    }
  },
  {
    name: "Solutions",
    href: "#",
    dropdown: [
      { name: "Enterprise Onboarding", desc: "Scale internal growth with governed training paths.", icon: Users },
      { name: "Global Programmes", desc: "Manage distributed cohorts across multiple regions.", icon: Globe },
      { name: "Data Infrastructure", desc: "Centralized operational data governance for teams.", icon: Database }
    ],
    preview: {
      title: "New Solution",
      desc: "Enterprise Programme Infrastructure",
      stats: "1,450+ Active Participants"
    }
  },
  {
    name: "Resources",
    href: "#",
    dropdown: [
      { name: "Intelligence Hub", desc: "Expert guides on building high-fidelity programmes.", icon: Database },
      { name: "API Reference", desc: "Deeply integrate OYEN into your existing tech stack.", icon: Zap },
      { name: "Operational Success", desc: "Case studies from industry-leading partners.", icon: Globe }
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
      <header className="fixed top-0 left-0 right-0 z-[60] h-[74px] flex items-center transition-all duration-300 border-b border-white/5">
        {/* Background Gradient & Blur */}
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#050814]/96 to-[#050814]/92 backdrop-blur-xl" />
        
        <div className="container-custom max-w-[1400px] w-full flex items-center justify-between relative z-10 px-8">
          
          {/* LOGO AREA */}
          <div className="flex items-center gap-10">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-9 h-9 bg-accent rounded-xl flex items-center justify-center shadow-[0_0_15px_rgba(245,179,1,0.3)] group-hover:scale-105 transition-all">
                <LayoutGrid className="w-5 h-5 text-black" />
              </div>
              <span className="font-bold text-[20px] tracking-tight text-white uppercase leading-none">OYEN GRID</span>
            </Link>

            {/* NAVIGATION LINKS */}
            <nav className="hidden lg:flex items-center gap-7">
              {navigation.map((item) => (
                <div 
                  key={item.name}
                  className="relative h-[74px] flex items-center"
                  onMouseEnter={() => setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link 
                    href={item.href} 
                    className="group flex items-center gap-1 text-[15px] font-medium text-white/70 hover:text-white transition-all relative py-1"
                  >
                    {item.name}
                    {item.dropdown && (
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 text-white/30 group-hover:text-accent ${activeDropdown === item.name ? "rotate-180" : ""}`} />
                    )}
                    <span className="absolute bottom-[-2px] left-0 w-0 h-[1.5px] bg-accent transition-all duration-300 group-hover:w-full" />
                  </Link>

                  {/* REFINED COMPACT MEGA MENU */}
                  <AnimatePresence>
                    {item.dropdown && activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.98 }}
                        animate={{ opacity: 1, y: 10, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.98 }}
                        transition={{ duration: 0.22, ease: "easeOut" }}
                        className="absolute top-[64px] left-[-40px] w-[620px] overflow-hidden glass-card border-white/8 shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur-[20px] rounded-[20px]"
                      >
                        {/* Background Depth Gradient */}
                        <div className="absolute inset-0 z-0 bg-[#050814]/92" />
                        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_top_right,rgba(245,179,1,0.08),transparent_35%)]" />

                        <div className="relative z-10 flex divide-x divide-white/5">
                          {/* LEFT SIDE: ITEMS */}
                          <div className="flex-1 p-[22px] flex flex-col gap-3.5">
                            {item.dropdown.map((sub) => (
                              <Link key={sub.name} href="#" className="group flex items-center gap-4 p-3.5 rounded-[16px] hover:bg-white/5 transition-all">
                                <div className="w-11 h-11 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:border-accent group-hover:shadow-[0_0_15px_rgba(245,179,1,0.3)] transition-all">
                                  <sub.icon className="w-5 h-5 text-accent group-hover:text-black transition-colors group-hover:scale-110" />
                                </div>
                                <div>
                                  <div className="font-semibold text-white text-[16px] mb-0.5 group-hover:text-accent transition-colors flex items-center gap-2">
                                    {sub.name}
                                    <ArrowRight className="w-3.5 h-3.5 text-accent/0 group-hover:text-accent group-hover:translate-x-1 transition-all" />
                                  </div>
                                  <div className="text-[13px] text-white/58 leading-tight font-light max-w-[220px]">{sub.desc}</div>
                                </div>
                              </Link>
                            ))}
                          </div>

                          {/* RIGHT SIDE: VISUAL SUPPORT PANEL */}
                          <div className="w-[240px] bg-white/[0.02] p-6 flex flex-col justify-between">
                            {item.preview ? (
                              <>
                                <div>
                                  <div className="text-[10px] font-black text-accent uppercase tracking-widest mb-3">{item.preview.title}</div>
                                  <div className="text-[14px] font-bold text-white mb-4 leading-tight">{item.preview.desc}</div>
                                  <div className="relative rounded-xl overflow-hidden border border-white/5 shadow-2xl mb-4 group-preview">
                                    <img 
                                      src="/dropdown-preview.png" 
                                      alt="Preview" 
                                      className="w-full aspect-square object-cover opacity-80 group-preview:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-navy to-transparent opacity-40" />
                                  </div>
                                </div>
                                <div className="flex items-center gap-2">
                                  <TrendingUp className="w-4 h-4 text-accent" />
                                  <span className="text-[11px] font-black text-white uppercase tracking-wider">{item.preview.stats}</span>
                                </div>
                              </>
                            ) : (
                              <div className="flex flex-col h-full justify-center text-center">
                                 <Database className="w-8 h-8 text-accent/20 mx-auto mb-4" />
                                 <div className="text-[11px] text-white/30 uppercase tracking-widest">Enterprise Ready</div>
                              </div>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>
          </div>

          {/* RIGHT SIDE BUTTONS */}
          <div className="flex items-center gap-5 md:gap-7">
            <div className="hidden xl:flex items-center gap-6">
               <button className="text-white/30 hover:text-white transition-all">
                 <Search className="w-4.5 h-4.5" />
               </button>
               <Link href="/login" className="text-[15px] font-semibold text-white/50 hover:text-white transition-all">Login</Link>
            </div>
            
            <div className="flex items-center gap-3">
              <Link href="#" className="hidden sm:block btn-outline h-[38px] flex items-center px-6 text-[13px]">Contact Sales</Link>
              <Link href="#" className="btn-primary h-[38px] flex items-center px-6 text-[13px] shadow-[0_0_15px_rgba(245,179,1,0.2)]">Get Started</Link>
            </div>

            <button 
              className="lg:hidden text-white p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* ANNOUNCEMENT PILL */}
      <AnimatePresence>
        {showAnnouncement && (
          <motion.div 
            initial={{ y: -60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="fixed top-[74px] left-0 right-0 z-[55] px-6 pt-3"
          >
            <div className="max-w-[1400px] mx-auto flex justify-center">
              <div className="bg-gradient-to-r from-[#1c1400]/90 via-[#5a3c00]/75 to-[#1c1400]/90 border border-accent/20 rounded-full h-11 flex items-center justify-between px-6 md:px-8 shadow-2xl backdrop-blur-md relative overflow-hidden group">
                <div className="flex items-center gap-3 relative z-10">
                   <div className="w-1 h-1 rounded-full bg-accent animate-pulse shadow-[0_0_6px_#F5B301]" />
                   <span className="text-white text-[10px] md:text-[11px] font-black tracking-[0.2em] uppercase italic">
                     PROGRAMME INFRASTRUCTURE FOR SCALE
                   </span>
                </div>
                
                <div className="flex items-center gap-4 relative z-10 ml-8">
                   <button className="hidden md:flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white text-[9px] font-black uppercase tracking-[0.2em] px-4 py-1.5 rounded-full transition-all border border-white/5">
                     EXPLORE <ArrowRight className="w-3 h-3" />
                   </button>
                   <button 
                    onClick={() => setShowAnnouncement(false)}
                    className="text-white/30 hover:text-white transition-colors"
                   >
                     <X className="w-3.5 h-3.5" />
                   </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MOBILE DRAWER */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.4, ease: "circOut" }}
            className="fixed inset-0 z-[100] bg-[#050814] pt-24 px-8"
          >
            <button 
              className="absolute top-8 right-8 text-white"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X className="w-8 h-8" />
            </button>
            <nav className="flex flex-col gap-8 mt-12">
              {navigation.map((item) => (
                <Link 
                  key={item.name} 
                  href={item.href}
                  className="text-4xl font-black text-white tracking-tighter"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-10 border-t border-white/10 flex flex-col gap-4">
                 <Link href="#" className="btn-outline py-4 text-center text-lg">Contact Sales</Link>
                 <Link href="#" className="btn-primary py-4 text-center text-lg">Get Started</Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
