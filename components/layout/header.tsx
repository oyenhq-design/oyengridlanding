"use client";

import { useState, useEffect } from "react";
import Link from "next/image";
import LinkNext from "next/link";
import { 
  ChevronDown, LayoutGrid, Users, Play, 
  CalendarCheck, ClipboardCheck, MessageSquare, 
  BarChart3, Settings, Search, ArrowUpRight
} from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = ["Platform", "Solutions", "Use Cases", "Resources", "Pricing", "Company"];

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-[100] transition-all duration-500",
      scrolled 
        ? "bg-[#05070B]/90 backdrop-blur-xl h-[88px] border-b border-white/[0.04] shadow-2xl" 
        : "bg-transparent h-[88px] border-transparent"
    )}>
      <div className="container-custom h-full flex items-center justify-between">
        
        {/* LOGO AREA */}
        <LinkNext href="/" className="flex items-center gap-4 group">
          <div className="w-9 h-9 bg-[#F5B942] rounded-lg flex items-center justify-center transition-transform group-hover:rotate-12 shadow-[0_8px_20px_rgba(245,185,66,0.3)]">
             <div className="w-4 h-4 border-2 border-black rotate-45" />
          </div>
          <span className="font-semibold text-white tracking-tight text-[19px]">OYEN GRID</span>
        </LinkNext>

        {/* CENTER NAVIGATION */}
        <nav className="hidden lg:flex items-center gap-10">
          {navItems.map((item) => (
            <LinkNext 
              key={item} 
              href="#" 
              className="text-[15px] font-medium text-white/70 hover:text-white transition-all flex items-center gap-1.5 group"
            >
              {item}
              <ChevronDown className="w-4 h-4 opacity-30 group-hover:opacity-100 transition-opacity" />
            </LinkNext>
          ))}
        </nav>

        {/* RIGHT ACTIONS */}
        <div className="flex items-center gap-5">
          <LinkNext href="/login" className="text-[15px] font-bold text-white/80 hover:text-white transition-colors px-4">
            Login
          </LinkNext>
          <button className="h-[48px] px-8 rounded-xl border border-white/10 bg-white/[0.03] text-[15px] font-bold text-white transition-all hover:bg-white/5">
            Talk to Sales
          </button>
          <button className="h-[48px] px-8 rounded-xl bg-[#F5B942] text-black text-[15px] font-bold transition-all hover:scale-[1.05] hover:shadow-[0_12px_32px_rgba(245,185,66,0.4)]">
            Start Building
          </button>
        </div>
      </div>
    </header>
  );
}

export function DashboardMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, rotateY: 5 }}
      whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-full aspect-[16/10] bg-[#0E1424] rounded-[40px] border border-white/[0.1] shadow-[0_100px_200px_rgba(0,0,0,0.8)] overflow-hidden group perspective-[2000px]"
    >
      {/* Dashboard Sidebar */}
      <div className="absolute top-0 left-0 bottom-0 w-[240px] border-r border-white/5 bg-[#05070B]/50 p-8 hidden xl:flex flex-col">
        <div className="flex items-center gap-3 mb-12">
           <div className="w-6 h-6 bg-[#F5B942] rounded flex items-center justify-center">
              <div className="w-2.5 h-2.5 border border-black rotate-45" />
           </div>
           <span className="font-bold text-white text-[14px]">OYEN GRID</span>
        </div>
        
        <div className="space-y-3">
           {[
             { icon: LayoutGrid, label: "Overview", active: true },
             { icon: Play, label: "Programmes" },
             { icon: Users, label: "Cohorts" },
             { icon: CalendarCheck, label: "Sessions" },
             { icon: ClipboardCheck, label: "Attendance" },
             { icon: MessageSquare, label: "Messages" },
             { icon: BarChart3, label: "Analytics" },
             { icon: Settings, label: "Settings" }
           ].map((item, i) => (
             <div key={i} className={cn(
               "flex items-center gap-4 px-4 py-3 rounded-xl transition-all cursor-pointer",
               item.active ? "bg-[#F5B942]/10 text-[#F5B942] border border-[#F5B942]/20" : "text-white/20 hover:text-white/40"
             )}>
                <item.icon className="w-5 h-5" />
                <span className="text-[13px] font-bold">{item.label}</span>
             </div>
           ))}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="absolute top-0 left-0 xl:left-[240px] right-0 bottom-0 p-10 bg-gradient-to-br from-[#0B1020]/50 to-[#0E1424]">
         {/* Top KPI Row */}
         <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {[
              { label: "Active Programmes", val: "1,240", trend: "+12%" },
              { label: "Total Participants", val: "18.4k", trend: "+8%" },
              { label: "Completion Rate", val: "94.2%", trend: "+3%" },
              { label: "Operational ROI", val: "340%", trend: "+24%" }
            ].map((kpi, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white/[0.03] border border-white/5 group hover:border-[#F5B942]/20 transition-all">
                 <div className="text-[11px] font-black uppercase tracking-widest text-white/20 mb-3">{kpi.label}</div>
                 <div className="flex items-end justify-between">
                    <div className="text-2xl font-bold text-white">{kpi.val}</div>
                    <div className="text-[10px] font-bold text-[#F5B942] bg-[#F5B942]/10 px-2 py-1 rounded-md">{kpi.trend}</div>
                 </div>
              </div>
            ))}
         </div>

         <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Center Left: Progress Chart */}
            <div className="lg:col-span-4 p-8 rounded-3xl bg-white/[0.03] border border-white/5 flex flex-col items-center justify-center">
               <div className="relative w-40 h-40 flex items-center justify-center mb-6">
                  <svg className="w-full h-full -rotate-90">
                    <circle cx="80" cy="80" r="70" fill="transparent" stroke="rgba(255,255,255,0.05)" strokeWidth="12" />
                    <circle cx="80" cy="80" r="70" fill="transparent" stroke="#F5B942" strokeWidth="12" strokeDasharray="440" strokeDashoffset="80" strokeLinecap="round" />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                     <span className="text-4xl font-bold text-white">82%</span>
                     <span className="text-[10px] font-black text-white/20 uppercase tracking-widest mt-1">Delivery</span>
                  </div>
               </div>
               <div className="text-center">
                  <div className="text-[14px] font-bold text-white mb-2 tracking-tight">Programme Performance</div>
                  <div className="text-[11px] text-white/30 font-light">Institutional average vs target</div>
               </div>
            </div>

            {/* Center Right: Bar Chart */}
            <div className="lg:col-span-8 p-8 rounded-3xl bg-white/[0.03] border border-white/5">
               <div className="flex items-center justify-between mb-10">
                  <div className="text-[14px] font-bold text-white">Attendance Analytics</div>
                  <div className="flex gap-2">
                     <div className="w-2 h-2 rounded-full bg-[#F5B942]" />
                     <div className="w-2 h-2 rounded-full bg-white/10" />
                  </div>
               </div>
               <div className="flex items-end justify-between h-40 gap-4">
                  {[40, 70, 45, 90, 65, 85, 55, 75, 50, 95].map((h, i) => (
                    <div key={i} className="flex-1 bg-[#F5B942]/20 rounded-t-lg relative group overflow-hidden" style={{ height: `${h}%` }}>
                       <div className="absolute inset-0 bg-[#F5B942] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                    </div>
                  ))}
               </div>
               <div className="flex justify-between mt-6 px-2">
                  {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map(d => (
                    <span key={d} className="text-[10px] font-bold text-white/10 uppercase tracking-widest">{d}</span>
                  ))}
               </div>
            </div>
         </div>

         {/* Inner Dashboard Glows */}
         <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#F5B942]/5 blur-[120px] rounded-full" />
      </div>

      {/* Surface Overlays */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-[#05070B]/40 to-transparent" />
      <div className="absolute inset-0 pointer-events-none border border-white/10 rounded-[40px]" />
    </motion.div>
  );
}
