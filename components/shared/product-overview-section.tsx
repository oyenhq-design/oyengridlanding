"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const features = [
  "Centralised dashboard for total operational visibility",
  "Automated workflows to eliminate manual bottlenecks",
  "Real-time analytics and predictive performance tracking",
  "Enterprise-grade security and role-based access"
];

export function ProductOverviewSection() {
  return (
    <section className="py-24 bg-[#111111] overflow-hidden relative border-t border-neutral-800">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#D4AF37] opacity-[0.02] blur-[100px] rounded-full pointer-events-none -translate-y-1/2 -translate-x-1/4" />

      <div className="relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          
          {/* Left Side: UI Analytics/Dashboard with Gold Lines */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="order-2 lg:order-1 relative w-full aspect-[4/3] rounded-2xl border border-[#27272A] bg-[#0F0F11] shadow-[0_0_50px_rgba(212,175,55,0.05)] overflow-hidden flex flex-col p-6"
          >
             <div className="absolute inset-0 bg-gradient-to-tr from-[#1A1A1D] to-[#0B0B0C] opacity-80" />
             
             {/* Mockup Top Bar */}
             <div className="relative z-10 flex justify-between items-center mb-8 border-b border-[#27272A] pb-4">
               <div className="flex gap-4 items-center">
                 <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center border border-[#D4AF37]/30">
                   <div className="w-5 h-5 border-2 border-[#D4AF37] rounded-sm" />
                 </div>
                 <div>
                   <div className="text-white font-medium text-sm">Analytics Engine</div>
                   <div className="text-[#A1A1AA] text-xs">Real-time metrics</div>
                 </div>
               </div>
               <div className="flex gap-2">
                 <div className="w-8 h-8 rounded-full border border-[#27272A] flex items-center justify-center bg-[#141417]">
                   <span className="w-1 h-1 bg-[#A1A1AA] rounded-full mx-[1px]" /><span className="w-1 h-1 bg-[#A1A1AA] rounded-full mx-[1px]" /><span className="w-1 h-1 bg-[#A1A1AA] rounded-full mx-[1px]" />
                 </div>
               </div>
             </div>
 
             {/* Mockup Chart Area */}
             <div className="relative z-10 flex-1 flex flex-col justify-end pb-4">
               {/* Grid Lines */}
               <div className="absolute inset-0 flex flex-col justify-between pt-4 pb-8">
                 <div className="border-t border-[#27272A]/50 w-full" />
                 <div className="border-t border-[#27272A]/50 w-full" />
                 <div className="border-t border-[#27272A]/50 w-full" />
                 <div className="border-t border-[#27272A]/50 w-full" />
               </div>
 
               {/* SVG Gold Line Chart */}
               <svg viewBox="0 0 400 200" className="w-full h-full absolute inset-0 pt-4 pb-8 z-10 overflow-visible" preserveAspectRatio="none">
                 <defs>
                   <linearGradient id="goldGradient" x1="0" y1="0" x2="0" y2="1">
                     <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.4" />
                     <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
                   </linearGradient>
                 </defs>
                 
                 {/* Area Fill */}
                 <path 
                   d="M0,150 L50,120 L100,130 L150,80 L200,90 L250,40 L300,50 L350,10 L400,20 L400,200 L0,200 Z" 
                   fill="url(#goldGradient)" 
                 />
                 
                 {/* Gold Line */}
                 <path 
                   d="M0,150 L50,120 L100,130 L150,80 L200,90 L250,40 L300,50 L350,10 L400,20" 
                   fill="none" 
                   stroke="#D4AF37" 
                   strokeWidth="3" 
                   className="drop-shadow-[0_0_8px_rgba(212,175,55,0.8)]"
                 />
                 
                 {/* Data Points */}
                 <circle cx="150" cy="80" r="4" fill="#0B0B0C" stroke="#D4AF37" strokeWidth="2" />
                 <circle cx="250" cy="40" r="4" fill="#0B0B0C" stroke="#D4AF37" strokeWidth="2" />
                 <circle cx="350" cy="10" r="4" fill="#0B0B0C" stroke="#D4AF37" strokeWidth="2" />
                 <circle cx="350" cy="10" r="12" fill="none" stroke="#D4AF37" strokeWidth="1" className="animate-ping opacity-50" />
               </svg>
               
               {/* X Axis Labels */}
               <div className="absolute bottom-0 w-full flex justify-between text-[10px] text-[#A1A1AA] font-mono px-2">
                 <span>Q1</span><span>Q2</span><span>Q3</span><span>Q4</span>
               </div>
             </div>
 
             {/* Floating Stat Card */}
             <motion.div 
               animate={{ y: [0, -8, 0] }}
               transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
               className="absolute right-8 top-1/3 bg-[#121214]/90 backdrop-blur-md border border-[#D4AF37]/30 rounded-xl p-4 shadow-[0_10px_30px_rgba(0,0,0,0.8)] z-20 w-48"
             >
               <div className="text-[#A1A1AA] text-xs mb-1 uppercase tracking-wider">Efficiency Gain</div>
               <div className="text-white text-2xl font-semibold flex items-center gap-2">
                 +42%
                 <span className="text-[#D4AF37] text-sm">↑</span>
               </div>
             </motion.div>
 
          </motion.div>
 
          {/* Right Side: Text Explanation + Bullet Points */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
            className="order-1 lg:order-2 flex flex-col text-left"
          >
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="w-8 h-[1px] bg-[#D4AF37]"></div>
              <span className="text-[#D4AF37] uppercase tracking-widest text-[12px] font-semibold">System Capabilities</span>
            </div>
            
            <h2 className="text-[36px] md:text-[48px] font-bold text-white leading-[1.1] tracking-tight mb-6">
              A structured programme operating system.
            </h2>
            
            <p className="text-lg text-[#A1A1AA] leading-relaxed mb-10 font-light">
              Stop relying on disjointed spreadsheets and isolated tools. OYEN GRID brings all your operational data, resource management, and execution tracking into one unified, high-fidelity source of truth.
            </p>
 
            <ul className="space-y-6">
              {features.map((feature, idx) => (
                <motion.li 
                  key={idx} 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.3 + idx * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-6 h-6 rounded-full bg-[#121214] border border-[#D4AF37]/30 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                  </div>
                  <span className="text-[16px] text-white/90 leading-tight pt-0.5">
                    {feature}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
