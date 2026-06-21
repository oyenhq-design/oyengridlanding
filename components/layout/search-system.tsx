"use client";

import { useEffect, useState } from "react";
import { Search, Command, LayoutGrid, Building2, Shield, LifeBuoy, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useSearch } from "@/context/search-context";

export function SearchSystem() {
  const { isOpen, openSearch, closeSearch } = useSearch();
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        openSearch();
      }
      if (e.key === "Escape") closeSearch();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [openSearch, closeSearch]);

  // Complete index of landing page categories/protocols
  const protocols = [
    { title: "Pricing & Plans", category: "Pricing", icon: LayoutGrid, href: "/pricing" },
    { title: "Bootcamps & Training", category: "Solutions", icon: Building2, href: "/solutions/bootcamps-training" },
    { title: "Webinars & Events", category: "Solutions", icon: LayoutGrid, href: "/solutions/webinars-events" },
    { title: "Schools & Academies", category: "Solutions", icon: Building2, href: "/solutions/education" },
    { title: "Corporate Training", category: "Solutions", icon: Shield, href: "/solutions/enterprise" },
    { title: "Program Management", category: "Features", icon: LayoutGrid, href: "/features/programme-management" },
    { title: "Learner Management", category: "Features", icon: Building2, href: "/features/participant-management" },
    { title: "OYEN Live Logs", category: "Features", icon: Shield, href: "/features/oyen-live" },
    { title: "Auto Attendance Sync", category: "Features", icon: Shield, href: "/features/attendance-intelligence" },
    { title: "Assessments & Grading", category: "Features", icon: LayoutGrid, href: "/features/assessments" },
    { title: "Certificates & Verification", category: "Features", icon: Shield, href: "/features/certificates" },
    { title: "Document Library", category: "Features", icon: LifeBuoy, href: "/features/resource-library" },
    { title: "Telemetry & Reports", category: "Features", icon: LayoutGrid, href: "/features/analytics" },
    { title: "AI Coordination Assistant", category: "Features", icon: Shield, href: "/features/ai-assistant" },
    { title: "Help Center Support FAQ", category: "Resources", icon: LifeBuoy, href: "/resources/help" },
    { title: "Platform Case Studies", category: "Resources", icon: LifeBuoy, href: "/resources/case-studies" },
    { title: "Blog & Press Releases", category: "Resources", icon: LifeBuoy, href: "/resources/blog" },
    { title: "Documentation & Guides", category: "Resources", icon: LifeBuoy, href: "/resources/docs" }
  ];

  // Filtering suggested list dynamically based on input query
  const filtered = query
    ? protocols.filter(p =>
        p.title.toLowerCase().includes(query.toLowerCase()) ||
        p.category.toLowerCase().includes(query.toLowerCase())
      )
    : protocols.slice(0, 5); // Default suggested items when empty

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[300] flex items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeSearch}
            className="absolute inset-0 bg-[#040816]/90 backdrop-blur-md"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: 20 }}
            className="relative w-full max-w-[720px] bg-[#080C1A] border border-white/10 rounded-[32px] overflow-hidden shadow-[0_80px_160px_rgba(0,0,0,0.8)]"
          >
            {/* Search Input Bar */}
            <div className="p-8 border-b border-white/5 flex items-center gap-6">
              <Search className="w-6 h-6 text-brand-gold/40" />
              <input
                autoFocus
                type="text"
                placeholder="Search landing page links & infrastructure features..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="flex-1 bg-transparent border-none outline-none text-[20px] text-white placeholder:text-white/10 font-light"
              />
              <div className="flex items-center gap-3 px-4 py-2 bg-white/[0.03] border border-white/10 rounded-xl cursor-pointer" onClick={closeSearch}>
                 <X className="w-3.5 h-3.5 text-white/40 hover:text-white" />
                 <span className="text-[11px] font-black text-white/20">ESC</span>
              </div>
            </div>

            {/* Results Layer */}
            <div className="p-4 max-h-[380px] overflow-y-auto scrollbar-hide">
               <div className="px-6 py-4 text-[10px] font-black text-white/10 uppercase tracking-[0.4em]">
                 {query ? `Search Results (${filtered.length})` : "Suggested Protocols"}
               </div>
               
               <div className="space-y-2">
                  {filtered.length > 0 ? (
                    filtered.map((item, i) => (
                      <a 
                        key={i}
                        href={item.href}
                        onClick={closeSearch}
                        className="w-full flex items-center justify-between p-5 rounded-[20px] hover:bg-white/[0.03] border border-transparent hover:border-white/5 transition-all group block"
                      >
                         <div className="flex items-center gap-6">
                            <div className="w-11 h-11 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-center text-white/20 group-hover:text-brand-gold group-hover:border-brand-gold/20 group-hover:bg-brand-gold/10 transition-all">
                               <item.icon className="w-4.5 h-4.5" />
                            </div>
                            <div className="text-left">
                               <div className="text-[16px] font-bold text-white group-hover:text-brand-gold transition-colors">{item.title}</div>
                               <div className="text-[11px] text-white/20 font-medium uppercase tracking-widest mt-1">{item.category}</div>
                            </div>
                         </div>
                         <div className="text-[10px] font-black text-white/5 uppercase tracking-widest group-hover:text-brand-gold/40 transition-colors">Select Protocol →</div>
                      </a>
                    ))
                  ) : (
                    <div className="p-12 text-center text-white/20 text-sm font-medium">
                      No protocols found matching search query.
                    </div>
                  )}
               </div>
            </div>

            {/* Footer Layer */}
            <div className="p-8 bg-white/[0.02] border-t border-white/5 flex justify-between items-center">
               <div className="flex items-center gap-8">
                  <div className="flex items-center gap-2">
                     <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/40" />
                     <span className="text-[10px] font-bold text-white/10 uppercase tracking-widest">Index Synced</span>
                  </div>
                  <div className="flex items-center gap-2">
                     <div className="w-1.5 h-1.5 rounded-full bg-brand-gold/40" />
                     <span className="text-[10px] font-bold text-white/10 uppercase tracking-widest">Global Node Search</span>
                  </div>
               </div>
               <div className="text-[9px] font-black text-white/5 uppercase tracking-[0.3em]">OYEN GRID // Infrastructure Intelligence</div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
