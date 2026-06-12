"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { 
  ChevronDown, X, Menu, Radio, Activity, Target, Zap, Globe, 
  Users, Lock, Layers, Bot, LineChart, Brain, BookOpen, 
  GraduationCap, Building2, Boxes
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

// ─── Navigation Data ────────────────────────────────────────────────────────

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

// Helper components for local scope to avoid missing icon types
function Shield(props: any) {
  return <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>;
}
function Network(props: any) {
  return <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><rect x="16" y="16" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="9" y="2" width="6" height="6" rx="1"/><path d="M12 8v8M12 16H5M12 16h7"/></svg>;
}

// ─── Component ─────────────────────────────────────────────────────────────

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
        "fixed top-0 left-0 right-0 z-[100] transition-all duration-300 bg-[#050B1A] border-b border-white/5",
        scrolled ? "shadow-[0_12px_40px_rgba(0,0,0,0.55)] backdrop-blur-md bg-[#050B1A]/90" : ""
      )}
    >
      {/* ─── ROW 1: TOP UTILITY BAR (Height: 38px) ─── */}
      <div className="border-b border-white/5 h-[38px] flex items-center relative z-20">
        <div className="max-w-[1280px] w-full mx-auto px-8 flex items-center justify-between">
          
          {/* Logo Wordmark on the left */}
          <Link href="/" className="flex items-center gap-2 group relative">
            <div className="w-4 h-4 bg-gradient-to-br from-[#E8B84A] to-[#F0C96A] rounded-[5px] flex items-center justify-center shadow-[0_2px_8px_rgba(232,184,74,0.25)] transition-transform duration-300 group-hover:scale-105">
              <div className="w-1.5 h-1.5 border-[1px] border-black rotate-45" />
            </div>
            <span className="font-black text-white text-[11px] tracking-[0.04em] uppercase">OYEN GRID</span>
          </Link>

          {/* Utility Actions on the right */}
          <div className="flex items-center gap-6">
            <Link 
              href="/enterprise-sales" 
              className="text-[11px] font-semibold text-white/50 hover:text-white transition-colors tracking-wide"
            >
              Enterprise Sales
            </Link>
            <Link 
              href="/pricing" 
              className="inline-flex items-center justify-center h-[24px] px-3.5 rounded-full bg-[#E8B84A] text-black text-[10px] font-black uppercase tracking-wider transition-all duration-300 hover:bg-[#FFCF68] hover:shadow-[0_4px_12px_rgba(232,184,74,0.3)] hover:scale-[1.02] active:scale-[0.98]"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>

      {/* ─── ROW 2: MAIN NAVIGATION BAR (Height: 56px) ─── */}
      <div className="h-[56px] flex items-center relative z-10">
        <div className="max-w-[1280px] w-full mx-auto px-8 flex items-center justify-between lg:justify-center">
          
          {/* Main Navigation Row (Desktop) */}
          <nav className="hidden lg:flex items-center gap-[48px] justify-center w-full">
            {navigationData.map((menu) => (
              <div 
                key={menu.label} 
                className="relative flex items-center h-[56px]"
                onMouseEnter={() => setActiveMenu(menu.label)}
              >
                <button className={cn(
                  "text-[12px] font-semibold tracking-wide h-8 px-2 flex items-center gap-1 transition-colors duration-200",
                  activeMenu === menu.label ? "text-[#E8B84A]" : "text-white/60 hover:text-white"
                )}>
                  <span>{menu.label}</span>
                  <ChevronDown className={cn("w-3 h-3 transition-transform duration-300 opacity-40", activeMenu === menu.label && "rotate-180 text-[#E8B84A] opacity-100")} />
                </button>
              </div>
            ))}
            <Link 
              href="/pricing" 
              className="text-[12px] font-semibold text-white/60 hover:text-white tracking-wide transition-colors duration-200"
            >
              Pricing
            </Link>
          </nav>

          {/* Hamburger Menu (Mobile/Tablet) */}
          <button 
            onClick={() => setMobileMenuOpen(true)}
            className="lg:hidden p-1.5 text-white/60 hover:text-white ml-auto"
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
            className="absolute top-[94px] left-1/2 -translate-x-1/2 w-[calc(100%-64px)] max-w-[1150px] bg-gradient-to-b from-[#040816]/98 to-[#02040A]/99 backdrop-blur-[24px] border border-white/10 rounded-[24px] shadow-[0_40px_100px_rgba(0,0,0,0.85)] p-6 grid grid-cols-2 lg:grid-cols-4 gap-4 z-[110] overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />
            
            {navigationData.find(m => m.label === activeMenu)?.items.map((item, i) => (
              <Link 
                key={item.title} 
                href={item.href}
                onClick={() => setActiveMenu(null)}
                className="p-4 rounded-xl hover:bg-white/[0.03] border border-transparent hover:border-white/5 transition-all duration-500 group relative z-10"
              >
                <div className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/5 flex items-center justify-center mb-3.5 group-hover:bg-[#E8B84A]/10 group-hover:border-[#E8B84A]/30 transition-all duration-500">
                  <item.icon className="w-4.5 h-4.5 text-white/40 group-hover:text-[#E8B84A] transition-colors" />
                </div>
                <h4 className="text-[13px] font-bold text-white mb-1 tracking-tight group-hover:text-[#E8B84A] transition-colors">{item.title}</h4>
                <p className="text-[11px] text-white/30 leading-relaxed font-medium group-hover:text-white/50 transition-colors">{item.desc}</p>
              </Link>
            ))}
            
            <div className="lg:col-span-4 mt-4 pt-5 border-t border-white/5 flex items-center justify-between relative z-10 px-2">
              <div className="flex items-center gap-3">
                 <div className="w-1.5 h-1.5 rounded-full bg-[#E8B84A] animate-pulse" />
                 <span className="text-[10px] font-black text-white/30 uppercase tracking-[0.3em]">
                   {navigationData.find(m => m.label === activeMenu)?.status}
                 </span>
              </div>
              <Link 
                href={navigationData.find(m => m.label === activeMenu)?.href || "#"} 
                onClick={() => setActiveMenu(null)}
                className="flex items-center gap-1.5 group/link text-[11px] font-black text-[#E8B84A] uppercase tracking-widest transition-colors hover:text-[#FFCF68]"
              >
                {navigationData.find(m => m.label === activeMenu)?.cta} →
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

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
              <div className="pt-4 space-y-4">
                <Link href="/pricing" onClick={() => setMobileMenuOpen(false)} className="block text-[13px] font-bold text-white">Pricing</Link>
                <Link href="/enterprise-sales" onClick={() => setMobileMenuOpen(false)} className="block text-[13px] font-bold text-white/60">Enterprise Sales</Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

// ─── ROW 3: ANNOUNCEMENT BAR (Height: 40px base, py-6 padding) ──────────────

export function AnnouncementBar() {
  return (
    <div className="relative pt-[94px] w-full z-[60]">
      <div className="py-6 bg-[#07111F]/90 backdrop-blur-md border-b border-white/5 flex flex-col items-center justify-center gap-2 px-8">
        {/* Announcement text */}
        <span className="text-[13.5px] font-medium text-white/80 text-center tracking-wide leading-relaxed">
          Operational Infrastructure for Institutional Delivery
        </span>

        {/* CTA directly underneath */}
        <Link 
          href="/infrastructure" 
          className="text-[13.5px] font-semibold text-[#E8B84A] hover:text-[#FFCF68] transition-colors duration-200 text-center tracking-wide"
        >
          Explore Infrastructure →
        </Link>
      </div>
    </div>
  );
}
