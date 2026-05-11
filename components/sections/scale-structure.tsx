"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Activity, Globe, Shield, Zap, Database, BarChart3, Users } from "lucide-react";

export function ScaleStructure() {
  return (
    <section className="bg-[#050816] relative overflow-hidden">
      
      {/* METRICS STRIP (Used once per design rules) */}
      <div className="h-[120px] bg-[rgba(8,10,18,0.92)] border-y border-white/5 flex items-center">
         <div className="container-custom w-full">
            <div className="flex justify-between items-center">
               {[
                 { label: "Institutional Reach", val: "12M+" },
                 { label: "Operational Uptime", val: "99.9%" },
                 { label: "Delivery Precision", val: "L-04" },
                 { label: "Secure Cohorts", val: "480k" }
               ].map((m, i) => (
                 <div key={i} className="text-center">
                    <div className="text-[44px] font-bold text-white tracking-tighter leading-none mb-1">{m.val}</div>
                    <div className="text-[12px] font-black text-white/20 uppercase tracking-widest">{m.label}</div>
                 </div>
               ))}
            </div>
         </div>
      </div>

      <div className="section-gap container-custom">
        <div className="grid lg:grid-cols-2 gap-[72px] items-center">
          
          {/* LEFT: Content */}
          <div>
            <span className="eyebrow">GLOBAL INFRASTRUCTURE</span>
            <h2 className="mb-8 max-w-[520px]">
              Scalable <span className="text-brand-gold">architecture</span> for global sync.
            </h2>
            <p className="text-editorial mb-10 max-w-[520px]">
              Our platform is built on institutional-grade infrastructure, enabling multi-region deployment and real-time synchronization across thousands of cohorts.
            </p>

            <div className="space-y-4">
               {[
                 { t: "Multi-Region Availability", d: "Global edge deployment for low-latency delivery." },
                 { t: "Institutional Compliance", d: "SOC2, ISO 27001, and HIPAA ready infrastructure." }
               ].map((item, i) => (
                 <div key={i} className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 flex items-start gap-5">
                    <Shield className="w-5 h-5 text-brand-gold/60 mt-1" />
                    <div>
                       <h4 className="text-[16px] font-bold text-white mb-1">{item.t}</h4>
                       <p className="text-[12px] text-white/30">{item.d}</p>
                    </div>
                 </div>
               ))}
            </div>
          </div>

          {/* RIGHT: Contained Visual */}
          <div className="flex justify-center lg:justify-end">
             <div className="relative w-full max-w-[560px] h-[420px] rounded-[26px] overflow-hidden border border-white/10 shadow-2xl bg-[#0A0C12] p-8 flex flex-col justify-between">
                <div className="flex justify-between items-center">
                   <div className="flex items-center gap-3">
                      <Globe className="w-4 h-4 text-brand-gold" />
                      <span className="text-[10px] font-black uppercase tracking-widest text-white/40">Network Status</span>
                   </div>
                   <div className="px-2 py-1 rounded bg-brand-gold/10 border border-brand-gold/20 text-[8px] font-black text-brand-gold uppercase tracking-widest">Stable</div>
                </div>

                <div className="space-y-6">
                   {[65, 42, 88].map((w, i) => (
                     <div key={i} className="space-y-2">
                        <div className="flex justify-between text-[9px] font-black text-white/20 uppercase tracking-widest">
                           <span>Node_OS_0{i+1}</span>
                           <span>{w}%</span>
                        </div>
                        <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                           <div className="h-full bg-brand-gold/40" style={{ width: `${w}%` }} />
                        </div>
                     </div>
                   ))}
                </div>

                <div className="pt-6 border-t border-white/5">
                   <div className="text-[10px] font-black text-white/20 uppercase tracking-widest mb-2">System Throughput</div>
                   <div className="text-[24px] font-bold text-white tracking-tighter">482.4 GB/s</div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}
