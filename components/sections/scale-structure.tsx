"use client";

import { motion } from "framer-motion";
import { 
  Globe, Server, Shield, Activity, 
  Cpu, Zap, Database, Network, 
  ArrowUpRight, RefreshCw, Radio, 
  Settings, Terminal, Layers
} from "lucide-react";
import { cn } from "@/lib/utils";

const topMetrics = [
  { val: "12M+", label: "Institutional Reach", id: "METRIC_01" },
  { val: "99.9%", label: "Operational Uptime", id: "METRIC_02" },
  { val: "L-04", label: "Delivery Precision", id: "METRIC_03" },
  { val: "480k", label: "Secure Cohorts", id: "METRIC_04" }
];

const telemetryNodes = [
  { id: "EU-WEST-01", load: 64, status: "NOMINAL", sync: "STABLE" },
  { id: "AFRICA-02", load: 42, status: "ACTIVE", sync: "OPTIMIZED" },
  { id: "US-EAST-03", load: 78, status: "NOMINAL", sync: "STABLE" }
];

export function ScaleStructure() {
  return (
    <section className="py-24 bg-[#020408] relative overflow-hidden border-b border-white/5">
      
      {/* 1. CINEMATIC INFRASTRUCTURE BACKGROUND */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(10,15,30,1)_0%,transparent_100%)]" />
        <div className="absolute inset-0 opacity-[0.03] grayscale" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        
        {/* Ambient Gold Glows */}
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-brand-gold/[0.02] blur-[140px] rounded-full" />
        <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-blue-500/[0.01] blur-[140px] rounded-full" />
      </div>

      <div className="container-custom relative z-10">
        
        {/* TOP METRICS ROW: EMBEDDED TELEMETRY */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 border border-white/5 rounded-2xl overflow-hidden mb-24 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
           {topMetrics.map((m, i) => (
             <div key={i} className="relative bg-[#05070B] p-6 lg:p-8 group hover:bg-white/[0.02] transition-colors duration-500">
                <div className="space-y-1 relative z-10">
                   <div className="flex justify-between items-center mb-2">
                      <span className="text-[8px] font-black text-white/20 uppercase tracking-[0.2em]">{m.id}</span>
                      <div className="w-1 h-1 rounded-full bg-brand-gold/40 group-hover:bg-brand-gold animate-pulse" />
                   </div>
                   <div className="text-[28px] lg:text-[32px] font-bold text-white tracking-tighter leading-none">{m.val}</div>
                   <div className="text-[10px] font-black text-white/30 uppercase tracking-widest">{m.label}</div>
                </div>
                {/* Horizontal Trace Line */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-gold/20 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-1000" />
             </div>
           ))}
        </div>

        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-24 items-center">
          
          {/* LEFT SIDE: INFRASTRUCTURE CONTEXT */}
          <div className="space-y-12">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                 <div className="w-2 h-2 rounded-full bg-brand-gold shadow-[0_0_8px_#F5B942]" />
                 <span className="text-[11px] font-black text-brand-gold uppercase tracking-[0.4em]">Global Infrastructure</span>
              </div>
              <h2 className="text-[44px] lg:text-[52px] font-bold text-white leading-[1.1] tracking-tighter">
                Scalable architecture for <br />
                <span className="text-brand-gold italic font-serif">institutional sync.</span>
              </h2>
              <p className="text-[16px] text-white/50 leading-relaxed max-w-[540px]">
                OYEN GRID operates on resilient multi-region infrastructure engineered for real-time institutional coordination, synchronized delivery and operational continuity at scale.
              </p>
            </div>

            {/* Feature Panels */}
            <div className="grid sm:grid-cols-2 gap-6">
               <motion.div 
                 whileHover={{ y: -5 }}
                 className="p-6 rounded-2xl bg-[#0A0D16]/40 border border-white/5 backdrop-blur-xl group transition-all duration-700 hover:border-brand-gold/30"
               >
                  <div className="flex justify-between items-start mb-6">
                     <div className="p-2.5 rounded-lg bg-brand-gold/10 border border-brand-gold/20">
                        <Globe className="w-5 h-5 text-brand-gold" />
                     </div>
                     <div className="px-1.5 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 flex items-center gap-1">
                        <div className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-[8px] font-bold text-emerald-500 uppercase">Active</span>
                     </div>
                  </div>
                  <h4 className="text-[15px] font-bold text-white mb-2">Multi-Region Infrastructure</h4>
                  <p className="text-[11px] text-white/40 leading-relaxed group-hover:text-white/60 transition-colors">
                    Low-latency operational deployment across distributed institutional environments.
                  </p>
               </motion.div>

               <motion.div 
                 whileHover={{ y: -5 }}
                 className="p-6 rounded-2xl bg-[#0A0D16]/40 border border-white/5 backdrop-blur-xl group transition-all duration-700 hover:border-blue-500/30"
               >
                  <div className="flex justify-between items-start mb-6">
                     <div className="p-2.5 rounded-lg bg-blue-500/10 border border-blue-500/20">
                        <Shield className="w-5 h-5 text-blue-500" />
                     </div>
                     <div className="p-1 rounded-full bg-blue-500/10 border border-blue-500/20">
                        <Zap className="w-2.5 h-2.5 text-blue-500" />
                     </div>
                  </div>
                  <h4 className="text-[15px] font-bold text-white mb-2">Institutional Compliance</h4>
                  <p className="text-[11px] text-white/40 leading-relaxed group-hover:text-white/60 transition-colors">
                    SOC2, ISO-ready and enterprise governance architecture for secure programme operations.
                  </p>
               </motion.div>
            </div>
          </div>

          {/* RIGHT SIDE: LIVE TELEMETRY CONSOLE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative p-8 rounded-[32px] bg-[#05070B] border border-white/10 shadow-[0_50px_100px_rgba(0,0,0,0.8)] overflow-hidden"
          >
            {/* Console Atmospheric Details */}
            <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "radial-gradient(circle, white 0.5px, transparent 0.5px)", backgroundSize: "20px 20px" }} />
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/[0.05] blur-[80px] rounded-full" />
            
            <div className="flex justify-between items-center mb-10 relative z-10">
               <div className="space-y-1">
                  <div className="flex items-center gap-2">
                     <div className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse" />
                     <span className="text-[10px] font-black text-white/90 uppercase tracking-[0.3em]">Global Node Telemetry</span>
                  </div>
                  <div className="text-[8px] font-black text-white/20 uppercase tracking-[0.1em]">Session_ID: OYEN_INFRA_STABLE_0041</div>
               </div>
               <div className="flex gap-4">
                  <Terminal className="w-4 h-4 text-white/20" />
                  <Layers className="w-4 h-4 text-white/20" />
               </div>
            </div>

            {/* Live Infrastructure Streams */}
            <div className="space-y-8 mb-12 relative z-10">
               {telemetryNodes.map((node, i) => (
                 <div key={i} className="space-y-3">
                    <div className="flex justify-between items-end">
                       <div className="space-y-1">
                          <div className="text-[12px] font-bold text-white tracking-tight">{node.id}</div>
                          <div className="text-[7px] font-black text-white/20 uppercase tracking-[0.15em]">{node.sync}</div>
                       </div>
                       <div className="text-right">
                          <div className="text-[12px] font-bold text-brand-gold">{node.load}%</div>
                          <div className="text-[7px] font-black text-emerald-500 uppercase tracking-widest">{node.status}</div>
                       </div>
                    </div>
                    {/* Glowing Infrastructure Stream */}
                    <div className="h-2 bg-white/5 rounded-full overflow-hidden relative group">
                       <motion.div 
                         initial={{ width: 0 }}
                         whileInView={{ width: `${node.load}%` }}
                         transition={{ duration: 2, delay: i * 0.2, ease: [0.16, 1, 0.3, 1] }}
                         className="absolute inset-y-0 left-0 bg-gradient-to-r from-brand-gold/40 to-brand-gold shadow-[0_0_15px_rgba(245,185,66,0.3)] rounded-full"
                       />
                       {/* Animated Scan Movement */}
                       <motion.div 
                         animate={{ left: ["-100%", "200%"] }}
                         transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                         className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                       />
                    </div>
                 </div>
               ))}
            </div>

            {/* Bottom Telemetry Cluster */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/5 relative z-10">
               {[
                 { l: "Sync Throughput", v: "482.4 GB/s", unit: "LIVE" },
                 { l: "Infrastructure Stability", v: "99.995%", unit: "NOMINAL" },
                 { l: "Average Node Latency", v: "0.8ms", unit: "SYNCED" }
               ].map((item, i) => (
                 <div key={i} className="space-y-1">
                    <div className="text-[11px] font-bold text-white tracking-tight">{item.v}</div>
                    <div className="text-[7px] font-black text-white/20 uppercase tracking-widest">{item.l}</div>
                    <div className="flex items-center gap-1">
                       <div className="w-1 h-1 rounded-full bg-blue-500" />
                       <span className="text-[6px] font-black text-blue-500 uppercase tracking-widest">{item.unit}</span>
                    </div>
                 </div>
               ))}
            </div>

            {/* Dashboard Reflection Effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.02] to-transparent pointer-events-none" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
