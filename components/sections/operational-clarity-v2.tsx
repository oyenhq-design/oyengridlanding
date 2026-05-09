"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Shield, Activity } from "lucide-react";

export function OperationalClarityV2() {
  return (
    <section className="relative py-48 md:py-80 bg-[#040816] overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          
          {/* LEFT: CINEMATIC IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.6 }}
            className="relative"
          >
            <div className="relative rounded-[40px] overflow-hidden border border-white/10 group shadow-[0_60px_120px_rgba(0,0,0,0.6)]">
               <Image 
                 src="/intelligence-ops-room.png" 
                 alt="Global Operations Center" 
                 width={1000} 
                 height={1200} 
                 className="object-cover h-[700px] grayscale-[0.3] group-hover:grayscale-0 transition-all duration-1000"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-[#040816] via-transparent to-transparent opacity-60" />
            </div>
            
            {/* Perspective Elements */}
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-accent-gold/5 blur-[100px] -z-10" />
          </motion.div>

          {/* RIGHT: TEXT PROTOCOLS */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4 }}
            className="max-w-xl"
          >
            <div className="flex items-center gap-4 mb-12">
               <div className="h-px w-8 bg-accent-gold/40" />
               <span className="label-institutional">Operational Infrastructure</span>
            </div>
            
            <h2 className="text-white mb-10 leading-[1.05]">
              Built for operational clarity at <br />
              <span className="text-accent-gold italic font-semibold">global scale.</span>
            </h2>
            
            <p className="text-white/40 text-[18px] leading-relaxed font-light mb-16">
              Establish a single source of operational truth across distributed nodes. Our governance engine ensures every programme cycle adheres to institutional standards.
            </p>

            <div className="space-y-12">
               <div className="flex gap-8 group">
                  <div className="w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-accent-gold/60 group-hover:text-accent-gold transition-all duration-500">
                     <Shield className="w-6 h-6" />
                  </div>
                  <div>
                     <h4 className="text-white text-[20px] font-bold mb-3">Governance Logic</h4>
                     <p className="text-white/30 text-[14px] leading-relaxed">Immutable compliance frameworks baked into the delivery pipeline.</p>
                  </div>
               </div>

               <div className="flex gap-8 group">
                  <div className="w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-accent-gold/60 group-hover:text-accent-gold transition-all duration-500">
                     <Activity className="w-6 h-6" />
                  </div>
                  <div>
                     <h4 className="text-white text-[20px] font-bold mb-3">Node Integrity</h4>
                     <p className="text-white/30 text-[14px] leading-relaxed">Real-time telemetry and validation for every session delivery node.</p>
                  </div>
               </div>
            </div>

            <button className="mt-20 flex items-center gap-3 text-[13px] font-black uppercase tracking-[0.3em] text-white/30 hover:text-accent-gold transition-all group">
               Explore Architecture <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
