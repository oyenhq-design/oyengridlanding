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
  TrendingUp,
  Cpu,
  Lock,
  Workflow,
  GraduationCap,
  Building2,
  FileText,
  BookOpen,
  PieChart
} from "lucide-react";

const navigation = [
  {
    name: "Features",
    href: "#",
    dropdown: [
      { name: "Curriculum Architect", desc: "Design structured multi-layer programmes with control.", icon: LayoutGrid },
      { name: "Precision Delivery", desc: "Automate attendance, scheduling, and coordination.", icon: Zap },
      { name: "Operational Insights", desc: "Monitor cohorts, engagement, and metrics in real-time.", icon: BarChart3 },
      { name: "AI Infrastructure", desc: "Automate evaluations and predictive recommendations.", icon: Cpu },
      { name: "Governance & Security", desc: "Enterprise permissions, audit visibility, and compliance.", icon: Lock },
      { name: "Workflow Automation", desc: "Build automated triggers, reporting, and approvals.", icon: Workflow }
    ],
    rightPanel: {
      title: "Platform Intelligence",
      desc: "Operational infrastructure designed for enterprise-scale programme execution.",
      img: "/dropdown-preview.png",
      metrics: [
        { label: "Uptime", val: "99.9%" },
        { label: "Efficiency", val: "+40%" }
      ]
    }
  },
  {
    name: "Solutions",
    href: "#",
    dropdown: [
      { name: "Enterprise Onboarding", desc: "Scale workforce enablement with structured learning.", icon: Users },
      { name: "Global Programmes", desc: "Coordinate distributed cohorts across regions.", icon: Globe },
      { name: "Training Operations", desc: "Centralize delivery, reporting, and engagement.", icon: Building2 },
      { name: "Higher Education", desc: "Modern infrastructure for academic operations.", icon: GraduationCap },
      { name: "Government & NGOs", desc: "Manage large-scale impact programmes with visibility.", icon: Shield }
    ],
    rightPanel: {
      title: "Enterprise Ecosystem",
      desc: "Connect your global teams through a unified operational environment.",
      img: "/team-collab.png",
      metrics: [
        { label: "Active Users", val: "2M+" },
        { label: "Global Reach", val: "45+ Countries" }
      ]
    }
  },
  {
    name: "Resources",
    href: "#",
    dropdown: [
      { name: "Case Studies", desc: "Real operational transformation stories from teams.", icon: FileText },
      { name: "Documentation", desc: "Implementation guides, APIs, and infrastructure docs.", icon: Database },
      { name: "Security Center", desc: "Governance standards, encryption, and compliance.", icon: Lock },
      { name: "Operational Playbooks", desc: "Best practices for managing programmes at scale.", icon: BookOpen },
      { name: "AI Research", desc: "Insights into intelligent operational infrastructure.", icon: PieChart }
    ],
    rightPanel: {
      title: "Knowledge Hub",
      desc: "Access the blueprints for high-fidelity programme infrastructure.",
      img: "/security-analyst.png",
      metrics: [
        { label: "Guides", val: "150+" },
        { label: "Compliance", val: "ISO 27001" }
      ]
    }
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
        <div className="absolute inset-0 z-0 bg-[#050814]/94 backdrop-blur-xl" />
        
        <div className="container-custom max-w-[1400px] w-full flex items-center justify-between relative z-10 px-8">
          
          {/* LOGO AREA */}
          <div className="flex items-center gap-12">
            <Link href="/" className="flex items-center gap-3.5 group">
              <div className="w-9 h-9 bg-accent rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(245,179,1,0.3)] group-hover:scale-105 transition-all">
                <LayoutGrid className="w-5 h-5 text-black" />
              </div>
              <span className="font-bold text-[20px] tracking-tight text-white uppercase leading-none group-hover:text-accent transition-colors">OYEN GRID</span>
            </Link>

            {/* NAVIGATION LINKS */}
            <nav className="hidden lg:flex items-center gap-8">
              {navigation.map((item) => (
                <div 
                  key={item.name}
                  className="relative h-[74px] flex items-center"
                  onMouseEnter={() => setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link 
                    href={item.href} 
                    className="group flex items-center gap-1.5 text-[15px] font-medium text-white/70 hover:text-white transition-all relative py-1"
                  >
                    {item.name}
                    {item.dropdown && (
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 text-white/30 group-hover:text-accent ${activeDropdown === item.name ? "rotate-180" : ""}`} />
                    )}
                    <span className="absolute bottom-[-1px] left-0 w-0 h-[1.5px] bg-accent transition-all duration-300 group-hover:w-full" />
                  </Link>

                  {/* PREMIUM ENTERPRISE MEGA MENU */}
                  <AnimatePresence>
                    {item.dropdown && activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.99 }}
                        animate={{ opacity: 1, y: 10, scale: 1 }}
                        exit={{ opacity: 0, y: 6, scale: 0.99 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute top-[64px] left-[-60px] w-[680px] overflow-hidden glass-card bg-[#050814]/98 border-white/10 shadow-[0_30px_70px_rgba(0,0,0,0.6)] backdrop-blur-[24px] rounded-[22px]"
                      >
                        {/* Internal Lighting */}
                        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_top_right,rgba(245,179,1,0.06),transparent_40%)]" />

                        <div className="relative z-10 flex divide-x divide-white/5">
                          
                          {/* LEFT SIDE: ECOSYSTEM NAV */}
                          <div className="flex-1 p-[24px] grid grid-cols-1 gap-y-1">
                            {item.dropdown.map((sub) => (
                              <Link key={sub.name} href="#" className="group flex items-start gap-4 p-3.5 rounded-[16px] hover:bg-white/[0.03] transition-all">
                                <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:border-accent transition-all">
                                  <sub.icon className="w-4.5 h-4.5 text-accent group-hover:text-black transition-colors" />
                                </div>
                                <div>
                                  <div className="font-semibold text-white text-[15.5px] mb-0.5 group-hover:text-accent transition-colors flex items-center gap-2">
                                    {sub.name}
                                    <ArrowRight className="w-3 h-3 text-accent/0 group-hover:text-accent group-hover:translate-x-1 transition-all" />
                                  </div>
                                  <div className="text-[12.5px] text-white/50 leading-tight font-light max-w-[220px]">{sub.desc}</div>
                                </div>
                              </Link>
                            ))}
                          </div>

                          {/* RIGHT SIDE: FEATURED VISUAL PANEL */}
                          <div className="w-[280px] bg-white/[0.01] p-8 flex flex-col justify-between">
                            <div>
                               <div className="text-[10px] font-black text-accent uppercase tracking-widest mb-3">{item.rightPanel.title}</div>
                               <div className="text-[14px] font-bold text-white mb-6 leading-relaxed tracking-tight">{item.rightPanel.desc}</div>
                               <div className="relative aspect-[16/10] rounded-xl overflow-hidden border border-white/5 mb-8 shadow-2xl group-visual">
                                  <img 
                                    src={item.rightPanel.img} 
                                    alt="Visual Panel" 
                                    className="w-full h-full object-cover opacity-80 group-visual:scale-110 transition-transform duration-1000"
                                  />
                                  <div className="absolute inset-0 bg-gradient-to-t from-[#050814] via-transparent to-transparent opacity-60" />
                               </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                               {item.rightPanel.metrics.map((metric, i) => (
                                 <div key={i}>
                                    <div className="text-[18px] font-bold text-white tracking-tighter">{metric.val}</div>
                                    <div className="text-[9px] font-black text-white/30 uppercase tracking-widest">{metric.label}</div>
                                 </div>
                               ))}
                            </div>
                          </div>

                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>
          </div>

          {/* RIGHT SIDE ACTIONS */}
          <div className="flex items-center gap-6 md:gap-9">
            <div className="hidden xl:flex items-center gap-7">
               <button className="text-white/30 hover:text-white transition-all">
                 <Search className="w-4.5 h-4.5" />
               </button>
               <Link href="/login" className="text-[15px] font-semibold text-white/50 hover:text-white transition-all">Login</Link>
            </div>
            
            <div className="flex items-center gap-3.5">
              <Link href="#" className="hidden sm:block btn-outline h-[40px] flex items-center px-7 text-[13px] font-bold">Contact Sales</Link>
              <Link href="#" className="btn-primary h-[40px] flex items-center px-7 text-[13px] font-bold shadow-[0_4px_15px_rgba(245,179,1,0.2)]">Get Started</Link>
            </div>

            <button 
              className="lg:hidden text-white p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu className="w-6.5 h-6.5" />
            </button>
          </div>
        </div>
      </header>

      {/* ANNOUNCEMENT PILL (INTEGRATED) */}
      <AnimatePresence>
        {showAnnouncement && (
          <motion.div 
            initial={{ y: -60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="fixed top-[74px] left-0 right-0 z-[55] px-6 pt-3"
          >
            <div className="max-w-[1400px] mx-auto flex justify-center">
              <div className="bg-gradient-to-r from-[#1c1400]/95 via-[#5a3c00]/80 to-[#1c1400]/95 border border-accent/20 rounded-full h-11 flex items-center justify-between px-7 md:px-10 shadow-2xl backdrop-blur-md relative overflow-hidden group">
                <div className="flex items-center gap-3.5 relative z-10">
                   <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse shadow-[0_0_8px_#F5B301]" />
                   <span className="text-white text-[10px] md:text-[11px] font-black tracking-[0.25em] uppercase italic">
                     PROGRAMME INFRASTRUCTURE FOR SCALE
                   </span>
                </div>
                <div className="flex items-center gap-5 relative z-10 ml-10">
                   <button className="hidden md:flex items-center gap-3 bg-white/10 hover:bg-white/20 text-white text-[9px] font-black uppercase tracking-[0.2em] px-5 py-1.5 rounded-full transition-all border border-white/5">
                     EXPLORE <ArrowRight className="w-3.5 h-3.5" />
                   </button>
                   <button 
                    onClick={() => setShowAnnouncement(false)}
                    className="text-white/30 hover:text-white transition-colors"
                   >
                     <X className="w-4 h-4" />
                   </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MOBILE DRAWER (REFRESHED) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.4, ease: "circOut" }}
            className="fixed inset-0 z-[100] bg-[#050814] pt-24 px-10"
          >
            <button 
              className="absolute top-8 right-10 text-white"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X className="w-10 h-10" />
            </button>
            <nav className="flex flex-col gap-9 mt-12">
              {navigation.map((item) => (
                <Link 
                  key={item.name} 
                  href={item.href}
                  className="text-4xl font-black text-white tracking-tighter hover:text-accent transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-12 border-t border-white/10 flex flex-col gap-5">
                 <Link href="#" className="btn-outline py-5 text-center text-lg font-bold">Contact Sales</Link>
                 <Link href="#" className="btn-primary py-5 text-center text-lg font-bold">Get Started</Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
