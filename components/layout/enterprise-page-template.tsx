"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Globe, Shield, Zap, Activity, Cpu, Network, Database, type LucideIcon } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface EnterprisePageTemplateProps {
  title: string;
  subtitle: string;
  description: string;
  focusAreas: {
    title: string;
    desc: string;
    icon: LucideIcon;
  }[];
  metrics: {
    label: string;
    value: string;
    trend?: string;
  }[];
  category: string;
}

export function EnterprisePageTemplate({
  title,
  subtitle,
  description,
  focusAreas,
  metrics,
  category
}: EnterprisePageTemplateProps) {
  return (
    <div className="min-h-screen bg-[#02040A] text-white pt-[120px] pb-24 overflow-hidden">
      {/* Background Cinematic Atmosphere */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] bg-[radial-gradient(circle_at_50%_-20%,rgba(232,184,74,0.05),transparent_70%)]" />
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.02] mix-blend-overlay" />
      </div>

      <div className="max-w-[1400px] mx-auto px-8 relative z-10">
        {/* BREADCRUMB */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2 mb-8 text-[11px] font-black uppercase tracking-[0.2em] text-[#E8B84A]/60"
        >
          <Link href="/" className="hover:text-[#E8B84A] transition-colors">Home</Link>
          <span className="opacity-20">/</span>
          <Link href={`/${category.toLowerCase()}`} className="hover:text-[#E8B84A] transition-colors">{category}</Link>
          <span className="opacity-20">/</span>
          <span className="text-[#E8B84A]">{title}</span>
        </motion.div>

        {/* HERO SECTION */}
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8B84A]/5 border border-[#E8B84A]/10 mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-[#E8B84A] animate-pulse" />
              <span className="text-[10px] font-black text-[#E8B84A] uppercase tracking-widest">{subtitle}</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold leading-[1.1] mb-8 tracking-tight bg-gradient-to-br from-white via-white to-white/40 bg-clip-text text-transparent">
              {title}
            </h1>
            <p className="text-xl text-white/50 leading-relaxed mb-10 max-w-[600px] font-medium">
              {description}
            </p>
            <div className="flex items-center gap-6">
              <button className="h-[48px] px-8 rounded-xl bg-[#E8B84A] text-black text-[12px] font-black uppercase tracking-widest hover:shadow-[0_0_30px_rgba(232,184,74,0.3)] transition-all hover:scale-[1.02]">
                Start Deployment
              </button>
              <button className="h-[48px] px-8 rounded-xl bg-white/5 border border-white/10 text-white text-[12px] font-black uppercase tracking-widest hover:bg-white/10 transition-all">
                Request Demo
              </button>
            </div>
          </motion.div>

          {/* HERO VISUAL: TELEMETRY MOCKUP */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square rounded-[40px] bg-gradient-to-br from-white/[0.03] to-transparent border border-white/10 p-8 relative overflow-hidden group">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(232,184,74,0.08),transparent_70%)]" />
              
              {/* Fake Dashboard Elements */}
              <div className="grid grid-cols-2 gap-4 h-full">
                <div className="space-y-4">
                  <div className="h-[140px] rounded-2xl bg-white/[0.02] border border-white/5 p-4">
                     <div className="flex items-center justify-between mb-4">
                        <div className="w-2 h-2 rounded-full bg-[#E8B84A]" />
                        <span className="text-[9px] font-black text-white/20 uppercase tracking-widest">Live Telemetry</span>
                     </div>
                     <div className="h-full flex items-end gap-1 pb-8">
                        {[40, 70, 45, 90, 65, 80, 55].map((h, i) => (
                          <div key={i} className="flex-1 bg-white/5 rounded-t-sm" style={{ height: `${h}%` }} />
                        ))}
                     </div>
                  </div>
                  <div className="h-[200px] rounded-2xl bg-white/[0.02] border border-white/5 p-4 flex flex-col justify-between">
                     <Activity className="w-8 h-8 text-[#E8B84A]/40" />
                     <div className="space-y-2">
                        <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                           <div className="h-full w-2/3 bg-[#E8B84A]" />
                        </div>
                        <div className="flex justify-between text-[10px] font-bold text-white/20">
                           <span>SYNC RATE</span>
                           <span>98.4%</span>
                        </div>
                     </div>
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                   <div className="flex-1 rounded-2xl bg-white/[0.02] border border-white/5 p-4 flex flex-col items-center justify-center text-center">
                      <Cpu className="w-10 h-10 text-[#E8B84A] mb-4 opacity-40" />
                      <span className="text-[24px] font-bold">142ms</span>
                      <span className="text-[10px] font-black text-white/20 uppercase tracking-widest mt-1">Operational Latency</span>
                   </div>
                   <div className="h-[120px] rounded-2xl bg-[#E8B84A]/5 border border-[#E8B84A]/20 p-4">
                      <div className="flex items-center gap-2 mb-2">
                         <div className="w-1.5 h-1.5 rounded-full bg-[#E8B84A] animate-pulse" />
                         <span className="text-[9px] font-black text-[#E8B84A] uppercase tracking-widest">Global Sync</span>
                      </div>
                      <div className="flex items-center gap-1">
                         <Globe className="w-12 h-12 text-[#E8B84A] opacity-20" />
                         <div className="flex -space-x-2">
                            {[1,2,3].map(i => <div key={i} className="w-6 h-6 rounded-full bg-white/5 border border-white/10" />)}
                         </div>
                      </div>
                   </div>
                </div>
              </div>

              {/* Animated Connection Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
                <motion.path 
                  d="M0 100 Q 200 200 400 100 T 800 200" 
                  fill="none" 
                  stroke="#E8B84A" 
                  strokeWidth="1" 
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
              </svg>
            </div>
            
            {/* Ambient Glow Bloom */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#E8B84A]/10 blur-[100px] rounded-full pointer-events-none" />
          </motion.div>
        </div>

        {/* METRICS STRIP */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-40">
          {metrics.map((m, i) => (
            <motion.div 
              key={m.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors group"
            >
              <div className="text-[10px] font-black text-white/20 uppercase tracking-[0.3em] mb-4 group-hover:text-[#E8B84A]/40 transition-colors">
                {m.label}
              </div>
              <div className="text-4xl font-bold mb-2">
                {m.value}
              </div>
              {m.trend && (
                <div className="text-[11px] font-bold text-[#E8B84A] flex items-center gap-1">
                  <ArrowRight className="w-3 h-3 -rotate-45" />
                  {m.trend}
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* FOCUS AREAS / CAPABILITIES */}
        <div className="mb-40">
           <div className="flex flex-col items-center text-center mb-20">
              <span className="text-[11px] font-black text-[#E8B84A] uppercase tracking-[0.4em] mb-4">Capabilities</span>
              <h2 className="text-4xl lg:text-5xl font-bold tracking-tight max-w-2xl leading-tight">
                Institutional-grade operational coordination systems.
              </h2>
           </div>

           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {focusAreas.map((area, i) => (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 rounded-[32px] bg-white/[0.02] border border-white/5 hover:bg-white/[0.03] hover:border-white/10 transition-all group relative overflow-hidden"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#E8B84A]/5 border border-[#E8B84A]/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                    <area.icon className="w-6 h-6 text-[#E8B84A]" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 group-hover:text-[#E8B84A] transition-colors">{area.title}</h3>
                  <p className="text-white/40 text-[14px] leading-relaxed mb-8">
                    {area.desc}
                  </p>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#E8B84A]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>
              ))}
           </div>
        </div>

        {/* INSTITUTIONAL CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-16 rounded-[48px] bg-gradient-to-br from-[#E8B84A]/10 via-transparent to-transparent border border-[#E8B84A]/20 relative overflow-hidden text-center"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(232,184,74,0.1),transparent_70%)]" />
          <div className="relative z-10">
             <span className="text-[11px] font-black text-[#E8B84A] uppercase tracking-[0.4em] mb-8 block">Global Infrastructure</span>
             <h2 className="text-5xl lg:text-6xl font-bold mb-10 tracking-tight">
               Deploy Operational <br /> Infrastructure Today.
             </h2>
             <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <button className="h-[56px] px-12 rounded-2xl bg-[#E8B84A] text-black text-[14px] font-black uppercase tracking-widest hover:shadow-[0_20px_40px_rgba(232,184,74,0.3)] transition-all">
                  Request Institutional Access
                </button>
                <button className="h-[56px] px-12 rounded-2xl bg-white/5 border border-white/10 text-white text-[14px] font-black uppercase tracking-widest hover:bg-white/10 transition-all">
                   Contact Enterprise Sales
                </button>
             </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
