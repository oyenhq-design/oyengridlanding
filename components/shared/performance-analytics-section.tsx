"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

export function PerformanceAnalyticsSection() {
  return (
    <section className="py-24 md:py-32 bg-[#0B0B0C] relative overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#D4AF37] opacity-[0.02] blur-[150px] rounded-full pointer-events-none translate-x-1/3 -translate-y-1/3" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          
          {/* Left Side: Text Block */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col text-left"
          >
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="w-8 h-[1px] bg-[#D4AF37]"></div>
              <span className="text-[#D4AF37] uppercase tracking-widest text-[12px] font-semibold">Data & Analytics</span>
            </div>
            
            <h2 className="text-[36px] md:text-[48px] font-bold text-white leading-[1.1] tracking-tight mb-6">
              Performance insights that matter.
            </h2>
            
            <p className="text-lg text-[#A1A1AA] leading-relaxed mb-8 font-light">
              Make data-driven decisions with real-time analytics. Exportable, granular insights on every metric that is critical to your programme's operational success.
            </p>

            <ul className="space-y-4 mb-10 text-[#A1A1AA]">
              {[
                "Automated compliance reporting",
                "Predictive completion forecasting",
                "Custom metric dashboards"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-base">
                  <CheckCircle2 className="w-5 h-5 text-[#D4AF37] shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div>
              <Link 
                href="/analytics"
                className="inline-flex items-center gap-2 text-[#D4AF37] hover:text-[#E5C354] font-medium transition-colors group"
              >
                <span>Explore analytics capabilities</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* Right Side: Visual (Abstract 3D Gold Bars) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative w-full aspect-square md:aspect-[4/3] rounded-2xl border border-[#27272A] bg-[#0F0F11] shadow-[0_0_50px_rgba(212,175,55,0.05)] overflow-hidden flex items-end justify-center p-8 lg:p-12"
          >
             <div className="absolute inset-0 bg-gradient-to-tr from-[#1A1A1D] to-[#0B0B0C] opacity-80" />
             
             {/* Abstract 3D Gold Bars using CSS */}
             <div className="relative z-10 w-full h-full flex items-end justify-between gap-4 md:gap-8 pt-20">
               
               {/* Bar 1 */}
               <motion.div 
                 initial={{ height: "0%" }}
                 whileInView={{ height: "45%" }}
                 viewport={{ once: true, margin: "-100px" }}
                 transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                 className="relative flex-1 bg-[#27272A] rounded-t-sm"
               >
                 {/* Top face */}
                 <div className="absolute top-0 left-0 w-full h-4 bg-[#3f3f46] transform -translate-y-full skew-x-[45deg] origin-bottom-left" />
                 {/* Right face */}
                 <div className="absolute top-0 right-0 w-4 h-full bg-[#18181b] transform translate-x-full skew-y-[45deg] origin-top-left" />
               </motion.div>

               {/* Bar 2 */}
               <motion.div 
                 initial={{ height: "0%" }}
                 whileInView={{ height: "70%" }}
                 viewport={{ once: true, margin: "-100px" }}
                 transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
                 className="relative flex-1 bg-[#27272A] rounded-t-sm"
               >
                 <div className="absolute top-0 left-0 w-full h-4 bg-[#3f3f46] transform -translate-y-full skew-x-[45deg] origin-bottom-left" />
                 <div className="absolute top-0 right-0 w-4 h-full bg-[#18181b] transform translate-x-full skew-y-[45deg] origin-top-left" />
               </motion.div>

               {/* Bar 3 (Gold) */}
               <motion.div 
                 initial={{ height: "0%" }}
                 whileInView={{ height: "100%" }}
                 viewport={{ once: true, margin: "-100px" }}
                 transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                 className="relative flex-1 bg-gradient-to-t from-[#B8972E] to-[#D4AF37] rounded-t-sm shadow-[0_0_30px_rgba(212,175,55,0.4)]"
               >
                 {/* Top face */}
                 <div className="absolute top-0 left-0 w-full h-4 bg-[#FFF0B3] transform -translate-y-full skew-x-[45deg] origin-bottom-left" />
                 {/* Right face */}
                 <div className="absolute top-0 right-0 w-4 h-full bg-[#A38320] transform translate-x-full skew-y-[45deg] origin-top-left" />
                 
                 {/* Floating Label over Gold Bar */}
                 <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 2 }}
                    className="absolute -top-16 left-1/2 -translate-x-1/2 bg-[#121214] border border-[#D4AF37]/50 text-white px-3 py-1.5 rounded-md text-xs font-medium whitespace-nowrap shadow-[0_5px_15px_rgba(212,175,55,0.2)]"
                 >
                   Target Reached
                 </motion.div>
               </motion.div>

               {/* Bar 4 */}
               <motion.div 
                 initial={{ height: "0%" }}
                 whileInView={{ height: "85%" }}
                 viewport={{ once: true, margin: "-100px" }}
                 transition={{ duration: 1.3, delay: 0.6, ease: "easeOut" }}
                 className="relative flex-1 bg-[#27272A] rounded-t-sm"
               >
                 <div className="absolute top-0 left-0 w-full h-4 bg-[#3f3f46] transform -translate-y-full skew-x-[45deg] origin-bottom-left" />
                 <div className="absolute top-0 right-0 w-4 h-full bg-[#18181b] transform translate-x-full skew-y-[45deg] origin-top-left" />
               </motion.div>

             </div>

             {/* Grid Floor */}
             <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-[#D4AF37]/5 to-transparent pointer-events-none transform perspective-1000 rotate-x-60 origin-bottom" />
             
          </motion.div>

        </div>

      </div>
    </section>
  );
}
