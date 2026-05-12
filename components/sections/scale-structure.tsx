"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { 
  Globe, Server, Shield, Activity, 
  Cpu, Zap, Database, Network, 
  ArrowUpRight, RefreshCw, Radio, 
  Settings, Terminal, Layers,
  ChevronRight, Share2, Activity as PulseIcon
} from "lucide-react";
import { cn } from "@/lib/utils";

const topMetrics = [
  { val: "12M+", label: "Institutional Reach", id: "METRIC_01" },
  { val: "99.9%", label: "Operational Uptime", id: "METRIC_02" },
  { val: "L-04", label: "Delivery Precision", id: "METRIC_03" },
  { val: "480k", label: "Secure Cohorts", id: "METRIC_04" }
];

export function ScaleStructure() {
  const containerRef = useRef(null);
  
  return (
    <section ref={containerRef} className="py-28 bg-[#020408] relative overflow-hidden border-b border-white/5">
      
      {/* 1. CINEMATIC ATMOSPHERE */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(10,15,30,1)_0%,transparent_100%)]" />
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        
        {/* Soft Edge Lighting */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-gold/10 to-transparent" />
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-brand-gold/[0.02] blur-[120px] rounded-full" />
      </div>

      <div className="container-custom relative z-10">
        
        {/* TOP METRICS STRIP: INTEGRATED TELEMETRY BAR */}
        <div className="mb-24 relative">
           <div className="absolute inset-x-0 bottom-0 h-px bg-white/5" />
           <div className="flex flex-wrap lg:flex-nowrap justify-between gap-px bg-white/[0.02] rounded-xl border border-white/5 backdrop-blur-sm overflow-hidden">
              {topMetrics.map((m, i) => (
                <div key={i} className="flex-1 min-w-[200px] relative p-6 group hover:bg-white/[0.03] transition-all duration-700">
                   <div className="space-y-1 relative z-10">
                      <div className="flex items-center gap-1.5 mb-2">
                         <div className="w-1 h-1 rounded-full bg-brand-gold/20 group-hover:bg-brand-gold transition-colors duration-500" />
                         <span className="text-[8px] font-black text-white/20 uppercase tracking-[0.2em]">{m.id}</span>
                      </div>
                      <div className="text-[28px] font-bold text-white tracking-tighter leading-none group-hover:text-brand-gold transition-colors duration-700">{m.val}</div>
                      <div className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em]">{m.label}</div>
                   </div>
                   {i < topMetrics.length - 1 && (
                     <div className="absolute right-0 top-1/2 -translate-y-1/2 h-1/2 w-px bg-white/5" />
                   )}
                </div>
              ))}
           </div>
        </div>

        <div className="grid lg:grid-cols-[0.42fr_0.58fr] gap-16 lg:gap-32 items-center">
          
          {/* LEFT SIDE: INFRASTRUCTURE CONTEXT (42%) */}
          <div className="space-y-14">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                 <div className="h-px w-8 bg-brand-gold/40" />
                 <span className="text-[11px] font-black text-brand-gold uppercase tracking-[0.4em]">Global Infrastructure</span>
              </div>
              <h2 className="text-[48px] lg:text-[56px] font-bold text-white leading-[1.05] tracking-tighter">
                Scalable architecture for <br />
                <span className="text-brand-gold italic font-serif">institutional sync.</span>
              </h2>
              <p className="text-[16px] text-white/50 leading-relaxed max-w-[480px]">
                OYEN GRID operates resilient multi-region infrastructure engineered for real-time institutional coordination, synchronized delivery and operational continuity at scale.
              </p>
            </div>

            {/* Capability Cards: Horizontally Elegant */}
            <div className="space-y-4">
               {[
                 { 
                   t: "Multi-Region Infrastructure", 
                   d: "Low-latency operational deployment across distributed institutional environments.",
                   icon: Globe,
                   status: "ACTIVE_CORE"
                 },
                 { 
                   t: "Institutional Compliance", 
                   d: "SOC2, ISO-ready and enterprise governance architecture for secure programme operations.",
                   icon: Shield,
                   status: "VERIFIED"
                 }
               ].map((card, i) => (
                 <motion.div 
                   key={i}
                   whileHover={{ x: 10 }}
                   className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-xl group cursor-pointer transition-all duration-700 hover:border-brand-gold/20"
                 >
                    <div className="flex gap-6 items-center">
                       <div className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-brand-gold/5 transition-all duration-700">
                          <card.icon className="w-5 h-5 text-white/30 group-hover:text-brand-gold transition-colors" />
                       </div>
                       <div className="space-y-1">
                          <div className="flex items-center gap-3">
                             <h4 className="text-[15px] font-bold text-white/90 group-hover:text-white transition-colors">{card.t}</h4>
                             <div className="px-1.5 py-0.5 rounded bg-white/5 border border-white/10 flex items-center gap-1.5">
                                <div className="w-1 h-1 rounded-full bg-brand-gold animate-pulse" />
                                <span className="text-[7px] font-black text-white/40 uppercase tracking-widest">{card.status}</span>
                             </div>
                          </div>
                          <p className="text-[12px] text-white/30 leading-relaxed max-w-[320px] group-hover:text-white/50 transition-colors">
                             {card.d}
                          </p>
                       </div>
                       <ChevronRight className="w-4 h-4 text-white/10 ml-auto group-hover:text-brand-gold group-hover:translate-x-1 transition-all" />
                    </div>
                 </motion.div>
               ))}
            </div>
          </div>

          {/* RIGHT SIDE: MAIN INFRASTRUCTURE HERO DISPLAY (58%) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* The Main Architectural Panel */}
            <div className="relative p-1 lg:p-1.5 rounded-[40px] bg-gradient-to-br from-white/10 to-transparent shadow-[0_40px_100px_rgba(0,0,0,0.8)] overflow-hidden">
               <div className="relative p-10 lg:p-14 rounded-[38px] bg-[#05070B] border border-white/5 backdrop-blur-3xl overflow-hidden min-h-[520px] flex flex-col">
                  
                  {/* Internal Telemetry Background */}
                  <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, white 0.5px, transparent 0.5px)", backgroundSize: "24px 24px" }} />
                  <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/[0.04] blur-[100px] rounded-full" />
                  
                  {/* Global Node & Synchronisation Visual */}
                  <div className="relative flex-1 flex flex-col justify-center">
                     
                     {/* Network Orchestration System (SVG) */}
                     <svg className="absolute inset-0 w-full h-full opacity-[0.08]" viewBox="0 0 600 400">
                        {/* Connecting Routes */}
                        <motion.path 
                           initial={{ pathLength: 0 }}
                           whileInView={{ pathLength: 1 }}
                           transition={{ duration: 3, delay: 1 }}
                           d="M100 150 Q300 50 500 150 T900 150" 
                           fill="none" stroke="white" strokeWidth="0.5" 
                        />
                        <motion.path 
                           initial={{ pathLength: 0 }}
                           whileInView={{ pathLength: 1 }}
                           transition={{ duration: 4, delay: 1.5 }}
                           d="M50 250 Q300 350 550 250" 
                           fill="none" stroke="white" strokeWidth="0.5" 
                        />
                        {/* Pulsing Global Nodes */}
                        {[
                          { x: 100, y: 150 }, { x: 500, y: 150 }, 
                          { x: 300, y: 200 }, { x: 450, y: 280 }
                        ].map((node, i) => (
                          <g key={i}>
                             <motion.circle 
                                animate={{ r: [3, 6, 3], opacity: [0.2, 0.5, 0.2] }}
                                transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                                cx={node.x} cy={node.y} r="3" fill="#F5B942" 
                             />
                             <circle cx={node.x} cy={node.y} r="1.5" fill="#F5B942" />
                          </g>
                        ))}
                     </svg>

                     {/* Live Operational Throughput Display */}
                     <div className="grid grid-cols-2 gap-10 relative z-10">
                        <div className="space-y-8">
                           <div className="space-y-2">
                              <div className="flex items-center gap-2">
                                 <Radio className="w-3 h-3 text-brand-gold animate-pulse" />
                                 <span className="text-[10px] font-black text-white/30 uppercase tracking-[0.3em]">Global node telemetry</span>
                              </div>
                              <div className="text-[40px] font-bold text-white tracking-tighter">NOMINAL</div>
                           </div>
                           
                           {/* Sync Paths & Latency */}
                           <div className="space-y-4 pt-10 border-t border-white/5">
                              {[
                                { l: "Infrastructure Stability", v: "99.995%", p: 99 },
                                { l: "Avg Node Latency", v: "0.8ms", p: 12 }
                              ].map((item, i) => (
                                <div key={i} className="space-y-2">
                                   <div className="flex justify-between items-end">
                                      <span className="text-[8px] font-black text-white/20 uppercase tracking-widest">{item.l}</span>
                                      <span className="text-[11px] font-bold text-white/80">{item.v}</span>
                                   </div>
                                   <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                                      <motion.div 
                                         initial={{ width: 0 }}
                                         whileInView={{ width: `${item.p}%` }}
                                         transition={{ duration: 2, delay: i * 0.2 }}
                                         className="h-full bg-brand-gold/40 rounded-full"
                                      />
                                   </div>
                                </div>
                              ))}
                           </div>
                        </div>

                        {/* Floating Micro-Panels */}
                        <div className="flex flex-col justify-end items-end gap-6">
                           <motion.div 
                              animate={{ y: [0, -5, 0] }}
                              transition={{ duration: 5, repeat: Infinity }}
                              className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-xl shadow-2xl"
                           >
                              <div className="flex items-center gap-3 mb-3">
                                 <RefreshCw className="w-3.5 h-3.5 text-brand-gold animate-spin-slow" />
                                 <span className="text-[9px] font-black text-white/60 uppercase tracking-widest">REAL-TIME SYNC</span>
                              </div>
                              <div className="text-[20px] font-bold text-white tracking-tighter">482.4 GB/s</div>
                              <div className="text-[7px] font-black text-white/20 uppercase tracking-widest mt-1">Throughput Capacity</div>
                           </motion.div>

                           <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10">
                              <Share2 className="w-3 h-3 text-blue-500" />
                              <span className="text-[8px] font-black text-white/40 uppercase tracking-widest">42 Active Infrastructure Hubs</span>
                           </div>
                        </div>
                     </div>
                  </div>

                  {/* Dynamic Telemetry Labels */}
                  <div className="mt-10 flex justify-between items-center text-[8px] font-black text-white/10 uppercase tracking-[0.5em] relative z-10">
                     <span>Deployment_Alpha_04</span>
                     <span>Sync_Active_Optimised</span>
                     <span>Institutional_Core_Stable</span>
                  </div>
               </div>
               
               {/* Reflection & Parallax Glow */}
               <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.02] to-transparent pointer-events-none" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
