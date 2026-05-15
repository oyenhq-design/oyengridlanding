"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { 
  Globe, Shield, Activity, 
  Cpu, Zap, Database, Network, 
  ArrowUpRight, RefreshCw, Radio, 
  Terminal, Layers,
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
    <section ref={containerRef} className="py-[120px] bg-[#020408] relative overflow-hidden border-b border-white/5">
      
      {/* 1. CINEMATIC ATMOSPHERE & DEPTH */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(10,15,30,1)_0%,transparent_100%)]" />
        <div className="absolute inset-0 opacity-[0.03] grayscale" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        
        {/* Atmospheric Glows */}
        <div className="absolute top-1/4 right-0 w-[800px] h-[800px] bg-blue-500/[0.03] blur-[160px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-gold/[0.02] blur-[140px] rounded-full" />
        
        {/* Subtle Scanline Overlay */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 bg-[length:100%_2px,3px_100%]" />
      </div>

      <div className="container-custom relative z-10">
        
        {/* TOP METRICS STRIP: INTEGRATED TELEMETRY BAR */}
        <div className="mb-32 relative group">
           <div className="absolute inset-x-0 bottom-0 h-px bg-white/5" />
           <div className="flex flex-wrap lg:flex-nowrap justify-between gap-px bg-white/[0.02] rounded-xl border border-white/5 backdrop-blur-md overflow-hidden shadow-2xl">
              {topMetrics.map((m, i) => (
                <div key={i} className="flex-1 min-w-[200px] relative p-8 lg:p-10 group hover:bg-white/[0.03] transition-all duration-700">
                   <div className="space-y-1 relative z-10">
                      <div className="flex items-center justify-between mb-3">
                         <div className="flex items-center gap-1.5">
                            <div className="w-1 h-1 rounded-full bg-brand-gold/30 group-hover:bg-brand-gold transition-colors duration-500 shadow-[0_0_8px_#F5B942]" />
                            <span className="text-[8px] font-black text-white/20 uppercase tracking-[0.2em]">{m.id}</span>
                         </div>
                         <Activity className="w-3 h-3 text-white/5 group-hover:text-brand-gold/20 transition-colors" />
                      </div>
                      <div className="text-[32px] lg:text-[42px] font-bold text-white tracking-tighter leading-none group-hover:text-brand-gold transition-colors duration-700">{m.val}</div>
                      <div className="text-[11px] font-black text-white/30 uppercase tracking-[0.35em]">{m.label}</div>
                   </div>
                   {/* Background Shimmer */}
                   <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.02] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </div>
              ))}
           </div>
        </div>

        <div className="grid lg:grid-cols-[0.4fr_0.6fr] gap-16 lg:gap-24 items-center">
          
          {/* LEFT SIDE: INFRASTRUCTURE CONTEXT (40%) */}
          <div className="space-y-16">
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                 <div className="h-[2px] w-12 bg-brand-gold/40" />
                 <span className="text-[12px] font-black text-brand-gold uppercase tracking-[0.5em]">Global Infrastructure</span>
              </div>
              <h2 className="text-[56px] lg:text-[72px] font-bold text-white leading-[0.98] tracking-tighter max-w-[620px]">
                Scalable architecture for <br />
                <span className="text-brand-gold italic font-serif">institutional sync.</span>
              </h2>
              <p className="text-[18px] text-white/40 leading-relaxed max-w-[540px]">
                OYEN GRID operates resilient multi-region infrastructure engineered for real-time institutional coordination, synchronized delivery and operational continuity at scale.
              </p>
            </div>

            {/* Capability Modules: Horizontally Stretched */}
            <div className="space-y-5 max-w-[540px]">
               {[
                 { 
                   t: "Multi-Region Infrastructure", 
                   d: "Low-latency operational deployment across distributed institutional environments.",
                   icon: Globe,
                   status: "CORE_ACTIVE",
                   color: "brand-gold"
                 },
                 { 
                   t: "Institutional Compliance", 
                   d: "SOC2, ISO-ready and enterprise governance architecture for secure programme operations.",
                   icon: Shield,
                   status: "VERIFIED",
                   color: "blue-500"
                 }
               ].map((card, i) => (
                 <motion.div 
                   key={i}
                   whileHover={{ x: 10, y: -2 }}
                   className="relative p-6 rounded-2xl bg-white/[0.01] border border-white/5 backdrop-blur-3xl group cursor-pointer overflow-hidden transition-all duration-700 hover:border-white/10 hover:shadow-[0_0_30px_rgba(245,185,66,0.05)]"
                 >
                    {/* Module Atmospheric Layers */}
                    <div className="absolute top-0 right-0 p-4 opacity-[0.05]">
                       <Terminal className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-gold/20 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-1000" />

                    <div className="flex gap-6 items-center relative z-10">
                       <div className={cn(
                         "w-12 h-12 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-all duration-700",
                         `group-hover:border-${card.color}/30`
                       )}>
                          <card.icon className={cn("w-5 h-5 text-white/20 transition-colors", `group-hover:text-${card.color}`)} />
                       </div>
                       <div className="flex-1 space-y-2">
                          <div className="flex items-center gap-4">
                             <h4 className="text-[17px] font-bold text-white tracking-tight group-hover:text-white transition-colors">{card.t}</h4>
                             <div className="px-2 py-0.5 rounded bg-white/5 border border-white/10 flex items-center gap-1.5">
                                <div className={cn("w-1 h-1 rounded-full animate-pulse", card.color === "brand-gold" ? "bg-brand-gold" : "bg-blue-500")} />
                                <span className="text-[8px] font-black text-white/40 uppercase tracking-[0.2em]">{card.status}</span>
                             </div>
                          </div>
                          <p className="text-[14px] text-white/30 leading-relaxed group-hover:text-white/50 transition-colors">
                             {card.d}
                          </p>
                       </div>
                       <ChevronRight className="w-4 h-4 text-white/10 group-hover:text-brand-gold group-hover:translate-x-1 transition-all" />
                    </div>
                    
                    {/* Telemetry Dots */}
                    <div className="absolute top-2 right-12 flex gap-1">
                       <div className="w-0.5 h-0.5 rounded-full bg-white/10" />
                       <div className="w-0.5 h-0.5 rounded-full bg-white/10" />
                    </div>
                 </motion.div>
               ))}
            </div>
          </div>

          {/* RIGHT SIDE: ADVANCED INFRASTRUCTURE VISUALIZATION (60%) */}
          <div className="relative">
            {/* The Main Operational Display */}
            <div className="relative p-1 rounded-[44px] bg-gradient-to-br from-white/10 via-transparent to-white/5 shadow-[0_50px_140px_rgba(0,0,0,0.85)] overflow-hidden group">
               <div className="relative p-16 lg:p-20 rounded-[43px] bg-[#05070B] border border-white/5 backdrop-blur-3xl overflow-hidden min-h-[680px] flex flex-col">
                  
                  {/* Visual Depth & Grid Layers */}
                  <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, white 0.5px, transparent 0.5px)", backgroundSize: "32px 32px" }} />
                  <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_100%_0%,rgba(245,185,66,0.05)_0%,transparent_50%)]" />
                  
                  {/* Global Node Network & Institutional Orchestration */}
                  <div className="relative flex-1 flex flex-col justify-center">
                     
                     {/* SVG Network routes */}
                     <svg className="absolute inset-0 w-full h-full" viewBox="0 0 600 400">
                        <defs>
                           <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                              <stop offset="0%" stopColor="#F5B942" stopOpacity="0" />
                              <stop offset="50%" stopColor="#F5B942" stopOpacity="0.2" />
                              <stop offset="100%" stopColor="#F5B942" stopOpacity="0" />
                           </linearGradient>
                        </defs>
                        
                        {/* Connecting Orchestration Routes */}
                        {[
                          "M100 200 Q200 100 400 200 T600 200",
                          "M50 300 Q250 380 500 250",
                          "M50 100 Q300 50 550 150",
                          "M200 50 Q300 200 400 350"
                        ].map((path, i) => (
                          <motion.path 
                             key={i}
                             initial={{ pathLength: 0, opacity: 0 }}
                             whileInView={{ pathLength: 1, opacity: 1 }}
                             transition={{ duration: 4, delay: i * 0.5, ease: "easeInOut" }}
                             d={path} 
                             fill="none" stroke="url(#lineGrad)" strokeWidth="0.8" 
                          />
                        ))}

                        {/* Animated Signal Pulses */}
                        {[
                          { d: "M100 200 Q200 100 400 200 T600 200", dur: 4 },
                          { d: "M50 300 Q250 380 500 250", dur: 5 },
                          { d: "M50 100 Q300 50 550 150", dur: 6 }
                        ].map((pulse, i) => (
                           <motion.circle key={i} r="2" fill="#F5B942">
                              <animateMotion 
                                 path={pulse.d} 
                                 dur={`${pulse.dur}s`} 
                                 repeatCount="indefinite" 
                              />
                           </motion.circle>
                        ))}

                        {/* Connected Infrastructure Nodes */}
                        {[
                          { x: 100, y: 200, label: "EU_WEST_01" }, 
                          { x: 400, y: 200, label: "US_EAST_03" }, 
                          { x: 250, y: 120, label: "ASIA_SOUTH_02" }, 
                          { x: 480, y: 300, label: "AFRICA_02" },
                          { x: 550, y: 150, label: "SYNC_CORE" }
                        ].map((node, i) => (
                          <g key={i} className="group/node">
                             <motion.circle 
                                animate={{ r: [4, 8, 4], opacity: [0.1, 0.3, 0.1] }}
                                transition={{ duration: 4, repeat: Infinity, delay: i * 0.8 }}
                                cx={node.x} cy={node.y} r="4" fill="#F5B942" 
                             />
                             <circle cx={node.x} cy={node.y} r="2" fill="#F5B942" className="shadow-[0_0_10px_#F5B942]" />
                             <text 
                                x={node.x + 8} y={node.y + 4} 
                                fill="white" fillOpacity="0.15" 
                                fontSize="6" fontWeight="bold" className="tracking-widest"
                             >
                                {node.label}
                             </text>
                          </g>
                        ))}
                     </svg>

                     {/* Integrated Telemetry Layers */}
                     <div className="grid grid-cols-2 gap-12 relative z-10">
                        <div className="space-y-10">
                           <div className="space-y-3">
                              <div className="flex items-center gap-3">
                                 <Radio className="w-4 h-4 text-brand-gold animate-pulse shadow-[0_0_12px_#F5B942]" />
                                 <span className="text-[11px] font-black text-white/40 uppercase tracking-[0.45em]">Live node monitoring</span>
                              </div>
                              <div className="text-[54px] font-bold text-white tracking-tighter leading-none">STABLE</div>
                              <div className="text-[10px] font-black text-emerald-500 uppercase tracking-widest flex items-center gap-2.5">
                                 <div className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
                                 Orchestration Nominal
                              </div>
                           </div>
                           
                           {/* Infrastructure Health Stats */}
                           <div className="space-y-5 pt-8 border-t border-white/5 max-w-[200px]">
                              {[
                                { l: "Sync Throughput", v: "482.4 GB/s", p: 84 },
                                { l: "Node Stability", v: "99.995%", p: 99 },
                                { l: "Delivery Health", v: "OPTIMAL", p: 92 }
                              ].map((item, i) => (
                                <div key={i} className="space-y-2">
                                   <div className="flex justify-between items-end">
                                      <span className="text-[8px] font-black text-white/20 uppercase tracking-widest">{item.l}</span>
                                      <span className="text-[10px] font-bold text-white/60">{item.v}</span>
                                   </div>
                                   <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                                      <motion.div 
                                         initial={{ width: 0 }}
                                         whileInView={{ width: `${item.p}%` }}
                                         transition={{ duration: 2, delay: i * 0.2 }}
                                         className="h-full bg-brand-gold/30 rounded-full"
                                      />
                                   </div>
                                </div>
                              ))}
                           </div>
                        </div>

                        {/* Floating Operational Micro-Panels */}
                        <div className="flex flex-col justify-end items-end gap-6">
                           <motion.div 
                              whileHover={{ scale: 1.05 }}
                              animate={{ y: [0, -8, 0] }}
                              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                              className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-3xl shadow-[0_30px_60px_rgba(0,0,0,0.5)] group/panel"
                           >
                              <div className="flex items-center gap-3 mb-4">
                                 <RefreshCw className="w-4 h-4 text-brand-gold animate-spin-slow" />
                                 <span className="text-[9px] font-black text-white/50 uppercase tracking-[0.2em]">Institutional Sync</span>
                              </div>
                              <div className="space-y-2">
                                 <div className="text-[28px] font-bold text-white tracking-tighter">0.8ms</div>
                                 <div className="text-[8px] font-black text-white/20 uppercase tracking-widest">Average Node Latency</div>
                              </div>
                              {/* Pulse Line Visual */}
                              <div className="mt-4 h-8 flex items-end gap-1">
                                 {[40, 70, 45, 90, 65, 80, 50].map((h, i) => (
                                   <motion.div 
                                      key={i}
                                      initial={{ height: 0 }}
                                      animate={{ height: `${h}%` }}
                                      transition={{ duration: 1, repeat: Infinity, repeatType: "reverse", delay: i * 0.1 }}
                                      className="w-1 bg-brand-gold/20 rounded-full"
                                   />
                                 ))}
                              </div>
                           </motion.div>

                           <div className="flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 shadow-lg backdrop-blur-xl">
                              <Share2 className="w-3.5 h-3.5 text-blue-500" />
                              <span className="text-[9px] font-black text-white/40 uppercase tracking-[0.2em]">42 Active Orchestration Hubs</span>
                           </div>
                        </div>
                     </div>
                  </div>

                  {/* Bottom Operational Trace */}
                  <div className="mt-12 flex justify-between items-center text-[8px] font-black text-white/10 uppercase tracking-[0.6em] relative z-10 pt-6 border-t border-white/5">
                     <span className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-brand-gold/20" />
                        Infrastructure_L4_Stable
                     </span>
                     <span>SYNC_OPTIMIZED :: {new Date().toLocaleTimeString()}</span>
                     <span className="flex items-center gap-2">
                        <Terminal className="w-3 h-3" />
                        ROOT_ACCESS_GRANTED
                     </span>
                  </div>
               </div>
               
               {/* Surface Scan Light Effect */}
               <motion.div 
                  animate={{ top: ["-10%", "110%"] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                  className="absolute left-0 right-0 h-[20%] bg-gradient-to-b from-transparent via-brand-gold/[0.03] to-transparent pointer-events-none z-20"
               />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
