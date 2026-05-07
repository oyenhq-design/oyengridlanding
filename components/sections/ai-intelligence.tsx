"use client";

import { motion } from "framer-motion";
import { Brain, Sparkles, Activity, ArrowRight } from "lucide-react";

export function AIIntelligence() {
  return (
    <section className="py-40 bg-[#0B0F14] relative overflow-hidden">
      
      {/* Background Atmosphere */}
      <div className="absolute inset-0 z-0">
         <img 
           src="/ai-intel.png" 
           alt="AI Infrastructure" 
           className="w-full h-full object-cover opacity-10 grayscale"
         />
         <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F14] via-transparent to-[#0B0F14]" />
      </div>

      <div className="container-custom max-w-[1400px] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <div className="flex items-center gap-3 mb-8">
               <Brain className="w-5 h-5 text-accent" />
               <span className="text-accent text-[11px] font-black tracking-[0.4em] uppercase">DATA INTELLIGENCE</span>
            </div>
            <h2 className="text-[32px] md:text-[40px] font-bold text-white tracking-tight leading-tight mb-10">
              AI-driven <br />
              <span className="text-gold-gradient italic">operational intelligence.</span>
            </h2>
            <p className="text-[17px] text-white/50 font-light leading-relaxed mb-12">
              OYEN GRID leverages advanced AI infrastructure to provide predictive programme insights, automated grading workflows, and intelligent participant tracking.
            </p>
            
            <div className="space-y-12">
               {[
                 { title: "Predictive Health Scoring", desc: "Identify cohorts or participants at risk before performance dips.", icon: Sparkles },
                 { title: "Automated Grading Engine", desc: "Scale assessment delivery with intelligent feedback loops.", icon: Activity },
                 { title: "Operational Forecasting", desc: "Predict programme completion rates and ROI based on live data.", icon: Brain }
               ].map((item, i) => (
                 <div key={i} className="flex gap-6 group">
                   <div className="w-12 h-12 rounded-xl bg-accent/5 border border-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:border-accent transition-all">
                      <item.icon className="w-5 h-5 text-accent group-hover:text-black transition-colors" />
                   </div>
                   <div>
                      <h4 className="text-lg font-bold text-white mb-2 tracking-tight group-hover:text-accent transition-colors">{item.title}</h4>
                      <p className="text-white/40 text-[15px] font-light leading-relaxed max-w-sm">{item.desc}</p>
                   </div>
                 </div>
               ))}
            </div>
          </motion.div>

          {/* Right: AI Visual Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
             <div className="relative group">
                <div className="absolute -inset-10 bg-accent/10 blur-[120px] rounded-full pointer-events-none opacity-40" />
                <div className="relative rounded-[32px] overflow-hidden border border-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.8)] bg-black">
                   <img 
                     src="/ai-intel.png" 
                     alt="AI Dashboard" 
                     className="w-full h-auto opacity-90 group-hover:scale-105 transition-transform duration-1000"
                   />
                   
                   {/* Holographic Element Hint */}
                   <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,179,1,0.1),transparent_70%)] pointer-events-none" />
                </div>
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
