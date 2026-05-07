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
  Cpu,
  Lock,
  Workflow,
  GraduationCap,
  Building2,
  FileText,
  BookOpen,
  PieChart,
  Activity
} from "lucide-react";

const navigation = [
  {
    name: "Features",
    dropdown: [
      { name: "Curriculum Architecture", desc: "Design multi-layer programmes.", icon: LayoutGrid, href: "/features/curriculum-architect" },
      { name: "Precision Delivery", desc: "Automate sessions and coordination.", icon: Zap, href: "/features/precision-delivery" },
      { name: "Operational Insights", desc: "Monitor cohorts and metrics.", icon: BarChart3, href: "/features/operational-insights" },
      { name: "AI Infrastructure", desc: "Automated evaluations and insights.", icon: Cpu, href: "/features/ai-infrastructure" },
      { name: "Governance & Security", desc: "Enterprise permissions and audit.", icon: Lock, href: "/features/security-governance" },
      { name: "Workflow Automation", desc: "Build automated operational triggers.", icon: Workflow, href: "/features/workflow-automation" }
    ],
    rightPanel: {
      title: "Intelligence",
      desc: "Infrastructure for enterprise-scale execution.",
      img: "/dropdown-preview.png",
      metrics: [
        { label: "Uptime", val: "99.9%" },
        { label: "Rate", val: "94.8%" }
      ]
    }
  },
  {
    name: "Solutions",
    dropdown: [
      { name: "Enterprise Training", desc: "Scale workforce enablement.", icon: Users, href: "/solutions/enterprise-onboarding" },
      { name: "Global Programmes", desc: "Coordinate distributed cohorts.", icon: Globe, href: "/solutions/global-programmes" },
      { name: "Bootcamps", desc: "Centralize delivery and engagement.", icon: Building2, href: "/solutions/training-operations" },
      { name: "Universities", desc: "Infrastructure for academic ops.", icon: GraduationCap, href: "/solutions/higher-education" },
      { name: "Government Programmes", desc: "Large-scale impact visibility.", icon: Shield, href: "/solutions/government-ngos" }
    ],
    rightPanel: {
      title: "Solutions",
      desc: "Unified global operational environment.",
      img: "/team-collab.png",
      metrics: [
        { label: "Nodes", val: "12" },
        { label: "Regions", val: "45+" }
      ]
    }
  },
  {
    name: "Resources",
    dropdown: [
      { name: "Documentation", desc: "Implementation and API guides.", icon: Database, href: "/resources/documentation" },
      { name: "Case Studies", desc: "Transformation stories from teams.", icon: FileText, href: "/resources/case-studies" },
      { name: "Security Center", desc: "Governance and encryption.", icon: Lock, href: "/resources/security" },
      { name: "Operational Playbooks", desc: "Best practices for scale.", icon: BookOpen, href: "/resources/playbooks" },
      { name: "AI Research", desc: "Intelligent infrastructure insights.", icon: PieChart, href: "/resources/ai-research" },
      { name: "System Status", desc: "Infrastructure health monitoring.", icon: Activity, href: "/status" }
    ],
    rightPanel: {
      title: "Ecosystem",
      desc: "Blueprints for programme infra.",
      img: "/security-analyst.png",
      metrics: [
        { label: "Guides", val: "150+" },
        { label: "Nodes", val: "2,400" }
      ]
    }
  }
];

export function Header() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [expandedMobileItem, setExpandedMobileItem] = useState<string | null>(null);
  const [showAnnouncement, setShowAnnouncement] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-[100] h-[72px] flex items-center transition-all duration-300 ${
          isScrolled ? "bg-[#050A19]/96 backdrop-blur-xl border-b border-white/5" : "bg-transparent"
        }`}
      >
        <div className="container-custom max-w-[1400px] w-full flex items-center justify-between relative px-8">
          
          {/* LOGO AREA */}
          <div className="flex items-center gap-12">
            <Link href="/" className="flex items-center gap-4 group">
              <div className="w-9 h-9 bg-accent rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(245,179,1,0.2)] group-hover:scale-105 transition-all">
                <LayoutGrid className="w-5 h-5 text-black" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-bold text-[18px] tracking-tight text-white uppercase mb-0.5">OYEN GRID</span>
                <span className="text-[8px] font-black text-accent/50 uppercase tracking-[0.3em]">INFRASTRUCTURE</span>
              </div>
            </Link>

            {/* NAVIGATION LINKS (DESKTOP) */}
            <nav className="hidden lg:flex items-center gap-8">
              {navigation.map((item) => (
                <div 
                  key={item.name}
                  className="relative h-[72px] flex items-center"
                  onMouseEnter={() => setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <div className="group flex items-center gap-1 text-[14px] font-semibold text-white/50 hover:text-white transition-all cursor-default py-1">
                    {item.name}
                    <ChevronDown className={`w-3 h-3 transition-transform duration-200 text-white/20 group-hover:text-accent ${activeDropdown === item.name ? "rotate-180" : ""}`} />
                    
                    <motion.div 
                      className="absolute bottom-[24px] left-0 h-[1.5px] bg-accent"
                      initial={{ width: 0 }}
                      animate={{ width: activeDropdown === item.name ? "100%" : 0 }}
                      transition={{ duration: 0.15 }}
                    />
                  </div>

                  {/* COMPACT MEGA MENU (640px) */}
                  <AnimatePresence>
                    {activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 6 }}
                        transition={{ duration: 0.18, ease: "easeOut" }}
                        className="absolute top-[60px] left-[-40px] w-[640px] glass-card bg-[#050A19]/98 border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.7)] backdrop-blur-[24px] rounded-[22px] overflow-hidden"
                      >
                        <div className="flex divide-x divide-white/5">
                          
                          {/* LEFT COLUMN: 60% */}
                          <div className="flex-[0.6] p-5 grid grid-cols-1 gap-y-1">
                            {item.dropdown.map((sub) => (
                              <Link 
                                key={sub.name} 
                                href={sub.href} 
                                className="group flex items-start gap-4 p-3 rounded-[14px] hover:bg-white/[0.03] transition-all"
                              >
                                <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center shrink-0 group-hover:bg-accent transition-all">
                                  <sub.icon className="w-4.5 h-4.5 text-accent group-hover:text-black transition-colors" />
                                </div>
                                <div className="pt-0.5">
                                  <div className="font-semibold text-white text-[15px] mb-0.5 group-hover:text-accent transition-colors flex items-center gap-1.5">
                                    {sub.name}
                                    <ArrowRight className="w-3 h-3 text-accent/0 group-hover:text-accent group-hover:translate-x-1 transition-all" />
                                  </div>
                                  <div className="text-[12px] text-white/40 leading-tight font-light">{sub.desc}</div>
                                </div>
                              </Link>
                            ))}
                          </div>

                          {/* RIGHT COLUMN: 40% (FEATURED) */}
                          <div className="flex-[0.4] bg-white/[0.01] p-6 flex flex-col justify-between">
                             <div>
                                <div className="text-[10px] font-black text-accent/60 uppercase tracking-widest mb-3">{item.rightPanel.title}</div>
                                <div className="text-[14px] font-bold text-white mb-5 leading-snug tracking-tight">{item.rightPanel.desc}</div>
                                
                                <div className="relative aspect-[16/9] rounded-xl overflow-hidden border border-white/5 shadow-2xl mb-6">
                                   <img 
                                     src={item.rightPanel.img} 
                                     alt="Preview" 
                                     className="w-full h-full object-cover opacity-60"
                                   />
                                   <div className="absolute inset-0 bg-gradient-to-t from-[#050A19] to-transparent opacity-40" />
                                </div>
                             </div>

                             <div className="flex gap-6">
                                {item.rightPanel.metrics.map((metric, i) => (
                                  <div key={i}>
                                     <div className="text-[15px] font-bold text-white tracking-tighter leading-none">{metric.val}</div>
                                     <div className="text-[9px] font-black text-white/20 uppercase tracking-widest mt-1">{metric.label}</div>
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
              
              <Link href="/pricing" className="text-[14px] font-semibold text-white/40 hover:text-white transition-all py-1 relative group">
                Pricing
                <span className="absolute bottom-[-1px] left-0 w-0 h-[1.5px] bg-accent transition-all duration-300 group-hover:w-full" />
              </Link>
            </nav>
          </div>

          {/* ACTIONS */}
          <div className="flex items-center gap-6">
            <div className="hidden xl:flex items-center gap-7">
               <button className="text-white/20 hover:text-white transition-all">
                 <Search className="w-4.5 h-4.5" />
               </button>
               <Link href="/login" className="text-[14px] font-bold text-white/30 hover:text-white transition-all">Login</Link>
            </div>
            
            <div className="flex items-center gap-3">
              <Link href="#" className="hidden sm:flex btn-outline h-[38px] items-center px-6 text-[12px] font-black uppercase tracking-widest border-white/10">Contact Sales</Link>
              <Link href="#" className="btn-primary h-[38px] flex items-center px-6 text-[12px] font-black uppercase tracking-widest">Get Started</Link>
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

      {/* MOBILE NAVIGATION (ACCORDIONS) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            className="fixed inset-0 z-[110] bg-[#050A19] flex flex-col pt-24 px-8 overflow-y-auto"
          >
             <button onClick={() => setIsMobileMenuOpen(false)} className="absolute top-8 right-8 text-white/40">
                <X className="w-8 h-8" />
             </button>

             <nav className="space-y-6 mb-16">
                {navigation.map((item) => (
                  <div key={item.name} className="border-b border-white/5 pb-4">
                     <button 
                       onClick={() => setExpandedMobileItem(expandedMobileItem === item.name ? null : item.name)}
                       className="w-full flex items-center justify-between text-2xl font-bold text-white tracking-tighter"
                     >
                        {item.name}
                        <ChevronDown className={`w-5 h-5 transition-transform ${expandedMobileItem === item.name ? "rotate-180" : ""}`} />
                     </button>
                     
                     <AnimatePresence>
                        {expandedMobileItem === item.name && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden mt-4 space-y-4"
                          >
                             {item.dropdown.map((sub) => (
                               <Link 
                                 key={sub.name} 
                                 href={sub.href}
                                 onClick={() => setIsMobileMenuOpen(false)}
                                 className="flex items-center gap-3 group"
                               >
                                  <div className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center">
                                     <sub.icon className="w-4 h-4 text-accent" />
                                  </div>
                                  <span className="text-lg font-medium text-white/50 group-hover:text-white transition-colors">{sub.name}</span>
                               </Link>
                             ))}
                          </motion.div>
                        )}
                     </AnimatePresence>
                  </div>
                ))}
                
                <Link href="/pricing" onClick={() => setIsMobileMenuOpen(false)} className="block text-2xl font-bold text-white tracking-tighter">Pricing</Link>
             </nav>

             <div className="mt-auto pb-12 space-y-3">
                <Link href="#" className="w-full btn-outline h-14 flex items-center justify-center text-md font-black uppercase tracking-widest">Contact Sales</Link>
                <Link href="#" className="w-full btn-primary h-14 flex items-center justify-center text-md font-black uppercase tracking-widest">Get Started</Link>
             </div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* PREMIUM ENTERPRISE ANNOUNCEMENT BAR */}
      <AnimatePresence>
        {showAnnouncement && (
          <motion.div 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="fixed top-[84px] left-0 right-0 z-[55] px-8"
          >
            <div className="max-w-[1400px] mx-auto flex justify-center">
              <div className="h-[52px] rounded-full bg-[rgba(255,196,0,0.06)] border border-[rgba(255,196,0,0.18)] flex items-center justify-between px-6 shadow-[0_10px_30px_rgba(0,0,0,0.4),0_0_20px_rgba(245,179,1,0.02)] backdrop-blur-md relative overflow-hidden group">
                
                {/* Shimmer Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.03] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                <div className="flex items-center gap-4 relative z-10">
                   <div className="w-2 h-2 rounded-full bg-accent animate-pulse shadow-[0_0_10px_#F5B301]" />
                   <div className="flex items-center gap-4">
                      <span className="text-accent text-[12px] font-black tracking-[0.25em] uppercase whitespace-nowrap">
                        PROGRAMME INFRASTRUCTURE FOR SCALE
                      </span>
                      <div className="hidden md:block w-px h-4 bg-accent/20" />
                      <span className="hidden lg:block text-white/40 text-[12px] font-medium leading-none">
                        Run complex learning operations with absolute structural integrity.
                      </span>
                   </div>
                </div>

                <div className="flex items-center gap-4 relative z-10">
                   <button className="flex items-center gap-2 bg-accent/10 hover:bg-accent/20 text-accent text-[11px] font-black uppercase tracking-[0.15em] px-5 py-2 rounded-full transition-all border border-accent/20 shadow-lg group/btn">
                     EXPLORE PLATFORM <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                   </button>
                   <button 
                    onClick={() => setShowAnnouncement(false)}
                    className="text-white/20 hover:text-white transition-colors p-1"
                   >
                     <X className="w-4 h-4" />
                   </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
