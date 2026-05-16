"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { 
  Search, ChevronDown, Grid, X, LayoutGrid, Cpu, Network, Database, 
  Shield, ArrowRight, Menu, Activity, Target, Zap, Globe, 
  Users, BarChart3, Settings, Lock, FileCheck, Layers, Boxes,
  Bot, LineChart, Server, Workflow, ArrowUpRight, Radio, Brain, BookOpen, GraduationCap, ClipboardCheck, Briefcase, Building2, Terminal
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { useSearch } from "@/context/search-context";

const navigationData = [
  {
    label: "Operations",
    status: "LIVE DELIVERY INFRASTRUCTURE ACTIVE",
    cta: "Explore Operations",
    items: [
      { title: "Live Session Infrastructure", desc: "HD conferencing, moderation and structured operational delivery.", icon: Radio },
      { title: "Attendance Intelligence", desc: "Automated participation tracking and session telemetry systems.", icon: Activity },
      { title: "Operational Monitoring", desc: "Real-time oversight across facilitators, cohorts and delivery systems.", icon: Target },
      { title: "AI Facilitation", desc: "AI-assisted moderation, summaries and engagement visibility.", icon: Bot },
    ]
  },
  {
    label: "Programmes",
    status: "STRUCTURED PROGRAMME DELIVERY SYSTEM",
    cta: "View Programme Architecture",
    items: [
      { title: "Cohort Management", desc: "Manage participant groups, programme schedules and delivery pipelines.", icon: Boxes },
      { title: "Curriculum Systems", desc: "Structure modules, milestones and institutional learning paths.", icon: BookOpen },
      { title: "Assessments & Certifications", desc: "Track evaluations, grading and programme completion systems.", icon: GraduationCap },
      { title: "Programme Analytics", desc: "Monitor delivery effectiveness and operational outcomes.", icon: LineChart },
    ]
  },
  {
    label: "Intelligence",
    status: "LIVE INFRASTRUCTURE STATUS",
    cta: "View System Architecture",
    items: [
      { title: "Operational AI", desc: "Autonomous facilitation and intelligent operational assistance.", icon: Bot },
      { title: "Decision Layer", desc: "Data-driven institutional intelligence and operational reasoning.", icon: Brain },
      { title: "Predictive Insights", desc: "Future-state operational modeling and coordination forecasting.", icon: LineChart },
      { title: "Analytics Engine", desc: "Deep telemetry, reporting and institutional performance visibility.", icon: Activity },
    ]
  },
  {
    label: "Solutions",
    status: "STRUCTURED DELIVERY SYSTEMS FOR MODERN INSTITUTIONS",
    cta: "Explore Solutions",
    items: [
      { title: "Training & Bootcamps", desc: "Structured programme delivery for academies and technical training systems.", icon: GraduationCap },
      { title: "NGOs & Fellowships", desc: "Coordinate distributed cohorts, facilitators and operational workflows.", icon: Users },
      { title: "Corporate Learning", desc: "Enterprise workforce onboarding and institutional training operations.", icon: Briefcase },
      { title: "Government Initiatives", desc: "Infrastructure for national-scale programme coordination systems.", icon: Building2 },
    ]
  },
  {
    label: "Enterprise",
    status: "ENTERPRISE DEPLOYMENT NETWORK VERIFIED",
    cta: "Contact Enterprise Team",
    items: [
      { title: "Government Operations", desc: "Infrastructure for national and institutional programme delivery.", icon: Building2 },
      { title: "Enterprise Workforce Systems", desc: "Operational coordination for large-scale workforce programmes.", icon: Workflow },
      { title: "Institutional Deployment", desc: "Custom enterprise delivery environments and governance systems.", icon: Target },
      { title: "Dedicated Infrastructure", desc: "Private operational architecture and enterprise deployment systems.", icon: Shield },
    ]
  },
  {
    label: "Infrastructure",
    status: "ENTERPRISE INFRASTRUCTURE STATUS: STABLE",
    cta: "View Infrastructure",
    items: [
      { title: "Multi-Region Infrastructure", desc: "Distributed operational systems with resilient deployment architecture.", icon: Globe },
      { title: "Governance & Compliance", desc: "Enterprise-grade security, permissions and institutional governance.", icon: Lock },
      { title: "White-Label Deployment", desc: "Deploy branded operational environments for organizations.", icon: Layers },
      { title: "API & Integrations", desc: "Connect institutional systems with operational infrastructure.", icon: Terminal },
    ]
  }
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
          ? "bg-[rgba(4,8,22,0.82)] backdrop-blur-[32px] h-[56px] border-b border-white/5 shadow-2xl" 
          : "bg-transparent h-[70px]"
      )}
    >
      <div className="max-w-[1400px] mx-auto h-full flex items-center justify-between px-8 relative z-10">
        
        {/* LEFT: LOGO & PRIMARY NAV - ARCHITECTURAL GROUPING */}
        <div className="flex items-center gap-8 h-full">
          <Link href="/" className="flex items-center gap-2 group shrink-0">
            <div className="w-5.5 h-5.5 bg-gradient-to-br from-[#f5b82e] to-[#d49a20] rounded-[6px] flex items-center justify-center shadow-[0_4px_12px_rgba(245,184,46,0.2)] group-hover:scale-105 transition-transform duration-500 relative overflow-hidden">
               <div className="w-2 h-2 border-[1.5px] border-black rotate-45" />
               <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <span className="font-bold text-white text-[13px] tracking-tight uppercase">OYEN GRID</span>
          </Link>

          {/* CONNECTED NAVIGATION RHYTHM */}
          <nav className="hidden lg:flex items-center gap-[28px] h-full">
            {navigationData.map((menu) => (
              <div 
                key={menu.label} 
                className="h-full flex items-center relative"
                onMouseEnter={() => setActiveMenu(menu.label)}
              >
                <button className={cn(
                  "text-[10px] font-black tracking-[0.06em] uppercase h-8 flex items-center gap-1 transition-all group",
                  activeMenu === menu.label ? "text-[#f5b82e]" : "text-white/30 hover:text-white"
                )}>
                  {menu.label}
                  <ChevronDown className={cn("w-1.5 h-1.5 transition-transform duration-300 opacity-10 group-hover:opacity-50", activeMenu === menu.label && "rotate-180 text-[#f5b82e] opacity-100")} />
                </button>
              </div>
            ))}
            <Link href="#" className="text-[10px] font-black text-white/30 hover:text-white tracking-[0.06em] uppercase h-8 flex items-center">
              Pricing
            </Link>
          </nav>
        </div>

        {/* RIGHT: STRUCTURED UTILITIES - ARCHITECTURAL SEQUENCE */}
        <div className="flex items-center gap-5">
          <div className="hidden lg:flex items-center gap-5 pr-5 h-8">
             <button 
               onClick={openSearch}
               className="text-white/20 hover:text-[#f5b82e] transition-all p-1.5 hover:bg-white/5 rounded-lg active:scale-90 group"
             >
                <Search className="w-3 h-3 stroke-[1.5] group-hover:drop-shadow-[0_0_8px_rgba(245,184,46,0.2)] transition-all" />
             </button>
             
             <Link href="#" className="text-[9.5px] font-black text-white/30 hover:text-white transition-all tracking-widest uppercase h-[28px] px-3.5 rounded-lg bg-white/[0.02] border border-white/5 flex items-center justify-center hover:bg-white/[0.05] hover:border-white/10 active:scale-[0.98]">
                Enterprise Sales
             </Link>
          </div>
          
          <div className="hidden lg:block w-px h-3.5 bg-white/10" />
          
          <div className="flex items-center gap-3">
            <button className="h-[28px] px-4 rounded-lg bg-gradient-to-br from-[#f5b82e] via-[#f5b82e] to-[#d49a20] text-black text-[9px] font-black uppercase tracking-[0.08em] transition-all hover:shadow-[0_8px_20px_rgba(245,184,46,0.2)] hover:scale-[1.02] active:scale-[0.98] shadow-xl relative overflow-hidden group">
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </button>
            
            <button className="hidden lg:flex p-1.5 text-white/5 hover:text-[#f5b82e] transition-colors group">
               <LayoutGrid className="w-3.5 h-3.5 group-hover:rotate-90 transition-transform duration-500" />
            </button>
            <button 
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-1.5 text-white/40 hover:text-white"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* MEGA MENU DROPDOWN */}
        <AnimatePresence>
          {activeMenu && (
            <motion.div
              initial={{ opacity: 0, y: 8, scale: 0.99 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.99 }}
              onMouseLeave={() => setActiveMenu(null)}
              className="absolute top-[calc(100%-4px)] left-1/2 -translate-x-1/2 w-[calc(100%-120px)] max-w-[1150px] bg-[rgba(3,8,20,0.58)] backdrop-blur-[22px] border border-white/10 rounded-[28px] shadow-[0_40px_100px_rgba(0,0,0,0.6)] p-6 grid grid-cols-2 lg:grid-cols-4 gap-4 z-[110] overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent pointer-events-none" />
              
              <div className="absolute inset-0 pointer-events-none">
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(245,184,46,0.03),transparent_70%)] opacity-60" />
              </div>

              {navigationData.find(m => m.label === activeMenu)?.items.map((item, i) => (
                <Link 
                  key={item.title} 
                  href="#"
                  className="p-4 rounded-xl hover:bg-white/[0.03] border border-transparent hover:border-white/5 transition-all group relative z-10 hover:-translate-y-0.5"
                >
                  <div className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/5 flex items-center justify-center mb-3.5 group-hover:bg-[#f5b82e]/10 group-hover:border-[#f5b82e]/30 group-hover:shadow-[0_0_20px_rgba(245,184,46,0.1)] transition-all">
                    <item.icon className="w-4.5 h-4.5 text-white/40 group-hover:text-[#f5b82e] transition-colors" />
                  </div>
                  <h4 className="text-[13px] font-bold text-white mb-1 tracking-tight group-hover:text-[#f5b82e] transition-colors">{item.title}</h4>
                  <p className="text-[11px] text-white/30 leading-relaxed font-medium group-hover:text-white/50 transition-colors">{item.desc}</p>
                  
                  <div className="absolute bottom-2 left-4 right-4 h-px bg-gradient-to-r from-transparent via-[#f5b82e]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              ))}
              
              <div className="lg:col-span-4 mt-4 pt-5 border-t border-white/5 flex items-center justify-between relative z-10 px-2">
                <div className="flex items-center gap-3">
                   <div className="w-1.5 h-1.5 rounded-full bg-[#f5b82e] animate-pulse shadow-[0_0_10px_#f5b82e]" />
                   <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.3em]">
                     {navigationData.find(m => m.label === activeMenu)?.status}
                   </span>
                </div>
                <Link href="#" className="flex items-center gap-2 group/link px-4 py-2 rounded-xl hover:bg-white/[0.03] border border-transparent hover:border-white/5 transition-all">
                   <span className="text-[11px] font-black text-[#f5b82e] uppercase tracking-widest">
                     {navigationData.find(m => m.label === activeMenu)?.cta}
                   </span>
                   <ArrowUpRight className="w-3 h-3 text-[#f5b82e] group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
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
            <div className="h-[64px] flex items-center justify-between px-8 border-b border-white/5">
              <span className="font-bold text-white uppercase tracking-tight text-[15px]">OYEN GRID</span>
              <button onClick={() => setMobileMenuOpen(false)} className="p-2 text-white/40">
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-8 space-y-8">
              {navigationData.map((menu) => (
                <div key={menu.label} className="space-y-4">
                  <h3 className="text-[11px] font-black text-[#f5b82e] uppercase tracking-[0.4em]">{menu.label}</h3>
                  <div className="grid gap-6 pl-2">
                    {menu.items.map((item) => (
                      <Link key={item.title} href="#" className="flex items-start gap-4 group">
                        <div className="w-7 h-7 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                          <item.icon className="w-3.5 h-3.5 text-white/40" />
                        </div>
                        <div>
                          <div className="text-[13px] font-bold text-white group-hover:text-[#f5b82e] transition-colors">{item.title}</div>
                          <div className="text-[11px] text-white/30">{item.desc}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
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
    <div className="pt-[76px] px-8 flex justify-center relative z-[60]">
      <motion.div 
        initial={{ opacity: 0, y: -16, scale: 0.99 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        className="h-[38px] bg-[rgba(10,14,24,0.7)] backdrop-blur-[32px] border border-white/10 rounded-full px-6 flex items-center justify-between w-full max-w-[1080px] shadow-[0_20px_40px_rgba(0,0,0,0.5),inset_0_0_20px_rgba(245,184,46,0.02)] overflow-hidden group relative"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(245,184,46,0.03),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

        <div className="flex items-center shrink-0 relative z-10">
           <div className="relative flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-[#f5b82e] shadow-[0_0_10px_#f5b82e] relative z-10" />
              <div className="absolute inset-0 w-3 h-3 rounded-full bg-[#f5b82e]/40 animate-ping" />
              <div className="absolute inset-0 w-4 h-4 rounded-full bg-[#f5b82e]/20 blur-[2px] animate-pulse" />
           </div>
        </div>

        <div className="flex-1 flex justify-center relative z-10">
           <span className="text-[10.5px] text-white/60 font-bold tracking-widest uppercase">
              Operational infrastructure for institutional delivery.
           </span>
        </div>
        
        <div className="flex items-center gap-5 relative z-10">
          <button className="flex items-center gap-1.5 group/btn px-3 h-[24px] rounded-lg bg-[#f5b82e]/5 border border-[#f5b82e]/10 hover:bg-[#f5b82e]/10 hover:border-[#f5b82e]/30 transition-all shadow-[0_0_15px_rgba(245,184,46,0.05)]">
             <span className="text-[8.5px] font-black text-[#f5b82e] uppercase tracking-[0.12em]">Explore Infrastructure</span>
             <ArrowRightIcon className="w-2.5 h-2.5 text-[#f5b82e] group-hover/btn:translate-x-0.5 transition-transform" />
          </button>
          
          <div className="h-3 w-px bg-white/10" />
          
          <button onClick={() => setIsVisible(false)} className="text-white/20 hover:text-white transition-colors p-1 group/close">
            <X className="w-3 h-3 group-hover/close:rotate-90 transition-transform" />
          </button>
        </div>
      </motion.div>
    </div>
  );
}

function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

function LinkIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  );
}
