"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { 
  Quote, Star, ShieldCheck, Lock, CheckCircle, 
  Database, ArrowRight, Activity, Zap
} from "lucide-react";
import { cn } from "@/lib/utils";

const metrics = [
  { val: "+340%", label: "Operational Efficiency" },
  { val: "-82%", label: "Manual Coordination" },
  { val: "-64%", label: "Reporting Overhead" },
  { val: "99.9%", label: "System Reliability" }
];

const trustIndicators = [
  { icon: ShieldCheck, text: "Enterprise-grade Security" },
  { icon: Lock, text: "Role-based Access" },
  { icon: CheckCircle, text: "Compliance Ready" },
  { icon: Database, text: "Data Protection" }
];

export function InstitutionalImpact() {
  return (
    <section className="py-24 bg-[#020408] relative overflow-hidden border-b border-white/5">
      
      {/* Background Cinematic Atmosphere */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[800px] h-[400px] bg-brand-gold/[0.02] blur-[140px] rounded-full" />
        <div className="absolute inset-0 opacity-[0.02] grayscale" style={{ backgroundImage: "url('/noise.png')", backgroundSize: "100px 100px" }} />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-16 items-center">
          
          {/* LEFT SIDE: PREMIUM TESTIMONIAL PANEL */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group relative"
          >
            <div className="absolute inset-[-1px] bg-gradient-to-br from-brand-gold/20 via-transparent to-transparent rounded-[32px] opacity-40" />
            <div className="relative p-10 lg:p-14 rounded-[32px] bg-[#0A0D16]/60 border border-white/10 backdrop-blur-3xl shadow-[0_40px_100px_rgba(0,0,0,0.8)] overflow-hidden">
               
               {/* Ambient Card Light */}
               <div className="absolute top-0 left-0 w-64 h-64 bg-brand-gold/[0.05] blur-[80px] rounded-full" />
               
               <div className="mb-10 inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-brand-gold/10 border border-brand-gold/20">
                  <Quote className="w-6 h-6 text-brand-gold" />
               </div>

               <blockquote className="text-[24px] lg:text-[28px] font-medium leading-[1.4] text-white/90 mb-12 tracking-tight">
                  “OYEN GRID has fundamentally transformed our delivery architecture. We now orchestrate complex fellowship programmes with a level of precision and human connection that was previously impossible.”
               </blockquote>

               <div className="flex items-center justify-between border-t border-white/5 pt-10">
                  <div className="flex items-center gap-5">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-brand-gold/20 bg-white/5">
                       <Image 
                         src="/exec-avatar-1.png" 
                         alt="Dr. Amina Yusuf" 
                         fill 
                         className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                       />
                    </div>
                    <div>
                       <div className="text-[18px] font-bold text-white tracking-tight">Dr. Amina Yusuf</div>
                       <div className="text-[12px] font-black text-white/30 uppercase tracking-[0.2em]">Director of Programmes, AfriSocial Africa</div>
                    </div>
                  </div>
                  <div className="hidden sm:flex gap-1">
                     {[...Array(5)].map((_, i) => (
                       <Star key={i} className="w-3.5 h-3.5 fill-brand-gold text-brand-gold" />
                     ))}
                  </div>
               </div>

               {/* Reflection Layer */}
               <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            </div>
          </motion.div>

          {/* RIGHT SIDE: MEASURABLE IMPACT METRICS */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="space-y-4">
              <span className="text-[12px] font-black text-brand-gold uppercase tracking-[0.4em] mb-4 block">MEASURABLE IMPACT</span>
              <h2 className="text-[44px] lg:text-[52px] font-bold text-white leading-[1.1] tracking-tighter max-w-[500px]">
                Operational outcomes at <span className="text-brand-gold italic font-serif">institutional scale.</span>
              </h2>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 gap-x-12 gap-y-10 relative">
               {metrics.map((m, i) => (
                 <div key={i} className="relative group">
                    <div className="space-y-2">
                       <div className="text-[48px] font-bold text-white tracking-tighter leading-none flex items-center gap-3">
                          {m.val}
                          <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: "20px" }}
                            className="h-px bg-brand-gold/40"
                          />
                       </div>
                       <div className="text-[11px] font-black uppercase tracking-[0.15em] text-white/30 group-hover:text-white/60 transition-colors">
                          {m.label}
                       </div>
                    </div>
                    {/* Telemetry Dots */}
                    <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-brand-gold/40 opacity-0 group-hover:opacity-100 transition-opacity" />
                 </div>
               ))}
            </div>
          </motion.div>
        </div>

        {/* BOTTOM TRUST ROW */}
        <div className="mt-24 pt-12 border-t border-white/5">
           <div className="flex flex-wrap justify-between items-center gap-8">
              {trustIndicators.map((item, i) => (
                <div key={i} className="flex items-center gap-3 group cursor-default">
                   <div className="w-8 h-8 rounded-lg bg-white/[0.03] border border-white/5 flex items-center justify-center group-hover:border-brand-gold/30 transition-all duration-500">
                      <item.icon className="w-3.5 h-3.5 text-white/40 group-hover:text-brand-gold transition-colors" />
                   </div>
                   <span className="text-[11px] font-bold text-white/30 uppercase tracking-widest group-hover:text-white/60 transition-colors">
                      {item.text}
                   </span>
                </div>
              ))}
              <div className="h-px flex-1 bg-gradient-to-r from-white/5 to-transparent hidden xl:block mx-12" />
              <div className="flex items-center gap-2 text-[10px] font-black text-brand-gold uppercase tracking-widest opacity-60">
                 <Zap className="w-3 h-3 animate-pulse" />
                 <span>Infrastructure Active</span>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
}
