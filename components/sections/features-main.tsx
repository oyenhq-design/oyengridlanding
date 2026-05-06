"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { AlertCircle, Target, ArrowRightCircle, Shield, Zap, ListChecks, TrendingUp, Cpu, Network, BarChart3 } from "lucide-react";

export function FeaturesMain() {
  return (
    <div className="bg-[#0B0B0D]">
      
      {/* 5. BUILT FOR OPERATIONAL CLARITY */}
      <section className="py-32 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[40px] md:text-[56px] font-black text-white tracking-tighter leading-tight mb-6">
              Built for operational clarity <br />
              <span className="text-[#F5B942]">at massive scale.</span>
            </h2>
            <p className="text-[18px] text-[#71717A] max-w-2xl mx-auto font-light">
              Stop guessing. Start governing. A structured approach to complex programme delivery that removes fragmentation and manual overhead.
            </p>
          </motion.div>
        </div>

        <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: AlertCircle, title: "The Problem", desc: "Fragmented spreadsheets, siloed tracking, and zero structural visibility across cohorts.", color: "text-red-400" },
            { icon: Target, title: "What We Do", desc: "Unify every data point into a single, high-fidelity infrastructure for programme management.", color: "text-[#F5B942]" },
            { icon: ArrowRightCircle, title: "The Outcome", desc: "Absolute operational control, automated governance, and 2x faster scaling capabilities.", color: "text-green-400" }
          ].map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-10 hover:border-[#F5B942]/30 group"
            >
              <div className={`w-14 h-14 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                <card.icon className={`w-7 h-7 ${card.color}`} />
              </div>
              <h3 className="text-white font-bold text-2xl mb-4">{card.title}</h3>
              <p className="text-[#71717A] leading-relaxed font-light">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 6. FEATURE SPLIT SECTION (Img Left, Text Right) */}
      <section className="py-32 border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
          
          {/* LEFT: Dashboard Card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-6 relative"
          >
            <div className="relative glass-card aspect-square max-w-[500px] mx-auto overflow-hidden p-6 shadow-2xl">
              <div className="absolute inset-0 bg-[#0A0A0A]" />
              <img 
                src="https://images.unsplash.com/photo-1551288049-bbbda536639a" 
                alt="Analytics Card" 
                className="w-full h-full object-cover opacity-80 rounded-xl"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[#F5B942]/10 blur-[60px] rounded-full pointer-events-none" />
            </div>
          </motion.div>

          {/* RIGHT: Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-6"
          >
            <h2 className="text-[36px] md:text-[48px] font-black text-white leading-tight mb-8">
              A unified system for <br />
              <span className="text-[#F5B942]">high-performance delivery</span>
            </h2>
            <div className="space-y-10">
              {[
                { icon: TrendingUp, title: "Real-time performance tracking", desc: "Monitor participant engagement and programme health instantly across all modules." },
                { icon: Zap, title: "Automated workflow engine", desc: "Automate certificates, progressions, and feedback loops with zero manual intervention." },
                { icon: Shield, title: "Granular data governance", desc: "Enterprise-grade permissions and audit logs for sensitive educational and corporate data." }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 group">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center shrink-0 group-hover:bg-[#F5B942]/10 transition-all">
                    <item.icon className="w-5 h-5 text-[#71717A] group-hover:text-[#F5B942]" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-xl mb-2">{item.title}</h4>
                    <p className="text-[#71717A] font-light leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 7. BUILT FOR SCALE AND STRUCTURE */}
      <section className="py-32 bg-black/40 border-t border-white/5 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 mb-20 text-center">
          <h2 className="text-[40px] md:text-[48px] font-black text-white mb-6">Built for scale and structure</h2>
          <p className="text-[#71717A] max-w-xl mx-auto font-light">
            Deploy sophisticated infrastructures for any learning or operational use case.
          </p>
        </div>

        <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Cpu, title: "Training Orchestration", desc: "Manage cohorts, modules, and instructors in a single plane." },
            { icon: Network, title: "Data Intelligence", desc: "Advanced analytics that turn participation into operational insights." },
            { icon: BarChart3, title: "Corporate Systems", desc: "Onboard thousands of employees with structured, governed flows." },
            { icon: ListChecks, title: "ROI Programs", desc: "Measure the direct impact of every session on business outcomes." }
          ].map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-10 hover:border-[#F5B942]/30 group"
            >
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <card.icon className="w-6 h-6 text-[#71717A] group-hover:text-[#F5B942]" />
              </div>
              <h4 className="text-white font-bold text-xl mb-4">{card.title}</h4>
              <p className="text-[#71717A] text-sm leading-relaxed font-light">{card.desc}</p>
              <Link href="#" className="mt-8 flex items-center gap-2 text-[#71717A] text-[12px] font-bold uppercase tracking-widest hover:text-[#F5B942] transition-colors">
                Learn More <span className="text-[16px]">→</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
}
