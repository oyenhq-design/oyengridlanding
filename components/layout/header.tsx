"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { 
  Search, ChevronDown, Grid, X, LayoutGrid, Cpu, Network, Database, 
  Shield, ArrowRight, Menu, Activity, Target, Zap, Globe, 
  Users, BarChart3, Settings, Lock, FileCheck, Layers, Boxes,
  Bot, LineChart, Server, Workflow
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { useSearch } from "@/context/search-context";

const navigationData = [
  {
    label: "Operations",
    items: [
      { title: "Live Command", desc: "Real-time institutional orchestration.", icon: Activity },
      { title: "Programme Coordination", desc: "Global delivery synchronization.", icon: Workflow },
      { title: "Institutional Delivery", desc: "Automated infrastructure rollout.", icon: Target },
      { title: "Monitoring Systems", desc: "Advanced telemetry and health.", icon: BarChart3 },
    ]
  },
  {
    label: "Programmes",
    items: [
      { title: "Fellowships", desc: "Elite institutional training paths.", icon: Users },
      { title: "Workforce Operations", desc: "Scalable human infrastructure.", icon: Boxes },
      { title: "Cohort Systems", desc: "Group-based delivery frameworks.", icon: Layers },
      { title: "Training Infrastructure", desc: "Modular learning environments.", icon: Database },
    ]
  },
  {
    label: "Intelligence",
    items: [
      { title: "Operational AI", desc: "Autonomous facilitation engine.", icon: Bot },
      { title: "Decision Layer", desc: "Data-driven institutional logic.", icon: Brain },
      { title: "Predictive Insights", desc: "Future-state operational modeling.", icon: LineChart },
      { title: "Analytics Engine", desc: "Deep telemetry and reporting.", icon: Activity },
    ]
  },
  {
    label: "Infrastructure",
    items: [
      { title: "Global Sync", desc: "Zero-latency coordination grid.", icon: Globe },
      { title: "Coordination Grid", desc: "Distributed institutional nodes.", icon: Network },
      { title: "Automation Layer", desc: "Low-code operational workflows.", icon: Zap },
      { title: "Institutional Nodes", desc: "Decentralized control points.", icon: Server },
    ]
  },
  {
    label: "Enterprise",
    items: [
      { title: "Governance", desc: "System-wide oversight protocols.", icon: Shield },
      { title: "Security", desc: "Military-grade data protection.", icon: Lock },
      { title: "Compliance", desc: "Regulatory alignment automation.", icon: FileCheck },
      { title: "Integrations", desc: "Unified ecosystem connectivity.", icon: LinkIcon },
    ]
  },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { openSearch } = useSearch();
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setActiveMenu(null);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header 
      ref={menuRef}
      className={cn(
        "fixed top-0 left-0 right-0 z-[100] transition-all duration-700",
        scrolled 
          ? "bg-[rgba(4,8,22,0.85)] backdrop-blur-[24px] h-[64px] border-b border-white/5 shadow-[0_20px_50px_rgba(0,0,0,0.5)]" 
          : "bg-transparent h-[84px]"
      )}
    >
      <div className="max-w-[1450px] mx-auto h-full flex items-center justify-between px-8 relative z-10">
        
        {/* LEFT: LOGO & PRIMARY NAV */}
        <div className="flex items-center gap-12 h-full">
          <Link href="/" className="flex items-center gap-2.5 group shrink-0">
            <div className="w-8 h-8 bg-gradient-to-br from-[#f5b82e] to-[#d49a20] rounded-[10px] flex items-center justify-center shadow-[0_8px_20px_rgba(245,184,46,0.25)] group-hover:scale-110 transition-transform duration-500 relative">
               <div className="w-3.5 h-3.5 border-[1.5px] border-black rotate-45" />
            </div>
            <span className="font-bold text-white text-[17px] tracking-[-0.03em] uppercase">OYEN GRID</span>
          </Link>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden lg:flex items-center gap-2 h-full">
            {navigationData.map((menu) => (
              <div 
                key={menu.label} 
                className="h-full flex items-center relative"
                onMouseEnter={() => setActiveMenu(menu.label)}
              >
                <button className={cn(
                  "text-[12px] font-bold tracking-[0.1em] uppercase h-10 px-4 rounded-xl flex items-center gap-2 transition-all group",
                  activeMenu === menu.label ? "text-[#f5b82e] bg-white/[0.05]" : "text-white/40 hover:text-white"
                )}>
                  {menu.label}
                  <ChevronDown className={cn("w-3 h-3 transition-transform duration-300", activeMenu === menu.label && "rotate-180")} />
                </button>
              </div>
            ))}
            <Link href="#" className="text-[12px] font-bold text-white/40 hover:text-white tracking-[0.1em] uppercase px-4 h-10 flex items-center">
              Pricing
            </Link>
          </nav>
        </div>

        {/* RIGHT: SEARCH & CTAs */}
        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center gap-4 pr-4 border-r border-white/10 h-10">
             <button 
               onClick={openSearch}
               className="text-white/30 hover:text-[#f5b82e] transition-all p-2 hover:bg-white/5 rounded-lg"
             >
                <Search className="w-4.5 h-4.5" />
             </button>
             <Link href="#" className="text-[12px] font-bold text-white/40 hover:text-white transition-all tracking-[0.1em] uppercase h-[38px] px-5 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-center hover:bg-white/[0.05] hover:border-white/10 shadow-lg">
                Contact Sales
             </Link>
          </div>
          
          <div className="flex items-center gap-3">
            <button className="h-[40px] px-6 rounded-xl bg-gradient-to-br from-[#f5b82e] via-[#f5b82e] to-[#d49a20] text-black text-[11px] font-black uppercase tracking-widest transition-all hover:shadow-[0_12px_24px_rgba(245,184,46,0.3)] hover:scale-[1.03] active:scale-[0.98] shadow-xl">
              Get Started
            </button>
            <button className="hidden lg:flex p-2 text-white/15 hover:text-[#f5b82e] transition-colors">
               <LayoutGrid className="w-4.5 h-4.5" />
            </button>
            <button 
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2 text-white/40 hover:text-white"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* MEGA MENU DROPDOWN */}
        <AnimatePresence>
          {activeMenu && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.98 }}
              onMouseLeave={() => setActiveMenu(null)}
              className="absolute top-[calc(100%-8px)] left-8 right-8 bg-[#0A0E1A]/95 backdrop-blur-[32px] border border-white/10 rounded-[32px] shadow-[0_40px_100px_rgba(0,0,0,0.8)] p-8 grid grid-cols-2 lg:grid-cols-4 gap-4 z-[110]"
            >
              {navigationData.find(m => m.label === activeMenu)?.items.map((item, i) => (
                <Link 
                  key={item.title} 
                  href="#"
                  className="p-5 rounded-2xl hover:bg-white/[0.03] border border-transparent hover:border-white/10 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-center mb-4 group-hover:bg-[#f5b82e]/10 group-hover:border-[#f5b82e]/20 transition-all">
                    <item.icon className="w-5 h-5 text-white/40 group-hover:text-[#f5b82e] transition-colors" />
                  </div>
                  <h4 className="text-[14px] font-bold text-white mb-1 tracking-tight group-hover:text-[#f5b82e] transition-colors">{item.title}</h4>
                  <p className="text-[12px] text-white/30 leading-snug group-hover:text-white/40 transition-colors">{item.desc}</p>
                </Link>
              ))}
              
              {/* Promotional Sidebar for Dropdown */}
              <div className="lg:col-span-4 mt-4 pt-6 border-t border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                   <div className="w-1.5 h-1.5 rounded-full bg-[#f5b82e] animate-pulse" />
                   <span className="text-[10px] font-bold text-white/20 uppercase tracking-[0.2em]">Live Operational Sync v4.2 Enabled</span>
                </div>
                <Link href="#" className="flex items-center gap-2 group/link">
                   <span className="text-[11px] font-black text-[#f5b82e] uppercase tracking-widest">Explore Documentation</span>
                   <ArrowRight className="w-3 h-3 text-[#f5b82e] group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            className="fixed inset-0 z-[200] bg-[#040816] flex flex-col"
          >
            <div className="h-[84px] flex items-center justify-between px-8 border-b border-white/5">
              <span className="font-bold text-white uppercase tracking-tight">OYEN GRID</span>
              <button onClick={() => setMobileMenuOpen(false)} className="p-2 text-white/40">
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-8 space-y-8">
              {navigationData.map((menu) => (
                <div key={menu.label} className="space-y-4">
                  <h3 className="text-[12px] font-black text-[#f5b82e] uppercase tracking-[0.4em]">{menu.label}</h3>
                  <div className="grid gap-6 pl-2">
                    {menu.items.map((item) => (
                      <Link key={item.title} href="#" className="flex items-start gap-4 group">
                        <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                          <item.icon className="w-4 h-4 text-white/40" />
                        </div>
                        <div>
                          <div className="text-[14px] font-bold text-white group-hover:text-[#f5b82e] transition-colors">{item.title}</div>
                          <div className="text-[12px] text-white/30">{item.desc}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="p-8 border-t border-white/5 space-y-4">
              <button className="w-full h-14 rounded-xl bg-gradient-to-r from-[#f5b82e] to-[#d49a20] text-black font-black uppercase tracking-widest">Get Started</button>
              <button className="w-full h-14 rounded-xl bg-white/5 text-white font-bold uppercase tracking-widest">Contact Sales</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="pt-[84px] px-8 flex justify-center relative z-[60]">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="h-[48px] bg-[rgba(10,14,24,0.65)] backdrop-blur-[24px] border border-white/10 rounded-[20px] px-6 flex items-center justify-between w-full max-w-[1450px] shadow-[0_30px_60px_rgba(0,0,0,0.5)] overflow-hidden group"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(245,184,46,0.04),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

        <div className="flex items-center gap-8 mx-auto relative z-10">
          <div className="flex items-center gap-3">
             <div className="w-1.5 h-1.5 rounded-full bg-[#f5b82e] shadow-[0_0_12px_#f5b82e] animate-pulse" />
             <span className="text-[12px] text-white/60 font-bold tracking-tight uppercase">
                Operational infrastructure for structured programme delivery.
             </span>
          </div>
          
          <div className="h-3 w-px bg-white/10" />
          
          <button className="flex items-center gap-2 group/btn">
             <span className="text-[11px] font-black text-[#f5b82e] uppercase tracking-[0.15em] group-hover/btn:tracking-[0.2em] transition-all">Explore Operations</span>
             <motion.div animate={{ x: [0, 3, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                <ArrowRightIcon className="w-3.5 h-3.5 text-[#f5b82e]" />
             </motion.div>
          </button>
        </div>

        <button onClick={() => setIsVisible(false)} className="text-white/10 hover:text-white transition-colors relative z-10 p-2">
          <X className="w-3.5 h-3.5" />
        </button>
      </motion.div>
    </div>
  );
}

function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

function LinkIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  );
}

function Brain({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-2.54Z" />
      <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-2.54Z" />
    </svg>
  );
}
