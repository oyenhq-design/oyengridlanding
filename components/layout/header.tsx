"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { 
  ChevronDown, Search, LayoutGrid, Play, Users, 
  MessageSquare, BarChart3, Rocket, Building2, 
  Briefcase, Globe, FileText, LifeBuoy, Zap, 
  Shield, ArrowRight 
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { useSearch } from "@/context/search-context";

interface NavDropdownProps {
  label: string;
  sections: {
    label?: string;
    items: {
      title: string;
      description: string;
      icon: any;
      href: string;
    }[];
  }[];
  columns?: number;
}

function NavDropdown({ label, sections, columns = 1 }: NavDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="relative h-full flex items-center"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className={cn(
        "flex items-center gap-1.5 text-[13px] font-medium tracking-[0.01em] transition-all h-full px-1 group",
        isOpen ? "text-white opacity-100" : "text-white/74 hover:text-white hover:opacity-100"
      )}>
        {label}
        <ChevronDown className={cn(
          "w-3.5 h-3.5 transition-all duration-300 opacity-0 group-hover:opacity-40", 
          isOpen && "rotate-180 opacity-100"
        )} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className={cn(
              "absolute top-[100%] left-1/2 -translate-x-1/2 pt-2 z-[60]",
              columns > 1 ? "w-[680px]" : "w-[300px]"
            )}
          >
            <div className="bg-[#06101F]/98 backdrop-blur-[40px] border border-white/10 rounded-[24px] shadow-[0_40px_80px_rgba(0,0,0,0.6)] overflow-hidden p-8">
              <div className={cn("grid gap-10", columns > 1 ? "grid-cols-2" : "grid-cols-1")}>
                {sections.map((section, idx) => (
                  <div key={idx} className="space-y-6">
                    {section.label && (
                      <div className="text-[10px] font-black text-accent-gold uppercase tracking-[0.3em] opacity-40 px-3">
                        {section.label}
                      </div>
                    )}
                    <div className="space-y-2">
                      {section.items.map((item, i) => (
                        <Link 
                          key={i} 
                          href={item.href}
                          className="flex items-start gap-5 p-4 rounded-xl hover:bg-white/[0.03] transition-all group border border-transparent hover:border-white/5"
                        >
                          <div className="w-11 h-11 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-center text-white/40 group-hover:text-accent-gold group-hover:border-accent-gold/20 group-hover:bg-accent-gold/[0.03] transition-all">
                            <item.icon className="w-5.5 h-5.5" />
                          </div>
                          <div className="flex-1">
                            <div className="text-[15px] font-bold text-white group-hover:text-accent-gold transition-colors mb-1.5">{item.title}</div>
                            <div className="text-[12.5px] text-white/25 font-light leading-relaxed">{item.description}</div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Header() {
  const { openSearch } = useSearch();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const platformSections = [
    {
      label: "Operational Core",
      items: [
        { title: "Programme Management", description: "Orchestrate complex delivery cycles.", icon: LayoutGrid, href: "#" },
        { title: "Session Delivery", description: "Live environmental control and sync.", icon: Play, href: "#" },
        { title: "Attendance & Tracking", description: "Immutable participation logging.", icon: Users, href: "#" }
      ]
    },
    {
      label: "Intelligence Layer",
      items: [
        { title: "Communication", description: "Unified institutional messaging.", icon: MessageSquare, href: "#" },
        { title: "Analytics", description: "High-fidelity operational metrics.", icon: BarChart3, href: "#" }
      ]
    }
  ];

  const solutionsSections = [
    {
      label: "Institutional Roles",
      items: [
        { title: "Bootcamps", description: "Accelerated learning infrastructure.", icon: Rocket, href: "#" },
        { title: "Training Organisations", description: "Scalable commercial delivery.", icon: Building2, href: "#" }
      ]
    },
    {
      label: "Enterprise Logic",
      items: [
        { title: "Corporate Training", description: "Internal institutional upskilling.", icon: Briefcase, href: "#" },
        { title: "NGOs & Academies", description: "Global educational impact.", icon: Globe, href: "#" }
      ]
    }
  ];

  const resourcesSections = [
    {
      items: [
        { title: "Documentation", description: "Full technical architecture guide.", icon: FileText, href: "#" },
        { title: "Help Center", description: "24/7 operational support.", icon: LifeBuoy, href: "#" },
        { title: "Product Updates", description: "Latest system deployments.", icon: Zap, href: "#" },
        { title: "Security", description: "Compliance and data sovereignty.", icon: Shield, href: "#" }
      ]
    }
  ];

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b",
      scrolled 
        ? "bg-[#040816]/96 backdrop-blur-[14px] h-[74px] border-white/[0.06]" 
        : "bg-transparent h-[74px] border-transparent"
    )}>
      <div className="container-custom h-full flex items-center justify-between">
        
        {/* Left: Brand Identity */}
        <div className="flex items-center gap-12 h-full">
          <Link href="/" className="flex items-center gap-4 relative z-10 group">
            <div className="w-[34px] h-[34px] bg-[#D4A63A] rounded-xl flex items-center justify-center font-black text-[#020617] text-lg transition-transform group-hover:scale-105">O</div>
            <div className="flex flex-col justify-center">
              <span className="font-bold text-white tracking-[-0.04em] text-[18px] leading-none">OYEN GRID</span>
              <span className="text-[9px] font-medium text-white/48 uppercase tracking-[0.22em] mt-1.5 hidden sm:block">Institutional Infrastructure</span>
            </div>
          </Link>

          {/* Center: Enterprise Navigation */}
          <nav className="hidden lg:flex items-center gap-[30px] h-full ml-2">
            <NavDropdown label="Platform" sections={platformSections} columns={2} />
            <NavDropdown label="Solutions" sections={solutionsSections} columns={2} />
            <Link href="#" className="text-[13px] font-medium text-white/74 hover:text-white transition-all h-full flex items-center tracking-[0.01em]">Governance</Link>
            <Link href="#" className="text-[13px] font-medium text-white/74 hover:text-white transition-all h-full flex items-center tracking-[0.01em]">Pricing</Link>
            <NavDropdown label="Resources" sections={resourcesSections} />
          </nav>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-6 relative z-10">
          <button 
            onClick={openSearch}
            className="w-9 h-9 flex items-center justify-center bg-white/[0.02] border border-white/[0.05] backdrop-blur-[10px] text-white/20 hover:text-white rounded-[12px] transition-all group"
          >
            <Search className="w-4.5 h-4.5 group-hover:scale-110 transition-transform" />
          </button>
          
          <div className="flex items-center gap-4">
            <Link href="/login" className="text-[13px] font-medium text-white/55 hover:text-white transition-colors px-4 hidden xl:block">
              Login
            </Link>
            <button className="btn-outline">
              Talk to Sales
            </button>
            <button className="btn-gold">
              Initialize
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export function AnnouncementBar() {
  return (
    <div className="pt-[114px] flex justify-center px-4 relative z-40">
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        className="h-[40px] bg-white/[0.025] border border-white/[0.05] rounded-full px-6 flex items-center justify-between gap-12 backdrop-blur-2xl shadow-2xl min-w-[720px]"
      >
        <div className="flex items-center gap-3">
          <div className="w-1.5 h-1.5 rounded-full bg-[#D4A63A] shadow-[0_0_8px_#D4A63A]" />
          <span className="text-[11px] font-medium text-white/55 uppercase tracking-[0.18em]">Infrastructure Status</span>
        </div>

        <span className="text-[13px] text-white/72 font-light tracking-wide">
          Operational synchronization active across institutional delivery nodes.
        </span>

        <div className="flex items-center gap-2 group cursor-pointer">
          <span className="text-[12px] font-semibold text-white/30 group-hover:text-accent-gold transition-colors uppercase tracking-[0.08em]">View Nodes</span>
          <ArrowRight className="w-3.5 h-3.5 text-white/20 group-hover:text-accent-gold transition-colors" />
        </div>
      </motion.div>
    </div>
  );
}
