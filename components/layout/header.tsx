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
  ArrowRight
} from "lucide-react";

const navigation = [
  {
    name: "Features",
    href: "#",
    dropdown: [
      { name: "Curriculum Architect", desc: "Design multi-layered programmes with ease.", icon: Zap },
      { name: "Precision Delivery", desc: "Automate sessions and participant tracking.", icon: Shield },
      { name: "Operational Insights", desc: "Real-time analytics for global scale.", icon: BarChart3 }
    ]
  },
  {
    name: "Solutions",
    href: "#",
    dropdown: [
      { name: "Enterprise Onboarding", desc: "Structure for large-scale employee growth.", icon: Users },
      { name: "Global Training", desc: "Manage distributed cohorts across regions.", icon: Globe },
      { name: "Data Intelligence", desc: "Centralized governance for all operational data.", icon: Database }
    ]
  },
  {
    name: "Resources",
    href: "#",
    dropdown: [
      { name: "Documentation", desc: "Full guides on platform architecture.", icon: Database },
      { name: "API Reference", desc: "Build custom integrations with OYEN.", icon: Zap },
      { name: "Success Stories", desc: "How global leaders use OYEN GRID.", icon: Globe }
    ]
  },
  { name: "Pricing", href: "/pricing" }
];

export function Header() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showAnnouncement, setShowAnnouncement] = useState(true);

  // Close dropdown on scroll or click outside
  useEffect(() => {
    const handleScroll = () => setActiveDropdown(null);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-[60] bg-navy/95 backdrop-blur-xl border-b border-white/5 h-20 md:h-24 flex items-center">
        <div className="container-custom flex items-center justify-between">
          
          {/* LEFT: LOGO */}
          <div className="flex items-center gap-12">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-9 h-9 bg-accent rounded-xl flex items-center justify-center shadow-[0_0_15px_rgba(245,179,1,0.3)] group-hover:scale-105 transition-transform">
                <LayoutGrid className="w-5 h-5 text-black" />
              </div>
              <div className="flex flex-col">
                <span className="font-black text-xl tracking-tighter text-white uppercase leading-none">OYEN GRID</span>
                <span className="text-[10px] font-black text-accent tracking-[0.3em] uppercase leading-none mt-1">Infrastructure</span>
              </div>
            </Link>

            {/* CENTER NAVIGATION (DESKTOP) */}
            <nav className="hidden lg:flex items-center gap-8">
              {navigation.map((item) => (
                <div 
                  key={item.name}
                  className="relative h-24 flex items-center"
                  onMouseEnter={() => setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link 
                    href={item.href} 
                    className="flex items-center gap-1 text-sm font-semibold text-white/80 hover:text-white transition-colors"
                  >
                    {item.name}
                    {item.dropdown && (
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === item.name ? "rotate-180" : ""}`} />
                    )}
                  </Link>

                  {/* MEGA MENU DROPDOWN */}
                  <AnimatePresence>
                    {item.dropdown && activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-[100%] left-[-50px] w-[600px] p-8 glass-card bg-navy border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.5)] backdrop-blur-3xl rounded-[24px]"
                      >
                        <div className="grid grid-cols-2 gap-x-8 gap-y-6">
                           {item.dropdown.map((sub) => (
                             <Link key={sub.name} href="#" className="group flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors">
                               <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-accent transition-colors">
                                 <sub.icon className="w-5 h-5 text-accent group-hover:text-black transition-colors" />
                               </div>
                               <div>
                                 <div className="font-bold text-white text-[15px] mb-1 group-hover:text-accent transition-colors">{sub.name}</div>
                                 <div className="text-[13px] text-text-secondary leading-tight">{sub.desc}</div>
                               </div>
                             </Link>
                           ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-4 md:gap-8">
            <div className="hidden md:flex items-center gap-6">
               <button className="text-white/60 hover:text-white transition-colors">
                 <Search className="w-5 h-5" />
               </button>
               <Link href="/login" className="text-sm font-bold text-white/80 hover:text-white">Login</Link>
            </div>
            
            <div className="flex items-center gap-3">
              <Link href="#" className="hidden sm:block btn-zoom-white text-sm">Contact Sales</Link>
              <Link href="#" className="btn-zoom-primary text-sm">Get Started</Link>
            </div>

            <button 
              className="lg:hidden text-white p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* ANNOUNCEMENT BAR (STAYS BELOW HEADER) */}
      <AnimatePresence>
        {showAnnouncement && (
          <motion.div 
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            className="fixed top-20 md:top-24 left-0 right-0 z-[55] px-4 md:px-0"
          >
            <div className="container-custom">
              <div className="bg-gradient-to-r from-navy via-navy-light to-navy border border-white/10 rounded-full h-12 md:h-14 flex items-center justify-between px-6 md:px-10 shadow-2xl backdrop-blur-md">
                <div className="flex items-center gap-3">
                   <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                   <span className="text-white/90 text-[11px] md:text-[13px] font-medium tracking-tight">
                     Structured programme operations with full operational clarity and control.
                   </span>
                </div>
                <div className="flex items-center gap-4">
                   <button className="hidden md:flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white text-[11px] font-bold uppercase tracking-widest px-4 py-2 rounded-full transition-all">
                     Explore Platform <ArrowRight className="w-3 h-3" />
                   </button>
                   <button 
                    onClick={() => setShowAnnouncement(false)}
                    className="text-white/40 hover:text-white transition-colors"
                   >
                     <X className="w-4 h-4" />
                   </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MOBILE DRAWER */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-navy pt-24 px-6"
          >
            <button 
              className="absolute top-8 right-6 text-white"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X className="w-8 h-8" />
            </button>
            <nav className="flex flex-col gap-8 mt-12">
              {navigation.map((item) => (
                <Link 
                  key={item.name} 
                  href={item.href}
                  className="text-3xl font-black text-white tracking-tighter"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-12 border-t border-white/10 flex flex-col gap-4">
                 <Link href="#" className="btn-zoom-white py-4 text-center">Contact Sales</Link>
                 <Link href="#" className="btn-zoom-primary py-4 text-center">Get Started</Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
