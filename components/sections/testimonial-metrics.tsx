"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export function TestimonialMetrics() {
  return (
    <div className="bg-background">
      
      {/* TESTIMONIAL / METRICS PANEL (LIGHT CARD) */}
      <section className="py-32">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#FAFAFA] rounded-[32px] p-12 lg:p-24 shadow-2xl relative overflow-hidden"
          >
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              
              {/* Metrics */}
              <div className="lg:col-span-5 grid grid-cols-1 gap-12">
                {[
                  { val: "2x", label: "Cohort Growth" },
                  { val: "40%", label: "Efficiency Gains" }
                ].map((m, i) => (
                  <div key={i} className="flex items-center gap-6 group">
                    <div className="text-7xl font-black text-black tracking-tighter group-hover:text-accent transition-colors">{m.val}</div>
                    <div className="text-gray-500 text-sm font-bold uppercase tracking-wider max-w-[100px] leading-tight">{m.label}</div>
                  </div>
                ))}
              </div>

              {/* Quote */}
              <div className="lg:col-span-7 lg:border-l border-gray-200 lg:pl-16">
                <Quote className="w-16 h-16 text-accent/20 mb-10" />
                <p className="text-3xl font-medium text-black leading-tight tracking-tight mb-12 italic">
                  &quot;OYEN GRID hasn&apos;t just improved our operations; it has redefined how we think about scale and governance.&quot;
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full overflow-hidden bg-gray-200">
                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d" alt="Avatar" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <div className="font-bold text-black text-lg">Marcus Wright</div>
                    <div className="text-gray-400 text-xs font-bold uppercase tracking-widest">Director of Scale, OpsHub</div>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      </section>

      {/* PRICING SECTION (SIMPLE) */}
      <section className="py-32 border-t border-white/5 text-center">
        <div className="container-custom">
          <h2 className="text-4xl font-bold mb-6">Simple, transparent pricing.</h2>
          <p className="text-text-secondary font-light max-w-lg mx-auto mb-12">
            One platform, every feature included. Built to scale with your program&apos;s growth.
          </p>
          <button className="btn-primary px-12 py-5 text-lg">View Our Plans</button>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="py-48 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1497215728101-856f4ea42174" 
            alt="Office workspace" 
            className="w-full h-full object-cover opacity-30 grayscale blur-sm"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
        </div>

        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-12">
              Structure your programme <br />
              <span className="text-accent">with confidence.</span>
            </h2>
            <div className="flex justify-center gap-6">
              <button className="btn-primary px-12 py-5 text-lg">Start Building Today</button>
              <button className="btn-outline px-12 py-5 text-lg">Talk to Sales</button>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
