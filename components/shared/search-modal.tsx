"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { 
  Search, 
  X, 
  ArrowRight, 
  LayoutGrid, 
  Zap, 
  Shield, 
  BarChart3, 
  Users, 
  Globe, 
  Database,
  Cpu,
  Lock,
  Workflow,
  GraduationCap,
  Building2,
  FileText,
  BookOpen,
  PieChart,
  Command,
  Monitor,
  Activity,
  History,
  TrendingUp,
  Sparkles
} from "lucide-react";

interface SearchItem {
  id: string;
  title: string;
  desc: string;
  category: "Features" | "Solutions" | "Resources" | "Pages" | "Actions" | "Documentation";
  icon: any;
  href?: string;
  action?: () => void;
  shortcut?: string;
}

const searchIndex: SearchItem[] = [
  // FEATURES
  { id: "feat-1", title: "Curriculum Architecture", desc: "Design multi-layer programmes.", category: "Features", icon: LayoutGrid, href: "/features/curriculum-architect" },
  { id: "feat-2", title: "Precision Delivery", desc: "Automate sessions and coordination.", category: "Features", icon: Zap, href: "/features/precision-delivery" },
  { id: "feat-3", title: "Operational Insights", desc: "Monitor cohorts and metrics.", category: "Features", icon: BarChart3, href: "/features/operational-insights" },
  { id: "feat-4", title: "AI Infrastructure", desc: "Automated evaluations and insights.", category: "Features", icon: Cpu, href: "/features/ai-infrastructure" },
  { id: "feat-5", title: "Governance & Security", desc: "Enterprise permissions and audit.", category: "Features", icon: Lock, href: "/features/security-governance" },
  { id: "feat-6", title: "Workflow Automation", desc: "Build automated operational triggers.", category: "Features", icon: Workflow, href: "/features/workflow-automation" },
  
  // SOLUTIONS
  { id: "sol-1", title: "Enterprise Training", desc: "Scale workforce enablement.", category: "Solutions", icon: Users, href: "/solutions/enterprise-onboarding" },
  { id: "sol-2", title: "Global Programmes", desc: "Coordinate distributed cohorts.", category: "Solutions", icon: Globe, href: "/solutions/global-programmes" },
  { id: "sol-3", title: "Bootcamps", desc: "Centralize delivery and engagement.", category: "Solutions", icon: Building2, href: "/solutions/training-operations" },
  { id: "sol-4", title: "Higher Education", desc: "Infrastructure for academic ops.", category: "Solutions", icon: GraduationCap, href: "/solutions/higher-education" },
  { id: "sol-5", title: "Government & NGOs", desc: "Large-scale impact visibility.", category: "Solutions", icon: Shield, href: "/solutions/government-ngos" },

  // PAGES
  { id: "page-1", title: "Pricing", desc: "View plans and enterprise options.", category: "Pages", icon: Database, href: "/pricing" },
  { id: "page-2", title: "Security Center", desc: "Compliance and data protection.", category: "Pages", icon: Lock, href: "/resources/security" },
  { id: "page-3", title: "Documentation", desc: "Guides and API reference.", category: "Pages", icon: BookOpen, href: "/resources/documentation" },
  
  // ACTIONS
  { id: "act-1", title: "Contact Strategic Sales", desc: "Speak with our enterprise team.", category: "Actions", icon: Users, shortcut: "S", action: () => console.log("Contacting sales...") },
  { id: "act-2", title: "Request Demo", desc: "Schedule a platform walkthrough.", category: "Actions", icon: Monitor, shortcut: "D", action: () => console.log("Requesting demo...") },
  { id: "act-3", title: "Open AI Assistant", desc: "Ask operational questions.", category: "Actions", icon: Sparkles, shortcut: "A", action: () => window.dispatchEvent(new CustomEvent('open-ai-assistant')) },

  // DOCUMENTATION
  { id: "doc-1", title: "API Reference", desc: "Integrate OYEN GRID into your stack.", category: "Documentation", icon: Database, href: "/resources/documentation" },
  { id: "doc-2", title: "Cohort Setup Guide", desc: "How to launch your first cohort.", category: "Documentation", icon: FileText, href: "/resources/documentation" },
  { id: "doc-3", title: "Security Whitepaper", desc: "Enterprise governance standards.", category: "Documentation", icon: Shield, href: "/resources/security" }
];

export function SearchModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [recentSearches, setRecentSearches] = useState<SearchItem[]>([]);
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  const filteredItems = query.trim() === "" 
    ? [] 
    : searchIndex.filter(item => 
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.desc.toLowerCase().includes(query.toLowerCase()) ||
        item.category.toLowerCase().includes(query.toLowerCase())
      );

  const groups = Array.from(new Set(filteredItems.map(item => item.category)));

  const handleOpen = useCallback(() => {
    setIsOpen(true);
    setQuery("");
    setSelectedIndex(0);
    setTimeout(() => inputRef.current?.focus(), 100);
  }, []);

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  const handleNavigate = (item: SearchItem) => {
    if (item.href) {
      router.push(item.href);
    } else if (item.action) {
      item.action();
    }
    
    // Add to recent
    setRecentSearches(prev => [item, ...prev.filter(i => i.id !== item.id)].slice(0, 5));
    handleClose();
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        isOpen ? handleClose() : handleOpen();
      }

      if (!isOpen) return;

      if (e.key === "Escape") {
        handleClose();
      }

      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex(prev => (prev + 1) % (filteredItems.length || 1));
      }

      if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex(prev => (prev - 1 + (filteredItems.length || 1)) % (filteredItems.length || 1));
      }

      if (e.key === "Enter" && filteredItems[selectedIndex]) {
        handleNavigate(filteredItems[selectedIndex]);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("open-search", handleOpen);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("open-search", handleOpen);
    };
  }, [isOpen, filteredItems, selectedIndex, handleOpen, handleClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex items-start justify-center pt-[15vh] px-4 md:px-0">
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: 10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="relative w-full max-w-[760px] glass-card bg-[#050A19]/98 border-white/10 shadow-[0_50px_100px_rgba(0,0,0,0.8),0_0_40px_rgba(245,179,1,0.05)] backdrop-blur-[32px] rounded-[28px] overflow-hidden"
          >
            {/* Search Input */}
            <div className="relative border-b border-white/10 h-[72px] flex items-center px-8">
               <Search className="w-6 h-6 text-accent mr-5 shrink-0" />
               <input 
                 ref={inputRef}
                 type="text"
                 value={query}
                 onChange={(e) => { setQuery(e.target.value); setSelectedIndex(0); }}
                 placeholder="Search infrastructure, analytics, cohorts, automation..."
                 className="w-full h-full bg-transparent border-none text-white text-[18px] placeholder:text-white/20 focus:ring-0 outline-none"
               />
               <div className="flex items-center gap-3 shrink-0 ml-4">
                  <div className="flex items-center gap-1 px-2 py-1 rounded-md bg-white/5 border border-white/10 text-[10px] font-black text-white/30 uppercase tracking-widest">
                    <Command className="w-2.5 h-2.5" /> K
                  </div>
                  <div className="px-2 py-1 rounded-md bg-white/5 border border-white/10 text-[10px] font-black text-white/30 uppercase tracking-widest">
                    ESC
                  </div>
               </div>
            </div>

            {/* Content Area */}
            <div className="max-h-[60vh] overflow-y-auto scrollbar-hide py-6 px-4">
              {query.trim() === "" ? (
                // Initial / Empty State
                <div className="px-4">
                   {recentSearches.length > 0 && (
                     <div className="mb-10">
                        <div className="text-[10px] font-black text-white/20 uppercase tracking-[0.3em] mb-4 flex items-center gap-2">
                           <History className="w-3.5 h-3.5" /> Recent
                        </div>
                        <div className="space-y-1">
                           {recentSearches.map((item) => (
                             <SearchRow 
                               key={item.id} 
                               item={item} 
                               active={false} 
                               onClick={() => handleNavigate(item)} 
                             />
                           ))}
                        </div>
                     </div>
                   )}

                   <div className="mb-8">
                      <div className="text-[10px] font-black text-white/20 uppercase tracking-[0.3em] mb-4 flex items-center gap-2">
                         <TrendingUp className="w-3.5 h-3.5" /> Trending Searches
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {searchIndex.slice(0, 6).map((item) => (
                           <button 
                             key={item.id} 
                             onClick={() => handleNavigate(item)}
                             className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-accent/40 hover:bg-white/[0.04] transition-all text-left group"
                           >
                              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-accent transition-all">
                                 <item.icon className="w-5 h-5 text-accent/50 group-hover:text-black transition-colors" />
                              </div>
                              <div>
                                 <div className="text-[14px] font-bold text-white mb-0.5">{item.title}</div>
                                 <div className="text-[11px] text-white/30">{item.category}</div>
                              </div>
                           </button>
                        ))}
                      </div>
                   </div>
                </div>
              ) : filteredItems.length > 0 ? (
                // Results
                <div className="space-y-6">
                   {groups.map(category => (
                     <div key={category}>
                        <div className="px-4 text-[10px] font-black text-accent/60 uppercase tracking-[0.3em] mb-3">{category}</div>
                        <div className="space-y-1">
                           {filteredItems.filter(i => i.category === category).map((item) => {
                             const realIndex = filteredItems.indexOf(item);
                             return (
                               <SearchRow 
                                 key={item.id} 
                                 item={item} 
                                 active={selectedIndex === realIndex} 
                                 onClick={() => handleNavigate(item)} 
                               />
                             );
                           })}
                        </div>
                     </div>
                   ))}
                </div>
              ) : (
                // No Results
                <div className="py-20 text-center">
                   <div className="w-20 h-20 bg-white/5 rounded-3xl flex items-center justify-center mx-auto mb-8">
                      <Search className="w-8 h-8 text-white/20" />
                   </div>
                   <h3 className="text-xl font-bold text-white mb-2">No operational results found.</h3>
                   <p className="text-white/30 text-[14px] mb-10">Try searching for infrastructure, cohorts, or analytics.</p>
                   <div className="flex flex-wrap justify-center gap-3">
                      {["Analytics", "Automation", "Governance", "AI Assistant"].map(tag => (
                        <button key={tag} onClick={() => setQuery(tag)} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[12px] text-white/60 hover:text-accent hover:border-accent transition-all">
                           {tag}
                        </button>
                      ))}
                   </div>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-white/5 bg-white/[0.02] flex items-center justify-between">
               <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2">
                     <kbd className="px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-[9px] text-white/30 font-bold">↑↓</kbd>
                     <span className="text-[9px] text-white/20 font-bold uppercase tracking-widest">NAVIGATE</span>
                  </div>
                  <div className="flex items-center gap-2">
                     <kbd className="px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-[9px] text-white/30 font-bold">ENTER</kbd>
                     <span className="text-[9px] text-white/20 font-bold uppercase tracking-widest">SELECT</span>
                  </div>
               </div>
               <div className="flex items-center gap-2 text-accent/40">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span className="text-[10px] font-black uppercase tracking-[0.2em]">Operational Intelligence</span>
               </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

function SearchRow({ item, active, onClick }: { item: SearchItem, active: boolean, onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className={`w-full flex items-center gap-5 p-4 rounded-2xl transition-all text-left group relative ${
        active ? "bg-white/[0.06] shadow-[inset_0_0_20px_rgba(245,179,1,0.05)] border-white/10" : "hover:bg-white/[0.03] border-transparent"
      } border`}
    >
       {active && <div className="absolute left-0 top-4 bottom-4 w-1 bg-accent rounded-full shadow-[0_0_15px_#F5B301]" />}
       <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-all ${
         active ? "bg-accent text-black" : "bg-white/5 text-white/40 group-hover:text-accent"
       }`}>
          <item.icon className="w-5 h-5" />
       </div>
       <div className="flex-1">
          <div className="font-bold text-white text-[15px] mb-0.5 flex items-center gap-2">
            {item.title}
            {item.shortcut && (
               <div className="px-1.5 py-0.5 rounded bg-accent/10 border border-accent/20 text-[9px] text-accent font-black">
                 {item.shortcut}
               </div>
            )}
          </div>
          <div className={`text-[12px] leading-tight font-light transition-colors ${active ? "text-white/60" : "text-white/30"}`}>
            {item.desc}
          </div>
       </div>
       <ArrowRight className={`w-4 h-4 transition-all ${active ? "text-accent translate-x-0 opacity-100" : "text-white/10 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0"}`} />
    </button>
  );
}
