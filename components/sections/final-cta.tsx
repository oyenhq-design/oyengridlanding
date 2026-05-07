"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/cta-bg.png" 
          alt="CTA Background" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#040816] via-transparent to-[#040816]" />
      </div>

      <div className="container-custom relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-white mb-8">
            Enter the <span className="text-gold-gradient italic">Operating System.</span>
          </h2>
          
          <p className="text-white/60 text-[20px] mb-12">
            Deploy the infrastructure for absolute operational excellence. Built for the world's most complex programme delivery networks.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <button className="btn-gold px-12 h-14">Deploy Infrastructure</button>
            <button className="flex items-center gap-3 text-white/40 hover:text-white font-bold text-[14px] transition-all group uppercase tracking-widest">
              Speak with Architects <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
