"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, Server, Users, MonitorPlay, FileStack, TrendingUp, Activity, BarChart3, Zap } from "lucide-react";

export function CoreValueSections() {
  return (
    <div className="bg-[#0B0B0D] relative">
      
      {/* 4. UNIFIED SYSTEM FOR DELIVERY (Image LEFT | Text RIGHT) */}
      <section className="py-32 bg-[#0B0B0D] overflow-hidden relative border-t border-white/5">
        {/* Background: Blurred office workspace */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/team_working_late_focused_1778083119_png_1778093273731.png" 
            alt="Office workspace background" 
            fill 
            className="object-cover opacity-10 grayscale blur-[40px] scale-110"
          />
        </div>

        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
          
          {/* Left: Dashboard UI */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: -30 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative order-2 lg:order-1"
          >
            <div className="absolute -inset-16 bg-[#F5B942] opacity-[0.1] blur-[140px] rounded-full" />
            <div className="relative p-1 bg-white/5 rounded-[40px] shadow-2xl overflow-hidden ring-1 ring-white/10 group">
              <div className="relative aspect-[4/3] bg-[#0D0D10] rounded-[39px] overflow-hidden border border-white/10">
                 <Image 
                  src="/oyen_grid_hero_ui_mockup_1778080275_png_1778079895843.png" 
                  alt="Unified System Dashboard" 
                  fill
                  className="object-cover opacity-90 transition-transform duration-1000 group-hover:scale-105"
                />
              </div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-[#F5B942]/10 border border-[#F5B942]/20 text-[#F5B942] text-[10px] font-bold tracking-widest uppercase mb-8">
              Operational Intelligence
            </div>
            <h2 className="text-[40px] md:text-[52px] font-bold text-white tracking-tight leading-[1.05] mb-8">
              A unified system for <br />
              <span className="text-[#F5B942]">high-performance delivery</span>
            </h2>
            <div className="space-y-8">
              {[
                { title: "Real-time Program Monitoring", icon: TrendingUp },
                { title: "Automated Workflow Engines", icon: Zap },
                { title: "Centralised Operational Data", icon: BarChart3 }
              ].map((item) => (
                <div key={item.title} className="flex gap-5 group">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center shrink-0 group-hover:bg-[#F5B942]/10 transition-all">
                    <item.icon className="w-4 h-4 text-[#71717A] group-hover:text-[#F5B942]" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-[18px] mb-1 group-hover:text-[#F5B942] transition-colors">{item.title}</h4>
                    <p className="text-[#71717A] text-[15px] leading-relaxed font-light">Unify fragmented data streams into a single source of truth.</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 5. BUILT FOR SCALE AND STRUCTURE (Centered) */}
      <section className="py-32 border-t border-white/5 relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-[32px] md:text-[44px] font-bold text-white tracking-tight">
              Built for scale and structure
            </h2>
            <div className="w-16 h-1 bg-[#F5B942] mx-auto mt-6 opacity-30 rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: MonitorPlay, title: "Orchestration" },
              { icon: Server, title: "Data Systems" },
              { icon: Users, title: "Talent Ops" },
              { icon: FileStack, title: "Social Impact" }
            ].map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group p-8 rounded-[24px] bg-white/[0.02] border border-white/5 hover:border-[#F5B942]/30 transition-all text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 mx-auto group-hover:bg-[#F5B942]/10 transition-all">
                  <card.icon className="w-5 h-5 text-[#71717A] group-hover:text-[#F5B942]" />
                </div>
                <h4 className="text-white font-bold text-lg mb-2">{card.title}</h4>
                <p className="text-[#71717A] text-[14px] leading-relaxed">Enterprise-grade tools built for internal development at scale.</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
