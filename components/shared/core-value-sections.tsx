"use client";

import { motion } from "framer-motion";
import { TrendingUp, Activity, BarChart3, Zap } from "lucide-react";

export function CoreValueSections() {
  return (
    <div className="bg-[#0B0B0D] relative">
      <section className="py-24 bg-[#0B0B0D] overflow-hidden relative border-t border-white/5">
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Image LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-[4/3] bg-[#0D0D10] rounded-[32px] overflow-hidden border border-white/10 shadow-2xl group">
               <img 
                src="https://images.unsplash.com/photo-1531403009284-440f080d1e12" 
                alt="Unified System" 
                className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-1000"
              />
            </div>
          </motion.div>

          {/* Text RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[36px] md:text-[48px] font-bold text-white tracking-tight leading-[1.1] mb-8">
              A unified system for <br />
              <span className="text-[#F5B942]">high-performance delivery</span>
            </h2>
            <div className="space-y-8">
              {[
                { title: "Real-time Monitoring", icon: TrendingUp },
                { title: "Automated Workflow", icon: Zap },
                { title: "Centralised Data", icon: BarChart3 }
              ].map((item) => (
                <div key={item.title} className="flex gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center shrink-0 group-hover:bg-[#F5B942]/10 transition-all">
                    <item.icon className="w-4 h-4 text-[#71717A] group-hover:text-[#F5B942]" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-1">{item.title}</h4>
                    <p className="text-[#71717A] text-sm font-light">Unify fragmented data streams into a single source of truth.</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
