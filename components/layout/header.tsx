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
        "flex items-center gap-1.5 text-[14px] font-medium tracking-tight transition-colors h-full px-4",
        isOpen ? "text-accent-gold" : "text-white/60 hover:text-white"
      )}>
        {label}
        <ChevronDown className={cn("w-3.5 h-3.5 transition-transform duration-300", isOpen && "rotate-180")} />
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
            <div className="bg-[#07101F]/98 backdrop-blur-[40px] border border-white/10 rounded-[24px] shadow-[0_40px_80px_rgba(0,0,0,0.6)] overflow-hidden p-8">
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
        ? "bg-[#020617]/95 backdrop-blur-[40px] h-[80px] border-white/[0.06] shadow-2xl" 
        : "bg-transparent h-[96px] border-transparent"
    )}>
      <div className="container-custom h-full flex items-center justify-between">
        
        {/* Left: Brand Identity */}
        <div className="flex items-center gap-12 h-full">
          <Link href="/" className="flex items-center gap-4 relative z-10">
            <div className="w-8.5 h-8.5 bg-accent-gold rounded-xl flex items-center justify-center font-black text-[#020617] text-xl">O</div>
            <div className="flex flex-col">
              <span className="font-black text-white tracking-tighter text-[17px] uppercase leading-none">OYEN GRID</span>
              <span className="text-[9px] font-black text-accent-gold/40 uppercase tracking-[0.15em] mt-2 hidden sm:block">Structured Programme OS</span>
            </div>
          </Link>

          {/* Center: Enterprise Navigation */}
          <nav className="hidden lg:flex items-center gap-2 h-full ml-6">
            <NavDropdown label="Platform" sections={platformSections} columns={2} />
            <NavDropdown label="Solutions" sections={solutionsSections} columns={2} />
            <Link href="#" className="text-[14px] font-medium text-white/60 hover:text-white transition-colors h-full flex items-center px-4 tracking-tight">Use Cases</Link>
            <Link href="#" className="text-[14px] font-medium text-white/60 hover:text-white transition-colors h-full flex items-center px-4 tracking-tight">Pricing</Link>
            <NavDropdown label="Resources" sections={resourcesSections} />
          </nav>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-6 relative z-10">
          <button 
            onClick={openSearch}
            className="w-11 h-11 flex items-center justify-center text-white/20 hover:text-white hover:bg-white/5 rounded-full transition-all group border border-transparent hover:border-white/10"
          >
            <Search className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </button>
          
          <div className="flex items-center gap-4 ml-2">
            <Link href="/login" className="text-[14px] font-bold text-white/30 hover:text-white transition-colors px-6 py-2 hidden xl:block uppercase tracking-widest text-[11px]">
              Login
            </Link>
            <button className="h-12 px-7 rounded-2xl border border-white/10 text-[12px] font-bold text-white/60 hover:text-white hover:bg-white/5 transition-all uppercase tracking-widest">
              Talk to Sales
            </button>
            <button className="btn-gold h-12 px-9 text-[12px] font-black uppercase tracking-[0.2em] shadow-[0_20px_40px_rgba(214,166,60,0.2)]">
              Start Building
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export function AnnouncementBar() {
  return (
    <div className="pt-[140px] flex justify-center px-4 relative z-40">
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-[#031022]/40 border border-white/[0.03] rounded-full px-6 py-2.5 flex items-center gap-5 backdrop-blur-2xl shadow-2xl group cursor-pointer hover:border-accent-gold/20 transition-all duration-700"
      >
        <div className="live-pulse" />
        <span className="label-institutional !tracking-[0.3em] opacity-80">Status: Operational</span>
        <span className="h-4 w-px bg-white/5" />
        <span className="text-[12px] text-white/30 font-light tracking-wide group-hover:text-white/50 transition-colors">Infrastructure update v.0.4.2 deployed across all nodes.</span>
        <div className="text-[10px] font-bold text-white group-hover:text-accent-gold transition-colors flex items-center gap-2 ml-4">
          EXPLORE LOGS <ArrowRight className="w-3.5 h-3.5" />
        </div>
      </motion.div>
    </div>
  );
}
