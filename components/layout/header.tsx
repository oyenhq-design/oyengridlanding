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
  PieChart,
  Activity
} from "lucide-react";

const navigation = [
  {
    name: "Features",
    dropdown: [
      { name: "Curriculum Architecture", desc: "Design structured multi-layer programmes with control.", icon: LayoutGrid, href: "/features/curriculum-architect" },
      { name: "Precision Delivery", desc: "Automate attendance, scheduling, and coordination.", icon: Zap, href: "/features/precision-delivery" },
      { name: "Operational Insights", desc: "Monitor cohorts, engagement, and metrics in real-time.", icon: BarChart3, href: "/features/operational-insights" },
      { name: "AI Infrastructure", desc: "Automate evaluations and predictive recommendations.", icon: Cpu, href: "/features/ai-infrastructure" },
      { name: "Governance & Security", desc: "Enterprise permissions, audit visibility, and compliance.", icon: Lock, href: "/features/security-governance" },
      { name: "Workflow Automation", desc: "Build automated triggers, reporting, and approvals.", icon: Workflow, href: "/features/workflow-automation" }
    ],
    rightPanel: {
      title: "Platform Intelligence",
      desc: "Operational infrastructure designed for enterprise-scale programme execution.",
      img: "/dropdown-preview.png",
      metrics: [
        { label: "Completion Rate", val: "94.8%" },
        { label: "System Uptime", val: "99.99%" },
        { label: "Engagement", val: "88.2" }
      ]
    }
  },
  {
    name: "Solutions",
    dropdown: [
      { name: "Enterprise Training", desc: "Scale workforce enablement with structured learning.", icon: Users, href: "/solutions/enterprise-onboarding" },
      { name: "Global Programmes", desc: "Coordinate distributed cohorts across regions.", icon: Globe, href: "/solutions/global-programmes" },
      { name: "Bootcamps", desc: "Centralize delivery, reporting, and engagement.", icon: Building2, href: "/solutions/training-operations" },
      { name: "Universities", desc: "Modern infrastructure for academic operations.", icon: GraduationCap, href: "/solutions/higher-education" },
      { name: "Government Programmes", desc: "Manage large-scale impact programmes with visibility.", icon: Shield, href: "/solutions/government-ngos" }
    ],
    rightPanel: {
      title: "Enterprise Solutions",
      desc: "Connect your global teams through a unified operational environment.",
      img: "/team-collab.png",
      metrics: [
        { label: "Global Nodes", val: "12" },
        { label: "Sync Speed", val: "40ms" },
        { label: "Regions", val: "45+" }
      ]
    }
  },
  {
    name: "Resources",
    dropdown: [
      { name: "Documentation", desc: "Implementation guides, APIs, and infrastructure docs.", icon: Database, href: "/resources/documentation" },
      { name: "Case Studies", desc: "Real operational transformation stories from teams.", icon: FileText, href: "/resources/case-studies" },
      { name: "Security Center", desc: "Governance standards, encryption, and compliance.", icon: Lock, href: "/resources/security" },
      { name: "Operational Playbooks", desc: "Best practices for managing programmes at scale.", icon: BookOpen, href: "/resources/playbooks" },
      { name: "AI Research", desc: "Insights into intelligent operational infrastructure.", icon: PieChart, href: "/resources/ai-research" },
      { name: "System Status", desc: "Live monitoring of global infrastructure health.", icon: Activity, href: "/status" }
    ],
    rightPanel: {
      title: "Resource Ecosystem",
      desc: "Access the blueprints for high-fidelity programme infrastructure.",
      img: "/security-analyst.png",
      metrics: [
        { label: "Guides", val: "150+" },
        { label: "Active Nodes", val: "2,400" },
        { label: "Uptime", val: "99.9%" }
      ]
    }
  }
];

export function Header() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [expandedMobileItem, setExpandedMobileItem] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-[100] h-[72px] flex items-center transition-all duration-300 ${
          isScrolled ? "bg-[#050A19]/94 backdrop-blur-xl border-b border-white/5" : "bg-transparent"
        }`}
      >
        <div className="container-custom max-w-[1400px] w-full flex items-center justify-between relative px-8">
          
          {/* LOGO AREA */}
          <div className="flex items-center gap-14">
            <Link href="/" className="flex items-center gap-4 group">
              <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(245,179,1,0.2)] group-hover:scale-105 transition-all">
                <LayoutGrid className="w-5.5 h-5.5 text-black" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-bold text-[20px] tracking-tight text-white uppercase mb-0.5">OYEN GRID</span>
                <span className="text-[9px] font-black text-accent/60 uppercase tracking-[0.3em]">INFRASTRUCTURE</span>
              </div>
            </Link>

            {/* NAVIGATION LINKS (DESKTOP) */}
            <nav className="hidden lg:flex items-center gap-10">
              {navigation.map((item) => (
                <div 
                  key={item.name}
                  className="relative h-[72px] flex items-center"
                  onMouseEnter={() => setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {/* PARENT NAV ITEM: NOT CLICKABLE */}
                  <div className="group flex items-center gap-1.5 text-[15px] font-semibold text-white/60 hover:text-white transition-all cursor-default py-1">
                    {item.name}
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 text-white/20 group-hover:text-accent ${activeDropdown === item.name ? "rotate-180" : ""}`} />
                    
                    {/* Gold Underline Animation */}
                    <motion.div 
                      className="absolute bottom-[22px] left-0 h-[1.5px] bg-accent"
                      initial={{ width: 0 }}
                      animate={{ width: activeDropdown === item.name ? "100%" : 0 }}
                      transition={{ duration: 0.2 }}
                    />
                  </div>

                  {/* PREMIUM DROPDOWN CONTAINER (760px) */}
                  <AnimatePresence>
                    {activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.98 }}
                        transition={{ duration: 0.22, ease: [0.23, 1, 0.32, 1] }}
                        className="absolute top-[62px] left-[-100px] w-[760px] glass-card bg-[#050A19]/96 border-white/10 shadow-[0_40px_80px_rgba(0,0,0,0.8),0_0_20px_rgba(245,179,1,0.03)] backdrop-blur-[24px] rounded-[28px] overflow-hidden"
                      >
                        <div className="flex divide-x divide-white/5">
                          
                          {/* LEFT COLUMN: NAV ITEMS */}
                          <div className="flex-1 p-8 grid grid-cols-1 gap-y-1">
                            {item.dropdown.map((sub) => (
                              <Link 
                                key={sub.name} 
                                href={sub.href} 
                                className="group flex items-start gap-5 p-4 rounded-[18px] hover:bg-white/[0.03] transition-all"
                              >
                                <div className="w-11 h-11 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:border-accent group-hover:shadow-[0_0_15px_rgba(245,179,1,0.4)] transition-all">
                                  <sub.icon className="w-5 h-5 text-accent group-hover:text-black transition-colors" />
                                </div>
                                <div>
                                  <div className="font-bold text-white text-[16px] mb-1 group-hover:text-accent transition-colors flex items-center gap-2">
                                    {sub.name}
                                    <ArrowRight className="w-3.5 h-3.5 text-accent/0 group-hover:text-accent group-hover:translate-x-1 transition-all" />
                                  </div>
                                  <div className="text-[13px] text-white/40 leading-relaxed font-light">{sub.desc}</div>
                                </div>
                              </Link>
                            ))}
                          </div>

                          {/* RIGHT COLUMN: PREVIEW PANEL */}
                          <div className="w-[300px] bg-white/[0.01] p-10 flex flex-col justify-between relative overflow-hidden">
                             {/* Contextual Accent */}
                             <div className="absolute top-[-50px] right-[-50px] w-48 h-48 bg-accent/5 blur-[80px] rounded-full pointer-events-none" />
                             
                             <div>
                                <div className="text-[11px] font-black text-accent uppercase tracking-widest mb-4">{item.rightPanel.title}</div>
                                <div className="text-[15px] font-bold text-white mb-8 leading-relaxed tracking-tight">{item.rightPanel.desc}</div>
                                
                                <div className="relative aspect-[16/11] rounded-2xl overflow-hidden border border-white/5 shadow-2xl mb-10">
                                   <img 
                                     src={item.rightPanel.img} 
                                     alt="Preview" 
                                     className="w-full h-full object-cover opacity-70"
                                   />
                                   <div className="absolute inset-0 bg-gradient-to-t from-[#050A19] via-transparent to-transparent opacity-60" />
                                </div>
                             </div>

                             <div className="space-y-6">
                                {item.rightPanel.metrics.map((metric, i) => (
                                  <div key={i} className="flex items-center justify-between">
                                     <div className="text-[10px] font-black text-white/30 uppercase tracking-widest">{metric.label}</div>
                                     <div className="text-[16px] font-bold text-white tracking-tighter">{metric.val}</div>
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
              
              {/* PRICING LINK (DIRECT) */}
              <Link href="/pricing" className="text-[15px] font-semibold text-white/60 hover:text-white transition-all py-1 relative group">
                Pricing
                <span className="absolute bottom-[-2px] left-0 w-0 h-[1.5px] bg-accent transition-all duration-300 group-hover:w-full" />
              </Link>
            </nav>
          </div>

          {/* ACTIONS */}
          <div className="flex items-center gap-7">
            <div className="hidden xl:flex items-center gap-8">
               <button className="text-white/20 hover:text-white transition-all">
                 <Search className="w-5 h-5" />
               </button>
               <Link href="/login" className="text-[15px] font-bold text-white/40 hover:text-white transition-all">Login</Link>
            </div>
            
            <div className="flex items-center gap-4">
              <Link href="#" className="hidden sm:flex btn-outline h-[42px] items-center px-8 text-[13px] font-black uppercase tracking-widest border-white/10">Contact Sales</Link>
              <Link href="#" className="btn-primary h-[42px] flex items-center px-8 text-[13px] font-black uppercase tracking-widest shadow-[0_4px_20px_rgba(245,179,1,0.2)]">Get Started</Link>
            </div>

            <button 
              className="lg:hidden text-white p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu className="w-7 h-7" />
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
             <button onClick={() => setIsMobileMenuOpen(false)} className="absolute top-8 right-8 text-white/40 hover:text-white">
                <X className="w-9 h-9" />
             </button>

             <nav className="space-y-8 mb-20">
                {navigation.map((item) => (
                  <div key={item.name} className="border-b border-white/5 pb-6">
                     <button 
                       onClick={() => setExpandedMobileItem(expandedMobileItem === item.name ? null : item.name)}
                       className="w-full flex items-center justify-between text-3xl font-bold text-white tracking-tighter"
                     >
                        {item.name}
                        <ChevronDown className={`w-6 h-6 transition-transform ${expandedMobileItem === item.name ? "rotate-180" : ""}`} />
                     </button>
                     
                     <AnimatePresence>
                        {expandedMobileItem === item.name && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden mt-6 space-y-5"
                          >
                             {item.dropdown.map((sub) => (
                               <Link 
                                 key={sub.name} 
                                 href={sub.href}
                                 onClick={() => setIsMobileMenuOpen(false)}
                                 className="flex items-center gap-4 group"
                               >
                                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                                     <sub.icon className="w-5 h-5 text-accent" />
                                  </div>
                                  <span className="text-xl font-medium text-white/60 group-hover:text-white transition-colors">{sub.name}</span>
                               </Link>
                             ))}
                          </motion.div>
                        )}
                     </AnimatePresence>
                  </div>
                ))}
                
                <Link 
                  href="/pricing" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-3xl font-bold text-white tracking-tighter"
                >
                  Pricing
                </Link>
             </nav>

             <div className="mt-auto pb-12 space-y-4">
                <Link href="#" className="w-full btn-outline h-16 flex items-center justify-center text-lg font-black uppercase tracking-widest">Contact Sales</Link>
                <Link href="#" className="w-full btn-primary h-16 flex items-center justify-center text-lg font-black uppercase tracking-widest">Get Started</Link>
             </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
