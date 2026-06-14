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
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [pulseClass, setPulseClass] = useState("");
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initial theme setup
    const savedTheme = localStorage.getItem("theme") as "dark" | "light" | null;
    if (savedTheme) {
      setTheme(savedTheme);
      if (savedTheme === "light") {
        document.documentElement.classList.remove("dark");
      } else {
        document.documentElement.classList.add("dark");
      }
    } else {
      document.documentElement.classList.add("dark");
    }

    // Pulse discoverability animation logic
    const pulseSeen = localStorage.getItem("theme-pulse-seen");
    if (!pulseSeen) {
      setPulseClass("theme-toggle-pulse-first");
      const timer = setTimeout(() => {
        setPulseClass("theme-toggle-pulse-idle");
        localStorage.setItem("theme-pulse-seen", "true");
      }, 2500);
      return () => clearTimeout(timer);
    } else {
      setPulseClass("theme-toggle-pulse-idle");
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
    localStorage.setItem("theme-pulse-seen", "true");
    setPulseClass("theme-toggle-pulse-idle");

    if (nextTheme === "light") {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  };

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
        "fixed top-0 left-0 right-0 z-[100] transition-all duration-300 bg-[#050505] border-b border-white/5 h-[68px] flex items-center",
        scrolled ? "shadow-[0_10px_30px_rgba(0,0,0,0.9)] backdrop-blur-md bg-[#050505]/95" : ""
      )}
    >
      <div className="max-w-[1280px] w-full mx-auto px-8 flex items-center justify-between">
        
        {/* Logo Wordmark with Infinity SVG */}
        <Link href="/" className="flex items-center gap-2.5 group shrink-0 relative">
          <svg className="w-5.5 h-5.5 text-[#E2B84C] transition-transform duration-300 group-hover:scale-105" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8">
            <path d="M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4Zm0 0c2 2.67 4 4 6 4a4 4 0 1 0 0-8c-2 0-4 1.33-6 4Z" />
          </svg>
          <span className="font-bold text-white text-[13px] tracking-[0.08em] uppercase">OYEN GRID.</span>
        </Link>

        {/* Desktop Navigation Row (Simplified) */}
        <nav className="hidden lg:flex items-center gap-[40px] justify-center">
          {navigationData
            .filter((menu) => ["Operations", "Programmes", "Intelligence"].includes(menu.label))
            .map((menu) => (
              <div 
                key={menu.label} 
                className="relative flex items-center h-[68px]"
                onMouseEnter={() => setActiveMenu(menu.label)}
              >
                <button className={cn(
                  "text-[12px] font-semibold tracking-wide h-8 px-2 flex items-center gap-1 transition-colors duration-200 cursor-pointer",
                  activeMenu === menu.label ? "text-[#E2B84C]" : "text-white/60 hover:text-white"
                )}>
                  <span>{menu.label}</span>
                  <ChevronDown className={cn("w-3 h-3 transition-transform duration-300 opacity-40", activeMenu === menu.label && "rotate-180 text-[#E2B84C] opacity-100")} />
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

        {/* Right utilities aligned cleanly */}
        <div className="flex items-center gap-6">
          <Link 
            href="/enterprise-sales" 
            className="hidden sm:inline-block text-[11px] font-semibold text-white/50 hover:text-white transition-colors tracking-wide"
          >
            Enterprise Sales
          </Link>

          {/* Premium Segmented Pill Theme Switch */}
          <div 
            className={cn(
              "relative flex items-center bg-[#0a1228]/75 backdrop-blur-[12px] border border-white/[0.08] p-0.5 rounded-full h-[28px] w-[112px] select-none transition-all duration-300 theme-toggle-capsule cursor-pointer shadow-md",
              pulseClass
            )}
          >
            {/* Floating modern cursor pointing up-right toward the switch */}
            <div className="absolute left-[12px] bottom-[-18px] pointer-events-none select-none animate-floating-cursor z-30">
              <svg 
                viewBox="0 0 24 24" 
                className="w-[24px] h-[24px] text-[#E2B84C]" 
                fill="currentColor"
              >
                <path d="M4.5 3l7.2 16.2 2.5-6.5 6.5-2.5z" />
              </svg>
            </div>
            {/* Sliding Background Indicator */}
            <motion.div
              animate={{
                x: theme === "light" ? 0 : 54,
              }}
              transition={{ type: "spring", stiffness: 380, damping: 30 }}
              className="absolute top-[2px] bottom-[2px] left-[2px] rounded-full bg-white/[0.06] border border-white/[0.1] w-[54px] pointer-events-none"
            />

            {/* Light Option Button */}
            <button
              onClick={() => {
                if (theme === "dark") toggleTheme();
              }}
              className={cn(
                "flex items-center justify-center gap-1.5 w-1/2 h-full rounded-full text-[9px] font-black uppercase tracking-wider relative z-10 transition-colors duration-250 cursor-pointer",
                theme === "light" ? "text-[#E2B84C]" : "text-white/40 hover:text-white/70"
              )}
            >
              <span className="text-[10px]">☀</span> Light
            </button>

            {/* Dark Option Button */}
            <button
              onClick={() => {
                if (theme === "light") toggleTheme();
              }}
              className={cn(
                "flex items-center justify-center gap-1.5 w-1/2 h-full rounded-full text-[9px] font-black uppercase tracking-wider relative z-10 transition-colors duration-250 cursor-pointer",
                theme === "dark" ? "text-[#E2B84C]" : "text-white/40 hover:text-white/70"
              )}
            >
              <span className="text-[10px]">🌙</span> Dark
            </button>
          </div>

          <Link 
            href="/enterprise" 
            className="hidden md:inline-flex items-center justify-center h-[28px] px-4 rounded-[6px] border border-[#E2B84C] text-[#E2B84C] text-[10.5px] font-black uppercase tracking-wider transition-all duration-300 hover:bg-[#E2B84C]/10 hover:shadow-[0_2px_8px_rgba(226,184,76,0.2)]"
          >
            Book a Demo
          </Link>

          {/* Hamburger Menu (visible on all breakpoints to access solutions/infrastructure etc.) */}
          <button 
            onClick={() => setMobileMenuOpen(true)}
            className="p-1.5 text-white/60 hover:text-white cursor-pointer"
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
            className="absolute top-[68px] left-1/2 -translate-x-1/2 w-[calc(100%-64px)] max-w-[1150px] bg-gradient-to-b from-[#070707]/98 to-[#050505]/99 backdrop-blur-[24px] border border-white/10 rounded-[24px] shadow-[0_40px_100px_rgba(0,0,0,0.85)] p-6 grid grid-cols-2 lg:grid-cols-4 gap-4 z-[110] overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />
            
            {navigationData.find(m => m.label === activeMenu)?.items.map((item, i) => (
              <Link 
                key={item.title} 
                href={item.href}
                onClick={() => setActiveMenu(null)}
                className="p-4 rounded-xl hover:bg-white/[0.03] border border-transparent hover:border-white/5 transition-all duration-500 group relative z-10"
              >
                <div className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/5 flex items-center justify-center mb-3.5 group-hover:bg-[#E2B84C]/10 group-hover:border-[#E2B84C]/30 transition-all duration-500">
                  <item.icon className="w-4.5 h-4.5 text-white/40 group-hover:text-[#E2B84C] transition-colors" />
                </div>
                <h4 className="text-[13px] font-bold text-white mb-1 tracking-tight group-hover:text-[#E2B84C] transition-colors">{item.title}</h4>
                <p className="text-[11px] text-white/30 leading-relaxed font-medium group-hover:text-white/50 transition-colors">{item.desc}</p>
              </Link>
            ))}
            
            <div className="lg:col-span-4 mt-4 pt-5 border-t border-white/5 flex items-center justify-between relative z-10 px-2">
              <div className="flex items-center gap-3">
                 <div className="w-1.5 h-1.5 rounded-full bg-[#E2B84C] animate-pulse" />
                 <span className="text-[10px] font-black text-white/30 uppercase tracking-[0.3em]">
                   {navigationData.find(m => m.label === activeMenu)?.status}
                 </span>
              </div>
              <Link 
                href={navigationData.find(m => m.label === activeMenu)?.href || "#"} 
                onClick={() => setActiveMenu(null)}
                className="flex items-center gap-1.5 group/link text-[11px] font-black text-[#E2B84C] uppercase tracking-widest transition-colors hover:text-[#FFCF68]"
              >
                {navigationData.find(m => m.label === activeMenu)?.cta} →
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MOBILE/SIDEBAR DRAWER MENU */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            className="fixed inset-0 z-[200] bg-[#050505] flex flex-col"
          >
            <div className="h-[68px] flex items-center justify-between px-8 border-b border-white/5">
              <span className="font-bold text-white uppercase tracking-tight text-[15px]">OYEN GRID</span>
              <button onClick={() => setMobileMenuOpen(false)} className="p-2 text-white/40 cursor-pointer">
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-8 space-y-8">
              {navigationData.map((menu) => (
                <div key={menu.label} className="space-y-4">
                  <h3 className="text-[11px] font-black text-[#E2B84C] uppercase tracking-[0.4em]">{menu.label}</h3>
                  <div className="grid gap-6 pl-2">
                    {menu.items.map((item) => (
                      <Link key={item.title} href={item.href} onClick={() => setMobileMenuOpen(false)} className="flex items-start gap-4 group">
                        <div className="w-7 h-7 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                          <item.icon className="w-3.5 h-3.5 text-white/40" />
                        </div>
                        <div>
                          <div className="text-[13px] font-bold text-white group-hover:text-[#E2B84C] transition-colors">{item.title}</div>
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
    <div className="relative pt-[68px] w-full z-[60]">
      <div className="py-6 bg-[#050505]/90 backdrop-blur-md border-b border-white/5 flex flex-col items-center justify-center gap-2 px-8">
        {/* Announcement text */}
        <span className="text-[13.5px] font-medium text-white/80 text-center tracking-wide leading-relaxed">
          Operational Infrastructure for Institutional Delivery
        </span>

        {/* CTA directly underneath */}
        <Link 
          href="/infrastructure" 
          className="text-[13.5px] font-semibold text-[#E2B84C] hover:text-[#FFCF68] transition-colors duration-200 text-center tracking-wide"
        >
          Explore Infrastructure →
        </Link>
      </div>
    </div>
  );
}
