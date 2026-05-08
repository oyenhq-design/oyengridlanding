"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export function OperationalClarity() {
  return (
    <section className="section-padding bg-navy-light/30 border-y border-white/5 relative overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-[36px] md:text-[48px] font-bold text-white mb-10 leading-[1.1] tracking-tight">
              Built for operational clarity at <br />
              <span className="text-gold-gradient italic font-medium">global enterprise scale.</span>
            </h2>
            
            <p className="text-[17px] text-white/40 mb-12 max-w-[480px] leading-relaxed font-light">
              OYEN GRID orchestrates every layer of your programme delivery. From complex scheduling logic to granular participant tracking, our infrastructure ensures absolute structural integrity.
            </p>
            
            <div className="space-y-6 mb-12">
              {[
                "Programme Infrastructure",
                "Structural Governance",
                "Automated Scaling"
              ].map((feature, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-center group-hover:border-accent-gold/20 transition-colors">
                    <CheckCircle2 className="w-5 h-5 text-accent-gold" />
                  </div>
                  <span className="text-[15px] font-semibold text-white/80">{feature}</span>
                </div>
              ))}
            </div>

            <button className="btn-outline h-12 px-10 rounded-full font-bold">
              Learn More
            </button>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="relative rounded-[40px] overflow-hidden border border-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.8)] aspect-[4/5]">
              <img 
                src="/ops-portrait.png" 
                alt="Enterprise Operations Specialist" 
                className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/40 to-transparent" />
            </div>
            
            {/* Indicator Dots */}
            <div className="flex justify-center gap-2.5 mt-10">
               <div className="w-1.5 h-1.5 rounded-full bg-accent-gold" />
               <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
               <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
