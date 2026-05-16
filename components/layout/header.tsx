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
    href: "/operations",
    items: [
      { title: "Live Session Infrastructure", desc: "HD conferencing, moderation and structured operational delivery.", icon: Radio, href: "/operations/live-session-infrastructure" },
      { title: "Attendance Intelligence", desc: "Automated participation tracking and session telemetry systems.", icon: Activity, href: "/operations/attendance-intelligence" },
      { title: "Operational Monitoring", desc: "Real-time oversight across facilitators, cohorts and delivery systems.", icon: Target, href: "/operations/operational-monitoring" },
      { title: "AI Facilitation", desc: "AI-assisted moderation, summaries and engagement visibility.", icon: Bot, href: "/operations/ai-facilitation" },
    ]
  },
  {
    label: "Programmes",
    status: "STRUCTURED PROGRAMME DELIVERY SYSTEM",
    cta: "View Programme Architecture",
    href: "/programmes",
    items: [
      { title: "Cohort Management", desc: "Manage participant groups, programme schedules and delivery pipelines.", icon: Boxes, href: "/programmes/cohort-management" },
      { title: "Curriculum Systems", desc: "Structure modules, milestones and institutional learning paths.", icon: BookOpen, href: "/programmes/curriculum-architecture" },
      { title: "Assessments & Certifications", desc: "Track evaluations, grading and programme completion systems.", icon: GraduationCap, href: "/programmes/delivery-workflows" },
      { title: "Programme Analytics", desc: "Monitor delivery effectiveness and operational outcomes.", icon: LineChart, href: "/programmes/participant-operations" },
    ]
  },
  {
    label: "Intelligence",
    status: "LIVE INFRASTRUCTURE STATUS",
    cta: "View System Architecture",
    href: "/intelligence",
    items: [
      { title: "Operational AI", desc: "Autonomous facilitation and intelligent operational assistance.", icon: Bot, href: "/intelligence/operational-ai" },
      { title: "Decision Layer", desc: "Data-driven institutional intelligence and operational reasoning.", icon: Brain, href: "/intelligence/decision-layer" },
      { title: "Predictive Insights", desc: "Future-state operational modeling and coordination forecasting.", icon: LineChart, href: "/intelligence/predictive-insights" },
      { title: "Analytics Engine", desc: "Deep telemetry, reporting and institutional performance visibility.", icon: Activity, href: "/intelligence/analytics-engine" },
    ]
  },
  {
    label: "Solutions",
    status: "STRUCTURED DELIVERY SYSTEMS FOR MODERN INSTITUTIONS",
    cta: "Explore Solutions",
    href: "/solutions",
    items: [
      { title: "Global Sync", desc: "Structured programme delivery for academies and technical training systems.", icon: Globe, href: "/solutions/global-sync" },
      { title: "Coordination Grid", desc: "Coordinate distributed cohorts, facilitators and operational workflows.", icon: Network, href: "/solutions/coordination-grid" },
      { title: "Automation Layer", desc: "Enterprise workforce onboarding and institutional training operations.", icon: Zap, href: "/solutions/automation-layer" },
      { title: "Institutional Nodes", desc: "Infrastructure for national-scale programme coordination systems.", icon: Building2, href: "/solutions/institutional-nodes" },
    ]
  },
  {
    label: "Enterprise",
    status: "ENTERPRISE DEPLOYMENT NETWORK VERIFIED",
    cta: "Contact Enterprise Team",
    href: "/enterprise",
    items: [
      { title: "Governance", desc: "Infrastructure for national and institutional programme delivery.", icon: Shield, href: "/enterprise/governance" },
      { title: "Security & Compliance", desc: "Operational coordination for large-scale workforce programmes.", icon: Lock, href: "/enterprise/security-compliance" },
      { title: "White-Label Infrastructure", desc: "Custom enterprise delivery environments and governance systems.", icon: Layers, href: "/enterprise/white-label-infrastructure" },
      { title: "Global Deployment", desc: "Private operational architecture and enterprise deployment systems.", icon: Globe, href: "/enterprise/global-deployment" },
    ]
  },
  {
    label: "Infrastructure",
    status: "ENTERPRISE INFRASTRUCTURE STATUS: STABLE",
    cta: "View Infrastructure",
    href: "/infrastructure",
    items: [
      { title: "Multi-Region Systems", desc: "Distributed operational systems with resilient deployment architecture.", icon: Globe, href: "/infrastructure/multi-region-systems" },
      { title: "Network Telemetry", desc: "Enterprise-grade security, permissions and institutional governance.", icon: Activity, href: "/infrastructure/network-telemetry" },
      { title: "Distributed Delivery", desc: "Deploy branded operational environments for organizations.", icon: Network, href: "/infrastructure/distributed-delivery" },
      { title: "Institutional Architecture", desc: "Connect institutional systems with operational infrastructure.", icon: Building2, href: "/infrastructure/institutional-architecture" },
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
        "fixed top-0 left-0 right-0 z-[100] transition-all duration-1000",
        scrolled 
          ? "bg-gradient-to-b from-[#02040A]/95 to-[#040816]/90 backdrop-blur-[24px] h-[56px] border-b border-white/5 shadow-[0_20px_50px_rgba(0,0,0,0.5)]" 
          : "bg-transparent h-[70px]"
      )}
    >
      {/* Background Ambient Glow Behind Center */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-full bg-[radial-gradient(ellipse_at_top,rgba(232,184,74,0.03),transparent_70%)] opacity-60" />
      </div>

      <div className="max-w-[1400px] mx-auto h-full flex items-center justify-between px-8 relative z-10">
        
        {/* LEFT: LOGO & PRIMARY NAV */}
        <div className="flex items-center gap-8 h-full">
          <Link href="/" className="flex items-center gap-2.5 group shrink-0 relative">
            <div className="absolute -inset-2 bg-[#E8B84A]/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="w-5.5 h-5.5 bg-gradient-to-br from-[#E8B84A] via-[#D9A63A] to-[#F0C96A] rounded-[6px] flex items-center justify-center shadow-[0_4px_15px_rgba(232,184,74,0.3)] group-hover:scale-105 transition-all duration-500 relative overflow-hidden">
               <div className="w-2 h-2 border-[1.5px] border-black rotate-45 relative z-10" />
               <div className="absolute inset-0 bg-gradient-to-tr from-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <span className="font-bold text-white text-[13px] tracking-tight uppercase relative z-10">OYEN GRID</span>
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
                  "text-[10px] font-black tracking-[0.06em] uppercase h-[30px] px-3 rounded-lg flex items-center gap-1.5 transition-all duration-500 relative group",
                  activeMenu === menu.label 
                    ? "text-[#E8B84A] bg-[#E8B84A]/[0.08] border border-[#E8B84A]/[0.18] shadow-[0_0_15px_rgba(232,184,74,0.05)]" 
                    : "text-white/70 hover:text-white/95"
                )}>
                  <span className="relative z-10">{menu.label}</span>
                  <ChevronDown className={cn("w-1.5 h-1.5 transition-transform duration-500 opacity-20 group-hover:opacity-60 relative z-10", activeMenu === menu.label && "rotate-180 text-[#E8B84A] opacity-100")} />
                  
                  {/* Subtle Glow Bloom Underneath Active */}
                  {activeMenu === menu.label && (
                    <motion.div 
                      layoutId="nav-active-glow"
                      className="absolute inset-0 bg-[#E8B84A]/[0.02] blur-md -z-10" 
                    />
                  )}
                </button>
              </div>
            ))}
            <Link href="/pricing" className="text-[10px] font-black text-white/70 hover:text-white/95 tracking-[0.06em] uppercase h-8 flex items-center px-2 transition-colors duration-500">
              Pricing
            </Link>
          </nav>
        </div>

        {/* RIGHT: STRUCTURED UTILITIES */}
        <div className="flex items-center gap-5">
          <div className="hidden lg:flex items-center gap-5 pr-5 h-8">
             <button 
               onClick={openSearch}
               className="text-white/20 hover:text-[#E8B84A] transition-all duration-500 p-1.5 hover:bg-white/5 rounded-lg active:scale-90 group"
             >
                <Search className="w-3 h-3 stroke-[1.5] group-hover:drop-shadow-[0_0_8px_rgba(232,184,74,0.4)] transition-all" />
             </button>
             
             <Link href="/enterprise-sales" className="text-[9.5px] font-black text-white/80 hover:text-white transition-all duration-500 tracking-widest uppercase h-[28px] px-3.5 rounded-lg bg-white/[0.03] border border-white/8 flex items-center justify-center hover:bg-white/[0.06] hover:border-[#E8B84A]/20 hover:shadow-[0_0_15px_rgba(232,184,74,0.05)] active:scale-[0.98]">
                Enterprise Sales
             </Link>
          </div>
          
          <div className="hidden lg:block w-px h-3.5 bg-white/10" />
          
          <div className="flex items-center gap-3">
            <button className="h-[28px] px-4 rounded-lg bg-gradient-to-br from-[#D9A63A] via-[#E8B84A] to-[#F0C96A] text-black text-[9px] font-black uppercase tracking-[0.08em] transition-all duration-500 hover:shadow-[0_8px_25px_rgba(232,184,74,0.35)] hover:scale-[1.02] active:scale-[0.98] shadow-xl relative overflow-hidden group">
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 bg-white/30 translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-out" />
              <div className="absolute top-0 left-0 w-full h-1/2 bg-white/10 -skew-y-12" />
            </button>
            
            <button className="hidden lg:flex p-1.5 text-white/5 hover:text-[#E8B84A] transition-colors duration-500 group">
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
              className="absolute top-[calc(100%-4px)] left-1/2 -translate-x-1/2 w-[calc(100%-120px)] max-w-[1150px] bg-gradient-to-b from-[#040816]/95 to-[#02040A]/98 backdrop-blur-[24px] border border-white/10 rounded-[28px] shadow-[0_40px_100px_rgba(0,0,0,0.7)] p-6 grid grid-cols-2 lg:grid-cols-4 gap-4 z-[110] overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />
              
              <div className="absolute inset-0 pointer-events-none">
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(232,184,74,0.04),transparent_70%)] opacity-60" />
              </div>

              {navigationData.find(m => m.label === activeMenu)?.items.map((item, i) => (
                <Link 
                  key={item.title} 
                  href={item.href}
                  onClick={() => setActiveMenu(null)}
                  className="p-4 rounded-xl hover:bg-white/[0.03] border border-transparent hover:border-white/5 transition-all duration-500 group relative z-10 hover:-translate-y-0.5"
                >
                  <div className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/5 flex items-center justify-center mb-3.5 group-hover:bg-[#E8B84A]/10 group-hover:border-[#E8B84A]/30 group-hover:shadow-[0_0_20px_rgba(232,184,74,0.1)] transition-all duration-500">
                    <item.icon className="w-4.5 h-4.5 text-white/40 group-hover:text-[#E8B84A] transition-colors" />
                  </div>
                  <h4 className="text-[13px] font-bold text-white mb-1 tracking-tight group-hover:text-[#E8B84A] transition-colors">{item.title}</h4>
                  <p className="text-[11px] text-white/30 leading-relaxed font-medium group-hover:text-white/50 transition-colors">{item.desc}</p>
                  
                  <div className="absolute bottom-2 left-4 right-4 h-px bg-gradient-to-r from-transparent via-[#E8B84A]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </Link>
              ))}
              
              <div className="lg:col-span-4 mt-4 pt-5 border-t border-white/5 flex items-center justify-between relative z-10 px-2">
                <div className="flex items-center gap-3">
                   <div className="w-1.5 h-1.5 rounded-full bg-[#E8B84A] animate-pulse shadow-[0_0_12px_#E8B84A]" />
                   <span className="text-[10px] font-black text-white/30 uppercase tracking-[0.3em]">
                     {navigationData.find(m => m.label === activeMenu)?.status}
                   </span>
                </div>
                <Link 
                  href={navigationData.find(m => m.label === activeMenu)?.href || "#"} 
                  onClick={() => setActiveMenu(null)}
                  className="flex items-center gap-2 group/link px-4 py-2 rounded-xl hover:bg-white/[0.03] border border-transparent hover:border-white/5 transition-all duration-500"
                >
                   <span className="text-[11px] font-black text-[#E8B84A] uppercase tracking-widest">
                     {navigationData.find(m => m.label === activeMenu)?.cta}
                   </span>
                   <ArrowUpRight className="w-3 h-3 text-[#E8B84A] group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-500" />
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
            className="fixed inset-0 z-[200] bg-[#02040A] flex flex-col"
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
                  <h3 className="text-[11px] font-black text-[#E8B84A] uppercase tracking-[0.4em]">{menu.label}</h3>
                  <div className="grid gap-6 pl-2">
                    {menu.items.map((item) => (
                      <Link key={item.title} href={item.href} onClick={() => setMobileMenuOpen(false)} className="flex items-start gap-4 group">
                        <div className="w-7 h-7 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                          <item.icon className="w-3.5 h-3.5 text-white/40" />
                        </div>
                        <div>
                          <div className="text-[13px] font-bold text-white group-hover:text-[#E8B84A] transition-colors">{item.title}</div>
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
        className="h-[38px] bg-gradient-to-r from-[#07111F]/60 via-[#0A1322]/80 to-[#07111F]/60 backdrop-blur-[32px] border border-white/10 rounded-full px-6 flex items-center justify-between w-full max-w-[1080px] shadow-[0_20px_40px_rgba(0,0,0,0.6),inset_0_0_20px_rgba(232,184,74,0.02)] overflow-hidden group relative"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(232,184,74,0.05),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E8B84A]/10 to-transparent" />

        <div className="flex items-center shrink-0 relative z-10">
           <div className="relative flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-[#E8B84A] shadow-[0_0_12px_#E8B84A] relative z-10" />
              <div className="absolute inset-0 w-3 h-3 rounded-full bg-[#E8B84A]/40 animate-ping" />
              <div className="absolute inset-0 w-4 h-4 rounded-full bg-[#E8B84A]/20 blur-[2px] animate-pulse" />
           </div>
        </div>

        <div className="flex-1 flex justify-center relative z-10">
           <span className="text-[10.5px] text-white/70 font-bold tracking-[0.15em] uppercase">
              Operational infrastructure for institutional delivery.
           </span>
        </div>
        
        <div className="flex items-center gap-5 relative z-10">
          <button className="flex items-center gap-1.5 group/btn px-3 h-[24px] rounded-lg bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] hover:border-[#E8B84A]/30 transition-all duration-500 shadow-[0_0_15px_rgba(232,184,74,0.05)]">
             <span className="text-[8.5px] font-black text-[#E8B84A] uppercase tracking-[0.12em]">Explore Infrastructure</span>
             <ArrowRightIcon className="w-2.5 h-2.5 text-[#E8B84A] group-hover/btn:translate-x-0.5 transition-transform" />
          </button>
          
          <div className="h-3 w-px bg-white/10" />
          
          <button onClick={() => setIsVisible(false)} className="text-white/20 hover:text-white transition-colors duration-500 p-1 group/close">
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
