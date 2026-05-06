"use client";

import { motion } from "framer-motion";
import { LayoutGrid, Zap, ListChecks } from "lucide-react";

export function DeepProductSections() {
  return (
    <div className="bg-[#0B0B0D]">
      <section className="py-24 relative overflow-hidden bg-[#0B0B0D] border-t border-white/5">
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
          
          {/* Text LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <h2 className="text-[36px] md:text-[48px] font-bold text-white tracking-tight leading-[1.1] mb-8">
              Engine for <br />
              <span className="text-[#F5B942]">enterprise operations</span>
            </h2>
            <div className="space-y-6">
              {[
                { title: "Curriculum Orchestration", icon: LayoutGrid },
                { title: "Automated Progression", icon: Zap },
                { title: "Structural Integrity", icon: ListChecks }
              ].map((b) => (
                <div key={b.title} className="flex items-center gap-4 group">
                  <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center group-hover:bg-[#F5B942]/10 transition-all">
                    <b.icon className="w-4 h-4 text-[#71717A] group-hover:text-[#F5B942]" />
                  </div>
                  <span className="text-[#A1A1AA] text-lg font-medium group-hover:text-white transition-colors">{b.title}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Image RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="relative aspect-video rounded-[32px] overflow-hidden border border-white/10 shadow-2xl group">
              <img loading="lazy" 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978" 
                alt="Enterprise Operations" 
                className="w-full h-full object-cover opacity-90 transition-transform duration-1000 group-hover:scale-105"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
