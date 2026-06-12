"use client";

import { motion } from "framer-motion";
import { Shield, Bot } from "lucide-react";
import { cn } from "@/lib/utils";

const trustCards = [
  {
    title: "Enterprise Governance",
    desc: "Role-based control, audit visibility, and operational oversight.",
    badge: "ACTIVE",
    icon: Shield,
    hoverColor: "hover:border-[#E8B84A]/30",
    glowColor: "group-hover:bg-[#E8B84A]/5",
    badgeColor: "text-[#10b981]",
    badgeBg: "bg-[#10b981]"
  },
  {
    title: "AI Operational Layer",
    desc: "AI-assisted coordination, monitoring, and institutional intelligence.",
    badge: "LIVE",
    icon: Bot,
    hoverColor: "hover:border-[#00e5ff]/30",
    glowColor: "group-hover:bg-[#00e5ff]/5",
    badgeColor: "text-[#00e5ff]",
    badgeBg: "bg-[#00e5ff]"
  }
];

export function EnterpriseTrust() {
  return (
    <section className="relative py-20 bg-[#02040A] theme-light-section enterprise-trust-section overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[800px] h-[600px] bg-[radial-gradient(ellipse,rgba(232,184,74,0.015),transparent_70%)] opacity-60" />
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[1000px] h-[800px] bg-[radial-gradient(ellipse,rgba(4,8,22,0.9),transparent_70%)] opacity-90" />
      </div>

      <div className="max-w-[1200px] mx-auto px-8 relative z-10 flex flex-col gap-16">
        
        {/* Main 2-Column Layout */}
        <div className="flex flex-col lg:flex-row gap-20 lg:gap-32 items-center">
          
          {/* LEFT COLUMN: Headline & Trust Cards */}
          <div className="w-full lg:w-[460px] shrink-0">
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-[40px] md:text-[48px] font-bold text-white leading-[1.05] tracking-tight mb-6 max-w-[400px]">
                Reliable infrastructure for <br />
                <span className="text-[#f4b942] italic font-serif">institutional operations.</span>
              </h2>
              <p className="text-[16px] text-white/50 leading-relaxed font-light max-w-[360px]">
                OYEN GRID provides secure operational infrastructure for synchronized programme delivery, governance, and institutional coordination at scale.
              </p>
            </motion.div>

            <div className="space-y-4">
              {trustCards.map((card, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={cn(
                    "group relative px-6 py-5 rounded-[16px] bg-[#0a0e1c]/45 backdrop-blur-[18px] border border-white/[0.06] transition-all duration-500 overflow-hidden flex items-center gap-5 hover:-translate-y-1",
                    card.hoverColor
                  )}
                >
                  {/* Subtle inner glow on hover */}
                  <div className={cn("absolute inset-0 opacity-0 transition-opacity duration-500 pointer-events-none", card.glowColor)} />
                  
                  <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center shrink-0 relative z-10 transition-colors">
                    <card.icon className="w-4 h-4 text-white/50 group-hover:text-white transition-colors" />
                  </div>
                  
                  <div className="flex-1 relative z-10">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="text-[14px] font-bold text-white/90 group-hover:text-white transition-colors tracking-wide">{card.title}</h4>
                      <div className="flex items-center gap-1.5">
                         <div className={cn("w-1.5 h-1.5 rounded-full shadow-[0_0_8px_currentColor]", card.badgeBg, card.badgeColor)} />
                         <span className={cn("text-[9px] font-black uppercase tracking-widest opacity-80", card.badgeColor)}>{card.badge}</span>
                      </div>
                    </div>
                    <p className="text-[12px] text-white/40 leading-relaxed font-light">
                      {card.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN: Telemetry Panel */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 w-full flex justify-end"
          >
             <div className="keep-dark relative w-full max-w-[500px] rounded-[24px] bg-[#010205] border border-white/[0.06] shadow-[0_40px_100px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col p-10 lg:p-14 group">
                {/* Visuals */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(16,185,129,0.06),transparent_60%)] pointer-events-none" />
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
                
                {/* Main Status */}
                <div className="flex flex-col gap-2 mb-16 relative z-10">
                   <div className="flex items-center gap-4">
                      <div className="relative flex items-center justify-center">
                         <div className="w-4 h-4 rounded-full bg-[#10b981] shadow-[0_0_20px_#10b981] relative z-10" />
                         <div className="absolute inset-0 w-8 h-8 rounded-full bg-[#10b981]/20 animate-ping" />
                      </div>
                      <span className="text-[52px] font-bold text-white tracking-tighter leading-none">STABLE</span>
                   </div>
                </div>

                {/* Metrics */}
                <div className="space-y-8 flex-1 relative z-10">
                   {/* Metric 1 */}
                   <div className="space-y-3">
                     <div className="flex justify-between items-end">
                       <span className="text-[11px] font-medium text-white/40 uppercase tracking-[0.2em]">Uptime</span>
                       <span className="text-[14px] font-bold text-[#10b981]">99.99%</span>
                     </div>
                     <div className="h-1 w-full bg-white/[0.03] rounded-full overflow-hidden">
                       <motion.div className="h-full bg-[#10b981]" initial={{ width: 0 }} whileInView={{ width: "99.99%" }} viewport={{ once: true }} transition={{ duration: 1.5, delay: 0.2 }} />
                     </div>
                   </div>

                   {/* Metric 2 */}
                   <div className="space-y-3">
                     <div className="flex justify-between items-end">
                       <span className="text-[11px] font-medium text-white/40 uppercase tracking-[0.2em]">Avg Latency</span>
                       <span className="text-[14px] font-bold text-[#f4b942]">0.8ms</span>
                     </div>
                     <div className="h-1 w-full bg-white/[0.03] rounded-full overflow-hidden">
                       <motion.div className="h-full bg-[#f4b942]" initial={{ width: 0 }} whileInView={{ width: "15%" }} viewport={{ once: true }} transition={{ duration: 1.5, delay: 0.3 }} />
                     </div>
                   </div>
                   
                   {/* Metric 3 */}
                   <div className="space-y-3">
                     <div className="flex justify-between items-end">
                       <span className="text-[11px] font-medium text-white/40 uppercase tracking-[0.2em]">Active Regions</span>
                       <span className="text-[14px] font-bold text-[#00e5ff]">42</span>
                     </div>
                     <div className="h-1 w-full bg-white/[0.03] rounded-full overflow-hidden">
                       <motion.div className="h-full bg-[#00e5ff]" initial={{ width: 0 }} whileInView={{ width: "42%" }} viewport={{ once: true }} transition={{ duration: 1.5, delay: 0.4 }} />
                     </div>
                   </div>
                </div>

                {/* Subtle animated graph lines at the bottom */}
                <div className="absolute bottom-0 left-0 w-full h-24 opacity-[0.08] pointer-events-none">
                  <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                    <motion.path 
                      d="M0 100 Q 20 80 40 90 T 80 70 T 100 80" 
                      fill="none" 
                      stroke="#10b981" 
                      strokeWidth="1.5"
                      animate={{ d: [
                        "M0 100 Q 20 80 40 90 T 80 70 T 100 80",
                        "M0 100 Q 30 70 50 85 T 90 60 T 100 70",
                        "M0 100 Q 20 80 40 90 T 80 70 T 100 80"
                      ]}}
                      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    />
                  </svg>
                </div>
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
