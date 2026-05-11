"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { 
  Quote, Star, ShieldCheck, Lock, CheckCircle, 
  Database, ArrowRight, Activity, Zap,
  TrendingUp, Fingerprint, Shield, ExternalLink
} from "lucide-react";
import { cn } from "@/lib/utils";

const metrics = [
  { val: "+340%", label: "Operational Efficiency", trend: "Upward Velocity", color: "brand-gold" },
  { val: "-82%", label: "Manual Coordination", trend: "Reduced Friction", color: "emerald-500" },
  { val: "-64%", label: "Reporting Overhead", trend: "Automated Flow", color: "blue-500" },
  { val: "99.9%", label: "System Reliability", trend: "Uptime Verified", color: "brand-gold" }
];

const trustIndicators = [
  { icon: ShieldCheck, text: "Enterprise Security" },
  { icon: Lock, text: "Role-based Access" },
  { icon: CheckCircle, text: "Compliance Ready" },
  { icon: Database, text: "Data Protection" }
];

export function InstitutionalImpact() {
  return (
    <section className="py-28 bg-[#020408] relative overflow-hidden border-b border-white/5">
      
      {/* 1. CINEMATIC BACKGROUND SYSTEM */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Layered Gradients */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(245,185,66,0.03),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(59,130,246,0.02),transparent_50%)]" />
        
        {/* Operational Grid Overlay */}
        <div className="absolute inset-0 opacity-[0.03] grayscale" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        
        {/* Abstract Telemetry Depth Layers */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-brand-gold/[0.01] blur-[150px] rounded-full animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-500/[0.01] blur-[150px] rounded-full" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-24 items-center">
          
          {/* LEFT SIDE (40%): ELEVATED TESTIMONIAL MODULE */}
          <div className="relative">
            {/* Background UI Layers for Depth */}
            <div className="absolute -inset-10 opacity-20 pointer-events-none">
               <div className="absolute top-0 right-0 w-32 h-32 border-t border-r border-brand-gold/20 rounded-tr-3xl" />
               <div className="absolute bottom-0 left-0 w-32 h-32 border-b border-l border-brand-gold/20 rounded-bl-3xl" />
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="relative p-10 rounded-[32px] bg-[#0A0D16]/60 border border-white/10 backdrop-blur-3xl shadow-[0_50px_100px_rgba(0,0,0,0.8)] overflow-hidden transition-all duration-700 group"
            >
               {/* Ambient Reflections */}
               <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/[0.05] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
               <div className="absolute -top-24 -right-24 w-48 h-48 bg-brand-gold/5 blur-[60px] rounded-full" />

               <div className="mb-8 flex justify-between items-center">
                  <div className="w-12 h-12 rounded-xl bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center">
                     <Quote className="w-5 h-5 text-brand-gold" />
                  </div>
                  <div className="flex gap-1">
                     {[...Array(5)].map((_, i) => (
                       <Star key={i} className="w-3 h-3 fill-brand-gold text-brand-gold" />
                     ))}
                  </div>
               </div>

               <blockquote className="text-[22px] lg:text-[24px] font-medium leading-[1.5] text-white/90 mb-10 tracking-tight">
                  “OYEN GRID has fundamentally transformed our delivery architecture. We now orchestrate complex fellowship programmes with a level of precision and human connection that was previously impossible.”
               </blockquote>

               <div className="flex items-center justify-between border-t border-white/5 pt-8">
                  <div className="flex items-center gap-4">
                    <div className="relative w-14 h-14 rounded-full overflow-hidden border border-brand-gold/30 bg-white/5 p-1">
                       <div className="relative w-full h-full rounded-full overflow-hidden">
                          <Image src="/exec-avatar-1.png" alt="Amina Yusuf" fill className="object-cover grayscale" />
                       </div>
                    </div>
                    <div>
                       <div className="flex items-center gap-2">
                          <span className="text-[16px] font-bold text-white">Dr. Amina Yusuf</span>
                          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
                       </div>
                       <div className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em]">Director, AfriSocial Africa</div>
                    </div>
                  </div>
                  <div className="hidden sm:block">
                     <div className="px-2 py-1 rounded bg-white/5 border border-white/10 flex items-center gap-1.5">
                        <Fingerprint className="w-3 h-3 text-brand-gold/40" />
                        <span className="text-[8px] font-black text-white/20 uppercase tracking-widest">Verified ID</span>
                     </div>
                  </div>
               </div>
            </motion.div>
          </div>

          {/* RIGHT SIDE (60%): OPERATIONAL IMPACT DASHBOARD */}
          <div className="relative">
            <div className="space-y-6 mb-16">
              <div className="flex items-center gap-3">
                 <div className="h-px w-8 bg-brand-gold/40" />
                 <span className="text-[11px] font-black text-brand-gold uppercase tracking-[0.4em]">MEASURABLE IMPACT</span>
              </div>
              <h2 className="text-[48px] lg:text-[60px] font-bold text-white leading-[1.05] tracking-tighter">
                Operational outcomes at <br />
                <span className="text-brand-gold italic font-serif">institutional scale.</span>
              </h2>
            </div>

            {/* Staggered Metric Hierarchy */}
            <div className="grid sm:grid-cols-2 gap-x-16 gap-y-12">
               {metrics.map((m, i) => (
                 <motion.div 
                   key={i}
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: i * 0.1 }}
                   className="relative group"
                 >
                    <div className="flex items-center gap-6">
                       <div className="space-y-1">
                          <div className={cn(
                            "text-[44px] font-bold tracking-tighter leading-none transition-colors duration-500",
                            m.color === "brand-gold" ? "text-white group-hover:text-brand-gold" : "text-white group-hover:text-emerald-500"
                          )}>
                             {m.val}
                          </div>
                          <div className="text-[12px] font-bold text-white/60 tracking-tight">{m.label}</div>
                          <div className="flex items-center gap-1.5 pt-1">
                             <div className={cn("w-1 h-1 rounded-full animate-pulse", m.color === "brand-gold" ? "bg-brand-gold" : "bg-emerald-500")} />
                             <span className="text-[8px] font-black uppercase text-white/20 tracking-widest">{m.trend}</span>
                          </div>
                       </div>
                       
                       {/* SVG Trace Visual */}
                       <div className="flex-1 h-12 opacity-20 group-hover:opacity-40 transition-opacity">
                          <svg className="w-full h-full" viewBox="0 0 100 40">
                             <motion.path 
                               initial={{ pathLength: 0 }}
                               whileInView={{ pathLength: 1 }}
                               transition={{ duration: 2, delay: 0.5 + (i * 0.2) }}
                               d="M0 35 Q25 35 50 15 T100 5" 
                               fill="none" 
                               stroke={m.color === "brand-gold" ? "#F5B942" : "#10B981"} 
                               strokeWidth="1.5" 
                             />
                          </svg>
                       </div>
                    </div>
                    
                    {/* Horizontal Divider */}
                    <div className="absolute -bottom-4 left-0 right-0 h-px bg-white/5" />
                 </motion.div>
               ))}
            </div>

            {/* Dashboard Telemetry Detail */}
            <div className="absolute top-0 right-0 opacity-5 pointer-events-none select-none">
               <div className="text-[80px] font-black text-white leading-none">IMPACT</div>
            </div>
          </div>
        </div>

        {/* BOTTOM INFRASTRUCTURE TRUST BAR */}
        <div className="mt-32 relative">
           <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
           <div className="flex flex-wrap justify-between items-center gap-10 py-10">
              {trustIndicators.map((item, i) => (
                <div key={i} className="flex items-center gap-3 group cursor-pointer">
                   <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-center group-hover:bg-brand-gold/5 group-hover:border-brand-gold/30 transition-all duration-500">
                      <item.icon className="w-4 h-4 text-white/30 group-hover:text-brand-gold transition-colors" />
                   </div>
                   <div className="space-y-0.5">
                      <span className="text-[11px] font-bold text-white/40 group-hover:text-white/80 block transition-colors">{item.text}</span>
                      <div className="h-0.5 w-0 bg-brand-gold/40 group-hover:w-full transition-all duration-500" />
                   </div>
                </div>
              ))}
              
              <div className="flex items-center gap-3 px-5 py-2 rounded-full bg-white/[0.02] border border-white/5">
                 <div className="flex -space-x-2">
                    {[1, 2, 3].map((_, i) => (
                      <div key={i} className="w-6 h-6 rounded-full border border-[#020408] bg-white/10 flex items-center justify-center text-[8px] font-bold text-white/40">
                         {i + 1}
                      </div>
                    ))}
                 </div>
                 <span className="text-[9px] font-black uppercase tracking-widest text-brand-gold/60">Institutional_Validated</span>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
}
